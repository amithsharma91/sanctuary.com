import { useEffect, type ReactNode } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "@/components/feature/Navbar";
import Footer from "@/components/feature/Footer";

interface PageLayoutProps {
  children: ReactNode;
  className?: string;
}

export default function PageLayout({ children, className = "" }: PageLayoutProps) {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [pathname]);

  return (
    <div className={`relative bg-background-50 ${className}`}>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}