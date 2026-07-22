import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { ServiceFlipCard } from "@/components/ServiceFlipCard";
import { serviceCards } from "@/data/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Learn more about our dependable remodeling company in Richmond, TX. We have over 35 years of combined experience. Call us at (281) 299-2309.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services" },
        ]}
        title="Services"
        ctaLabel="Contact Our Experts"
        ctaHref="/contact/"
      />

      <section className="py-16 md:py-20 bg-[var(--color-bg-alt)]">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="section-title">Our Quality Services</h2>
            <p className="text-muted-foreground">
              Our wide range of services means we can build you a custom home
              from square one or remodel an existing one. We can help you find
              the right lot, plan out your dream home, or help you convert an
              existing structure into your dream home!
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceCards.map((s) => (
              <ServiceFlipCard key={s.slug} service={s} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
