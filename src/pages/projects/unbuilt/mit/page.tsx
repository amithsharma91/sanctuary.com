import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/feature/Navbar";
import Footer from "@/components/feature/Footer";
import PageMeta from "@/components/feature/PageMeta";
import { buildBreadcrumbSchema } from "@/utils/seo";
import Lightbox from "@/components/feature/Lightbox";

const COVER_IMAGE = "https://res.cloudinary.com/dnyvkptxb/image/upload/v1786104452/Screenshot_2026-08-07_173401_uald8x.png";

const GROUND_FLOOR_PLAN = "https://res.cloudinary.com/dnyvkptxb/image/upload/v1786104395/GROUND_FLOOR_vcnuv0.jpg";
const FIRST_FLOOR_PLAN = "https://res.cloudinary.com/dnyvkptxb/image/upload/v1786104395/FIRST_FLOOR_hnszzq.jpg";
const SECOND_FLOOR_PLAN = "https://res.cloudinary.com/dnyvkptxb/image/upload/v1786104395/SECOND_FLOOR_kiuf9b.jpg";

const GALLERY_IMAGES = [
  "https://res.cloudinary.com/dnyvkptxb/image/upload/v1786104447/Screenshot_2026-08-07_173426_cmic1l.png",
  "https://res.cloudinary.com/dnyvkptxb/image/upload/v1786104452/Screenshot_2026-08-07_173401_uald8x.png",
  "https://res.cloudinary.com/dnyvkptxb/image/upload/v1786104449/Screenshot_2026-08-07_173244_azcc3w.png",
  "https://res.cloudinary.com/dnyvkptxb/image/upload/v1786104449/Screenshot_2026-08-07_173300_t9zd6d.png",
  "https://res.cloudinary.com/dnyvkptxb/image/upload/v1786104453/Screenshot_2026-08-07_173346_zlty6z.png",
  "https://res.cloudinary.com/dnyvkptxb/image/upload/v1786104454/Screenshot_2026-08-07_173149_wmowqh.png",
  "https://res.cloudinary.com/dnyvkptxb/image/upload/v1786104464/Screenshot_2026-08-07_173324_rf5vke.png",
  "https://res.cloudinary.com/dnyvkptxb/image/upload/v1786104466/Screenshot_2026-08-07_173312_ccauap.png",
];

interface LBImage {
  src: string;
  alt: string;
  category?: string;
}

export default function MIT() {
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
    { src: GROUND_FLOOR_PLAN, alt: "Ground Floor Plan — MIT (Manipal University)", category: "Blueprint" },
    { src: FIRST_FLOOR_PLAN, alt: "First Floor Plan — MIT (Manipal University)", category: "Blueprint" },
    { src: SECOND_FLOOR_PLAN, alt: "Second Floor Plan — MIT (Manipal University)", category: "Blueprint" },
  ];

  const galleryLightboxImages: LBImage[] = GALLERY_IMAGES.map((src, i) => ({
    src,
    alt: `Gallery Image ${i + 1} — MIT (Manipal University)`,
    category: "Gallery",
  }));

  return (
    <div className="relative bg-background-50">
      <PageMeta
        title="MIT (Manipal University) | Unbuilt Project | Sanctuary Architects & Designers"
        description="Explore MIT (Manipal University) Architecture Faculty, an unbuilt educational project by Sanctuary Architects & Designers at Manipal Institute of Technology, designed with climatic considerations, local materials, and thoughtful spatial planning."
        keywords="MIT (Manipal University) Architecture Faculty, Manipal Institute of Technology, unbuilt educational project, climate-responsive architecture, Sanctuary Architects"
        ogImage={COVER_IMAGE}
        canonicalPath="/projects/unbuilt/mit-manipal-university"
        schema={[
          buildBreadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Projects", path: "/projects" },
            { name: "Unbuilt Projects", path: "/projects/unbuilt" },
            { name: "MIT (Manipal University)" },
          ]),
          {
            "@context": "https://schema.org",
            "@type": "CreativeWork",
            name: "MIT (Manipal University)",
            description:
              "The Architecture Faculty of Manipal Institute of Technology — climate-responsive design with local materials and thoughtful spatial planning.",
            url: "https://www.sanctuaryarch.com/projects/unbuilt/mit-manipal-university",
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
              alt="MIT (Manipal University)"
              className="w-full h-full object-cover object-top"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/15 to-black/50" />

          <div className="relative z-10 w-full px-6 md:px-10 lg:px-14">
            <nav className="flex items-center gap-2 mb-6 text-xs font-body tracking-[0.04em] flex-wrap">
              <button onClick={() => navigate("/")} className="text-background-200/70 hover:text-background-50 transition-colors duration-300">Home</button>
              <i className="ri-arrow-right-s-line text-background-200/40 text-[10px]" />
              <button onClick={() => navigate("/projects")} className="text-background-200/70 hover:text-background-50 transition-colors duration-300">Projects</button>
              <i className="ri-arrow-right-s-line text-background-200/40 text-[10px]" />
              <button onClick={() => navigate("/projects/unbuilt")} className="text-background-200/70 hover:text-background-50 transition-colors duration-300">Unbuilt Projects</button>
              <i className="ri-arrow-right-s-line text-background-200/40 text-[10px]" />
              <span className="text-background-50">MIT (Manipal University)</span>
            </nav>

            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="text-[10px] font-body tracking-[0.15em] uppercase px-3 py-1 rounded-full bg-background-50/15 text-background-200/80 border border-background-50/15">Education</span>
              <span className="text-[10px] font-body tracking-[0.15em] uppercase px-3 py-1 rounded-full bg-background-50/15 text-background-200/80 border border-background-50/15">Manipal</span>
              <span className="text-[10px] font-body tracking-[0.15em] uppercase px-3 py-1 rounded-full bg-accent-500/30 text-accent-200 border border-accent-400/20">Unbuilt</span>
            </div>

            <h1 className="font-heading text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-light text-background-50 leading-[1.08] mb-4">
              MIT (Manipal University)
            </h1>
            <p className="text-sm md:text-base font-body text-background-200/75 max-w-xl leading-relaxed">
              The Architecture Faculty of Manipal Institute of Technology — climate-responsive design with local materials and thoughtful spatial planning.
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
                  The Architecture Faculty of Manipal Institute of Technology has evolved after careful planning as a result of climatic considerations, use of local material, interactive and isolated spaces and zoning.
                </p>
                <p className="text-sm md:text-base font-body text-secondary-600 leading-[1.8]">
                  The building aims to set an example of architecture that inspires students to understand the careful inter-relationships between spaces, how they integrate and isolate from one another, the relationship between landscape and built form, the play of light, material, texture, colour and how to reduce energy consumption through thoughtful planning.
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

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
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
                      <span className="font-heading text-base md:text-lg font-light text-foreground-950">{bp.alt.replace(" — MIT (Manipal University)", "")}</span>
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
                      alt={`Gallery ${index + 1} — MIT (Manipal University)`}
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
              Let's Create Your Dream Project
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