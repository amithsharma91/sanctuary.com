import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/feature/Navbar";
import Footer from "@/components/feature/Footer";
import PageMeta from "@/components/feature/PageMeta";
import { buildBreadcrumbSchema } from "@/utils/seo";
import Lightbox from "@/components/feature/Lightbox";

const COVER_IMAGE = "https://res.cloudinary.com/dnyvkptxb/image/upload/v1786692550/201_cover_htrs5y.png";

const PLAN_2_4 = "https://res.cloudinary.com/dnyvkptxb/image/upload/v1786098165/2_4_Plan_Render_bza76q.png";
const PLAN_9A = "https://res.cloudinary.com/dnyvkptxb/image/upload/v1786098147/9A_Plan_Render_aggfuh.png";
const PLAN_8 = "https://res.cloudinary.com/dnyvkptxb/image/upload/v1786098142/8_Plan_Render_bligsr.png";
const PLAN_1_3_5 = "https://res.cloudinary.com/dnyvkptxb/image/upload/v1786098141/1_3_5_Plan_Render_azyvvq.png";
const PLAN_7 = "https://res.cloudinary.com/dnyvkptxb/image/upload/v1786098139/7_Plan_Render_alk7md.png";
const PLAN_6 = "https://res.cloudinary.com/dnyvkptxb/image/upload/v1786098113/6_Plan_Render_owpdnh.png";
const PLAN_9B = "https://res.cloudinary.com/dnyvkptxb/image/upload/v1786098111/9B_Plan_Render_epvb4k.png";

const GALLERY_IMAGES = [
  "https://res.cloudinary.com/dnyvkptxb/image/upload/v1786098161/185_wgiwnj.png",
  "https://res.cloudinary.com/dnyvkptxb/image/upload/v1786098162/190_cteuto.png",
  "https://res.cloudinary.com/dnyvkptxb/image/upload/v1786098163/183_arjvzj.png",
  "https://res.cloudinary.com/dnyvkptxb/image/upload/v1786098146/187_mmqgzd.png",
  "https://res.cloudinary.com/dnyvkptxb/image/upload/v1786098170/188_amqhbo.png",
  "https://res.cloudinary.com/dnyvkptxb/image/upload/v1786692045/200_foycba.png",
  "https://res.cloudinary.com/dnyvkptxb/image/upload/v1786692048/201_oc9jss.png",
  "https://res.cloudinary.com/dnyvkptxb/image/upload/v1786692049/199_dczkmd.png",
];

interface LBImage {
  src: string;
  alt: string;
  category?: string;
}

