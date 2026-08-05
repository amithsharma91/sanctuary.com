import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

export default function Hero() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [loaded, setLoaded] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    setLoaded(true);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      const rect = heroRef.current.getBoundingClientRect();
      setMousePos({
        x: ((e.clientX - rect.left) / rect.width - 0.5) * 2,
        y: ((e.clientY - rect.top) / rect.height - 0.5) * 2,
      });
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const scrollToProjects = () => {
    const el = document.getElementById("featured-projects");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      ref={heroRef}
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 transition-transform duration-[20000ms] ease-out"
        style={{
          transform: loaded
            ? "scale(1)"
            : "scale(1.08)",
          ...(loaded
            ? {
                transform: `scale(1.02) translate(${mousePos.x * -4}px, ${mousePos.y * -4}px)`,
              }
            : {}),
        }}
      >
        <img
          src="https://readdy.ai/api/search-image?query=Ultra%20luxury%20modern%20villa%20exterior%20at%20golden%20hour%2C%20warm%20natural%20stone%20facade%20with%20large%20glass%20windows%2C%20dramatic%20architecture%20with%20clean%20geometric%20lines%2C%20infinity%20pool%20reflecting%20sunset%20sky%2C%20lush%20tropical%20landscaping%2C%20misty%20mountain%20backdrop%2C%20cinematic%20wide%20shot%2C%20editorial%20architectural%20photography%2C%20warm%20amber%20and%20earth%20tones%2C%20serene%20sophisticated%20atmosphere&width=1920&height=1080&seq=sanctuary-hero-2026&orientation=landscape"
          alt="Sanctuary Architects & Designers — Luxury Architecture"
          className="w-full h-full object-cover object-top"
        />
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/25 to-black/40" />

      {/* Content */}
      <div className="relative z-10 w-full px-6 md:px-10 lg:px-14 pt-24 md:pt-28 pb-12">
        <div className="max-w-5xl mx-auto text-center">
          {/* Headline */}
          <h1
            className={`font-heading text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-light text-background-50 leading-[1.05] tracking-tight mb-6 transition-all duration-1000 ${
              loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
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
              loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            Designing iconic residential, hospitality, and commercial spaces
            with timeless elegance since 2003. Based in Bangalore, crafting
            globally.
          </p>

          {/* Buttons */}
          <div
            className={`flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-1000 delay-300 ${
              loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <button
              onClick={scrollToProjects}
              className="btn-luxury w-full sm:w-auto px-8 py-3.5 bg-primary-500 text-background-50 text-sm font-label font-semibold tracking-wide rounded-md hover:bg-primary-600 transition-all duration-500 hover:shadow-[0_0_30px_rgba(166,124,82,0.35)] active:scale-[0.97] whitespace-nowrap"
            >
              Explore Projects
            </button>
            <button
              onClick={() => navigate("/contact")}
              className="w-full sm:w-auto px-8 py-3.5 border border-background-200/40 text-background-50 text-sm font-label font-semibold tracking-wide rounded-md hover:bg-background-50/10 hover:border-background-50/60 transition-all duration-400 active:scale-[0.97] whitespace-nowrap"
            >
              Book Consultation
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-3 transition-all duration-1000 delay-500 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
      >
        <span className="text-[10px] font-body tracking-[0.2em] uppercase text-background-200/60">
          Scroll
        </span>
        <div className="w-[1px] h-10 bg-gradient-to-b from-background-200/40 to-transparent">
          <div className="w-full h-4 bg-background-50/80 rounded-full animate-[scrollLine_2s_ease-in-out_infinite]" />
        </div>
      </div>
    </section>
  );
}