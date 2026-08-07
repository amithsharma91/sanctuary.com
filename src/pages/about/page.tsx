import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/feature/Navbar";
import Footer from "@/components/feature/Footer";
import PageHero from "@/components/feature/PageHero";
import PageCTA from "@/components/feature/PageCTA";
import PageMeta from "@/components/feature/PageMeta";
import { teamMembers, designPrinciples, stats } from "@/mocks/team";
import { processSteps } from "@/mocks/process";
import { awards } from "@/mocks/awards";

const aboutSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Sanctuary Architects & Designers",
  description: "Luxury architecture and interior design studio based in Bangalore, crafting timeless residential, hospitality, and commercial spaces since 2003.",
  foundingDate: "2003",
  address: {
    "@type": "PostalAddress",
    streetAddress: "42, Lavelle Road",
    addressLocality: "Bangalore",
    addressRegion: "Karnataka",
    postalCode: "560001",
    addressCountry: "IN",
  },
  numberOfEmployees: { "@type": "QuantitativeValue", value: 45 },
  founder: {
    "@type": "Person",
    name: teamMembers[0].name,
    jobTitle: teamMembers[0].role,
  },
};

export default function About() {
  const navigate = useNavigate();

  return (
    <div className="relative bg-background-50">
      <PageMeta
        title="About Us"
        description="Sanctuary Architects & Designers — a Bangalore-based luxury architecture studio founded in 2003. 45 architects and designers crafting timeless residential, hospitality, and commercial spaces across India."
        keywords="about Sanctuary Architects, architecture studio Bangalore, luxury design firm India, architecture team, design philosophy, sustainable architecture"
        schema={aboutSchema}
        canonicalPath="/about"
      />
      <Navbar />
      <main>
        <PageHero
          title="About Us"
          subtitle="Since 2003, Sanctuary has been crafting timeless architecture across India — from private villas to landmark resorts, every project is a dialogue between place, material, and meaning."
          image="https://readdy.ai/api/search-image?query=Luxury%20modern%20architecture%20office%20interior%2C%20warm%20wood%20and%20stone%20design%20studio%2C%20natural%20light%20streaming%20through%20large%20windows%2C%20architectural%20models%20and%20material%20samples%20on%20display%2C%20creative%20collaborative%20atmosphere%2C%20sophisticated%20professional%20environment%2C%20editorial%20interior%20photography%2C%20warm%20earth%20tones%2C%20refined%20elegant%20workspace&width=1920&height=1080&seq=about-hero&orientation=landscape"
          breadcrumb={[{ label: "About" }]}
        />

        {/* Our Story */}
        <OurStory />
        {/* Design Principles */}
        <DesignPrinciples />
        {/* Vision & Mission */}
        <VisionMission />
        {/* Statistics Counter */}
        <StatisticsCounter />
        {/* Founder Message */}
        <FounderMessage />
        {/* Process */}
        <DesignProcess />
        {/* Team */}
        <MeetTheTeam />
        {/* Awards Preview */}
        <AwardsPreview onViewAll={() => navigate("/awards")} />
        {/* Why Choose Us */}
        <WhyChooseUs />

        <PageCTA />
      </main>
      <Footer />
    </div>
  );
}

