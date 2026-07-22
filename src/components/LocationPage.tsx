import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { ContactForm } from "@/components/ContactForm";
import { site } from "@/data/site";
import type { Location } from "@/data/locations";

export function LocationPage({ location }: { location: Location }) {
  const ctaHref =
    location.ctaHref ||
    (location.ctaLabel?.toLowerCase().includes("call") ||
    location.ctaLabel?.toLowerCase().includes("speak") ||
    location.ctaLabel?.toLowerCase().includes("start your project")
      ? `tel:${site.phone.officeTel}`
      : "/contact/");

  return (
    <>
      <PageHero
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: location.name },
        ]}
        title={location.name}
        ctaLabel="Get In Touch"
        ctaHref="/contact/"
      />

      <section className="py-16 md:py-20 bg-[var(--color-bg)]">
        <div className="container grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="prose-nws">
            <h1 className="text-[26px] md:text-[32px] text-foreground font-bold tracking-tight">
              {location.h1}
            </h1>
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
                  <ul className="mt-4 space-y-2">
                    {section.services.map((item) => (
                      <li key={item.href + item.label} className="flex gap-2">
                        <span className="text-primary">■</span>
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

            {location.ctaLabel && (
              <Link href={ctaHref} className="btn mt-6 inline-flex">
                {location.ctaLabel}
              </Link>
            )}
          </div>
          <div className="rounded-2xl overflow-hidden shadow-[var(--shadow-card)]">
            <Image
              src={
                location.heroImage ||
                "/images/hero-custom-home-remodeling-paralax-image.jpg"
              }
              alt={`Remodeling services in ${location.name}`}
              width={800}
              height={600}
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      <section className="py-16 bg-[var(--color-bg-alt)]">
        <div className="container grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="rounded-xl overflow-hidden shadow-[var(--shadow-card)]">
            <Image
              src={site.mapSmall}
              alt="NWS map"
              width={638}
              height={766}
              className="w-full h-auto"
            />
          </div>
          <div>
            {location.formIntro && (
              <p className="text-muted-foreground mb-6">
                {location.formIntro}
              </p>
            )}
            <ContactForm
              title={location.formTitle}
              subtitle="Get in Touch"
            />
          </div>
        </div>
      </section>
    </>
  );
}
