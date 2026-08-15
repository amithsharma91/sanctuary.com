import PageLayout from "@/components/feature/PageLayout";
import PageHero from "@/components/feature/PageHero";
import PageCTA from "@/components/feature/PageCTA";
import PageMeta from "@/components/feature/PageMeta";

const sections = [
  {
    title: "1. What Are Cookies?",
    content:
      "Cookies are small text files that are placed on your device when you visit a website. They are widely used to make websites work more efficiently, provide a better user experience, and give website owners information about how their site is being used. Cookies may be 'session' cookies (deleted when you close your browser) or 'persistent' cookies (remain on your device for a set period).",
  },
  {
    title: "2. How We Use Cookies",
    content:
      "Sanctuary Architects & Designers uses cookies and similar tracking technologies for the following purposes:\n\n\u2022 Essential Cookies: Required for the website to function properly, including navigation, form submissions, and security features.\n\u2022 Analytics Cookies: Help us understand how visitors interact with our website by collecting anonymous usage data through tools such as Google Analytics.\n\u2022 Functional Cookies: Remember your preferences and choices to provide an enhanced browsing experience.\n\u2022 Performance Cookies: Monitor website performance and identify technical issues to ensure smooth operation.",
  },
  {
    title: "3. Types of Cookies We Use",
    content:
      "First-Party Cookies: Set by our website directly. These include session cookies for form handling and preference cookies for your browsing experience.\n\nThird-Party Cookies: Set by external services we use, including:\n\u2022 Google Analytics: Collects anonymous traffic data to help us understand visitor patterns.\n\u2022 Google Maps: May set cookies when the embedded map is loaded on our contact page.\n\u2022 Social Media: Our social media links may set cookies if you interact with them.\n\nWe do not use cookies for advertising, retargeting, or behavioral tracking.",
  },
  {
    title: "4. Cookie Duration",
    content:
      "Session cookies are temporary and are deleted when you close your browser. Persistent cookies remain on your device for varying periods: analytics cookies typically persist for up to 2 years, while preference cookies may last for shorter durations. You can view and manage cookie storage through your browser settings at any time.",
  },
  {
    title: "5. Managing Cookies",
    content:
      "You have full control over cookie settings through your web browser. Most browsers allow you to:\n\n\u2022 View all cookies stored on your device\n\u2022 Delete individual cookies or all cookies\n\u2022 Block cookies from specific websites\n\u2022 Block all cookies by default\n\u2022 Set preferences for different types of cookies\n\nPlease note that disabling essential cookies may affect the functionality of our website. Instructions for managing cookies vary by browser. Check your browser's help documentation for specific steps.",
  },
  {
    title: "6. Analytics & Google Services",
    content:
      "We use Google Analytics to understand how visitors engage with our website. Google Analytics uses cookies to collect anonymous information such as page views, time spent on pages, and general geographic location. This data helps us improve our content and user experience. Google's privacy policy and data processing terms apply to their services. You can opt out of Google Analytics tracking by installing the Google Analytics Opt-out Browser Add-on.",
  },
  {
    title: "7. Your Consent",
    content:
      "By continuing to use our website, you consent to the placement of cookies on your device as described in this Cookie Policy. You may withdraw your consent at any time by deleting cookies through your browser settings and adjusting your cookie preferences. If you choose to block cookies, some features of our website may not function as intended.",
  },
  {
    title: "8. Updates to This Policy",
    content:
      "We may update this Cookie Policy from time to time to reflect changes in our practices, technology, or legal requirements. The updated version will be posted on this page with the 'Last Updated' date revised accordingly.",
  },
  {
    title: "9. Contact Us",
    content:
      "If you have any questions about our use of cookies or this Cookie Policy, please contact:\n\nSanctuary Architects & Designers\n31, 4th Cross Road, 8th A Main Rd, Vinayaka Nagar, Sadashiva Nagar, Bengaluru, Karnataka 560080, India\nEmail: anshul@sanctuaryarch.com\nPhone: +91 98450 03452",
  },
];

export default function CookiePolicy() {
  return (
    <PageLayout>
      <PageMeta
        title="Cookie Policy | Sanctuary Architects & Designers"
        description="Sanctuary Architects & Designers cookie policy — learn about the types of cookies we use, how we use them, and how you can manage your cookie preferences."
        canonicalPath="/cookie-policy"
      />
      <main>
        <PageHero
          title="Cookie Policy"
          subtitle="Information about the cookies we use on our website, why we use them, and how you can manage your preferences."
          image="https://readdy.ai/api/search-image?query=Elegant%20minimalist%20interior%20detail%2C%20soft%20natural%20light%20on%20warm%20wood%20surface%2C%20clean%20architectural%20composition%2C%20calm%20serene%20atmosphere%2C%20sophisticated%20quiet%20space%2C%20editorial%20still%20life%20architectural%20photography%2C%20cream%20and%20beige%20palette%2C%20peaceful%20contemplative%20mood&width=1920&height=1080&seq=cookie-hero&orientation=landscape"
          breadcrumb={[{ label: "Cookie Policy" }]}
        />

        <section className="py-20 md:py-28 bg-background-50">
          <div className="w-full px-6 md:px-10 lg:px-14">
            <div className="max-w-3xl mx-auto">
              <p className="text-sm font-body text-secondary-500 mb-8">
                Last Updated: August 3, 2026
              </p>

              <div className="space-y-10">
                {sections.map((section) => (
                  <div key={section.title}>
                    <h2 className="font-heading text-xl md:text-2xl font-light text-foreground-950 mb-3">
                      {section.title}
                    </h2>
                    <p className="text-sm md:text-base font-body text-secondary-600 leading-relaxed whitespace-pre-line">
                      {section.content}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <PageCTA />
      </main>
    </PageLayout>
  );
}