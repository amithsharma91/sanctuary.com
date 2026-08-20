import { useState, type SyntheticEvent } from "react";
import { cloudinarySrcSet, resolveOptimizedImage } from "@/utils/imageDelivery";

type AspectMode = "landscape" | "square" | "portrait";

// Responsive card grids: 1 column mobile, 2 columns tablet, 3 columns desktop.
const DEFAULT_SIZES = "(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw";
const DEFAULT_WIDTHS = [480, 768, 1024, 1280];

const ASPECT_CLASS: Record<AspectMode, string> = {
  // Landscape architectural photography gets a clean premium 3:2 container.
  landscape: "aspect-[3/2]",
  // Near-square shots (renders, WhatsApp images) stay square.
  square: "aspect-square",
  // Portrait images keep their full natural composition — no aggressive cropping.
  portrait: "h-auto",
};

interface SmartAspectImageProps {
  src: string;
  alt: string;
  className?: string;
  eager?: boolean;
  /** Optional fixed aspect-ratio container class (e.g. "aspect-[16/10]") that overrides automatic orientation detection. */
  fixedAspect?: string;
  /** Optional responsive sizes descriptor; defaults to the shared card grid. */
  sizes?: string;
}

/**
 * Orientation-aware project image.
 * Reads the natural dimensions on load and applies the appropriate
 * container ratio so landscape shots stay consistent, portrait shots are
 * never crushed into a wide crop, and there is never blank space around
 * the image. When `fixedAspect` is provided, the image is locked to that
 * ratio instead of auto-detecting orientation.
 */
export default function SmartAspectImage({
  src,
  alt,
  className = "",
  eager = false,
  fixedAspect,
  sizes = DEFAULT_SIZES,
}: SmartAspectImageProps) {
  const [mode, setMode] = useState<AspectMode>("landscape");

  const handleLoad = (e: SyntheticEvent<HTMLImageElement>) => {
    const img = e.currentTarget;
    const { naturalWidth: w, naturalHeight: h } = img;
    if (!w || !h) return;
    const ratio = w / h;
    if (ratio > 1.15) setMode("landscape");
    else if (ratio < 0.85) setMode("portrait");
    else setMode("square");
  };

  const resolvedSrc = resolveOptimizedImage(src);

  return (
    <img
      src={resolvedSrc}
      srcSet={cloudinarySrcSet(resolvedSrc, DEFAULT_WIDTHS)}
      sizes={sizes}
      alt={alt}
      onLoad={handleLoad}
      loading={eager ? "eager" : "lazy"}
      className={`block w-full object-cover object-center ${
        fixedAspect ?? ASPECT_CLASS[mode]
      } ${className}`}
    />
  );
}