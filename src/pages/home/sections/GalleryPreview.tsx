import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { allGalleryImages, type GalleryImage } from "@/mocks/gallerySync";

/**
 * Loads the natural dimensions of an image without attaching it to the DOM.
 * Resolves null for broken/missing assets so they can be skipped.
 */
function loadImageSize(src: string): Promise<{ width: number; height: number } | null> {
  return new Promise((resolve) => {
    const probe = new Image();
    probe.onload = () => resolve({ width: probe.naturalWidth, height: probe.naturalHeight });
    probe.onerror = () => resolve(null);
    probe.src = src;
  });
}

/**
 * Picks a fresh random subset of landscape-only gallery images.
 * - Deduplicates by source URL
 * - Probes natural dimensions in small parallel batches and keeps only width >= height
 * - Skips broken / missing assets
 * - Keeps selecting until `count` valid landscape images are found
 */
async function selectRandomLandscapeImages(count: number, chunkSize = 12): Promise<GalleryImage[]> {
  const seen = new Set<string>();
  const pool = allGalleryImages.filter((img) => {
    if (seen.has(img.src)) return false;
    seen.add(img.src);
    return true;
  });

  // Fisher-Yates shuffle for a fresh random set on every page load
  for (let i = pool.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [pool[i], pool[j]] = [pool[j], pool[i]];
  }

  const selected: GalleryImage[] = [];
  for (let start = 0; start < pool.length && selected.length < count; start += chunkSize) {
    const chunk = pool.slice(start, start + chunkSize);
    const sizes = await Promise.all(chunk.map((img) => loadImageSize(img.src)));
    for (let i = 0; i < chunk.length && selected.length < count; i++) {
      const size = sizes[i];
      if (!size) continue; // broken or missing — skip
      if (size.width >= size.height) selected.push(chunk[i]); // landscape or square only
    }
  }
  return selected;
}

export default function GalleryPreview() {
  const [isVisible, setIsVisible] = useState(false);
  const [previewImages, setPreviewImages] = useState<GalleryImage[]>([]);
  const ref = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  // Randomized fresh on every page load — landscape-only, probed for orientation
  useEffect(() => {
    let cancelled = false;
    selectRandomLandscapeImages(9).then((images) => {
      if (!cancelled) setPreviewImages(images);
    });
    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="gallery-preview" ref={ref} className="relative py-20 md:py-28 bg-background-100">
      <div className="w-full px-6 md:px-10 lg:px-14">
        {/* Section Header */}
        <div className="text-center mb-14 md:mb-20">
          <p
            className={`text-xs font-body tracking-[0.15em] uppercase text-primary-500 mb-3 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Portfolio
          </p>
          <h2
            className={`font-heading text-3xl md:text-5xl lg:text-6xl font-light text-foreground-950 leading-[1.1] transition-all duration-700 delay-100 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            Gallery.
          </h2>
        </div>

        {/* Responsive image grid — all containers control height, images fill via cover */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {previewImages.length === 0 ? (
            // Skeleton placeholders keep the exact grid shape while orientation is probed — no layout shift
            Array.from({ length: 9 }).map((_, i) => (
              <div key={`gallery-skeleton-${i}`} className="aspect-[4/3] rounded-lg skeleton-pulse" />
            ))
          ) : (
            previewImages.map((image, index) => (
              <div
                key={image.id}
                className={`rounded-lg overflow-hidden group cursor-pointer border border-secondary-200/20 transition-all duration-500 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
                style={{ transitionDelay: isVisible ? `${300 + index * 80}ms` : "0ms" }}
              >
                {/* Container controls the size — always landscape aspect ratio */}
                <div className="w-full aspect-[4/3] overflow-hidden">
                  <img
                    src={image.src}
                    alt={`${image.projectName} — ${image.category}`}
                    className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
              </div>
            ))
          )}
        </div>

        {/* View All CTA */}
        <div
          className={`text-center mt-12 transition-all duration-700 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <button
            onClick={() => navigate("/gallery")}
            className="btn-luxury group inline-flex items-center gap-2 px-8 py-3 bg-foreground-950 text-background-50 text-sm font-label font-semibold tracking-wide rounded-md hover:bg-foreground-800 transition-all duration-500 hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] active:scale-[0.97] whitespace-nowrap"
          >
            View All Gallery
            <i className="ri-arrow-right-line group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </section>
  );
}