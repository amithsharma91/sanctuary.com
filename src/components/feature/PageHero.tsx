import { useNavigate } from "react-router-dom";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface PageHeroProps {
  title: string;
  subtitle: string;
  image: string;
  breadcrumb: BreadcrumbItem[];
}

export default function PageHero({ title, subtitle, image, breadcrumb }: PageHeroProps) {
  const navigate = useNavigate();

  return (
    <section className="relative w-full min-h-[55vh] md:min-h-[60vh] flex items-end pb-14 md:pb-20 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 animate-gentle-zoom">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover object-top"
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/25 to-black/55" />

      {/* Content */}
      <div className="relative z-10 w-full px-6 md:px-10 lg:px-14">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 mb-6 text-xs font-body tracking-[0.04em]">
          <button
            onClick={() => navigate("/")}
            className="text-background-200/70 hover:text-background-50 transition-colors duration-300"
          >
            Home
          </button>
          {breadcrumb.map((item, i) => (
            <span key={i} className="flex items-center gap-2">
              <i className="ri-arrow-right-s-line text-background-200/40 text-[10px]" />
              {item.href ? (
                <button
                  onClick={() => navigate(item.href!)}
                  className="text-background-200/70 hover:text-background-50 transition-colors duration-300"
                >
                  {item.label}
                </button>
              ) : (
                <span className="text-background-50">{item.label}</span>
              )}
            </span>
          ))}
        </nav>

        <h1 className="font-heading text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-light text-background-50 leading-[1.08] mb-4 animate-fade-up">
          {title}
        </h1>
        <p className="text-sm md:text-base font-body text-background-200/75 max-w-xl leading-relaxed animate-fade-up" style={{ animationDelay: "0.15s" }}>
          {subtitle}
        </p>
      </div>
    </section>
  );
}