import { useState } from "react";
import { resolveOptimizedImage } from "@/utils/imageDelivery";

const logoUrl = "https://storage.helloreaddy.io/project_files/76dce7c4-6caa-4272-98e8-4149c442ecfc/e2f8a5e4-fa2a-4830-bacb-5677e69921b9_compressed_20854-removebg-preview-1.webp";

interface LogoProps {
  className?: string;
  alt?: string;
}

export default function Logo({ className = "", alt = "Sanctuary Architects & Designers" }: LogoProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <span className={`font-heading text-base md:text-lg font-light text-foreground-950 tracking-tight whitespace-nowrap ${className}`}>
        Sanctuary Architects &amp; Designers
      </span>
    );
  }

  return (
    <img
      src={resolveOptimizedImage(logoUrl)}
      alt={alt}
      className={`object-contain ${className}`}
      loading="eager"
      fetchPriority="high"
      decoding="async"
      onError={() => setHasError(true)}
    />
  );
}