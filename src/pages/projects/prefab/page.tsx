import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/feature/Navbar";
import Footer from "@/components/feature/Footer";
import PageHero from "@/components/feature/PageHero";
import PageCTA from "@/components/feature/PageCTA";
import PageMeta from "@/components/feature/PageMeta";

const prefabProjects = [
  {
    slug: "zen-den",
    title: "Zen Den",
    location: "Portable",
    category: "Prefab",
    area: "160 SQFT",
    shortDescription: "A revolutionary prefabricated modular portable structure designed to be installed on terraces, farms, estates, or open landscapes.",
    image: "https://res.cloudinary.com/dnyvkptxb/image/upload/v1786007107/COVER_PHOTO_wdqkux.jpg",
  },
];

export default function PrefabProjects() {
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
        title="Prefab Projects"
        description="Innovative prefabricated modular structures by Sanctuary Architects — portable, sustainable, and resource-efficient designs for terraces, farms, and open landscapes."
        keywords="prefab architecture, modular design, portable structures, sustainable construction, prefab projects India, Sanctuary prefab designs"
        canonicalPath="/projects/prefab"
      />
      <Navbar />
      <main>
        <PageHero
          title="Prefab Projects"
          subtitle="Revolutionary prefabricated modular structures designed for portability, sustainability, and speed — architecture that adapts to any landscape without compromise."
          image="https://readdy.ai/api/search-image?query=Modern%20prefabricated%20modular%20tiny%20home%20in%20forest%20setting%2C%20warm%20wood%20facade%2C%20large%20glass%20doors%20opening%20to%20nature%2C%20contemporary%20portable%20architecture%2C%20compact%20minimalist%20design%2C%20sustainable%20materials%2C%20soft%20natural%20light%2C%20editorial%20architectural%20photography%2C%20warm%20earth%20tones%2C%20cinematic%20wide%20shot&width=1920&height=1080&seq=prefab-hero&orientation=landscape"
          breadcrumb={[{ label: "Projects", href: "/projects" }, { label: "Prefab Projects" }]}
        />

        <section ref={ref} className="py-20 md:py-28 bg-background-50">
          <div className="w-full px-6 md:px-10 lg:px-14">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {prefabProjects.map((project, index) => (
                <button
                  key={project.slug}
                  onClick={() => navigate(`/projects/prefab/${project.slug}`)}
                  className={`group text-left transition-all duration-700 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                  }`}
                  style={{ transitionDelay: isVisible ? `${index * 120}ms` : "0ms" }}
                >
                  <div className="image-reveal rounded-lg overflow-hidden border border-secondary-200/30 mb-5">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full aspect-[4/5] object-cover transition-transform duration-800 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <span className="text-[10px] font-body tracking-[0.15em] uppercase text-primary-500">{project.category}</span>
                  <h3 className="font-heading text-2xl md:text-3xl font-light text-foreground-950 mt-1 mb-1 group-hover:text-primary-500 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-xs font-body text-secondary-500 mb-2">{project.location} — {project.area}</p>
                  <p className="text-sm font-body text-secondary-600 leading-relaxed mb-4 line-clamp-2">{project.shortDescription}</p>
                  <span className="inline-flex items-center gap-2 text-xs font-label font-semibold text-primary-500 tracking-wide group-hover:gap-3 transition-all duration-300">
                    View Project <i className="ri-arrow-right-line" />
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
