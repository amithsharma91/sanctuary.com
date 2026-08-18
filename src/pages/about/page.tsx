import { useState, useEffect, useRef } from "react";
import Navbar from "@/components/feature/Navbar";
import Footer from "@/components/feature/Footer";
import PageHero from "@/components/feature/PageHero";
import PageCTA from "@/components/feature/PageCTA";
import PageMeta from "@/components/feature/PageMeta";
import { buildBreadcrumbSchema } from "@/utils/seo";

const PORTRAIT_URL = "https://storage.helloreaddy.io/project_files/76dce7c4-6caa-4272-98e8-4149c442ecfc/ceee080a-3cbb-4959-80c5-a872982fb423_compressed_IMG_20260813_152849.webp";

const aboutSchema = [
  {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Sanctuary Architects & Designers",
  description:
    "Best Architects & Interior Designers in Bangalore — an architecture and spatial design studio founded in Bangalore in August 2003 by Principal Architect Anshul Chodha.",
  foundingDate: "2003",
  founder: {
    "@type": "Person",
    name: "Anshul Chodha",
    jobTitle: "Principal Architect",
  },
  address: {
    "@type": "PostalAddress",
    streetAddress:
      "31, 4th Cross Road, 8th A Main Rd, Vinayaka Nagar, Sadashiva Nagar",
    addressLocality: "Bengaluru",
    addressRegion: "Karnataka",
    postalCode: "560080",
    addressCountry: "IN",
  },
  email: "anshul@sanctuaryarch.com",
  telephone: "+919845003452",
  },
  buildBreadcrumbSchema([{ name: "Home", path: "/" }, { name: "About" }]),
];

export default function About() {
  return (
    <div className="relative bg-background-50">
      <PageMeta
        title="About Sanctuary Architects & Designers | Bangalore"
        description="Sanctuary Architects & Designers is a Bangalore architecture and interior design studio founded in 2003 by Anshul Chodha, designing homes and hospitality spaces across India."
        keywords="about Sanctuary Architects, architecture studio Bangalore, interior designers Bangalore, Anshul Chodha architect, design philosophy, wabi sabi architecture, sustainable architecture India"
        ogImage="https://res.cloudinary.com/dnyvkptxb/image/upload/v1786006616/COVER_PHOTO_ioojgq.jpg"
        schema={aboutSchema}
        canonicalPath="/about"
      />
      <Navbar />
      <main>
        <PageHero
          title="About Us"
          subtitle="Best Architects & Interior Designers in Bangalore — architecture and spatial design for homes, restaurants, bars, cafés, spas, salons and offices, across India and abroad, since August 2003."
          image="https://res.cloudinary.com/dnyvkptxb/image/upload/v1786006616/COVER_PHOTO_ioojgq.jpg"
          breadcrumb={[{ label: "About" }]}
        />

        <AboutUsIntro />
        <SanctuaryStory />
        <PrincipalArchitect />
        <DesignApproach />
        <Sustainability />
        <ProfessionalInvolvement />
        <ArchitectsStatement />
        <ClosingPhilosophy />

        <PageCTA />
      </main>
      <Footer />
    </div>
  );
}

/* ================================================================
   1. ABOUT US INTRODUCTION
   ================================================================ */
