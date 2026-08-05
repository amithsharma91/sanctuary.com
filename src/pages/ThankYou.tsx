import { useNavigate } from "react-router-dom";
import PageLayout from "@/components/feature/PageLayout";
import PageMeta from "@/components/feature/PageMeta";

export default function ThankYou() {
  const navigate = useNavigate();

  return (
    <PageLayout>
      <PageMeta
        title="Thank You"
        description="Your enquiry has been received by Sanctuary Architects & Designers. We'll get back to you within 24 hours to discuss your architecture project."
        canonicalPath="/thank-you"
      />
      <main className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://readdy.ai/api/search-image?query=Luxury%20modern%20architecture%20interior%20with%20warm%20golden%20hour%20light%20streaming%20through%20large%20windows%2C%20peaceful%20serene%20atmosphere%2C%20elegant%20marble%20and%20wood%20details%2C%20soft%20shadows%2C%20calm%20contemplative%20mood%2C%20editorial%20architectural%20photography%2C%20warm%20amber%20and%20cream%20tones%2C%20feeling%20of%20quiet%20achievement%20and%20satisfaction&width=1920&height=1080&seq=thankyou-bg&orientation=landscape"
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-background-50/60 backdrop-blur-[1px]" />
        </div>

        <div className="relative z-10 text-center px-6 py-20">
          {/* Success icon */}
          <div className="w-20 h-20 mx-auto mb-8 flex items-center justify-center rounded-full bg-green-100/80 border border-green-200/50">
            <i className="ri-check-line text-4xl text-green-600" />
          </div>

          <h1 className="font-heading text-3xl md:text-5xl lg:text-6xl font-light text-foreground-950 mb-4">
            Thank You.
          </h1>
          <p className="text-sm md:text-base font-body text-secondary-600 max-w-lg mx-auto leading-relaxed mb-2">
            Your enquiry has been received. Our studio team will review your message
            and get back to you within <strong>24 hours</strong>.
          </p>
          <p className="text-xs font-body text-secondary-400 mb-10 max-w-md mx-auto">
            In the meantime, feel free to explore our portfolio or follow us on Instagram
            for daily design inspiration.
          </p>

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
              View Projects
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