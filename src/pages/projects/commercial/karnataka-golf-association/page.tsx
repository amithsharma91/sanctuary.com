import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/feature/Navbar";
import Footer from "@/components/feature/Footer";
import PageMeta from "@/components/feature/PageMeta";
import Lightbox from "@/components/feature/Lightbox";

const COVER_IMAGE = "https://res.cloudinary.com/dnyvkptxb/image/upload/v1786095445/WhatsApp_Image_2025-11-27_at_11.40.36_AM_gwou0h.jpg";

const GALLERY_IMAGES = [
  "https://res.cloudinary.com/dnyvkptxb/image/upload/v1786095427/WhatsApp_Image_2025-11-27_at_11.40.35_AM_1_ezdy25.jpg",
  "https://res.cloudinary.com/dnyvkptxb/image/upload/v1786095420/WhatsApp_Image_2025-10-31_at_11.40.13_AM_wjcfjf.jpg",
  "https://res.cloudinary.com/dnyvkptxb/image/upload/v1786095444/WhatsApp_Image_2025-11-18_at_6.33.34_PM_1_kdygqh.jpg",
  "https://res.cloudinary.com/dnyvkptxb/image/upload/v1786095445/WhatsApp_Image_2025-11-27_at_11.40.36_AM_gwou0h.jpg",
  "https://res.cloudinary.com/dnyvkptxb/image/upload/v1786095517/WhatsApp_Image_2025-10-10_at_4.49.56_PM_wtlnhp.jpg",
  "https://res.cloudinary.com/dnyvkptxb/image/upload/v1786095517/43_kjqzii.jpg",
  "https://res.cloudinary.com/dnyvkptxb/image/upload/v1786095535/41_cvqhwd.jpg",
  "https://res.cloudinary.com/dnyvkptxb/image/upload/v1786095539/40_uvtwnw.jpg",
  "https://res.cloudinary.com/dnyvkptxb/image/upload/v1786095540/45_gk3kcx.jpg",
];

interface LBImage {
  src: string;
  alt: string;
  category?: string;
}

export default function KarnatakaGolfAssociation() {
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
    alt: `Gallery Image ${i + 1} — Karnataka Golf Association`,
    category: "Gallery",
  }));

  return (
    <div className="relative bg-background-50">
      <PageMeta
        title="Karnataka Golf Association (KGA) | Ongoing Commercial Project | Sanctuary Architects & Designers"
        description="Explore the ongoing Karnataka Golf Association transformation by Sanctuary Architects & Designers, blending timeless club heritage with refined contemporary hospitality-inspired interiors."
        keywords="Karnataka Golf Association, KGA, ongoing commercial project, golf club transformation, Bengaluru, heritage interiors, Sanctuary Architects"
        canonicalPath="/projects/commercial/karnataka-golf-association"
      />
      <Navbar />

      <main>
        {/* Section 1 — Hero */}
        <section className="relative w-full min-h-[70vh] md:min-h-[85vh] flex items-end pb-14 md:pb-20 overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={COVER_IMAGE}
              alt="Karnataka Golf Association"
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
              <button onClick={() => navigate("/projects/commercial")} className="text-background-200/70 hover:text-background-50 transition-colors duration-300">Commercial</button>
              <i className="ri-arrow-right-s-line text-background-200/40 text-[10px]" />
              <span className="text-background-50">Karnataka Golf Association</span>
            </nav>

            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="text-[10px] font-body tracking-[0.15em] uppercase px-3 py-1 rounded-full bg-background-50/15 text-background-200/80 border border-background-50/15">Commercial</span>
              <span className="text-[10px] font-body tracking-[0.15em] uppercase px-3 py-1 rounded-full bg-background-50/15 text-background-200/80 border border-background-50/15">Bengaluru</span>
              <span className="text-[10px] font-body tracking-[0.15em] uppercase px-3 py-1 rounded-full bg-primary-500/30 text-primary-200 border border-primary-400/20">Ongoing</span>
            </div>

            <h1 className="font-heading text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-light text-background-50 leading-[1.08] mb-4">
              Karnataka Golf Association
              <span className="block text-lg sm:text-xl md:text-2xl lg:text-3xl font-body tracking-[0.06em] text-background-200/60 mt-1">(KGA)</span>
            </h1>
            <p className="text-sm md:text-base font-body text-background-200/75 max-w-xl leading-relaxed">
              A sophisticated transformation of the Karnataka Golf Association into a timeless members' club blending heritage, luxury and contemporary resort-inspired interiors.
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
                  Designed as a sophisticated transformation for the Karnataka Golf Association, this interior and pavilion redesign marries traditional club heritage with the breezy elegance of a modern resort retreat.
                </p>
                <p className="text-sm md:text-base font-body text-secondary-600 leading-[1.8]">
                  The project creates a seamless relationship between cozy indoor lounges and expansive outdoor spaces overlooking the golf course.
                </p>
                <p className="text-sm md:text-base font-body text-secondary-600 leading-[1.8]">
                  Rich materials, layered lighting, classic detailing and carefully curated furnishings create an atmosphere that feels both timeless and contemporary.
                </p>
                <p className="text-sm md:text-base font-body text-secondary-600 leading-[1.8]">
                  The design offers members an elevated destination to relax, socialise and unwind while respecting the heritage of one of Bengaluru's most iconic golf clubs.
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

              <div className="flex items-center justify-center">
                <div className="w-full max-w-md bg-background-50 rounded-lg border border-secondary-200/30 p-10 md:p-14 text-center">
                  <div className="w-16 h-16 mx-auto mb-5 flex items-center justify-center rounded-full bg-secondary-100">
                    <i className="ri-draft-line text-2xl text-secondary-400" />
                  </div>
                  <p className="font-heading text-lg md:text-xl font-light text-foreground-950 mb-2">
                    Design drawings will be published soon.
                  </p>
                  <p className="text-sm font-body text-secondary-400">
                    Architectural drawings are currently being finalised. Please check back for updates.
                  </p>
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
                      alt={`Gallery ${index + 1} — Karnataka Golf Association`}
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
              Let's Create Your Dream Commercial Space
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