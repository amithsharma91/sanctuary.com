import { useState, useEffect, useRef } from "react";
import Navbar from "@/components/feature/Navbar";
import Footer from "@/components/feature/Footer";
import PageHero from "@/components/feature/PageHero";
import PageCTA from "@/components/feature/PageCTA";
import PageMeta from "@/components/feature/PageMeta";
import { awardsTimeline, certificationsList, mediaFeatures, magazinePublications, professionalMemberships } from "@/mocks/awardsExtended";

export default function Awards() {
  return (
    <div className="relative bg-background-50">
      <PageMeta
        title="Awards & Recognition"
        description="Sanctuary Architects has been recognized by leading institutions across India. Browse our awards timeline, certifications, media features, magazine publications, and professional memberships."
        keywords="architecture awards India, design awards, Sanctuary Architects recognition, architecture certifications, IIA awards, IGBC LEED"
        canonicalPath="/awards"
      />
      <Navbar />
      <main>
        <PageHero
          title="Awards & Recognition"
          subtitle="Our work has been recognized by leading institutions across India and internationally — a reflection of our commitment to design excellence and innovation."
          image="https://readdy.ai/api/search-image?query=Luxury%20architectural%20awards%20ceremony%2C%20elegant%20trophy%20display%20on%20marble%20surface%2C%20warm%20ambient%20lighting%2C%20sophisticated%20event%20atmosphere%2C%20golden%20accents%2C%20refined%20celebration%20of%20design%20excellence%2C%20editorial%20photography%2C%20warm%20earth%20and%20gold%20tones&width=1920&height=1080&seq=awards-hero&orientation=landscape"
          breadcrumb={[{ label: "Awards & Recognition" }]}
        />

        {/* Awards Timeline */}
        <section className="py-20 md:py-28 bg-background-50">
          <div className="w-full px-6 md:px-10 lg:px-14">
            <div className="text-center mb-14">
              <span className="text-xs font-body tracking-[0.15em] uppercase text-primary-500">Achievements</span>
              <h2 className="font-heading text-3xl md:text-5xl font-light text-foreground-950 mt-2">Awards Timeline.</h2>
            </div>
            <div className="max-w-3xl mx-auto space-y-4">
              {awardsTimeline.map((award, idx) => (
                <AwardRow key={`${award.title}-${award.year}`} award={award} index={idx} />
              ))}
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section className="py-20 md:py-28 bg-background-100">
          <div className="w-full px-6 md:px-10 lg:px-14">
            <div className="text-center mb-14">
              <span className="text-xs font-body tracking-[0.15em] uppercase text-primary-500">Credentials</span>
              <h2 className="font-heading text-3xl md:text-5xl font-light text-foreground-950 mt-2">Certifications.</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {certificationsList.map((cert, idx) => (
                <CertCard key={cert.title} cert={cert} index={idx} />
              ))}
            </div>
          </div>
        </section>

        {/* Media Features */}
        <section className="py-20 md:py-28 bg-background-50">
          <div className="w-full px-6 md:px-10 lg:px-14">
            <div className="text-center mb-14">
              <span className="text-xs font-body tracking-[0.15em] uppercase text-primary-500">Press</span>
              <h2 className="font-heading text-3xl md:text-5xl font-light text-foreground-950 mt-2">Media Features.</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
              {mediaFeatures.map((media, idx) => (
                <MediaCard key={`${media.publication}-${media.title}`} media={media} index={idx} />
              ))}
            </div>
          </div>
        </section>

        {/* Magazine Publications */}
        <section className="py-20 md:py-28 bg-background-100">
          <div className="w-full px-6 md:px-10 lg:px-14">
            <div className="text-center mb-14">
              <span className="text-xs font-body tracking-[0.15em] uppercase text-primary-500">Publications</span>
              <h2 className="font-heading text-3xl md:text-5xl font-light text-foreground-950 mt-2">Magazine Features.</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
              {magazinePublications.map((pub, idx) => (
                <PubCard key={pub.name} pub={pub} index={idx} />
              ))}
            </div>
          </div>
        </section>

        {/* Professional Memberships */}
        <section className="py-20 md:py-28 bg-background-50">
          <div className="w-full px-6 md:px-10 lg:px-14">
            <div className="text-center mb-14">
              <span className="text-xs font-body tracking-[0.15em] uppercase text-primary-500">Community</span>
              <h2 className="font-heading text-3xl md:text-5xl font-light text-foreground-950 mt-2">Professional Memberships.</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-4xl mx-auto">
              {professionalMemberships.map((member, idx) => (
                <MembershipCard key={member.name} member={member} index={idx} />
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

function AwardRow({ award, index }: { award: any; index: number }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([e]) => { if (e.isIntersecting) setIsVisible(true); }, { threshold: 0.2 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`flex items-center gap-5 p-4 rounded-lg border border-secondary-200/30 hover:border-primary-200/40 hover:bg-primary-50/10 transition-all duration-500 ${
        isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
      }`}
      style={{ transitionDelay: `${index * 60}ms` }}
    >
      <span className="font-heading text-3xl font-light text-primary-500 w-16 shrink-0">{award.year}</span>
      <div className="flex-1 min-w-0">
        <h3 className="font-heading text-lg font-light text-foreground-950">{award.title}</h3>
        <p className="text-xs font-body text-secondary-500">{award.organization}</p>
      </div>
      <span className="text-[10px] font-body tracking-[0.08em] uppercase text-secondary-400 shrink-0 hidden sm:block">{award.category}</span>
    </div>
  );
}

function CertCard({ cert, index }: { cert: any; index: number }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([e]) => { if (e.isIntersecting) setIsVisible(true); }, { threshold: 0.15 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`card-luxury bg-background-50 p-6 rounded-lg border border-secondary-200/30 text-center transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <span className="font-heading text-2xl font-light text-primary-500 block mb-2">{cert.year}</span>
      <h4 className="font-heading text-base font-light text-foreground-950 mb-1">{cert.title}</h4>
      <p className="text-xs font-body text-secondary-500 leading-relaxed">{cert.description}</p>
    </div>
  );
}

function MediaCard({ media, index }: { media: any; index: number }) {
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
      className={`card-luxury bg-background-50 p-6 rounded-lg border border-secondary-200/30 transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <span className="text-[10px] font-body tracking-[0.12em] uppercase text-primary-500">{media.type}</span>
      <h3 className="font-heading text-lg font-light text-foreground-950 mt-1 mb-1 leading-[1.3]">{media.title}</h3>
      <p className="text-xs font-body text-secondary-500">
        {media.publication} — {media.year}
      </p>
    </div>
  );
}

function PubCard({ pub, index }: { pub: any; index: number }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([e]) => { if (e.isIntersecting) setIsVisible(true); }, { threshold: 0.15 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`card-luxury bg-background-50 p-6 rounded-lg border border-secondary-200/30 transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <span className="font-heading text-lg font-light text-primary-500 block mb-1">{pub.year}</span>
      <h3 className="font-heading text-lg font-light text-foreground-950 mb-1">{pub.name}</h3>
      <p className="text-xs font-body text-secondary-500 leading-relaxed">{pub.description}</p>
    </div>
  );
}

function MembershipCard({ member, index }: { member: any; index: number }) {
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
      className={`card-luxury bg-background-50 p-6 rounded-lg border border-secondary-200/30 text-center transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <div className="w-10 h-10 mx-auto flex items-center justify-center rounded-full bg-primary-100/50 text-primary-500 mb-3">
        <i className="ri-award-line text-lg" />
      </div>
      <h4 className="font-heading text-base font-light text-foreground-950 mb-1">{member.name}</h4>
      <p className="text-xs font-body text-secondary-500">{member.role}</p>
    </div>
  );
}