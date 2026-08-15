import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/feature/Navbar";
import Footer from "@/components/feature/Footer";
import PageHero from "@/components/feature/PageHero";
import PageCTA from "@/components/feature/PageCTA";
import PageMeta from "@/components/feature/PageMeta";
import { buildBreadcrumbSchema } from "@/utils/seo";
import ProjectCard from "@/components/feature/ProjectCard";
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
        title="Ongoing Architecture Projects | Sanctuary Architects"
        description="Explore ongoing architecture projects by Sanctuary Architects & Designers — residences, resorts and developments taking shape across India, from foundation to finishing touches."
        keywords="ongoing architecture projects, construction progress, current architectural works, Sanctuary Architects developments, architecture under construction India"
        ogImage="https://res.cloudinary.com/dnyvkptxb/image/upload/v1786692547/201_arsrxr.png"
        canonicalPath="/projects/ongoing"
        schema={[
          {
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: "Ongoing Projects — Sanctuary Architects & Designers",
            description: "Sanctuary Architects' current works in progress — projects taking shape across India.",
          },
          buildBreadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Projects", path: "/projects" },
            { name: "Ongoing" },
          ]),
        ]}
      />
      <Navbar />
      <main>
        <PageHero
          title="Ongoing Projects"
          subtitle="A glimpse into our current works in progress — projects taking shape across India, from foundation to finishing touches."
          image="https://res.cloudinary.com/dnyvkptxb/image/upload/v1786692547/201_arsrxr.png"
          breadcrumb={[{ label: "Projects", href: "/projects" }, { label: "Ongoing" }]}
        />

        <section ref={ref} className="py-20 md:py-28 bg-background-50">
          <div className="w-full px-6 md:px-10 lg:px-14">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 items-start">
              {ongoingProjects.map((project, index) => (
                <ProjectCard
                  key={project.slug}
                  image={project.image}
                  alt={project.title}
                  title={project.title}
                  category={project.category}
                  location={project.location}
                  onClick={() => navigate(`/projects/${project.slug}`)}
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