import { useState, type SyntheticEvent } from "react";

type AspectMode = "landscape" | "square" | "portrait";

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

  return (
    <img
      src={src}
      alt={alt}
      onLoad={handleLoad}
      loading={eager ? "eager" : "lazy"}
      className={`block w-full object-cover object-center ${
        fixedAspect ?? ASPECT_CLASS[mode]
      } ${className}`}
    />
  );
}