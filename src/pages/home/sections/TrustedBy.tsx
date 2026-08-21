import { useState, useEffect, useRef, useCallback } from "react";
import { clients } from "@/mocks/clients";
import { resolveOptimizedImage, optimizedVariantSrcSet } from "@/utils/imageDelivery";

export default function TrustedBy() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  // Triple the array so the loop has enough buffer for all screen sizes
  const loopClients = [...clients, ...clients, ...clients];

  const handleMouseEnter = useCallback(() => {
    if (trackRef.current) {
      trackRef.current.style.animationPlayState = "paused";
    }
  }, []);

  const handleMouseLeave = useCallback(() => {
    if (trackRef.current) {
      trackRef.current.style.animationPlayState = "running";
    }
  }, []);

  // Each logo gets roughly 2.5s of screen time; 14 logos ≈ 35s per full cycle
  const duration = Math.max(28, clients.length * 2.5);

  return (
    <section ref={ref} className="relative py-14 md:py-16 bg-background-100 overflow-hidden">
      <div className="w-full px-6 md:px-10 lg:px-14 mb-8 md:mb-10">
        <p
          className={`text-center text-xs font-body tracking-[0.15em] uppercase text-secondary-400 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          Trusted by India&apos;s finest
        </p>
      </div>

      {/* Marquee */}
      <div
        className={`relative w-full overflow-hidden transition-all duration-700 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onTouchStart={handleMouseEnter}
        onTouchEnd={handleMouseLeave}
      >
        <div
          ref={trackRef}
          className="flex items-center animate-marquee"
          style={{
            animationDuration: `${duration}s`,
            width: "max-content",
          }}
        >
          {loopClients.map((client, index) => (
            <div
              key={`${client.name}-${index}`}
              className="flex-shrink-0 mx-5 md:mx-8 lg:mx-10 group cursor-default"
              aria-hidden={index >= clients.length ? "true" : undefined}
            >
              {client.logo ? (
                <div className="h-8 md:h-10 lg:h-11 w-24 md:w-28 lg:w-32 flex items-center justify-center">
                  <img
                    src={resolveOptimizedImage(client.logo)}
                    srcSet={optimizedVariantSrcSet(resolveOptimizedImage(client.logo), [64, 96])}
                    sizes="96px"
                    alt={index < clients.length ? `${client.name} logo` : ""}
                    className="max-h-full max-w-full object-contain filter grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              ) : (
                <span className="text-base md:text-lg font-heading font-light text-secondary-300 group-hover:text-primary-500 transition-colors duration-500 whitespace-nowrap select-none">
                  {client.name}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}