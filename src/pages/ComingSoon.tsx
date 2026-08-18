import { Link } from "react-router-dom";
import Navbar from "@/components/feature/Navbar";
import Footer from "@/components/feature/Footer";
import PageMeta from "@/components/feature/PageMeta";

export default function ComingSoon({ title }: { title?: string }) {
  return (
    <div className="relative bg-background-50">
      <PageMeta
        title={title || "Coming Soon"}
        description="We are crafting something exceptional. This section is under development by Sanctuary Architects & Designers. Explore our portfolio in the meantime."
        canonicalPath=""
      />
      <Navbar />
      <main className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <img
            src="https://readdy.ai/api/search-image?query=Abstract%20luxury%20architectural%20space%2C%20soft%20natural%20light%20filtering%20through%20large%20windows%2C%20warm%20cream%20stone%20textures%2C%20minimalist%20elegant%20setting%2C%20blurred%20dreamy%20architectural%20photography%2C%20warm%20neutral%20tones%2C%20peaceful%20contemplative%20atmosphere&width=1920&height=1080&seq=comingsoon-bg&orientation=landscape"
            alt=""
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-background-50/80 backdrop-blur-[1px]" />
        </div>

        <div className="relative z-10 text-center px-6 py-20 max-w-xl mx-auto">
          {/* Icon */}
          <div className="w-20 h-20 mx-auto mb-8 flex items-center justify-center rounded-full bg-primary-100/60 border border-primary-200/40">
            <i className="ri-building-3-line text-3xl text-primary-500" />
          </div>

          {/* Label */}
          <span className="text-xs font-body tracking-[0.18em] uppercase text-primary-500 block mb-4">
            In Progress
          </span>

          {/* Title */}
          <h1 className="font-heading text-3xl md:text-5xl font-light text-foreground-950 mb-4">
            {title || "Coming Soon."}
          </h1>

          {/* Description */}
          <p className="text-sm md:text-base font-body text-secondary-600 leading-relaxed mb-10 max-w-md mx-auto">
            We are crafting something exceptional for this section.
            Check back soon — or explore the rest of our portfolio in the meantime.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              to="/"
              className="btn-luxury w-full sm:w-auto px-8 py-3.5 bg-primary-500 text-background-50 text-sm font-label font-semibold tracking-wide rounded-md hover:bg-primary-600 transition-all duration-500 hover:shadow-[0_0_32px_rgba(166,124,82,0.35)] active:scale-[0.97] whitespace-nowrap"
            >
              Return Home
            </Link>
            <Link
              to="/projects/completed"
              className="w-full sm:w-auto px-8 py-3.5 border border-secondary-200/50 text-foreground-800 text-sm font-label font-semibold tracking-wide rounded-md hover:bg-secondary-100/50 hover:border-secondary-300/50 transition-all duration-400 active:scale-[0.97] whitespace-nowrap"
            >
              Explore Projects
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}