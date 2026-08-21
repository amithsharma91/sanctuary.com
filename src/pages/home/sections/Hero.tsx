import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { cloudinaryAvifSrcSet, cloudinarySrcSet } from "@/utils/imageDelivery";

const HERO_IMAGE =
  "https://res.cloudinary.com/dnyvkptxb/image/upload/v1786793653/cover_photo_2_qiygcd_gawujq.jpg";
const HERO_WIDTHS = [480, 768, 1024, 1440, 1920];

// Single source of truth for the AVIF ladder: consumed by the <source> below
// AND re-exported for the prerender script's <link rel="preload" imagesrcset>,
// so the preload can never drift out of sync with what the browser selects.
export const HERO_AVIF_SRCSET = cloudinaryAvifSrcSet(HERO_IMAGE, HERO_WIDTHS, 60);

export default function Hero() {
  const [revealed, setRevealed] = useState(false);
  const heroRef = useRef<HTMLElement>(null);
  const parallaxRef = useRef<HTMLDivElement>(null);
  const targetRef = useRef({ x: 0, y: 0 });
  const rafRef = useRef<number | null>(null);

  const isTouchDevice =
    typeof window !== "undefined" && "ontouchstart" in window;

  // Once-only entrance reveal — subtle, never repeats
  useEffect(() => {
    const id = window.setTimeout(() => setRevealed(true), 40);
    return () => window.clearTimeout(id);
  }, []);

  // Subtle rAF-driven parallax — disabled on touch devices and under reduced motion
  useEffect(() => {
    if (isTouchDevice) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const applyTransform = () => {
      rafRef.current = null;
      if (!parallaxRef.current) return;
      const { x, y } = targetRef.current;
      parallaxRef.current.style.transform = `translate(${(x * -6).toFixed(2)}px, ${(y * -6).toFixed(2)}px) scale(1.02)`;
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      const rect = heroRef.current.getBoundingClientRect();
      targetRef.current = {
        x: ((e.clientX - rect.left) / rect.width - 0.5) * 2,
        y: ((e.clientY - rect.top) / rect.height - 0.5) * 2,
      };
      if (rafRef.current === null) {
        rafRef.current = requestAnimationFrame(applyTransform);
      }
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    };
  }, [isTouchDevice]);

  const scrollToProjects = () => {
    const el = document.getElementById("featured-projects");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      ref={heroRef}
      className="relative w-full min-h-screen supports-[height:100svh]:min-h-[100svh] flex items-center justify-center overflow-hidden"
    >
      {/* Background Image — once-only subtle reveal, no scale animation on touch */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className={`absolute inset-0 transition-transform duration-[1800ms] ease-out ${
            revealed
              ? "scale-100"
              : isTouchDevice
                ? "scale-100"
                : "scale-[1.06]"
          }`}
        >
          <div
            ref={parallaxRef}
            className="absolute inset-0 will-change-transform"
            style={
              isTouchDevice
                ? undefined
                : { transform: "translate(0px, 0px) scale(1.02)" }
            }
          >
            <picture className="block w-full h-full">
              <source
                type="image/avif"
                srcSet={HERO_AVIF_SRCSET}
                sizes="100vw"
              />
              <img
                src={HERO_IMAGE}
                srcSet={cloudinarySrcSet(HERO_IMAGE, HERO_WIDTHS)}
                sizes="100vw"
                alt="Sanctuary Architects & Designers — Luxury Architecture"
                loading="eager"
                fetchPriority="high"
                decoding="async"
                className="w-full h-full object-cover object-center md:object-top"
              />
            </picture>
          </div>
        </div>
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/25 to-black/40" />

      {/* Content */}
      <div className="relative z-10 w-full px-6 md:px-10 lg:px-14 pt-24 md:pt-28 pb-12">
        <div className="max-w-5xl mx-auto text-center">
          {/* Headline */}
          <h1
            className={`font-heading text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-light text-background-50 leading-[1.05] tracking-tight mb-6 transition-all duration-1000 ${
              revealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Luxury Architecture
            <br />
            Crafted Around
            <br />
            <span className="italic font-light">People & Place.</span>
          </h1>

          {/* Subtitle */}
          <p
            className={`text-sm md:text-base font-body text-background-200/80 max-w-xl mx-auto mb-10 leading-relaxed transition-all duration-1000 delay-150 ${
              revealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            Designing iconic residential, hospitality, and commercial spaces
            with timeless elegance since 2003. Based in Bangalore, crafting
            globally.
          </p>

          {/* Buttons */}
          <div
            className={`flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-1000 delay-300 ${
              revealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <button
              onClick={scrollToProjects}
              className="btn-luxury w-full sm:w-auto px-8 py-3.5 bg-primary-500 text-background-50 text-sm font-label font-semibold tracking-wide rounded-md hover:bg-primary-600 transition-all duration-500 hover:shadow-[0_6px_24px_rgba(166,124,82,0.18)] active:scale-[0.97] whitespace-nowrap"
            >
              Explore Projects
            </button>
            <Link
              to="/contact"
              className="w-full sm:w-auto px-8 py-3.5 border border-background-200/40 text-background-50 text-sm font-label font-semibold tracking-wide rounded-md hover:bg-background-50/10 hover:border-background-50/60 transition-all duration-400 active:scale-[0.97] whitespace-nowrap text-center inline-block"
            >
              Book Consultation
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-3 transition-all duration-1000 delay-500 ${
          revealed ? "opacity-100" : "opacity-0"
        }`}
      >
        <span className="text-[10px] font-body tracking-[0.2em] uppercase text-background-200/60">
          Scroll
        </span>
        <div className="w-[1px] h-10 bg-gradient-to-b from-background-200/40 to-transparent">
          <div className="w-full h-4 bg-background-50/80 rounded-full animate-scroll-line" />
        </div>
      </div>
    </section>
  );
}