import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import ProjectCard from "@/components/feature/ProjectCard";
import { residentialProjects } from "@/mocks/projectCollections";

const categoryTabs = [
  { label: "Residential", href: "/projects/residential" },
  { label: "Hospitality", href: "/projects/hospitality" },
  { label: "Commercial", href: "/projects/commercial" },
  { label: "Prefab", href: "/projects/prefab" },
];

const featuredProjects = residentialProjects.slice(0, 6);

export default function FeaturedCompletedProjects() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="featured-projects" ref={ref} className="relative py-20 md:py-28 bg-background-50">
      <div className="w-full px-6 md:px-10 lg:px-14">
        {/* Section Header */}
        <div className="text-center mb-14 md:mb-20">
          <p
            className={`text-xs font-body tracking-[0.15em] uppercase text-primary-500 mb-3 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Featured Work
          </p>
          <h2
            className={`font-heading text-3xl md:text-5xl lg:text-6xl font-light text-foreground-950 leading-[1.1] transition-all duration-700 delay-100 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            Completed Projects.
          </h2>
        </div>

        {/* Category Navigation Tabs */}
        <div
          className={`flex flex-wrap justify-center gap-3 mb-14 transition-all duration-700 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          {categoryTabs.map((cat) => (
            <Link
              key={cat.label}
              to={cat.href}
              className="px-6 py-2.5 text-sm font-body tracking-wide rounded-full border border-secondary-200/40 text-foreground-700 hover:text-primary-500 hover:border-primary-300/40 bg-background-50 transition-all duration-400 whitespace-nowrap"
            >
              {cat.label}
            </Link>
          ))}
        </div>

        {/* Equal portfolio grid — 3 columns desktop, 2 tablet, 1 mobile, fixed 16:10 ratio on every card */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {featuredProjects.map((project, index) => (
            <ProjectCard
              key={project.slug}
              variant="overlay"
              image={project.image}
              alt={project.fullName}
              title={project.title}
              category={project.category}
              location={project.location}
              fixedAspect="aspect-[16/10]"
              persistentOverlay
              showViewLabel={false}
              to={`/projects/residential/${project.slug}`}
              className={`${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: isVisible ? `${200 + index * 100}ms` : "0ms" }}
            />
          ))}
        </div>

        {/* View All CTA */}
        <div
          className={`text-center mt-12 transition-all duration-700 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <Link
            to="/projects/completed"
            className="btn-luxury group inline-flex items-center gap-2 px-8 py-3 bg-foreground-950 text-background-50 text-sm font-label font-semibold tracking-wide rounded-md hover:bg-foreground-800 transition-all duration-500 hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] active:scale-[0.97] whitespace-nowrap"
          >
            View All Projects
            <i className="ri-arrow-right-line group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>
      </div>
    </section>
  );
}