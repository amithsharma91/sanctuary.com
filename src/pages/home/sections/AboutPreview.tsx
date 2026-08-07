import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

export default function AboutPreview() {
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
    <section id="about-preview" ref={ref} className="relative py-20 md:py-28 bg-background-50">
      <div className="w-full px-6 md:px-10 lg:px-14">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Image */}
          <div
            className={`w-full lg:w-1/2 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
            }`}
          >
            <div className="image-reveal rounded-lg">
              <img
                src="https://readdy.ai/api/search-image?query=Luxury%20architectural%20design%20studio%20interior%2C%20warm%20wood%20and%20stone%20office%20space%2C%20large%20drafting%20table%20with%20architectural%20plans%2C%20natural%20light%20from%20large%20windows%2C%20minimalist%20elegant%20workspace%2C%20design%20sketches%20on%20walls%2C%20sophisticated%20creative%20atmosphere%2C%20warm%20earth%20tones%2C%20editorial%20interior%20photography%2C%20serene%20professional%20environment&width=900&height=1100&seq=about-preview-studio&orientation=portrait"
                alt="Sanctuary Architects & Designers Studio"
                className="w-full aspect-[4/5] object-cover rounded-lg"
              />
            </div>
          </div>

          {/* Content */}
          <div className="w-full lg:w-1/2">
            <p
              className={`text-xs font-body tracking-[0.15em] uppercase text-primary-500 mb-4 transition-all duration-700 delay-100 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              Our Philosophy
            </p>
            <h2
              className={`font-heading text-3xl md:text-5xl lg:text-6xl font-light text-foreground-950 leading-[1.1] mb-6 transition-all duration-700 delay-200 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              Designing Spaces
              <br />
              That Endure.
            </h2>
            <p
              className={`text-sm md:text-base font-body text-secondary-600 leading-relaxed max-w-lg mb-8 transition-all duration-700 delay-300 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              At Sanctuary, we believe architecture is more than form and
              function — it is an emotional experience. Every space we design
              begins with deep listening: to the land, to the light, and to the
              lives that will unfold within it. Since 2003, our studio has
              crafted residences, hospitality destinations, and commercial
              landmarks that honour context, celebrate materiality, and stand
              the test of time.
            </p>
            <button
              onClick={() => navigate("/about")}
              className={`btn-luxury group inline-flex items-center gap-2 px-7 py-3 bg-foreground-950 text-background-50 text-sm font-label font-semibold tracking-wide rounded-md hover:bg-foreground-800 transition-all duration-500 hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] active:scale-[0.97] whitespace-nowrap ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: isVisible ? "400ms" : "0ms" }}
            >
              Read More
              <i className="ri-arrow-right-line group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}