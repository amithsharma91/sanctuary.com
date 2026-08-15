import { type ReactNode } from "react";

export type LegalBlock =
  | { type: "paragraph"; text: ReactNode }
  | { type: "bullets"; items: string[]; ordered?: boolean };

export interface LegalSubsection {
  id: string;
  title: string;
  blocks: LegalBlock[];
}

export interface LegalSection {
  id: string;
  title: string;
  blocks: LegalBlock[];
  subsections?: LegalSubsection[];
}

export interface LegalContact {
  name: string;
  addressLines: string[];
  phone: string;
  phoneHref: string;
  email: string;
  emailHref: string;
  hoursLabel: string;
  hours: string;
}

interface LegalDocumentProps {
  title: string;
  eyebrow: string;
  intro: string;
  updatedDate: string;
  sections: LegalSection[];
  contact: LegalContact;
}

function BulletList({ items, ordered = false }: { items: string[]; ordered?: boolean }) {
  if (ordered) {
    return (
      <ol className="space-y-2.5">
        {items.map((item, i) => (
          <li key={i} className="flex gap-3 text-sm md:text-[15px] font-body text-secondary-600 leading-relaxed">
            <span className="font-label text-xs text-primary-500 shrink-0 w-5 pt-0.5">{i + 1}.</span>
            <span>{item}</span>
          </li>
        ))}
      </ol>
    );
  }
  return (
    <ul className="space-y-2.5">
      {items.map((item, i) => (
        <li key={i} className="flex gap-3 text-sm md:text-[15px] font-body text-secondary-600 leading-relaxed">
          <span className="w-[5px] h-[5px] rounded-full bg-primary-400 mt-[0.62em] shrink-0" aria-hidden="true" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function renderBlocks(blocks: LegalBlock[]) {
  return blocks.map((block, i) => {
    if (block.type === "paragraph") {
      return (
        <p key={i} className="text-sm md:text-[15px] font-body text-secondary-600 leading-[1.8]">
          {block.text}
        </p>
      );
    }
    return <BulletList key={i} items={block.items} ordered={block.ordered} />;
  });
}

export default function LegalDocument({
  title,
  eyebrow,
  intro,
  updatedDate,
  sections,
  contact,
}: LegalDocumentProps) {
  const prefersReducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  return (
    <main id="top" className="bg-background-50 min-h-[calc(100vh-5rem)]">
      <div className="w-full px-6 md:px-10 lg:px-14">
        <div className="max-w-3xl mx-auto py-16 md:py-24">
          {/* Document header */}
          <header className="mb-12 md:mb-14">
            <p className="flex items-center gap-3 text-[11px] md:text-xs font-label tracking-[0.24em] uppercase text-primary-500 mb-5">
              <span className="w-8 h-px bg-primary-400/60" aria-hidden="true" />
              {eyebrow}
            </p>
            <h1 className="font-heading text-4xl md:text-5xl font-light text-foreground-950 leading-[1.05] mb-5">
              {title}
            </h1>
            <p className="text-sm md:text-[15px] font-body text-secondary-600 leading-[1.8] max-w-2xl">
              {intro}
            </p>
            <p className="text-xs font-body text-secondary-400 mt-6">
              Last Updated: {updatedDate}
            </p>
          </header>

          {/* Sections */}
          <div>
            {sections.map((section, index) => (
              <section
                key={section.id}
                id={section.id}
                className={`${index > 0 ? "border-t border-secondary-200/50 " : ""}pt-9 md:pt-11`}
              >
                <h2 className="font-heading text-[1.55rem] md:text-[1.9rem] font-light text-foreground-950 leading-snug mb-5">
                  {section.title}
                </h2>
                <div className="space-y-4">
                  {renderBlocks(section.blocks ?? [])}
                  {section.subsections?.map((sub) => (
                    <div key={sub.id} className="pt-2">
                      <h3 className="font-heading text-lg md:text-xl font-normal text-foreground-900 mb-3">
                        {sub.title}
                      </h3>
                      <div className="space-y-4">{renderBlocks(sub.blocks)}</div>
                    </div>
                  ))}
                </div>
              </section>
            ))}
          </div>

          {/* Contact */}
          <section className="mt-14 md:mt-16 pt-9 md:pt-11 border-t border-secondary-200/50">
            <h2 className="font-heading text-[1.55rem] md:text-[1.9rem] font-light text-foreground-950 leading-snug mb-5">
              Contact Us
            </h2>
            <div className="space-y-2.5 text-sm md:text-[15px] font-body text-secondary-600 leading-relaxed">
              <p className="font-label text-[11px] tracking-[0.18em] uppercase text-foreground-800 pt-1">
                {contact.name}
              </p>
              {contact.addressLines.map((line) => (
                <p key={line}>{line}</p>
              ))}
              <p>
                Phone:{" "}
                <a
                  href={contact.phoneHref}
                  className="text-primary-600 hover:text-primary-500 transition-colors duration-300"
                >
                  {contact.phone}
                </a>
              </p>
              <p>
                Email:{" "}
                <a
                  href={contact.emailHref}
                  className="text-primary-600 hover:text-primary-500 transition-colors duration-300 break-all"
                >
                  {contact.email}
                </a>
              </p>
              <p className="pt-1">
                {contact.hoursLabel}: {contact.hours}
              </p>
            </div>
          </section>

          {/* Back to top */}
          <div className="mt-12 md:mt-14 flex justify-end">
            <button
              onClick={() =>
                window.scrollTo({
                  top: 0,
                  behavior: prefersReducedMotion ? "auto" : "smooth",
                })
              }
              className="inline-flex items-center gap-2.5 text-[11px] font-label tracking-[0.18em] uppercase text-secondary-500 hover:text-primary-500 transition-colors duration-300 whitespace-nowrap"
            >
              Back to top
              <span className="w-4 h-4 flex items-center justify-center">
                <i className="ri-arrow-up-line text-sm" />
              </span>
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}