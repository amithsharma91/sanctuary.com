import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/feature/Navbar";
import Footer from "@/components/feature/Footer";
import PageMeta from "@/components/feature/PageMeta";
import { buildBreadcrumbSchema } from "@/utils/seo";
import Lightbox from "@/components/feature/Lightbox";

const COVER_IMAGE = "https://res.cloudinary.com/dnyvkptxb/image/upload/v1786096621/cover_photo_gishem.jpg";

const MASTER_PLAN = "https://res.cloudinary.com/dnyvkptxb/image/upload/v1786096742/MASTER_PLAN_RENDER-_06.03.2025_l0llll.jpg";
const JUNGLE_CAT_VILLA = "https://res.cloudinary.com/dnyvkptxb/image/upload/v1786096669/JUNGLE_CAT__01_a8yaig.jpg";
const TIGER_PAW_VILLA = "https://res.cloudinary.com/dnyvkptxb/image/upload/v1786096639/TYPE_2_TIGER_PAW__01_q3bep4.jpg";
const KERALA_COTTAGE = "https://res.cloudinary.com/dnyvkptxb/image/upload/v1786096625/TYPE_4_KERALA_COTTAGE_01_uvi5ll.jpg";

const GALLERY_IMAGES = [
  "https://res.cloudinary.com/dnyvkptxb/image/upload/v1786096739/06_gwc97s.jpg",
  "https://res.cloudinary.com/dnyvkptxb/image/upload/v1786096738/01_7_xk57dy.jpg",
  "https://res.cloudinary.com/dnyvkptxb/image/upload/v1786096717/02_1_nazjpf.jpg",
  "https://res.cloudinary.com/dnyvkptxb/image/upload/v1786096704/04_gxakr5.jpg",
  "https://res.cloudinary.com/dnyvkptxb/image/upload/v1786096684/03_3_foridv.jpg",
  "https://res.cloudinary.com/dnyvkptxb/image/upload/v1786096680/08_tsj8a1.jpg",
  "https://res.cloudinary.com/dnyvkptxb/image/upload/v1786096657/07_rb70o1.jpg",
  "https://res.cloudinary.com/dnyvkptxb/image/upload/v1786096625/01_5_gxyvqz.jpg",
  "https://res.cloudinary.com/dnyvkptxb/image/upload/v1786096621/cover_photo_gishem.jpg",
  "https://res.cloudinary.com/dnyvkptxb/image/upload/v1786096621/WhatsApp_Image_2025-12-03_at_6.37.17_PM_1_c4yne8.jpg",
  "https://res.cloudinary.com/dnyvkptxb/image/upload/v1786096617/WhatsApp_Image_2025-03-25_at_10.56.04_AM_lopdey.jpg",
  "https://res.cloudinary.com/dnyvkptxb/image/upload/v1786096622/WhatsApp_Image_2025-03-25_at_10.56.05_AM_zs5evv.jpg",
  "https://res.cloudinary.com/dnyvkptxb/image/upload/v1786096614/01_3_v0eued.jpg",
  "https://res.cloudinary.com/dnyvkptxb/image/upload/v1786096614/14_1_xmeulo.jpg",
  "https://res.cloudinary.com/dnyvkptxb/image/upload/v1786096612/04_3_djqrwc.jpg",
  "https://res.cloudinary.com/dnyvkptxb/image/upload/v1786096610/12_jh1zwy.jpg",
  "https://res.cloudinary.com/dnyvkptxb/image/upload/v1786096606/03_4_n5mtnd.jpg",
  "https://res.cloudinary.com/dnyvkptxb/image/upload/v1786096603/WhatsApp_Image_2025-12-03_at_6.37.17_PM_xnerwv.jpg",
  "https://res.cloudinary.com/dnyvkptxb/image/upload/v1786096602/01_pyeyqf.jpg",
  "https://res.cloudinary.com/dnyvkptxb/image/upload/v1786096597/13_g7etny.jpg",
  "https://res.cloudinary.com/dnyvkptxb/image/upload/v1786096593/02_2_sco7wq.jpg",
  "https://res.cloudinary.com/dnyvkptxb/image/upload/v1786096592/04_2_zfgdua.jpg",
  "https://res.cloudinary.com/dnyvkptxb/image/upload/v1786096584/02_4_ibd2re.jpg",
  "https://res.cloudinary.com/dnyvkptxb/image/upload/v1786096580/WhatsApp_Image_2025-03-25_at_10.56.05_AM_1_fvlxg6.jpg",
  "https://res.cloudinary.com/dnyvkptxb/image/upload/v1786096580/07_1_bofbll.jpg",
  "https://res.cloudinary.com/dnyvkptxb/image/upload/v1786096578/06_1_uohapk.jpg",
  "https://res.cloudinary.com/dnyvkptxb/image/upload/v1786096577/02_7_xsfqxi.jpg",
  "https://res.cloudinary.com/dnyvkptxb/image/upload/v1786096572/02_lwowtj.jpg",
  "https://res.cloudinary.com/dnyvkptxb/image/upload/v1786096562/02_5_zuusfw.jpg",
  "https://res.cloudinary.com/dnyvkptxb/image/upload/v1786096562/01_6_hvwrbe.jpg",
  "https://res.cloudinary.com/dnyvkptxb/image/upload/v1786096558/11_yjuzca.jpg",
];

