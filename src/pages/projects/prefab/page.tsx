import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/feature/Navbar";
import Footer from "@/components/feature/Footer";
import PageHero from "@/components/feature/PageHero";
import PageCTA from "@/components/feature/PageCTA";
import PageMeta from "@/components/feature/PageMeta";
import { buildBreadcrumbSchema } from "@/utils/seo";
import ProjectCard from "@/components/feature/ProjectCard";

const prefabProjects = [
  {
    slug: "zen-den",
    title: "Zen Den",
    location: "Bengaluru",
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
        title="Prefab Architecture & Design | Sanctuary Architects"
        description="Prefab architecture and design by Sanctuary Architects — portable, sustainable modular structures for terraces, farms and open landscapes."
        keywords="prefab architecture, modular design, portable structures, sustainable construction, prefab projects India, Sanctuary prefab designs"
        ogImage="https://res.cloudinary.com/dnyvkptxb/image/upload/v1786620636/COVER_PHOTO_p_re_ioc0rz.jpg"
        canonicalPath="/projects/prefab"
        schema={[
          {
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: "Prefab Projects — Sanctuary Architects & Designers",
            description: "Innovative prefabricated modular structures by Sanctuary Architects — portable, sustainable, and resource-efficient designs.",
          },
          buildBreadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Projects", path: "/projects" },
            { name: "Prefab Projects" },
          ]),
        ]}
      />
      <Navbar />
      <main>
        <PageHero
          title="Prefab Projects"
          subtitle="Revolutionary prefabricated modular structures designed for portability, sustainability, and speed — architecture that adapts to any landscape without compromise."
          image="https://res.cloudinary.com/dnyvkptxb/image/upload/v1786620636/COVER_PHOTO_p_re_ioc0rz.jpg"
          breadcrumb={[{ label: "Projects", href: "/projects" }, { label: "Prefab Projects" }]}
        />

        <section ref={ref} className="py-20 md:py-28 bg-background-50">
          <div className="w-full px-6 md:px-10 lg:px-14">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 items-start">
              {prefabProjects.map((project, index) => (
                <ProjectCard
                  key={project.slug}
                  image={project.image}
                  alt={project.title}
                  title={project.title}
                  category={project.category}
                  location={`${project.location} — ${project.area}`}
                  onClick={() => navigate(`/projects/prefab/${project.slug}`)}
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