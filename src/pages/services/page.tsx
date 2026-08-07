import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/feature/Navbar";
import Footer from "@/components/feature/Footer";
import PageHero from "@/components/feature/PageHero";
import PageCTA from "@/components/feature/PageCTA";
import PageMeta from "@/components/feature/PageMeta";
import { extendedServices } from "@/mocks/servicesExtended";

export default function Services() {
  const navigate = useNavigate();

  return (
    <div className="relative bg-background-50">
      <PageMeta
        title="Services"
        description="Sanctuary Architects offers a complete spectrum of architectural and interior design services — from concept to handover. Residential, hospitality, commercial, landscape, and renovation design in Bangalore and across India."
        keywords="architecture services Bangalore, interior design studio, landscape design, master planning, renovation architects, luxury villa design, commercial architecture"
        canonicalPath="/services"
      />
      <Navbar />
      <main>
        <PageHero
          title="Services"
          subtitle="From architectural design to interior curation, landscape integration to project management — we offer a complete spectrum of services to bring your vision to life."
          image="https://readdy.ai/api/search-image?query=Luxury%20modern%20architecture%20office%2C%20architects%20collaborating%20around%20large%20design%20table%20with%20material%20samples%20and%20drawings%2C%20warm%20natural%20light%2C%20sophisticated%20creative%20atmosphere%2C%20editorial%20photography%2C%20warm%20earth%20tones%2C%20refined%20professional%20environment&width=1920&height=1080&seq=services-hero&orientation=landscape"
          breadcrumb={[{ label: "Services" }]}
        />

        {/* All Services */}
        <section className="py-20 md:py-28 bg-background-50">
          <div className="w-full px-6 md:px-10 lg:px-14">
            <div className="space-y-16 md:space-y-24">
              {extendedServices.map((service, sIdx) => (
                <ServiceSection key={service.id} service={service} index={sIdx} onContact={() => navigate("/contact")} />
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

function ServiceSection({ service, index, onContact }: { service: any; index: number; onContact: () => void }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([e]) => { if (e.isIntersecting) setIsVisible(true); }, { threshold: 0.1 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const isReversed = index % 2 === 1;

  return (
    <div ref={ref} className={`flex flex-col ${isReversed ? "lg:flex-row-reverse" : "lg:flex-row"} gap-10 lg:gap-16`}>
      {/* Icon Side */}
      <div className={`w-full lg:w-1/3 flex flex-col items-center justify-center text-center transition-all duration-800 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}>
        <div className="w-24 h-24 flex items-center justify-center rounded-full bg-primary-100/50 text-primary-500 mb-6">
          <i className={`${service.icon} text-4xl`} />
        </div>
        <h3 className="font-heading text-2xl md:text-3xl font-light text-foreground-950 mb-3">{service.title}</h3>
        <p className="text-sm font-body text-secondary-600 leading-relaxed max-w-xs">{service.shortDescription}</p>
      </div>

      {/* Details Side */}
      <div className={`w-full lg:w-2/3 transition-all duration-800 delay-150 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}>
        <p className="text-sm md:text-base font-body text-secondary-600 leading-relaxed mb-8">{service.description}</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Process */}
          <div>
            <h4 className="font-heading text-lg font-light text-foreground-950 mb-4">Our Process</h4>
            <ul className="space-y-2.5">
              {service.process.map((step: string, i: number) => (
                <li key={i} className="flex items-start gap-3 text-sm font-body text-secondary-600">
                  <span className="shrink-0 w-5 h-5 flex items-center justify-center rounded-full bg-primary-100/60 text-primary-500 text-[10px] font-label font-semibold mt-0.5">
                    {i + 1}
                  </span>
                  {step}
                </li>
              ))}
            </ul>
          </div>

          {/* Benefits */}
          <div>
            <h4 className="font-heading text-lg font-light text-foreground-950 mb-4">Benefits</h4>
            <ul className="space-y-2.5">
              {service.benefits.map((benefit: string, i: number) => (
                <li key={i} className="flex items-start gap-3 text-sm font-body text-secondary-600">
                  <i className="ri-check-line text-primary-500 mt-0.5" />
                  {benefit}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <button
          onClick={onContact}
          className="btn-luxury group inline-flex items-center gap-2 px-6 py-2.5 bg-primary-500 text-background-50 text-sm font-label font-semibold tracking-wide rounded-md hover:bg-primary-600 transition-all duration-400 hover:shadow-[0_0_24px_rgba(166,124,82,0.30)] active:scale-[0.97] whitespace-nowrap mt-8"
        >
          Enquire About This Service
          <i className="ri-arrow-right-line group-hover:translate-x-1 transition-transform duration-300" />
        </button>
      </div>
    </div>
  );
}