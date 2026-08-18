import { lazy } from "react";
import type { RouteObject } from "react-router-dom";
import Home from "../pages/home/page";
import NotFound from "../pages/NotFound";

// Lazy-loaded page components
const About = lazy(() => import("../pages/about/page"));
const Gallery = lazy(() => import("../pages/gallery/page"));
const Projects = lazy(() => import("../pages/projects/page"));
const CompletedProjects = lazy(() => import("../pages/projects/completed/page"));
const OngoingProjects = lazy(() => import("../pages/projects/ongoing/page"));
const UnbuiltProjects = lazy(() => import("../pages/projects/unbuilt/page"));
const ResidentialProjects = lazy(() => import("../pages/projects/residential/page"));
const HospitalityProjects = lazy(() => import("../pages/projects/hospitality/page"));
const CommercialProjects = lazy(() => import("../pages/projects/commercial/page"));
const PrefabProjects = lazy(() => import("../pages/projects/prefab/page"));
const ProjectDetail = lazy(() => import("../pages/projects/detail/page"));
const Testimonials = lazy(() => import("../pages/testimonials/page"));
const Clients = lazy(() => import("../pages/clients/page"));
const ContactPage = lazy(() => import("../pages/contact/page"));
const Blog = lazy(() => import("../pages/blog/page"));
const BlogArticle = lazy(() => import("../pages/blog/article/page"));
const ThankYou = lazy(() => import("../pages/ThankYou"));
const PrivacyPolicy = lazy(() => import("../pages/PrivacyPolicy"));
const TermsAndConditions = lazy(() => import("../pages/TermsAndConditions"));
const CookiePolicy = lazy(() => import("../pages/CookiePolicy"));

// Residential project detail pages
const VillaMaaya = lazy(() => import("../pages/projects/residential/villa-maaya/page"));
const LevitatingHouse = lazy(() => import("../pages/projects/residential/levitating-house/page"));
const KabiniHouse = lazy(() => import("../pages/projects/residential/kabini-house/page"));
const VillaNirvaana = lazy(() => import("../pages/projects/residential/villa-nirvaana/page"));
const VillaPrana = lazy(() => import("../pages/projects/residential/villa-prana/page"));
const ChodhaResidence = lazy(() => import("../pages/projects/residential/chodha-residence/page"));
const AroraHouse = lazy(() => import("../pages/projects/residential/arora-house/page"));

// Hospitality project detail pages
const Kaze = lazy(() => import("../pages/projects/hospitality/kaze/page"));
const Speakeasy = lazy(() => import("../pages/projects/hospitality/speakeasy/page"));
const Sanctum = lazy(() => import("../pages/projects/hospitality/sanctum/page"));
const Rubaiyat = lazy(() => import("../pages/projects/hospitality/rubaiyat/page"));
const PumaSocialClub = lazy(() => import("../pages/projects/hospitality/puma-social-club/page"));
const TapasMe = lazy(() => import("../pages/projects/hospitality/tapas-me/page"));
const TheOpenBox = lazy(() => import("../pages/projects/hospitality/the-open-box/page"));
const TajWestend = lazy(() => import("../pages/projects/hospitality/taj-westend/page"));

// Commercial project detail pages
const SanctuaryOffice = lazy(() => import("../pages/projects/commercial/sanctuary-office/page"));

// Ongoing project detail pages
const EkaraResort = lazy(() => import("../pages/projects/hospitality/ekara-resort/page"));
const NagarholeResort = lazy(() => import("../pages/projects/hospitality/nagarhole-resort/page"));
const KarnatakaGolfAssociation = lazy(() => import("../pages/projects/commercial/karnataka-golf-association/page"));
const Marina = lazy(() => import("../pages/projects/residential/marina/page"));
const Shobhit = lazy(() => import("../pages/projects/residential/shobhit/page"));
const VistaDoMarApartments = lazy(() => import("../pages/projects/residential/vista-do-mar-apartments/page"));
const EkaSiteDevelopment = lazy(() => import("../pages/projects/residential/eka-site-development/page"));
const BotanyRooftopBar = lazy(() => import("../pages/projects/ongoing/botany-rooftop-bar/page"));
const AnantapurResidence = lazy(() => import("../pages/projects/ongoing/anantapur-residence/page"));
const LakeViewApartment = lazy(() => import("../pages/projects/ongoing/lake-view-apartment/page"));

// Unbuilt project detail pages
const ETV = lazy(() => import("../pages/projects/unbuilt/etv/page"));
const Ambience = lazy(() => import("../pages/projects/unbuilt/ambience/page"));
const Mandala = lazy(() => import("../pages/projects/unbuilt/mandala/page"));
const MIT = lazy(() => import("../pages/projects/unbuilt/mit/page"));
const TajYeshwanthpur = lazy(() => import("../pages/projects/unbuilt/taj-yeshwanthpur/page"));
const Bellevue = lazy(() => import("../pages/projects/unbuilt/bellevue/page"));
const HiltonClinx = lazy(() => import("../pages/projects/unbuilt/hilton-clinx/page"));
const MercaraHouse = lazy(() => import("../pages/projects/unbuilt/mercara-house/page"));

// Prefab project detail pages
const ZenDen = lazy(() => import("../pages/projects/prefab/zen-den/page"));

