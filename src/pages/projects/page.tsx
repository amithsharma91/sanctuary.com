import { Link } from "react-router-dom";
import Navbar from "@/components/feature/Navbar";
import Footer from "@/components/feature/Footer";
import PageHero from "@/components/feature/PageHero";
import PageCTA from "@/components/feature/PageCTA";
import PageMeta from "@/components/feature/PageMeta";
import { buildBreadcrumbSchema } from "@/utils/seo";

export default function Projects() {
  const categories = [
    {
      title: "Completed Projects",
      description: "A curated portfolio of finished architectural works — luxury villas, resorts, commercial spaces, and residences that define our practice.",
      image: "https://readdy.ai/api/search-image?query=Luxury%20modern%20villa%20completed%20project%2C%20warm%20stone%20facade%20and%20large%20glass%20windows%2C%20lush%20landscaped%20gardens%2C%20golden%20hour%20sunlight%2C%20sophisticated%20contemporary%20architecture%2C%20serene%20atmosphere%2C%20editorial%20architectural%20photography%2C%20warm%20earth%20tones%2C%20refined%20composition&width=900&height=600&seq=projects-completed-banner&orientation=landscape",
      href: "/projects/completed",
      label: "View Completed Projects",
    },
    {
      title: "Ongoing Projects",
      description: "A glimpse into our current works in progress — projects taking shape across India, from foundation to finishing touches.",
      image: "https://readdy.ai/api/search-image?query=Luxury%20villa%20under%20construction%2C%20modern%20architectural%20form%20emerging%2C%20scaffolding%20framing%20elegant%20structure%2C%20construction%20site%20with%20warm%20afternoon%20light%2C%20dramatic%20structural%20forms%20visible%2C%20sophisticated%20architectural%20development%2C%20editorial%20photography%2C%20warm%20earth%20tones%2C%20promising%20atmosphere&width=900&height=600&seq=projects-ongoing-banner&orientation=landscape",
      href: "/projects/ongoing",
      label: "View Ongoing Projects",
    },
    {
      title: "Unbuilt Projects",
      description: "Sanctuary's own internal developments — our design studio, material gallery, and fabrication workshop that embody our philosophy.",
      image: "https://readdy.ai/api/search-image?query=Luxury%20modern%20design%20studio%20interior%2C%20warm%20wood%20and%20stone%20materials%2C%20large%20central%20worktable%2C%20natural%20light%20from%20skylight%2C%20material%20library%20walls%2C%20minimalist%20elegant%20workspace%2C%20creative%20collaborative%20atmosphere%2C%20editorial%20interior%20photography%2C%20warm%20earth%20tones&width=900&height=600&seq=projects-unbuilt-banner&orientation=landscape",
      href: "/projects/unbuilt",
      label: "View Unbuilt Projects",
    },
  ];

  return (
    <div className="relative bg-background-50">
      <PageMeta
        title="Architecture & Design Projects | Sanctuary"
        description="Explore Sanctuary Architects & Designers' completed, ongoing and unbuilt portfolio across residential, hospitality, commercial and prefab architecture."
        keywords="architecture projects, luxury villa projects, residential architecture, hospitality design, commercial projects, Sanctuary Architects portfolio"
        ogImage="https://readdy.ai/api/search-image?query=Luxury%20architecture%20portfolio%2C%20collection%20of%20modern%20villa%20resort%20and%20commercial%20building%20designs%2C%20warm%20stone%20glass%20and%20wood%20materials%2C%20sophisticated%20contemporary%20architecture%2C%20golden%20hour%20lighting%2C%20editorial%20architectural%20photography%2C%20warm%20earth%20tones%2C%20refined%20atmosphere&width=1920&height=1080&seq=projects-hub-hero&orientation=landscape"
        canonicalPath="/projects"
        schema={[
          {
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: "Projects — Sanctuary Architects & Designers",
            description: "Residential, hospitality, commercial, and mixed-use architectural projects by Sanctuary Architects & Designers, Bangalore.",
          },
          buildBreadcrumbSchema([{ name: "Home", path: "/" }, { name: "Projects" }]),
        ]}
      />
      <Navbar />
      <main>
        <PageHero
          title="Projects"
          subtitle="Explore our architectural work across residential, hospitality, commercial, and mixed-use developments."
          image="https://readdy.ai/api/search-image?query=Luxury%20architecture%20portfolio%2C%20collection%20of%20modern%20villa%20resort%20and%20commercial%20building%20designs%2C%20warm%20stone%20glass%20and%20wood%20materials%2C%20sophisticated%20contemporary%20architecture%2C%20golden%20hour%20lighting%2C%20editorial%20architectural%20photography%2C%20warm%20earth%20tones%2C%20refined%20atmosphere&width=1920&height=1080&seq=projects-hub-hero&orientation=landscape"
          breadcrumb={[{ label: "Projects" }]}
        />

        {/* Category Sections */}
        <section className="py-16 md:py-24 bg-background-50">
          <div className="w-full px-6 md:px-10 lg:px-14">
            <div className="space-y-20 md:space-y-28">
              {categories.map((cat, index) => (
                <div
                  key={cat.title}
                  className={`flex flex-col ${index % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"} items-center gap-10 lg:gap-16`}
                >
                  <div className="w-full lg:w-1/2 image-reveal rounded-lg overflow-hidden border border-secondary-200/30">
                    <img
                      src={cat.image}
                      alt={cat.title}
                      className="w-full aspect-[3/2] object-cover transition-transform duration-800 hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <div className="w-full lg:w-1/2">
                    <span className="text-[10px] font-body tracking-[0.15em] uppercase text-primary-500">Category</span>
                    <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-light text-foreground-950 mt-2 mb-4 leading-[1.1]">
                      {cat.title}
                    </h2>
                    <p className="text-sm md:text-base font-body text-secondary-600 leading-relaxed mb-8 max-w-lg">
                      {cat.description}
                    </p>
                    <Link
                      to={cat.href}
                      className="btn-luxury group inline-flex items-center gap-2 px-7 py-3 bg-foreground-950 text-background-50 text-sm font-label font-semibold tracking-wide rounded-md hover:bg-foreground-800 transition-all duration-500 hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] active:scale-[0.97] whitespace-nowrap"
                    >
                      {cat.label}
                      <i className="ri-arrow-right-line group-hover:translate-x-1 transition-transform duration-300" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <PageCTA />
      </main>
      <Footer />
    </div>
  );
}