function AboutUsIntro() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-20 md:py-28 bg-background-50">
      <div className="w-full px-6 md:px-10 lg:px-14">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <div
            className={`w-full lg:w-1/2 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
            }`}
          >
            <div className="image-reveal rounded-lg">
              <img
                src="https://readdy.ai/api/search-image?query=Luxury%20architectural%20design%20studio%20with%20warm%20ambient%20lighting%2C%20large%20drafting%20table%20with%20hand%20drawn%20architectural%20sketches%2C%20material%20samples%20arranged%20on%20wooden%20surface%2C%20natural%20light%20from%20windows%2C%20creative%20elegant%20workspace%2C%20sophisticated%20professional%20atmosphere%2C%20warm%20earth%20tones%2C%20editorial%20photography&width=900&height=1100&seq=about-story&orientation=portrait"
                alt="Sanctuary Architects & Designers — architectural design studio in Bangalore"
                loading="lazy"
                className="w-full aspect-[4/5] object-cover rounded-lg"
              />
            </div>
          </div>
          <div
            className={`w-full lg:w-1/2 transition-all duration-1000 delay-150 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <span className="text-xs font-body tracking-[0.15em] uppercase text-primary-500">
              About Us
            </span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-light text-foreground-950 leading-[1.12] mt-2 mb-6">
              About Us.
            </h2>
            <p className="text-sm md:text-base font-body text-secondary-600 leading-relaxed">
              Founded by Anshul Chodha, an alumnus of MIT, Manipal, Sanctuary
              Architects &amp; Designers has been involved in over a hundred projects
              over the last two decades, spanning hospitality, residential and
              commercial architecture and interior design.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ================================================================
   2. SANCTUARY STORY / PRACTICE
   ================================================================ */
function SanctuaryStory() {
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

  const sectors = [
    "Boutique Resorts",
    "Residential Developments",
    "Clubhouses",
    "Stand-alone Restaurants",
    "Salons & Spas",
    "Private Residences",
    "QSR Chains",
    "Restaurant Chains",
  ];

  return (
    <section ref={ref} className="py-20 md:py-28 bg-background-100">
      <div className="w-full px-6 md:px-10 lg:px-14">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 max-w-6xl mx-auto items-start">
          <div
            className={`transition-all duration-800 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <span className="text-xs font-body tracking-[0.15em] uppercase text-primary-500">
              Our Practice
            </span>
            <h2 className="font-heading text-3xl md:text-5xl font-light text-foreground-950 leading-[1.1] mt-2 mb-6">
              Sanctuary.
            </h2>
            <p className="text-sm md:text-base font-body text-secondary-600 leading-relaxed mb-10 max-w-lg">
              Sanctuary works across Hospitality, Residential and Commercial
              projects in architecture and interior design.
            </p>
            <div className="flex items-baseline gap-4">
              <span className="font-heading text-5xl md:text-6xl font-light text-primary-500">
                100+
              </span>
              <span className="text-sm font-body tracking-[0.12em] uppercase text-secondary-500">
                Projects
              </span>
            </div>
          </div>
          <div
            className={`transition-all duration-800 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <ul className="border-t border-secondary-200/40">
              {sectors.map((sector, idx) => (
                <li
                  key={sector}
                  className="py-3.5 border-b border-secondary-200/40"
                  style={{ transitionDelay: `${idx * 80}ms` }}
                >
                  <span className="font-heading text-xl md:text-2xl font-light text-foreground-950">
                    {sector}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ================================================================
   3. PRINCIPAL ARCHITECT
   ================================================================ */
function PrincipalArchitect() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-20 md:py-28 bg-background-50">
      <div className="w-full px-6 md:px-10 lg:px-14">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 border-t border-secondary-200/40 pt-10">
            {/* Desktop portrait — left column */}
            <div
              className={`hidden lg:block transition-all duration-800 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <div className="image-reveal rounded-lg">
                <img
                  src={PORTRAIT_URL}
                  alt="Anshul Chodha, Principal Architect at Sanctuary Architects & Designers"
                  loading="lazy"
                  className="w-full max-w-[480px] aspect-[3/4] object-cover object-center rounded-lg"
                />
              </div>
            </div>

            {/* Text content + mobile portrait — right column on desktop */}
            <div
              className={`transition-all duration-800 delay-150 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <p className="text-xs font-label tracking-[0.15em] uppercase text-secondary-500 mb-3">
                Principal Architect
              </p>
              <h3 className="font-heading text-2xl md:text-3xl font-light text-foreground-950 mb-2">
                Anshul Chodha
              </h3>
              <p className="text-xs font-body text-secondary-500 mb-8">
                Founder — Sanctuary Architects &amp; Designers, Bangalore
              </p>

              {/* Mobile portrait */}
              <div className="lg:hidden image-reveal rounded-lg mb-8">
                <img
                  src={PORTRAIT_URL}
                  alt="Anshul Chodha, Principal Architect at Sanctuary Architects & Designers"
                  loading="lazy"
                  className="w-full max-w-[480px] aspect-[3/4] object-cover object-center rounded-lg"
                />
              </div>

              <p className="text-sm md:text-base font-body text-secondary-600 leading-relaxed">
                Anshul graduated from MIT Manipal in 1996 and worked as a Senior
                Associate Architect with Khosla Associates, Bangalore for six
                years before starting Sanctuary Architects and Designers,
                Bangalore at the age of 30.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ================================================================
   4. DESIGN APPROACH
   ================================================================ */
function DesignApproach() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const commitments = [
    "New design approaches",
    "Sustainable design solutions",
    "Changing fixed mindsets around design, materials, construction, technologies and lifestyles",
    "Making design accessible to the common person",
    "Contributing to society at large",
  ];

  return (
    <section ref={ref} className="py-20 md:py-28 bg-background-100">
      <div className="w-full px-6 md:px-10 lg:px-14">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 max-w-6xl mx-auto">
          <div
            className={`lg:col-span-3 transition-all duration-800 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <span className="text-xs font-body tracking-[0.15em] uppercase text-primary-500">
              Design Approach
            </span>
            <h2 className="font-heading text-3xl md:text-5xl font-light text-foreground-950 leading-[1.1] mt-2 mb-8">
              Shaping Mindsets.
            </h2>
            <p className="text-sm md:text-base font-body text-secondary-600 leading-relaxed mb-5">
              Sanctuary and Anshul are committed to new design approaches and
              sustainable design solutions, changing fixed mindsets around
              design, materials, construction, technologies and lifestyles.
            </p>
            <p className="text-sm md:text-base font-body text-secondary-600 leading-relaxed">
              The practice is also committed to making design more accessible to
              the common person and making a difference to society at large.
            </p>
          </div>
          <div
            className={`lg:col-span-2 transition-all duration-800 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <ul className="border-t border-secondary-200/40">
              {commitments.map((item, idx) => (
                <li
                  key={item}
                  className="py-4 border-b border-secondary-200/40"
                  style={{ transitionDelay: `${idx * 100}ms` }}
                >
                  <span className="font-heading text-lg md:text-xl font-light text-foreground-950">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ================================================================
   5. SUSTAINABILITY
   ================================================================ */
function Sustainability() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const principles = [
    "New sustainable materials",
    "Reusing and recycling materials used in projects",
    "Passive Solar methods",
    "Changing fixed mindsets on design, materials, construction, technologies and lifestyles.",
  ];

  return (
    <section ref={ref} className="py-20 md:py-28 bg-background-50">
      <div className="w-full px-6 md:px-10 lg:px-14">
        <div className="max-w-4xl mx-auto">
          <span className="text-xs font-body tracking-[0.15em] uppercase text-primary-500">
            Sustainability
          </span>
          <h2 className="font-heading text-3xl md:text-5xl font-light text-foreground-950 leading-[1.1] mt-2 mb-6">
            Sustainability.
          </h2>
          <p className="text-sm md:text-base font-body text-secondary-600 leading-relaxed mb-12 max-w-2xl">
            Sanctuary is committed to working on new design approaches and
            solutions that are truly sustainable by exploring:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-secondary-200/40 border border-secondary-200/40 rounded-lg overflow-hidden">
            {principles.map((principle, idx) => (
              <div
                key={principle}
                className={`bg-background-50 p-7 md:p-8 transition-all duration-700 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${idx * 120}ms` }}
              >
                <span className="font-heading text-lg font-light text-primary-500 block mb-3">
                  0{idx + 1}
                </span>
                <p className="text-sm font-body text-foreground-800 leading-relaxed">
                  {principle}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ================================================================
   6. PROFESSIONAL INVOLVEMENT
   ================================================================ */
function ProfessionalInvolvement() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-20 md:py-28 bg-background-100">
      <div className="w-full px-6 md:px-10 lg:px-14">
        <div
          className={`max-w-4xl mx-auto transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="text-xs font-body tracking-[0.15em] uppercase text-primary-500 flex items-center gap-3 mb-8">
            <span className="h-px w-10 bg-primary-400/60 inline-block" />
            Professional Involvement
          </span>
          <p className="font-heading text-xl md:text-3xl font-light text-foreground-950 leading-[1.4] mb-6">
            Anshul Chodha, Principal Architect of Sanctuary, is the Joint
            Secretary of the Institute of Indian Interior Designers and
            Architects, Bangalore Chapter, India.
          </p>
          <p className="text-sm md:text-base font-body text-secondary-600 leading-relaxed max-w-2xl">
            He lectures at National and International Architecture and Design
            conventions, and serves as a jury member.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ================================================================
   7. ARCHITECT'S STATEMENT
   ================================================================ */
function ArchitectsStatement() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-20 md:py-28 bg-background-50">
      <div className="w-full px-6 md:px-10 lg:px-14">
        <div
          className={`max-w-3xl mx-auto transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="text-xs font-body tracking-[0.15em] uppercase text-primary-500 flex items-center gap-3 mb-8">
            <span className="h-px w-10 bg-primary-400/60 inline-block" />
            Architect&apos;s Statement
          </span>
          <blockquote className="font-heading text-2xl md:text-4xl font-light text-foreground-950 leading-[1.35] mb-8">
            &ldquo;Every Building or Structure or Space has a certain purpose for
            which it is built. The true challenge for me is to fulfill the same
            in every possible way that is tangible (functionally, aesthetically,
            scientifically and artistically) as well as in ways that are
            intangible.&rdquo;
          </blockquote>
          <p className="text-xs font-label tracking-[0.12em] uppercase text-secondary-500">
            Anshul Chodha — Principal Architect
          </p>
        </div>
      </div>
    </section>
  );
}

/* ================================================================
   8. CLOSING PHILOSOPHY
   ================================================================ */
function ClosingPhilosophy() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-24 md:py-32 bg-background-100">
      <div className="w-full px-6 md:px-10 lg:px-14">
        <div
          className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="text-xs font-body tracking-[0.15em] uppercase text-primary-500">
            Timelessness
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-light text-foreground-950 leading-[1.25] mt-4 mb-6">
            &ldquo;The infusion of the intangible into the design gives it a
            quality of Timelessness and that, I believe comes from tapping into
            and gaining an understanding of The Supreme Consciousness that lies
            within each one of us and with the honest approach of doing every
            piece of work as an offering to the Divine.&rdquo;
          </h2>
          <p className="font-heading text-xl md:text-2xl font-light text-primary-600 leading-relaxed">
            &ldquo;My journey is to do work that can be termed Timeless.&rdquo;
          </p>
          <p className="text-xs font-label tracking-[0.12em] uppercase text-secondary-500 mt-8">
            Anshul Chodha — Principal Architect
          </p>
        </div>
      </div>
    </section>
  );
}