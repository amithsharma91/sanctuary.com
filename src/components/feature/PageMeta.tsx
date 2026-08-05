import { useEffect } from "react";
import { useLocation } from "react-router-dom";

interface PageMetaProps {
  title: string;
  description: string;
  keywords?: string;
  ogImage?: string;
  ogType?: "website" | "article";
  schema?: Record<string, unknown>;
  canonicalPath?: string;
}

export default function PageMeta({
  title,
  description,
  keywords = "luxury architecture, interior design, Bangalore architects, residential design, Sanctuary Architects",
  ogImage,
  ogType = "website",
  schema,
  canonicalPath,
}: PageMetaProps) {
  const location = useLocation();

  useEffect(() => {
    const fullTitle = title.includes("Sanctuary")
      ? title
      : `${title} | Sanctuary Architects & Designers`;

    document.title = fullTitle;

    const setMeta = (name: string, content: string, property = false) => {
      const attr = property ? "property" : "name";
      let el = document.querySelector(`meta[${attr}="${name}"]`);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, name);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    setMeta("description", description);
    setMeta("keywords", keywords);
    setMeta("og:title", fullTitle, true);
    setMeta("og:description", description, true);
    setMeta("og:type", ogType, true);
    if (ogImage) setMeta("og:image", ogImage, true);
    setMeta("twitter:card", "summary_large_image");
    setMeta("twitter:title", fullTitle);
    setMeta("twitter:description", description);

    const basePath = (typeof __BASE_PATH__ !== "undefined" ? __BASE_PATH__ : "") || "";
    const fullCanonical = canonicalPath
      ? `${window.location.origin}${basePath}${canonicalPath}`
      : window.location.href.split("?")[0];
    let link = document.querySelector('link[rel="canonical"]');
    if (!link) {
      link = document.createElement("link");
      link.setAttribute("rel", "canonical");
      document.head.appendChild(link);
    }
    link.setAttribute("href", fullCanonical);

    // Schema.org structured data
    const existingScript = document.getElementById("page-schema");
    if (existingScript) existingScript.remove();

    if (schema) {
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.id = "page-schema";
      script.textContent = JSON.stringify(schema);
      document.head.appendChild(script);
    }

    return () => {
      // Cleanup page-specific schema on unmount
      const s = document.getElementById("page-schema");
      if (s) s.remove();
    };
  }, [title, description, keywords, ogImage, ogType, canonicalPath, schema, location.pathname]);

  return null;
}