import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/feature/Navbar";
import Footer from "@/components/feature/Footer";
import PageHero from "@/components/feature/PageHero";
import PageCTA from "@/components/feature/PageCTA";
import PageMeta from "@/components/feature/PageMeta";
import { testimonials } from "@/mocks/testimonials";

export default function Testimonials() {
  const navigate = useNavigate();

  return (
    <div className="relative bg-background-50">
      <PageMeta
        title="Testimonials"
        description="Hear from our clients about their experience working with Sanctuary Architects. Real stories from homeowners, developers, and hospitality leaders across India. 4.9★ Google rating."
        keywords="architecture client reviews, luxury villa testimonials, architect reviews Bangalore, Sanctuary Architects client feedback, interior design testimonials"
        canonicalPath="/testimonials"
      />
      <Navbar />
      <main>
        <PageHero
          title="Testimonials"
          subtitle="Hear from our clients about their experience working with Sanctuary — from private homeowners to hospitality leaders, every story is a partnership we cherish."
          image="https://readdy.ai/api/search-image?query=Luxury%20modern%20villa%20living%20room%20with%20happy%20family%20enjoying%20their%20home%2C%20warm%20natural%20light%2C%20sophisticated%20interior%20design%2C%20genuine%20joyful%20atmosphere%2C%20editorial%20lifestyle%20photography%2C%20warm%20earth%20tones%2C%20refined%20elegant%20setting&width=1920&height=1080&seq=testimonials-hero&orientation=landscape"
          breadcrumb={[{ label: "Testimonials" }]}
        />

        {/* Google Rating */}
        <section className="py-20 md:py-28 bg-background-50">
          <div className="w-full px-6 md:px-10 lg:px-14">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <div className="inline-flex items-center gap-3 mb-6 bg-background-50 border border-secondary-200/50 rounded-full px-6 py-3">
                <span className="text-sm font-body text-secondary-600">Google</span>
                <div className="flex items-center gap-0.5">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <i key={star} className="ri-star-fill text-amber-400 text-sm" />
                  ))}
                </div>
                <span className="font-heading text-2xl font-light text-foreground-950">4.9</span>
                <span className="text-xs font-body text-secondary-500">(120+ reviews)</span>
              </div>
              <h2 className="font-heading text-3xl md:text-4xl font-light text-foreground-950 mb-4">What Our Clients Say.</h2>
              <p className="text-sm font-body text-secondary-500 max-w-lg mx-auto">
                Real stories from real people who trusted us with their most personal spaces.
              </p>
            </div>

            {/* Review Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
              {testimonials.map((testimonial, idx) => (
                <TestimonialCard key={testimonial.name} testimonial={testimonial} index={idx} />
              ))}
            </div>

            {/* Additional Reviews */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto mt-6 md:mt-8">
              {[
                {
                  name: "Ravi Subramanian",
                  role: "Managing Director, Sattva Group",
                  text: "Sanctuary's approach to commercial architecture transformed our office campus into a destination that attracts top talent. The biophilic design elements have measurably improved employee satisfaction.",
                  rating: 5,
                },
                {
                  name: "Dr. Kavita Menon",
                  role: "Homeowner, Villa Nirvaana",
                  text: "Every morning I wake up and feel grateful for this home. Sanctuary didn't just design a building — they crafted the backdrop for our family's most precious memories. The attention to light, material, and flow is extraordinary.",
                  rating: 5,
                },
              ].map((t, idx) => (
                <TestimonialCard key={t.name} testimonial={t} index={idx + testimonials.length} />
              ))}
            </div>
          </div>
        </section>

        <PageCTA title="Ready To Start Your Story?" subtitle="Every great project begins with a conversation. We would love to hear about your vision." />
      </main>
      <Footer />
    </div>
  );
}

function TestimonialCard({ testimonial, index }: { testimonial: any; index: number }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([e]) => { if (e.isIntersecting) setIsVisible(true); }, { threshold: 0.1 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`card-luxury bg-background-50 p-7 md:p-8 rounded-lg border border-secondary-200/30 transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="flex gap-0.5 mb-4">
        {[1, 2, 3, 4, 5].map((star) => (
          <i key={star} className={`text-sm ${star <= testimonial.rating ? "ri-star-fill text-amber-400" : "ri-star-line text-secondary-300"}`} />
        ))}
      </div>
      <p className="text-sm font-body text-secondary-600 leading-relaxed italic mb-6">&ldquo;{testimonial.text}&rdquo;</p>
      <div>
        <p className="font-heading text-lg font-light text-foreground-950">{testimonial.name}</p>
        <p className="text-xs font-body text-secondary-500">{testimonial.role}</p>
      </div>
    </div>
  );
}