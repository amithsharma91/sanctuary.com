import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/feature/Navbar";
import Footer from "@/components/feature/Footer";
import PageMeta from "@/components/feature/PageMeta";
import { buildBreadcrumbSchema } from "@/utils/seo";
import Lightbox from "@/components/feature/Lightbox";

const COVER_IMAGE = "https://res.cloudinary.com/dnyvkptxb/image/upload/v1786013332/COVER_PHOTO_e7e0ze.jpg";

const GROUND_FLOOR = "https://res.cloudinary.com/dnyvkptxb/image/upload/v1786013300/Villa_2_-_Ground_Floor_Plan_ztrvzz.png";
const FIRST_FLOOR = "https://res.cloudinary.com/dnyvkptxb/image/upload/v1786013308/Villa_2_-_First_Floor_Plan_dzbw12.png";

const GALLERY_IMAGES = [
  "https://res.cloudinary.com/dnyvkptxb/image/upload/v1786013289/DSC00406-HDR_ifi3nm.jpg",
  "https://res.cloudinary.com/dnyvkptxb/image/upload/v1786013289/DSC00304_oisnxa.jpg",
  "https://res.cloudinary.com/dnyvkptxb/image/upload/v1786013289/DSC00089_ghwwmi.jpg",
  "https://res.cloudinary.com/dnyvkptxb/image/upload/v1786013291/DSC00222-HDR_vuy10t.jpg",
  "https://res.cloudinary.com/dnyvkptxb/image/upload/v1786013291/DSC00146-HDR_wgsdp4.jpg",
  "https://res.cloudinary.com/dnyvkptxb/image/upload/v1786013310/DSC00004_zx6j0z.jpg",
  "https://res.cloudinary.com/dnyvkptxb/image/upload/v1786013310/DSC00352_yudj2d.jpg",
  "https://res.cloudinary.com/dnyvkptxb/image/upload/v1786013311/DSC00236-HDR_gtwxtq.jpg",
  "https://res.cloudinary.com/dnyvkptxb/image/upload/v1786013317/DSC00396-HDR-Edit_gdksyq.jpg",
  "https://res.cloudinary.com/dnyvkptxb/image/upload/v1786013326/DSC00209_x84iqu.jpg",
  "https://res.cloudinary.com/dnyvkptxb/image/upload/v1786013332/DSC00161_fcwx4x.jpg",
  "https://res.cloudinary.com/dnyvkptxb/image/upload/v1786013333/DSC00071_win97j.jpg",
  "https://res.cloudinary.com/dnyvkptxb/image/upload/v1786013333/DSC00317_fcbqbm.jpg",
  "https://res.cloudinary.com/dnyvkptxb/image/upload/v1786013332/COVER_PHOTO_e7e0ze.jpg",
];

interface LBImage {
  src: string;
  alt: string;
  category?: string;
}

