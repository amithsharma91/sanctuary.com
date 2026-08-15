import PageLayout from "@/components/feature/PageLayout";
import PageMeta from "@/components/feature/PageMeta";
import LegalDocument, { type LegalSection } from "@/components/feature/LegalDocument";

const contact = {
  name: "Sanctuary Architects & Designers",
  addressLines: [
    "31, 4th Cross Road, 8th A Main Rd,",
    "Vinayaka Nagar, Sadashiva Nagar,",
    "Bengaluru, Karnataka 560080",
  ],
  phone: "+91 98450 03452",
  phoneHref: "tel:+919845003452",
  email: "anshul@sanctuaryarch.com",
  emailHref: "mailto:anshul@sanctuaryarch.com",
  hoursLabel: "Business Hours",
  hours: "Monday to Friday, 9:30 AM \u2013 6:30 PM",
};

const sections: LegalSection[] = [
  {
    id: "terms",
    title: "Terms",
    blocks: [
      {
        type: "paragraph",
        text: "By accessing this website, you agree to be bound by these Website Terms and Conditions of Use, to comply with all applicable laws and regulations, and to be responsible for compliance with any applicable local laws.",
      },
      {
        type: "paragraph",
        text: "If you do not agree with any of these terms, you are prohibited from using or accessing this site. The materials contained in this website are protected by applicable copyright and trademark law.",
      },
    ],
  },
  {
    id: "use-license",
    title: "Use License",
    blocks: [
      {
        type: "paragraph",
        text: "Permission is granted to temporarily download one copy of the materials on Sanctuary's website for personal, non-commercial, transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:",
      },
      {
        type: "bullets",
        ordered: true,
        items: [
          "Modify or copy the materials.",
          "Use the materials for any commercial purpose, or for any public display (commercial or non-commercial).",
          "Attempt to decompile or reverse engineer any software contained on Sanctuary's website.",
          "Remove any copyright or other proprietary notations from the materials.",
          "Transfer the materials to another person or 'mirror' the materials on any other server.",
        ],
      },
      {
        type: "paragraph",
        text: "This license shall automatically terminate if you violate any of these restrictions. Upon termination, you must destroy any downloaded materials in your possession, whether in electronic or printed format.",
      },
    ],
  },
  {
    id: "disclaimer",
    title: "Disclaimer",
    blocks: [
      {
        type: "paragraph",
        text: "The materials on Sanctuary's website are provided on an 'as is' basis. Sanctuary makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties, including without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.",
      },
      {
        type: "paragraph",
        text: "Further, Sanctuary does not warrant or make any representations concerning the accuracy, likely results, or reliability of the use of the materials on its website, or otherwise relating to such materials or on any sites linked to this website.",
      },
    ],
  },
  {
    id: "limitations",
    title: "Limitations",
    blocks: [
      {
        type: "paragraph",
        text: "In no event shall Sanctuary or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Sanctuary's website, even if Sanctuary or a Sanctuary authorized representative has been notified orally or in writing of the possibility of such damage.",
      },
      {
        type: "paragraph",
        text: "Because some jurisdictions do not allow limitations on implied warranties, or limitations of liability for consequential or incidental damages, these limitations may not apply to you.",
      },
    ],
  },
  {
    id: "revisions-and-errata",
    title: "Revisions and Errata",
    blocks: [
      {
        type: "paragraph",
        text: "The materials appearing on Sanctuary's website could include technical, typographical, or photographic errors. Materials may not always be accurate, complete or current. Sanctuary may make changes to the materials contained on its website at any time without notice. Sanctuary does not, however, make any commitment to update the materials.",
      },
    ],
  },
  {
    id: "links",
    title: "Links",
    blocks: [
      {
        type: "paragraph",
        text: "Sanctuary has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by Sanctuary of the site. Use of any such linked website is at the user's own risk.",
      },
    ],
  },
  {
    id: "site-terms-modifications",
    title: "Site Terms Modifications",
    blocks: [
      {
        type: "paragraph",
        text: "Sanctuary may revise these Terms of Use at any time without notice. By using this website, you agree to be bound by the then-current version of these Terms and Conditions of Use.",
      },
    ],
  },
  {
    id: "governing-law",
    title: "Governing Law",
    blocks: [
      {
        type: "paragraph",
        text: "Any claim relating to the web site shall be governed by the laws of the State of Karnataka, India without regard to its conflict of law provisions.",
      },
    ],
  },
  {
    id: "general-terms",
    title: "General Terms",
    blocks: [
      {
        type: "paragraph",
        text: "Other, General Terms and Conditions applicable to Use of a Web Site, do apply.",
      },
    ],
  },
];

export default function TermsAndConditions() {
  return (
    <PageLayout>
      <PageMeta
        title="Terms of Service | Sanctuary Architects & Designers"
        description="Terms of Service for the Sanctuary Architects & Designers website — terms of use, use license, disclaimer, limitations, revisions, links, governing law and general terms."
        canonicalPath="/terms"
      />
      <LegalDocument
        title="Terms of Service"
        eyebrow="Legal Notice"
        intro="These Terms of Service govern your use of the Sanctuary Architects & Designers website. Please read them carefully before using this website."
        updatedDate="August 14, 2026"
        sections={sections}
        contact={contact}
      />
    </PageLayout>
  );
}