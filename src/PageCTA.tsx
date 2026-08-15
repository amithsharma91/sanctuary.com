import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

interface PageCTAProps {
  title?: string;
  subtitle?: string;
  primaryLabel?: string;
  secondaryLabel?: string;
  primaryHref?: string;
  secondaryHref?: string;
}

export default function PageCTA({
  title = "Ready To Build Your Dream Project?",
  subtitle = "Every great project begins with a conversation. Reach out to discuss your vision, and let us bring it to life with intention, elegance, and timeless design.",
  primaryLabel = "Book Consultation",
  secondaryLabel = "Contact Us",
  primaryHref = "/contact",
  secondaryHref = "/contact",
}: PageCTAProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.25 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://res.cloudinary.com/dnyvkptxb/image/upload/v1786014640/COVER_PHOTO_nqhtcx.jpg"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/50 to-black/70" />
      </div>

      <div className="relative z-10 w-full px-6 md:px-10 lg:px-14">
        <div className="max-w-3xl mx-auto text-center">
          <h2
            className={`font-heading text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-light text-background-50 leading-[1.08] mb-6 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            {title}
          </h2>
          <p
            className={`text-sm md:text-base font-body text-background-200/75 max-w-lg mx-auto mb-10 leading-relaxed transition-all duration-1000 delay-100 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            {subtitle}
          </p>
          <div
            className={`flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-1000 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <button
              onClick={() => navigate(primaryHref)}
              className="btn-luxury w-full sm:w-auto px-9 py-3.5 bg-primary-500 text-background-50 text-sm font-label font-semibold tracking-wide rounded-md hover:bg-primary-600 transition-all duration-500 hover:shadow-[0_6px_24px_rgba(166,124,82,0.2)] active:scale-[0.97] whitespace-nowrap"
            >
              {primaryLabel}
            </button>
            <button
              onClick={() => navigate(secondaryHref)}
              className="w-full sm:w-auto px-9 py-3.5 border border-background-200/30 text-background-50 text-sm font-label font-semibold tracking-wide rounded-md hover:bg-background-50/10 hover:border-background-50/50 transition-all duration-400 active:scale-[0.97] whitespace-nowrap"
            >
              {secondaryLabel}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}