export default function VillaNirvaana() {
  const navigate = useNavigate();
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImages, setLightboxImages] = useState<LBImage[]>([]);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const openLightbox = (images: LBImage[], index: number) => {
    setLightboxImages(images);
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const blueprintImages: LBImage[] = [
    { src: GROUND_FLOOR, alt: "Ground Floor — Villa Nirvaana", category: "Blueprint" },
    { src: FIRST_FLOOR, alt: "First Floor — Villa Nirvaana", category: "Blueprint" },
  ];

  const galleryLightboxImages: LBImage[] = GALLERY_IMAGES.map((src, i) => ({
    src,
    alt: `Gallery Image ${i + 1} — Villa Nirvaana`,
    category: "Gallery",
  }));

  return (
    <div className="relative bg-background-50">
      <PageMeta
        title="Villa Nirvaana — Residential | Sanctuary Architects & Designers"
        description="Villa Nirvaana is a serene 3530 SQFT retreat in Bengaluru Rural where architecture and landscape merge into one continuous experience. Designed by Sanctuary Architects & Designers."
        keywords="Villa Nirvaana, residential architecture, luxury villa, Sanctuary Architects, serene retreat, infinity pool, contemporary design"
        canonicalPath="/projects/residential/villa-nirvaana"
        schema={[
          buildBreadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Projects", path: "/projects" },
            { name: "Residential", path: "/projects/residential" },
            { name: "Villa Nirvaana" },
          ]),
          {
            "@context": "https://schema.org",
            "@type": "CreativeWork",
            name: "Villa Nirvaana",
            description:
              "A serene retreat where architecture and landscape merge into one continuous experience.",
            url: "https://www.sanctuaryarch.com/projects/residential/villa-nirvaana",
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
              alt="Villa Nirvaana"
              className="w-full h-full object-cover object-top"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/15 to-black/50" />

          <div className="relative z-10 w-full px-6 md:px-10 lg:px-14">
            <nav className="flex items-center gap-2 mb-6 text-xs font-body tracking-[0.04em]">
              <button onClick={() => navigate("/")} className="text-background-200/70 hover:text-background-50 transition-colors duration-300">Home</button>
              <i className="ri-arrow-right-s-line text-background-200/40 text-[10px]" />
              <button onClick={() => navigate("/projects/completed")} className="text-background-200/70 hover:text-background-50 transition-colors duration-300">Projects</button>
              <i className="ri-arrow-right-s-line text-background-200/40 text-[10px]" />
              <button onClick={() => navigate("/projects/residential")} className="text-background-200/70 hover:text-background-50 transition-colors duration-300">Residential</button>
              <i className="ri-arrow-right-s-line text-background-200/40 text-[10px]" />
              <span className="text-background-50">Villa Nirvaana</span>
            </nav>

            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="text-[10px] font-body tracking-[0.15em] uppercase px-3 py-1 rounded-full bg-background-50/15 text-background-200/80 border border-background-50/15">Residential</span>
              <span className="text-[10px] font-body tracking-[0.15em] uppercase px-3 py-1 rounded-full bg-background-50/15 text-background-200/80 border border-background-50/15">Bengaluru Rural</span>
              <span className="text-[10px] font-body tracking-[0.15em] uppercase px-3 py-1 rounded-full bg-background-50/15 text-background-200/80 border border-background-50/15">3530 SQFT</span>
            </div>

            <h1 className="font-heading text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-light text-background-50 leading-[1.08] mb-4">
              Villa Nirvaana
            </h1>
            <p className="text-sm md:text-base font-body text-background-200/75 max-w-xl leading-relaxed">
              A serene retreat where architecture and landscape merge into one continuous experience.
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
                  Villa Nirvaana is a serene retreat where architecture and landscape merge into one continuous experience.
                </p>
                <p className="text-sm md:text-base font-body text-secondary-600 leading-[1.8]">
                  Its organically shaped infinity pool, shaded outdoor deck, and uninterrupted agricultural views create a timeless atmosphere of calmness, reflection, and connection with nature.
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
                <div
                  className="group bg-background-50 rounded-lg border border-secondary-200/30 overflow-hidden cursor-pointer hover:border-primary-200/40 transition-all duration-400 hover:-translate-y-1"
                  onClick={() => openLightbox(blueprintImages, 0)}
                  onKeyDown={(e) => { if (e.key === "Enter") openLightbox(blueprintImages, 0); }}
                  tabIndex={0}
                  role="button"
                  aria-label="View Ground Floor Plan"
                >
                  <div className="p-4 md:p-5">
                    <img
                      src={GROUND_FLOOR}
                      alt="Ground Floor Plan — Villa Nirvaana"
                      className="w-full h-auto object-contain rounded-md"
                      loading="lazy"
                    />
                  </div>
                  <div className="px-5 pb-5 pt-1 flex items-center justify-between">
                    <span className="font-heading text-base md:text-lg font-light text-foreground-950">Ground Floor</span>
                    <span className="text-xs font-body text-secondary-400">Click to expand</span>
                  </div>
                </div>

                <div
                  className="group bg-background-50 rounded-lg border border-secondary-200/30 overflow-hidden cursor-pointer hover:border-primary-200/40 transition-all duration-400 hover:-translate-y-1"
                  onClick={() => openLightbox(blueprintImages, 1)}
                  onKeyDown={(e) => { if (e.key === "Enter") openLightbox(blueprintImages, 1); }}
                  tabIndex={0}
                  role="button"
                  aria-label="View First Floor Plan"
                >
                  <div className="p-4 md:p-5">
                    <img
                      src={FIRST_FLOOR}
                      alt="First Floor Plan — Villa Nirvaana"
                      className="w-full h-auto object-contain rounded-md"
                      loading="lazy"
                    />
                  </div>
                  <div className="px-5 pb-5 pt-1 flex items-center justify-between">
                    <span className="font-heading text-base md:text-lg font-light text-foreground-950">First Floor</span>
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
                      alt={`Gallery ${index + 1} — Villa Nirvaana`}
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
            <button
              onClick={() => navigate("/contact")}
              className="btn-luxury inline-flex items-center gap-2 px-9 py-3.5 bg-primary-500 text-background-50 text-sm font-label font-semibold tracking-wide rounded-md hover:bg-primary-600 transition-all duration-500 hover:shadow-[0_0_32px_rgba(166,124,82,0.35)] active:scale-[0.97] whitespace-nowrap"
            >
              Contact Us
              <i className="ri-arrow-right-line" />
            </button>
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