interface LBImage {
  src: string;
  alt: string;
  category?: string;
}

export default function NagarholeResort() {
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
    { src: MASTER_PLAN, alt: "Master Plan — Nagarhole Wilderness Retreat", category: "Blueprint" },
    { src: JUNGLE_CAT_VILLA, alt: "Jungle Cat Villa — Nagarhole Wilderness Retreat", category: "Blueprint" },
    { src: TIGER_PAW_VILLA, alt: "Tiger Paw Villa — Nagarhole Wilderness Retreat", category: "Blueprint" },
    { src: KERALA_COTTAGE, alt: "Kerala Cottage — Nagarhole Wilderness Retreat", category: "Blueprint" },
  ];

  const galleryLightboxImages: LBImage[] = GALLERY_IMAGES.map((src, i) => ({
    src,
    alt: `Gallery Image ${i + 1} — Nagarhole Wilderness Retreat`,
    category: "Gallery",
  }));

  return (
    <div className="relative bg-background-50">
      <PageMeta
        title="Nagarhole Wilderness Retreat | Ongoing Project | Sanctuary Architects & Designers"
        description="Explore Nagarhole Wilderness Retreat, an ongoing eco-luxury hospitality project by Sanctuary Architects & Designers, thoughtfully integrated into the forests of Nagarhole National Park."
        keywords="Nagarhole Wilderness Retreat, ongoing hospitality project, eco-luxury resort, Nagarhole National Park, sustainable architecture, Sanctuary Architects"
        ogImage={COVER_IMAGE}
        canonicalPath="/projects/ongoing/nagarhole-wilderness-retreat"
        schema={[
          buildBreadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Projects", path: "/projects" },
            { name: "Ongoing Projects", path: "/projects/ongoing" },
            { name: "Nagarhole Wilderness Retreat" },
          ]),
          {
            "@context": "https://schema.org",
            "@type": "CreativeWork",
            name: "Nagarhole Wilderness Retreat",
            description:
              "A luxury eco-resort masterplanned along the edge of Nagarhole National Park, blending sustainable architecture with immersive wilderness experiences.",
            url: "https://www.sanctuaryarch.com/projects/ongoing/nagarhole-wilderness-retreat",
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
              alt="Nagarhole Wilderness Retreat"
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
              <span className="text-background-50">Nagarhole Wilderness Retreat</span>
            </nav>

            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="text-[10px] font-body tracking-[0.15em] uppercase px-3 py-1 rounded-full bg-background-50/15 text-background-200/80 border border-background-50/15">Ongoing Projects</span>
              <span className="text-[10px] font-body tracking-[0.15em] uppercase px-3 py-1 rounded-full bg-background-50/15 text-background-200/80 border border-background-50/15">Nagarhole, Mysuru</span>
              <span className="text-[10px] font-body tracking-[0.15em] uppercase px-3 py-1 rounded-full bg-primary-500/30 text-primary-200 border border-primary-400/20">Ongoing</span>
            </div>

            <h1 className="font-heading text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-light text-background-50 leading-[1.08] mb-4">
              Nagarhole Wilderness Retreat
            </h1>
            <p className="text-sm md:text-base font-body text-background-200/75 max-w-xl leading-relaxed">
              A luxury eco-resort masterplanned along the edge of Nagarhole National Park, blending sustainable architecture with immersive wilderness experiences.
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
                  Nestled along the pristine edge of Nagarhole National Park, this luxury eco-resort is designed as a low-impact, nature-integrated sanctuary.
                </p>
                <p className="text-sm md:text-base font-body text-secondary-600 leading-[1.8]">
                  The master plan places public arrival hubs, dining spaces and parking near the eastern entrance road while dispersing secluded private guest villas along organic pedestrian-only forest paths leading toward a western natural lake and sunset viewing deck.
                </p>
                <p className="text-sm md:text-base font-body text-secondary-600 leading-[1.8]">
                  The design leverages dramatic gabled rooflines, expansive open-air pavilions and floor-to-ceiling glass envelopes to dissolve the boundaries between built architecture and the surrounding wilderness.
                </p>
                <p className="text-sm md:text-base font-body text-secondary-600 leading-[1.8]">
                  From the arrival sanctuary and wellness facility to private forest villas, every experience has been carefully curated to provide serenity, immersion and connection with nature.
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
                      <span className="font-heading text-sm md:text-base font-light text-foreground-950">{bp.alt.replace(" — Nagarhole Wilderness Retreat", "")}</span>
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
                      alt={`Gallery ${index + 1} — Nagarhole Wilderness Retreat`}
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
              Let's Create Your Dream Ongoing Projects Space
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