import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/feature/Navbar";
import Footer from "@/components/feature/Footer";
import PageHero from "@/components/feature/PageHero";
import PageCTA from "@/components/feature/PageCTA";
import PageMeta from "@/components/feature/PageMeta";
import { ongoingProjects } from "@/mocks/ongoingProjects";

export default function OngoingProjects() {
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
        title="Ongoing Projects"
        description="A glimpse into Sanctuary Architects' current works in progress — projects taking shape across India, from foundation to finishing touches."
        keywords="ongoing architecture projects, construction progress, current architectural works, Sanctuary Architects developments, architecture under construction India"
        canonicalPath="/projects/ongoing"
      />
      <Navbar />
      <main>
        <PageHero
          title="Ongoing Projects"
          subtitle="A glimpse into our current works in progress — projects taking shape across India, from foundation to finishing touches."
          image="https://readdy.ai/api/search-image?query=Luxury%20building%20construction%20site%2C%20modern%20architectural%20form%20emerging%20from%20scaffolding%2C%20dramatic%20structural%20elements%20visible%2C%20warm%20afternoon%20light%2C%20construction%20progress%20with%20elegant%20design%2C%20sophisticated%20development%2C%20editorial%20architectural%20photography%2C%20warm%20earth%20tones%2C%20promising%20atmosphere&width=1920&height=1080&seq=ongoing-hero&orientation=landscape"
          breadcrumb={[{ label: "Projects", href: "/projects" }, { label: "Ongoing" }]}
        />

        <section ref={ref} className="py-20 md:py-28 bg-background-50">
          <div className="w-full px-6 md:px-10 lg:px-14">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
              {ongoingProjects.map((project, index) => (
                <button
                  key={project.slug}
                  onClick={() => navigate(`/projects/${project.slug}`)}
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
                  <p className="text-xs font-body text-secondary-500 mb-3">{project.location}</p>

                  {/* Status & Progress */}
                  <div className="space-y-2 mb-3">
                    <div className="flex items-center justify-between text-xs font-body">
                      <span className="text-secondary-500">{project.status}</span>
                      <span className="text-foreground-700 font-medium">{project.progress}%</span>
                    </div>
                    <div className="w-full h-1.5 bg-secondary-200 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-primary-500 rounded-full transition-all duration-1000"
                        style={{ width: `${project.progress}%` }}
                      />
                    </div>
                    <p className="text-[10px] font-body text-secondary-400">Expected: {project.expectedCompletion}</p>
                  </div>

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