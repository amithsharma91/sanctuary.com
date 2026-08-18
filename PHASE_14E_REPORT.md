# PHASE 14E — FINAL DEPLOYMENT READINESS REPORT

Date: 2026-08-18 · Branch: `seo/performance-foundation` · Nothing staged, committed, or pushed.

---

## 1. Overall Status

**READY WITH ACTION REQUIRED**

One real deployment blocker was found and fixed during this audit (pnpm `allowBuilds` placeholder
values caused `pnpm install` to exit 1 → Vercel install step would fail). After the fix, every local
check passes and **no local deployment blocker remains**. Required actions before going live:
commit the correct file set (below), push, and verify production after deploy.

## 2. Build

| Command | Result | Time |
|---|---|---|
| `pnpm run build` | PASS (exit 0) | 3.6s |
| `pnpm run build:prerender` | PASS (exit 0) | 8.1s |

`pnpm run build` (plain Vite build) is unchanged; `build:prerender` = `vite build && node scripts/prerender.mjs`.

## 3. Prerender

- Routes evaluated: **92**
- Routes generated: **84** (`out/**/index.html` files)
- Routes skipped: **8** (bare `/projects/<unbuilt-slug>` soft-404s — intentionally not emitted, e.g.
  `/projects/etv`, `/projects/mandala-resort`)
- Errors: **0**
- Required valid routes missing a file: none · Required invalid routes wrongly generated: none

## 4. HTTP Routing (local static server against `out/`, no rewrites)

| Route | Expected | Actual |
|---|---:|---:|
| / | 200 | 200 |
| /about | 200 | 200 |
| /projects | 200 | 200 |
| /blog | 200 | 200 |
| real blog article (`/blog/architecture-design-process`) | 200 | 200 |
| real project (`/projects/residential/villa-maaya`) | 200 | 200 |
| /nonexistent | 404 | 404 |
| /blog/non-existent-slug | 404 | 404 |
| /projects/nonexistent | 404 | 404 |

Full battery: 33/33 valid → 200; 8/8 invalid → 404. Invalid responses contain a **real 404 body —
never `index.html`** (verified no `<div id="root">` in 404 bodies).

## 5. SEO (read from generated HTML source, not DOM)

- **Initial HTML metadata**: complete and page-specific — single `<title>`, `meta description`,
  `keywords` (where provided), `robots` (`index, follow`), self-referencing `canonical` + `og:url`,
  `og:title/description/type/image`, `og:site_name`, `og:locale`, full Twitter card set.
- **Canonical**: self-referencing on all canonical pages; legacy/alias URLs cross-canonicalize
  (e.g. `/projects/unbuilt/etv` → `etv-embassy-brewery`, `/projects/maaya` →
  `/projects/residential/maaya`). No duplicate canonical tags; no duplicate titles (1 each).
- **Robots**: `index, follow` on canonical pages; 404 page strategy (`noindex, follow`) available
  on the NotFound route (not deployed, since unknown routes now 404 before rendering).
- **Open Graph**: present on all pages; `og:type="article"` on blog articles, `website` elsewhere.
- **JSON-LD**: 3–5 blocks per page (`WebSite`, `Organization`, BreadcrumbList, page schemas,
  `BlogPosting` on articles) in the initial HTML.

## 6. Sitemap

`public/sitemap.xml` (53 URLs) vs 84 generated routes — **discrepancies found (report-only, not modified):**

- **A. Sitemap URLs with no generated HTML: none** ✓
- **C. Sitemap URLs that canonicalize elsewhere: none** (all sitemap URLs are self-canonical) ✓
- **D. Sitemap URLs that would 404: none** ✓
- **B. Canonical pages missing from the sitemap (11):**
  - 3 blog articles: `/blog/architecture-design-process`, `/blog/architecture-consultation-guide`,
    `/blog/sustainable-architecture`
  - `/projects/ongoing/kabini-house` (the only ongoing project page omitted)
  - Sanctuary data-driven canonical pages: `/projects/residential/nirvaana`,
    `/projects/residential/maaya`, `/projects/residential/villa-praana`
  - `/thank-you`
- ~20 other generated routes (bare `/projects/<slug>` and unbuilt aliases) are intentionally absent
  from the sitemap — they cross-canonicalize to canonical pages.

**Recommended (not performed):** add the 3 blog articles + `/projects/ongoing/kabini-house` to the
sitemap (clear canonical content). Decide whether the sanctuary canonical pages should be added to
the sitemap or made to canonicalize/redirect to the explicit villa pages.

## 7. Vercel

- Build command: `pnpm run build:prerender` (valid; verified locally)
- Output directory: `out` (matches `vite.config.ts` `build.outDir`)
- Catch-all rewrite `/(.*) → /index.html`: **fully removed** ✓
- No middleware, no functions, no new catch-all added.
- Deployment blockers: **none remaining** (see §12).

