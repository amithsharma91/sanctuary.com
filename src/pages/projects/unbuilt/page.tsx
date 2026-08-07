import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/feature/Navbar";
import Footer from "@/components/feature/Footer";
import PageHero from "@/components/feature/PageHero";
import PageCTA from "@/components/feature/PageCTA";
import PageMeta from "@/components/feature/PageMeta";
import { unbuiltProjects } from "@/mocks/unbuiltProjects";

export default function UnbuiltProjects() {
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
        title="Unbuilt Projects"
        description="Explore Sanctuary Architects' unbuilt and conceptual projects — visionary designs that push the boundaries of architecture, materiality, and spatial experience."
        keywords="unbuilt architecture projects, conceptual design, visionary architecture, Sanctuary Architects unbuilt, architectural concepts"
        canonicalPath="/projects/unbuilt"
      />
      <Navbar />
      <main>
        <PageHero
          title="Unbuilt Projects"
          subtitle="Visionary designs and conceptual architecture that push the boundaries of materiality, form, and spatial experience — projects waiting to be brought to life."
          image="https://readdy.ai/api/search-image?query=Architectural%20concept%20sketch%20on%20warm%20cream%20paper%2C%20abstract%20building%20forms%20emerging%20from%20hand-drawn%20lines%2C%20soft%20natural%20lighting%2C%20creative%20design%20studio%20atmosphere%2C%20architectural%20model%20pieces%20scattered%20on%20wooden%20desk%2C%20artistic%20conceptual%20rendering%2C%20warm%20earth%20and%20cream%20tones%2C%20elegant%20creative%20workspace%2C%20editorial%20photography&width=1920&height=1080&seq=unbuilt-hero-new&orientation=landscape"
          breadcrumb={[{ label: "Projects", href: "/projects" }, { label: "Unbuilt" }]}
        />

        <section ref={ref} className="py-20 md:py-28 bg-background-50">
          <div className="w-full px-6 md:px-10 lg:px-14">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
              {unbuiltProjects.map((project, index) => (
                <button
                  key={project.slug}
                  onClick={() => navigate(`/projects/unbuilt/${project.slug}`)}
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
                  {project.location && (
                    <p className="text-xs font-body text-secondary-500 mb-2">{project.location}</p>
                  )}
                  <p className="text-sm font-body text-secondary-600 leading-relaxed mb-4 line-clamp-2">{project.description}</p>
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