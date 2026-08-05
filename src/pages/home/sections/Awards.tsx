import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { awards } from "@/mocks/awards";

export default function Awards() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="awards" ref={ref} className="relative py-20 md:py-28 bg-background-50">
      <div className="w-full px-6 md:px-10 lg:px-14">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14 md:mb-20">
          <div>
            <p
              className={`text-xs font-body tracking-[0.15em] uppercase text-primary-500 mb-3 transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              Recognition
            </p>
            <h2
              className={`font-heading text-3xl md:text-5xl lg:text-6xl font-light text-foreground-950 leading-[1.1] transition-all duration-700 delay-100 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              Awards &
              <br />
              Recognition.
            </h2>
          </div>
        </div>

        {/* Awards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {awards.slice(0, 4).map((award, index) => (
            <div
              key={`${award.title}-${award.year}`}
              className={`card-luxury group bg-background-100 rounded-lg p-5 md:p-6 border border-secondary-200/30 gold-glow cursor-default transition-all duration-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: isVisible ? `${200 + index * 100}ms` : "0ms" }}
            >
              <span className="text-[10px] font-body tracking-[0.12em] uppercase text-primary-500 mb-3 block">
                {award.year}
              </span>
              <h3 className="font-heading text-lg md:text-xl font-light text-foreground-950 mb-2 group-hover:text-primary-500 transition-colors duration-400">
                {award.title}
              </h3>
              <p className="text-xs font-body text-secondary-500">
                {award.organization}
              </p>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div
          className={`text-center mt-10 transition-all duration-700 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <button
            onClick={() => navigate("/awards")}
            className="btn-luxury group inline-flex items-center gap-2 px-8 py-3 bg-foreground-950 text-background-50 text-sm font-label font-semibold tracking-wide rounded-md hover:bg-foreground-800 transition-all duration-500 hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] active:scale-[0.97] whitespace-nowrap"
          >
            View All Awards
            <i className="ri-arrow-right-line group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </section>
  );
}