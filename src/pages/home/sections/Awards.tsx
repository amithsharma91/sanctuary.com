import { useState, useEffect, useRef } from "react";
import { awards } from "@/mocks/awards";

export default function Awards() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

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
              Awards &amp;
              <br />
              Recognition.
            </h2>
          </div>
          <p
            className={`text-sm font-body text-secondary-500 max-w-sm leading-relaxed transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            A record of recognition from national and international institutions —
            celebrating projects that push the boundaries of design.
          </p>
        </div>

        {/* Editorial Awards List */}
        <div className="max-w-5xl mx-auto">
          {awards.map((award, index) => (
            <div
              key={award.id}
              className={`flex flex-col sm:flex-row gap-3 sm:gap-6 border-t border-secondary-200/40 py-6 md:py-7 transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: isVisible ? `${150 + index * 80}ms` : "0ms" }}
            >
              <span className="font-heading text-2xl md:text-3xl font-light text-primary-500 sm:w-16 shrink-0 leading-none">
                {award.id}
              </span>
              <div className="flex-1 min-w-0">
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-2">
                  <h3 className="font-heading text-lg md:text-xl font-light text-foreground-950 leading-snug">
                    {award.organization}
                  </h3>
                  {award.year && (
                    <span className="text-xs font-body tracking-[0.08em] text-secondary-400 shrink-0">
                      {award.year}
                    </span>
                  )}
                </div>
                <p className="text-[10px] font-body tracking-[0.12em] uppercase text-primary-500 mb-1.5">
                  {award.recognition} — {award.segment}
                </p>
                <p className="text-sm font-body text-secondary-600 leading-relaxed">
                  {award.project}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}