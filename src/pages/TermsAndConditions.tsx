import PageLayout from "@/components/feature/PageLayout";
import PageHero from "@/components/feature/PageHero";
import PageCTA from "@/components/feature/PageCTA";
import PageMeta from "@/components/feature/PageMeta";

const sections = [
  {
    title: "1. Acceptance of Terms",
    content:
      "By accessing and using the Sanctuary Architects & Designers website (sanctuaryarchitects.in), you agree to be bound by these Terms & Conditions. If you do not agree with any part of these terms, please do not use our website. These terms apply to all visitors, clients, and others who access or use our website and services.",
  },
  {
    title: "2. Services",
    content:
      "Sanctuary Architects & Designers provides architectural design, interior design, landscape architecture, master planning, renovation, and consultation services. All services are subject to separate engagement agreements, scope of work documents, and fee proposals. Nothing on this website constitutes a binding offer to provide services.",
  },
  {
    title: "3. Intellectual Property",
    content:
      "All content on this website — including but not limited to photographs, project images, drawings, designs, text, graphics, logos, icons, and software — is the exclusive property of Sanctuary Architects & Designers or its content suppliers and is protected by Indian and international copyright laws. You may not reproduce, distribute, modify, display, or create derivative works of any content without our prior written consent.",
  },
  {
    title: "4. Project Photography & Portfolio",
    content:
      "Project photographs, renderings, and descriptions displayed on this website are representative of our work. All project images are either owned by Sanctuary Architects & Designers or used with the permission of the respective project owners and photographers. Unauthorized use of project images is strictly prohibited.",
  },
  {
    title: "5. Website Use",
    content:
      "You agree to use this website only for lawful purposes and in a manner that does not infringe upon the rights of others or restrict their use of the website. Prohibited activities include attempting to gain unauthorized access to our systems, transmitting malware, engaging in data scraping without permission, and using the website in any way that could damage, disable, or impair its functionality.",
  },
  {
    title: "6. Consultation & Contact Forms",
    content:
      "When you submit an enquiry through our contact or consultation forms, you agree to provide accurate and complete information. Submission of a form does not create a client-architect relationship. A formal engagement is established only through a signed agreement between you and Sanctuary Architects & Designers.",
  },
  {
    title: "7. Limitation of Liability",
    content:
      "Sanctuary Architects & Designers shall not be liable for any direct, indirect, incidental, consequential, or punitive damages arising from your use of this website or any information contained herein. While we strive to keep our content accurate and up to date, we make no warranties or representations about the completeness, accuracy, or reliability of the information on this website.",
  },
  {
    title: "8. Third-Party Links",
    content:
      "Our website may contain links to third-party websites and services that are not owned or controlled by Sanctuary Architects & Designers. We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party websites. You acknowledge and agree that we shall not be responsible for any damage or loss caused by your use of any third-party content or websites.",
  },
  {
    title: "9. Modifications",
    content:
      "We reserve the right to modify or replace these Terms & Conditions at any time. Changes will be effective immediately upon posting to this page. Your continued use of the website after any modifications constitutes acceptance of the updated terms. We encourage you to review these terms periodically.",
  },
  {
    title: "10. Governing Law",
    content:
      "These Terms & Conditions shall be governed by and construed in accordance with the laws of India. Any disputes arising from or relating to these terms shall be subject to the exclusive jurisdiction of the courts in Bangalore, Karnataka.",
  },
  {
    title: "11. Contact Information",
    content:
      "For any questions regarding these Terms & Conditions, please contact:\n\nSanctuary Architects & Designers\n42, Lavelle Road, Bangalore — 560001, India\nEmail: studio@sanctuaryarchitects.in\nPhone: +91 80 4123 4567",
  },
];

export default function TermsAndConditions() {
  return (
    <PageLayout>
      <PageMeta
        title="Terms & Conditions"
        description="Terms and conditions governing the use of the Sanctuary Architects & Designers website. Read our terms of service, intellectual property rights, and liability policies."
        canonicalPath="/terms"
      />
      <main>
        <PageHero
          title="Terms & Conditions"
          subtitle="The terms governing your use of our website and services. Please read these carefully."
          image="https://readdy.ai/api/search-image?query=Elegant%20minimalist%20architectural%20interior%2C%20clean%20lines%2C%20warm%20natural%20light%2C%20sophisticated%20quiet%20atmosphere%2C%20marble%20and%20wood%20textures%2C%20refined%20professional%20setting%2C%20editorial%20architectural%20photography%2C%20cream%20and%20beige%20tones%2C%20calm%20contemplative%20mood&width=1920&height=1080&seq=terms-hero&orientation=landscape"
          breadcrumb={[{ label: "Terms & Conditions" }]}
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