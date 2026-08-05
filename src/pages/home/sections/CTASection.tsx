import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

export default function CTASection() {
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
    <section id="contact" ref={ref} className="relative py-24 md:py-32 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://readdy.ai/api/search-image?query=Luxury%20modern%20architecture%20interior%20with%20warm%20ambient%20lighting%2C%20elegant%20marble%20and%20wood%20details%2C%20dramatic%20double%20height%20space%2C%20soft%20golden%20hour%20light%20streaming%20through%20large%20windows%2C%20sophisticated%20serene%20atmosphere%2C%20editorial%20architectural%20photography%2C%20warm%20amber%20and%20earth%20tones%2C%20cinematic%20wide%20shot%2C%20minimalist%20luxury%20design&width=1920&height=1080&seq=sanctuary-cta-bg&orientation=landscape"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/50 to-black/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full px-6 md:px-10 lg:px-14">
        <div className="max-w-3xl mx-auto text-center">
          <h2
            className={`font-heading text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-light text-background-50 leading-[1.08] mb-6 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Let&apos;s Create
            <br />
            Something Exceptional
            <br />
            Together.
          </h2>

          <p
            className={`text-sm md:text-base font-body text-background-200/75 max-w-lg mx-auto mb-10 leading-relaxed transition-all duration-1000 delay-100 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            Every great project begins with a conversation. Reach out to discuss
            your vision, and let us bring it to life with intention, elegance,
            and timeless design.
          </p>

          <div
            className={`flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-1000 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <button
              onClick={() => navigate("/contact")}
              className="btn-luxury w-full sm:w-auto px-9 py-3.5 bg-primary-500 text-background-50 text-sm font-label font-semibold tracking-wide rounded-md hover:bg-primary-600 transition-all duration-500 hover:shadow-[0_0_32px_rgba(166,124,82,0.4)] active:scale-[0.97] whitespace-nowrap"
            >
              Book Consultation
            </button>
            <button
              onClick={() => navigate("/contact")}
              className="w-full sm:w-auto px-9 py-3.5 border border-background-200/30 text-background-50 text-sm font-label font-semibold tracking-wide rounded-md hover:bg-background-50/10 hover:border-background-50/50 transition-all duration-400 active:scale-[0.97] whitespace-nowrap"
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}