// Static prerender for Sanctuary Architects & Designers (Vite SPA -> SSR HTML).
//
// Run AFTER `vite build` (needs out/index.html). Generates out/<route>/index.html
// for every legitimate route by rendering the real router tree with
// renderToPipeableStream, injecting each page's <PageMeta> head values into the
// built HTML template. Routes without a matching page are not emitted, so once
// the Vercel catch-all rewrite is removed unknown URLs return a real 404.
import { readFileSync, writeFileSync, mkdirSync, existsSync, rmSync, readdirSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { Writable } from "node:stream";
import { createServer } from "vite";
import { createElement } from "react";
import { renderToPipeableStream } from "react-dom/server";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const outDir = join(root, "out");
const templatePath = join(outDir, "index.html");

const MOCK_FILES = [
  "sanctuaryProjects",
  "commercialProjects",
  "projectCollections",
  "ongoingProjects",
  "unbuiltProjects",
];

// Routes the production SPA is required to keep serving (from Phase 14C spec).
const REQUIRED_VALID = [
  "/", "/gallery", "/projects", "/projects/completed", "/projects/ongoing",
  "/projects/unbuilt", "/projects/residential", "/projects/hospitality",
  "/projects/commercial", "/projects/prefab", "/projects/residential/villa-maaya",
  "/projects/hospitality/kaze", "/projects/commercial/sanctuary-office",
  "/projects/ongoing/kabini-house", "/projects/unbuilt/etv", "/projects/unbuilt/mandala",
  "/blog", "/blog/architecture-design-process", "/blog/architecture-consultation-guide",
  "/blog/sustainable-architecture", "/about", "/testimonials", "/clients",
  "/contact", "/thank-you", "/privacy-policy", "/terms", "/cookie-policy",
];
const REQUIRED_INVALID = ["/nonexistent", "/projects/nonexistent", "/blog/non-existent-slug"];

// ---- helpers -------------------------------------------------------------

function extractQuoted(src, key) {
  const re = new RegExp(`${key}\\s*:\\s*"([^"]+)"`, "g");
  const out = [];
  let m;
  while ((m = re.exec(src))) out.push(m[1]);
  return out;
}

function escapeHtml(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function escapeAttr(value) {
  return escapeHtml(value).replace(/"/g, "&quot;");
}

function buildHeadBlock(head, seo) {
  const title = head.title || "Sanctuary Architects & Designers";
  const description = head.description || "";
  const robots = head.robots || "index, follow";
  const canonical = head.canonical;
  const image = head.ogImage || seo.DEFAULT_OG_IMAGE;
  const ogType = head.ogType || "website";
  const lines = [
    `<title>${escapeHtml(title)}</title>`,
    `<meta name="description" content="${escapeAttr(description)}" />`,
  ];
  if (head.keywords) lines.push(`<meta name="keywords" content="${escapeAttr(head.keywords)}" />`);
  lines.push(`<meta name="robots" content="${escapeAttr(robots)}" />`);
  if (canonical) lines.push(`<link rel="canonical" href="${escapeAttr(canonical)}" />`);
  lines.push(`<meta property="og:title" content="${escapeAttr(title)}" />`);
  lines.push(`<meta property="og:description" content="${escapeAttr(description)}" />`);
  lines.push(`<meta property="og:type" content="${escapeAttr(ogType)}" />`);
  if (canonical) lines.push(`<meta property="og:url" content="${escapeAttr(canonical)}" />`);
  lines.push(`<meta property="og:image" content="${escapeAttr(image)}" />`);
  lines.push(`<meta property="og:site_name" content="${escapeAttr(seo.SITE_NAME)}" />`);
  lines.push(`<meta property="og:locale" content="${escapeAttr(seo.SITE_LOCALE)}" />`);
  lines.push(`<meta name="twitter:card" content="summary_large_image" />`);
  lines.push(`<meta name="twitter:title" content="${escapeAttr(title)}" />`);
  lines.push(`<meta name="twitter:description" content="${escapeAttr(description)}" />`);
  lines.push(`<meta name="twitter:image" content="${escapeAttr(image)}" />`);
  return lines.map((l) => `    ${l}`).join("\n");
}

function assembleHtml(template, body, head, seo) {
  const closeIdx = template.indexOf("</head>");
  if (closeIdx === -1) throw new Error("template missing </head>");
  const headPart = template.slice(0, closeIdx);
  const tail = template.slice(closeIdx);

  const stripped = headPart
    .replace(/<title>[\s\S]*?<\/title>\s*/g, "")
    .replace(/<meta\s+name="(?:description|keywords|robots)"[^>]*>\s*/gi, "")
    .replace(/<meta\s+property="og:[^"]*"[^>]*>\s*/gi, "")
    .replace(/<meta\s+name="twitter:[^"]*"[^>]*>\s*/gi, "")
    .replace(/<link\s+rel="canonical"[^>]*>\s*/gi, "");

  const headBlock = buildHeadBlock(head, seo);
  let html = `${stripped}${headBlock}\n${tail}`;
  html = html.replace(/<div id="root">[\s\S]*?<\/div>/, `<div id="root">${body}</div>`);
  return html;
}

function outputPathFor(route) {
  if (route === "/") return join(outDir, "index.html");
  return join(outDir, route.replace(/^\/+/, "").replace(/\/+$/, ""), "index.html");
}

function renderToHtml(node) {
  return new Promise((resolvePromise, rejectPromise) => {
    let html = "";
    let done = false;
    const writable = new Writable({
      write(chunk, _enc, cb) {
        html += chunk.toString();
        cb();
      },
    });
    const finish = (err) => {
      if (done) return;
      done = true;
      clearTimeout(timer);
      err ? rejectPromise(err) : resolvePromise(html);
    };
    const { pipe, abort } = renderToPipeableStream(node, {
      onAllReady() {
        try {
          pipe(writable);
        } catch (err) {
          finish(err);
        }
      },
      onError(err) {
        console.error("  [ssr] render error:", err && err.message);
      },
    });
    const timer = setTimeout(() => {
      abort();
      finish(new Error("prerender timeout (route did not finish)"));
    }, 90000);
    writable.on("finish", () => finish());
    writable.on("error", (err) => finish(err));
  });
}

// ---- route inventory (generated from app source, not hand-maintained) ----

function buildInventory() {
  const configSrc = readFileSync(join(root, "src/router/config.tsx"), "utf8");
  const staticRoutes = [
    ...new Set(
      extractQuoted(configSrc, "path")
        .filter((p) => !p.includes(":") && p !== "*" && p.startsWith("/"))
        .map((p) => p.replace(/\/+$/, "") || "/")
    ),
  ];

  const blogSrc = readFileSync(join(root, "src/mocks/blog.ts"), "utf8");
  const blogRoutes = [
    ...new Set(extractQuoted(blogSrc, "slug").map((s) => `/blog/${s}`)),
  ];

  const projectSlugs = new Set();
  for (const file of MOCK_FILES) {
    const src = readFileSync(join(root, `src/mocks/${file}.ts`), "utf8");
    for (const slug of extractQuoted(src, "slug")) projectSlugs.add(slug);
  }

  const staticSet = new Set(staticRoutes);
  const projectRoutes = new Set();
  for (const slug of projectSlugs) {
    if (slug.includes("/")) {
      projectRoutes.add(`/projects/${slug}`);
    } else if (!staticSet.has(`/projects/${slug}`)) {
      // Legacy bare /projects/<slug> still resolves via the generic catch-all;
      // emit it so no currently-working URL breaks when the rewrite is removed.
      projectRoutes.add(`/projects/${slug}`);
    }
  }

  return [...new Set([...staticRoutes, ...blogRoutes, ...projectRoutes])].sort();
}

// ---- main ----------------------------------------------------------------

if (!existsSync(templatePath)) {
  console.error(
    "out/index.html not found. Run `vite build` (or `npm run build`) before prerendering."
  );
  process.exit(1);
}

console.log("[prerender] booting vite (SSR) ...");
const vite = await createServer({
  configFile: join(root, "vite.config.ts"),
  root,
  appType: "custom",
  logLevel: "error",
  server: { middlewareMode: true, hmr: false },
});

try {
  const seo = await vite.ssrLoadModule("/src/utils/seo.ts");
  const { PrerenderApp } = await vite.ssrLoadModule("/src/prerender/entry.tsx");
  const { takeServerHead } = await vite.ssrLoadModule("/src/components/feature/serverHead.ts");
  const template = readFileSync(templatePath, "utf8");

  const cssAssetDir = join(outDir, "assets");
  const cssAssets = readdirSync(cssAssetDir).filter((f) => /^index-[A-Za-z0-9_-]+\.css$/.test(f));
  if (cssAssets.length !== 1) {
    throw new Error(`expected exactly one index-*.css asset, found: ${cssAssets.join(", ") || "none"}`);
  }
  const criticalCss = readFileSync(join(cssAssetDir, cssAssets[0]), "utf8");
  if (criticalCss.includes("</style")) {
    throw new Error("refusing to inline CSS containing </style");
  }
  const stylesheetLinkRe = /<link\s+rel="stylesheet"[^>]*href="\/assets\/index-[A-Za-z0-9_-]+\.css"[^>]*>/;
  if (!stylesheetLinkRe.test(template)) {
    throw new Error("homepage template stylesheet link not found - cannot inline critical CSS");
  }
  // Hero LCP preload: the <picture> sits ~50% into the rendered document, so
  // the preload scanner only finds it after streaming the whole head + body
  // prefix. Mirror the hero's AVIF ladder (same exported constant the <source>
  // uses) in a head preload so the fetch starts at first byte. imagesrcset with
  // identical URLs lets supporting browsers dedupe against the picture-selected
  // candidate; no href means browsers without imagesrcset skip it entirely.
  const { HERO_AVIF_SRCSET } = await vite.ssrLoadModule("/src/pages/home/sections/Hero.tsx");
  const heroPreload =
    `    <link rel="preload" as="image" fetchpriority="high" imagesizes="100vw"` +
    ` imagesrcset="${escapeAttr(HERO_AVIF_SRCSET)}" />\n`;
  const homepageTemplate = template.replace(
    stylesheetLinkRe,
    `${heroPreload}<style data-critical-homepage-css>\n${criticalCss}\n</style>`
  );

  const inventory = buildInventory();
  console.log(`[prerender] inventory: ${inventory.length} candidate routes`);

  const urls = new Set(inventory);
  const pending = [...urls];
  const rendered = new Set();
  const skipped = [];
  const errors = [];

  while (pending.length) {
    const path = pending.pop();
    if (rendered.has(path)) continue;
    rendered.add(path);

    let html;
    try {
      html = await renderToHtml(createElement(PrerenderApp, { path }));
    } catch (err) {
      errors.push(`${path}: ${err.message}`);
      console.error(`[prerender] FAILED ${path}: ${err.message}`);
      continue;
    }

    const head = takeServerHead();
    if (!head) {
      skipped.push(path);
      console.log(`[prerender] skip ${path} (no <PageMeta> captured - renders soft 404)`);
      continue;
    }

    // A page can declare a canonical that points elsewhere (e.g. a generic
    // project URL resolving to its canonical category URL). Prerender it too.
    if (head.canonical) {
      const canonPath = new URL(head.canonical).pathname.replace(/\/+$/, "") || "/";
      if (canonPath !== path && !rendered.has(canonPath) && !urls.has(canonPath)) {
        urls.add(canonPath);
        pending.push(canonPath);
      }
    }

    const routeTemplate = path === "/" ? homepageTemplate : template;
    const finalHtml = assembleHtml(routeTemplate, html, head, seo);
    const outFile = outputPathFor(path);
    mkdirSync(dirname(outFile), { recursive: true });
    writeFileSync(outFile, finalHtml, "utf8");
  }

  console.log(`[prerender] rendered: ${rendered.size}, skipped: ${skipped.length}, errors: ${errors.length}`);

  const missing = REQUIRED_VALID.filter((r) => !existsSync(outputPathFor(r)));
  const wronglyGenerated = REQUIRED_INVALID.filter((r) => existsSync(outputPathFor(r)));

  console.log("--- validation ---");
  console.log(`required valid routes missing a file: ${missing.length ? missing.join(", ") : "none"}`);
  console.log(`required invalid routes wrongly generated: ${wronglyGenerated.length ? wronglyGenerated.join(", ") : "none"}`);
  console.log("skipped routes (soft-404):", skipped.length ? skipped.join(", ") : "none");
  if (errors.length) {
    console.error("render errors:");
    errors.forEach((e) => console.error("  -", e));
  }

  if (missing.length || errors.length) {
    console.error("\n[prerender] VALIDATION FAILED");
    process.exit(1);
  }
  console.log("[prerender] OK");
} finally {
  await vite.close();
}