function OurStory() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-20 md:py-28 bg-background-50">
      <div className="w-full px-6 md:px-10 lg:px-14">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <div className={`w-full lg:w-1/2 transition-all duration-1000 ${isVisible ? "opacity-100 -translate-x-0" : "opacity-0 -translate-x-12"}`}>
            <div className="image-reveal rounded-lg">
              <img
                src="https://readdy.ai/api/search-image?query=Luxury%20architectural%20design%20studio%20with%20warm%20ambient%20lighting%2C%20large%20drafting%20table%20with%20hand%20drawn%20architectural%20sketches%2C%20material%20samples%20arranged%20on%20wooden%20surface%2C%20natural%20light%20from%20windows%2C%20creative%20elegant%20workspace%2C%20sophisticated%20professional%20atmosphere%2C%20warm%20earth%20tones%2C%20editorial%20photography&width=900&height=1100&seq=about-story&orientation=portrait"
                alt="Sanctuary Studio — Our Story"
                className="w-full aspect-[4/5] object-cover rounded-lg"
              />
            </div>
          </div>
          <div className={`w-full lg:w-1/2 transition-all duration-1000 delay-150 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <span className="text-xs font-body tracking-[0.15em] uppercase text-primary-500">Our Story</span>
            <h2 className="font-heading text-3xl md:text-5xl font-light text-foreground-950 leading-[1.1] mt-2 mb-6">
              Designing Spaces<br />That Endure.
            </h2>
            <p className="text-sm md:text-base font-body text-secondary-600 leading-relaxed mb-4">
              Sanctuary was born in Bangalore in 2003 with a simple conviction — that architecture, at its best, is an act of care.
              Care for the land it inhabits, the people it serves, and the generations it will outlast.
            </p>
            <p className="text-sm md:text-base font-body text-secondary-600 leading-relaxed mb-4">
              Over two decades, we have grown from a two-person studio into a multidisciplinary practice of 45 architects, designers,
              and craftspeople — united by a shared commitment to creating spaces of quiet power and enduring beauty.
            </p>
            <p className="text-sm md:text-base font-body text-secondary-600 leading-relaxed">
              Our work spans private residences, hospitality destinations, and commercial landmarks across India and beyond.
              Yet every project, regardless of scale, begins the same way: with deep listening and an unwavering attention to detail.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function DesignPrinciples() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([e]) => { if (e.isIntersecting) setIsVisible(true); }, { threshold: 0.1 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-20 md:py-28 bg-background-100">
      <div className="w-full px-6 md:px-10 lg:px-14">
        <div className="text-center mb-14">
          <span className="text-xs font-body tracking-[0.15em] uppercase text-primary-500">Philosophy</span>
          <h2 className="font-heading text-3xl md:text-5xl font-light text-foreground-950 mt-2">Design Principles.</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {designPrinciples.map((principle, idx) => (
            <div
              key={principle.title}
              className={`card-luxury bg-background-50 p-8 rounded-lg border border-secondary-200/30 transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-md bg-primary-100/50 text-primary-500 mb-5">
                <i className={`${principle.icon} text-xl`} />
              </div>
              <h3 className="font-heading text-xl font-light text-foreground-950 mb-3">{principle.title}</h3>
              <p className="text-sm font-body text-secondary-600 leading-relaxed">{principle.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function VisionMission() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([e]) => { if (e.isIntersecting) setIsVisible(true); }, { threshold: 0.15 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-20 md:py-28 bg-background-50">
      <div className="w-full px-6 md:px-10 lg:px-14">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 max-w-5xl mx-auto">
          <div className={`transition-all duration-800 ${isVisible ? "opacity-100 -translate-x-0" : "opacity-0 -translate-x-8"}`}>
            <span className="text-xs font-body tracking-[0.15em] uppercase text-primary-500">Vision</span>
            <h3 className="font-heading text-2xl md:text-3xl font-light text-foreground-950 mt-2 mb-4">
              To be India&apos;s most respected architecture studio — known not for scale, but for soul.
            </h3>
            <p className="text-sm font-body text-secondary-600 leading-relaxed">
              We envision a built environment where every structure contributes meaningfully to its context — ecologically,
              culturally, and emotionally. A world where architecture is measured not in square feet but in the quality of
              life it enables.
            </p>
          </div>
          <div className={`transition-all duration-800 delay-200 ${isVisible ? "opacity-100 -translate-x-0" : "opacity-0 translate-x-8"}`}>
            <span className="text-xs font-body tracking-[0.15em] uppercase text-primary-500">Mission</span>
            <h3 className="font-heading text-2xl md:text-3xl font-light text-foreground-950 mt-2 mb-4">
              To craft architecture that touches the soul — through intention, craft, and care.
            </h3>
            <p className="text-sm font-body text-secondary-600 leading-relaxed">
              We are committed to design excellence that serves both our clients and the larger world. Through rigorous process,
              material innovation, and genuine collaboration, we create spaces that are beautiful, functional, sustainable,
              and deeply personal.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function StatisticsCounter() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([e]) => { if (e.isIntersecting) setIsVisible(true); }, { threshold: 0.2 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-20 md:py-28 bg-background-100">
      <div className="w-full px-6 md:px-10 lg:px-14">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto text-center">
          {stats.map((stat, idx) => (
            <div key={stat.label} className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`} style={{ transitionDelay: `${idx * 150}ms` }}>
              <div className="font-heading text-5xl md:text-7xl font-light text-primary-500 mb-2">
                {stat.number}{stat.suffix}
              </div>
              <p className="text-xs font-body tracking-[0.08em] uppercase text-secondary-500">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FounderMessage() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([e]) => { if (e.isIntersecting) setIsVisible(true); }, { threshold: 0.15 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-20 md:py-28 bg-background-50">
      <div className="w-full px-6 md:px-10 lg:px-14">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20 max-w-5xl mx-auto">
          <div className={`w-full lg:w-2/5 transition-all duration-1000 ${isVisible ? "opacity-100 -translate-x-0" : "opacity-0 -translate-x-12"}`}>
            <div className="image-reveal rounded-lg">
              <img
                src={teamMembers[0].image}
                alt={teamMembers[0].name}
                className="w-full aspect-[3/4] object-cover rounded-lg"
              />
            </div>
            <p className="text-center mt-4 font-heading text-xl font-light text-foreground-950">{teamMembers[0].name}</p>
            <p className="text-center text-xs font-body text-secondary-500">{teamMembers[0].role}</p>
          </div>
          <div className={`w-full lg:w-3/5 transition-all duration-1000 delay-150 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <span className="text-xs font-body tracking-[0.15em] uppercase text-primary-500">Founder&apos;s Message</span>
            <blockquote className="font-heading text-2xl md:text-3xl font-light italic text-foreground-950 leading-[1.3] mt-4 mb-6">
              &ldquo;Architecture is not about buildings. It is about the life that unfolds within them — the morning light
              across a kitchen counter, the laughter of friends gathered on a terrace, the quiet peace of a bedroom at dusk.
              Every decision we make in the studio is in service of these moments.&rdquo;
            </blockquote>
            <p className="text-sm font-body text-secondary-600 leading-relaxed">
              {teamMembers[0].bio}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function DesignProcess() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([e]) => { if (e.isIntersecting) setIsVisible(true); }, { threshold: 0.1 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-20 md:py-28 bg-background-100">
      <div className="w-full px-6 md:px-10 lg:px-14">
        <div className="text-center mb-14">
          <span className="text-xs font-body tracking-[0.15em] uppercase text-primary-500">How We Work</span>
          <h2 className="font-heading text-3xl md:text-5xl font-light text-foreground-950 mt-2">Design Process.</h2>
        </div>
        <div className="max-w-3xl mx-auto space-y-6">
          {processSteps.map((step, idx) => (
            <div
              key={step.number}
              className={`flex gap-6 items-start transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${idx * 120}ms` }}
            >
              <span className="font-heading text-4xl md:text-5xl font-light text-primary-400/60 shrink-0 w-16">{step.number}</span>
              <div>
                <h3 className="font-heading text-xl md:text-2xl font-light text-foreground-950 mb-2">{step.title}</h3>
                <p className="text-sm font-body text-secondary-600 leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function MeetTheTeam() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([e]) => { if (e.isIntersecting) setIsVisible(true); }, { threshold: 0.05 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-20 md:py-28 bg-background-50">
      <div className="w-full px-6 md:px-10 lg:px-14">
        <div className="text-center mb-14">
          <span className="text-xs font-body tracking-[0.15em] uppercase text-primary-500">People</span>
          <h2 className="font-heading text-3xl md:text-5xl font-light text-foreground-950 mt-2">Meet The Team.</h2>
          <p className="text-sm font-body text-secondary-500 mt-3 max-w-lg mx-auto">
            A collective of 45 architects, designers, and craftspeople united by a shared passion for creating spaces of enduring beauty.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {teamMembers.map((member, idx) => (
            <div
              key={member.name}
              className={`group text-center transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              <div className="image-reveal rounded-lg overflow-hidden border border-secondary-200/30 mb-5 mx-auto max-w-[280px]">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full aspect-[4/5] object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <h3 className="font-heading text-xl font-light text-foreground-950">{member.name}</h3>
              <p className="text-xs font-body text-primary-500 mt-1">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AwardsPreview({ onViewAll }: { onViewAll: () => void }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([e]) => { if (e.isIntersecting) setIsVisible(true); }, { threshold: 0.1 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const previewAwards = awards.slice(0, 4);

  return (
    <section ref={ref} className="py-20 md:py-28 bg-background-100">
      <div className="w-full px-6 md:px-10 lg:px-14">
        <div className="text-center mb-14">
          <span className="text-xs font-body tracking-[0.15em] uppercase text-primary-500">Recognition</span>
          <h2 className="font-heading text-3xl md:text-5xl font-light text-foreground-950 mt-2">Awards & Recognition.</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto">
          {previewAwards.map((award, idx) => (
            <div
              key={`${award.title}-${award.year}`}
              className={`card-luxury bg-background-50 p-6 rounded-lg border border-secondary-200/30 text-center transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              <span className="font-heading text-4xl font-light text-primary-500 block mb-3">{award.year}</span>
              <h4 className="font-heading text-base font-light text-foreground-950 mb-1">{award.title}</h4>
              <p className="text-xs font-body text-secondary-500">{award.organization}</p>
            </div>
          ))}
        </div>
        <div className={`text-center mt-10 transition-all duration-700 delay-500 ${isVisible ? "opacity-100" : "opacity-0"}`}>
          <button
            onClick={onViewAll}
            className="btn-luxury group inline-flex items-center gap-2 px-7 py-3 bg-foreground-950 text-background-50 text-sm font-label font-semibold tracking-wide rounded-md hover:bg-foreground-800 transition-all duration-500 hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] active:scale-[0.97] whitespace-nowrap"
          >
            View All Awards
            <i className="ri-arrow-right-line group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </section>
  );
}

function WhyChooseUs() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([e]) => { if (e.isIntersecting) setIsVisible(true); }, { threshold: 0.1 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const reasons = [
    { title: "22+ Years", description: "Two decades of architectural excellence across India, with a portfolio that spans residential, hospitality, and commercial projects.", icon: "ri-timer-line" },
    { title: "Context-Driven", description: "Every design begins with the land — its climate, culture, and character — ensuring architecture that belongs.", icon: "ri-earth-line" },
    { title: "End-to-End", description: "From concept to handover, we manage every phase — design, documentation, construction, and interior styling.", icon: "ri-stack-line" },
    { title: "Craft Obsession", description: "We sweat the details — the junction between materials, the quality of light, the tactile experience of every surface.", icon: "ri-pencil-ruler-2-line" },
    { title: "Sustainable by Default", description: "Passive design, local materials, and energy-efficient systems are not add-ons — they are integral to our process.", icon: "ri-leaf-line" },
    { title: "Client Partnership", description: "We treat every project as a collaboration — listening deeply, communicating transparently, and celebrating shared success.", icon: "ri-hand-heart-line" },
  ];

  return (
    <section ref={ref} className="py-20 md:py-28 bg-background-50">
      <div className="w-full px-6 md:px-10 lg:px-14">
        <div className="text-center mb-14">
          <span className="text-xs font-body tracking-[0.15em] uppercase text-primary-500">Why Sanctuary</span>
          <h2 className="font-heading text-3xl md:text-5xl font-light text-foreground-950 mt-2">Why Choose Us.</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {reasons.map((reason, idx) => (
            <div
              key={reason.title}
              className={`card-luxury bg-background-50 p-7 rounded-lg border border-secondary-200/30 transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${idx * 80}ms` }}
            >
              <div className="w-10 h-10 flex items-center justify-center rounded-md bg-primary-100/50 text-primary-500 mb-4">
                <i className={`${reason.icon} text-lg`} />
              </div>
              <h3 className="font-heading text-lg font-light text-foreground-950 mb-2">{reason.title}</h3>
              <p className="text-xs font-body text-secondary-600 leading-relaxed">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}