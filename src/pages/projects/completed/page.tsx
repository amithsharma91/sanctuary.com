import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/feature/Navbar";
import Footer from "@/components/feature/Footer";
import PageHero from "@/components/feature/PageHero";
import PageCTA from "@/components/feature/PageCTA";
import PageMeta from "@/components/feature/PageMeta";
import { buildBreadcrumbSchema } from "@/utils/seo";
import { residentialProjects, hospitalityProjects } from "@/mocks/projectCollections";
import { commercialProjects } from "@/mocks/commercialProjects";

const prefabProjects = [
  {
    slug: "zen-den",
    title: "Zen Den",
    name: "Zen Den",
    fullName: "Zen Den",
    location: "Bengaluru",
    category: "Prefab",
    image: "https://res.cloudinary.com/dnyvkptxb/image/upload/v1786007107/COVER_PHOTO_wdqkux.jpg",
  },
];

const categories = [
  { label: "Residential", href: "/projects/residential", projects: residentialProjects, image: "https://res.cloudinary.com/dnyvkptxb/image/upload/v1786620569/DSC00396-HDR-Edit_1_duzjmy.jpg" },
  { label: "Hospitality", href: "/projects/hospitality", projects: hospitalityProjects, image: "https://res.cloudinary.com/dnyvkptxb/image/upload/v1786620569/PUMA_SOCIAL_CLUB_rddrdw.jpg" },
  { label: "Commercial", href: "/projects/commercial", projects: commercialProjects, image: "https://res.cloudinary.com/dnyvkptxb/image/upload/v1786622055/COVER_PHOTO_1_yvnhzy.jpg" },
  { label: "Prefab Projects", href: "/projects/prefab", projects: prefabProjects, image: "https://res.cloudinary.com/dnyvkptxb/image/upload/v1786620569/COVER_PHOTO_txfm2x.jpg" },
];

export default function CompletedProjects() {
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
        title="Completed Architecture Projects | Sanctuary"
        description="Completed architecture and interior design projects by Sanctuary — luxury villas, resorts, residences and commercial spaces."
        keywords="completed architecture projects, luxury villa portfolio, finished residential projects, Sanctuary Architects completed works, architectural portfolio India"
        ogImage="https://res.cloudinary.com/dnyvkptxb/image/upload/v1786620637/LEVITATING_HOUSE_-_compl_13_i8osvt.jpg"
        canonicalPath="/projects/completed"
        schema={[
          {
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: "Completed Projects — Sanctuary Architects & Designers",
            description: "A curated portfolio of finished architectural works by Sanctuary Architects — villas, resorts, and residences.",
          },
          buildBreadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Projects", path: "/projects" },
            { name: "Completed" },
          ]),
        ]}
      />
      <Navbar />
      <main>
        <PageHero
          title="Completed Projects"
          subtitle="A curated portfolio of finished architectural works — luxury villas, resorts, and residences that embody our philosophy of timeless design."
          image="https://res.cloudinary.com/dnyvkptxb/image/upload/v1786620637/LEVITATING_HOUSE_-_compl_13_i8osvt.jpg"
          breadcrumb={[{ label: "Projects", href: "/projects" }, { label: "Completed" }]}
        />

        {/* Category Cards */}
        <section ref={ref} className="py-20 md:py-28 bg-background-50">
          <div className="w-full px-6 md:px-10 lg:px-14">
            <div className="text-center mb-14">
              <p className="text-xs font-body tracking-[0.15em] uppercase text-primary-500 mb-3">Categories</p>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-light text-foreground-950 leading-[1.1]">
                Explore by Category
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {categories.map((cat, index) => (
                <Link
                  key={cat.label}
                  to={cat.href}
                  className={`group text-left transition-all duration-700 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                  }`}
                  style={{ transitionDelay: isVisible ? `${index * 120}ms` : "0ms" }}
                >
                  <div className="image-reveal rounded-lg overflow-hidden border border-secondary-200/30 mb-5">
                    <img
                      src={cat.image}
                      alt={cat.label}
                      className="w-full aspect-[4/3] object-cover transition-transform duration-800 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <h3 className="font-heading text-2xl md:text-3xl font-light text-foreground-950 mb-1 group-hover:text-primary-500 transition-colors duration-300">
                    {cat.label}
                  </h3>
                  <p className="text-xs font-body text-secondary-500 mb-3">{cat.projects.length} project{cat.projects.length !== 1 ? "s" : ""}</p>
                  <span className="inline-flex items-center gap-2 text-xs font-label font-semibold text-primary-500 tracking-wide group-hover:gap-3 transition-all duration-300">
                    Explore {cat.label} <i className="ri-arrow-right-line" />
                  </span>
                </Link>
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