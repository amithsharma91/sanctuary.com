import { useNavigate } from "react-router-dom";
import PageLayout from "@/components/feature/PageLayout";
import PageMeta from "@/components/feature/PageMeta";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <PageLayout>
      <PageMeta
        title="Page Not Found"
        description="The page you're looking for doesn't exist. Return to the Sanctuary Architects homepage to explore our portfolio of luxury architecture and interior design."
        canonicalPath=""
      />
      <main className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <img
            src="https://readdy.ai/api/search-image?query=Ethereal%20luxury%20architecture%20detail%2C%20soft%20focus%20on%20warm%20stone%20texture%20and%20gentle%20light%2C%20abstract%20architectural%20composition%2C%20calm%20serene%20atmosphere%2C%20minimal%20elegant%20aesthetic%2C%20warm%20cream%20and%20beige%20tones%2C%20soft%20natural%20lighting%2C%20contemplative%20mood%2C%20editorial%20fine%20art%20architectural%20photography&width=1920&height=1080&seq=notfound-bg&orientation=landscape"
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-background-50/70 backdrop-blur-[2px]" />
        </div>

        <div className="relative z-10 text-center px-6">
          <span className="font-heading text-[10rem] md:text-[14rem] font-light text-primary-500/20 leading-none select-none block">
            404
          </span>

          <div className="-mt-10 md:-mt-16 mb-8">
            <h1 className="font-heading text-3xl md:text-5xl font-light text-foreground-950 mb-3">
              Page Not Found
            </h1>
            <p className="text-sm md:text-base font-body text-secondary-500 max-w-md mx-auto leading-relaxed">
              The page you&apos;re looking for doesn&apos;t exist or has been moved.
              Let us guide you back to something beautiful.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={() => navigate("/")}
              className="btn-luxury w-full sm:w-auto px-8 py-3.5 bg-primary-500 text-background-50 text-sm font-label font-semibold tracking-wide rounded-md hover:bg-primary-600 transition-all duration-500 hover:shadow-[0_0_32px_rgba(166,124,82,0.35)] active:scale-[0.97] whitespace-nowrap"
            >
              Return Home
            </button>
            <button
              onClick={() => navigate("/projects/completed")}
              className="w-full sm:w-auto px-8 py-3.5 border border-secondary-200/50 text-foreground-800 text-sm font-label font-semibold tracking-wide rounded-md hover:bg-secondary-100/50 hover:border-secondary-300/50 transition-all duration-400 active:scale-[0.97] whitespace-nowrap"
            >
              Explore Projects
            </button>
            <button
              onClick={() => navigate("/contact")}
              className="w-full sm:w-auto px-8 py-3.5 border border-secondary-200/50 text-foreground-800 text-sm font-label font-semibold tracking-wide rounded-md hover:bg-secondary-100/50 hover:border-secondary-300/50 transition-all duration-400 active:scale-[0.97] whitespace-nowrap"
            >
              Contact Us
            </button>
          </div>
        </div>
      </main>
    </PageLayout>
  );
}