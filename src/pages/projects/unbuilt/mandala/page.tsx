import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/feature/Navbar";
import Footer from "@/components/feature/Footer";
import PageMeta from "@/components/feature/PageMeta";
import Lightbox from "@/components/feature/Lightbox";

const COVER_IMAGE = "https://res.cloudinary.com/dnyvkptxb/image/upload/v1786103811/COVER_PHOTO_ntbnjf.jpg";

const GALLERY_IMAGES = [
  "https://res.cloudinary.com/dnyvkptxb/image/upload/v1786103812/44_18_-_Photo_wmabmm.jpg",
  "https://res.cloudinary.com/dnyvkptxb/image/upload/v1786103814/43_21_-_Photo_cpxjep.jpg",
  "https://res.cloudinary.com/dnyvkptxb/image/upload/v1786103818/44_16_-_Photo_ux27qr.jpg",
  "https://res.cloudinary.com/dnyvkptxb/image/upload/v1786103821/44_20_-_Photo_cjs2ni.jpg",
  "https://res.cloudinary.com/dnyvkptxb/image/upload/v1786103841/42_1_-_Photo_g4bqua.jpg",
  "https://res.cloudinary.com/dnyvkptxb/image/upload/v1786103841/42_5_-_Photo_tnglvc.jpg",
  "https://res.cloudinary.com/dnyvkptxb/image/upload/v1786103844/42_7_-_Photo_bssezk.jpg",
  "https://res.cloudinary.com/dnyvkptxb/image/upload/v1786103811/COVER_PHOTO_ntbnjf.jpg",
  "https://res.cloudinary.com/dnyvkptxb/image/upload/v1786103847/43_26_-_Photo_bnudec.jpg",
  "https://res.cloudinary.com/dnyvkptxb/image/upload/v1786103847/42_6_-_Photo_a6s2vs.jpg",
  "https://res.cloudinary.com/dnyvkptxb/image/upload/v1786103848/42_10_-_Photo_d4rbg4.jpg",
  "https://res.cloudinary.com/dnyvkptxb/image/upload/v1786103853/43_22_-_Photo_mr6xkk.jpg",
];

interface LBImage {
  src: string;
  alt: string;
  category?: string;
}

export default function Mandala() {
  const navigate = useNavigate();
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImages, setLightboxImages] = useState<LBImage[]>([]);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const openLightbox = (images: LBImage[], index: number) => {
    setLightboxImages(images);
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const galleryLightboxImages: LBImage[] = GALLERY_IMAGES.map((src, i) => ({
    src,
    alt: `Gallery Image ${i + 1} — Mandala`,
    category: "Gallery",
  }));

  return (
    <div className="relative bg-background-50">
      <PageMeta
        title="Mandala | Unbuilt Project | Sanctuary Architects & Designers"
        description="Explore Mandala, an unbuilt eco-luxury wellness sanctuary by Sanctuary Architects & Designers rooted in organic forms, parametric bamboo structures, and earth architecture."
        keywords="Mandala wellness sanctuary, unbuilt eco-luxury project, parametric bamboo architecture, earth architecture, Sanctuary Architects"
        canonicalPath="/projects/unbuilt/mandala"
      />
      <Navbar />

      <main>
        {/* Section 1 — Hero */}
        <section className="relative w-full min-h-[70vh] md:min-h-[85vh] flex items-end pb-14 md:pb-20 overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={COVER_IMAGE}
              alt="Mandala"
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
              <span className="text-background-50">Mandala</span>
            </nav>

            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="text-[10px] font-body tracking-[0.15em] uppercase px-3 py-1 rounded-full bg-background-50/15 text-background-200/80 border border-background-50/15">Wellness</span>
              <span className="text-[10px] font-body tracking-[0.15em] uppercase px-3 py-1 rounded-full bg-accent-500/30 text-accent-200 border border-accent-400/20">Unbuilt</span>
            </div>

            <h1 className="font-heading text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-light text-background-50 leading-[1.08] mb-4">
              Mandala
            </h1>
            <p className="text-sm md:text-base font-body text-background-200/75 max-w-xl leading-relaxed">
              An eco-luxury wellness sanctuary rooted in organic forms, parametric bamboo structures, and earth architecture.
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
                  This master plan centers on an eco-luxury wellness sanctuary rooted in organic forms, parametric bamboo structures, and earth architecture.
                </p>
                <p className="text-sm md:text-base font-body text-secondary-600 leading-[1.8]">
                  Set against sprawling agrarian landscapes, the project balances grand sacred geometry with grounded, natural materiality.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3 — Gallery */}
        <section className="py-20 md:py-28 bg-background-100">
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
                      alt={`Gallery ${index + 1} — Mandala`}
                      className="w-full h-auto object-contain transition-transform duration-800 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Section 4 — CTA */}
        <section className="py-24 md:py-32 bg-background-50">
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