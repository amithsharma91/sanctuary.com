import { useState, useEffect, useRef } from "react";
import { clients } from "@/mocks/clients";

export default function TrustedBy() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

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

  // Double the array for seamless looping
  const doubledClients = [...clients, ...clients];

  return (
    <section ref={ref} className="relative py-14 md:py-18 bg-background-100 overflow-hidden">
      <div className="w-full px-6 md:px-10 lg:px-14 mb-10">
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
      >
        <div className="flex animate-marquee">
          {doubledClients.map((client, index) => (
            <div
              key={`${client.name}-${index}`}
              className="flex-shrink-0 mx-8 md:mx-12 lg:mx-14 group cursor-default"
            >
              <span className="text-lg md:text-xl font-heading font-light text-secondary-300 group-hover:text-primary-500 transition-colors duration-500 whitespace-nowrap select-none">
                {client.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}