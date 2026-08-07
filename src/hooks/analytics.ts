/**
 * Analytics Ready — Placeholder for Google Analytics / GTM / Meta Pixel.
 *
 * When you connect Google Analytics through the Readdy integration panel,
 * replace these empty stubs with the actual tracking calls.
 *
 * Currently all tracking functions are no-ops — safe to call anywhere,
 * they simply don't send data until real IDs are configured.
 */

export function trackPageView(path: string) {
  // GA4: gtag('config', 'G-XXXXXXXXXX', { page_path: path });
  // GTM: dataLayer.push({ event: 'page_view', page: path });
  if (typeof window !== "undefined" && (window as any).gtag) {
    (window as any).gtag("config", (window as any).GA_MEASUREMENT_ID, {
      page_path: path,
    });
  }
}

export function trackEvent(
  action: string,
  category: string,
  label?: string,
  value?: number
) {
  // GA4: gtag('event', action, { event_category: category, event_label: label, value });
  if (typeof window !== "undefined" && (window as any).gtag) {
    (window as any).gtag("event", action, {
      event_category: category,
      event_label: label,
      value,
    });
  }
}

export function trackConversion(label: string) {
  trackEvent("conversion", "conversion", label);
}

export default { trackPageView, trackEvent, trackConversion };