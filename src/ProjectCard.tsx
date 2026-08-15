import type { CSSProperties, ReactNode } from "react";
import SmartAspectImage from "@/components/feature/SmartAspectImage";

interface ProjectCardProps {
  image: string;
  alt: string;
  title: string;
  location?: string;
  category?: string;
  onClick?: () => void;
  /** overlay: image with gradient + identity overlay (home featured). content: image with text below. */
  variant?: "overlay" | "content";
  eager?: boolean;
  /** Optional fixed image aspect-ratio class (e.g. "aspect-[16/10]") that overrides automatic orientation detection. */
  fixedAspect?: string;
  /** Overlay variant: keep a subtle readability gradient visible at rest instead of only on hover. */
  persistentOverlay?: boolean;
  /** Overlay variant: show the "View Project" hover label. */
  showViewLabel?: boolean;
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
}

/**
 * Reusable project card used across the website.
 * Cards size to their own image naturally (no fixed heights, no stretching),
 * so there is never empty space inside a card.
 */
export default function ProjectCard({
  image,
  alt,
  title,
  location,
  category,
  onClick,
  variant = "content",
  eager = false,
  fixedAspect,
  persistentOverlay = false,
  showViewLabel = true,
  className = "",
  style,
  children,
}: ProjectCardProps) {
  if (variant === "overlay") {
    return (
      <button
        type="button"
        onClick={onClick}
        aria-label={`${title}${location ? ` — ${location}` : ""}`}
        className={`group relative image-reveal rounded-lg overflow-hidden border border-secondary-200/30 bg-background-100 text-left transition-all duration-500 cursor-pointer ${className}`}
        style={style}
      >
        <SmartAspectImage
          src={image}
          alt={alt}
          eager={eager}
          fixedAspect={fixedAspect}
          className="transition-transform duration-800 group-hover:scale-105"
        />

        {/* Readability gradient — subtle at rest when persistentOverlay, gently intensifies on hover */}
        <div
          className={`absolute inset-0 bg-gradient-to-t from-black/60 via-black/15 to-transparent transition-all duration-500 ${
            persistentOverlay
              ? "opacity-60 group-hover:opacity-100"
              : "opacity-0 group-hover:opacity-100"
          }`}
        />

        {/* Identity overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6 translate-y-2 group-hover:translate-y-0 transition-all duration-500">
          {category && (
            <span className="text-[10px] font-body tracking-[0.15em] uppercase text-primary-300 mb-1 block">
              {category}
            </span>
          )}
          <h3 className="font-heading text-xl md:text-2xl font-light text-background-50 mb-1">
            {title}
          </h3>
          {location && (
            <p className="text-xs font-body text-background-200/70 mb-3">{location}</p>
          )}
          {showViewLabel && (
            <span className="inline-flex items-center gap-2 text-xs font-label font-semibold text-primary-300 tracking-wide opacity-0 group-hover:opacity-100 transition-all duration-400 group-hover:translate-x-1">
              View Project <i className="ri-arrow-right-line" />
            </span>
          )}
        </div>
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={onClick}
      className={`group text-left transition-all duration-700 cursor-pointer ${className}`}
      style={style}
    >
      <div className="image-reveal rounded-lg overflow-hidden border border-secondary-200/30 mb-5 bg-background-100">
        <SmartAspectImage
          src={image}
          alt={alt}
          eager={eager}
          fixedAspect={fixedAspect}
          className="transition-transform duration-800 group-hover:scale-105"
        />
      </div>
      {category && (
        <span className="text-[10px] font-body tracking-[0.15em] uppercase text-primary-500">
          {category}
        </span>
      )}
      <h3 className="font-heading text-2xl md:text-3xl font-light text-foreground-950 mt-1 mb-1 group-hover:text-primary-500 transition-colors duration-300">
        {title}
      </h3>
      {location && <p className="text-xs font-body text-secondary-500 mb-2">{location}</p>}
      {children}
    </button>
  );
}