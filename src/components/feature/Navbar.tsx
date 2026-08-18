import { useState, useEffect, useCallback, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "./Logo";

const mainNavItems = [
  { label: "Home", href: "/" },
  { label: "Gallery", href: "/gallery" },
  {
    label: "Projects",
    href: "#",
    isDropdown: true,
    children: [
      {
        label: "Completed Projects",
        href: "/projects/completed",
        isNested: true,
        nestedChildren: [
          { label: "Residential", href: "/projects/residential" },
          { label: "Hospitality", href: "/projects/hospitality" },
          { label: "Commercial", href: "/projects/commercial" },
          { label: "Prefab Projects", href: "/projects/prefab" },
        ],
      },
      { label: "Ongoing Projects", href: "/projects/ongoing" },
      { label: "Unbuilt Projects", href: "/projects/unbuilt" },
    ],
  },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const moreMenuItems = [
  { label: "Testimonials", href: "/testimonials" },
  { label: "Clients", href: "/clients" },
  { label: "Blog", href: "/blog" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [projectsOpen, setProjectsOpen] = useState(false);
  const [completedNestedOpen, setCompletedNestedOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  // Independent mobile accordion states — each level toggles independently
  const [mobileProjectsOpen, setMobileProjectsOpen] = useState(false);
  const [mobileCompletedOpen, setMobileCompletedOpen] = useState(false);
  const [mobileMoreOpen, setMobileMoreOpen] = useState(false);
  const projectsRef = useRef<HTMLDivElement>(null);
  const moreRef = useRef<HTMLDivElement>(null);
  const nestedRef = useRef<HTMLDivElement>(null);
  const nestedTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const location = useLocation();

  const isHome = location.pathname === "/";

  // Pages whose top area is light (no dark hero behind the header) —
  // the transparent header must use the existing dark nav-text variant
  // so navigation stays readable while the header remains transparent at top.
  const lightTopRoutes = ["/privacy-policy", "/terms", "/thank-you"];
  const isLightTop = lightTopRoutes.some((route) => location.pathname.startsWith(route));
  const useDarkNavText = isScrolled || isLightTop;

  // Scroll detection
  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 30);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  // Close dropdowns on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (projectsRef.current && !projectsRef.current.contains(e.target as Node)) {
        setProjectsOpen(false);
        setCompletedNestedOpen(false);
      }
      if (moreRef.current && !moreRef.current.contains(e.target as Node)) {
        setMoreOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Body scroll lock for mobile menu
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  // Reset mobile accordion states when menu closes
  useEffect(() => {
    if (!isMobileMenuOpen) {
      setMobileProjectsOpen(false);
      setMobileCompletedOpen(false);
      setMobileMoreOpen(false);
    }
  }, [isMobileMenuOpen]);

  // Close all menus on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setMobileProjectsOpen(false);
    setMobileCompletedOpen(false);
    setMobileMoreOpen(false);
    setProjectsOpen(false);
    setCompletedNestedOpen(false);
    setMoreOpen(false);
  }, [location.pathname]);

  const isActive = (href: string) => {
    if (href === "/") return location.pathname === "/";
    if (href === "/projects/completed") {
      return location.pathname === "/projects/completed" || 
        location.pathname.startsWith("/projects/residential") ||
        location.pathname.startsWith("/projects/hospitality") ||
        location.pathname.startsWith("/projects/commercial") ||
        location.pathname.startsWith("/projects/prefab");
    }
    return location.pathname.startsWith(href);
  };

  const isNestedActive = (href: string) => {
    return location.pathname === href;
  };

  // Handle nested hover on desktop
  const handleNestedEnter = () => {
    if (nestedTimeoutRef.current) clearTimeout(nestedTimeoutRef.current);
    setCompletedNestedOpen(true);
  };

  const handleNestedLeave = () => {
    nestedTimeoutRef.current = setTimeout(() => {
      setCompletedNestedOpen(false);
    }, 200);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-600 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] ${
          isScrolled
            ? "bg-background-50/85 backdrop-blur-md shadow-[0_1px_0_rgba(0,0,0,0.04)] border-b border-secondary-200/40"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <div className="w-full px-5 md:px-8 lg:px-14">
          <div className="flex items-center justify-between h-16 md:h-[72px] lg:h-20">
            {/* Logo */}
            <Link
              to="/"
              onClick={() => {
                if (isHome) {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }
              }}
              className="group flex items-center shrink-0 transition-all duration-500 ease-out hover:scale-[1.03]"
            >
              <Logo className="h-9 md:h-10 lg:h-11 w-auto" alt="Sanctuary Architects & Designers" />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {mainNavItems.map((item) => {
                if (item.isDropdown) {
                  return (
                    <div key={item.label} ref={projectsRef} className="relative">
                      <button
                        onClick={() => {
                          setProjectsOpen(!projectsOpen);
                          setCompletedNestedOpen(false);
                          setMoreOpen(false);
                        }}
                        className={`group flex items-center gap-1.5 px-3 py-2 text-[13px] font-body tracking-[0.03em] rounded-md transition-all duration-400 ${
                          projectsOpen || isActive("/projects")
                            ? "text-primary-500 bg-primary-50/30"
                            : useDarkNavText
                              ? "text-foreground-700 hover:text-foreground-950 hover:bg-secondary-100/40"
                              : "text-background-200/85 hover:text-background-50 hover:bg-white/10"
                        }`}
                      >
                        <span className="whitespace-nowrap">{item.label}</span>
                        <i
                          className={`ri-arrow-down-s-line text-xs transition-transform duration-400 ${
                            projectsOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      {/* Dropdown */}
                      <div
                        className={`absolute top-full left-0 mt-2 w-64 bg-background-50 rounded-lg shadow-[0_8px_40px_rgba(0,0,0,0.08)] border border-secondary-200/50 overflow-visible transition-all duration-400 origin-top ${
                          projectsOpen
                            ? "opacity-100 scale-y-100 translate-y-0"
                            : "opacity-0 scale-y-95 -translate-y-2 pointer-events-none"
                        }`}
                      >
                        {item.children!.map((child) => {
                          if (child.isNested) {
                            return (
                              <div
                                key={child.label}
                                className="relative"
                                onMouseEnter={handleNestedEnter}
                                onMouseLeave={handleNestedLeave}
                                ref={nestedRef}
                              >
                                <Link
                                  to={child.href}
                                  className={`w-full text-left px-5 py-3 text-[13px] font-body transition-colors duration-300 flex items-center justify-between block ${
                                    isActive(child.href)
                                      ? "text-primary-500 bg-primary-50/20"
                                      : "text-foreground-700 hover:text-primary-500 hover:bg-secondary-100/40"
                                  }`}
                                >
                                  <span>{child.label}</span>
                                  <i className="ri-arrow-right-s-line text-xs text-secondary-400" />
                                </Link>

                                {/* Nested Submenu */}
                                <div
                                  className={`absolute left-full top-0 w-48 bg-background-50 rounded-lg shadow-[0_8px_40px_rgba(0,0,0,0.1)] border border-secondary-200/50 overflow-hidden transition-all duration-300 ${
                                    completedNestedOpen
                                      ? "opacity-100 translate-x-0"
                                      : "opacity-0 -translate-x-2 pointer-events-none"
                                  }`}
                                  onMouseEnter={handleNestedEnter}
                                  onMouseLeave={handleNestedLeave}
                                >
                                  {child.nestedChildren!.map((nested) => (
                                    <Link
                                      key={nested.label}
                                      to={nested.href}
                                      className={`w-full text-left px-5 py-3 text-[13px] font-body transition-colors duration-300 block ${
                                        isNestedActive(nested.href)
                                          ? "text-primary-500 bg-primary-50/20"
                                          : "text-foreground-700 hover:text-primary-500 hover:bg-secondary-100/40"
                                      }`}
                                    >
                                      {nested.label}
                                    </Link>
                                  ))}
                                </div>
                              </div>
                            );
                          }

                          return (
                            <Link
                              key={child.label}
                              to={child.href}
                              className={`w-full text-left px-5 py-3 text-[13px] font-body transition-colors duration-300 block ${
                                isActive(child.href)
                                  ? "text-primary-500 bg-primary-50/20"
                                  : "text-foreground-700 hover:text-primary-500 hover:bg-secondary-100/40"
                              }`}
                            >
                              {child.label}
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  );
                }

                return (
                  <Link
                    key={item.label}
                    to={item.href}
                    className={`group relative px-3 py-2 text-[13px] font-body tracking-[0.03em] rounded-md transition-all duration-400 ${
                      isActive(item.href)
                        ? "text-primary-500"
                        : useDarkNavText
                          ? "text-foreground-700 hover:text-foreground-950 hover:bg-secondary-100/40"
                          : "text-background-200/85 hover:text-background-50 hover:bg-white/10"
                    }`}
                  >
                    <span className="whitespace-nowrap">{item.label}</span>
                    {isActive(item.href) && (
                      <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-[2px] bg-primary-500 rounded-full" />
                    )}
                  </Link>
                );
              })}

              {/* More Menu */}
              <div ref={moreRef} className="relative">
                <button
                  onClick={() => {
                    setMoreOpen(!moreOpen);
                    setProjectsOpen(false);
                  }}
                  className={`group flex items-center justify-center w-9 h-9 rounded-md transition-all duration-400 ${
                    moreOpen
                      ? "text-primary-500 bg-primary-50/30"
                      : useDarkNavText
                        ? "text-foreground-600 hover:text-foreground-950 hover:bg-secondary-100/40"
                        : "text-background-200/85 hover:text-background-50 hover:bg-white/10"
                  }`}
                  aria-label="More menu"
                >
                  <div className="flex flex-col gap-[3px]">
                    <span className="block w-[3px] h-[3px] rounded-full bg-current" />
                    <span className="block w-[3px] h-[3px] rounded-full bg-current" />
                    <span className="block w-[3px] h-[3px] rounded-full bg-current" />
                  </div>
                </button>

                {/* More Dropdown */}
                <div
                  className={`absolute top-full right-0 mt-2 w-52 bg-background-50 rounded-lg shadow-[0_8px_40px_rgba(0,0,0,0.08)] border border-secondary-200/50 overflow-hidden transition-all duration-400 origin-top ${
                    moreOpen
                      ? "opacity-100 scale-y-100 translate-y-0"
                      : "opacity-0 scale-y-95 -translate-y-2 pointer-events-none"
                  }`}
                >
                  {moreMenuItems.map((item) => (
                    <Link
                      key={item.label}
                      to={item.href}
                      className={`w-full text-left px-5 py-3 text-[13px] font-body transition-colors duration-300 block ${
                        isActive(item.href)
                          ? "text-primary-500 bg-primary-50/20"
                          : "text-foreground-700 hover:text-primary-500 hover:bg-secondary-100/40"
                      }`}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="hidden lg:block ml-4">
              <Link
                to="/contact"
                className="btn-luxury relative overflow-hidden px-6 py-2.5 bg-primary-500 text-background-50 text-[13px] font-label font-semibold tracking-wide rounded-md hover:bg-primary-600 transition-all duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] hover:shadow-[0_6px_20px_rgba(166,124,82,0.16)] active:scale-[0.97] whitespace-nowrap"
              >
                Book Consultation
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden flex items-center justify-center w-10 h-10 rounded-md text-foreground-800 hover:bg-secondary-100/30 transition-colors duration-300"
              onClick={() => {
                setIsMobileMenuOpen(!isMobileMenuOpen);
              }}
              aria-label="Toggle menu"
            >
              <div className="w-6 h-[18px] relative flex flex-col justify-between">
                <span
                  className={`block h-[2px] rounded-full bg-current transition-all duration-500 ease-[cubic-bezier(0.65,0,0.35,1)] ${
                    isMobileMenuOpen ? "rotate-45 translate-y-[8px] w-full" : "w-full"
                  }`}
                />
                <span
                  className={`block h-[2px] rounded-full bg-current transition-all duration-400 ease-[cubic-bezier(0.65,0,0.35,1)] ${
                    isMobileMenuOpen ? "opacity-0 scale-x-0" : "w-full"
                  }`}
                />
                <span
                  className={`block h-[2px] rounded-full bg-current transition-all duration-500 ease-[cubic-bezier(0.65,0,0.35,1)] ${
                    isMobileMenuOpen ? "-rotate-45 -translate-y-[8px] w-full" : "w-full"
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-[55] lg:hidden transition-all duration-600 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] ${
          isMobileMenuOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-foreground-950/15 backdrop-blur-sm transition-opacity duration-600 ${
            isMobileMenuOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setIsMobileMenuOpen(false)}
        />

        {/* Menu Panel */}
        <div
          className={`absolute inset-x-0 top-0 bg-background-50 transition-all duration-600 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] ${
            isMobileMenuOpen
              ? "translate-y-0 opacity-100"
              : "-translate-y-4 opacity-0"
          }`}
        >
          {/* Mobile menu header */}
          <div className="flex items-center justify-between h-16 px-5 border-b border-secondary-200/30">
            <Link
              to="/"
              onClick={() => {
                if (isHome) {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }
              }}
            >
              <Logo className="h-9 w-auto" alt="Sanctuary Architects & Designers" />
            </Link>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-10 h-10 flex items-center justify-center rounded-md text-foreground-800 hover:bg-secondary-100/30 transition-colors duration-300"
              aria-label="Close menu"
            >
              <i className="ri-close-line text-xl" />
            </button>
          </div>

          {/* Mobile nav items */}
          <div className="px-5 py-6 space-y-0.5 max-h-[70vh] overflow-y-auto">
            {/* Home */}
            <MobileNavItem
              label="Home"
              href="/"
              isActive={isActive("/")}
            />

            {/* Gallery */}
            <MobileNavItem
              label="Gallery"
              href="/gallery"
              isActive={isActive("/gallery")}
            />

            {/* Projects — Accordion */}
            <div className="border-b border-secondary-200/20 pb-1 mb-1">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setMobileProjectsOpen(!mobileProjectsOpen);
                }}
                className={`group flex items-center justify-between w-full py-3 px-3 rounded-lg transition-all duration-300 ${
                  isActive("/projects") || isActive("/projects/completed")
                    ? "text-primary-500 bg-primary-50/30"
                    : "text-foreground-800 hover:text-primary-500 hover:bg-secondary-100/40"
                }`}
              >
                <span className="font-heading text-xl font-light">Projects</span>
                <i
                  className={`ri-arrow-down-s-line text-lg transition-transform duration-400 ${
                    mobileProjectsOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div
                className={`overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] ${
                  mobileProjectsOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="pl-5 space-y-0.5 pt-1 pb-2">
                  {/* Completed Projects — nested accordion */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setMobileCompletedOpen(!mobileCompletedOpen);
                    }}
                    className={`group flex items-center justify-between w-full py-2.5 px-3 rounded-lg transition-all duration-300 ${
                      isActive("/projects/completed")
                        ? "text-primary-500 bg-primary-50/20"
                        : "text-foreground-700 hover:text-primary-500"
                    }`}
                  >
                    <span className="font-heading text-lg font-light">Completed Projects</span>
                    <i
                      className={`ri-arrow-down-s-line transition-transform duration-400 ${
                        mobileCompletedOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] ${
                      mobileCompletedOpen ? "max-h-[200px] opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="pl-5 space-y-0.5">
                      <MobileNavSubItem
                        label="Residential"
                        href="/projects/residential"
                        isActive={isNestedActive("/projects/residential")}
                      />
                      <MobileNavSubItem
                        label="Hospitality"
                        href="/projects/hospitality"
                        isActive={isNestedActive("/projects/hospitality")}
                      />
                      <MobileNavSubItem
                        label="Commercial"
                        href="/projects/commercial"
                        isActive={isNestedActive("/projects/commercial")}
                      />
                      <MobileNavSubItem
                        label="Prefab Projects"
                        href="/projects/prefab"
                        isActive={isNestedActive("/projects/prefab")}
                      />
                    </div>
                  </div>

                  {/* Ongoing */}
                  <MobileNavSubItem
                    label="Ongoing Projects"
                    href="/projects/ongoing"
                    isActive={isActive("/projects/ongoing")}
                  />

                  {/* Unbuilt */}
                  <MobileNavSubItem
                    label="Unbuilt Projects"
                    href="/projects/unbuilt"
                    isActive={isActive("/projects/unbuilt")}
                  />
                </div>
              </div>
            </div>

            {/* About */}
            <MobileNavItem
              label="About"
              href="/about"
              isActive={isActive("/about")}
            />

            {/* Contact */}
            <MobileNavItem
              label="Contact"
              href="/contact"
              isActive={isActive("/contact")}
            />

            {/* More */}
            <div className="border-t border-secondary-200/20 pt-1 mt-1">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setMobileMoreOpen(!mobileMoreOpen);
                }}
                className="group flex items-center justify-between w-full py-3 px-3 rounded-lg transition-all duration-300 text-foreground-800 hover:text-primary-500 hover:bg-secondary-100/40"
              >
                <span className="font-heading text-xl font-light">More</span>
                <i
                  className={`ri-arrow-down-s-line text-lg transition-transform duration-400 ${
                    mobileMoreOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div
                className={`overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] ${
                  mobileMoreOpen ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="pl-5 space-y-0.5 pt-1 pb-2">
                  {moreMenuItems.map((item) => (
                    <MobileNavSubItem
                      key={item.label}
                      label={item.label}
                      href={item.href}
                      isActive={isActive(item.href)}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Mobile CTA */}
          <div className="px-5 pb-8 pt-2">
            <Link
              to="/contact"
              className="btn-luxury w-full py-4 bg-primary-500 text-background-50 text-sm font-label font-semibold tracking-wide rounded-md hover:bg-primary-600 transition-all duration-500 whitespace-nowrap block text-center"
            >
              Book Consultation
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

function MobileNavItem({ label, href, isActive: active }: { label: string; href: string; isActive: boolean }) {
  return (
    <Link
      to={href}
      className={`group flex items-center w-full py-3 px-3 rounded-lg transition-all duration-300 ${
        active
          ? "text-primary-500 bg-primary-50/30"
          : "text-foreground-800 hover:text-primary-500 hover:bg-secondary-100/40"
      }`}
    >
      <span className="font-heading text-xl font-light">{label}</span>
      {active && (
        <span className="ml-auto w-1.5 h-1.5 rounded-full bg-primary-500" />
      )}
    </Link>
  );
}

function MobileNavSubItem({ label, href, isActive: active }: { label: string; href: string; isActive: boolean }) {
  return (
    <Link
      to={href}
      className={`group flex items-center w-full py-2.5 px-3 rounded-lg transition-all duration-300 ${
        active
          ? "text-primary-500 bg-primary-50/20"
          : "text-foreground-600 hover:text-primary-500"
      }`}
    >
      <span className="font-heading text-lg font-light">{label}</span>
      {active && (
        <span className="ml-auto w-1.5 h-1.5 rounded-full bg-primary-500" />
      )}
    </Link>
  );
}