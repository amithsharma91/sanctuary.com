import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/feature/Navbar";
import Footer from "@/components/feature/Footer";
import PageHero from "@/components/feature/PageHero";
import PageCTA from "@/components/feature/PageCTA";
import PageMeta from "@/components/feature/PageMeta";
import { residentialProjects, hospitalityProjects } from "@/mocks/projectCollections";
import { commercialProjects } from "@/mocks/commercialProjects";

const prefabProjects: any[] = [];

const categories = [
  { label: "Residential", href: "/projects/residential", projects: residentialProjects, image: "https://readdy.ai/api/search-image?query=Luxury%20private%20villa%20exterior%20at%20golden%20hour%2C%20warm%20stone%20and%20wood%20facade%2C%20floor%20to%20ceiling%20glass%2C%20infinity%20pool%2C%20lush%20tropical%20garden%2C%20contemporary%20architecture%2C%20serene%20peaceful%20atmosphere%2C%20editorial%20architectural%20photography%2C%20warm%20amber%20and%20earth%20tones&width=900&height=600&seq=cat-residential&orientation=landscape" },
  { label: "Hospitality", href: "/projects/hospitality", projects: hospitalityProjects, image: "https://readdy.ai/api/search-image?query=Luxury%20resort%20lobby%20interior%20with%20dramatic%20double%20height%20space%2C%20warm%20stone%20and%20wood%20materials%2C%20contemporary%20design%20with%20traditional%20accents%2C%20soft%20ambient%20lighting%2C%20sophisticated%20hospitality%20atmosphere%2C%20editorial%20architectural%20photography%2C%20warm%20amber%20tones&width=900&height=600&seq=cat-hospitality&orientation=landscape" },
  { label: "Commercial", href: "/projects/commercial", projects: commercialProjects, image: "https://readdy.ai/api/search-image?query=Modern%20glass%20office%20tower%20with%20vertical%20gardens%2C%20warm%20golden%20hour%20light%2C%20contemporary%20commercial%20architecture%2C%20biophilic%20design%2C%20urban%20skyline%2C%20sophisticated%20corporate%20atmosphere%2C%20editorial%20architectural%20photography%2C%20warm%20earth%20tones&width=900&height=600&seq=cat-commercial&orientation=landscape" },
  { label: "Prefab Projects", href: "/projects/prefab", projects: prefabProjects, image: "https://readdy.ai/api/search-image?query=Modern%20prefabricated%20modular%20tiny%20home%20with%20warm%20wood%20facade%2C%20large%20glass%20doors%20opening%20to%20nature%2C%20compact%20minimalist%20design%2C%20contemporary%20portable%20architecture%2C%20surrounded%20by%20trees%20and%20greenery%2C%20soft%20natural%20light%2C%20sustainable%20design%2C%20editorial%20architectural%20photography%2C%20warm%20earth%20tones&width=900&height=600&seq=cat-prefab&orientation=landscape" },
];

export default function CompletedProjects() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.05 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative bg-background-50">
      <PageMeta
        title="Completed Projects"
        description="A curated portfolio of finished architectural works by Sanctuary Architects — luxury villas, resorts, and residences that embody timeless design and craftsmanship."
        keywords="completed architecture projects, luxury villa portfolio, finished residential projects, Sanctuary Architects completed works, architectural portfolio India"
        canonicalPath="/projects/completed"
      />
      <Navbar />
      <main>
        <PageHero
          title="Completed Projects"
          subtitle="A curated portfolio of finished architectural works — luxury villas, resorts, and residences that embody our philosophy of timeless design."
          image="https://readdy.ai/api/search-image?query=Luxury%20modern%20villa%20completed%20at%20golden%20hour%2C%20warm%20stone%20facade%2C%20floor%20to%20ceiling%20glass%2C%20infinity%20pool%20reflecting%20sunset%2C%20lush%20tropical%20garden%2C%20sophisticated%20contemporary%20architecture%2C%20serene%20peaceful%20atmosphere%2C%20editorial%20architectural%20photography%2C%20warm%20amber%20and%20earth%20tones%2C%20cinematic%20wide%20shot&width=1920&height=1080&seq=completed-hero&orientation=landscape"
          breadcrumb={[{ label: "Projects", href: "/projects" }, { label: "Completed" }]}
        />

        {/* Category Cards */}
        <section ref={ref} className="py-20 md:py-28 bg-background-50">
          <div className="w-full px-6 md:px-10 lg:px-14">
            <div className="text-center mb-14">
              <p className="text-xs font-body tracking-[0.15em] uppercase text-primary-500 mb-3">Categories</p>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-light text-foreground-950 leading-[1.1]">
                Explore by Category
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {categories.map((cat, index) => (
                <button
                  key={cat.label}
                  onClick={() => navigate(cat.href)}
                  className={`group text-left transition-all duration-700 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                  }`}
                  style={{ transitionDelay: isVisible ? `${index * 120}ms` : "0ms" }}
                >
                  <div className="image-reveal rounded-lg overflow-hidden border border-secondary-200/30 mb-5">
                    <img
                      src={cat.image}
                      alt={cat.label}
                      className="w-full aspect-[4/3] object-cover transition-transform duration-800 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <h3 className="font-heading text-2xl md:text-3xl font-light text-foreground-950 mb-1 group-hover:text-primary-500 transition-colors duration-300">
                    {cat.label}
                  </h3>
                  <p className="text-xs font-body text-secondary-500 mb-3">{cat.projects.length} project{cat.projects.length !== 1 ? "s" : ""}</p>
                  <span className="inline-flex items-center gap-2 text-xs font-label font-semibold text-primary-500 tracking-wide group-hover:gap-3 transition-all duration-300">
                    Explore {cat.label} <i className="ri-arrow-right-line" />
                  </span>
                </button>
              ))}
            </div>
          </div>
        </section>

        <PageCTA />
      </main>
      <Footer />
    </div>
  );
}
