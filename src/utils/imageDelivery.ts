/**
 * Cloudinary delivery optimization helpers.
 *
 * All site photography is uploaded to Cloudinary as original-resolution JPEGs.
 * These helpers inject `f_auto,q_auto,c_scale,w_<width>` delivery transforms into
 * the URL so the browser downloads an appropriately sized, format-optimized image
 * instead of the full original being scaled down by CSS. Original assets are never
 * modified — only the delivery URL changes.
 */

const CLOUDINARY_UPLOAD_MARKER = "/image/upload/";

// First path segment after `upload/` already contains a transform (has a comma),
// e.g. "f_auto,q_auto,w_800/". A plain version segment ("v123456789") never does.
const ALREADY_TRANSFORMED_RE = /^[a-z0-9_]+,/;

/** Returns the src with an f_auto,q_auto,c_scale,w_<width> delivery transform injected. */
export function cloudinaryWidth(src: string, width: number): string {
  const idx = src.indexOf(CLOUDINARY_UPLOAD_MARKER);
  if (idx === -1) return src;
  const rest = src.slice(idx + CLOUDINARY_UPLOAD_MARKER.length);
  if (ALREADY_TRANSFORMED_RE.test(rest)) return src;
  const base = src.slice(0, idx + CLOUDINARY_UPLOAD_MARKER.length);
  return `${base}f_auto,q_auto,c_scale,w_${width}/${rest}`;
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
 * Returns a locally-bundled optimized asset URL if the source URL is a known
 * helloreaddy.io or readdy.ai image that we have pre-resized.
 * Otherwise returns the original URL unchanged.
 */
export { resolveOptimizedImage } from "./imageRewrites";
