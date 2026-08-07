import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { allGalleryImages } from "@/mocks/gallerySync";

export default function GalleryPreview() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

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

  // Show a diverse selection from synced gallery
  const previewImages = allGalleryImages.slice(0, 9);

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

        {/* Image Grid — auto-synced from all projects */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {previewImages.map((image, index) => (
            <div
              key={image.id}
              className={`image-reveal rounded-lg overflow-hidden group cursor-pointer border border-secondary-200/20 transition-all duration-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: isVisible ? `${300 + index * 80}ms` : "0ms" }}
            >
              <img
                src={image.src}
                alt={`${image.projectName} — ${image.category}`}
                className={`w-full object-cover transition-transform duration-800 group-hover:scale-106 ${
                  index === 2 || index === 4 || index === 7 ? "aspect-[3/4]" : "aspect-[4/3]"
                }`}
                loading="lazy"
              />
            </div>
          ))}
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