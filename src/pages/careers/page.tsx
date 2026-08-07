import { useState, useEffect, useRef } from "react";
import Navbar from "@/components/feature/Navbar";
import Footer from "@/components/feature/Footer";
import PageHero from "@/components/feature/PageHero";
import PageCTA from "@/components/feature/PageCTA";
import PageMeta from "@/components/feature/PageMeta";
import { jobOpenings, companyBenefits, hiringProcess } from "@/mocks/careers";

export default function Careers() {
  const [activeTab, setActiveTab] = useState<string | null>(null);

  return (
    <div className="relative bg-background-50">
      <PageMeta
        title="Careers"
        description="Join Sanctuary Architects & Designers in Bangalore. Explore current openings for architects, interior designers, and creative professionals. Build your career with India's leading luxury design studio."
        keywords="architecture jobs Bangalore, interior design careers, architect hiring, design studio jobs, Sanctuary Architects careers, architecture internship India"
        canonicalPath="/careers"
      />
      <Navbar />
      <main>
        <PageHero
          title="Join Our Team"
          subtitle="We are always looking for talented architects, designers, and creative professionals who share our passion for timeless, meaningful design."
          image="https://readdy.ai/api/search-image?query=Luxury%20modern%20architecture%20office%20interior%2C%20creative%20team%20collaborating%20around%20design%20table%2C%20warm%20natural%20light%2C%20sophisticated%20creative%20atmosphere%2C%20diverse%20professional%20team%2C%20editorial%20photography%2C%20warm%20earth%20tones%2C%20dynamic%20collaborative%20environment&width=1920&height=1080&seq=careers-hero&orientation=landscape"
          breadcrumb={[{ label: "Careers" }]}
        />

        {/* Company Culture */}
        <section className="py-20 md:py-28 bg-background-50">
          <div className="w-full px-6 md:px-10 lg:px-14">
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20 max-w-5xl mx-auto">
              <div className="w-full lg:w-1/2">
                <span className="text-xs font-body tracking-[0.15em] uppercase text-primary-500">Studio Culture</span>
                <h2 className="font-heading text-3xl md:text-5xl font-light text-foreground-950 mt-2 mb-4 leading-[1.1]">
                  Life at<br />Sanctuary.
                </h2>
                <p className="text-sm md:text-base font-body text-secondary-600 leading-relaxed mb-4">
                  We believe great design happens when talented people feel empowered, supported, and inspired.
                  Our studio culture is built on collaboration, curiosity, and a shared obsession with craft.
                </p>
                <p className="text-sm md:text-base font-body text-secondary-600 leading-relaxed">
                  From Monday design reviews over filter coffee to Friday evening presentations with the whole team,
                  every day at Sanctuary is an opportunity to learn, create, and grow alongside some of the best
                  minds in Indian architecture.
                </p>
              </div>
              <div className="w-full lg:w-1/2">
                <div className="image-reveal rounded-lg">
                  <img
                    src="https://readdy.ai/api/search-image?query=Luxury%20modern%20architecture%20studio%2C%20creative%20team%20laughing%20and%20collaborating%20around%20large%20design%20table%2C%20warm%20natural%20light%20from%20skylight%2C%20casual%20professional%20atmosphere%2C%20design%20sketches%20and%20material%20samples%20visible%2C%20joyful%20creative%20environment%2C%20editorial%20photography%2C%20warm%20earth%20tones&width=900&height=700&seq=careers-culture&orientation=landscape"
                    alt="Life at Sanctuary Studio"
                    className="w-full aspect-[4/3] object-cover rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20 md:py-28 bg-background-100">
          <div className="w-full px-6 md:px-10 lg:px-14">
            <div className="text-center mb-14">
              <span className="text-xs font-body tracking-[0.15em] uppercase text-primary-500">Why Join Us</span>
              <h2 className="font-heading text-3xl md:text-5xl font-light text-foreground-950 mt-2">Benefits & Perks.</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {companyBenefits.map((benefit, idx) => (
                <BenefitCard key={benefit.title} benefit={benefit} index={idx} />
              ))}
            </div>
          </div>
        </section>

        {/* Current Openings */}
        <section id="openings" className="py-20 md:py-28 bg-background-50">
          <div className="w-full px-6 md:px-10 lg:px-14">
            <div className="text-center mb-14">
              <span className="text-xs font-body tracking-[0.15em] uppercase text-primary-500">Opportunities</span>
              <h2 className="font-heading text-3xl md:text-5xl font-light text-foreground-950 mt-2">Current Openings.</h2>
            </div>
            <div className="max-w-4xl mx-auto space-y-4">
              {jobOpenings.map((job) => (
                <JobCard
                  key={job.id}
                  job={job}
                  isOpen={activeTab === job.id}
                  onToggle={() => setActiveTab(activeTab === job.id ? null : job.id)}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Hiring Process */}
        <section className="py-20 md:py-28 bg-background-100">
          <div className="w-full px-6 md:px-10 lg:px-14">
            <div className="text-center mb-14">
              <span className="text-xs font-body tracking-[0.15em] uppercase text-primary-500">How To Apply</span>
              <h2 className="font-heading text-3xl md:text-5xl font-light text-foreground-950 mt-2">Hiring Process.</h2>
            </div>
            <div className="max-w-3xl mx-auto space-y-6">
              {hiringProcess.map((step, idx) => (
                <HiringStep key={step.step} step={step} index={idx} />
              ))}
            </div>
          </div>
        </section>

        {/* Apply CTA */}
        <section className="py-16 md:py-20 bg-background-50 text-center">
          <div className="w-full px-6 md:px-10 lg:px-14">
            <h2 className="font-heading text-2xl md:text-4xl font-light text-foreground-950 mb-4">
              Don&apos;t See Your Role?
            </h2>
            <p className="text-sm font-body text-secondary-600 mb-8 max-w-md mx-auto">
              We are always excited to meet talented people. Send your portfolio and resume — we would love to hear from you.
            </p>
            <a
              href="mailto:careers@sanctuaryarchitects.in"
              className="btn-luxury inline-flex items-center gap-2 px-8 py-3 bg-primary-500 text-background-50 text-sm font-label font-semibold tracking-wide rounded-md hover:bg-primary-600 transition-all duration-500 hover:shadow-[0_0_24px_rgba(166,124,82,0.30)] active:scale-[0.97] whitespace-nowrap"
            >
              Send Your Portfolio
              <i className="ri-mail-send-line" />
            </a>
          </div>
        </section>

        <PageCTA title="Ready To Build Your Career?" subtitle="Join a team that values creativity, craft, and collaboration. Let's create exceptional architecture together." primaryLabel="View Openings" primaryHref="/careers#openings" secondaryLabel="Contact Us" secondaryHref="/contact" />
      </main>
      <Footer />
    </div>
  );
}

function BenefitCard({ benefit, index }: { benefit: any; index: number }) {
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
      <div className="w-10 h-10 flex items-center justify-center rounded-md bg-primary-100/50 text-primary-500 mb-4">
        <i className={`${benefit.icon} text-lg`} />
      </div>
      <h3 className="font-heading text-lg font-light text-foreground-950 mb-2">{benefit.title}</h3>
      <p className="text-xs font-body text-secondary-600 leading-relaxed">{benefit.description}</p>
    </div>
  );
}

function JobCard({ job, isOpen, onToggle }: { job: any; isOpen: boolean; onToggle: () => void }) {
  return (
    <div className="border border-secondary-200/30 rounded-lg overflow-hidden bg-background-50 transition-all duration-400 hover:border-secondary-300/50">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between p-5 md:p-6 text-left transition-colors duration-300 hover:bg-secondary-100/30"
      >
        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap items-center gap-3 mb-1">
            <h3 className="font-heading text-lg font-light text-foreground-950">{job.title}</h3>
            <span className="text-[10px] font-body tracking-[0.08em] uppercase px-2.5 py-0.5 rounded-full bg-primary-100/60 text-primary-600 whitespace-nowrap">
              {job.type}
            </span>
          </div>
          <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs font-body text-secondary-500">
            <span><i className="ri-briefcase-line mr-1" />{job.department}</span>
            <span><i className="ri-map-pin-line mr-1" />{job.location}</span>
            <span><i className="ri-timer-line mr-1" />{job.experience}</span>
          </div>
        </div>
        <i className={`ri-arrow-down-s-line text-secondary-400 transition-transform duration-400 ${isOpen ? "rotate-180" : ""}`} />
      </button>

      <div
        className={`transition-all duration-400 overflow-hidden ${
          isOpen ? "max-h-[800px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-5 md:px-6 pb-6 border-t border-secondary-200/30 pt-5">
          <p className="text-sm font-body text-secondary-600 leading-relaxed mb-5">{job.description}</p>
          <h4 className="text-xs font-label tracking-[0.1em] uppercase text-foreground-800 mb-3">Requirements</h4>
          <ul className="space-y-2 mb-6">
            {job.requirements.map((req: string, i: number) => (
              <li key={i} className="flex items-start gap-2 text-sm font-body text-secondary-600">
                <i className="ri-check-line text-primary-500 mt-0.5 shrink-0" />
                {req}
              </li>
            ))}
          </ul>
          <a
            href={`mailto:careers@sanctuaryarchitects.in?subject=Application: ${job.title}`}
            className="btn-luxury inline-flex items-center gap-2 px-5 py-2.5 bg-primary-500 text-background-50 text-sm font-label font-semibold tracking-wide rounded-md hover:bg-primary-600 transition-all duration-400 hover:shadow-[0_0_20px_rgba(166,124,82,0.25)] active:scale-[0.97] whitespace-nowrap"
          >
            Apply Now
            <i className="ri-mail-send-line" />
          </a>
        </div>
      </div>
    </div>
  );
}

function HiringStep({ step, index }: { step: any; index: number }) {
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
      className={`flex gap-5 items-start transition-all duration-700 ${
        isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-6"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <span className="font-heading text-4xl font-light text-primary-400/60 w-12 shrink-0">{step.step}</span>
      <div>
        <h3 className="font-heading text-xl font-light text-foreground-950 mb-1">{step.title}</h3>
        <p className="text-sm font-body text-secondary-600 leading-relaxed">{step.description}</p>
      </div>
    </div>
  );
}