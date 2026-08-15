import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/feature/Navbar";
import Footer from "@/components/feature/Footer";
import PageMeta from "@/components/feature/PageMeta";
import { buildBreadcrumbSchema } from "@/utils/seo";
import Lightbox from "@/components/feature/Lightbox";

const COVER_IMAGE = "https://res.cloudinary.com/dnyvkptxb/image/upload/v1786092142/COVER_PHOTO_qn4fre.jpg";

const GROUND_FLOOR = "https://res.cloudinary.com/dnyvkptxb/image/upload/v1786092135/G_Floor_mgdp8r.png";
const FIRST_FLOOR = "https://res.cloudinary.com/dnyvkptxb/image/upload/v1786092126/First_Floor_l9y5d1.png";
const SECOND_FLOOR = "https://res.cloudinary.com/dnyvkptxb/image/upload/v1786092132/second_floor_aqiawx.png";
const THIRD_FLOOR = "https://res.cloudinary.com/dnyvkptxb/image/upload/v1786092143/Third_Floor_ljpvc0.png";

const GALLERY_IMAGES = [
  "https://res.cloudinary.com/dnyvkptxb/image/upload/v1786092115/WhatsApp_Image_2026-07-23_at_5.40.40_PM_1_aujkwp.jpg",
  "https://res.cloudinary.com/dnyvkptxb/image/upload/v1786092116/WhatsApp_Image_2026-07-30_at_5.21.10_PM_2_uy1vb2.jpg",
  "https://res.cloudinary.com/dnyvkptxb/image/upload/v1786092119/WhatsApp_Image_2026-07-24_at_12.09.03_PM_ymc1wo.jpg",
  "https://res.cloudinary.com/dnyvkptxb/image/upload/v1786092127/33_fmu6nt.png",
  "https://res.cloudinary.com/dnyvkptxb/image/upload/v1786092129/WhatsApp_Image_2026-07-03_at_4.43.20_PM_ss43yb.jpg",
  "https://res.cloudinary.com/dnyvkptxb/image/upload/v1786092135/WhatsApp_Image_2026-07-03_at_4.43.21_PM_n6g6ao.jpg",
  "https://res.cloudinary.com/dnyvkptxb/image/upload/v1786092137/WhatsApp_Image_2026-07-09_at_4.13.53_PM_2_xjc8tb.jpg",
  "https://res.cloudinary.com/dnyvkptxb/image/upload/v1786092142/04-EXT_a9gsnc.jpg",
  "https://res.cloudinary.com/dnyvkptxb/image/upload/v1786092142/COVER_PHOTO_qn4fre.jpg",
];

interface LBImage {
  src: string;
  alt: string;
  category?: string;
}

