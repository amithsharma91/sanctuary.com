import { useState } from "react";
import Navbar from "@/components/feature/Navbar";
import Footer from "@/components/feature/Footer";
import PageHero from "@/components/feature/PageHero";
import PageCTA from "@/components/feature/PageCTA";
import PageMeta from "@/components/feature/PageMeta";
import { buildBreadcrumbSchema } from "@/utils/seo";

const contactSchema = [
  {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": "https://www.sanctuaryarch.com/contact",
    url: "https://www.sanctuaryarch.com/contact",
    name: "Sanctuary Architects & Designers",
  description:
    "Luxury architecture and interior design studio based in Bangalore, crafting timeless residential, hospitality, and commercial spaces since 2003.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "31, 4th Cross Road, 8th A Main Rd, Vinayaka Nagar, Sadashiva Nagar",
    addressLocality: "Bengaluru",
    addressRegion: "Karnataka",
    postalCode: "560080",
    addressCountry: "IN",
  },
  telephone: "+919845003452",
  email: "anshul@sanctuaryarch.com",
  geo: {
    "@type": "GeoCoordinates",
    latitude: "13.0067",
    longitude: "77.5873",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:30",
      closes: "18:30",
    },
  ],
  sameAs: [
    "https://www.instagram.com/sanctuaryarchi2",
    "https://www.linkedin.com/in/anshul-chodha-a354b528",
    "https://www.facebook.com/share/1D9hzXDumo/",
    "https://www.justdial.com/Bangalore/Sanctuary-Architects-Designers-Binny-Crescent-Benson-Town-Benson-Town/080PXX80-XX80-181009135821-E2H9_BZDET",
  ],
  },
  buildBreadcrumbSchema([{ name: "Home", path: "/" }, { name: "Contact" }]),
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    service: "",
    location: "",
    budget: "",
    brief: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (touched[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setTouched((prev) => ({ ...prev, [e.target.name]: true }));
  };

  const validate = () => {
    const next: Record<string, string> = {};
    if (!formData.fullName.trim()) next.fullName = "Please enter your full name.";
    if (!formData.phone.trim()) next.phone = "Please enter your phone number.";
    if (!formData.email.trim()) next.email = "Please enter your email address.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) next.email = "Please enter a valid email address.";
    if (!formData.service) next.service = "Please select a service.";
    if (!formData.location.trim()) next.location = "Please enter the project location.";
    if (!formData.budget) next.budget = "Please select a budget range.";
    if (!formData.brief.trim()) next.brief = "Please describe your project brief.";
    return next;
  };

  const handleWhatsApp = () => {
    const validationErrors = validate();
    setErrors(validationErrors);
    setTouched({
      fullName: true, phone: true, email: true, service: true,
      location: true, budget: true, brief: true,
    });

    if (Object.keys(validationErrors).length > 0) {
      const firstErrorField = Object.keys(validationErrors)[0];
      const el = document.getElementById(firstErrorField);
      if (el) el.focus();
      return;
    }

    const message = `Hello SANCTUARY ARCHITECTS & DESIGNERS!\n\nI am interested in your\narchitecture services.\nHere are my details:\n\nName: ${formData.fullName}\nPhone: ${formData.phone}\nEmail: ${formData.email}\nService: ${formData.service}\nLocation: ${formData.location}\nBudget: ${formData.budget}\n\nProject Brief:\n${formData.brief}\n\nI found you through my website.\nLooking forward to hearing from you.`;

    const url = `https://wa.me/919845003452?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <div className="relative bg-background-50">
      <PageMeta
        title="Contact Sanctuary Architects & Designers | Bangalore"
        description="Get in touch with Sanctuary Architects & Designers in Bengaluru. Book a consultation, visit our studio in Sadashiva Nagar, call +91 98450 03452, or WhatsApp us to discuss your architecture project."
        keywords="contact architects Bengaluru, luxury architecture consultation, interior design enquiry, Sanctuary Architects contact, book architecture consultation"
        ogImage="https://res.cloudinary.com/dnyvkptxb/image/upload/v1786620568/DSC02071_Large_z4brnd.jpg"
        schema={contactSchema}
        canonicalPath="/contact"
      />
      <Navbar />
      <main>
        <PageHero
          title="Let's Talk."
          subtitle="Every great project begins with a conversation. Reach out to discuss your vision — we'd love to hear from you."
          image="https://res.cloudinary.com/dnyvkptxb/image/upload/v1786620568/DSC02071_Large_z4brnd.jpg"
          breadcrumb={[{ label: "Contact" }]}
        />

        <section className="py-20 md:py-28 bg-background-50">
          <div className="w-full px-6 md:px-10 lg:px-14">
            <div className="flex flex-col lg:flex-row gap-14 lg:gap-20 max-w-6xl mx-auto">
              {/* WhatsApp Enquiry Form */}
              <div className="w-full lg:w-[55%]">
                <span className="text-xs font-body tracking-[0.15em] uppercase text-primary-500">
                  Enquiry
                </span>
                <h2 className="font-heading text-3xl md:text-4xl font-light text-foreground-950 mt-2 mb-8">
                  Send Us a Message.
                </h2>

                <form noValidate className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="fullName"
                        className="block text-xs font-label tracking-[0.06em] uppercase text-foreground-700 mb-2"
                      >
                        Full Name <span className="text-primary-500">*</span>
                      </label>
                      <input
                        id="fullName"
                        name="fullName"
                        type="text"
                        value={formData.fullName}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className="w-full px-4 py-3 text-sm font-body bg-background-50 border border-secondary-200/60 rounded-md text-foreground-800 placeholder:text-secondary-400 focus:outline-none focus:border-primary-400/50 focus:ring-1 focus:ring-primary-400/20 transition-all duration-300"
                        placeholder="Your full name"
                      />
                      {touched.fullName && errors.fullName && (
                        <p className="text-xs font-body text-red-600 mt-1.5">{errors.fullName}</p>
                      )}
                    </div>
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-xs font-label tracking-[0.06em] uppercase text-foreground-700 mb-2"
                      >
                        Phone Number <span className="text-primary-500">*</span>
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className="w-full px-4 py-3 text-sm font-body bg-background-50 border border-secondary-200/60 rounded-md text-foreground-800 placeholder:text-secondary-400 focus:outline-none focus:border-primary-400/50 focus:ring-1 focus:ring-primary-400/20 transition-all duration-300"
                        placeholder="Your phone number"
                      />
                      {touched.phone && errors.phone && (
                        <p className="text-xs font-body text-red-600 mt-1.5">{errors.phone}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs font-label tracking-[0.06em] uppercase text-foreground-700 mb-2"
                    >
                      Email Address <span className="text-primary-500">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className="w-full px-4 py-3 text-sm font-body bg-background-50 border border-secondary-200/60 rounded-md text-foreground-800 placeholder:text-secondary-400 focus:outline-none focus:border-primary-400/50 focus:ring-1 focus:ring-primary-400/20 transition-all duration-300"
                      placeholder="your@email.com"
                    />
                    {touched.email && errors.email && (
                      <p className="text-xs font-body text-red-600 mt-1.5">{errors.email}</p>
                    )}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="service"
                        className="block text-xs font-label tracking-[0.06em] uppercase text-foreground-700 mb-2"
                      >
                        Service Required <span className="text-primary-500">*</span>
                      </label>
                      <div className="relative">
                        <select
                          id="service"
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          className="w-full px-4 py-3 text-sm font-body bg-background-50 border border-secondary-200/60 rounded-md text-foreground-800 focus:outline-none focus:border-primary-400/50 focus:ring-1 focus:ring-primary-400/20 transition-all duration-300 appearance-none cursor-pointer"
                        >
                          <option value="">Select a service</option>
                          <option value="Residential Architecture">Residential Architecture</option>
                          <option value="Interior Design">Interior Design</option>
                          <option value="Renovation">Renovation</option>
                          <option value="Convention Hall">Convention Hall</option>
                          <option value="Commercial">Commercial</option>
                          <option value="Consultation Only">Consultation Only</option>
                        </select>
                        <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-secondary-400">
                          <i className="ri-arrow-down-s-line" />
                        </span>
                      </div>
                      {touched.service && errors.service && (
                        <p className="text-xs font-body text-red-600 mt-1.5">{errors.service}</p>
                      )}
                    </div>
                    <div>
                      <label
                        htmlFor="location"
                        className="block text-xs font-label tracking-[0.06em] uppercase text-foreground-700 mb-2"
                      >
                        Project Location <span className="text-primary-500">*</span>
                      </label>
                      <input
                        id="location"
                        name="location"
                        type="text"
                        value={formData.location}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className="w-full px-4 py-3 text-sm font-body bg-background-50 border border-secondary-200/60 rounded-md text-foreground-800 placeholder:text-secondary-400 focus:outline-none focus:border-primary-400/50 focus:ring-1 focus:ring-primary-400/20 transition-all duration-300"
                        placeholder="Area and city"
                      />
                      {touched.location && errors.location && (
                        <p className="text-xs font-body text-red-600 mt-1.5">{errors.location}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="budget"
                      className="block text-xs font-label tracking-[0.06em] uppercase text-foreground-700 mb-2"
                    >
                      Budget Range <span className="text-primary-500">*</span>
                    </label>
                    <div className="relative">
                      <select
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className="w-full px-4 py-3 text-sm font-body bg-background-50 border border-secondary-200/60 rounded-md text-foreground-800 focus:outline-none focus:border-primary-400/50 focus:ring-1 focus:ring-primary-400/20 transition-all duration-300 appearance-none cursor-pointer"
                      >
                        <option value="">Select a budget range</option>
                        <option value="Below 25 Lakhs">Below 25 Lakhs</option>
                        <option value="25 Lakhs to 50 Lakhs">25 Lakhs to 50 Lakhs</option>
                        <option value="50 Lakhs to 1 Crore">50 Lakhs to 1 Crore</option>
                        <option value="1 Crore to 3 Crores">1 Crore to 3 Crores</option>
                        <option value="3 Crores to 5 Crores">3 Crores to 5 Crores</option>
                        <option value="Above 5 Crores">Above 5 Crores</option>
                        <option value="Prefer to Discuss">Prefer to Discuss</option>
                      </select>
                      <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-secondary-400">
                        <i className="ri-arrow-down-s-line" />
                      </span>
                    </div>
                    {touched.budget && errors.budget && (
                      <p className="text-xs font-body text-red-600 mt-1.5">{errors.budget}</p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="brief"
                      className="block text-xs font-label tracking-[0.06em] uppercase text-foreground-700 mb-2"
                    >
                      Project Brief <span className="text-primary-500">*</span>
                    </label>
                    <textarea
                      id="brief"
                      name="brief"
                      value={formData.brief}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      rows={5}
                      maxLength={500}
                      className="w-full px-4 py-3 text-sm font-body bg-background-50 border border-secondary-200/60 rounded-md text-foreground-800 placeholder:text-secondary-400 focus:outline-none focus:border-primary-400/50 focus:ring-1 focus:ring-primary-400/20 transition-all duration-300 resize-none"
                      placeholder="Tell us about your project vision, requirements and timeline"
                    />
                    <p className="text-[10px] font-body text-secondary-400 mt-1 text-right">
                      Max 500 characters
                    </p>
                    {touched.brief && errors.brief && (
                      <p className="text-xs font-body text-red-600 mt-1.5">{errors.brief}</p>
                    )}
                  </div>

                  <button
                    type="button"
                    onClick={handleWhatsApp}
                    className="w-full py-3.5 px-6 rounded-md text-sm font-label font-semibold tracking-wide text-white bg-[#25D366] hover:bg-[#1DA851] focus:outline-none focus:ring-2 focus:ring-[#25D366]/40 transition-all duration-300 flex items-center justify-center gap-3 whitespace-nowrap"
                  >
                    <i className="ri-whatsapp-line text-lg" />
                    Send Enquiry on WhatsApp
                  </button>

                  <p className="text-xs font-body text-secondary-500 text-center">
                    Your details will be sent directly to our WhatsApp.
                    We typically respond within 2 hours during business hours.
                  </p>
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
                    href="https://wa.me/919845003452"
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
                    href="tel:+919845003452"
                    className="flex items-center gap-4 p-4 bg-primary-50/30 border border-primary-200/30 rounded-lg hover:bg-primary-50/50 transition-colors duration-300 group"
                  >
                    <div className="w-11 h-11 flex items-center justify-center rounded-full bg-primary-500 text-background-50 shrink-0">
                      <i className="ri-phone-line text-xl" />
                    </div>
                    <div>
                      <p className="text-sm font-label font-semibold text-foreground-900">Call Us</p>
                      <p className="text-xs font-body text-secondary-500">+91 98450 03452</p>
                    </div>
                    <i className="ri-arrow-right-up-line ml-auto text-secondary-400 group-hover:text-primary-500 transition-colors" />
                  </a>

                  <a
                    href="mailto:anshul@sanctuaryarch.com"
                    className="flex items-center gap-4 p-4 bg-secondary-50/60 border border-secondary-200/30 rounded-lg hover:bg-secondary-100/50 transition-colors duration-300 group"
                  >
                    <div className="w-11 h-11 flex items-center justify-center rounded-full bg-foreground-800 text-background-50 shrink-0">
                      <i className="ri-mail-line text-xl" />
                    </div>
                    <div>
                      <p className="text-sm font-label font-semibold text-foreground-900">Email</p>
                      <p className="text-xs font-body text-secondary-500">anshul@sanctuaryarch.com</p>
                    </div>
                    <i className="ri-arrow-right-up-line ml-auto text-secondary-400 group-hover:text-foreground-800 transition-colors" />
                  </a>
                </div>

                {/* Address */}
                <div className="mb-10">
                  <h3 className="text-xs font-label tracking-[0.1em] uppercase text-foreground-800 mb-3">
                    Studio Address
                  </h3>
                  <a
                    href="https://maps.app.goo.gl/rL2VxCuU7ZfoKWDq5?g_st=ac"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="not-italic text-sm font-body text-secondary-600 hover:text-primary-500 transition-colors duration-300 leading-relaxed block"
                  >
                    31, 4th Cross Road, 8th A Main Rd,
                    <br />
                    Vinayaka Nagar, Sadashiva Nagar,
                    <br />
                    Bengaluru, Karnataka 560080
                  </a>
                </div>

                {/* Business Hours */}
                <div className="mb-10">
                  <h3 className="text-xs font-label tracking-[0.1em] uppercase text-foreground-800 mb-3">
                    Business Hours
                  </h3>
                  <div className="space-y-2 text-sm font-body text-secondary-600">
                    <div className="flex justify-between">
                    <span>Monday – Friday</span>
                    <span className="text-foreground-800">9:30 AM – 6:30 PM</span>
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
                      { icon: "ri-instagram-line", label: "Instagram", href: "https://www.instagram.com/sanctuaryarchi2?igsh=dXlubWpraWg2cG16" },
                      { icon: "ri-linkedin-line", label: "LinkedIn", href: "https://www.linkedin.com/in/anshul-chodha-a354b528?utm_source=share_via&utm_content=profile&utm_medium=member_android" },
                      { icon: "ri-facebook-line", label: "Facebook", href: "https://www.facebook.com/share/1D9hzXDumo/" },
                      { icon: "ri-store-2-line", label: "Justdial", href: "https://www.justdial.com/Bangalore/Sanctuary-Architects-Designers-Binny-Crescent-Benson-Town-Benson-Town/080PXX80-XX80-181009135821-E2H9_BZDET" },
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
          <div className="w-full border-t border-secondary-200/40 overflow-hidden">
            <iframe
              src="https://www.google.com/maps?q=2H5J%2BQ7%20Bengaluru%2C%20Karnataka&z=16&output=embed"
              width="100%"
              height="400"
              style={{ border: 0, filter: "saturate(0.88)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Sanctuary Architects Studio — 2H5J+Q7 Bengaluru, Karnataka"
              className="w-full"
            />
          </div>
        </section>

        {/* Careers Section */}
        <section className="py-20 md:py-24 bg-background-50 border-t border-secondary-200/30">
          <div className="w-full px-6 md:px-10 lg:px-14">
            <div className="max-w-3xl mx-auto text-center">
              <span className="text-xs font-body tracking-[0.15em] uppercase text-primary-500">
                Careers
              </span>
              <h2 className="font-heading text-3xl md:text-5xl font-light text-foreground-950 mt-3 mb-6 leading-[1.1]">
                Interested in Working With Sanctuary?
              </h2>
              <p className="text-sm md:text-base font-body text-secondary-600 leading-relaxed mb-4 max-w-2xl mx-auto">
                If you would like to be considered for future opportunities, internships, collaborations, or relevant positions at Sanctuary Architects &amp; Designers, please send your portfolio and CV to the email address provided below.
              </p>
              <p className="text-sm font-body text-primary-600 mb-8">
                anshul@sanctuaryarch.com
              </p>
              <a
                href="mailto:anshul@sanctuaryarch.com"
                className="btn-luxury inline-flex items-center gap-2 px-8 py-3 bg-primary-500 text-background-50 text-sm font-label font-semibold tracking-wide rounded-md hover:bg-primary-600 transition-all duration-500 hover:shadow-[0_0_28px_rgba(166,124,82,0.30)] active:scale-[0.97] whitespace-nowrap"
              >
                Send Your Portfolio
                <i className="ri-mail-send-line" />
              </a>
            </div>
          </div>
        </section>

        <PageCTA />
      </main>
      <Footer />
    </div>
  );
}