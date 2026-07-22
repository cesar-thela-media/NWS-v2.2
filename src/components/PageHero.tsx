import Link from "next/link";
import { Button } from "./Button";

type Crumb = { label: string; href?: string };

type Props = {
  breadcrumbs: Crumb[];
  title: string;
  ctaLabel?: string;
  ctaHref?: string;
  backgroundImage?: string;
};

export function PageHero({
  breadcrumbs,
  title,
  ctaLabel = "Get In Touch",
  ctaHref = "/contact/",
  backgroundImage = "/images/hero-custom-home-remodeling-paralax-image.jpg",
}: Props) {
  return (
    <section
      className="relative min-h-[280px] md:min-h-[340px] flex items-end"
      style={{
        backgroundImage: `linear-gradient(rgba(12,10,9,0.62), rgba(12,10,9,0.55)), url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container py-12 md:py-16 text-white">
        <nav className="breadcrumb mb-4" aria-label="Breadcrumb">
          {breadcrumbs.map((c, i) => (
            <span key={c.label} className="flex items-center gap-2">
              {i > 0 && <span className="sep">/</span>}
              {c.href ? (
                <Link href={c.href} className="hover:text-primary transition-colors">
                  {c.label}
                </Link>
              ) : (
                <span className="text-white/90">{c.label}</span>
              )}
            </span>
          ))}
        </nav>
        <div className="flex flex-wrap items-end justify-between gap-4">
          <h1 className="text-white text-4xl md:text-5xl font-bold m-0 tracking-tight">
            {title}
          </h1>
          {ctaLabel && (
            <Button href={ctaHref} variant="primary">
              {ctaLabel}
            </Button>
          )}
        </div>
      </div>
    </section>
  );
}