export default function AnantapurResidence() {
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
    { src: GROUND_FLOOR, alt: "Ground Floor Plan — Anantapur Residence", category: "Blueprint" },
    { src: FIRST_FLOOR, alt: "First Floor Plan — Anantapur Residence", category: "Blueprint" },
    { src: SECOND_FLOOR, alt: "Second Floor Plan — Anantapur Residence", category: "Blueprint" },
    { src: THIRD_FLOOR, alt: "Third Floor Plan — Anantapur Residence", category: "Blueprint" },
  ];

  const galleryLightboxImages: LBImage[] = GALLERY_IMAGES.map((src, i) => ({
    src,
    alt: `Gallery Image ${i + 1} — Anantapur Residence`,
    category: "Gallery",
  }));

  return (
    <div className="relative bg-background-50">
      <PageMeta
        title="Anantapur Residence — Ongoing | Sanctuary Architects & Designers"
        description="Anantapur Residence in Bengaluru is a multi-story, modern luxury home balancing impressive architectural presence with warm, understated interiors. Designed by Sanctuary Architects & Designers."
        keywords="Anantapur Residence, Bengaluru luxury home, residential architecture, modern luxury, multi-story residence, Sanctuary Architects"
        canonicalPath="/projects/ongoing/anantapur-residence"
        schema={[
          buildBreadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Projects", path: "/projects" },
            { name: "Ongoing Projects", path: "/projects/ongoing" },
            { name: "Anantapur Residence" },
          ]),
          {
            "@context": "https://schema.org",
            "@type": "CreativeWork",
            name: "Anantapur Residence",
            description:
              "A multi-story, modern luxury home balancing impressive architectural presence with warm, understated interiors — designed for both grand gatherings and intimate everyday living.",
            url: "https://www.sanctuaryarch.com/projects/ongoing/anantapur-residence",
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
              alt="Anantapur Residence — Bengaluru"
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
              <button onClick={() => navigate("/projects/ongoing")} className="text-background-200/70 hover:text-background-50 transition-colors duration-300">Ongoing Projects</button>
              <i className="ri-arrow-right-s-line text-background-200/40 text-[10px]" />
              <span className="text-background-50">Anantapur Residence</span>
            </nav>

            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="text-[10px] font-body tracking-[0.15em] uppercase px-3 py-1 rounded-full bg-background-50/15 text-background-200/80 border border-background-50/15">Residential</span>
              <span className="text-[10px] font-body tracking-[0.15em] uppercase px-3 py-1 rounded-full bg-background-50/15 text-background-200/80 border border-background-50/15">Bengaluru</span>
              <span className="text-[10px] font-body tracking-[0.15em] uppercase px-3 py-1 rounded-full bg-accent-500/30 text-accent-200 border border-accent-400/20">Ongoing</span>
            </div>

            <h1 className="font-heading text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-light text-background-50 leading-[1.08] mb-4">
              Anantapur Residence
            </h1>
            <p className="text-sm md:text-base font-body text-background-200/75 max-w-xl leading-relaxed">
              A multi-story, modern luxury home balancing impressive architectural presence with warm, understated interiors — designed for both grand gatherings and intimate everyday living.
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
                <p className="text-[10px] font-body tracking-[0.15em] uppercase text-secondary-400 mb-1">ANANTPUR</p>
                <p className="text-xs font-body tracking-[0.1em] uppercase text-secondary-400 mb-6">LOCATION: BENGALURU</p>
                <p className="text-sm md:text-base font-body text-secondary-600 leading-[1.8]">
                  This is a multi-story, modern luxury home that seamlessly balances impressive architectural presence with warm, understated interiors.
                </p>
                <p className="text-sm md:text-base font-body text-secondary-600 leading-[1.8]">
                  Featuring clean geometrical lines, cantilevered green terraces, and timber screen accents, the residence offers an elevated living experience designed for both large family gatherings and intimate everyday relaxation.
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
                {/* Ground Floor */}
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
                      alt="Ground Floor Plan — Anantapur Residence"
                      className="w-full h-auto object-contain rounded-md"
                      loading="lazy"
                    />
                  </div>
                  <div className="px-5 pb-5 pt-1 flex items-center justify-between">
                    <span className="font-heading text-base md:text-lg font-light text-foreground-950">Ground Floor</span>
                    <span className="text-xs font-body text-secondary-400">Click to expand</span>
                  </div>
                </div>

                {/* First Floor */}
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
                      alt="First Floor Plan — Anantapur Residence"
                      className="w-full h-auto object-contain rounded-md"
                      loading="lazy"
                    />
                  </div>
                  <div className="px-5 pb-5 pt-1 flex items-center justify-between">
                    <span className="font-heading text-base md:text-lg font-light text-foreground-950">First Floor</span>
                    <span className="text-xs font-body text-secondary-400">Click to expand</span>
                  </div>
                </div>

                {/* Second Floor */}
                <div
                  className="group bg-background-50 rounded-lg border border-secondary-200/30 overflow-hidden cursor-pointer hover:border-primary-200/40 transition-all duration-400 hover:-translate-y-1"
                  onClick={() => openLightbox(blueprintImages, 2)}
                  onKeyDown={(e) => { if (e.key === "Enter") openLightbox(blueprintImages, 2); }}
                  tabIndex={0}
                  role="button"
                  aria-label="View Second Floor Plan"
                >
                  <div className="p-4 md:p-5">
                    <img
                      src={SECOND_FLOOR}
                      alt="Second Floor Plan — Anantapur Residence"
                      className="w-full h-auto object-contain rounded-md"
                      loading="lazy"
                    />
                  </div>
                  <div className="px-5 pb-5 pt-1 flex items-center justify-between">
                    <span className="font-heading text-base md:text-lg font-light text-foreground-950">Second Floor</span>
                    <span className="text-xs font-body text-secondary-400">Click to expand</span>
                  </div>
                </div>

                {/* Third Floor */}
                <div
                  className="group bg-background-50 rounded-lg border border-secondary-200/30 overflow-hidden cursor-pointer hover:border-primary-200/40 transition-all duration-400 hover:-translate-y-1"
                  onClick={() => openLightbox(blueprintImages, 3)}
                  onKeyDown={(e) => { if (e.key === "Enter") openLightbox(blueprintImages, 3); }}
                  tabIndex={0}
                  role="button"
                  aria-label="View Third Floor Plan"
                >
                  <div className="p-4 md:p-5">
                    <img
                      src={THIRD_FLOOR}
                      alt="Third Floor Plan — Anantapur Residence"
                      className="w-full h-auto object-contain rounded-md"
                      loading="lazy"
                    />
                  </div>
                  <div className="px-5 pb-5 pt-1 flex items-center justify-between">
                    <span className="font-heading text-base md:text-lg font-light text-foreground-950">Third Floor</span>
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
                      alt={`Gallery ${index + 1} — Anantapur Residence`}
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