import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { AreasGrid } from "@/components/AreasGrid";
import { ContactForm } from "@/components/ContactForm";
import LogoCloud03 from "@/components/shadcn-space/blocks/logo-cloud-03/logo-cloud";
import { site } from "@/data/site";
import { locations } from "@/data/locations";

export const metadata: Metadata = {
  title: "Areas We Serve",
  description:
    "Find a dependable remodeling company in Richmond, TX. We have over 35 years of combined experience. Call (281) 299-2309 to start your project.",
};

/**
 * Areas hub: themed map hero (hero-12-style dark photo band) + logo cloud + grid + form.
 */
export default function AreasWeServePage() {
  return (
    <>
      <section
        className="relative min-h-[52svh] flex items-center overflow-hidden bg-[#0c1012] text-white"
        data-areas-map-hero
      >
        <Image
          src={site.mapFull}
          alt=""
          fill
          className="object-cover opacity-45"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/65 to-black/30" />
        <div className="absolute inset-0 bg-[color-mix(in_oklab,var(--primary)_18%,transparent)]" />
        <div
          className="absolute inset-0 opacity-[0.1] mix-blend-overlay pointer-events-none"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.5'/%3E%3C/svg%3E\")",
          }}
          aria-hidden
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 w-full pt-32">
          <p className="text-sm font-semibold text-primary !m-0 mb-3">
            Fort Bend & west Houston
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight !m-0 max-w-2xl">
            Areas we serve
          </h1>
          <p className="mt-4 text-white/85 max-w-lg !m-0 text-base sm:text-lg">
            We complete every project promptly, effectively, and with the utmost
            attention to detail across Richmond and nearby communities.
          </p>
          <div className="mt-8 flex flex-wrap gap-2">
            {locations.slice(0, 8).map((loc) => (
              <Link
                key={loc.slug}
                href={loc.href === "#" ? "/areas-we-serve/" : loc.href}
                className="rounded-full border border-white/25 bg-white/10 px-3 py-1.5 text-sm text-white hover:bg-primary hover:border-primary transition-colors"
              >
                {loc.name.replace(/,?\s*TX$/i, "")}
              </Link>
            ))}
          </div>
          <div className="mt-8">
            <Button
              className="rounded-[4px] h-11 !text-white"
              render={<a href={`tel:${site.phone.officeTel}`} />}
            >
              Call {site.phone.office}
            </Button>
          </div>
        </div>
      </section>

      <LogoCloud03 />

      <section className="py-16 md:py-20 bg-background">
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
