import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/feature/Navbar";
import Footer from "@/components/feature/Footer";
import PageHero from "@/components/feature/PageHero";
import PageCTA from "@/components/feature/PageCTA";
import PageMeta from "@/components/feature/PageMeta";

const contactSchema = {
  "@context": "https://schema.org",
  "@type": "Architect",
  name: "Sanctuary Architects & Designers",
  description:
    "Luxury architecture and interior design studio based in Bangalore, crafting timeless residential, hospitality, and commercial spaces since 2003.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "42, Lavelle Road",
    addressLocality: "Bangalore",
    addressRegion: "Karnataka",
    postalCode: "560001",
    addressCountry: "IN",
  },
  telephone: "+918041234567",
  email: "studio@sanctuaryarchitects.in",
  geo: {
    "@type": "GeoCoordinates",
    latitude: "12.9716",
    longitude: "77.5946",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:30",
      closes: "18:30",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "10:00",
      closes: "16:00",
    },
  ],
  sameAs: [
    "https://instagram.com/sanctuaryarchitects",
    "https://linkedin.com/company/sanctuaryarchitects",
  ],
};

export default function ContactPage() {
  const [formStatus, setFormStatus] = useState<"idle" | "success" | "error">("idle");
  const [formError, setFormError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormError("");
    setFormStatus("idle");

    const form = e.currentTarget;
    const formData = new FormData(form);

    const honeypot = formData.get("website_alt");
    if (honeypot && String(honeypot).trim() !== "") {
      setFormStatus("success");
      setIsSubmitting(false);
      return;
    }

    try {
      const res = await fetch(
        "https://readdy.ai/api/form/d9o47d0bdkpk99j7gq4g",
        {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: new URLSearchParams(
            Array.from(formData.entries())
              .filter(([key]) => key !== "website_alt")
              .map(([k, v]) => [k, String(v)])
          ).toString(),
        }
      );

      const responseText = await res.text();
      let parsed: any = {};
      try {
        parsed = JSON.parse(responseText);
      } catch {
        // not JSON
      }

      const serverMsg =
        parsed?.meta?.message || parsed?.message || parsed?.meta?.detail || "";

      if (
        res.ok &&
        parsed?.code === "OK" &&
        !String(serverMsg).toLowerCase().includes("spam")
      ) {
        navigate("/thank-you");
        return;
      } else {
        setFormStatus("error");
        setFormError(serverMsg || "Something went wrong. Please try again.");
      }
    } catch {
      setFormStatus("error");
      setFormError("Network error. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative bg-background-50">
      <PageMeta
        title="Contact"
        description="Get in touch with Sanctuary Architects & Designers in Bangalore. Book a consultation, visit our studio on Lavelle Road, call +91 80 4123 4567, or WhatsApp us to discuss your architecture project."
        keywords="contact architects Bangalore, luxury architecture consultation, interior design enquiry, Sanctuary Architects contact, book architecture consultation"
        schema={contactSchema}
        canonicalPath="/contact"
      />
      <Navbar />
      <main>
        <PageHero
          title="Let's Talk."
          subtitle="Every great project begins with a conversation. Reach out to discuss your vision — we'd love to hear from you."
          image="https://readdy.ai/api/search-image?query=Luxury%20modern%20architecture%20studio%20meeting%20space%2C%20warm%20wood%20and%20stone%20interior%2C%20natural%20light%20through%20large%20windows%2C%20elegant%20meeting%20table%20with%20architectural%20models%2C%20sophisticated%20professional%20atmosphere%2C%20welcoming%20serene%20environment%2C%20warm%20earth%20tones%2C%20editorial%20photography%2C%20refined%20aesthetic&width=1920&height=1080&seq=contact-hero&orientation=landscape"
          breadcrumb={[{ label: "Contact" }]}
        />

        <section className="py-20 md:py-28 bg-background-50">
          <div className="w-full px-6 md:px-10 lg:px-14">
            <div className="flex flex-col lg:flex-row gap-14 lg:gap-20 max-w-6xl mx-auto">
              {/* Contact Form */}
              <div className="w-full lg:w-[55%]">
                <span className="text-xs font-body tracking-[0.15em] uppercase text-primary-500">
                  Enquiry
                </span>
                <h2 className="font-heading text-3xl md:text-4xl font-light text-foreground-950 mt-2 mb-8">
                  Send Us a Message.
                </h2>

                <form
                  ref={formRef}
                  data-readdy-form="true"
                  onSubmit={handleSubmit}
                  className="space-y-6"
                  noValidate
                >
                  {/* Honeypot */}
                  <input
                    type="text"
                    name="website_alt"
                    tabIndex={-1}
                    autoComplete="off"
                    aria-hidden="true"
                    readOnly
                    className="hp-field"
                  />

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-xs font-label tracking-[0.06em] uppercase text-foreground-700 mb-2"
                      >
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="w-full px-4 py-3 text-sm font-body bg-background-50 border border-secondary-200/60 rounded-md text-foreground-800 placeholder:text-secondary-400 focus:outline-none focus:border-primary-400/50 focus:ring-1 focus:ring-primary-400/20 transition-all duration-300"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-xs font-label tracking-[0.06em] uppercase text-foreground-700 mb-2"
                      >
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full px-4 py-3 text-sm font-body bg-background-50 border border-secondary-200/60 rounded-md text-foreground-800 placeholder:text-secondary-400 focus:outline-none focus:border-primary-400/50 focus:ring-1 focus:ring-primary-400/20 transition-all duration-300"
                        placeholder="you@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-xs font-label tracking-[0.06em] uppercase text-foreground-700 mb-2"
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full px-4 py-3 text-sm font-body bg-background-50 border border-secondary-200/60 rounded-md text-foreground-800 placeholder:text-secondary-400 focus:outline-none focus:border-primary-400/50 focus:ring-1 focus:ring-primary-400/20 transition-all duration-300"
                      placeholder="+91 98765 43210"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="project_type"
                      className="block text-xs font-label tracking-[0.06em] uppercase text-foreground-700 mb-2"
                    >
                      Project Type
                    </label>
                    <select
                      id="project_type"
                      name="project_type"
                      className="w-full px-4 py-3 text-sm font-body bg-background-50 border border-secondary-200/60 rounded-md text-foreground-800 focus:outline-none focus:border-primary-400/50 focus:ring-1 focus:ring-primary-400/20 transition-all duration-300 appearance-none cursor-pointer"
                    >
                      <option value="">Select project type</option>
                      <option value="residential">Residential — Villa / Home</option>
                      <option value="hospitality">Hospitality — Resort / Hotel</option>
                      <option value="commercial">Commercial — Office / Retail</option>
                      <option value="interior">Interior Design Only</option>
                      <option value="landscape">Landscape Architecture</option>
                      <option value="renovation">Renovation / Remodel</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-xs font-label tracking-[0.06em] uppercase text-foreground-700 mb-2"
                    >
                      Your Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      maxLength={500}
                      className="w-full px-4 py-3 text-sm font-body bg-background-50 border border-secondary-200/60 rounded-md text-foreground-800 placeholder:text-secondary-400 focus:outline-none focus:border-primary-400/50 focus:ring-1 focus:ring-primary-400/20 transition-all duration-300 resize-none"
                      placeholder="Tell us about your project, vision, timeline, and any specific requirements..."
                    />
                    <p className="text-[10px] font-body text-secondary-400 mt-1 text-right">
                      Max 500 characters
                    </p>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-luxury w-full sm:w-auto px-9 py-3.5 bg-primary-500 text-background-50 text-sm font-label font-semibold tracking-wide rounded-md hover:bg-primary-600 transition-all duration-500 hover:shadow-[0_0_32px_rgba(166,124,82,0.35)] active:scale-[0.97] disabled:opacity-60 disabled:cursor-not-allowed whitespace-nowrap"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center gap-2">
                        <span className="w-4 h-4 border-2 border-background-50/30 border-t-background-50 rounded-full animate-spin" />
                        Sending...
                      </span>
                    ) : (
                      "Send Message"
                    )}
                  </button>

                  {/* Status Messages */}
                  {formStatus === "success" && (
                    <div className="p-4 bg-green-50/60 border border-green-200/40 rounded-md">
                      <p className="text-sm font-body text-green-800 flex items-center gap-2">
                        <i className="ri-checkbox-circle-line text-lg" />
                        Thank you! Your message has been sent. We'll get back to you within 24 hours.
                      </p>
                    </div>
                  )}
                  {formStatus === "error" && (
                    <div className="p-4 bg-red-50/60 border border-red-200/40 rounded-md">
                      <p className="text-sm font-body text-red-800">{formError}</p>
                    </div>
                  )}
                </form>
              </div>

              {/* Contact Info Sidebar */}
              <div className="w-full lg:w-[45%]">
                <span className="text-xs font-body tracking-[0.15em] uppercase text-primary-500">
                  Connect
                </span>
                <h2 className="font-heading text-3xl md:text-4xl font-light text-foreground-950 mt-2 mb-8">
                  Visit Us.
                </h2>

                {/* Quick Actions */}
                <div className="space-y-4 mb-10">
                  <a
                    href="https://wa.me/918041234567"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 bg-green-50/50 border border-green-200/30 rounded-lg hover:bg-green-50 transition-colors duration-300 group"
                  >
                    <div className="w-11 h-11 flex items-center justify-center rounded-full bg-green-500 text-background-50 shrink-0">
                      <i className="ri-whatsapp-line text-xl" />
                    </div>
                    <div>
                      <p className="text-sm font-label font-semibold text-foreground-900">WhatsApp</p>
                      <p className="text-xs font-body text-secondary-500">Chat with us directly</p>
                    </div>
                    <i className="ri-arrow-right-up-line ml-auto text-secondary-400 group-hover:text-green-600 transition-colors" />
                  </a>

                  <a
                    href="tel:+918041234567"
                    className="flex items-center gap-4 p-4 bg-primary-50/30 border border-primary-200/30 rounded-lg hover:bg-primary-50/50 transition-colors duration-300 group"
                  >
                    <div className="w-11 h-11 flex items-center justify-center rounded-full bg-primary-500 text-background-50 shrink-0">
                      <i className="ri-phone-line text-xl" />
                    </div>
                    <div>
                      <p className="text-sm font-label font-semibold text-foreground-900">Call Us</p>
                      <p className="text-xs font-body text-secondary-500">+91 80 4123 4567</p>
                    </div>
                    <i className="ri-arrow-right-up-line ml-auto text-secondary-400 group-hover:text-primary-500 transition-colors" />
                  </a>

                  <a
                    href="mailto:studio@sanctuaryarchitects.in"
                    className="flex items-center gap-4 p-4 bg-secondary-50/60 border border-secondary-200/30 rounded-lg hover:bg-secondary-100/50 transition-colors duration-300 group"
                  >
                    <div className="w-11 h-11 flex items-center justify-center rounded-full bg-foreground-800 text-background-50 shrink-0">
                      <i className="ri-mail-line text-xl" />
                    </div>
                    <div>
                      <p className="text-sm font-label font-semibold text-foreground-900">Email</p>
                      <p className="text-xs font-body text-secondary-500">studio@sanctuaryarchitects.in</p>
                    </div>
                    <i className="ri-arrow-right-up-line ml-auto text-secondary-400 group-hover:text-foreground-800 transition-colors" />
                  </a>
                </div>

                {/* Address */}
                <div className="mb-10">
                  <h3 className="text-xs font-label tracking-[0.1em] uppercase text-foreground-800 mb-3">
                    Studio Address
                  </h3>
                  <address className="not-italic text-sm font-body text-secondary-600 leading-relaxed">
                    42, Lavelle Road,
                    <br />
                    Bangalore — 560001
                    <br />
                    Karnataka, India
                  </address>
                </div>

                {/* Business Hours */}
                <div className="mb-10">
                  <h3 className="text-xs font-label tracking-[0.1em] uppercase text-foreground-800 mb-3">
                    Business Hours
                  </h3>
                  <div className="space-y-2 text-sm font-body text-secondary-600">
                    <div className="flex justify-between">
                      <span>Monday — Friday</span>
                      <span className="text-foreground-800">9:30 AM — 6:30 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday</span>
                      <span className="text-foreground-800">10:00 AM — 4:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday</span>
                      <span className="text-secondary-400">Closed</span>
                    </div>
                  </div>
                </div>

                {/* Social */}
                <div>
                  <h3 className="text-xs font-label tracking-[0.1em] uppercase text-foreground-800 mb-3">
                    Follow Us
                  </h3>
                  <div className="flex gap-3">
                    {[
                      { icon: "ri-instagram-line", label: "Instagram", href: "https://instagram.com/sanctuaryarchitects" },
                      { icon: "ri-linkedin-line", label: "LinkedIn", href: "https://linkedin.com/company/sanctuaryarchitects" },
                      { icon: "ri-facebook-line", label: "Facebook", href: "#" },
                      { icon: "ri-pinterest-line", label: "Pinterest", href: "#" },
                      { icon: "ri-youtube-line", label: "YouTube", href: "#" },
                    ].map((social) => (
                      <a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={social.label}
                        className="w-10 h-10 flex items-center justify-center rounded-md border border-secondary-200/50 text-secondary-500 hover:text-primary-500 hover:border-primary-300/30 hover:bg-primary-50/20 transition-all duration-300 hover:-translate-y-0.5"
                      >
                        <i className={`${social.icon} text-lg`} />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Google Maps */}
        <section className="bg-background-100">
          <div className="w-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.0!2d77.5946!3d12.9716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU4JzE3LjgiTiA3N8KwMzUnNDAuNiJF!5e0!3m2!1sen!2sin!4v1600000000000"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Sanctuary Architects Studio — Lavelle Road, Bangalore"
              className="w-full"
            />
          </div>
        </section>

        <PageCTA />
      </main>
      <Footer />
    </div>
  );
}