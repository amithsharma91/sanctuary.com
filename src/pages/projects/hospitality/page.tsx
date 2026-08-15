import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/feature/Navbar";
import Footer from "@/components/feature/Footer";
import PageHero from "@/components/feature/PageHero";
import PageCTA from "@/components/feature/PageCTA";
import PageMeta from "@/components/feature/PageMeta";
import { buildBreadcrumbSchema } from "@/utils/seo";
import SmartAspectImage from "@/components/feature/SmartAspectImage";
import { hospitalityProjects, hospitalityProjectsOrder } from "@/mocks/projectCollections";

// Source-of-truth display order shared with the mock collection
const orderedHospitalityProjects = hospitalityProjectsOrder
  .map((slug) => hospitalityProjects.find((project) => project.slug === slug))
  .filter((project): project is NonNullable<typeof project> => Boolean(project));

export default function HospitalityProjects() {
  const navigate = useNavigate();

  return (
    <div className="relative bg-background-50">
      <PageMeta
        title="Hospitality Architects & Interior Designers | Sanctuary"
        description="Hospitality architecture and interior design by Sanctuary Architects — hotels, resorts, restaurants and bars crafted to create memorable guest experiences."
        keywords="hospitality architecture India, resort design, hotel architecture, restaurant interior designers Bangalore, luxury hospitality design, Sanctuary hospitality projects"
        ogImage="https://res.cloudinary.com/dnyvkptxb/image/upload/v1786620637/PUMA_SOCIAL_CLUB_hoas_mf5sxf.jpg"
        canonicalPath="/projects/hospitality"
        schema={[
          {
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: "Hospitality Architecture — Sanctuary Architects & Designers",
            description: "Hotels, resorts, restaurants, and hospitality spaces designed by Sanctuary Architects.",
          },
          buildBreadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Projects", path: "/projects" },
            { name: "Hospitality" },
          ]),
        ]}
      />
      <Navbar />
      <main>
        <PageHero
          title="Hospitality Architecture"
          subtitle="Hotels, resorts, restaurants, and hospitality spaces designed to create memorable experiences — where architecture becomes the stage for life's best moments."
          image="https://res.cloudinary.com/dnyvkptxb/image/upload/v1786620637/PUMA_SOCIAL_CLUB_hoas_mf5sxf.jpg"
          breadcrumb={[{ label: "Projects", href: "/projects" }, { label: "Hospitality" }]}
        />

        <section className="py-16 md:py-24 bg-background-50">
          <div className="w-full px-6 md:px-10 lg:px-14">
            <div className="space-y-24 md:space-y-32">
              {orderedHospitalityProjects.map((project, index) => (
                <HospitalityProjectSection
                  key={project.slug}
                  project={project}
                  index={index}
                  onViewProject={() => navigate(`/projects/hospitality/${project.slug}`)}
                />
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

function HospitalityProjectSection({
  project,
  index,
  onViewProject,
}: {
  project: any;
  index: number;
  onViewProject: () => void;
}) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const isReversed = index % 2 === 1;

  return (
    <div ref={ref} className={`flex flex-col ${isReversed ? "lg:flex-row-reverse" : "lg:flex-row"} items-center lg:items-start gap-10 lg:gap-16`}>
      <div
        className={`w-full lg:w-1/2 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-x-0" : `opacity-0 ${isReversed ? "translate-x-12" : "-translate-x-12"}`
        }`}
      >
        <div className="image-reveal rounded-lg overflow-hidden border border-secondary-200/30">
          <SmartAspectImage
            src={project.heroImage}
            alt={project.title}
            className="transition-transform duration-800 hover:scale-105"
          />
        </div>
      </div>
      <div
        className={`w-full lg:w-1/2 transition-all duration-1000 delay-150 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <span className="text-[10px] font-body tracking-[0.15em] uppercase text-primary-500">{project.category} — {project.location}</span>
        <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-light text-foreground-950 mt-2 mb-1 leading-[1.1]">
          {project.title}
        </h2>
        <p className="text-sm md:text-base font-body text-secondary-600 leading-relaxed mb-8 max-w-lg mt-4">
          {project.description}
        </p>
        <div className="grid grid-cols-3 gap-3 mb-8">
          {project.highlightImages.map((img: string, i: number) => (
            <div key={i} className="image-reveal rounded-md overflow-hidden border border-secondary-200/20">
              <img
                src={img}
                alt=""
                className="w-full aspect-square object-cover transition-transform duration-500 hover:scale-110"
                loading="lazy"
              />
            </div>
          ))}
        </div>
        <button
          onClick={onViewProject}
          className="btn-luxury group inline-flex items-center gap-2 px-7 py-3 bg-foreground-950 text-background-50 text-sm font-label font-semibold tracking-wide rounded-md hover:bg-foreground-800 transition-all duration-500 hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] active:scale-[0.97] whitespace-nowrap"
        >
          View Project
          <i className="ri-arrow-right-line group-hover:translate-x-1 transition-transform duration-300" />
        </button>
      </div>
    </div>
  );
}