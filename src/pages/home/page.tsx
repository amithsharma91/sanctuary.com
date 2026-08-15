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
import { servicesSchema } from "@/mocks/seo";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadComplete = useCallback(() => {
    setIsLoading(false);
  }, []);

  return (
    <div className="relative">
      <PageMeta
        title="Architects & Interior Designers in Bangalore | Sanctuary"
        description="Sanctuary Architects & Designers — architects and interior designers in Bangalore since 2003, crafting timeless luxury villas, hospitality spaces, commercial architecture and prefab design across India."
        keywords="architects in Bangalore, architecture firms in Bangalore, interior designers in Bangalore, residential architects, hospitality architects, commercial architects, prefab architecture, Sanctuary Architects"
        schema={servicesSchema}
        ogImage="https://res.cloudinary.com/dnyvkptxb/image/upload/v1786620569/LEVITATING_HOUSE_-_13_u0ygk7.jpg"
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