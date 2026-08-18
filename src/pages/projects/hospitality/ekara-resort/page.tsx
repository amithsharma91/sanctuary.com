import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/feature/Navbar";
import Footer from "@/components/feature/Footer";
import PageMeta from "@/components/feature/PageMeta";
import { buildBreadcrumbSchema } from "@/utils/seo";
import Lightbox from "@/components/feature/Lightbox";

const COVER_IMAGE = "https://res.cloudinary.com/dnyvkptxb/image/upload/v1786095105/COVER_PAGE_fiajuv.jpg";

const GROUND_FLOOR_PLAN = "https://res.cloudinary.com/dnyvkptxb/image/upload/v1786095124/gf_plan_-_Copy_bjshyi.png";
const FIRST_FLOOR_PLAN = "https://res.cloudinary.com/dnyvkptxb/image/upload/v1786095124/FF_PLAN_-_Copy_hkeqh1.png";

const GALLERY_IMAGES = [
  "https://res.cloudinary.com/dnyvkptxb/image/upload/v1786095101/WhatsApp_Image_2025-12-16_at_13.12.12_4_vfl7dy.jpg",
  "https://res.cloudinary.com/dnyvkptxb/image/upload/v1786095101/WhatsApp_Image_2025-12-16_at_13.12.12_1_1_gn5vy5.jpg",
  "https://res.cloudinary.com/dnyvkptxb/image/upload/v1786095105/WhatsApp_Image_2025-12-16_at_13.12.12_1_usof2y.jpg",
  "https://res.cloudinary.com/dnyvkptxb/image/upload/v1786095116/vfv_m8rsfv.png",
  "https://res.cloudinary.com/dnyvkptxb/image/upload/v1786095105/COVER_PAGE_fiajuv.jpg",
  "https://res.cloudinary.com/dnyvkptxb/image/upload/v1786095115/grtrt_smhgsf.png",
  "https://res.cloudinary.com/dnyvkptxb/image/upload/v1786095116/WhatsApp_Image_2025-12-16_at_13.12.12_2_al51rp.jpg",
  "https://res.cloudinary.com/dnyvkptxb/image/upload/v1786095120/WhatsApp_Image_2025-12-15_at_18.50.15_cyopuq.jpg",
];

interface LBImage {
  src: string;
  alt: string;
  category?: string;
}

