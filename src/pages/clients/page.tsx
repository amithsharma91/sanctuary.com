import { useState, useEffect, useRef } from "react";
import Navbar from "@/components/feature/Navbar";
import Footer from "@/components/feature/Footer";
import PageHero from "@/components/feature/PageHero";
import PageCTA from "@/components/feature/PageCTA";
import PageMeta from "@/components/feature/PageMeta";
import { clients } from "@/mocks/clients";
import { clientSuccessStories, clientCategories } from "@/mocks/clientStories";

export default function Clients() {
  return (
    <div className="relative bg-background-50">
      <PageMeta
        title="Our Clients"
        description="Sanctuary Architects collaborates with India's most respected developers, hospitality groups, and private clients. Explore our client categories and success stories."
        keywords="architecture clients India, luxury developers, hospitality groups, residential clients, commercial real estate, Sanctuary Architects partnerships"
        canonicalPath="/clients"
      />
      <Navbar />
      <main>
        <PageHero
          title="Our Clients"
          subtitle="We are privileged to collaborate with India's most respected developers, hospitality groups, and private clients — relationships built on trust, excellence, and shared vision."
          image="https://readdy.ai/api/search-image?query=Luxury%20modern%20office%20lobby%20with%20elegant%20reception%20desk%2C%20warm%20wood%20and%20stone%20details%2C%20sophisticated%20corporate%20atmosphere%2C%20natural%20light%20streaming%20through%20large%20windows%2C%20professional%20welcoming%20environment%2C%20editorial%20architectural%20photography%2C%20warm%20earth%20tones&width=1920&height=1080&seq=clients-hero&orientation=landscape"
          breadcrumb={[{ label: "Clients" }]}
        />

        {/* Logo Marquee */}
        <section className="py-16 md:py-20 bg-background-50 overflow-hidden">
          <div className="w-full px-6 md:px-10 lg:px-14 mb-10 text-center">
            <span className="text-xs font-body tracking-[0.15em] uppercase text-primary-500">Trusted By</span>
            <h2 className="font-heading text-2xl md:text-3xl font-light text-foreground-950 mt-2">India&apos;s Leading Brands.</h2>
          </div>
          <LogoMarquee />
        </section>

        {/* Client Categories */}
        <section className="py-16 md:py-24 bg-background-100">
          <div className="w-full px-6 md:px-10 lg:px-14">
            <div className="text-center mb-12">
              <h2 className="font-heading text-2xl md:text-3xl font-light text-foreground-950">Client Categories.</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <ClientCategoryBlock title="Residential" items={clientCategories.residential} />
              <ClientCategoryBlock title="Commercial" items={clientCategories.commercial} />
              <ClientCategoryBlock title="Hospitality" items={clientCategories.hospitality} />
            </div>
          </div>
        </section>

        {/* Success Stories */}
        <section className="py-20 md:py-28 bg-background-50">
          <div className="w-full px-6 md:px-10 lg:px-14">
            <div className="text-center mb-14">
              <span className="text-xs font-body tracking-[0.15em] uppercase text-primary-500">Collaborations</span>
              <h2 className="font-heading text-3xl md:text-5xl font-light text-foreground-950 mt-2">Featured Collaborations.</h2>
            </div>
            <div className="space-y-16 md:space-y-24 max-w-5xl mx-auto">
              {clientSuccessStories.map((story, idx) => (
                <SuccessStory key={story.client} story={story} index={idx} />
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

function LogoMarquee() {
  return (
    <div className="relative w-full overflow-hidden py-6">
      <div className="flex animate-marquee gap-16 items-center">
        {[...clients, ...clients].map((client, idx) => (
          <span
            key={idx}
            className="text-sm font-body text-secondary-400 hover:text-primary-500 transition-colors duration-400 whitespace-nowrap shrink-0 cursor-default"
          >
            {client.name}
          </span>
        ))}
      </div>
    </div>
  );
}

function ClientCategoryBlock({ title, items }: { title: string; items: string[] }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([e]) => { if (e.isIntersecting) setIsVisible(true); }, { threshold: 0.1 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`card-luxury bg-background-50 p-7 rounded-lg border border-secondary-200/30 transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <h3 className="font-heading text-xl font-light text-primary-500 mb-4">{title}</h3>
      <ul className="space-y-2">
        {items.map((item) => (
          <li key={item} className="text-sm font-body text-secondary-600 flex items-center gap-2">
            <i className="ri-check-line text-primary-500 text-xs" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

function SuccessStory({ story, index }: { story: any; index: number }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([e]) => { if (e.isIntersecting) setIsVisible(true); }, { threshold: 0.15 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const isReversed = index % 2 === 1;

  return (
    <div ref={ref} className={`flex flex-col ${isReversed ? "lg:flex-row-reverse" : "lg:flex-row"} items-center gap-10 lg:gap-14`}>
      <div className={`w-full lg:w-1/2 transition-all duration-1000 ${isVisible ? "opacity-100 translate-x-0" : `opacity-0 ${isReversed ? "translate-x-12" : "-translate-x-12"}`}`}>
        <div className="image-reveal rounded-lg overflow-hidden border border-secondary-200/30">
          <img src={story.image} alt={story.client} className="w-full aspect-[4/3] object-cover transition-transform duration-800 hover:scale-105" loading="lazy" />
        </div>
      </div>
      <div className={`w-full lg:w-1/2 transition-all duration-1000 delay-150 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <span className="text-[10px] font-body tracking-[0.15em] uppercase text-primary-500">{story.category} — {story.location}</span>
        <h3 className="font-heading text-2xl md:text-3xl font-light text-foreground-950 mt-1 mb-1">{story.client}</h3>
        <p className="text-sm font-body text-secondary-500 mb-2">{story.project}</p>
        <p className="text-sm font-body text-secondary-600 leading-relaxed">{story.description}</p>
      </div>
    </div>
  );
}