import { useState, useEffect } from "react";

export default function FloatingActions() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 600);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-[60] flex flex-col items-end gap-2 md:gap-3">
      {/* WhatsApp */}
      <a
        href="https://wa.me/919845003452"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="group flex items-center gap-2 md:gap-3"
      >
        <span className="text-xs font-body text-foreground-700 bg-background-50/95 backdrop-blur-md px-3 py-1.5 rounded-full border border-secondary-200/40 shadow-[0_2px_12px_rgba(0,0,0,0.05)] opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 transition-all duration-300 whitespace-nowrap">
          Chat with us
        </span>
        <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-green-500 text-background-50 shadow-[0_4px_20px_rgba(34,197,94,0.35)] hover:shadow-[0_6px_28px_rgba(34,197,94,0.45)] hover:scale-110 active:scale-95 transition-all duration-300">
          <i className="ri-whatsapp-line text-lg md:text-xl" />
        </div>
      </a>

      {/* Call */}
      <a
        href="tel:+919845003452"
        aria-label="Call us"
        className="group flex items-center gap-2 md:gap-3"
      >
        <span className="text-xs font-body text-foreground-700 bg-background-50/95 backdrop-blur-md px-3 py-1.5 rounded-full border border-secondary-200/40 shadow-[0_2px_12px_rgba(0,0,0,0.05)] opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 transition-all duration-300 whitespace-nowrap">
          Call us
        </span>
        <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-primary-500 text-background-50 shadow-[0_4px_20px_rgba(166,124,82,0.35)] hover:shadow-[0_6px_28px_rgba(166,124,82,0.45)] hover:scale-110 active:scale-95 transition-all duration-300">
          <i className="ri-phone-line text-lg md:text-xl" />
        </div>
      </a>

      {/* Back to Top */}
      <button
        onClick={scrollToTop}
        aria-label="Back to top"
        className={`flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full bg-foreground-950/80 backdrop-blur-md text-background-50 shadow-[0_4px_20px_rgba(0,0,0,0.15)] hover:bg-foreground-950 hover:scale-110 active:scale-95 transition-all duration-300 ${
          showBackToTop
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 translate-y-4 pointer-events-none"
        }`}
      >
        <i className="ri-arrow-up-line text-base md:text-lg" />
      </button>
    </div>
  );
}