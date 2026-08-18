# PHASE 14F — FINAL PRE-DEPLOYMENT REPORT

Date: 2026-08-18 · Nothing staged, committed, or pushed.

## 1. Status

**READY FOR DEPLOYMENT**

All local checks pass. One deviation from the task's expected +4 sitemap additions was verified:
`/projects/ongoing/kabini-house` is a cross-canonical alias (see §4), so only **3** URLs were added,
per the task's own rules and its "unless inspection reveals a different verified state" clause.

## 2. Sitemap

| Metric | Result |
|---|---:|
| Previous URLs | 53 |
| Current URLs | 56 |
| Added | 3 |
| Removed | 0 |
| Invalid | 0 |
| Duplicates | 0 |
| Cross-canonical | 0 |

## 3. Added URLs

- https://www.sanctuaryarch.com/blog/architecture-design-process
- https://www.sanctuaryarch.com/blog/architecture-consultation-guide
- https://www.sanctuaryarch.com/blog/sustainable-architecture

Each is a real generated page, self-canonical, `index, follow`, with full metadata (verified in §8).
Formatting/priority/changefreq/lastmod preserved: `monthly` / `0.6` / `2026-08-14`, matching the
existing strategy. `/projects/ongoing/kabini-house` was **not** added — see §4.

## 4. Intentionally Excluded

- **/thank-you** — confirmation page, not indexable content per SEO strategy. Not added.
- **/projects/residential/nirvaana**, **/projects/residential/maaya**, **/projects/residential/villa-praana**
  — ambiguous with explicit villa pages (report-only, untouched, see §10 of the audit notes below).
- **/projects/ongoing/kabini-house** — **verified as a cross-canonical alias, not a distinct canonical
  page.** Route `/projects/ongoing/kabini-house` matches the explicit residential `<KabiniHouse />`
  route first (config.tsx:109) and its canonical is
  `https://www.sanctuaryarch.com/projects/residential/kabini-house` — identical content/title/description.
  The canonical page `/projects/residential/kabini-house` is **already in the sitemap**. Adding the
  alias would violate "every sitemap URL self-canonical" and "no cross-canonical URLs". This is why
  the result is +3, not +4 (task allows: "unless inspection reveals a different verified state").

## 5. .gitignore

Created `.gitignore` (did not exist). Contents:
```
node_modules/
out/
dist/
*.log
.DS_Store
*.local
```
Verified with `git check-ignore`:
- `node_modules/` → **ignored** ✓
- `out/` → **ignored** ✓
- `pnpm-lock.yaml` → **NOT ignored** ✓
- `pnpm-workspace.yaml` → **NOT ignored** ✓
- `package.json`, `scripts/`, `src/`, `public/`, `.gitignore` → **NOT ignored** ✓
- `node_modules/` and `out/` no longer appear in `git status` ✓

## 6. Build

- `pnpm run build` → **PASS** (exit 0, ~7.0s)
- `pnpm run build:prerender` → **PASS** (exit 0, rendered 92, skipped 8, errors 0)
- `out/index.html`, `out/about/`, `out/projects/`, `out/blog/`, `out/contact/` all exist.
- All 3 newly added sitemap pages have generated files; `out/sitemap.xml` copied with **56** URLs.

## 7. Routing

- Valid routes → **200** (8/8): `/`, `/about`, `/projects`, `/blog`, `/contact`,
  `/blog/architecture-design-process`, `/projects/ongoing/kabini-house`, `/projects/residential/villa-maaya`
- Invalid routes → **404** (3/3): `/nonexistent`, `/projects/nonexistent`, `/blog/non-existent-slug`
- No catch-all rewrite returned (real 404 bodies).

## 8. SEO

Verified in generated HTML for all 3 added pages (blog articles): `<title>`, `meta description`,
`meta robots` (`index, follow`), self-referencing `canonical`, `og:title`, `og:description`,
`og:url`, `og:type="article"`, `og:image`, `twitter:title`, `twitter:image`, and 4 JSON-LD blocks each.
Canonical of each page exactly matches its sitemap URL.

## 9. Remaining Issues

1. **Sanctuary villa-page ambiguity (report-only, not resolved per instructions):**
   `/projects/residential/nirvaana`, `/projects/residential/maaya`, `/projects/residential/villa-praana`
   (rendered by the generic legacy `ProjectDetail` catch-all, config.tsx:141) coexist with bespoke
   villa pages `/projects/residential/villa-nirvaana`, `/villa-maaya`, `/villa-prana`. All 6 are
   self-canonical and `index, follow` with real (distinct) content — duplicate-content risk per villa
   project. See analysis below. **Not modified, not redirected, not added to sitemap.**
2. **Live production not yet verified** (no Vercel CLI/auth in this environment; current live
   `/nonexistent` still returns 200 = old build).
3. Recommended (pre-existing, report-only): no `robots.txt` sitemap reference was checked this phase.

## 10. Deployment Instructions (user must perform manually)

1. `git add` the deployment file set **excluding `node_modules/` and `out/`** (now ignored):
   - all tracked `M` files (incl. `public/sitemap.xml`), plus new files:
     `scripts/prerender.mjs`, `src/prerender/entry.tsx`, `src/components/feature/serverHead.ts`,
     `src/i18n/server.ts`, `src/mocks/blog.ts`, `src/pages/blog/article/`,
     `pnpm-lock.yaml`, `pnpm-workspace.yaml`, `.gitignore`
2. Commit and push to `origin` (Vercel auto-deploys `pnpm run build:prerender`, output `out/`).
3. After deploy verify live:
   - `/about`, `/blog`, `/blog/architecture-design-process`,
     `/projects/residential/villa-maaya` → **200**
   - `/nonexistent`, `/projects/nonexistent`, `/blog/non-existent-slug` → **404**
   - `https://www.sanctuaryarch.com/sitemap.xml` → **56 URLs**, well-formed
4. Submit the updated sitemap in Google Search Console (optional).

---

## Phase 10 — Ambiguous Sanctuary Pages Analysis (REPORT ONLY, no changes made)

Rendered by the generic legacy `ProjectDetail` route (`/projects/residential/:projectSlug`, config.tsx:141)
from `src/mocks/sanctuaryProjects.ts`. Bespoke villa pages are separate routes in config.tsx:113–117.

| Sanctuary page | Canonical | Indexable | Real content | Explicit villa page | Overlap |
|---|---|---|---|---|---|
| `/projects/residential/nirvaana` | self | index, follow | yes (title `NIRVAANA \| Luxury Villa`, ~9.5k root body) | `/projects/residential/villa-nirvaana` | Duplicated project identity, distinct copy |
| `/projects/residential/maaya` | self | index, follow | yes (title `MAAYA \| Luxury Villa`, ~9.3k root body) | `/projects/residential/villa-maaya` | Duplicated project identity, distinct copy |
| `/projects/residential/villa-praana` | self | index, follow | yes (title `VILLA PRAANA \| Luxury Villa`, ~9.2k root body) | `/projects/residential/villa-prana` | Duplicated project identity; spelling differs (praana vs prana) |

Each sanctuary page and its explicit counterpart target the same villa project with different
titles/descriptions/content, both indexable → duplicate-content / canonical-competition risk.

**Recommended future decision (do NOT act now):** pick one canonical URL per villa project (either the
bespoke villa page or the generic page), and either remove the other route, noindex it, or
cross-canonicalize it — as a deliberate SEO/content-architecture task. Do not add any of the three to
the sitemap until then.
