// Optimized assets live in public/optimized so their stable /optimized/*.webp
// URLs work identically in the prerendered SSR HTML and the client bundle.

const OPTIMIZED_BASE = "/optimized/";

const HELLOREADDY_BASE = "https://storage.helloreaddy.io/project_files/76dce7c4-6caa-4272-98e8-4149c442ecfc/";

const READDY_ABOUT_URL =
  "https://readdy.ai/api/search-image?query=Luxury%20architectural%20design%20studio%20interior%2C%20warm%20wood%20and%20stone%20office%20space%2C%20large%20drafting%20table%20with%20architectural%20plans%2C%20natural%20light%20from%20large%20windows%2C%20minimalist%20elegant%20workspace%2C%20design%20sketches%20on%20walls%2C%20sophisticated%20creative%20atmosphere%2C%20warm%20earth%20tones%2C%20editorial%20interior%20photography%2C%20serene%20professional%20environment&width=900&height=1100&seq=about-preview-studio&orientation=portrait";

const REWRITE_MAP: Record<string, string> = {
  // Villa Maaya project images (gallery pool + featured card cover)
  [`${HELLOREADDY_BASE}73b78ab0-0ec9-49b8-bef6-c542ac7ba590_compressed_cover-photo.webp`]: `${OPTIMIZED_BASE}villa-maaya-cover.webp`,
  [`${HELLOREADDY_BASE}98c557d4-4dd7-470e-8cdf-310d443220d0_compressed_DSC09594-HDR.webp`]: `${OPTIMIZED_BASE}villa-maaya-01.webp`,
  [`${HELLOREADDY_BASE}b3d90627-58c6-41db-a06f-15706f9bf44d_compressed_DSC09567.webp`]: `${OPTIMIZED_BASE}villa-maaya-02.webp`,
  [`${HELLOREADDY_BASE}a7ef9574-5721-4b8e-a64c-90e56b1aabb8_compressed_DSC09563.webp`]: `${OPTIMIZED_BASE}villa-maaya-03.webp`,
  [`${HELLOREADDY_BASE}015888fd-3344-48fe-b401-b9f8b8f90a31_compressed_DSC09536.webp`]: `${OPTIMIZED_BASE}villa-maaya-04.webp`,
  [`${HELLOREADDY_BASE}76e6548a-3fe8-4d9f-a3bd-b2912937ed86_compressed_DSC09449-Edit.webp`]: `${OPTIMIZED_BASE}villa-maaya-05.webp`,

  // Client logos
  [`${HELLOREADDY_BASE}d2ea2e16-ddc7-4214-a849-dbf70f57606c_compressed_23970_no_bg.webp`]: `${OPTIMIZED_BASE}logo-ihcl.webp`,
  [`${HELLOREADDY_BASE}68273b7e-86a0-4c49-9c10-bdccdf5e487c_compressed_HMS_HOST_logo.webp`]: `${OPTIMIZED_BASE}logo-hmshost.webp`,
  [`${HELLOREADDY_BASE}442bbe47-ed35-478e-8e47-c0a009de0ecd_compressed_23972-removebg-preview.webp`]: `${OPTIMIZED_BASE}logo-embassy.webp`,
  [`${HELLOREADDY_BASE}fb4d75ac-7655-4f62-88b9-1e8111f1c566_compressed_23973_no_bg.webp`]: `${OPTIMIZED_BASE}logo-lounge.webp`,
  [`${HELLOREADDY_BASE}bb7b47fe-c983-422d-96db-25d1e8bd5416_compressed_23975_no_bg.webp`]: `${OPTIMIZED_BASE}logo-hilton.webp`,
  [`${HELLOREADDY_BASE}ff11ee63-a5c9-4bbb-b7e9-62866ea74081_compressed_23976_no_bg.webp`]: `${OPTIMIZED_BASE}logo-puma.webp`,
  [`${HELLOREADDY_BASE}cbadd4da-dbab-40fc-a245-c25076f74e0f_compressed_23977_no_bg.webp`]: `${OPTIMIZED_BASE}logo-koncept.webp`,
  [`${HELLOREADDY_BASE}2fb7db8c-5122-4212-9097-814df0ded771_compressed_77bc7f4a-1052-48c0-9104-5bc629688c24-1_all_9907-removebg-preview.webp`]: `${OPTIMIZED_BASE}logo-chancery.webp`,
  [`${HELLOREADDY_BASE}84257116-1832-4579-b799-584a5b522f88_compressed_new-logo.webp`]: `${OPTIMIZED_BASE}logo-kimmane.webp`,
  [`${HELLOREADDY_BASE}a3b570b3-7993-43b6-9026-4eff9fd17a7c_compressed_KGA-Bangalore-New-Logo-1.webp`]: `${OPTIMIZED_BASE}logo-kga.webp`,
  [`${HELLOREADDY_BASE}da9c9ec9-4f43-4e5f-969a-431a20b50986_compressed_23978_no_bg.webp`]: `${OPTIMIZED_BASE}logo-ccd.webp`,
  [`${HELLOREADDY_BASE}4f0411e5-fc90-454f-8e1d-540c1a7f6e09_compressed_23979-removebg-preview.webp`]: `${OPTIMIZED_BASE}logo-royal-orchid.webp`,
  [`${HELLOREADDY_BASE}68927c14-be04-41be-b919-45bffa899d7e_compressed_23980_no_bg.webp`]: `${OPTIMIZED_BASE}logo-skav.webp`,
  [`${HELLOREADDY_BASE}671b9455-783a-4180-bdb0-8e35a84ce445_compressed_file_000000003ad082118eaad5d58da30658.webp`]: `${OPTIMIZED_BASE}logo-manas.webp`,

  // Brand logo (Navbar + Footer)
  [`${HELLOREADDY_BASE}e2f8a5e4-fa2a-4830-bacb-5677e69921b9_compressed_20854-removebg-preview-1.webp`]: `${OPTIMIZED_BASE}brand-logo.webp`,

  [READDY_ABOUT_URL]: `${OPTIMIZED_BASE}about-studio.webp`,
};

/**
 * Returns a locally-bundled optimized asset URL if the source URL is in our rewrite map,
 * otherwise returns the original URL unchanged.
 */
export function resolveOptimizedImage(src: string): string {
  return REWRITE_MAP[src] ?? src;
}