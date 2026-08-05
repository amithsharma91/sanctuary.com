import { type ReactNode } from "react";
import Navbar from "@/components/feature/Navbar";
import Footer from "@/components/feature/Footer";
import ScrollProgress from "@/components/feature/ScrollProgress";
import FloatingActions from "@/components/feature/FloatingActions";

interface PageLayoutProps {
  children: ReactNode;
  className?: string;
}

export default function PageLayout({ children, className = "" }: PageLayoutProps) {
  return (
    <div className={`relative bg-background-50 ${className}`}>
      <ScrollProgress />
      <Navbar />
      {children}
      <Footer />
      <FloatingActions />
    </div>
  );
}