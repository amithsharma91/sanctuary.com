import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/feature/Navbar";
import Footer from "@/components/feature/Footer";
import PageMeta from "@/components/feature/PageMeta";
import PageHero from "@/components/feature/PageHero";
import PageCTA from "@/components/feature/PageCTA";
import { BlogPosts } from "@/mocks/blog";
import { absoluteUrl, buildBreadcrumbSchema } from "@/utils/seo";

export default function Blog() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative bg-background-50">
      <PageMeta
        title="Architecture & Interior Design Journal | Sanctuary"
        description="Thoughts, insights and stories from Sanctuary Architects & Designers - design philosophy, craft, and the ideas shaping our practice in Bangalore."
        keywords="Sanctuary Architects blog, architecture insights, design stories, architecture writing, Sanctuary Architects journal"
        ogImage="https://readdy.ai/api/search-image?query=Editorial%20architecture%20journal%20scene%2C%20open%20magazine%20with%20architectural%20photography%20on%20warm%20wooden%20desk%2C%20soft%20natural%20window%20light%2C%20fountain%20pen%20and%20coffee%20cup%2C%20minimal%20sophisticated%20creative%20workspace%2C%20warm%20cream%20and%20earth%20tones%2C%20premium%20editorial%20atmosphere&width=1920&height=1080&seq=blog-hero-2026&orientation=landscape"
        canonicalPath="/blog"
        schema={[
          {
            "@context": "https://schema.org",
            "@type": "Blog",
            name: "Journal - Sanctuary Architects & Designers",
            description: "Thoughts, insights, and stories from Sanctuary Architects & Designers on design philosophy, craft, and practice.",
          },
          buildBreadcrumbSchema([{ name: "Home", path: "/" }, { name: "Blog" }]),
        ]}
      />
      <Navbar />
      <main>
        <PageHero
          title="Blog"
          subtitle="Thoughts, insights and stories from Sanctuary."
          image="https://readdy.ai/api/search-image?query=Editorial%20architecture%20journal%20scene%2C%20open%20magazine%20with%20architectural%20photography%20on%20warm%20wooden%20desk%2C%20soft%20natural%20window%20light%2C%20fountain%20pen%20and%20coffee%20cup%2C%20minimal%20sophisticated%20creative%20workspace%2C%20warm%20cream%20and%20earth%20tones%2C%20premium%20editorial%20atmosphere&width=1920&height=1080&seq=blog-hero-2026&orientation=landscape"
          breadcrumb={[{ label: "Blog" }]}
        />

        {/* Blog Listing */}

        <section className="py-24 md:py-36 bg-background-50">
          <div className="w-full px-6 md:px-10 lg:px-14">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {BlogPosts.map((post) => (
                <div
                  key={post.slug}
                  className={`group hover:shadow-lg hover:transition-shadow duration-300 transition-all ${post.featuredImage ? "group-hover:scale-105" : ""}`}
                >
                  {post.featuredImage && (
                    <img
                      src={post.featuredImage}
                      alt={post.featuredImageAlt}
                      className="w-full h-48 md:h-56 object-cover rounded-md mb-4 group-hover:opacity-90 transition-opacity"
                    />
                  )}
                  {!post.featuredImage && (
                      <div
                        className="h-48 md:h-56 bg-border-200 flex items-center justify-center rounded-md mb-4"
                      >
                        <span className="text-xs font-body text-secondary-500">
                          Image forthcoming
                        </span>
                      </div>
                    )
                  }

                  <div className="p-4">
                    <h3 className="font-heading text-xl md:text-2xl font-light text-foreground-950 mb-2 line-clamp-2">
                      {post.title}
                    </h3>

                    <p className="text-sm md:text-base font-body text-secondary-600 line-clamp-3 mb-4">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center gap-2 text-xs font-body text-secondary-500">
                      <span>{post.category}</span>
                      <span>{new Date(post.datePublished).toLocaleDateString("en-IN", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}</span>
                    </div>

                    <Link
                      to={`/blog/${post.slug}`}
                      className="mt-3 inline-flex items-center gap-1 px-4 py-2 text-sm font-medium bg-primary-100 text-primary-800 rounded-md hover:bg-primary-200 transition-colors"
                    >
                      Read Article
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-3.5 w-3.5"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Empty State (when no articles, fallback) */}
        <section
          ref={ref}
          className="py-24 md:py-36 bg-background-50 hidden"
        >
          <div className="w-full px-6 md:px-10 lg:px-14">
            <div
              className={`max-w-xl mx-auto text-center transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            >
              <div className="w-14 h-14 mx-auto mb-6 flex items-center justify-center rounded-full bg-primary-100/50 text-primary-500">
                <i className="ri-quill-pen-line text-2xl" />
              </div>
              <p className="text-xs font-body tracking-[0.15em] uppercase text-primary-500 mb-3">
                Journal
              </p>
              <h2 className="font-heading text-3xl md:text-5xl font-light text-foreground-950 mb-5 leading-[1.1]">
                No Articles Published Yet.
              </h2>
              <p className="text-sm md:text-base font-body text-secondary-600 leading-relaxed mb-10 max-w-md mx-auto">
                Stories from our studio will live here soon. Check back as we share
                thoughts, insights and experiences from Sanctuary.
              </p>
              <Link
                to="/"
                className="btn-luxury inline-flex items-center gap-2 px-8 py-3 bg-foreground-950 text-background-50 text-sm font-label font-semibold tracking-wide rounded-md hover:bg-foreground-800 transition-all duration-500 hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] active:scale-[0.97] whitespace-nowrap"
              >
                Return to Home
                <i className="ri-arrow-right-line" />
              </Link>
            </div>
          </div>
        </section>

        <PageCTA />
      </main>
      <Footer />
    </div>
  );
}