// Centralized SEO constants and helpers for Sanctuary Architects & Designers.
// Single source of truth for the production domain used across canonical URLs,
// Open Graph, Twitter cards, structured data, sitemap and llms.txt.

export const SITE_URL = "https://www.sanctuaryarch.com";
export const SITE_NAME = "Sanctuary Architects & Designers";
export const SITE_LOCALE = "en_IN";
export const DEFAULT_OG_IMAGE =
  "https://res.cloudinary.com/dnyvkptxb/image/upload/v1786620569/LEVITATING_HOUSE_-_13_u0ygk7.jpg";

/** Builds an absolute production URL from a route path. */
export function absoluteUrl(path: string): string {
  if (!path) return SITE_URL;
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

export interface BreadcrumbItem {
  name: string;
  path?: string;
}

/** Builds a Schema.org BreadcrumbList from ordered { name, path? } items. */
export function buildBreadcrumbSchema(
  items: BreadcrumbItem[]
): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      ...(item.path ? { item: absoluteUrl(item.path) } : {}),
    })),
  };
}