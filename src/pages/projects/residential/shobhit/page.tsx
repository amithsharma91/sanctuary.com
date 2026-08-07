import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/feature/Navbar";
import Footer from "@/components/feature/Footer";
import PageMeta from "@/components/feature/PageMeta";
import Lightbox from "@/components/feature/Lightbox";

const COVER_IMAGE = "https://res.cloudinary.com/dnyvkptxb/image/upload/v1786098650/COVER_PHOTO_pkeumb.jpg";

const GROUND_FLOOR = "https://res.cloudinary.com/dnyvkptxb/image/upload/v1786098638/ground_floor_ex4rsp.png";
const FIRST_FLOOR = "https://res.cloudinary.com/dnyvkptxb/image/upload/v1786098650/first_floor_lkon45.png";

const GALLERY_IMAGES = [
  "https://res.cloudinary.com/dnyvkptxb/image/upload/v1786098683/16_wwxeuv.jpg",
  "https://res.cloudinary.com/dnyvkptxb/image/upload/v1786098682/1_1_bim7gr.jpg",
  "https://res.cloudinary.com/dnyvkptxb/image/upload/v1786098681/1_phhrdm.jpg",
  "https://res.cloudinary.com/dnyvkptxb/image/upload/v1786098678/05_2_gzzzft.jpg",
  "https://res.cloudinary.com/dnyvkptxb/image/upload/v1786098678/32_lrhuoy.jpg",
  "https://res.cloudinary.com/dnyvkptxb/image/upload/v1786098670/40_kylerz.jpg",
  "https://res.cloudinary.com/dnyvkptxb/image/upload/v1786098658/09_1_d4ukub.jpg",
  "https://res.cloudinary.com/dnyvkptxb/image/upload/v1786098657/33_ywacsm.jpg",
  "https://res.cloudinary.com/dnyvkptxb/image/upload/v1786098650/COVER_PHOTO_pkeumb.jpg",
  "https://res.cloudinary.com/dnyvkptxb/image/upload/v1786098650/2_1_kx6b61.jpg",
  "https://res.cloudinary.com/dnyvkptxb/image/upload/v1786098630/14_1_vkavjk.jpg",
  "https://res.cloudinary.com/dnyvkptxb/image/upload/v1786098629/2_rnmrhd.jpg",
];

interface LBImage {
  src: string;
  alt: string;
  category?: string;
}

export default function Shobhit() {
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
    { src: GROUND_FLOOR, alt: "Ground Floor Plan — Shobhit", category: "Blueprint" },
    { src: FIRST_FLOOR, alt: "First Floor Plan — Shobhit", category: "Blueprint" },
  ];

  const galleryLightboxImages: LBImage[] = GALLERY_IMAGES.map((src, i) => ({
    src,
    alt: `Gallery Image ${i + 1} — Shobhit`,
    category: "Gallery",
  }));

  return (
    <div className="relative bg-background-50">
      <PageMeta
        title="Shobhit | Ongoing Residential Project | Sanctuary Architects & Designers"
        description="Explore Shobhit, an ongoing luxury residential penthouse in Goa by Sanctuary Architects & Designers, celebrating tropical contemporary architecture and refined living."
        keywords="Shobhit, ongoing residential project, Goa, luxury penthouse, tropical contemporary architecture, Sanctuary Architects"
        canonicalPath="/projects/residential/shobhit"
      />
      <Navbar />

      <main>
        {/* Section 1 — Hero */}
        <section className="relative w-full min-h-[70vh] md:min-h-[85vh] flex items-end pb-14 md:pb-20 overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={COVER_IMAGE}
              alt="Shobhit — Goa"
              className="w-full h-full object-cover object-top"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/15 to-black/50" />

          <div className="relative z-10 w-full px-6 md:px-10 lg:px-14">
            <nav className="flex items-center gap-2 mb-6 text-xs font-body tracking-[0.04em]">
              <button onClick={() => navigate("/")} className="text-background-200/70 hover:text-background-50 transition-colors duration-300">Home</button>
              <i className="ri-arrow-right-s-line text-background-200/40 text-[10px]" />
              <button onClick={() => navigate("/projects")} className="text-background-200/70 hover:text-background-50 transition-colors duration-300">Projects</button>
              <i className="ri-arrow-right-s-line text-background-200/40 text-[10px]" />
              <button onClick={() => navigate("/projects/ongoing")} className="text-background-200/70 hover:text-background-50 transition-colors duration-300">Ongoing Projects</button>
              <i className="ri-arrow-right-s-line text-background-200/40 text-[10px]" />
              <button onClick={() => navigate("/projects/residential")} className="text-background-200/70 hover:text-background-50 transition-colors duration-300">Residential</button>
              <i className="ri-arrow-right-s-line text-background-200/40 text-[10px]" />
              <span className="text-background-50">Shobhit</span>
            </nav>

            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="text-[10px] font-body tracking-[0.15em] uppercase px-3 py-1 rounded-full bg-background-50/15 text-background-200/80 border border-background-50/15">Residential</span>
              <span className="text-[10px] font-body tracking-[0.15em] uppercase px-3 py-1 rounded-full bg-background-50/15 text-background-200/80 border border-background-50/15">Goa</span>
              <span className="text-[10px] font-body tracking-[0.15em] uppercase px-3 py-1 rounded-full bg-primary-500/30 text-primary-200 border border-primary-400/20">Ongoing</span>
            </div>

            <h1 className="font-heading text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-light text-background-50 leading-[1.08] mb-4">
              Shobhit
            </h1>
            <p className="text-sm md:text-base font-body text-background-200/75 max-w-xl leading-relaxed">
              Luxury contemporary penthouse designed around openness, tropical living, handcrafted materials and seamless indoor-outdoor spaces.
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
                  The design aims to create a tranquil and luxurious penthouse that celebrates openness, natural light, and a strong connection to the surrounding landscape.
                </p>
                <p className="text-sm md:text-base font-body text-secondary-600 leading-[1.8]">
                  The interiors focus on warm neutral tones, handcrafted textures, and refined materiality to evoke a sense of calm and permanence.
                </p>
                <p className="text-sm md:text-base font-body text-secondary-600 leading-[1.8]">
                  Custom-designed furniture, integrated lighting, and subtle detailing ensure visual continuity throughout the residence.
                </p>
                <p className="text-sm md:text-base font-body text-secondary-600 leading-[1.8]">
                  The result is a home that reflects modern luxury while remaining deeply rooted in the tropical character and laid-back lifestyle of Goa.
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

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-2xl mx-auto">
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
                      alt="Ground Floor Plan — Shobhit"
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
                      alt="First Floor Plan — Shobhit"
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
                      alt={`Gallery ${index + 1} — Shobhit`}
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
              <button
                onClick={() => navigate("/contact")}
                className="btn-luxury inline-flex items-center gap-2 px-9 py-3.5 bg-primary-500 text-background-50 text-sm font-label font-semibold tracking-wide rounded-md hover:bg-primary-600 transition-all duration-500 hover:shadow-[0_0_32px_rgba(166,124,82,0.35)] active:scale-[0.97] whitespace-nowrap"
              >
                Start Your Project
                <i className="ri-arrow-right-line" />
              </button>
              <button
                onClick={() => navigate("/contact")}
                className="btn-luxury inline-flex items-center gap-2 px-9 py-3.5 bg-foreground-950 text-background-50 text-sm font-label font-semibold tracking-wide rounded-md hover:bg-foreground-800 transition-all duration-500 hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] active:scale-[0.97] whitespace-nowrap"
              >
                Contact Us
                <i className="ri-arrow-right-line" />
              </button>
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