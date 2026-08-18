import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/feature/Navbar";
import Footer from "@/components/feature/Footer";
import PageHero from "@/components/feature/PageHero";
import PageCTA from "@/components/feature/PageCTA";
import PageMeta from "@/components/feature/PageMeta";
import { buildBreadcrumbSchema } from "@/utils/seo";
import ProjectCard from "@/components/feature/ProjectCard";
import { commercialProjects } from "@/mocks/commercialProjects";

export default function CommercialProjects() {
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
        title="Commercial Architects in Bangalore | Sanctuary"
        description="Commercial architecture and interior design in Bangalore by Sanctuary — offices, workplaces and retail spaces designed for productivity and growth."
        keywords="commercial architects Bangalore, office design, retail architecture, mixed-use development, corporate workspace design, Sanctuary commercial projects"
        ogImage="https://res.cloudinary.com/dnyvkptxb/image/upload/v1786620636/COVER_PHOTO_commercial_jknfuc.jpg"
        canonicalPath="/projects/commercial"
        schema={[
          {
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: "Commercial Architecture — Sanctuary Architects & Designers",
            description: "Office towers, retail spaces, and mixed-use developments by Sanctuary Architects.",
          },
          buildBreadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Projects", path: "/projects" },
            { name: "Commercial" },
          ]),
        ]}
      />
      <Navbar />
      <main>
        <PageHero
          title="Commercial Architecture"
          subtitle="Office towers, retail spaces, and mixed-use developments designed for productivity, brand identity, and growth — architecture that elevates how people work, connect, and thrive."
          image="https://res.cloudinary.com/dnyvkptxb/image/upload/v1786620636/COVER_PHOTO_commercial_jknfuc.jpg"
          breadcrumb={[{ label: "Projects", href: "/projects" }, { label: "Commercial" }]}
        />

        <section ref={ref} className="py-20 md:py-28 bg-background-50">
          <div className="w-full px-6 md:px-10 lg:px-14">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 items-start">
              {commercialProjects.map((project, index) => (
                <ProjectCard
                  key={project.slug}
                  image={project.image}
                  alt={project.fullName}
                  title={project.title}
                  category={project.category}
                  location={`${project.name} — ${project.location}`}
                  to={`/projects/commercial/${project.slug}`}
                  className={`${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                  }`}
                  style={{ transitionDelay: isVisible ? `${index * 120}ms` : "0ms" }}
                >
                  <p className="text-sm font-body text-secondary-600 leading-relaxed mb-4 line-clamp-2">
                    {project.shortDescription}
                  </p>
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