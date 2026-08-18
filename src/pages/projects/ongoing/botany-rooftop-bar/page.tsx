import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/feature/Navbar";
import Footer from "@/components/feature/Footer";
import PageMeta from "@/components/feature/PageMeta";
import { buildBreadcrumbSchema } from "@/utils/seo";
import Lightbox from "@/components/feature/Lightbox";

const COVER_IMAGE = "https://res.cloudinary.com/dnyvkptxb/image/upload/v1786092682/WhatsApp_Image_2026-02-23_at_5.53.23_PM_n3rw5y.jpg";

const GALLERY_IMAGES = [
  "https://res.cloudinary.com/dnyvkptxb/image/upload/v1786092677/WhatsApp_Image_2026-02-11_at_1.04.11_PM_1_lhkyil.jpg",
  "https://res.cloudinary.com/dnyvkptxb/image/upload/v1786092678/WhatsApp_Image_2026-02-11_at_11.06.00_AM_pymwon.jpg",
  "https://res.cloudinary.com/dnyvkptxb/image/upload/v1786092681/WhatsApp_Image_2026-02-11_at_1.04.11_PM_ywfe9e.jpg",
  "https://res.cloudinary.com/dnyvkptxb/image/upload/v1786092682/WhatsApp_Image_2026-02-23_at_5.53.23_PM_1_i36rcl.jpg",
  "https://res.cloudinary.com/dnyvkptxb/image/upload/v1786092682/WhatsApp_Image_2026-02-23_at_5.53.23_PM_n3rw5y.jpg",
  "https://res.cloudinary.com/dnyvkptxb/image/upload/v1786092683/WhatsApp_Image_2026-02-11_at_1.04.12_PM_kflidl.jpg",
  "https://res.cloudinary.com/dnyvkptxb/image/upload/v1786092684/WhatsApp_Image_2026-06-08_at_10.25.34_AM_pvavna.jpg",
  "https://res.cloudinary.com/dnyvkptxb/image/upload/v1786092685/WhatsApp_Image_2026-06-08_at_10.25.35_AM_hlukhl.jpg",
  "https://res.cloudinary.com/dnyvkptxb/image/upload/v1786092687/WhatsApp_Image_2026-06-08_at_10.25.36_AM_yfaoxd.jpg",
  "https://res.cloudinary.com/dnyvkptxb/image/upload/v1786092687/WhatsApp_Image_2026-06-08_at_10.25.37_AM_y91znw.jpg",
  "https://res.cloudinary.com/dnyvkptxb/image/upload/v1786092687/WhatsApp_Image_2026-02-20_at_11.19.05_AM_jakzct.jpg",
  "https://res.cloudinary.com/dnyvkptxb/image/upload/v1786092688/WhatsApp_Image_2026-02-11_at_11.05.59_AM_1_da6eoq.jpg",
  "https://res.cloudinary.com/dnyvkptxb/image/upload/v1786092688/WhatsApp_Image_2026-02-11_at_1.04.12_PM_1_al9fiu.jpg",
  "https://res.cloudinary.com/dnyvkptxb/image/upload/v1786092689/WhatsApp_Image_2026-02-18_at_5.46.04_PM_2_mc4b9p.jpg",
  "https://res.cloudinary.com/dnyvkptxb/image/upload/v1786092699/WhatsApp_Image_2026-02-11_at_1.04.09_PM_1_aslsud.jpg",
  "https://res.cloudinary.com/dnyvkptxb/image/upload/v1786092699/WhatsApp_Image_2026-02-11_at_1.04.12_PM_2_odxb00.jpg",
  "https://res.cloudinary.com/dnyvkptxb/image/upload/v1786092699/WhatsApp_Image_2026-07-28_at_3.36.45_PM_sjvmr3.jpg",
  "https://res.cloudinary.com/dnyvkptxb/image/upload/v1786092699/WhatsApp_Image_2026-02-11_at_1.04.09_PM_cm5c8s.jpg",
  "https://res.cloudinary.com/dnyvkptxb/image/upload/v1786092699/WhatsApp_Image_2026-07-15_at_10.47.11_AM_1_fshnmu.jpg",
  "https://res.cloudinary.com/dnyvkptxb/image/upload/v1786092699/WhatsApp_Image_2026-02-24_at_12.34.14_PM_yb7uoc.jpg",
];

