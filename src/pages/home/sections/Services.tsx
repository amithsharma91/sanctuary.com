import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { services } from "@/mocks/services";

export default function Services() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" ref={ref} className="relative py-20 md:py-28 bg-background-100">
      <div className="w-full px-6 md:px-10 lg:px-14">
        {/* Section Header */}
        <div className="text-center mb-14 md:mb-20">
          <p
            className={`text-xs font-body tracking-[0.15em] uppercase text-primary-500 mb-3 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            What We Do
          </p>
          <h2
            className={`font-heading text-3xl md:text-5xl lg:text-6xl font-light text-foreground-950 leading-[1.1] transition-all duration-700 delay-100 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            Comprehensive Design
            <br />
            Services.
          </h2>
        </div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {services.map((service, index) => {
            const onClick = service.href ? () => navigate(service.href) : undefined;
            return (
              <div
                key={service.title}
                onClick={onClick}
                onKeyDown={
                  onClick
                    ? (e) => {
                        if (e.key === "Enter") onClick();
                      }
                    : undefined
                }
                role={onClick ? "button" : undefined}
                tabIndex={onClick ? 0 : undefined}
                aria-label={onClick ? `${service.title} — view ${service.title} page` : undefined}
                className={`card-luxury group bg-background-50 rounded-lg p-6 md:p-8 border border-secondary-200/40 gold-glow cursor-pointer transition-all duration-500 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: isVisible ? `${200 + index * 80}ms` : "0ms" }}
              >
                {/* Icon */}
                <div className="w-12 h-12 flex items-center justify-center rounded-md bg-primary-100/40 text-primary-500 mb-5 group-hover:bg-primary-500 group-hover:text-background-50 transition-all duration-500 group-hover:rotate-6">
                  <i className={`${service.icon} text-xl`} />
                </div>

                {/* Title */}
                <h3 className="font-heading text-xl md:text-2xl font-light text-foreground-950 mb-3 group-hover:text-primary-500 transition-colors duration-400">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-sm font-body text-secondary-500 leading-relaxed mb-4">
                  {service.description}
                </p>

                {/* Hover indicator */}
                <span className="inline-flex items-center text-xs font-label font-semibold text-primary-500 tracking-wide opacity-0 group-hover:opacity-100 transition-all duration-400">
                  <i className="ri-arrow-right-line text-base" />
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}