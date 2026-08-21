/**
 * Cloudinary delivery optimization helpers.
 *
 * All site photography is uploaded to Cloudinary as original-resolution JPEGs.
 * These helpers inject `f_auto,q_auto,c_scale,w_<width>` delivery transforms into
 * the URL so the browser downloads an appropriately sized, format-optimized image
 * instead of the full original being scaled down by CSS. Original assets are never
 * modified — only the delivery URL changes.
 */

import { OPTIMIZED_BASE } from "./imageRewrites";

const CLOUDINARY_UPLOAD_MARKER = "/image/upload/";

// First path segment after `upload/` already contains a transform (has a comma),
// e.g. "f_auto,q_auto,w_800/". A plain version segment ("v123456789") never does.
const ALREADY_TRANSFORMED_RE = /^[a-z0-9_]+,/;

function cloudinaryTransformed(
  src: string,
  width: number,
  format: "auto" | "avif"
): string {
  const idx = src.indexOf(CLOUDINARY_UPLOAD_MARKER);
  if (idx === -1) return src;
  const rest = src.slice(idx + CLOUDINARY_UPLOAD_MARKER.length);
  if (ALREADY_TRANSFORMED_RE.test(rest)) return src;
  const base = src.slice(0, idx + CLOUDINARY_UPLOAD_MARKER.length);
  return `${base}${format === "avif" ? "f_avif" : "f_auto"},q_auto,c_scale,w_${width}/${rest}`;
}

/** Returns the src with an f_auto,q_auto,c_scale,w_<width> delivery transform injected. */
export function cloudinaryWidth(src: string, width: number): string {
  return cloudinaryTransformed(src, width, "auto");
}

/**
 * Builds a srcset string for a Cloudinary upload URL.
 * Returns undefined for non-Cloudinary sources (readdy.ai, helloreaddy.io, ...)
 * so callers can pass it directly to <img srcSet>.
 */
export function cloudinarySrcSet(
  src: string,
  widths: number[]
): string | undefined {
  if (!src.includes(CLOUDINARY_UPLOAD_MARKER)) return undefined;
  return widths.map((w) => `${cloudinaryWidth(src, w)} ${w}w`).join(", ");
}

/**
 * Builds an AVIF-only srcset for use inside <source type="image/avif">.
 * Browsers that select the source support AVIF by definition; unsupported
 * browsers fall through to the <img>'s regular f_auto srcset untouched.
 */
export function cloudinaryAvifSrcSet(
  src: string,
  widths: number[]
): string | undefined {
  if (!src.includes(CLOUDINARY_UPLOAD_MARKER)) return undefined;
  return widths.map((w) => `${cloudinaryTransformed(src, w, "avif")} ${w}w`).join(", ");
}

/**
 * Builds a srcset for pre-resized local variants of an /optimized/ asset,
 * e.g. /optimized/about-studio.webp with [480, 768] ->
 * "/optimized/about-studio-480.webp 480w, /optimized/about-studio-768.webp 768w".
 * Returns undefined when the path is not a local optimized asset or no
 * matching `-<width>` variant files exist for it.
 */
export function optimizedVariantSrcSet(
  path: string,
  widths: number[]
): string | undefined {
  if (!path.startsWith(OPTIMIZED_BASE)) return undefined;
  const dot = path.lastIndexOf(".");
  if (dot === -1) return undefined;
  return widths.map((w) => `${path.slice(0, dot)}-${w}${path.slice(dot)} ${w}w`).join(", ");
}

/**
 * Returns a locally-bundled optimized asset URL if the source URL is a known
 * helloreaddy.io or readdy.ai image that we have pre-resized.
 * Otherwise returns the original URL unchanged.
 */
export { resolveOptimizedImage, OPTIMIZED_BASE } from "./imageRewrites";
