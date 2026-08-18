import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/feature/Navbar";
import Footer from "@/components/feature/Footer";
import PageMeta from "@/components/feature/PageMeta";
import { buildBreadcrumbSchema } from "@/utils/seo";
import Lightbox from "@/components/feature/Lightbox";

const COVER_IMAGE = "https://res.cloudinary.com/dnyvkptxb/image/upload/v1786099077/COVER_PHOTO_fy3rhx.jpg";

const UPPER_GROUND_FLOOR = "https://res.cloudinary.com/dnyvkptxb/image/upload/v1786099040/UPPER_GROUND_FLOOR_PLAN_aw91or.png";
const FOURTH_FLOOR = "https://res.cloudinary.com/dnyvkptxb/image/upload/v1786099071/LAKE_VIEW_AP_4TH_F_ljlk2g.png";
const FIFTH_FLOOR = "https://res.cloudinary.com/dnyvkptxb/image/upload/v1786099073/LAKE_VIEW_AP_5TH_F_w00sy3.png";
const SIXTH_FLOOR = "https://res.cloudinary.com/dnyvkptxb/image/upload/v1786099068/LAKE_VIEW_AP_6TH_F_y3vk8c.png";

const GALLERY_IMAGES = [
  "https://res.cloudinary.com/dnyvkptxb/image/upload/v1786099078/30_lqwzgl.jpg",
  "https://res.cloudinary.com/dnyvkptxb/image/upload/v1786099077/COVER_PHOTO_fy3rhx.jpg",
  "https://res.cloudinary.com/dnyvkptxb/image/upload/v1786099073/31_ysknol.jpg",
  "https://res.cloudinary.com/dnyvkptxb/image/upload/v1786099059/38_oo9q8l.jpg",
  "https://res.cloudinary.com/dnyvkptxb/image/upload/v1786099036/14a_lzzkkz.jpg",
  "https://res.cloudinary.com/dnyvkptxb/image/upload/v1786099035/36_jujjjq.jpg",
  "https://res.cloudinary.com/dnyvkptxb/image/upload/v1786099034/33_dfd968.jpg",
  "https://res.cloudinary.com/dnyvkptxb/image/upload/v1786099033/01_MANAS_guinf8.jpg",
];

interface LBImage {
  src: string;
  alt: string;
  category?: string;
}

