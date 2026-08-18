import { useEffect } from "react";
import {
  SITE_URL,
  SITE_NAME,
  SITE_LOCALE,
  DEFAULT_OG_IMAGE,
  absoluteUrl,
} from "@/utils/seo";
import { setServerHead } from "./serverHead";

interface PageMetaProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  ogType?: "website" | "article";
  schema?: Record<string, unknown> | Record<string, unknown>[];
  canonicalPath?: string;
  robots?: string;
}

// Capture the static head defaults shipped in index.html so they can be
// restored whenever a page without PageMeta renders (404, thank-you, etc.).
const DEFAULT_TITLE = typeof document !== "undefined" ? document.title : "";
const DEFAULT_DESCRIPTION =
  typeof document !== "undefined"
    ? document.querySelector('meta[name="description"]')?.getAttribute("content") ?? ""
    : "";
const DEFAULT_CANONICAL =
  typeof document !== "undefined"
    ? document.querySelector('link[rel="canonical"]')?.getAttribute("href") ?? SITE_URL
    : "";

function upsertMeta(attr: "name" | "property", key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function upsertCanonical(href: string) {
  let el = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", "canonical");
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

function removeMeta(attr: "name" | "property", key: string) {
  const el = document.head.querySelector(`meta[${attr}="${key}"]`);
  if (el) el.remove();
}

function removeCanonical() {
  const el = document.head.querySelector('link[rel="canonical"]');
  if (el) el.remove();
}

function applyHead({
  title,
  description,
  keywords,
  ogImage,
  ogType,
  canonical,
  robots,
}: {
  title: string;
  description: string;
  keywords?: string;
  ogImage?: string;
  ogType: "website" | "article";
  canonical?: string;
  robots?: string;
}) {
  const image = ogImage || DEFAULT_OG_IMAGE;

  document.title = title;

  upsertMeta("name", "description", description);
  if (keywords) upsertMeta("name", "keywords", keywords);
  else removeMeta("name", "keywords");
  if (robots) upsertMeta("name", "robots", robots);
  else upsertMeta("name", "robots", "index, follow");

  if (canonical) {
    upsertCanonical(canonical);
    upsertMeta("property", "og:url", canonical);
  } else {
    removeCanonical();
    removeMeta("property", "og:url");
  }

  upsertMeta("property", "og:title", title);
  upsertMeta("property", "og:description", description);
  upsertMeta("property", "og:type", ogType);
  upsertMeta("property", "og:image", image);
  upsertMeta("property", "og:site_name", SITE_NAME);
  upsertMeta("property", "og:locale", SITE_LOCALE);

  upsertMeta("name", "twitter:card", "summary_large_image");
  upsertMeta("name", "twitter:title", title);
  upsertMeta("name", "twitter:description", description);
  upsertMeta("name", "twitter:image", image);
}

/**
 * Applies page-level head metadata (title, description, canonical, Open Graph,
 * Twitter Card) on mount and renders Schema.org JSON-LD. Head values revert to
 * the index.html defaults on unmount so no stale metadata leaks between routes.
 */
export default function PageMeta({
  title,
  description,
  keywords,
  ogImage,
  ogType = "website",
  schema,
  canonicalPath,
  robots,
}: PageMetaProps) {
  // On the server (static prerender) there is no document, so record the
  // resolved head values for scripts/prerender.mjs to inject into the HTML.
  if (typeof document === "undefined") {
    setServerHead({
      title: title || DEFAULT_TITLE,
      description: description || DEFAULT_DESCRIPTION,
      keywords,
      ogImage,
      ogType,
      canonical: canonicalPath ? absoluteUrl(canonicalPath) : undefined,
      robots: robots ?? (canonicalPath ? undefined : "noindex, follow"),
    });
  }

  useEffect(() => {
    try {
      const pageTitle = title || DEFAULT_TITLE;
      const pageDescription = description || DEFAULT_DESCRIPTION;
      // Only compute canonical when canonicalPath is actually provided
      const canonical = canonicalPath ? absoluteUrl(canonicalPath) : undefined;

      applyHead({
        title: pageTitle,
        description: pageDescription,
        keywords,
        ogImage,
        ogType,
        canonical,
        robots: robots ?? (canonicalPath ? undefined : "noindex, follow"),
      });

      return () => {
        try {
          applyHead({
            title: DEFAULT_TITLE,
            description: DEFAULT_DESCRIPTION,
            ogType: "website",
            canonical: DEFAULT_CANONICAL,
            robots: "index, follow",
          });
        } catch {
          // Silently ignore cleanup errors
        }
      };
    } catch {
      // Silently ignore head-manipulation errors so they never block rendering
    }
  }, [title, description, keywords, ogImage, ogType, canonicalPath, robots]);

  if (!schema) return null;

  const schemas = Array.isArray(schema) ? schema : [schema];

  return (
    <>
      {schemas.map((item, index) => (
        <script key={index} type="application/ld+json">
          {JSON.stringify(item)}
        </script>
      ))}
    </>
  );
}