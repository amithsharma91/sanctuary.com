import { useState, useCallback } from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/feature/Navbar";
import Footer from "@/components/feature/Footer";
import PageMeta from "@/components/feature/PageMeta";
import Lightbox from "@/components/feature/Lightbox";
import { sanctuaryProjects } from "@/mocks/sanctuaryProjects";
import { commercialProjects } from "@/mocks/commercialProjects";
import { residentialProjects, hospitalityProjects } from "@/mocks/projectCollections";
import { buildBreadcrumbSchema, absoluteUrl, SITE_URL } from "@/utils/seo";

interface ProjectDetailData {
  slug: string;
  title: string;
  name?: string;
  fullName?: string;
  location: string;
  category: string;
  year: string;
  shortDescription?: string;
  description?: string;
  architectStory?: string;
  heroImage?: string;
  image?: string;
  designHighlights?: { title: string; description: string; icon: string }[];
  galleryImages?: { category: string; src: string }[];
  client?: string;
}

const allProjects: ProjectDetailData[] = [
  ...sanctuaryProjects,
  ...commercialProjects,
  ...residentialProjects,
  ...hospitalityProjects,
];

export default function ProjectDetail() {
  const { projectSlug } = useParams<{ projectSlug: string }>();
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const project = allProjects.find((p) => p.slug === projectSlug);

  if (!project) {
    return (
      <div className="relative bg-background-50">
        <Navbar />
        <main className="min-h-[80vh] flex items-center justify-center">
          <div className="text-center px-6">
            <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-full bg-primary-100/50">
              <i className="ri-building-3-line text-2xl text-primary-500" />
            </div>
            <h1 className="font-heading text-3xl font-light text-foreground-950 mb-3">Project Not Found</h1>
            <p className="text-sm font-body text-secondary-500 mb-8">The project you are looking for does not exist or has been moved.</p>
            <Link
              to="/projects"
              className="btn-luxury px-7 py-3 bg-primary-500 text-background-50 text-sm font-label font-semibold rounded-md hover:bg-primary-600 transition-all duration-400 whitespace-nowrap"
            >
              View All Projects
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const projectTitle = project.title || project.name || "Project";
  const projectFullName = project.fullName || `${project.name || ""} — ${project.title || ""}`.trim();
  const rawDescription = (project.shortDescription || project.description || "").trim();
  const shortDescription = rawDescription;
  const normalizedDescription = shortDescription.toLowerCase().replace(/[’']/g, "");
  const normalizedLocation = project.location.toLowerCase().replace(/[’']/g, "");
  const locationWords = normalizedLocation.split(/[^a-z0-9]+/).filter(Boolean);
  const hasLocation = normalizedDescription.includes(normalizedLocation) ||
    locationWords.length > 0 && locationWords.every((word) => normalizedDescription.includes(word));
  const hasDesignerAttribution = /designed\s+by\s+sanctuary(?:\s+architects?\s*(?:&|and)\s*designers?)?/i.test(shortDescription);
  const projectDescription = [
    shortDescription,
    ...(!hasLocation && project.location ? [`Located in ${project.location}.`] : []),
    ...(!hasDesignerAttribution ? ["Designed by Sanctuary Architects & Designers."] : []),
  ].join(" ");
  const projectMetaDescription = projectDescription.replace(/\s+([,.!?])/g, "$1");
  const projectMetaTitle = `${projectTitle} | ${project.category} | Sanctuary Architects`;
  const highlights = project.designHighlights || [
    { title: "Natural Lighting", description: "Abundant natural light through strategically placed openings and skylights.", icon: "ri-sun-line" },
    { title: "Material Palette", description: "Carefully curated materials that age gracefully and tell a story.", icon: "ri-stack-line" },
    { title: "Landscape Integration", description: "Architecture that responds to and enhances its natural surroundings.", icon: "ri-leaf-line" },
    { title: "Open Planning", description: "Generous, flowing spaces that adapt to how people live and work.", icon: "ri-layout-line" },
    { title: "Sustainability", description: "Energy-efficient design with passive cooling and local materials.", icon: "ri-recycle-line" },
    { title: "Context Response", description: "Design that respects local climate, culture, and architectural heritage.", icon: "ri-building-2-line" },
  ];

  const galleryImages = project.galleryImages || [];
  const heroImage = project.heroImage || project.image || "";

  // ==== SEO: category-aware canonical + structured data ====
  let canonicalPath = `/projects/${project.slug}`;
  if (!project.slug.includes("/")) {
    const categoryKey = (project.category || "").toLowerCase();
    if (categoryKey.includes("hospitality")) canonicalPath = `/projects/hospitality/${project.slug}`;
    else if (categoryKey.includes("commercial")) canonicalPath = `/projects/commercial/${project.slug}`;
    else if (categoryKey.includes("prefab")) canonicalPath = `/projects/prefab/${project.slug}`;
    else if (categoryKey.includes("residential") || categoryKey.includes("luxury villa")) canonicalPath = `/projects/residential/${project.slug}`;
    else canonicalPath = `/projects/${project.slug}`;
  }

  let sectionLabel = project.category;
  let sectionPath = "/projects";
  const categoryKey = (project.category || "").toLowerCase();
  if (categoryKey.includes("hospitality")) {
    sectionLabel = "Hospitality";
    sectionPath = "/projects/hospitality";
  } else if (categoryKey.includes("commercial")) {
    sectionLabel = "Commercial";
    sectionPath = "/projects/commercial";
  } else if (categoryKey.includes("prefab")) {
    sectionLabel = "Prefab";
    sectionPath = "/projects/prefab";
  } else if (categoryKey.includes("residential") || categoryKey.includes("luxury villa")) {
    sectionLabel = "Residential";
    sectionPath = "/projects/residential";
  }

  const projectBreadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Projects", path: "/projects" },
    { name: sectionLabel, path: sectionPath },
    { name: projectTitle },
  ]);

  const projectSchema = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: projectTitle,
    description: shortDescription,
    url: absoluteUrl(canonicalPath),
    image: heroImage,
    creator: {
      "@type": "Organization",
      name: "Sanctuary Architects & Designers",
      url: SITE_URL,
    },
  };

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const lightboxData = galleryImages.map((img) => ({
    src: img.src,
    alt: `${projectTitle} — ${img.category}`,
    category: img.category,
  }));

  return (
    <div className="relative bg-background-50">
      <PageMeta
        title={projectMetaTitle}
        description={projectMetaDescription}
        keywords={`${project.category.toLowerCase()} architecture, ${project.location.toLowerCase()} project, Sanctuary Architects, ${projectTitle.toLowerCase()}`}
        ogImage={heroImage}
        canonicalPath={canonicalPath}
        schema={[projectBreadcrumbSchema, projectSchema]}
      />
      <Navbar />

      <main>
        {/* Section 1: Hero Banner */}
        <section className="relative w-full min-h-[70vh] md:min-h-[85vh] flex items-end pb-14 md:pb-20 overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={heroImage}
              alt={projectFullName}
              loading="eager"
              fetchPriority="high"
              className="w-full h-full object-cover object-top"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/20 to-black/55" />

          <div className="relative z-10 w-full px-6 md:px-10 lg:px-14">
            <nav className="flex items-center gap-2 mb-6 text-xs font-body tracking-[0.04em]">
              <Link to="/" className="text-background-200/70 hover:text-background-50 transition-colors duration-300">Home</Link>
              <i className="ri-arrow-right-s-line text-background-200/40 text-[10px]" />
              <Link to={sectionPath} className="text-background-200/70 hover:text-background-50 transition-colors duration-300">{sectionLabel}</Link>
              <i className="ri-arrow-right-s-line text-background-200/40 text-[10px]" />
              <span className="text-background-50">{projectTitle}</span>
            </nav>

            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="text-[10px] font-body tracking-[0.15em] uppercase px-3 py-1 rounded-full bg-background-50/15 text-background-200/80 border border-background-50/15">{project.category}</span>
              <span className="text-[10px] font-body tracking-[0.15em] uppercase px-3 py-1 rounded-full bg-background-50/15 text-background-200/80 border border-background-50/15">{project.location}</span>
              <span className="text-[10px] font-body tracking-[0.15em] uppercase px-3 py-1 rounded-full bg-background-50/15 text-background-200/80 border border-background-50/15">{project.year}</span>
              {project.client && (
                <span className="text-[10px] font-body tracking-[0.15em] uppercase px-3 py-1 rounded-full bg-background-50/15 text-background-200/80 border border-background-50/15">Client: {project.client}</span>
              )}
            </div>

            <h1 className="font-heading text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-light text-background-50 leading-[1.08] mb-4">
              {projectTitle}
            </h1>
            <p className="text-sm md:text-base font-body text-background-200/75 max-w-xl leading-relaxed">
              {project.shortDescription}
            </p>
          </div>
        </section>

        {/* Section 2: Project Brief */}
        {project.architectStory && (
          <section className="py-20 md:py-28 bg-background-50">
            <div className="w-full px-6 md:px-10 lg:px-14">
              <div className="max-w-4xl mx-auto">
                <p className="text-xs font-body tracking-[0.15em] uppercase text-primary-500 mb-4">Project Brief</p>
                <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-light text-foreground-950 mb-8 leading-[1.1]">
                  Architecture Philosophy
                </h2>
                <div className="prose-custom space-y-5">
                  {project.architectStory.split("\n\n").map((paragraph, i) => (
                    <p key={i} className="text-sm md:text-base font-body text-secondary-600 leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Section 3: Design Highlights */}
        <section className="py-20 md:py-28 bg-background-100">
          <div className="w-full px-6 md:px-10 lg:px-14">
            <div className="max-w-6xl mx-auto">
              <p className="text-xs font-body tracking-[0.15em] uppercase text-primary-500 mb-4 text-center">Design Highlights</p>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-light text-foreground-950 mb-14 leading-[1.1] text-center">
                What Makes This Project Special
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
                {highlights.map((highlight, index) => (
                  <div
                    key={index}
                    className="group p-6 md:p-8 bg-background-50 rounded-lg border border-secondary-200/30 hover:border-primary-200/40 transition-all duration-400 hover:-translate-y-1"
                  >
                    <div className="w-12 h-12 flex items-center justify-center rounded-md bg-primary-100/50 text-primary-500 mb-5 group-hover:bg-primary-500 group-hover:text-background-50 transition-all duration-400">
                      <i className={`${highlight.icon} text-xl`} />
                    </div>
                    <h3 className="font-heading text-lg md:text-xl font-light text-foreground-950 mb-2">
                      {highlight.title}
                    </h3>
                    <p className="text-xs md:text-sm font-body text-secondary-500 leading-relaxed">
                      {highlight.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Project Gallery */}
        {galleryImages.length > 0 && (
          <section className="py-20 md:py-28 bg-background-50">
            <div className="w-full px-6 md:px-10 lg:px-14">
              <div className="max-w-7xl mx-auto">
                <p className="text-xs font-body tracking-[0.15em] uppercase text-primary-500 mb-4 text-center">Gallery</p>
                <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-light text-foreground-950 mb-14 leading-[1.1] text-center">
                  Project Gallery
                </h2>

                {/* Masonry Grid */}
                <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 md:gap-5">
                  {galleryImages.map((image, index) => (
                    <div
                      key={index}
                      className="break-inside-avoid mb-4 md:mb-5 rounded-lg overflow-hidden border border-secondary-200/30 group cursor-pointer"
                      onClick={() => openLightbox(index)}
                      onKeyDown={(e) => { if (e.key === "Enter") openLightbox(index); }}
                      tabIndex={0}
                      role="button"
                      aria-label={`View ${image.category} image`}
                    >
                      <img
                        src={image.src}
                        alt={`${projectTitle} — ${image.category}`}
                        className="w-full object-cover transition-transform duration-800 group-hover:scale-105"
                        loading="lazy"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Section 5: Minimal CTA */}
        <section className="py-24 md:py-32 bg-background-100">
          <div className="w-full px-6 md:px-10 lg:px-14 text-center">
            <p className="font-heading text-2xl md:text-3xl lg:text-4xl font-light text-foreground-950 mb-3 leading-[1.2]">
              Interested in designing your next project?
            </p>
            <p className="text-sm font-body text-secondary-500 mb-10 max-w-md mx-auto">
              Every great project begins with a conversation. Let us bring your vision to life.
            </p>
            <Link
              to="/contact"
              className="btn-luxury inline-flex items-center gap-2 px-9 py-3.5 bg-primary-500 text-background-50 text-sm font-label font-semibold tracking-wide rounded-md hover:bg-primary-600 transition-all duration-500 hover:shadow-[0_0_32px_rgba(166,124,82,0.35)] active:scale-[0.97] whitespace-nowrap"
            >
              Contact Us
              <i className="ri-arrow-right-line" />
            </Link>
          </div>
        </section>

        {/* Lightbox */}
        {lightboxData.length > 0 && (
          <Lightbox
            images={lightboxData}
            initialIndex={lightboxIndex}
            isOpen={lightboxOpen}
            onClose={() => setLightboxOpen(false)}
          />
        )}
      </main>

      <Footer />
    </div>
  );
}