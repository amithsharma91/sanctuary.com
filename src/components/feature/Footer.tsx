import { useNavigate } from "react-router-dom";
import Logo from "./Logo";

const quickLinks = [
  { label: "Completed Projects", href: "/projects/completed" },
  { label: "Ongoing Projects", href: "/projects/ongoing" },
  { label: "Unbuilt Projects", href: "/projects/unbuilt" },
  { label: "Gallery", href: "/gallery" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];

const socialLinks = [
  { icon: "ri-instagram-line", href: "#", label: "Instagram" },
  { icon: "ri-linkedin-line", href: "#", label: "LinkedIn" },
  { icon: "ri-facebook-line", href: "#", label: "Facebook" },
  { icon: "ri-pinterest-line", href: "#", label: "Pinterest" },
  { icon: "ri-youtube-line", href: "#", label: "YouTube" },
];

export default function Footer() {
  const navigate = useNavigate();

  return (
    <footer className="bg-background-100 border-t border-secondary-200/50">
      <div className="w-full px-6 md:px-10 lg:px-14">
        {/* Main Footer Grid */}
        <div className="py-16 md:py-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a
              href="/"
              onClick={(e) => {
                e.preventDefault();
                navigate("/");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="inline-block mb-5"
            >
              <Logo className="h-9 md:h-10 w-auto" alt="Sanctuary Architects & Designers" />
            </a>
            <p className="text-sm text-secondary-500 font-body leading-relaxed max-w-xs mb-6">
              Crafting timeless architecture and interior experiences since 2003.
              Luxury residential, hospitality, and commercial design studio
              based in Bangalore, India.
            </p>

            {/* Newsletter */}
            <div>
              <p className="text-xs font-label tracking-[0.12em] uppercase text-foreground-800 mb-3">
                Newsletter
              </p>
              <form
                className="flex gap-2 max-w-sm"
                action="https://readdy.ai/api/form/d9o4jom8mbnljin5a7bg"
                method="POST"
                data-readdy-form="true"
                id="newsletter-form"
              >
                <input
                  type="email"
                  name="email"
                  placeholder="Your email"
                  required
                  className="flex-1 px-4 py-2.5 text-sm font-body bg-background-50 border border-secondary-200/60 rounded-md text-foreground-800 placeholder:text-secondary-400 focus:outline-none focus:border-primary-400/50 transition-colors duration-300"
                />
                <button
                  type="submit"
                  className="btn-luxury px-5 py-2.5 bg-primary-500 text-background-50 text-sm font-label font-semibold rounded-md hover:bg-primary-600 transition-all duration-400 whitespace-nowrap active:scale-[0.97]"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-label tracking-[0.12em] uppercase text-foreground-800 mb-5">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => {
                      navigate(link.href);
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                    className="text-sm font-body text-secondary-500 hover:text-primary-500 transition-colors duration-300"
                  >
                    {link.label}
                  </button>
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
              <li className="text-sm font-body text-secondary-500">
                42, Lavelle Road,
                <br />
                Bangalore — 560001
                <br />
                India
              </li>
              <li>
                <a
                  href="tel:+918041234567"
                  className="text-sm font-body text-secondary-500 hover:text-primary-500 transition-colors duration-300"
                >
                  +91 80 4123 4567
                </a>
              </li>
              <li>
                <a
                  href="mailto:studio@sanctuaryarchitects.in"
                  className="text-sm font-body text-secondary-500 hover:text-primary-500 transition-colors duration-300"
                >
                  studio@sanctuaryarchitects.in
                </a>
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
            <button
              onClick={() => { navigate("/privacy-policy"); window.scrollTo({ top: 0, behavior: "smooth" }); }}
              className="text-xs font-body text-secondary-400 hover:text-primary-500 transition-colors duration-300"
            >
              Privacy Policy
            </button>
            <button
              onClick={() => { navigate("/terms"); window.scrollTo({ top: 0, behavior: "smooth" }); }}
              className="text-xs font-body text-secondary-400 hover:text-primary-500 transition-colors duration-300"
            >
              Terms of Use
            </button>
            <button
              onClick={() => { navigate("/cookie-policy"); window.scrollTo({ top: 0, behavior: "smooth" }); }}
              className="text-xs font-body text-secondary-400 hover:text-primary-500 transition-colors duration-300"
            >
              Cookie Policy
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}