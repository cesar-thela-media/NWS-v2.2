import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { AreasGrid } from "@/components/AreasGrid";
import { ContactForm } from "@/components/ContactForm";
import Hero04 from "@/components/shadcn-space/blocks/hero-04";
import LogoCloud03 from "@/components/shadcn-space/blocks/logo-cloud-03/logo-cloud";
import { site } from "@/data/site";
import { locations } from "@/data/locations";

export const metadata: Metadata = {
  title: "Areas We Serve",
  description:
    "Find a dependable remodeling company in Richmond, TX. We have over 35 years of combined experience. Call (281) 299-2309 to start your project.",
};

/**
 * Areas hub: Hero 04 + city chips + logo cloud + communities grid + form.
 */
export default function AreasWeServePage() {
  return (
    <>
      <Hero04
        eyebrow="Fort Bend & west Houston"
        titleLine1="Areas we serve"
        titleLine2="Local builds that last"
        description="We complete every project promptly, effectively, and with the utmost attention to detail across Richmond and nearby communities."
        imageSrc={site.mapFull}
        imageAlt="NWS service map across Fort Bend County"
        primaryCtaLabel={`Call ${site.phone.office}`}
        primaryCtaHref={`tel:${site.phone.officeTel}`}
        secondaryLabel="Browse communities"
        secondaryHref="#communities"
      />

      <section
        className="border-b border-border bg-muted/30 py-8"
        data-areas-city-chips
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold text-primary !m-0 mb-3">
            Jump to a community
          </p>
          <div className="flex flex-wrap gap-2">
            {locations.slice(0, 8).map((loc) => (
              <Link
                key={loc.slug}
                href={loc.href === "#" ? "/areas-we-serve/" : loc.href}
                className="rounded-full border border-border bg-background px-3 py-1.5 text-sm text-foreground hover:bg-primary hover:text-white hover:border-primary transition-colors"
              >
                {loc.name.replace(/,?\s*TX$/i, "")}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <LogoCloud03 />

      <section
        id="communities"
        className="py-16 md:py-20 bg-background"
        data-areas-communities
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 max-w-2xl mx-auto">
            <h2 className="section-title text-foreground">
              Communities we know well
            </h2>
            <p className="text-muted-foreground">
              Local remodeling and custom builds where Fort Bend families live.
            </p>
          </div>
          <AreasGrid />
        </div>
      </section>

      <section className="relative py-16 overflow-hidden bg-muted/40">
        <div
          className="absolute inset-0 bg-[color-mix(in_oklab,var(--primary)_6%,transparent)]"
          aria-hidden
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="section-title text-foreground">Start your project</h2>
            <p className="text-muted-foreground mb-6">
              Reach out to our contractors. Office {site.phone.office}.
            </p>
            <Button
              className="rounded-[4px] h-11 !text-white mb-8"
              render={<a href={`tel:${site.phone.officeTel}`} />}
            >
              Call {site.phone.office}
            </Button>
            <div className="rounded-xl overflow-hidden border border-border">
              <Image
                src={site.mapSmall}
                alt="NWS map"
                width={638}
                height={766}
                className="w-full h-auto"
              />
            </div>
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
