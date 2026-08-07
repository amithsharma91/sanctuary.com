import { useState, useCallback } from "react";
import PageLoader from "@/components/feature/PageLoader";
import Navbar from "@/components/feature/Navbar";
import Footer from "@/components/feature/Footer";
import PageMeta from "@/components/feature/PageMeta";
import Hero from "./sections/Hero";
import TrustedBy from "./sections/TrustedBy";
import AboutPreview from "./sections/AboutPreview";
import Services from "./sections/Services";
import FeaturedCompletedProjects from "./sections/FeaturedCompletedProjects";
import GalleryPreview from "./sections/GalleryPreview";
import Awards from "./sections/Awards";
import GoogleReviews from "./sections/GoogleReviews";
import CTASection from "./sections/CTASection";

const homeSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Sanctuary Architects & Designers",
  url: "https://sanctuaryarchitects.in",
  description: "Luxury architecture and interior design studio based in Bangalore, crafting timeless residential, hospitality, and commercial spaces since 2003.",
  potentialAction: {
    "@type": "SearchAction",
    target: "https://sanctuaryarchitects.in/search?q={search_term_string}",
    "query-input": "required name=search_term_string",
  },
};

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadComplete = useCallback(() => {
    setIsLoading(false);
  }, []);

  return (
    <div className="relative">
      <PageMeta
        title="Sanctuary Architects & Designers | Luxury Architecture & Interior Design Studio Bangalore"
        description="Sanctuary Architects & Designers — crafting timeless architecture and interior experiences since 2003. Iconic residential, hospitality, and commercial spaces in Bangalore and beyond."
        keywords="luxury architecture Bangalore, interior design studio, residential architects, hospitality design, commercial architecture, Sanctuary Architects, best architects India"
        schema={homeSchema}
        canonicalPath="/"
      />
      {isLoading && <PageLoader onComplete={handleLoadComplete} />}

      <Navbar />

      <main>
        <Hero />
        <TrustedBy />
        <AboutPreview />
        <Services />
        <FeaturedCompletedProjects />
        <GalleryPreview />
        <Awards />
        <GoogleReviews />
        <CTASection />
      </main>

      <Footer />
    </div>
  );
}