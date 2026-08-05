import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { testimonials } from "@/mocks/testimonials";

export default function GoogleReviews() {
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
    <section id="reviews" ref={ref} className="relative py-20 md:py-28 bg-background-100">
      <div className="w-full px-6 md:px-10 lg:px-14">
        {/* Section Header */}
        <div className="text-center mb-14 md:mb-20">
          <div
            className={`flex items-center justify-center gap-2 mb-4 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            <span className="text-sm font-body text-secondary-500">
              Google Reviews
            </span>
          </div>

          <div
            className={`flex items-center justify-center gap-2 mb-2 transition-all duration-700 delay-100 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <span className="font-heading text-4xl md:text-5xl font-light text-foreground-950">
              4.7
            </span>
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" fill={i < 4 ? "#FBBC05" : "#FBBC05"} />
                </svg>
              ))}
            </div>
          </div>

          <p
            className={`text-xs font-body text-secondary-400 transition-all duration-700 delay-150 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Based on 44+ reviews
          </p>
        </div>

        {/* Review Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6 max-w-4xl mx-auto">
          {testimonials.map((review, index) => (
            <div
              key={review.name}
              className={`card-luxury glass-card rounded-lg p-6 md:p-7 border border-secondary-200/20 transition-all duration-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: isVisible ? `${300 + index * 100}ms` : "0ms" }}
            >
              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <svg key={i} className="w-4 h-4" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" fill="#FBBC05" />
                  </svg>
                ))}
              </div>

              <p className="text-sm font-body text-secondary-600 leading-relaxed mb-5">
                &ldquo;{review.text}&rdquo;
              </p>

              <div>
                <p className="text-sm font-body font-medium text-foreground-800">
                  {review.name}
                </p>
                <p className="text-xs font-body text-secondary-400">
                  {review.role}
                </p>
              </div>
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
            onClick={() => navigate("/testimonials")}
            className="btn-luxury group inline-flex items-center gap-2 px-8 py-3 bg-foreground-950 text-background-50 text-sm font-label font-semibold tracking-wide rounded-md hover:bg-foreground-800 transition-all duration-500 hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] active:scale-[0.97] whitespace-nowrap"
          >
            View All Reviews
            <i className="ri-arrow-right-line group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </section>
  );
}