## 8. Git

- **Pre-existing changes preserved**: all `M` files (index.html, public/robots.txt, ~60 page files,
  src/router/config.tsx, PageMeta.tsx, package.json, vercel.json) — untouched.
- **Phase 14C/14D files**: `scripts/prerender.mjs`, `src/prerender/entry.tsx`,
  `src/components/feature/serverHead.ts`, `src/i18n/server.ts`, `PHASE_14CD_REPORT.md`,
  plus modifications to `PageMeta.tsx`, `package.json`, `vercel.json`.
- **Files that MUST be committed for Vercel deployment:**
  - All `M` (tracked) files above
  - `scripts/prerender.mjs`, `src/prerender/entry.tsx`, `src/components/feature/serverHead.ts`,
    `src/i18n/server.ts`
  - `src/mocks/blog.ts`, `src/pages/blog/article/` (required source; currently untracked)
  - `pnpm-lock.yaml` (currently untracked — must be committed or Vercel installs non-deterministically)
  - `pnpm-workspace.yaml` (**contains the allowBuilds fix — critical**)
  - `auto-imports.d.ts` (generated; optional, harmless to commit)
- **Files that SHOULD NOT be committed:** `node_modules/`, `out/` (build artifacts; currently
  untracked but NOT ignored — see §below).
- **.gitignore**: does not exist. Recommended entries (report-only, NOT created):
  ```
  node_modules/
  out/
  dist/
  *.log
  .DS_Store
  *.local
  ```
  Without it, `git add .` would stage `node_modules/` and `out/` (hundreds of MB).

## 9. Production

**NOT VERIFIED.**

Why: this environment has no Vercel CLI, no auth token, and the repo is not linked to the Vercel
project from here (Phase 12C blocker). A live HEAD check of `https://www.sanctuaryarch.com/nonexistent`
still returns **200** — confirming the current production is the **old SPA build**; the 14C/14D/14E
changes are not deployed. Do not claim production 404/SEO until the deploy below is verified.

## 10. Required User Actions (minimum)

1. **Commit** the files in §8 ("MUST be committed"), including the fixed `pnpm-workspace.yaml`
   and `pnpm-lock.yaml`. Do **not** `git add .` blindly (no `.gitignore` yet — exclude
   `node_modules/` and `out/`, or add the recommended `.gitignore` first).
2. **Push** to `origin` (`seo/performance-foundation`). Vercel will run
   `pnpm run build:prerender` with output `out/`.
3. **Verify production** after deploy:
   - `GET https://www.sanctuaryarch.com/about` → 200 with rendered HTML + SEO head
   - `GET https://www.sanctuaryarch.com/blog/architecture-design-process` → 200
   - `GET https://www.sanctuaryarch.com/projects/residential/villa-maaya` → 200
   - `GET https://www.sanctuaryarch.com/nonexistent` → **404**
   - `GET https://www.sanctuaryarch.com/blog/non-existent-slug` → **404**
   - `GET https://www.sanctuaryarch.com/projects/nonexistent` → **404**
4. (Optional, recommended) Add the 3 blog articles + `/projects/ongoing/kabini-house` to
   `public/sitemap.xml` and re-upload to Search Console.

---

## Audit Notes

- **Blocker found & fixed**: `pnpm-workspace.yaml` had placeholder `allowBuilds` values
  (`'set this to true or false'`). pnpm 11 treated them as unapproved → `ERR_PNPM_IGNORED_BUILDS`
  with **exit code 1** for both `pnpm install` and `pnpm install --frozen-lockfile` → the Vercel
  install step would have failed. Both affected packages (`@firebase/util`, `protobufjs`) have
  benign postinstalls (version-check / env-driven config write). The values were changed to explicit
  `false`, matching the pre-existing effective behavior (scripts were already ignored). Verified:
  `pnpm install` and `pnpm install --frozen-lockfile` now exit 0.
- **Client bundle**: no `MemoryRouter`, `PrerenderApp`, `takeServerHead`, or `renderToPipeableStream`
  in `out/assets` (only i18next-core's own `createInstance` symbol, which is a client dependency).
  `main.tsx` unchanged (`createRoot().render()`; no hydrateRoot migration).
- **Performance**: single JS entry + single CSS shared by all 84 pages; 51 lazy page chunks +
  shared chunks (code splitting intact); no duplicated assets; prerender adds ~4.5s to build.
- **pnpm/Node compatibility**: lockfile v9.0 (pnpm ≥9). No `engines` field; Vite 8 requires Node
  ≥20.19/≥22.12 — Vercel's default (≥22) is compatible and the current project already deploys.
  `allowBuilds` is pnpm≥10 syntax; if Vercel uses pnpm 9 the key is ignored and postinstalls run
  (harmless). Install succeeds under all supported pnpm versions.