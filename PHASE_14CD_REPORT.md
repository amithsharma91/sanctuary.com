# PHASE 14C/14D — Static Prerender + True HTTP 404

Date: 2026-08-18 · Branch: `seo/performance-foundation` · Nothing staged, committed, or pushed.

---

## 1. Overview & Context

The production SPA (`https://www.sanctuaryarch.com`, Vercel) currently ships a single
`index.html` shell. A catch-all rewrite (`/(.*) -> /index.html`) returns HTTP 200 with
empty HTML for **every** path, including unknown ones, so crawlers see no content and
unknown URLs never return a genuine 404.

Phase 14C/14D converts the Vite + React 19 SPA into a **statically prerendered site**:

- Every legitimate route gets a real HTML file (`out/<route>/index.html`) with the full
  page content and correct `<head>` SEO metadata rendered **before** any JavaScript runs.
- Unknown routes are **not** emitted, so once the Vercel rewrite is removed they return a
  genuine HTTP 404.
- The client SPA (React Router, lazy code-splitting) is preserved and keeps working.

**Approach in one line:** render the *real* router tree on the server via
`renderToPipeableStream` (which resolves `React.lazy`), capture each page's `<PageMeta>`
head values during that render, and inject them into the built HTML template per route.

## 2. Approach & Architecture

A spike first confirmed React 19's `renderToPipeableStream` resolves `React.lazy`
components server-side, so the existing lazy route config (`src/router/config.tsx`) can be
used as the single source of truth — no hand-maintained route duplicate.

Key design decisions:

- **SSR tree** (`src/prerender/entry.tsx`): mirrors `src/App.tsx` but uses
  `MemoryRouter` (react-router-dom v7 has no `/server` entry) pinned to one path, plus the
  SSR-safe i18n instance. Includes `ErrorBoundary`, `SiteSchema`, `Suspense`, and the real
  `<AppRoutes />`.
- **Head capture** (`src/components/feature/serverHead.ts` + small addition to
  `PageMeta.tsx`): when `typeof document === "undefined"`, the resolved title /
  description / keywords / robots / canonical / OG values are recorded. The prerender step
  reads them per route and builds the `<head>` block (same tags `applyHead` writes
  client-side). No duplicate SEO system.
- **i18n** (`src/i18n/server.ts`): a second instance of the same resources that skips the
  browser `LanguageDetector` and pins English.
- **Prerender script** (`scripts/prerender.mjs`): boots Vite in SSR middleware mode to
  load/transform the TSX tree, renders each route, assembles `out/<route>/index.html`
  from the built template, and validates the required 200/404 sets.
- **Client parity**: the client uses `createRoot().render()` (never `hydrateRoot`), so the
  prerendered HTML is only for crawlers/no-JS/initial paint — there is no hydration-mismatch
  surface.

## 3. Route Inventory (generated, not hand-maintained)

The URL set is derived programmatically from the app's own source:

- **Static routes**: every param-free `path` in `src/router/config.tsx` (~60, includes all
  listing pages, explicit project pages, and legacy aliases like `/projects/unbuilt/etv`,
  `/projects/unbuilt/mandala`, `/projects/unbuilt/mit`, `/projects/unbuilt/ambience`,
  `/projects/unbuilt/hilton-clinx`).
- **Blog articles**: `/blog/<slug>` for the 3 posts in `src/mocks/blog.ts`.
- **Data-driven project URLs**: for every project slug across
  `sanctuaryProjects / commercialProjects / projectCollections / ongoingProjects /
  unbuiltProjects`, the legacy bare `/projects/<slug>` is emitted when it resolves to real
  content; canonical-category URLs discovered from each page's own canonical are added
  (e.g. `/projects/nirvaana` → `/projects/residential/nirvaana`).

No page is generated for `/blog/non-existent-slug`, `/projects/nonexistent`, or arbitrary
slugs. Unbuilt bare slugs that only rendered a soft "Project Not Found" (e.g.
`/projects/etv`) are intentionally **not** generated — they now correctly 404 instead of
returning 200 + a soft-404 page.

**Result:** 92 routes rendered, 8 soft-404 candidates skipped, 84 HTML files written.

## 4. Files Created / Modified

Created:

- `scripts/prerender.mjs` — route inventory, SSR render, HTML assembly, validation.
- `src/prerender/entry.tsx` — `PrerenderApp` (MemoryRouter + I18nextProvider + real tree).
- `src/i18n/server.ts` — SSR-safe i18n instance (no browser detector).
- `src/components/feature/serverHead.ts` — server head capture store.

Modified:

- `src/components/feature/PageMeta.tsx` — record resolved head values on the server.
- `package.json` — added `prerender` and `build:prerender` scripts.
- `vercel.json` — removed the `/(.*)` catch-all rewrite; pinned
  `buildCommand: "pnpm run build:prerender"` and `outputDirectory: "out"` so the deployed
  site contains the prerendered files.

## 5. Build & Prerender Output

`pnpm run build:prerender` (`vite build && node scripts/prerender.mjs`) produces, in
`out/`:

- `index.html` (homepage, fully rendered)
- `about/index.html`, `contact/index.html`, `blog/index.html`, … (all listing pages)
- `projects/{residential,hospitality,commercial,prefab,ongoing,unbuilt}/…/index.html`
  (all explicit project pages + aliases)
- `blog/architecture-design-process/index.html` + the other 2 articles
- legacy bare project URLs and canonical-category URLs