interface LBImage {
  src: string;
  alt: string;
  category?: string;
}

export default function BotanyRooftopBar() {
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
    alt: `Gallery Image ${i + 1} — Botany Rooftop Bar`,
    category: "Gallery",
  }));

  return (
    <div className="relative bg-background-50">
      <PageMeta
        title="Botany Rooftop Bar — Ongoing | Sanctuary Architects & Designers"
        description="Botany Rooftop Bar in Bengaluru is a sultry, high-octane sanctuary where wild botanical maximalism meets theatrical luxury — an immersive dusk-to-dark nightlife destination designed by Sanctuary Architects & Designers."
        keywords="Botany Rooftop Bar, rooftop bar Bengaluru, hospitality architecture, botanical design, luxury nightlife, Sanctuary Architects"
        canonicalPath="/projects/ongoing/botany-rooftop-bar"
        schema={[
          buildBreadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Projects", path: "/projects" },
            { name: "Ongoing Projects", path: "/projects/ongoing" },
            { name: "Botany Rooftop Bar" },
          ]),
          {
            "@context": "https://schema.org",
            "@type": "CreativeWork",
            name: "Botany Rooftop Bar",
            description:
              "A sultry, high-octane sanctuary where wild botanical maximalism meets theatrical luxury — an immersive dusk-to-dark nightlife destination.",
            url: "https://www.sanctuaryarch.com/projects/ongoing/botany-rooftop-bar",
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
              alt="Botany Rooftop Bar — Bengaluru"
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
              <span className="text-background-50">Botany Rooftop Bar</span>
            </nav>

            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="text-[10px] font-body tracking-[0.15em] uppercase px-3 py-1 rounded-full bg-background-50/15 text-background-200/80 border border-background-50/15">Hospitality</span>
              <span className="text-[10px] font-body tracking-[0.15em] uppercase px-3 py-1 rounded-full bg-background-50/15 text-background-200/80 border border-background-50/15">Bengaluru</span>
              <span className="text-[10px] font-body tracking-[0.15em] uppercase px-3 py-1 rounded-full bg-accent-500/30 text-accent-200 border border-accent-400/20">Ongoing</span>
            </div>

            <h1 className="font-heading text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-light text-background-50 leading-[1.08] mb-4">
              Botany Rooftop Bar
            </h1>
            <p className="text-sm md:text-base font-body text-background-200/75 max-w-xl leading-relaxed">
              A sultry, high-octane sanctuary where wild botanical maximalism meets theatrical luxury — an immersive dusk-to-dark nightlife destination.
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
                <p className="text-[10px] font-body tracking-[0.15em] uppercase text-secondary-400 mb-1">BOTANY</p>
                <p className="text-xs font-body tracking-[0.1em] uppercase text-secondary-400 mb-6">LOCATION: BENGALURU</p>
                <p className="text-sm md:text-base font-body text-secondary-600 leading-[1.8]">
                  Perched high above the city skyline, Botany Rooftop Bar is a sultry, high-octane sanctuary where wild botanical maximalism meets theatrical luxury.
                </p>
                <p className="text-sm md:text-base font-body text-secondary-600 leading-[1.8]">
                  Conceived as an immersive dusk-to-dark nightlife destination, the space envelops guests in an intoxicating sensory narrative defined by deep crimson tones, exotic animal prints, and dramatic layers of light.
                </p>
                <p className="text-sm md:text-base font-body text-secondary-600 leading-[1.8]">
                  Strategic spatial transitions dissolve the line between the indoor lounge and the open-air terrace, drawing the eye toward panoramic sunset vistas through expansive glass envelopes.
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
                      alt={`Gallery ${index + 1} — Botany Rooftop Bar`}
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