import { useState, useEffect, useCallback } from "react";

interface LightboxImage {
  src: string;
  alt: string;
  category?: string;
}

interface LightboxProps {
  images: LightboxImage[];
  initialIndex?: number;
  isOpen: boolean;
  onClose: () => void;
}

export default function Lightbox({ images, initialIndex = 0, isOpen, onClose }: LightboxProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [isZoomed, setIsZoomed] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setCurrentIndex(initialIndex);
  }, [initialIndex, isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const goTo = useCallback(
    (direction: "prev" | "next") => {
      setIsLoading(true);
      setIsZoomed(false);
      setCurrentIndex((prev) => {
        if (direction === "prev") return prev === 0 ? images.length - 1 : prev - 1;
        return prev === images.length - 1 ? 0 : prev + 1;
      });
    },
    [images.length]
  );

  useEffect(() => {
    if (!isOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") goTo("prev");
      if (e.key === "ArrowRight") goTo("next");
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [isOpen, onClose, goTo]);

  if (!isOpen || images.length === 0) return null;

  const current = images[currentIndex];

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-foreground-950/95 backdrop-blur-sm"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-5 right-5 md:top-8 md:right-8 z-10 w-11 h-11 flex items-center justify-center rounded-full bg-background-50/10 border border-background-50/15 text-background-50 hover:bg-background-50/20 transition-all duration-300"
        aria-label="Close lightbox"
      >
        <i className="ri-close-line text-xl" />
      </button>

      {/* Counter */}
      <div className="absolute top-5 left-5 md:top-8 md:left-8 z-10">
        <span className="text-xs font-body tracking-[0.08em] text-background-200/70">
          {currentIndex + 1} / {images.length}
        </span>
        {current.category && (
          <span className="ml-3 text-[10px] font-body tracking-[0.1em] uppercase text-primary-400">
            {current.category}
          </span>
        )}
      </div>

      {/* Previous */}
      <button
        onClick={() => goTo("prev")}
        className="absolute left-3 md:left-8 top-1/2 -translate-y-1/2 z-10 w-11 h-11 flex items-center justify-center rounded-full bg-background-50/10 border border-background-50/15 text-background-50 hover:bg-background-50/20 transition-all duration-300"
        aria-label="Previous image"
      >
        <i className="ri-arrow-left-s-line text-xl" />
      </button>

      {/* Next */}
      <button
        onClick={() => goTo("next")}
        className="absolute right-3 md:right-8 top-1/2 -translate-y-1/2 z-10 w-11 h-11 flex items-center justify-center rounded-full bg-background-50/10 border border-background-50/15 text-background-50 hover:bg-background-50/20 transition-all duration-300"
        aria-label="Next image"
      >
        <i className="ri-arrow-right-s-line text-xl" />
      </button>

      {/* Image */}
      <div className="w-full h-full flex items-center justify-center p-8 md:p-16">
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-8 h-8 border-2 border-background-50/20 border-t-background-50/60 rounded-full animate-spin" />
          </div>
        )}
        <img
          src={current.src}
          alt={current.alt}
          className={`max-w-full max-h-full object-contain transition-transform duration-500 cursor-zoom-in ${
            isZoomed ? "scale-150 cursor-zoom-out" : "scale-100"
          } ${isLoading ? "opacity-0" : "opacity-100"}`}
          onClick={() => setIsZoomed(!isZoomed)}
          onLoad={() => setIsLoading(false)}
        />
      </div>

      {/* Swipe hint (mobile) */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-3 md:hidden">
        <i className="ri-arrow-left-s-line text-background-200/40 text-sm" />
        <span className="text-[10px] font-body tracking-[0.06em] text-background-200/40 uppercase">Swipe</span>
        <i className="ri-arrow-right-s-line text-background-200/40 text-sm" />
      </div>
    </div>
  );
}