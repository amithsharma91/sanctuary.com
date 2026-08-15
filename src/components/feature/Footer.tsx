import { Link } from "react-router-dom";
import Logo from "./Logo";

const quickLinks = [
  { label: "Residential Projects", href: "/projects/residential" },
  { label: "Hospitality Projects", href: "/projects/hospitality" },
  { label: "Commercial Projects", href: "/projects/commercial" },
  { label: "Prefab Projects", href: "/projects/prefab" },
  { label: "Ongoing Projects", href: "/projects/ongoing" },
  { label: "Unbuilt Projects", href: "/projects/unbuilt" },
  { label: "Gallery", href: "/gallery" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const socialLinks = [
  { icon: "ri-instagram-line", href: "https://www.instagram.com/sanctuaryarchi2?igsh=dXlubWpraWg2cG16", label: "Instagram" },
  { icon: "ri-linkedin-line", href: "https://www.linkedin.com/in/anshul-chodha-a354b528?utm_source=share_via&utm_content=profile&utm_medium=member_android", label: "LinkedIn" },
  { icon: "ri-facebook-line", href: "https://www.facebook.com/share/1D9hzXDumo/", label: "Facebook" },
  { icon: "ri-store-2-line", href: "https://www.justdial.com/Bangalore/Sanctuary-Architects-Designers-Binny-Crescent-Benson-Town-Benson-Town/080PXX80-XX80-181009135821-E2H9_BZDET", label: "Justdial" },
];

export default function Footer() {
  return (
    <footer className="bg-background-100 border-t border-secondary-200/50">
      <div className="w-full px-6 md:px-10 lg:px-14">
        {/* Main Footer Grid */}
        <div className="py-16 md:py-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link
              to="/"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="inline-block mb-5"
            >
              <Logo className="h-9 md:h-10 w-auto" alt="Sanctuary Architects & Designers" />
            </Link>
            <p className="text-sm text-secondary-500 font-body leading-relaxed max-w-xs mb-6">
              Crafting timeless architecture and interior experiences since 2003.
              Luxury residential, hospitality, and commercial design studio
              based in Bangalore, India.
            </p>
            <a
              href="https://homesofsanctuary.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 text-sm font-label font-semibold tracking-wide text-foreground-800 border border-secondary-200/60 rounded-md px-4 py-2.5 hover:text-primary-500 hover:border-primary-300/40 hover:bg-background-50 transition-all duration-300 whitespace-nowrap"
            >
              Homes of Sanctuary
              <i className="ri-arrow-right-up-line text-sm transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-label tracking-[0.12em] uppercase text-foreground-800 mb-5">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                    className="text-sm font-body text-secondary-500 hover:text-primary-500 transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-label tracking-[0.12em] uppercase text-foreground-800 mb-5">
              Contact
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://maps.app.goo.gl/rL2VxCuU7ZfoKWDq5?g_st=ac"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-body text-secondary-500 hover:text-primary-500 transition-colors duration-300 leading-relaxed block"
                >
                  31, 4th Cross Road, 8th A Main Rd,
                  <br />
                  Vinayaka Nagar, Sadashiva Nagar,
                  <br />
                  Bengaluru, Karnataka 560080
                </a>
              </li>
              <li>
                <a
                  href="tel:+919845003452"
                  className="text-sm font-body text-secondary-500 hover:text-primary-500 transition-colors duration-300"
                >
                  +91 98450 03452
                </a>
              </li>
              <li>
                <a
                  href="mailto:anshul@sanctuaryarch.com"
                  className="text-sm font-body text-secondary-500 hover:text-primary-500 transition-colors duration-300"
                >
                  anshul@sanctuaryarch.com
                </a>
              </li>
              <li className="text-sm font-body text-secondary-500">
                Monday – Friday: 9:30 AM – 6:30 PM
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-xs font-label tracking-[0.12em] uppercase text-foreground-800 mb-5">
              Follow Us
            </h4>
            <div className="flex flex-wrap gap-2.5">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 flex items-center justify-center rounded-md border border-secondary-200/50 text-secondary-500 hover:text-primary-500 hover:border-primary-300/30 hover:bg-primary-50/20 transition-all duration-300 hover:-translate-y-0.5"
                >
                  <i className={`${social.icon} text-lg`} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-secondary-200/50 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs font-body text-secondary-400">
            &copy; {new Date().getFullYear()} Sanctuary Architects & Designers.
            All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link
              to="/privacy-policy"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="text-xs font-body text-secondary-400 hover:text-primary-500 transition-colors duration-300"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="text-xs font-body text-secondary-400 hover:text-primary-500 transition-colors duration-300"
            >
              Terms of Service
            </Link>
            <Link
              to="/cookie-policy"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="text-xs font-body text-secondary-400 hover:text-primary-500 transition-colors duration-300"
            >
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}