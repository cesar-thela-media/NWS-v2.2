import Image from "next/image";
import Link from "next/link";
import { ContactForm } from "@/components/ContactForm";
import Hero04 from "@/components/shadcn-space/blocks/hero-04";
import { site } from "@/data/site";
import type { Location } from "@/data/locations";

/**
 * Location family: Hero 04 (Glyph) + sticky rail longform + map/form tail.
 */
export function LocationPage({ location }: { location: Location }) {
  const ctaHref =
    location.ctaHref ||
    (location.ctaLabel?.toLowerCase().includes("call") ||
    location.ctaLabel?.toLowerCase().includes("speak") ||
    location.ctaLabel?.toLowerCase().includes("start your project")
      ? `tel:${site.phone.officeTel}`
      : "/contact/");

  const heroSrc =
    location.heroImage ||
    "/images/hero-custom-home-remodeling-paralax-image.jpg";

  const shortName = location.name.replace(/,?\s*TX$/i, "").trim();

  return (
    <>
      <Hero04
        eyebrow="Areas we serve"
        titleLine1={shortName}
        titleLine2="Custom homes & remodels"
        description={
          location.body?.[0] ||
          `Local craftsmanship for ${shortName} and nearby Fort Bend communities since 2007.`
        }
        imageSrc={heroSrc}
        imageAlt={`Remodeling services in ${location.name}`}
        primaryCtaLabel={location.ctaLabel || "Get in touch"}
        primaryCtaHref={ctaHref}
        secondaryLabel="View services"
        secondaryHref="/services/"
        breadcrumb={
          <nav className="text-sm text-muted-foreground mb-1">
            <Link href="/" className="hover:text-primary">
              Home
            </Link>
            <span className="mx-2 text-border">/</span>
            <Link href="/areas-we-serve/" className="hover:text-primary">
              Areas
            </Link>
            <span className="mx-2 text-border">/</span>
            <span className="text-foreground">{location.name}</span>
          </nav>
        }
      />

      <section
        className="py-12 md:py-20 bg-background"
        data-location-longform
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
          <div className="lg:col-span-5 order-1">
            <div className="lg:sticky lg:top-28 rounded-2xl overflow-hidden border border-border shadow-[var(--shadow-card)]">
              <Image
                src={heroSrc}
                alt={`Remodeling services in ${location.name}`}
                width={800}
                height={960}
                className="w-full h-auto object-cover max-h-[28rem] lg:max-h-none"
              />
            </div>
          </div>

          <div className="lg:col-span-7 prose-nws order-2">
            <h2 className="text-[22px] md:text-[28px] text-foreground font-bold tracking-tight !mt-0">
              {location.h1}
            </h2>
            {location.body.map((p) => (
              <p key={p.slice(0, 48)}>{p}</p>
            ))}

            {location.sections?.map((section) => (
              <div key={section.heading} className="mt-10">
                <h3>{section.heading}</h3>
                {section.paragraphs?.map((p) => (
                  <p key={p.slice(0, 40)}>{p}</p>
                ))}
                {section.services && (
                  <ul className="mt-4 space-y-3 list-none pl-0">
                    {section.services.map((item) => (
                      <li
                        key={item.href + item.label}
                        className="flex gap-3 rounded-xl border border-border bg-muted/30 p-3"
                      >
                        <span className="text-primary font-bold shrink-0">
                          →
                        </span>
                        <span>
                          <Link
                            href={item.href}
                            className="text-primary font-semibold hover:underline"
                          >
                            {item.label}
                          </Link>
                          {item.detail ? <>: {item.detail}</> : null}
                        </span>
                      </li>
                    ))}
                  </ul>
                )}
                {section.bullets && (
                  <ul className="mt-4">
                    {section.bullets.map((b) => (
                      <li key={b.slice(0, 40)}>{b}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-16 overflow-hidden bg-[#0f1416] text-white">
        <div
          className="absolute inset-0 bg-[color-mix(in_oklab,var(--primary)_12%,transparent)]"
          aria-hidden
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <div>
            <p className="text-primary font-semibold text-sm !m-0 mb-2">
              Local presence
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-white !m-0 mb-4">
              {location.formTitle}
            </h2>
            {location.formIntro && (
              <p className="text-white/75 mb-6">{location.formIntro}</p>
            )}
            <div className="rounded-xl overflow-hidden border border-white/10">
              <Image
                src={site.mapSmall}
                alt="NWS map"
                width={638}
                height={766}
                className="w-full h-auto"
              />
            </div>
          </div>
          <div className="rounded-2xl bg-background text-foreground p-1 sm:p-2">
            <ContactForm title={location.formTitle} subtitle="Get in Touch" />
          </div>
        </div>
      </section>
    </>
  );
}