const routes: RouteObject[] = [
  { path: "/", element: <Home /> },
  { path: "/gallery", element: <Gallery /> },
  { path: "/projects", element: <Projects /> },
  { path: "/projects/completed", element: <CompletedProjects /> },
  { path: "/projects/ongoing", element: <OngoingProjects /> },
  { path: "/projects/unbuilt", element: <UnbuiltProjects /> },

  // === UNBUILT PROJECT PAGES (with renamed slugs) ===
  { path: "/projects/unbuilt/etv-embassy-brewery", element: <ETV /> },
  { path: "/projects/unbuilt/etv", element: <ETV /> },
  { path: "/projects/unbuilt/mandala-resort", element: <Mandala /> },
  { path: "/projects/unbuilt/mandala", element: <Mandala /> },
  { path: "/projects/unbuilt/mit-manipal-university", element: <MIT /> },
  { path: "/projects/unbuilt/mit", element: <MIT /> },
  { path: "/projects/unbuilt/ambience-park", element: <Ambience /> },
  { path: "/projects/unbuilt/ambience", element: <Ambience /> },
  { path: "/projects/unbuilt/taj-yeshwanthpur", element: <TajYeshwanthpur /> },
  { path: "/projects/unbuilt/bellevue", element: <Bellevue /> },
  { path: "/projects/unbuilt/hilton-klinx", element: <HiltonClinx /> },
  { path: "/projects/unbuilt/hilton-clinx", element: <HiltonClinx /> },
  { path: "/projects/unbuilt/mercara-house", element: <MercaraHouse /> },

  // === ONGOING PROJECT PAGES ===
  { path: "/projects/ongoing/botany-rooftop-bar", element: <BotanyRooftopBar /> },
  { path: "/projects/ongoing/karnataka-golf-association", element: <KarnatakaGolfAssociation /> },
  { path: "/projects/ongoing/nagarhole-wilderness-retreat", element: <NagarholeResort /> },
  { path: "/projects/ongoing/vista-do-mar-apartment", element: <VistaDoMarApartments /> },
  { path: "/projects/ongoing/shobhit-penthouse", element: <Shobhit /> },
  { path: "/projects/ongoing/anantapur-residence", element: <AnantapurResidence /> },
  { path: "/projects/ongoing/eka-site-development", element: <EkaSiteDevelopment /> },
  { path: "/projects/ongoing/ekara-resort", element: <EkaraResort /> },
  { path: "/projects/ongoing/lake-view-apartment", element: <LakeViewApartment /> },
  { path: "/projects/ongoing/marina-residence", element: <Marina /> },
  { path: "/projects/ongoing/kabini-house", element: <KabiniHouse /> },

  // === RESIDENTIAL PROJECT PAGES ===
  { path: "/projects/residential", element: <ResidentialProjects /> },
  { path: "/projects/residential/villa-maaya", element: <VillaMaaya /> },
  { path: "/projects/residential/levitating-house", element: <LevitatingHouse /> },
  { path: "/projects/residential/kabini-house", element: <KabiniHouse /> },
  { path: "/projects/residential/villa-nirvaana", element: <VillaNirvaana /> },
  { path: "/projects/residential/villa-prana", element: <VillaPrana /> },
  { path: "/projects/residential/chodha-residence", element: <ChodhaResidence /> },
  { path: "/projects/residential/arora-house", element: <AroraHouse /> },

  // === HOSPITALITY PROJECT PAGES ===
  { path: "/projects/hospitality", element: <HospitalityProjects /> },
  { path: "/projects/hospitality/kaze", element: <Kaze /> },
  { path: "/projects/hospitality/speakeasy", element: <Speakeasy /> },
  { path: "/projects/hospitality/sanctum", element: <Sanctum /> },
  { path: "/projects/hospitality/rubaiyat", element: <Rubaiyat /> },
  { path: "/projects/hospitality/puma-social-club", element: <PumaSocialClub /> },
  { path: "/projects/hospitality/tapas-me", element: <TapasMe /> },
  { path: "/projects/hospitality/the-open-box", element: <TheOpenBox /> },
  { path: "/projects/hospitality/taj-westend", element: <TajWestend /> },

  // === COMMERCIAL PROJECT PAGES ===
  { path: "/projects/commercial", element: <CommercialProjects /> },
  { path: "/projects/commercial/sanctuary-office", element: <SanctuaryOffice /> },

  // === PREFAB PROJECT PAGES ===
  { path: "/projects/prefab", element: <PrefabProjects /> },
  { path: "/projects/prefab/zen-den", element: <ZenDen /> },

  // Legacy generic catch-all
  { path: "/projects/residential/:projectSlug", element: <ProjectDetail /> },
  { path: "/projects/hospitality/:projectSlug", element: <ProjectDetail /> },
  { path: "/projects/commercial/:projectSlug", element: <ProjectDetail /> },
  { path: "/projects/prefab/:projectSlug", element: <ProjectDetail /> },
  { path: "/projects/ongoing/:projectSlug", element: <ProjectDetail /> },
  { path: "/projects/unbuilt/:projectSlug", element: <ProjectDetail /> },
  { path: "/projects/:projectSlug", element: <ProjectDetail /> },

  // Other pages
  { path: "/about", element: <About /> },
  { path: "/testimonials", element: <Testimonials /> },
  { path: "/clients", element: <Clients /> },
  { path: "/contact", element: <ContactPage /> },
  { path: "/blog", element: <Blog /> },
  { path: "/blog/:slug/*", element: <BlogArticle /> },
  { path: "/thank-you", element: <ThankYou /> },
  { path: "/privacy-policy", element: <PrivacyPolicy /> },
  { path: "/terms", element: <TermsAndConditions /> },
  { path: "/cookie-policy", element: <CookiePolicy /> },
  { path: "*", element: <NotFound /> },
];

export default routes;
