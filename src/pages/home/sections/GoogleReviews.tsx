import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { featuredGoogleReviews } from "@/mocks/googleReviews";

export default function GoogleReviews() {
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
    <section id="reviews" ref={ref} className="relative py-20 md:py-28 bg-background-100">
      <div className="w-full px-6 md:px-10 lg:px-14">
        {/* Section Header */}
        <div className="text-center mb-14 md:mb-20">
          <div
            className={`flex items-center justify-center gap-3 mb-4 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <GoogleLogo className="w-6 h-6" />
            <span className="font-heading text-2xl md:text-3xl font-light text-foreground-950 tracking-tight">
              Google Reviews
            </span>
          </div>

          <p
            className={`text-sm font-body text-secondary-500 tracking-wide mb-8 transition-all duration-700 delay-100 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            40+ Reviews
          </p>

          <h2
            className={`font-heading text-3xl md:text-4xl font-light text-foreground-950 mb-3 transition-all duration-700 delay-150 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            What People Say About Us.
          </h2>
          <p
            className={`text-sm font-body text-secondary-500 max-w-md mx-auto transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Authentic feedback from our clients and collaborators.
          </p>
        </div>

        {/* Six reviews from shared data */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 max-w-6xl mx-auto items-start">
          {featuredGoogleReviews.map((review, index) => (
            <div
              key={review.name}
              className={`card-luxury bg-background-50 rounded-lg border border-secondary-200/30 p-6 md:p-7 transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
              style={{
                transitionDelay: isVisible ? `${300 + index * 100}ms` : "0ms",
              }}
            >
              {/* Google branding */}
              <div className="flex items-center gap-2 mb-4">
                <GoogleLogo className="w-5 h-5 flex-shrink-0" />
                <span className="text-xs font-body text-secondary-400">
                  Google Review
                </span>
              </div>

              {/* Review text */}
              {review.review ? (
                <p className="text-sm font-body text-secondary-600 leading-relaxed mb-5 whitespace-pre-line line-clamp-6">
                  &ldquo;{review.review}&rdquo;
                </p>
              ) : (
                <p className="text-sm font-body text-secondary-400 leading-relaxed mb-5 italic">
                  Original review available on Google Maps.
                </p>
              )}

              {/* Name */}
              <p className="font-heading text-base font-light text-foreground-950 mb-4">
                {review.name}
              </p>

              {/* Button */}
              <a
                href={review.googleUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-luxury inline-flex items-center gap-1.5 px-5 py-2.5 bg-background-50 border border-secondary-200/50 text-xs font-label font-semibold text-foreground-800 rounded-md hover:bg-secondary-50 hover:border-secondary-300 transition-all duration-300 active:scale-[0.97] whitespace-nowrap"
              >
                View Original Review
                <i className="ri-external-link-line" />
              </a>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div
          className={`text-center mt-12 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
          style={{ transitionDelay: isVisible ? "800ms" : "0ms" }}
        >
          <Link
            to="/testimonials"
            className="btn-luxury group inline-flex items-center gap-2 px-8 py-3 bg-foreground-950 text-background-50 text-sm font-label font-semibold tracking-wide rounded-md hover:bg-foreground-800 transition-all duration-500 active:scale-[0.97] whitespace-nowrap"
          >
            View All Reviews
            <i className="ri-arrow-right-line group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function GoogleLogo({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Google"
    >
      <path
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"
        fill="#4285F4"
      />
      <path
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
        fill="#34A853"
      />
      <path
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
        fill="#FBBC05"
      />
      <path
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
        fill="#EA4335"
      />
    </svg>
  );
}