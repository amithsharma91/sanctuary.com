import type { RouteObject } from "react-router-dom";
import NotFound from "../pages/NotFound";
import Home from "../pages/home/page";
import ProjectDetail from "../pages/projects/detail/page";
import VillaMaaya from "../pages/projects/residential/villa-maaya/page";
import LevitatingHouse from "../pages/projects/residential/levitating-house/page";
import KabiniHouse from "../pages/projects/residential/kabini-house/page";
import VillaNirvaana from "../pages/projects/residential/villa-nirvaana/page";
import SanctuaryOffice from "../pages/projects/commercial/sanctuary-office/page";
import Kaze from "../pages/projects/hospitality/kaze/page";
import ZenDen from "../pages/projects/prefab/zen-den/page";
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
import Services from "../pages/services/page";
import Testimonials from "../pages/testimonials/page";
import Awards from "../pages/awards/page";
import Clients from "../pages/clients/page";
import Careers from "../pages/careers/page";
import ContactPage from "../pages/contact/page";
import ThankYou from "../pages/ThankYou";
import PrivacyPolicy from "../pages/PrivacyPolicy";
import TermsAndConditions from "../pages/TermsAndConditions";
import CookiePolicy from "../pages/CookiePolicy";

const routes: RouteObject[] = [
  { path: "/", element: <Home /> },
  { path: "/gallery", element: <Gallery /> },
  { path: "/projects", element: <Projects /> },
  { path: "/projects/completed", element: <CompletedProjects /> },
  { path: "/projects/ongoing", element: <OngoingProjects /> },
  { path: "/projects/unbuilt", element: <UnbuiltProjects /> },
  { path: "/projects/residential", element: <ResidentialProjects /> },
  // Dedicated project pages — must come before the generic :projectSlug routes
  { path: "/projects/residential/villa-maaya", element: <VillaMaaya /> },
  { path: "/projects/residential/levitating-house", element: <LevitatingHouse /> },
  { path: "/projects/residential/kabini-house", element: <KabiniHouse /> },
  { path: "/projects/residential/villa-nirvaana", element: <VillaNirvaana /> },
  { path: "/projects/hospitality", element: <HospitalityProjects /> },
  { path: "/projects/hospitality/kaze", element: <Kaze /> },
  { path: "/projects/commercial", element: <CommercialProjects /> },
  { path: "/projects/commercial/sanctuary-office", element: <SanctuaryOffice /> },
  { path: "/projects/prefab", element: <PrefabProjects /> },
  { path: "/projects/prefab/zen-den", element: <ZenDen /> },
  // Individual project detail pages (generic catch-all)
  { path: "/projects/residential/:projectSlug", element: <ProjectDetail /> },
  { path: "/projects/hospitality/:projectSlug", element: <ProjectDetail /> },
  { path: "/projects/commercial/:projectSlug", element: <ProjectDetail /> },
  { path: "/projects/prefab/:projectSlug", element: <ProjectDetail /> },
  // Legacy project detail placeholder
  { path: "/projects/:projectSlug", element: <ProjectDetail /> },
  { path: "/about", element: <About /> },
  { path: "/services", element: <Services /> },
  { path: "/testimonials", element: <Testimonials /> },
  { path: "/awards", element: <Awards /> },
  { path: "/clients", element: <Clients /> },
  { path: "/careers", element: <Careers /> },
  { path: "/contact", element: <ContactPage /> },
  { path: "/thank-you", element: <ThankYou /> },
  { path: "/privacy-policy", element: <PrivacyPolicy /> },
  { path: "/terms", element: <TermsAndConditions /> },
  { path: "/cookie-policy", element: <CookiePolicy /> },
  { path: "*", element: <NotFound /> },
];

export default routes;
