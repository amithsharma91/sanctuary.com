import { useState, useEffect } from "react";
import Logo from "./Logo";

export default function PageLoader({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState<"drawing" | "fading" | "dissolving">("drawing");
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    let rafId: number;
    let startTime: number | null = null;
    const duration = 2000;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const rawProgress = Math.min(elapsed / duration, 1);

      const eased = 1 - Math.pow(1 - rawProgress, 3);
      const currentProgress = Math.floor(eased * 100);
      setProgress(currentProgress);

      if (rawProgress < 0.4) {
        setPhase("drawing");
      } else if (rawProgress < 0.7) {
        setPhase("fading");
      } else {
        setPhase("dissolving");
      }

      if (rawProgress < 1) {
        rafId = requestAnimationFrame(animate);
      } else {
        setTimeout(() => {
          setIsVisible(false);
          onComplete();
        }, 500);
      }
    };

    rafId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafId);
  }, [onComplete]);

  if (!isVisible) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background-50 transition-opacity duration-800 ${
        phase === "dissolving" ? "opacity-0" : "opacity-100"
      }`}
    >
      <div className="relative flex flex-col items-center gap-10">
        {/* Top architectural line */}
        <div className="relative w-56 h-[1px] bg-secondary-300 overflow-hidden">
          <div
            className="absolute top-0 left-0 h-full bg-primary-500 transition-all duration-75"
            style={{ width: `${Math.min((progress / 40) * 100, 100)}%` }}
          />
        </div>

        {/* Logo */}
        <div
          className="transition-all duration-800"
          style={{
            opacity: phase === "fading" || phase === "dissolving" ? 0 : 1,
            transform:
              phase === "fading" || phase === "dissolving"
                ? "translateY(-24px)"
                : "translateY(0)",
          }}
        >
          <Logo className="w-48 md:w-64 lg:w-80 h-auto" alt="Sanctuary Architects & Designers" />
        </div>

        {/* Bottom architectural line */}
        <div className="relative w-56 h-[1px] bg-secondary-300 overflow-hidden">
          <div
            className="absolute top-0 left-0 h-full bg-primary-500 transition-all duration-75"
            style={{ width: `${Math.min((progress / 40) * 100, 100)}%` }}
          />
        </div>

        {/* Percentage */}
        <div className="flex items-baseline gap-1">
          <span
            className="font-label text-5xl md:text-6xl font-light text-foreground-950 tracking-tight"
            style={{ fontVariantNumeric: "tabular-nums" }}
          >
            {progress}
          </span>
          <span className="font-label text-sm text-secondary-500">%</span>
        </div>

        {/* Subtitle */}
        <p className="text-xs font-body text-secondary-400 tracking-[0.15em] uppercase">
          Crafted with intention
        </p>
      </div>
    </div>
  );
}