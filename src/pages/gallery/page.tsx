import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/feature/Navbar";
import Footer from "@/components/feature/Footer";
import PageHero from "@/components/feature/PageHero";
import PageCTA from "@/components/feature/PageCTA";
import PageMeta from "@/components/feature/PageMeta";
import { allGalleryImages } from "@/mocks/gallerySync";

const gallerySchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Gallery — Sanctuary Architects & Designers",
  description: "Explore our portfolio through carefully curated architectural photography showcasing craftsmanship, materials, and timeless design.",
  hasPart: allGalleryImages.slice(0, 20).map((img) => ({
    "@type": "ImageObject",
    name: `${img.projectName} — ${img.category}`,
    contentUrl: img.src,
    description: `Sanctuary Architects ${img.category.toLowerCase()} architectural photography — ${img.projectName}`,
  })),
};

export default function Gallery() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const navigate = useNavigate();

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const lightboxImages = allGalleryImages.map((img) => ({
    src: img.src,
    alt: `${img.projectName} — ${img.category}`,
    category: img.category,
    projectName: img.projectName,
    projectSlug: img.projectSlug,
    projectLocation: img.projectLocation,
  }));

  const currentLightboxImage = lightboxImages[lightboxIndex];

  return (
    <div className="relative bg-background-50">
      <PageMeta
        title="Gallery"
        description="Explore our portfolio through carefully curated architectural photography showcasing craftsmanship, materials, and timeless design. Sanctuary Architects & Designers, Bangalore."
        keywords="architecture gallery, luxury villa photography, interior design portfolio, architectural photography Bangalore, Sanctuary Architects gallery"
        schema={gallerySchema}
        canonicalPath="/gallery"
      />
      <Navbar />
      <main>
        <PageHero
          title="Gallery"
          subtitle="Explore our portfolio through carefully curated architectural photography showcasing craftsmanship, materials, and timeless design."
          image="https://readdy.ai/api/search-image?query=Luxury%20architectural%20photography%20gallery%20wall%2C%20curated%20collection%20of%20modern%20villa%20and%20interior%20images%2C%20warm%20ambient%20gallery%20lighting%2C%20sophisticated%20minimalist%20gallery%20space%2C%20editorial%20presentation%2C%20warm%20earth%20and%20cream%20tones%2C%20elegant%20atmosphere%2C%20architectural%20exhibition%20design&width=1920&height=1080&seq=gallery-hero&orientation=landscape"
          breadcrumb={[{ label: "Gallery" }]}
        />

        {/* Premium Image Gallery */}
        <section className="py-20 md:py-28 bg-background-50">
          <div className="w-full px-6 md:px-10 lg:px-14">
            {/* Masonry Grid */}
            <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 md:gap-5">
              {allGalleryImages.map((image, index) => (
                <div
                  key={image.id}
                  className="image-reveal break-inside-avoid mb-4 md:mb-5 rounded-lg overflow-hidden border border-secondary-200/30 group cursor-pointer"
                  style={{ transitionDelay: `${(index % 12) * 60}ms` }}
                  onClick={() => openLightbox(index)}
                  onKeyDown={(e) => { if (e.key === "Enter") openLightbox(index); }}
                  tabIndex={0}
                  role="button"
                  aria-label={`View ${image.category} image from ${image.projectName}`}
                >
                  <img
                    src={image.src}
                    alt={`${image.projectName} — ${image.category} | Sanctuary Architects`}
                    className="w-full object-cover transition-transform duration-800 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        <PageCTA />
      </main>
      <Footer />

      {/* Fullscreen Lightbox with Project Info */}
      {lightboxImages.length > 0 && (
        <div
          className={`fixed inset-0 z-[100] flex items-center justify-center bg-foreground-950/95 backdrop-blur-sm transition-opacity duration-400 ${lightboxOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
        >
          {/* Close Button */}
          <button
            onClick={() => setLightboxOpen(false)}
            className="absolute top-5 right-5 md:top-8 md:right-8 z-20 w-11 h-11 flex items-center justify-center rounded-full bg-background-50/10 border border-background-50/15 text-background-50 hover:bg-background-50/20 transition-all duration-300"
            aria-label="Close lightbox"
          >
            <i className="ri-close-line text-xl" />
          </button>

          {/* Counter */}
          <div className="absolute top-5 left-5 md:top-8 md:left-8 z-20">
            <span className="text-xs font-body tracking-[0.08em] text-background-200/70">
              {lightboxIndex + 1} / {lightboxImages.length}
            </span>
          </div>

          {/* Previous */}
          <button
            onClick={() => setLightboxIndex((p) => (p === 0 ? lightboxImages.length - 1 : p - 1))}
            className="absolute left-3 md:left-8 top-1/2 -translate-y-1/2 z-20 w-11 h-11 flex items-center justify-center rounded-full bg-background-50/10 border border-background-50/15 text-background-50 hover:bg-background-50/20 transition-all duration-300"
            aria-label="Previous image"
          >
            <i className="ri-arrow-left-s-line text-xl" />
          </button>

          {/* Next */}
          <button
            onClick={() => setLightboxIndex((p) => (p === lightboxImages.length - 1 ? 0 : p + 1))}
            className="absolute right-3 md:right-8 top-1/2 -translate-y-1/2 z-20 w-11 h-11 flex items-center justify-center rounded-full bg-background-50/10 border border-background-50/15 text-background-50 hover:bg-background-50/20 transition-all duration-300"
            aria-label="Next image"
          >
            <i className="ri-arrow-right-s-line text-xl" />
          </button>

          {/* Image */}
          <div className="w-full h-[70%] flex items-center justify-center p-8 md:p-16">
            <img
              src={currentLightboxImage?.src || ""}
              alt={currentLightboxImage?.alt || ""}
              className="max-w-full max-h-full object-contain"
            />
          </div>

          {/* Bottom Info Bar */}
          {currentLightboxImage && (
            <div className="absolute bottom-0 left-0 right-0 z-20 bg-background-50/10 backdrop-blur-md border-t border-background-50/10 px-6 md:px-14 py-4">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <div>
                  <p className="text-sm font-heading text-background-50 font-light">
                    {currentLightboxImage.projectName}
                  </p>
                  <p className="text-xs font-body text-background-200/60">
                    {currentLightboxImage.category} — {currentLightboxImage.projectLocation}
                  </p>
                </div>
                <button
                  onClick={() => {
                    setLightboxOpen(false);
                    const slug = currentLightboxImage.projectSlug;
                    const isResidential = allGalleryImages[lightboxIndex]?.projectSlug && residentialSlugs.includes(currentLightboxImage.projectSlug);
                    const isCommercial = allGalleryImages[lightboxIndex]?.projectSlug && commercialSlugs.includes(currentLightboxImage.projectSlug);
                    const isHospitality = allGalleryImages[lightboxIndex]?.projectSlug && hospitalitySlugs.includes(currentLightboxImage.projectSlug);
                    const isPrefab = allGalleryImages[lightboxIndex]?.projectSlug && prefabSlugs.includes(currentLightboxImage.projectSlug);
                    const isUnbuilt = allGalleryImages[lightboxIndex]?.projectSlug && unbuiltSlugs.includes(currentLightboxImage.projectSlug);
                    
                    if (isUnbuilt) {
                      navigate(`/projects/unbuilt/${currentLightboxImage.projectSlug}`);
                    } else if (isResidential) {
                      navigate(`/projects/residential/${currentLightboxImage.projectSlug}`);
                    } else if (isCommercial) {
                      navigate(`/projects/commercial/${currentLightboxImage.projectSlug}`);
                    } else if (isHospitality) {
                      navigate(`/projects/hospitality/${currentLightboxImage.projectSlug}`);
                    } else if (isPrefab) {
                      navigate(`/projects/prefab/${currentLightboxImage.projectSlug}`);
                    } else {
                      navigate(`/projects/${currentLightboxImage.projectSlug}`);
                    }
                  }}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-background-50/15 text-background-50 text-xs font-label font-semibold tracking-wide rounded-md hover:bg-background-50/25 transition-all duration-300 whitespace-nowrap"
                >
                  View Project <i className="ri-arrow-right-line" />
                </button>
              </div>
            </div>
          )}

          {/* Keyboard support */}
          {lightboxOpen && (
            <div
              className="absolute inset-0 z-10"
              onKeyDown={(e) => {
                if (e.key === "Escape") setLightboxOpen(false);
                if (e.key === "ArrowLeft") setLightboxIndex((p) => (p === 0 ? lightboxImages.length - 1 : p - 1));
                if (e.key === "ArrowRight") setLightboxIndex((p) => (p === lightboxImages.length - 1 ? 0 : p + 1));
              }}
              tabIndex={0}
              ref={(el) => el?.focus()}
            />
          )}
        </div>
      )}
    </div>
  );
}

// Category slug helpers
const residentialSlugs = ["villa-maaya", "villa-nirvaana", "villa-prana", "levitating-house", "kabini-house", "chodha-residence", "arora-house", "marina", "shobhit", "vista-do-mar-apartments", "eka-site-development"];
const hospitalitySlugs = ["kaze", "tansen", "nautanki-galli", "speakeasy", "sanctum", "rubaiyat", "puma-social-club", "tapas-me", "the-open-box", "taj-westend", "nagarhole-resort", "ekara-resort"];
const commercialSlugs = ["vertex-corporate-tower", "sanctuary-office", "karnataka-golf-association"];
const prefabSlugs = ["zen-den"];
const unbuiltSlugs = ["etv", "ambience", "mandala", "mit", "taj-yeshwanthpur", "bellevue", "hilton-clinx", "mercara-house"];