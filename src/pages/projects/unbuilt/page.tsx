import { useState, useEffect, useRef } from "react";
import Navbar from "@/components/feature/Navbar";
import Footer from "@/components/feature/Footer";
import PageHero from "@/components/feature/PageHero";
import PageCTA from "@/components/feature/PageCTA";
import PageMeta from "@/components/feature/PageMeta";
import { buildBreadcrumbSchema } from "@/utils/seo";
import ProjectCard from "@/components/feature/ProjectCard";
import { unbuiltProjects } from "@/mocks/unbuiltProjects";

export default function UnbuiltProjects() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
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
        title="Unbuilt Architecture Projects | Sanctuary"
        description="Unbuilt and conceptual architecture projects by Sanctuary — visionary designs exploring materiality, form and spatial experience."
        keywords="unbuilt architecture projects, conceptual design, visionary architecture, Sanctuary Architects unbuilt, architectural concepts"
        ogImage="https://res.cloudinary.com/dnyvkptxb/image/upload/v1786104452/Screenshot_2026-08-07_173401_uald8x.png"
        canonicalPath="/projects/unbuilt"
        schema={[
          {
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: "Unbuilt Projects — Sanctuary Architects & Designers",
            description: "Visionary and conceptual architecture by Sanctuary Architects — projects waiting to be brought to life.",
          },
          buildBreadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Projects", path: "/projects" },
            { name: "Unbuilt" },
          ]),
        ]}
      />
      <Navbar />
      <main>
        <PageHero
          title="Unbuilt Projects"
          subtitle="Visionary designs and conceptual architecture that push the boundaries of materiality, form, and spatial experience — projects waiting to be brought to life."
          image="https://res.cloudinary.com/dnyvkptxb/image/upload/v1786104452/Screenshot_2026-08-07_173401_uald8x.png"
          breadcrumb={[{ label: "Projects", href: "/projects" }, { label: "Unbuilt" }]}
        />

        <section ref={ref} className="py-20 md:py-28 bg-background-50">
          <div className="w-full px-6 md:px-10 lg:px-14">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 items-start">
              {unbuiltProjects.map((project, index) => (
                <ProjectCard
                  key={project.slug}
                  image={project.image}
                  alt={project.title}
                  title={project.title}
                  category={project.category}
                  location={project.location}
                  to={`/projects/unbuilt/${project.slug}`}
                  className={`${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                  }`}
                  style={{ transitionDelay: isVisible ? `${index * 120}ms` : "0ms" }}
                >
                  <p className="text-sm font-body text-secondary-600 leading-relaxed mb-4 line-clamp-2">{project.description}</p>
                  <span className="inline-flex items-center gap-2 text-xs font-label font-semibold text-primary-500 tracking-wide group-hover:gap-3 transition-all duration-300">
                    View Project <i className="ri-arrow-right-line" />
                  </span>
                </ProjectCard>
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