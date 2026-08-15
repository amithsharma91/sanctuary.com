import type { RouteObject } from "react-router-dom";
import NotFound from "../pages/NotFound";
import Home from "../pages/home/page";
import ProjectDetail from "../pages/projects/detail/page";
import VillaMaaya from "../pages/projects/residential/villa-maaya/page";
import LevitatingHouse from "../pages/projects/residential/levitating-house/page";
import KabiniHouse from "../pages/projects/residential/kabini-house/page";
import VillaNirvaana from "../pages/projects/residential/villa-nirvaana/page";
import VillaPrana from "../pages/projects/residential/villa-prana/page";
import ChodhaResidence from "../pages/projects/residential/chodha-residence/page";
import AroraHouse from "../pages/projects/residential/arora-house/page";
import SanctuaryOffice from "../pages/projects/commercial/sanctuary-office/page";
import Kaze from "../pages/projects/hospitality/kaze/page";

import Speakeasy from "../pages/projects/hospitality/speakeasy/page";
import Sanctum from "../pages/projects/hospitality/sanctum/page";
import Rubaiyat from "../pages/projects/hospitality/rubaiyat/page";
import PumaSocialClub from "../pages/projects/hospitality/puma-social-club/page";
import TapasMe from "../pages/projects/hospitality/tapas-me/page";
import TheOpenBox from "../pages/projects/hospitality/the-open-box/page";
import TajWestend from "../pages/projects/hospitality/taj-westend/page";
import Gallery from "../pages/gallery/page";
import Projects from "../pages/projects/page";
import CompletedProjects from "../pages/projects/completed/page";
import OngoingProjects from "../pages/projects/ongoing/page";
import UnbuiltProjects from "../pages/projects/unbuilt/page";
import ResidentialProjects from "../pages/projects/residential/page";
import HospitalityProjects from "../pages/projects/hospitality/page";
import CommercialProjects from "../pages/projects/commercial/page";
import PrefabProjects from "../pages/projects/prefab/page";
import About from "../pages/about/page";
import Testimonials from "../pages/testimonials/page";
import Clients from "../pages/clients/page";
import ContactPage from "../pages/contact/page";
import ThankYou from "../pages/ThankYou";
import PrivacyPolicy from "../pages/PrivacyPolicy";
import TermsAndConditions from "../pages/TermsAndConditions";
import CookiePolicy from "../pages/CookiePolicy";

// Ongoing project pages (existing detail pages reused)
import EkaraResort from "../pages/projects/hospitality/ekara-resort/page";
import NagarholeResort from "../pages/projects/hospitality/nagarhole-resort/page";
import KarnatakaGolfAssociation from "../pages/projects/commercial/karnataka-golf-association/page";
import Marina from "../pages/projects/residential/marina/page";
import Shobhit from "../pages/projects/residential/shobhit/page";
import VistaDoMarApartments from "../pages/projects/residential/vista-do-mar-apartments/page";
import EkaSiteDevelopment from "../pages/projects/residential/eka-site-development/page";
// New ongoing projects
import BotanyRooftopBar from "../pages/projects/ongoing/botany-rooftop-bar/page";
import AnantapurResidence from "../pages/projects/ongoing/anantapur-residence/page";
import LakeViewApartment from "../pages/projects/ongoing/lake-view-apartment/page";

// Unbuilt project pages (existing detail pages reused)
import ETV from "../pages/projects/unbuilt/etv/page";
import Ambience from "../pages/projects/unbuilt/ambience/page";
import Mandala from "../pages/projects/unbuilt/mandala/page";
import MIT from "../pages/projects/unbuilt/mit/page";
import TajYeshwanthpur from "../pages/projects/unbuilt/taj-yeshwanthpur/page";
import Bellevue from "../pages/projects/unbuilt/bellevue/page";
import HiltonClinx from "../pages/projects/unbuilt/hilton-clinx/page";
import MercaraHouse from "../pages/projects/unbuilt/mercara-house/page";

// Prefab
import ZenDen from "../pages/projects/prefab/zen-den/page";
import Blog from "../pages/blog/page";

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
  { path: "/thank-you", element: <ThankYou /> },
  { path: "/privacy-policy", element: <PrivacyPolicy /> },
  { path: "/terms", element: <TermsAndConditions /> },
  { path: "/cookie-policy", element: <CookiePolicy /> },
  { path: "*", element: <NotFound /> },
];

export default routes;