export default function EkaraResort() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImages, setLightboxImages] = useState<LBImage[]>([]);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const openLightbox = (images: LBImage[], index: number) => {
    setLightboxImages(images);
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const blueprintImages: LBImage[] = [
    { src: GROUND_FLOOR_PLAN, alt: "Ground Floor Plan — Ekara Resort", category: "Blueprint" },
    { src: FIRST_FLOOR_PLAN, alt: "First Floor Plan — Ekara Resort", category: "Blueprint" },
  ];

  const galleryLightboxImages: LBImage[] = GALLERY_IMAGES.map((src, i) => ({
    src,
    alt: `Gallery Image ${i + 1} — Ekara Resort`,
    category: "Gallery",
  }));

  return (
    <div className="relative bg-background-50">
      <PageMeta
        title="Ekara Resort | Ongoing | Sanctuary Architects"
        description="Explore Ekara Resort, an ongoing boutique hospitality development by Sanctuary Architects & Designers that blends tropical landscape, architecture and luxury resort experiences."
        keywords="Ekara Resort, ongoing hospitality project, boutique luxury resort, Bengaluru Rural, tropical retreat, Sanctuary Architects"
        ogImage={COVER_IMAGE}
        canonicalPath="/projects/ongoing/ekara-resort"
        schema={[
          buildBreadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Projects", path: "/projects" },
            { name: "Ongoing Projects", path: "/projects/ongoing" },
            { name: "Ekara Resort" },
          ]),
          {
            "@context": "https://schema.org",
            "@type": "CreativeWork",
            name: "Ekara Resort",
            description:
              "A boutique luxury resort where architecture, landscape and hospitality merge into a seamless tropical retreat.",
            url: "https://www.sanctuaryarch.com/projects/ongoing/ekara-resort",
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
              alt="Ekara Resort"
              className="w-full h-full object-cover object-top"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/15 to-black/50" />

          <div className="relative z-10 w-full px-6 md:px-10 lg:px-14">
            <nav className="flex items-center gap-2 mb-6 text-xs font-body tracking-[0.04em]">
              <Link to="/" className="text-background-200/70 hover:text-background-50 transition-colors duration-300">Home</Link>
              <i className="ri-arrow-right-s-line text-background-200/40 text-[10px]" />
              <Link to="/projects" className="text-background-200/70 hover:text-background-50 transition-colors duration-300">Projects</Link>
              <i className="ri-arrow-right-s-line text-background-200/40 text-[10px]" />
              <Link to="/projects/ongoing" className="text-background-200/70 hover:text-background-50 transition-colors duration-300">Ongoing Projects</Link>
              <i className="ri-arrow-right-s-line text-background-200/40 text-[10px]" />

              <span className="text-background-50">Ekara Resort</span>
            </nav>

            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="text-[10px] font-body tracking-[0.15em] uppercase px-3 py-1 rounded-full bg-background-50/15 text-background-200/80 border border-background-50/15">Ongoing Projects</span>
              <span className="text-[10px] font-body tracking-[0.15em] uppercase px-3 py-1 rounded-full bg-background-50/15 text-background-200/80 border border-background-50/15">Bengaluru Rural</span>
              <span className="text-[10px] font-body tracking-[0.15em] uppercase px-3 py-1 rounded-full bg-primary-500/30 text-primary-200 border border-primary-400/20">Ongoing</span>
            </div>

            <h1 className="font-heading text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-light text-background-50 leading-[1.08] mb-4">
              Ekara Resort
            </h1>
            <p className="text-sm md:text-base font-body text-background-200/75 max-w-xl leading-relaxed">
              A boutique luxury resort where architecture, landscape and hospitality merge into a seamless tropical retreat.
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
                <p className="text-sm md:text-base font-body text-secondary-600 leading-[1.8]">
                  Ekara Resort is envisioned as a boutique retreat where architecture dissolves the boundaries between hospitality, landscape, and community.
                </p>
                <p className="text-sm md:text-base font-body text-secondary-600 leading-[1.8]">
                  Rather than organizing accommodation as isolated rooms connected by conventional corridors, the project is planned as a collection of private sanctuaries woven together by gardens, open courts, and shaded walkways.
                </p>
                <p className="text-sm md:text-base font-body text-secondary-600 leading-[1.8]">
                  The masterplan is arranged around a generous central spine that acts as the social heart of the resort.
                </p>
                <p className="text-sm md:text-base font-body text-secondary-600 leading-[1.8]">
                  This landscaped promenade is more than a circulation space—it becomes an experiential journey, gradually unfolding views of tropical planting, textured stone walls, filtered light, and open skies.
                </p>
                <p className="text-sm md:text-base font-body text-secondary-600 leading-[1.8]">
                  Every arrival is designed as a slow transition from the outside world into an environment of calm, intimacy, and connection with nature.
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
                {blueprintImages.map((bp, idx) => (
                  <div
                    key={idx}
                    className="group bg-background-50 rounded-lg border border-secondary-200/30 overflow-hidden cursor-pointer hover:border-primary-200/40 transition-all duration-400 hover:-translate-y-1"
                    onClick={() => openLightbox(blueprintImages, idx)}
                    onKeyDown={(e) => { if (e.key === "Enter") openLightbox(blueprintImages, idx); }}
                    tabIndex={0}
                    role="button"
                    aria-label={`View ${bp.alt}`}
                  >
                    <div className="p-4 md:p-5">
                      <img
                        src={bp.src}
                        alt={bp.alt}
                        className="w-full h-auto object-contain rounded-md"
                        loading="lazy"
                      />
                    </div>
                    <div className="px-5 pb-5 pt-1 flex items-center justify-between">
                      <span className="font-heading text-base md:text-lg font-light text-foreground-950">{bp.alt.replace(" — Ekara Resort", "")}</span>
                      <span className="text-xs font-body text-secondary-400">Click to expand</span>
                    </div>
                  </div>
                ))}
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
                      alt={`Gallery ${index + 1} — Ekara Resort`}
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
              Let's Create Your Dream Ongoing Projects Space
            </p>
            <p className="text-sm font-body text-secondary-500 mb-10 max-w-md mx-auto">
              Every great project begins with a conversation. Let us bring your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/contact"
                className="btn-luxury inline-flex items-center gap-2 px-9 py-3.5 bg-primary-500 text-background-50 text-sm font-label font-semibold tracking-wide rounded-md hover:bg-primary-600 transition-all duration-500 hover:shadow-[0_0_32px_rgba(166,124,82,0.35)] active:scale-[0.97] whitespace-nowrap"
              >
                Start Your Project
                <i className="ri-arrow-right-line" />
              </Link>
              <Link
                to="/contact"
                className="btn-luxury inline-flex items-center gap-2 px-9 py-3.5 bg-foreground-950 text-background-50 text-sm font-label font-semibold tracking-wide rounded-md hover:bg-foreground-800 transition-all duration-500 hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] active:scale-[0.97] whitespace-nowrap"
              >
                Contact Us
                <i className="ri-arrow-right-line" />
              </Link>
            </div>
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