Each file contains the full server-rendered page (120–190 KB of HTML) and the hashed
`/assets/*` script/CSS/modulepreload links.

## 6. Validation: type-check, lint, build

| Check | Result |
|---|---|
| `pnpm type-check` (`tsc --noEmit`) | PASS |
| `pnpm lint` (`eslint src … --max-warnings 0`) | PASS |
| `vite build` | PASS (143 modules) |
| `node scripts/prerender.mjs` | 92 rendered, 8 skipped, 0 errors |

Pre-existing informational warnings only: the `/blog/:slug*` react-router path notice and
the i18next Locize banner.

## 7. HTTP 200/404 Verification (local, Vercel-equivalent static serving)

A plain static file server (no rewrite, mirrors Vercel serving `out/`: `/about` →
`out/about/index.html`) was used:

- **28 required valid routes → all HTTP 200** (home, all listings, all explicit project
  pages, both aliases, `/blog` + 3 articles, about/testimonials/clients/contact/thank-you/
  privacy-policy/terms/cookie-policy).
- **5 invalid routes → all genuine HTTP 404**: `/nonexistent`, `/projects/nonexistent`,
  `/blog/non-existent-slug`, `/totally-unknown`,
  `/projects/residential/nonexistent-project`.

Unknown paths receive a true 404 (no `index.html` fallback).

> Note: production verification was not possible from this environment — the repo is not
> linked to the Vercel project and Vercel CLI auth is unavailable (same blocker as Phase
> 12C). After the next deploy, confirm live:
> `curl -I https://www.sanctuaryarch.com/about` → 200 and
> `curl -I https://www.sanctuaryarch.com/nonexistent` → 404.

## 8. SEO Metadata in Initial HTML

Each generated page carries a complete, page-specific `<head>` **before JS**:

- Single `<title>`, `meta description`, `keywords` where the page provides them.
- `robots` meta (`index, follow` when canonical; `noindex, follow` for the 404 page).
- Self-referencing `<link rel="canonical">` and `og:url`; cross-canonical on legacy URLs
  (e.g. `/projects/maaya` → `/projects/residential/maaya`).
- Full OG + Twitter card set (site_name `Sanctuary Architects & Designers`, locale
  `en_IN`, default OG image).
- Schema.org JSON-LD (`WebSite`, `Organization`, breadcrumbs, page schemas, `BlogPosting`
  with `og:type="article"` on articles) rendered in the body.

Verified examples: homepage `/`, `/about`, `/blog/architecture-design-process` (article),
`/projects/residential/nirvaana`, `/thank-you`, `/terms`.

## 9. SPA Client-Side Navigation

Unchanged. `src/App.tsx` + `src/router/config.tsx` (React Router 7, lazy routes) drive the
client; `main.tsx` still does `createRoot(...).render()` into `<div id="root">`, which now
contains prerendered HTML that the client replaces on boot (no hydration, no mismatch
risk). Direct loads and refreshes on any legitimate URL serve the prerendered file; the
client bundle is identical. Confirmed the client bundle does **not** include the
prerender-only modules (`MemoryRouter`, `PrerenderApp`).

## 10. Deployment / vercel.json

`vercel.json` now:

```json
{
  "buildCommand": "pnpm run build:prerender",
  "outputDirectory": "out"
}
```

The `/(.*) -> /index.html` rewrite is **removed** — this is safe now that every legitimate
route has a real file (verified locally). Effects on production:

- Legitimate URLs → real HTML files served with 200.
- Unknown URLs → genuine Vercel 404.
- `/assets/*`, `/robots.txt`, `/sitemap.xml`, `/llms.txt` → served directly.

If the Vercel project already configures `outputDirectory` in project settings, the
`vercel.json` value is consistent and takes precedence. Deployment must be executed and
verified from a machine with Vercel CLI access / the linked project.

## 11. Constraints & Non-Goals

- Nothing was staged, committed, or pushed; all Phase 9A–14A changes remain untouched.
- No framework migration (no Next.js), no router replacement, no route removals, no UI or
  content changes, no changes to `robots.txt`/`sitemap.xml`/`llms.txt`.
- `vite build` (the plain build) is unchanged and still passes; `build:prerender` is the
  deploy-time superset.
- Non-canonical duplicate URLs that previously returned 200 via the catch-all (e.g.
  `/projects/unbuilt/kaze`, `/projects/etv`) now correctly 404 instead of soft-404 — an
  intentional cleanup, not a regression of canonical content.

## 12. Risks, Limitations & Next Steps

Risks / limitations:

- **Production not verified.** The rewrite removal is logically and locally verified, but
  the live result depends on a successful deploy (blocked here: no Vercel CLI / repo link).
- `build:prerender` adds ~30 s of build time and runs the app in a Vite SSR dev server;
  build-time network calls in any future page could slow or fail it (none today).
- The `/blog/:slug*` route pattern produces a react-router notice (pre-existing, treated as
  `/blog/:slug/*`); intentional and not changed.

Next steps:

1. Commit the new/modified files and deploy (`pnpm run build:prerender` on Vercel).
2. Verify live: every URL in the required-valid list → 200; `/nonexistent`,
   `/projects/nonexistent`, `/blog/non-existent-slug` → 404.
3. Re-submit the sitemap (53 URLs, unchanged) in Google Search Console.
4. Optional follow-up: revisit `/blog/:slug*` → `/blog/:slug/*` and consider a `.gitignore`
   entry for `out/` (currently untracked).