// Centralized Schema.org structured data for Sanctuary Architects & Designers.
// Static data objects (no functions) rendered into the app as JSON-LD.

import {
  SITE_URL,
  SITE_NAME,
  DEFAULT_OG_IMAGE,
} from "@/utils/seo";

const ADDRESS = {
  "@type": "PostalAddress",
  streetAddress:
    "31, 4th Cross Road, 8th A Main Rd, Vinayaka Nagar, Sadashiva Nagar",
  addressLocality: "Bengaluru",
  addressRegion: "Karnataka",
  postalCode: "560080",
  addressCountry: "IN",
};

const CONTACT = {
  telephone: "+919845003452",
  email: "anshul@sanctuaryarch.com",
};

const SAME_AS = [
  "https://www.instagram.com/sanctuaryarchi2?igsh=dXlubWpraWg2cG16",
  "https://www.linkedin.com/in/anshul-chodha-a354b528?utm_source=share_via&utm_content=profile&utm_medium=member_android",
  "https://www.facebook.com/share/1D9hzXDumo/",
  "https://www.justdial.com/Bangalore/Sanctuary-Architects-Designers-Binny-Crescent-Benson-Town-Benson-Town/080PXX80-XX80-181009135821-E2H9_BZDET",
];

const LOGO_IMAGE =
  "https://storage.helloreaddy.io/project_files/76dce7c4-6caa-4272-98e8-4149c442ecfc/e2f8a5e4-fa2a-4830-bacb-5677e69921b9_compressed_20854-removebg-preview-1.webp";

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE_NAME,
  url: SITE_URL,
  description:
    "Architects and interior designers in Bangalore since 2003 — Sanctuary Architects & Designers craft timeless residential, hospitality, commercial and prefab architecture across India.",
  publisher: {
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
  },
};

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE_NAME,
  url: SITE_URL,
  logo: LOGO_IMAGE,
  image: DEFAULT_OG_IMAGE,
  description:
    "Architecture and interior design studio in Bangalore crafting timeless residential, hospitality and commercial spaces since 2003.",
  foundingDate: "2003",
  founder: {
    "@type": "Person",
    name: "Anshul Chodha",
    jobTitle: "Principal Architect",
  },
  address: ADDRESS,
  contactPoint: {
    "@type": "ContactPoint",
    telephone: CONTACT.telephone,
    email: CONTACT.email,
    contactType: "customer service",
    availableLanguage: ["English", "Hindi", "Kannada"],
  },
  sameAs: SAME_AS,
};

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${SITE_URL}/#localbusiness`,
  name: SITE_NAME,
  url: SITE_URL,
  image: DEFAULT_OG_IMAGE,
  logo: LOGO_IMAGE,
  description:
    "Architecture and interior design studio in Bangalore — residential, hospitality, commercial and prefab projects since 2003.",
  telephone: CONTACT.telephone,
  email: CONTACT.email,
  foundingDate: "2003",
  address: ADDRESS,
  geo: {
    "@type": "GeoCoordinates",
    latitude: "13.0067",
    longitude: "77.5873",
  },
  hasMap: "https://maps.app.goo.gl/rL2VxCuU7ZfoKWDq5?g_st=ac",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:30",
      closes: "18:30",
    },
  ],
  priceRange: "\u20B9\u20B9\u20B9",
  sameAs: SAME_AS,
};

export const siteWideSchemas = [websiteSchema, organizationSchema, localBusinessSchema];

export const servicesSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Services \u2014 Sanctuary Architects & Designers",
  description:
    "Architecture and interior design services offered by Sanctuary Architects & Designers in Bangalore.",
  itemListElement: [
    {
      "@type": "Service",
      position: 1,
      name: "Architecture Design",
      description:
        "Comprehensive architectural design from concept to completion, balancing aesthetics with structural integrity and context sensitivity.",
      provider: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
      areaServed: { "@type": "Country", name: "India" },
    },
    {
      "@type": "Service",
      position: 2,
      name: "Interior Design",
      description:
        "Bespoke interior environments that reflect your personality, lifestyle, and aspirations with curated materiality and thoughtful detailing.",
      provider: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
      areaServed: { "@type": "Country", name: "India" },
    },
    {
      "@type": "Service",
      position: 3,
      name: "Commercial Design",
      description:
        "Office towers, retail spaces, and mixed-use developments designed for productivity, brand identity, and growth.",
      provider: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
      areaServed: { "@type": "Country", name: "India" },
    },
    {
      "@type": "Service",
      position: 4,
      name: "Hospitality Design",
      description:
        "Hotels, resorts, and F&B spaces that create memorable guest experiences through immersive design storytelling.",
      provider: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
      areaServed: { "@type": "Country", name: "India" },
    },
    {
      "@type": "Service",
      position: 5,
      name: "Master Planning",
      description:
        "Large-scale urban and landscape planning that creates cohesive, sustainable communities for future generations.",
      provider: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
      areaServed: { "@type": "Country", name: "India" },
    },
    {
      "@type": "Service",
      position: 6,
      name: "Prefab Projects",
      description:
        "Prefabricated modular structures designed for portability, sustainability, and speed.",
      provider: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
      areaServed: { "@type": "Country", name: "India" },
    },
  ],
};