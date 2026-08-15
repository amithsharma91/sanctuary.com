import { useState, useEffect, useRef } from "react";
import Navbar from "@/components/feature/Navbar";
import Footer from "@/components/feature/Footer";
import PageHero from "@/components/feature/PageHero";
import PageMeta from "@/components/feature/PageMeta";
import { buildBreadcrumbSchema } from "@/utils/seo";
import { clients } from "@/mocks/clients";

export default function Clients() {
  return (
    <div className="relative bg-background-50">
      <PageMeta
        title="Clients | Sanctuary Architects & Designers"
        description="Sanctuary Architects & Designers collaborates with leading hospitality, residential, and commercial clients across India. Explore the brands and developers we design for."
        keywords="Sanctuary Architects clients, architecture clients Bangalore, hospitality clients India, residential developers, commercial design partners"
        ogImage="https://readdy.ai/api/search-image?query=Luxury%20modern%20office%20lobby%20with%20elegant%20reception%20desk%2C%20warm%20wood%20and%20stone%20details%2C%20sophisticated%20corporate%20atmosphere%2C%20natural%20light%20streaming%20through%20large%20windows%2C%20professional%20welcoming%20environment%2C%20editorial%20architectural%20photography%2C%20warm%20earth%20tones&width=1920&height=1080&seq=clients-hero&orientation=landscape"
        canonicalPath="/clients"
        schema={[
          {
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: "Our Clients — Sanctuary Architects & Designers",
            description: "Hospitality, residential, and commercial clients that Sanctuary Architects & Designers collaborates with across India.",
          },
          buildBreadcrumbSchema([{ name: "Home", path: "/" }, { name: "Clients" }]),
        ]}
      />
      <Navbar />
      <main>
        <PageHero
          title="Our Clients"
          subtitle="The brands, developers, and hospitality groups we are privileged to design for."
          image="https://readdy.ai/api/search-image?query=Luxury%20modern%20office%20lobby%20with%20elegant%20reception%20desk%2C%20warm%20wood%20and%20stone%20details%2C%20sophisticated%20corporate%20atmosphere%2C%20natural%20light%20streaming%20through%20large%20windows%2C%20professional%20welcoming%20environment%2C%20editorial%20architectural%20photography%2C%20warm%20earth%20tones&width=1920&height=1080&seq=clients-hero&orientation=landscape"
          breadcrumb={[{ label: "Clients" }]}
        />

        {/* Client Logo Wall */}
        <section className="py-20 md:py-28 bg-background-50">
          <div className="w-full px-6 md:px-10 lg:px-14">
            <div className="text-center mb-14 md:mb-20">
              <p className="text-xs font-body tracking-[0.15em] uppercase text-primary-500 mb-3">
                Selected Clientele
              </p>
              <h2 className="font-heading text-3xl md:text-5xl font-light text-foreground-950 leading-[1.1]">
                Clients.
              </h2>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5 max-w-5xl mx-auto">
              {clients.map((client, index) => (
                <ClientLogo key={client.name} name={client.name} logo={client.logo} index={index} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

function ClientLogo({ name, logo, index }: { name: string; logo?: string; index: number }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`border border-secondary-200/30 bg-background-100/60 rounded-lg transition-all duration-700 hover:border-secondary-300/50 hover:bg-background-50 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
      style={{
        transitionDelay: isVisible ? `${100 + (index % 8) * 60}ms` : "0ms",
        aspectRatio: "3 / 2",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        padding: "1.25rem",
      }}
    >
      {logo ? (
        <img
          src={logo}
          alt={`${name} logo`}
          style={{
            maxWidth: "80%",
            maxHeight: "70%",
            width: "auto",
            height: "auto",
            objectFit: "contain",
          }}
          loading="lazy"
        />
      ) : (
        <span
          className={`font-heading font-light leading-snug text-foreground-800 text-center ${
            name.length > 32 ? "text-xs" : name.length > 22 ? "text-sm" : "text-base"
          }`}
        >
          {name}
        </span>
      )}
    </div>
  );
}