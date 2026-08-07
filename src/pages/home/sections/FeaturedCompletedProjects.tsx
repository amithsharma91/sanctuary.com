import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { sanctuaryProjects } from "@/mocks/sanctuaryProjects";

const categoryTabs = [
  { label: "Residential", href: "/projects/residential" },
  { label: "Hospitality", href: "/projects/hospitality" },
  { label: "Commercial", href: "/projects/commercial" },
  { label: "Prefab", href: "/projects/prefab" },
];

export default function FeaturedCompletedProjects() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

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
            <button
              key={cat.label}
              onClick={() => navigate(cat.href)}
              className="px-6 py-2.5 text-sm font-body tracking-wide rounded-full border border-secondary-200/40 text-foreground-700 hover:text-primary-500 hover:border-primary-300/40 bg-background-50 transition-all duration-400 whitespace-nowrap cursor-pointer"
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {sanctuaryProjects.map((project, index) => (
            <button
              key={project.slug}
              onClick={() => navigate(`/projects/residential/${project.slug}`)}
              className={`group relative image-reveal rounded-lg overflow-hidden border border-secondary-200/30 transition-all duration-500 cursor-pointer ${
                index === 0 ? "lg:col-span-2 lg:row-span-2" : ""
              } ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: isVisible ? `${200 + index * 100}ms` : "0ms" }}
            >
              <img
                src={project.image}
                alt={project.fullName}
                className={`w-full object-cover transition-transform duration-800 group-hover:scale-106 ${
                  index === 0 ? "aspect-[16/10]" : "aspect-[4/5]"
                }`}
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/15 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6 translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                <span className="text-[10px] font-body tracking-[0.15em] uppercase text-primary-300 mb-1 block">
                  {project.category}
                </span>
                <h3 className="font-heading text-xl md:text-2xl font-light text-background-50 mb-1">
                  {project.title}
                </h3>
                <p className="text-xs font-body text-background-200/70 mb-3">
                  {project.name} — {project.location}
                </p>
                <span className="inline-flex items-center gap-2 text-xs font-label font-semibold text-primary-300 tracking-wide opacity-0 group-hover:opacity-100 transition-all duration-400 group-hover:translate-x-1">
                  View Project <i className="ri-arrow-right-line" />
                </span>
              </div>
            </button>
          ))}
        </div>

        {/* View All CTA */}
        <div
          className={`text-center mt-12 transition-all duration-700 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <button
            onClick={() => navigate("/projects/completed")}
            className="btn-luxury group inline-flex items-center gap-2 px-8 py-3 bg-foreground-950 text-background-50 text-sm font-label font-semibold tracking-wide rounded-md hover:bg-foreground-800 transition-all duration-500 hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] active:scale-[0.97] whitespace-nowrap"
          >
            View All Completed Projects
            <i className="ri-arrow-right-line group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </section>
  );
}