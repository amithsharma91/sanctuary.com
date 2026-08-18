import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/feature/Navbar";
import Footer from "@/components/feature/Footer";
import PageMeta from "@/components/feature/PageMeta";
import { buildBreadcrumbSchema } from "@/utils/seo";
import Lightbox from "@/components/feature/Lightbox";

const COVER_IMAGE = "https://res.cloudinary.com/dnyvkptxb/image/upload/v1786041461/COVER_PHOTO_ru5iv1.jpg";

const GALLERY_IMAGES = [
  "https://res.cloudinary.com/dnyvkptxb/image/upload/v1786041451/V8_TapasMe_Ambience_audptf.jpg",
  "https://res.cloudinary.com/dnyvkptxb/image/upload/v1786041452/5_TapasMe_Ambience_ilplvh.jpg",
  "https://res.cloudinary.com/dnyvkptxb/image/upload/v1786041456/V20_TapasMe_Ambience_y1oru0.jpg",
  "https://res.cloudinary.com/dnyvkptxb/image/upload/v1786041459/3_TapasMe_Ambience_g7nsn7.jpg",
  "https://res.cloudinary.com/dnyvkptxb/image/upload/v1786041462/12_TapasMe_Ambience_myxfia.jpg",
  "https://res.cloudinary.com/dnyvkptxb/image/upload/v1786041468/V6_TapasMe_Ambience_ussucl.jpg",
  "https://res.cloudinary.com/dnyvkptxb/image/upload/v1786041469/26_TapasMe_Ambience_pi1y2q.jpg",
  "https://res.cloudinary.com/dnyvkptxb/image/upload/v1786041469/10_TapasMe_Ambience_v8ogo3.jpg",
  "https://res.cloudinary.com/dnyvkptxb/image/upload/v1786041471/V19_TapasMe_Ambience_swzzud.jpg",
  "https://res.cloudinary.com/dnyvkptxb/image/upload/v1786041472/8_TapasMe_Ambience_xezget.jpg",
  "https://res.cloudinary.com/dnyvkptxb/image/upload/v1786041474/V7_TapasMe_Ambience_byfnt7.jpg",
  "https://res.cloudinary.com/dnyvkptxb/image/upload/v1786041476/2_TapasMe_Ambience_jjsyzy.jpg",
  "https://res.cloudinary.com/dnyvkptxb/image/upload/v1786041478/7_TapasMe_Ambience_gczlzb.jpg",
  "https://res.cloudinary.com/dnyvkptxb/image/upload/v1786041483/V10_TapasMe_Ambience_hs6ga2.jpg",
  "https://res.cloudinary.com/dnyvkptxb/image/upload/v1786041489/6_TapasMe_Ambience_q0cdnx.jpg",
  "https://res.cloudinary.com/dnyvkptxb/image/upload/v1786041490/4_TapasMe_Ambience_owsjgf.jpg",
  "https://res.cloudinary.com/dnyvkptxb/image/upload/v1786041490/V4_TapasMe_Ambience_zuijpo.jpg",
  "https://res.cloudinary.com/dnyvkptxb/image/upload/v1786041491/V3_TapasMe_Ambience_oqawaf.jpg",
  "https://res.cloudinary.com/dnyvkptxb/image/upload/v1786041461/COVER_PHOTO_ru5iv1.jpg",
];

interface LBImage {
  src: string;
  alt: string;
  category?: string;
}

export default function TapasMe() {
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
    alt: `Gallery Image ${i + 1} — Tapas Me`,
    category: "Gallery",
  }));

  return (
    <div className="relative bg-background-50">
      <PageMeta
        title="Tapas Me — Hospitality | Sanctuary Architects & Designers"
        description="Tapas Me captures the lively spirit of contemporary tapas culture through layered textures, bold colours and intimate dining environments. Designed by Sanctuary Architects & Designers."
        keywords="Tapas Me, hospitality architecture, tapas bar design, contemporary restaurant, bold interior design, Sanctuary hospitality projects"
        canonicalPath="/projects/hospitality/tapas-me"
        schema={[
          buildBreadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Projects", path: "/projects" },
            { name: "Hospitality", path: "/projects/hospitality" },
            { name: "Tapas Me" },
          ]),
          {
            "@context": "https://schema.org",
            "@type": "CreativeWork",
            name: "Tapas Me",
            description:
              "Capturing the lively spirit of contemporary tapas culture through layered textures, bold colours and intimate dining environments — a memorable culinary destination.",
            url: "https://www.sanctuaryarch.com/projects/hospitality/tapas-me",
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
              alt="Tapas Me"
              className="w-full h-full object-cover object-top"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/15 to-black/50" />

          <div className="relative z-10 w-full px-6 md:px-10 lg:px-14">
            <nav className="flex items-center gap-2 mb-6 text-xs font-body tracking-[0.04em]">
              <Link to="/" className="text-background-200/70 hover:text-background-50 transition-colors duration-300">Home</Link>
              <i className="ri-arrow-right-s-line text-background-200/40 text-[10px]" />
              <Link to="/projects/completed" className="text-background-200/70 hover:text-background-50 transition-colors duration-300">Projects</Link>
              <i className="ri-arrow-right-s-line text-background-200/40 text-[10px]" />
              <Link to="/projects/hospitality" className="text-background-200/70 hover:text-background-50 transition-colors duration-300">Hospitality</Link>
              <i className="ri-arrow-right-s-line text-background-200/40 text-[10px]" />
              <span className="text-background-50">Tapas Me</span>
            </nav>

            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="text-[10px] font-body tracking-[0.15em] uppercase px-3 py-1 rounded-full bg-background-50/15 text-background-200/80 border border-background-50/15">Hospitality</span>
              <span className="text-[10px] font-body tracking-[0.15em] uppercase px-3 py-1 rounded-full bg-background-50/15 text-background-200/80 border border-background-50/15">Hyderabad</span>
            </div>

            <h1 className="font-heading text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-light text-background-50 leading-[1.08] mb-4">
              Tapas Me
            </h1>
            <p className="text-sm md:text-base font-body text-background-200/75 max-w-xl leading-relaxed">
              Capturing the lively spirit of contemporary tapas culture through layered textures, bold colours and intimate dining environments — a memorable culinary destination.
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
                  Tapas Me captures the lively spirit of contemporary tapas culture through layered textures, bold colours and intimate dining environments. Traditional influences merge seamlessly with modern design to create an immersive and memorable culinary destination.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3 — Gallery */}
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
                      alt={`Gallery ${index + 1} — Tapas Me`}
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
        <section className="py-24 md:py-32 bg-background-100">
          <div className="w-full px-6 md:px-10 lg:px-14 text-center">
            <p className="font-heading text-2xl md:text-3xl lg:text-4xl font-light text-foreground-950 mb-3 leading-[1.2]">
              Let's Create Your Dream Hospitality Space
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