import PageLayout from "@/components/feature/PageLayout";
import PageHero from "@/components/feature/PageHero";
import PageCTA from "@/components/feature/PageCTA";
import PageMeta from "@/components/feature/PageMeta";

const sections = [
  {
    title: "1. Information We Collect",
    content:
      "When you interact with Sanctuary Architects & Designers through our website, contact forms, or consultation bookings, we may collect personal information including your name, email address, phone number, project details, and any other information you voluntarily provide. We also automatically collect certain technical data such as your IP address, browser type, device information, and browsing behavior through cookies and similar technologies.",
  },
  {
    title: "2. How We Use Your Information",
    content:
      "We use the information we collect to respond to your enquiries, provide architectural and design services you request, send project updates and consultation confirmations, improve our website and services, comply with legal obligations, and communicate about our services if you have opted in to receive such communications. We will never sell, rent, or trade your personal information to third parties for their marketing purposes.",
  },
  {
    title: "3. Information Sharing & Disclosure",
    content:
      "We may share your information with trusted third-party service providers who assist us in operating our website and conducting our business — such as hosting providers, email services, and analytics platforms. These providers are contractually bound to protect your data and use it only for the services they provide to us. We may also disclose information when required by law or to protect our legal rights.",
  },
  {
    title: "4. Data Retention",
    content:
      "We retain your personal information only for as long as necessary to fulfill the purposes for which it was collected, including to satisfy any legal, accounting, or reporting requirements. Enquiry form submissions are retained for up to 2 years after your last interaction with us. Technical data collected through analytics is retained in accordance with the respective platform's policies.",
  },
  {
    title: "5. Your Rights",
    content:
      "Under applicable data protection laws in India, you have the right to access the personal data we hold about you, request correction of inaccurate data, request deletion of your data, object to processing of your data, request restriction of processing, and withdraw consent at any time. To exercise any of these rights, please contact us at studio@sanctuaryarchitects.in.",
  },
  {
    title: "6. Cookies & Tracking Technologies",
    content:
      "Our website uses cookies and similar tracking technologies to enhance your browsing experience, analyze website traffic, and understand where our visitors come from. You can control cookie preferences through your browser settings. Disabling certain cookies may affect website functionality. For detailed information, please see our Cookie Policy.",
  },
  {
    title: "7. Data Security",
    content:
      "We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction. These measures include encrypted data transmission (HTTPS), secure form submissions, access controls, and regular security reviews. However, no method of electronic transmission or storage is 100% secure.",
  },
  {
    title: "8. Third-Party Links",
    content:
      "Our website may contain links to third-party websites, including social media platforms and partner sites. We are not responsible for the privacy practices or content of these external sites. We encourage you to review the privacy policies of any third-party sites you visit.",
  },
  {
    title: "9. Children's Privacy",
    content:
      "Our website and services are not directed at individuals under the age of 18. We do not knowingly collect personal information from children. If we become aware that a child has provided us with personal data, we will take steps to delete such information.",
  },
  {
    title: "10. Changes to This Policy",
    content:
      "We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. The updated version will be posted on this page with the 'Last Updated' date revised accordingly. We encourage you to review this policy periodically.",
  },
  {
    title: "11. Contact Us",
    content:
      "If you have any questions about this Privacy Policy or our data practices, please contact us:\n\nSanctuary Architects & Designers\n42, Lavelle Road, Bangalore — 560001, India\nEmail: studio@sanctuaryarchitects.in\nPhone: +91 80 4123 4567",
  },
];

export default function PrivacyPolicy() {
  return (
    <PageLayout>
      <PageMeta
        title="Privacy Policy"
        description="Sanctuary Architects & Designers privacy policy — how we collect, use, and protect your personal information when you visit our website or use our services."
        canonicalPath="/privacy-policy"
      />
      <main>
        <PageHero
          title="Privacy Policy"
          subtitle="How we collect, use, and protect your information. Your trust is fundamental to our practice."
          image="https://readdy.ai/api/search-image?query=Elegant%20minimalist%20interior%20with%20soft%20natural%20light%2C%20warm%20neutral%20tones%2C%20clean%20architectural%20lines%2C%20calm%20serene%20atmosphere%2C%20sophisticated%20quiet%20space%2C%20editorial%20architectural%20photography%2C%20cream%20and%20beige%20palette%2C%20peaceful%20contemplative%20mood&width=1920&height=1080&seq=privacy-hero&orientation=landscape"
          breadcrumb={[{ label: "Privacy Policy" }]}
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