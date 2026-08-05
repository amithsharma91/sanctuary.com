import type { RouteObject } from "react-router-dom";
import NotFound from "../pages/NotFound";
import Home from "../pages/home/page";
import ProjectDetail from "../pages/projects/detail/page";
import VillaMaaya from "../pages/projects/residential/villa-maaya/page";
import Gallery from "../pages/gallery/page";
import Projects from "../pages/projects/page";
import CompletedProjects from "../pages/projects/completed/page";
import OngoingProjects from "../pages/projects/ongoing/page";
import UnbuiltProjects from "../pages/projects/unbuilt/page";
import ResidentialProjects from "../pages/projects/residential/page";
import HospitalityProjects from "../pages/projects/hospitality/page";
import CommercialProjects from "../pages/projects/commercial/page";
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
  // Dedicated VILLA MAAYA page — must come before the generic :projectSlug route
  { path: "/projects/residential/villa-maaya", element: <VillaMaaya /> },
  { path: "/projects/hospitality", element: <HospitalityProjects /> },
  { path: "/projects/commercial", element: <CommercialProjects /> },
  // Individual project detail pages
  { path: "/projects/residential/:projectSlug", element: <ProjectDetail /> },
  { path: "/projects/hospitality/:projectSlug", element: <ProjectDetail /> },
  { path: "/projects/commercial/:projectSlug", element: <ProjectDetail /> },
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