export default function VistaDoMarApartments() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImages, setLightboxImages] = useState<LBImage[]>([]);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const openLightbox = (images: LBImage[], index: number) => {
    setLightboxImages(images);
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const blueprintImages: LBImage[] = [
    { src: PLAN_2_4, alt: "2 & 4 Plan — Vista Do Mar Apartment", category: "Blueprint" },
    { src: PLAN_9A, alt: "9A Plan — Vista Do Mar Apartment", category: "Blueprint" },
    { src: PLAN_8, alt: "8 Plan — Vista Do Mar Apartment", category: "Blueprint" },
    { src: PLAN_1_3_5, alt: "1, 3 & 5 Plan — Vista Do Mar Apartment", category: "Blueprint" },
    { src: PLAN_7, alt: "7 Plan — Vista Do Mar Apartment", category: "Blueprint" },
    { src: PLAN_6, alt: "6 Plan — Vista Do Mar Apartment", category: "Blueprint" },
    { src: PLAN_9B, alt: "9B Plan — Vista Do Mar Apartment", category: "Blueprint" },
  ];

  const galleryLightboxImages: LBImage[] = GALLERY_IMAGES.map((src, i) => ({
    src,
    alt: `Gallery Image ${i + 1} — Vista Do Mar Apartment`,
    category: "Gallery",
  }));

  return (
    <div className="relative bg-background-50">
      <PageMeta
        title="Vista Do Mar Apartment | Ongoing | Sanctuary Architects"
        description="Explore Vista Do Mar Apartment, an ongoing luxury residential development in Goa featuring premium coastal architecture, expansive residences and panoramic sea-facing living."
        keywords="Vista Do Mar Apartment, ongoing residential project, Goa, luxury apartments, coastal architecture, Sanctuary Architects"
        ogImage={COVER_IMAGE}
        canonicalPath="/projects/ongoing/vista-do-mar-apartment"
        schema={[
          buildBreadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Projects", path: "/projects" },
            { name: "Ongoing Projects", path: "/projects/ongoing" },
            { name: "Vista Do Mar Apartment" },
          ]),
          {
            "@context": "https://schema.org",
            "@type": "CreativeWork",
            name: "Vista Do Mar Apartment",
            description:
              "A boutique luxury residential development designed to celebrate panoramic coastal views, expansive residences and contemporary architecture.",
            url: "https://www.sanctuaryarch.com/projects/ongoing/vista-do-mar-apartment",
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
              alt="Vista Do Mar Apartment — Goa"
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

              <span className="text-background-50">Vista Do Mar Apartment</span>
            </nav>

            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="text-[10px] font-body tracking-[0.15em] uppercase px-3 py-1 rounded-full bg-background-50/15 text-background-200/80 border border-background-50/15">Ongoing Projects</span>
              <span className="text-[10px] font-body tracking-[0.15em] uppercase px-3 py-1 rounded-full bg-background-50/15 text-background-200/80 border border-background-50/15">Goa</span>
              <span className="text-[10px] font-body tracking-[0.15em] uppercase px-3 py-1 rounded-full bg-primary-500/30 text-primary-200 border border-primary-400/20">Ongoing</span>
            </div>

            <h1 className="font-heading text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-light text-background-50 leading-[1.08] mb-4">
              Vista Do Mar Apartment
            </h1>
            <p className="text-sm md:text-base font-body text-background-200/75 max-w-xl leading-relaxed">
              A boutique luxury residential development designed to celebrate panoramic coastal views, expansive residences and contemporary architecture.
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
                  Vista Do Mar Apartment is a boutique luxury residential development conceived to redefine contemporary coastal living through refined architecture, expansive residences, and seamless indoor–outdoor experiences.
                </p>
                <p className="text-sm md:text-base font-body text-secondary-600 leading-[1.8]">
                  Designed as an exclusive collection of premium homes, the project celebrates openness, natural light, and uninterrupted views while offering the privacy and comfort expected from high-end urban living.
                </p>
                <p className="text-sm md:text-base font-body text-secondary-600 leading-[1.8]">
                  The architecture responds to its premium location with a dynamic composition of curved balconies, layered horizontal slabs, and warm natural materials that create an elegant yet timeless identity.
                </p>
                <p className="text-sm md:text-base font-body text-secondary-600 leading-[1.8]">
                  Every residence has been carefully planned to maximize natural ventilation, daylight penetration, and panoramic vistas, ensuring that the surrounding landscape becomes an extension of everyday life.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3 — Design & Blueprint */}
        <section className="py-20 md:py-28 bg-background-100">
          <div className="w-full px-6 md:px-10 lg:px-14">
            <div className="max-w-6xl mx-auto">
              <p className="text-xs font-body tracking-[0.15em] uppercase text-primary-500 mb-4 text-center">Design & Blueprint</p>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-light text-foreground-950 mb-14 leading-[1.1] text-center">
                Design & Blueprint
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
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
                      <span className="font-heading text-sm md:text-base font-light text-foreground-950">{bp.alt.replace(" — Vista Do Mar Apartment", "").replace(" Plan", "")}</span>
                      <span className="text-[10px] font-body text-secondary-400">Click to expand</span>
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
                      alt={`Gallery ${index + 1} — Vista Do Mar Apartment`}
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