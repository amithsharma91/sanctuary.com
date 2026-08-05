import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/feature/Navbar";
import Footer from "@/components/feature/Footer";
import PageHero from "@/components/feature/PageHero";
import PageCTA from "@/components/feature/PageCTA";
import PageMeta from "@/components/feature/PageMeta";

const COVER_IMAGE = "https://storage.helloreaddy.io/project_files/76dce7c4-6caa-4272-98e8-4149c442ecfc/73b78ab0-0ec9-49b8-bef6-c542ac7ba590_compressed_cover-photo.webp";

export default function ResidentialProjects() {
  const navigate = useNavigate();

  return (
    <div className="relative bg-background-50">
      <PageMeta
        title="Residential Architecture"
        description="VILLA MAAYA — a 3800 SQFT holiday home in Bengaluru Rural by Sanctuary Architects & Designers. An evocative blend of contemporary and vernacular architecture."
        keywords="luxury residential architecture, Villa Maaya, Bengaluru Rural, custom home design India, Sanctuary residential projects"
        canonicalPath="/projects/residential"
      />
      <Navbar />
      <main>
        <PageHero
          title="Residential Architecture"
          subtitle="Private homes, villas, and residences crafted as sanctuaries of comfort, beauty, and personal expression — each one a unique response to its inhabitants and its landscape."
          image="https://readdy.ai/api/search-image?query=Luxury%20private%20villa%20exterior%20at%20golden%20hour%2C%20warm%20stone%20and%20wood%20facade%2C%20floor%20to%20ceiling%20glass%2C%20infinity%20pool%20reflecting%20sunset%2C%20lush%20tropical%20garden%2C%20contemporary%20architecture%2C%20serene%20peaceful%20atmosphere%2C%20editorial%20architectural%20photography%2C%20warm%20amber%20and%20earth%20tones%2C%20cinematic%20wide%20shot&width=1920&height=1080&seq=residential-hero&orientation=landscape"
          breadcrumb={[{ label: "Projects", href: "/projects" }, { label: "Residential" }]}
        />

        <section className="py-16 md:py-24 bg-background-50">
          <div className="w-full px-6 md:px-10 lg:px-14">
            <div className="max-w-4xl mx-auto">
              <VillaMaayaCard onViewProject={() => navigate("/projects/residential/villa-maaya")} />
            </div>
          </div>
        </section>

        <PageCTA />
      </main>
      <Footer />
    </div>
  );
}

function VillaMaayaCard({ onViewProject }: { onViewProject: () => void }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
      <div
        className={`w-full lg:w-1/2 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
        }`}
      >
        <div className="image-reveal rounded-lg overflow-hidden border border-secondary-200/30">
          <img
            src={COVER_IMAGE}
            alt="VILLA MAAYA — Bengaluru Rural"
            className="w-full h-auto object-contain transition-transform duration-800 hover:scale-105"
            loading="eager"
          />
        </div>
      </div>
      <div
        className={`w-full lg:w-1/2 transition-all duration-1000 delay-150 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <span className="text-[10px] font-body tracking-[0.15em] uppercase text-primary-500">Residential — Bengaluru Rural</span>
        <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-light text-foreground-950 mt-2 mb-1 leading-[1.1]">
          VILLA MAAYA
        </h2>
        <p className="text-sm md:text-base font-body text-secondary-600 leading-relaxed mb-6 max-w-lg mt-4">
          A modest yet soulful holiday home which is earthy, rooted, and unafraid to embrace contradictions. An evocative blend of contemporary and vernacular, woven into a unique Indian narrative.
        </p>
        <div className="flex flex-wrap gap-4 mb-8">
          <div className="flex items-center gap-2">
            <i className="ri-map-pin-line text-primary-500 text-sm" />
            <span className="text-xs font-body text-secondary-600">Bengaluru Rural</span>
          </div>
          <div className="flex items-center gap-2">
            <i className="ri-ruler-line text-primary-500 text-sm" />
            <span className="text-xs font-body text-secondary-600">3800 SQFT</span>
          </div>
        </div>
        <button
          onClick={onViewProject}
          className="btn-luxury group inline-flex items-center gap-2 px-7 py-3 bg-foreground-950 text-background-50 text-sm font-label font-semibold tracking-wide rounded-md hover:bg-foreground-800 transition-all duration-500 hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] active:scale-[0.97] whitespace-nowrap"
        >
          View Project
          <i className="ri-arrow-right-line group-hover:translate-x-1 transition-transform duration-300" />
        </button>
      </div>
    </div>
  );
}