export default function LakeViewApartment() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImages, setLightboxImages] = useState<LBImage[]>([]);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const openLightbox = (images: LBImage[], index: number) => {
    setLightboxImages(images);
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const blueprintImages: LBImage[] = [
    { src: UPPER_GROUND_FLOOR, alt: "Upper Ground Floor Plan — Lake View Apartment", category: "Blueprint" },
    { src: FOURTH_FLOOR, alt: "4th Floor Plan — Lake View Apartment", category: "Blueprint" },
    { src: FIFTH_FLOOR, alt: "5th Floor Plan — Lake View Apartment", category: "Blueprint" },
    { src: SIXTH_FLOOR, alt: "6th Floor Plan — Lake View Apartment", category: "Blueprint" },
  ];

  const galleryLightboxImages: LBImage[] = GALLERY_IMAGES.map((src, i) => ({
    src,
    alt: `Gallery Image ${i + 1} — Lake View Apartment`,
    category: "Gallery",
  }));

  return (
    <div className="relative bg-background-50">
      <PageMeta
        title="Lake View Apartment — Ongoing | Sanctuary Architects & Designers"
        description="Lake View Apartment in Goa is a vertical residence redefining urban family living through generous spatial planning, seamless indoor-outdoor connections, and refined contemporary materials. Designed by Sanctuary Architects & Designers."
        keywords="Lake View Apartment, Goa residential architecture, vertical residence, contemporary apartment, multi-generational living, Sanctuary Architects"
        canonicalPath="/projects/ongoing/lake-view-apartment"
        schema={[
          buildBreadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Projects", path: "/projects" },
            { name: "Ongoing Projects", path: "/projects/ongoing" },
            { name: "Lake View Apartment" },
          ]),
          {
            "@context": "https://schema.org",
            "@type": "CreativeWork",
            name: "Lake View Apartment",
            description:
              "A vertical residence redefining urban family living through generous spatial planning, seamless indoor-outdoor connections, and a refined contemporary material palette.",
            url: "https://www.sanctuaryarch.com/projects/ongoing/lake-view-apartment",
            image: COVER_IMAGE,
            creator: {
              "@type": "Organization",
              name: "Sanctuary Architects & Designers",
              url: "https://www.sanctuaryarch.com",
            },
          },
        ]}
      />
      <Navbar />

      <main>
        {/* Section 1 — Hero */}
        <section className="relative w-full min-h-[70vh] md:min-h-[85vh] flex items-end pb-14 md:pb-20 overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={COVER_IMAGE}
              alt="Lake View Apartment — Goa"
              className="w-full h-full object-cover object-top"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/15 to-black/50" />

          <div className="relative z-10 w-full px-6 md:px-10 lg:px-14">
            <nav className="flex items-center gap-2 mb-6 text-xs font-body tracking-[0.04em] flex-wrap">
              <Link to="/" className="text-background-200/70 hover:text-background-50 transition-colors duration-300">Home</Link>
              <i className="ri-arrow-right-s-line text-background-200/40 text-[10px]" />
              <Link to="/projects" className="text-background-200/70 hover:text-background-50 transition-colors duration-300">Projects</Link>
              <i className="ri-arrow-right-s-line text-background-200/40 text-[10px]" />
              <Link to="/projects/ongoing" className="text-background-200/70 hover:text-background-50 transition-colors duration-300">Ongoing Projects</Link>
              <i className="ri-arrow-right-s-line text-background-200/40 text-[10px]" />
              <span className="text-background-50">Lake View Apartment</span>
            </nav>

            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="text-[10px] font-body tracking-[0.15em] uppercase px-3 py-1 rounded-full bg-background-50/15 text-background-200/80 border border-background-50/15">Residential</span>
              <span className="text-[10px] font-body tracking-[0.15em] uppercase px-3 py-1 rounded-full bg-background-50/15 text-background-200/80 border border-background-50/15">Goa</span>
              <span className="text-[10px] font-body tracking-[0.15em] uppercase px-3 py-1 rounded-full bg-accent-500/30 text-accent-200 border border-accent-400/20">Ongoing</span>
            </div>

            <h1 className="font-heading text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-light text-background-50 leading-[1.08] mb-4">
              Lake View Apartment
            </h1>
            <p className="text-sm md:text-base font-body text-background-200/75 max-w-xl leading-relaxed">
              A vertical residence redefining urban family living through generous spatial planning, seamless indoor-outdoor connections, and a refined contemporary material palette.
            </p>
          </div>
        </section>

        {/* Section 2 — Project Brief */}
        <section className="py-20 md:py-28 bg-background-50">
          <div className="w-full px-6 md:px-10 lg:px-14">
            <div className="max-w-3xl mx-auto">
              <p className="text-xs font-body tracking-[0.15em] uppercase text-primary-500 mb-4">Project Brief</p>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-light text-foreground-950 mb-10 leading-[1.1]">
                Project Brief
              </h2>
              <div className="space-y-6">
                <p className="text-[10px] font-body tracking-[0.15em] uppercase text-secondary-400 mb-1">LAKE VIEW APARTMENT</p>
                <p className="text-xs font-body tracking-[0.1em] uppercase text-secondary-400 mb-6">LOCATION: GOA</p>
                <p className="text-sm md:text-base font-body text-secondary-600 leading-[1.8]">
                  Lake View Apartment is conceived as a vertical residence that redefines urban family living through generous spatial planning, seamless indoor–outdoor connections, and a refined contemporary material palette.
                </p>
                <p className="text-sm md:text-base font-body text-secondary-600 leading-[1.8]">
                  Designed to overlook the surrounding landscape, the residence balances openness and privacy while accommodating the evolving needs of multiple generations within a single home.
                </p>
                <p className="text-sm md:text-base font-body text-secondary-600 leading-[1.8]">
                  Large openings, deep balconies, landscaped terraces, and carefully framed views allow natural light and ventilation to penetrate deep into the building.
                </p>
                <p className="text-sm md:text-base font-body text-secondary-600 leading-[1.8]">
                  Rather than treating balconies as secondary elements, they become extensions of the living spaces, strengthening the dialogue between the architecture and its surroundings.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3 — Design & Blueprint */}
        <section className="py-20 md:py-28 bg-background-100">
          <div className="w-full px-6 md:px-10 lg:px-14">
            <div className="max-w-5xl mx-auto">
              <p className="text-xs font-body tracking-[0.15em] uppercase text-primary-500 mb-4 text-center">Design & Blueprint</p>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-light text-foreground-950 mb-14 leading-[1.1] text-center">
                Design & Blueprint
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                {/* Upper Ground Floor */}
                <div
                  className="group bg-background-50 rounded-lg border border-secondary-200/30 overflow-hidden cursor-pointer hover:border-primary-200/40 transition-all duration-400 hover:-translate-y-1"
                  onClick={() => openLightbox(blueprintImages, 0)}
                  onKeyDown={(e) => { if (e.key === "Enter") openLightbox(blueprintImages, 0); }}
                  tabIndex={0}
                  role="button"
                  aria-label="View Upper Ground Floor Plan"
                >
                  <div className="p-4 md:p-5">
                    <img
                      src={UPPER_GROUND_FLOOR}
                      alt="Upper Ground Floor Plan — Lake View Apartment"
                      className="w-full h-auto object-contain rounded-md"
                      loading="lazy"
                    />
                  </div>
                  <div className="px-5 pb-5 pt-1 flex items-center justify-between">
                    <span className="font-heading text-base md:text-lg font-light text-foreground-950">Upper Ground Floor</span>
                    <span className="text-xs font-body text-secondary-400">Click to expand</span>
                  </div>
                </div>

                {/* 4th Floor */}
                <div
                  className="group bg-background-50 rounded-lg border border-secondary-200/30 overflow-hidden cursor-pointer hover:border-primary-200/40 transition-all duration-400 hover:-translate-y-1"
                  onClick={() => openLightbox(blueprintImages, 1)}
                  onKeyDown={(e) => { if (e.key === "Enter") openLightbox(blueprintImages, 1); }}
                  tabIndex={0}
                  role="button"
                  aria-label="View 4th Floor Plan"
                >
                  <div className="p-4 md:p-5">
                    <img
                      src={FOURTH_FLOOR}
                      alt="4th Floor Plan — Lake View Apartment"
                      className="w-full h-auto object-contain rounded-md"
                      loading="lazy"
                    />
                  </div>
                  <div className="px-5 pb-5 pt-1 flex items-center justify-between">
                    <span className="font-heading text-base md:text-lg font-light text-foreground-950">4th Floor</span>
                    <span className="text-xs font-body text-secondary-400">Click to expand</span>
                  </div>
                </div>

                {/* 5th Floor */}
                <div
                  className="group bg-background-50 rounded-lg border border-secondary-200/30 overflow-hidden cursor-pointer hover:border-primary-200/40 transition-all duration-400 hover:-translate-y-1"
                  onClick={() => openLightbox(blueprintImages, 2)}
                  onKeyDown={(e) => { if (e.key === "Enter") openLightbox(blueprintImages, 2); }}
                  tabIndex={0}
                  role="button"
                  aria-label="View 5th Floor Plan"
                >
                  <div className="p-4 md:p-5">
                    <img
                      src={FIFTH_FLOOR}
                      alt="5th Floor Plan — Lake View Apartment"
                      className="w-full h-auto object-contain rounded-md"
                      loading="lazy"
                    />
                  </div>
                  <div className="px-5 pb-5 pt-1 flex items-center justify-between">
                    <span className="font-heading text-base md:text-lg font-light text-foreground-950">5th Floor</span>
                    <span className="text-xs font-body text-secondary-400">Click to expand</span>
                  </div>
                </div>

                {/* 6th Floor */}
                <div
                  className="group bg-background-50 rounded-lg border border-secondary-200/30 overflow-hidden cursor-pointer hover:border-primary-200/40 transition-all duration-400 hover:-translate-y-1"
                  onClick={() => openLightbox(blueprintImages, 3)}
                  onKeyDown={(e) => { if (e.key === "Enter") openLightbox(blueprintImages, 3); }}
                  tabIndex={0}
                  role="button"
                  aria-label="View 6th Floor Plan"
                >
                  <div className="p-4 md:p-5">
                    <img
                      src={SIXTH_FLOOR}
                      alt="6th Floor Plan — Lake View Apartment"
                      className="w-full h-auto object-contain rounded-md"
                      loading="lazy"
                    />
                  </div>
                  <div className="px-5 pb-5 pt-1 flex items-center justify-between">
                    <span className="font-heading text-base md:text-lg font-light text-foreground-950">6th Floor</span>
                    <span className="text-xs font-body text-secondary-400">Click to expand</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4 — Gallery */}
        <section className="py-20 md:py-28 bg-background-50">
          <div className="w-full px-6 md:px-10 lg:px-14">
            <div className="max-w-7xl mx-auto">
              <p className="text-xs font-body tracking-[0.15em] uppercase text-primary-500 mb-4 text-center">Gallery</p>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-light text-foreground-950 mb-14 leading-[1.1] text-center">
                Project Gallery
              </h2>

              <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 md:gap-5">
                {GALLERY_IMAGES.map((src, index) => (
                  <div
                    key={index}
                    className="break-inside-avoid mb-4 md:mb-5 rounded-lg overflow-hidden border border-secondary-200/30 group cursor-pointer"
                    onClick={() => openLightbox(galleryLightboxImages, index)}
                    onKeyDown={(e) => { if (e.key === "Enter") openLightbox(galleryLightboxImages, index); }}
                    tabIndex={0}
                    role="button"
                    aria-label={`View gallery image ${index + 1}`}
                  >
                    <img
                      src={src}
                      alt={`Gallery ${index + 1} — Lake View Apartment`}
                      className="w-full h-auto object-contain transition-transform duration-800 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Section 5 — CTA */}
        <section className="py-24 md:py-32 bg-background-100">
          <div className="w-full px-6 md:px-10 lg:px-14 text-center">
            <p className="font-heading text-2xl md:text-3xl lg:text-4xl font-light text-foreground-950 mb-3 leading-[1.2]">
              Let's Create Your Dream Residence
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
      </main>

      <Lightbox
        images={lightboxImages}
        initialIndex={lightboxIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
      />

      <Footer />
    </div>
  );
}