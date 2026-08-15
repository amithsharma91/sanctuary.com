import { Link } from "react-router-dom";
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
    id: "introduction",
    title: "Introduction & Personal Data Collection",
    blocks: [
      {
        type: "paragraph",
        text: "Sanctuary may collect personal data when you request information about our practice, services or projects. Information may be provided voluntarily by you through:",
      },
      {
        type: "bullets",
        items: [
          "Website forms",
          "Social media platforms",
          "Phone",
          "Email",
          "Other correspondence",
        ],
      },
      {
        type: "paragraph",
        text: "Technical information may also be collected automatically when you visit our website, including:",
      },
      {
        type: "bullets",
        items: [
          "Anonymous statistical information",
          "IP address",
          "Browser type and version",
          "Time-zone settings",
          "Browser plug-in types and versions",
          "Operating system",
          "Platform",
          "Public-profile information you permit to be shared through third-party social networks",
        ],
      },
    ],
  },
  {
    id: "legal-bases",
    title: "Legal Bases for Processing",
    blocks: [
      {
        type: "paragraph",
        text: "Sanctuary processes personal information where one or more of the following legal bases applies.",
      },
    ],
    subsections: [
      {
        id: "consent",
        title: "Where You Have Provided Consent",
        blocks: [
          {
            type: "paragraph",
            text: "Sanctuary may contact you through email or text with marketing information where you have provided your consent, including through newsletter registration or refreshed marketing preferences.",
          },
        ],
      },
      {
        id: "vital-interest",
        title: "Where It Is in Your Vital Interest",
        blocks: [
          {
            type: "paragraph",
            text: "Your personal information may be used where it is necessary to communicate urgent safety or critical notices to you, or where processing is reasonably believed to prevent or reduce potential harm.",
          },
        ],
      },
      {
        id: "legitimate-interest",
        title: "Where There Is a Legitimate Interest",
        blocks: [
          {
            type: "paragraph",
            text: "Sanctuary may process personal information where there is a legitimate interest in doing so. These purposes include:",
          },
          {
            type: "bullets",
            items: [
              "Marketing activities where consent is not the relied-upon basis",
              "Analysis to inform marketing strategy",
              "Enhancing and personalising customer experience",
              "Corresponding and communicating with you",
              "Verifying the accuracy of information held",
              "Understanding customers better",
              "Network and information security",
              "Protection against loss, damage, theft or unauthorised access",
              "Fraud and criminal-activity prevention",
              "Managing data-rights requests",
              "Managing queries, complaints and claims",
              "Establishing and defending legal rights",
            ],
          },
        ],
      },
      {
        id: "legal-requirement",
        title: "Where There Is a Legal Requirement",
        blocks: [
          {
            type: "paragraph",
            text: "Sanctuary may use your personal information to comply with legal obligations, including:",
          },
          {
            type: "bullets",
            items: [
              "Assisting relevant authorities",
              "Identifying users when they contact Sanctuary",
              "Verifying the accuracy of information held",
            ],
          },
        ],
      },
      {
        id: "contract",
        title: "Where It Is Required to Complete a Contract",
        blocks: [
          {
            type: "paragraph",
            text: "Your personal information may be processed where necessary to provide services or products, to arrange third-party services or products, or to enter into discussions regarding services or products.",
          },
        ],
      },
    ],
  },
  {
    id: "anonymisation",
    title: "Data Anonymisation and Aggregated Information",
    blocks: [
      {
        type: "paragraph",
        text: "Your personal information may be converted into statistical or aggregated information in a manner that does not identify you as an individual. Such aggregated data may be used by Sanctuary for analytical and research purposes.",
      },
    ],
  },
  {
    id: "who-may-access",
    title: "Who May Access Personal Information",
    blocks: [
      {
        type: "paragraph",
        text: "Your personal information may be shared with the following categories of recipients, where applicable.",
      },
    ],
    subsections: [
      {
        id: "group-companies",
        title: "Group Companies",
        blocks: [
          {
            type: "paragraph",
            text: "Where applicable, personal information may be shared with Sanctuary's group companies for the purposes described in this policy.",
          },
        ],
      },
      {
        id: "suppliers",
        title: "Suppliers and Service Providers",
        blocks: [
          {
            type: "paragraph",
            text: "Information may be disclosed to:",
          },
          {
            type: "bullets",
            items: [
              "Cloud service providers",
              "Hosting providers",
              "Email-management providers",
              "Marketing agencies",
              "Administrative service providers",
              "Agents",
              "Subcontractors",
              "Other service providers",
            ],
          },
          {
            type: "paragraph",
            text: "Only the information necessary to provide the relevant service should be shared. Such providers are expected to keep your information secure and to process it only in accordance with applicable instructions.",
          },
        ],
      },
      {
        id: "third-parties",
        title: "Third Parties Providing Products and Services",
        blocks: [
          {
            type: "paragraph",
            text: "Relevant third parties may process your personal information when you enquire about or purchase complementary services or products through Sanctuary.",
          },
        ],
      },
    ],
  },
  {
    id: "other-sharing",
    title: "Other Ways Personal Information May Be Shared",
    blocks: [
      {
        type: "paragraph",
        text: "Sanctuary may also share personal information in connection with:",
      },
      {
        type: "bullets",
        items: [
          "Business sales",
          "Business restructuring",
          "Reorganisation",
          "Legal obligations",
          "Crime detection or reporting",
          "Enforcement of contractual terms",
          "Protection of visitors and customers",
          "Protection of rights, property and safety",
        ],
      },
      {
        type: "paragraph",
        text: "Where you have provided consent to third-party marketing, your information may be shared with the relevant third party. Once your information has been shared with that third party, their own privacy policy will apply.",
      },
    ],
  },
  {
    id: "storage",
    title: "Where Personal Information Is Stored",
    blocks: [
      {
        type: "paragraph",
        text: "Sanctuary uses leading technologies and encryption software to safeguard your information and maintains security standards intended to prevent unauthorised access.",
      },
    ],
  },
  {
    id: "retention",
    title: "Data Retention",
    blocks: [],
    subsections: [
      {
        id: "how-long",
        title: "How Long We Keep Your Personal Information",
        blocks: [
          {
            type: "paragraph",
            text: "Your personal information is retained only for as long as necessary to fulfil the purposes for which it was collected, including any legal, accounting and reporting requirements.",
          },
          {
            type: "paragraph",
            text: "The following factors are taken into account when determining retention periods:",
          },
          {
            type: "bullets",
            items: [
              "Amount of data",
              "Nature of data",
              "Sensitivity",
              "Potential risk of harm",
              "Processing purposes",
              "Alternative ways of achieving those purposes",
              "Applicable legal requirements",
            ],
          },
        ],
      },
    ],
  },
  {
    id: "security",
    title: "Security",
    blocks: [
      {
        type: "paragraph",
        text: "Sanctuary applies appropriate security measures to protect personal information. We seek to protect against:",
      },
      {
        type: "bullets",
        items: [
          "Accidental loss",
          "Unauthorised use",
          "Unauthorised access",
          "Alteration",
          "Disclosure",
        ],
      },
      {
        type: "paragraph",
        text: "Access to personal information is restricted on the basis of business need, and those with access are subject to confidentiality obligations.",
      },
    ],
  },
  {
    id: "cookies",
    title: "Cookies",
    blocks: [
      {
        type: "paragraph",
        text: (
          <>
            Sanctuary's website uses cookies. For information about how cookies are used on this
            website, please refer to our{" "}
            <Link
              to="/cookie-policy"
              className="text-primary-600 hover:text-primary-500 transition-colors duration-300 underline underline-offset-4 decoration-primary-300/60"
            >
              Cookie Policy
            </Link>
            .
          </>
        ),
      },
    ],
  },
  {
    id: "marketing",
    title: "Marketing",
    blocks: [
      {
        type: "paragraph",
        text: "Where you provide your marketing preferences and consent, Sanctuary may contact you for marketing purposes through:",
      },
      {
        type: "bullets",
        items: [
          "Email",
          "Post",
          "Telephone",
          "Targeted online advertising",
          "Social media or platform advertising",
        ],
      },
      {
        type: "paragraph",
        text: "Your personal information may be used to make marketing more relevant to you unless you object.",
      },
    ],
  },
  {
    id: "access",
    title: "Access to Information",
    blocks: [
      {
        type: "paragraph",
        text: "You may request access to the personal information Sanctuary holds about you by contacting us using the contact details provided at the end of this policy. We may require you to provide proof of identity before responding to such a request.",
      },
      {
        type: "paragraph",
        text: "Please note that access may be limited where the information concerns other individuals, or where information may lawfully be withheld.",
      },
    ],
  },
  {
    id: "withdrawing-consent",
    title: "Withdrawing Consent",
    blocks: [
      {
        type: "paragraph",
        text: "Where processing is based on your consent, you may withdraw that consent at any time. You may also opt out of direct marketing at any time, including through any unsubscribe mechanism provided in our communications where applicable.",
      },
      {
        type: "paragraph",
        text: "Withdrawing consent does not affect the lawfulness of processing based on consent before its withdrawal.",
      },
    ],
  },
  {
    id: "objecting",
    title: "Objecting to Processing",
    blocks: [
      {
        type: "paragraph",
        text: "Where Sanctuary relies on legitimate business interests to process your personal information, you have the right to object. You may raise an objection by email or in writing.",
      },
      {
        type: "paragraph",
        text: "Where applicable, processing may be temporarily stopped while your objection is investigated, and processing will be permanently stopped where the objection is justified. Where Sanctuary has a lawful basis for processing, processing may continue. You may also object to direct marketing at any time.",
      },
    ],
  },
  {
    id: "erasing",
    title: "Erasing or Restricting Personal Information",
    blocks: [
      {
        type: "paragraph",
        text: "You may request that Sanctuary erase or restrict the processing of your personal information. Sanctuary will make reasonable efforts to comply with such requests, subject to any legal exceptions that apply.",
      },
      {
        type: "paragraph",
        text: "Processing may be restricted where the lawfulness of the processing is in question, while an objection is under investigation, or where required in connection with legal proceedings. Where legally permitted, information may continue to be stored, and where consent is required for a particular processing activity, processing will only take place with your consent.",
      },
      {
        type: "paragraph",
        text: "If this Privacy Policy changes, an updated version will be placed on this page.",
      },
    ],
  },
  {
    id: "third-party-websites",
    title: "Third-Party Websites",
    blocks: [
      {
        type: "paragraph",
        text: "Sanctuary's website may contain links to other websites. Other websites may have their own privacy policies. Sanctuary does not accept responsibility or liability for the privacy policies or practices of those websites.",
      },
      {
        type: "paragraph",
        text: "A link to another website does not imply endorsement or recommendation by Sanctuary.",
      },
    ],
  },
  {
    id: "photography",
    title: "Photography",
    blocks: [
      {
        type: "paragraph",
        text: "Sanctuary regularly photographs its projects and activities. Photographs may include members of the public. Photography may be used on:",
      },
      {
        type: "bullets",
        items: [
          "Website",
          "Social media",
          "Print publications",
          "Press",
          "Online publications",
          "Client marketing",
          "Supplier marketing",
          "Third-party marketing",
        ],
      },
      {
        type: "paragraph",
        text: "Photography is stored indefinitely in a secure cloud-service library. If you would like Sanctuary to remove a photograph of you that Sanctuary holds, you may contact Sanctuary using the contact details provided at the end of this policy.",
      },
    ],
  },
  {
    id: "legal-disclaimer",
    title: "Legal Disclaimer",
    blocks: [
      {
        type: "paragraph",
        text: "Sanctuary endeavours to keep the material on its website accurate and current. However, errors and omissions may occur, and the content of this website is provided without warranty or liability.",
      },
      {
        type: "paragraph",
        text: "Sanctuary does not warrant that use of the website will not infringe third-party rights, nor that use of the website or materials downloaded from it will not cause computer-virus infection or other damage to property. The website and its materials are used at the user's own risk, and liability limitations apply as stated in this policy.",
      },
    ],
  },
];

export default function PrivacyPolicy() {
  return (
    <PageLayout>
      <PageMeta
        title="Privacy Policy | Sanctuary Architects & Designers"
        description="Privacy Policy for Sanctuary Architects & Designers — how we collect, use, store and share personal information when you request information about our practice, services or projects."
        canonicalPath="/privacy-policy"
      />
      <LegalDocument
        title="Privacy Policy"
        eyebrow="Legal Notice"
        intro="This Privacy Policy explains how Sanctuary Architects & Designers collects, uses, stores and shares personal information when you request information about our practice, services or projects, or use our website."
        updatedDate="August 14, 2026"
        sections={sections}
        contact={contact}
      />
    </PageLayout>
  );
}