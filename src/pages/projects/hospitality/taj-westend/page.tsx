import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/feature/Navbar";
import Footer from "@/components/feature/Footer";
import PageMeta from "@/components/feature/PageMeta";
import Lightbox from "@/components/feature/Lightbox";

const COVER_IMAGE = "https://res.cloudinary.com/dnyvkptxb/image/upload/v1786015266/COVER_PHOTO_ngczvq.jpg";

const GROUND_FLOOR_PLAN = "https://res.cloudinary.com/dnyvkptxb/image/upload/v1786015284/G_FLOOR_PLAN1_m6zjcn.png";
const FIRST_FLOOR_PLAN = "https://res.cloudinary.com/dnyvkptxb/image/upload/v1786015321/1ST_FLOOR_PLAN1_tpzc1p.png";

const GALLERY_IMAGES = [
  "https://res.cloudinary.com/dnyvkptxb/image/upload/v1786015260/DSC07451_Large_el93no.jpg",
  "https://res.cloudinary.com/dnyvkptxb/image/upload/v1786015259/DSC07450_Large_ahhvzt.jpg",
  "https://res.cloudinary.com/dnyvkptxb/image/upload/v1786015265/DSC07467_Large_zji6ob.jpg",
  "https://res.cloudinary.com/dnyvkptxb/image/upload/v1786015266/DSC07168_Large_rrnvs3.jpg",
  "https://res.cloudinary.com/dnyvkptxb/image/upload/v1786015266/DSC07500_Large_ysw7hw.jpg",
  "https://res.cloudinary.com/dnyvkptxb/image/upload/v1786015268/DSC07269_Large_fraftn.jpg",
  "https://res.cloudinary.com/dnyvkptxb/image/upload/v1786015270/DSC07299_Large_uifi3a.jpg",
  "https://res.cloudinary.com/dnyvkptxb/image/upload/v1786015271/DSC07287_Large_htzfom.jpg",
  "https://res.cloudinary.com/dnyvkptxb/image/upload/v1786015271/DSC07260_Large_w4hvii.jpg",
  "https://res.cloudinary.com/dnyvkptxb/image/upload/v1786015272/DSC07330_Large_pvgcze.jpg",
  "https://res.cloudinary.com/dnyvkptxb/image/upload/v1786015276/DSC07442_Large_vtlanj.jpg",
  "https://res.cloudinary.com/dnyvkptxb/image/upload/v1786015276/DSC07448_Large_zqcszp.jpg",
  "https://res.cloudinary.com/dnyvkptxb/image/upload/v1786015276/DSC07339_Large_j8gths.jpg",
  "https://res.cloudinary.com/dnyvkptxb/image/upload/v1786015280/DSC07418_Large_ll3bia.jpg",
  "https://res.cloudinary.com/dnyvkptxb/image/upload/v1786015266/COVER_PHOTO_ngczvq.jpg",
];

interface LBImage {
  src: string;
  alt: string;
  category?: string;
}

export default function TajWestend() {
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
    { src: GROUND_FLOOR_PLAN, alt: "Ground Floor Plan — Taj Westend", category: "Blueprint" },
    { src: FIRST_FLOOR_PLAN, alt: "First Floor Plan — Taj Westend", category: "Blueprint" },
  ];

  const galleryLightboxImages: LBImage[] = GALLERY_IMAGES.map((src, i) => ({
    src,
    alt: `Gallery Image ${i + 1} — Taj Westend`,
    category: "Gallery",
  }));

  return (
    <div className="relative bg-background-50">
      <PageMeta
        title="Taj Westend — Hospitality | Sanctuary Architects & Designers"
        description="The Chambers at Taj Westend blends colonial heritage with contemporary South Indian art, craftsmanship and culture. Designed by Sanctuary Architects & Designers."
        keywords="Taj Westend, hospitality architecture, colonial heritage design, South Indian art, luxury hotel interiors, Bengaluru, Sanctuary hospitality projects"
        canonicalPath="/projects/hospitality/taj-westend"
      />
      <Navbar />

      <main>
        {/* Section 1 — Hero */}
        <section className="relative w-full min-h-[70vh] md:min-h-[85vh] flex items-end pb-14 md:pb-20 overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={COVER_IMAGE}
              alt="Taj Westend"
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
              <button onClick={() => navigate("/projects/hospitality")} className="text-background-200/70 hover:text-background-50 transition-colors duration-300">Hospitality</button>
              <i className="ri-arrow-right-s-line text-background-200/40 text-[10px]" />
              <span className="text-background-50">Taj Westend</span>
            </nav>

            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="text-[10px] font-body tracking-[0.15em] uppercase px-3 py-1 rounded-full bg-background-50/15 text-background-200/80 border border-background-50/15">Hospitality</span>
            </div>

            <h1 className="font-heading text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-light text-background-50 leading-[1.08] mb-4">
              Taj Westend
            </h1>
            <p className="text-sm md:text-base font-body text-background-200/75 max-w-xl leading-relaxed">
              The Chambers at Taj Westend blends colonial heritage with contemporary South Indian art, craftsmanship and culture — an elegant retreat celebrating Bengaluru's rich history.
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
                  The Chambers at Taj Westend blends colonial heritage with contemporary South Indian art, craftsmanship and culture. Designed as an elegant retreat, the interiors celebrate Bengaluru's rich history through refined materials, handcrafted detailing and timeless hospitality.
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
                      src={GROUND_FLOOR_PLAN}
                      alt="Ground Floor Plan — Taj Westend"
                      className="w-full h-auto object-contain rounded-md"
                      loading="lazy"
                    />
                  </div>
                  <div className="px-5 pb-5 pt-1 flex items-center justify-between">
                    <span className="font-heading text-base md:text-lg font-light text-foreground-950">Ground Floor Plan</span>
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
                      src={FIRST_FLOOR_PLAN}
                      alt="First Floor Plan — Taj Westend"
                      className="w-full h-auto object-contain rounded-md"
                      loading="lazy"
                    />
                  </div>
                  <div className="px-5 pb-5 pt-1 flex items-center justify-between">
                    <span className="font-heading text-base md:text-lg font-light text-foreground-950">First Floor Plan</span>
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
                      alt={`Gallery ${index + 1} — Taj Westend`}
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
              Let's Create Your Dream Hospitality Space
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