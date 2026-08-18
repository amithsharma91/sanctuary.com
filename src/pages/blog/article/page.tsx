import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Navbar from "@/components/feature/Navbar";
import Footer from "@/components/feature/Footer";
import PageMeta from "@/components/feature/PageMeta";
import PageHero from "@/components/feature/PageHero";
import NotFound from "@/pages/NotFound";
import { BlogPosts } from "@/mocks/blog";
import { absoluteUrl, buildBreadcrumbSchema } from "@/utils/seo";

function BlogArticle() {
  const { slug } = useParams<{ slug: string }>();
  const post = BlogPosts.find((p) => p.slug === slug);

if (!post) {
    return <NotFound />;
}

  return (
    <div className="relative">
      <PageMeta
        title={post.title}
        description={post.description}
        ogType="article"
        canonicalPath={`/blog/${post.slug}`}
        schema={[
          {
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.title,
            description: post.description,
            image: post.featuredImage,
            ...(post.datePublished && {
              datePublished: post.datePublished,
            }),
            ...(post.dateModified && {
              dateModified: post.dateModified,
            }),
            author: {
              "@type": "Organization",
              name: "Sanctuary Architects & Designers",
            },
            publisher: {
              "@type": "Organization",
              name: "Sanctuary Architects & Designers",
            },
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": absoluteUrl(`/blog/${post.slug}`),
            },
          },
        ]}
      />
      <Navbar />
      <main className="relative">
        <PageHero
          title={post.title}
          subtitle={post.excerpt}
          image={post.featuredImage}
          breadcrumb={[
            { label: "Home", href: "/" },
            { label: "Blog", href: "/blog" },
            { label: post.title },
          ]}
        />

        <section className="py-12 md:py-20 bg-background-50">
          <div className="w-full px-6 md:px-10 lg:px-14 max-w-2xl mx-auto">
            <div className="space-y-6">

              <div className="flex items-center gap-2 mb-4">
                <span className="text-xs font-body tracking-[0.15em] uppercase text-primary-500 category-badge">
                  {post.category}
                </span>
              </div>

              <h1 className="font-heading text-4xl md:text-5xl font-light text-foreground-950 mb-6 leading-[1.2]">
                {post.title}
              </h1>

              {post.datePublished && (
                <p className="text-sm md:text-base font-body text-secondary-600 mb-8">
                  {new Date(post.datePublished).toLocaleDateString("en-IN", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>
              )}

              <img
                src={post.featuredImage}
                alt={post.featuredImageAlt}
                className="w-full h-64 md:h-80 object-cover rounded-md mb-8"
              />

              <div dangerouslySetInnerHTML={{ __html: post.content }} className="prose text-foreground-950 max-w-none" />

              <div className="pt-8 border-t border-border-200">
                <Link
                  to="/blog"
className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-primary-600 hover:text-primary-800 transition-colors">
                    Back to Blog
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
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
          </div>
        </section>

        <Footer />
      </main>
    </div>
  );
}

export default BlogArticle;


