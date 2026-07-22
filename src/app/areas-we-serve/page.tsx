import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/PageHero";
import { AreasGrid } from "@/components/AreasGrid";
import { ContactForm } from "@/components/ContactForm";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Areas We Serve",
  description:
    "Find a dependable remodeling company in Richmond, TX. We have over 35 years of combined experience. Call (281) 299-2309 to start your project.",
};

export default function AreasWeServePage() {
  return (
    <>
      <PageHero
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Areas We Serve" },
        ]}
        title="Areas We Serve"
        ctaLabel="Get In Touch"
        ctaHref="/contact/"
      />

      <section className="py-16 md:py-20 bg-[var(--color-bg)]">
        <div className="container">
          <div className="text-center mb-10 max-w-2xl mx-auto">
            <h1 className="section-title">Areas We Serve</h1>
            <p className="text-muted-foreground">
              We complete every project promptly, effectively, and with the
              utmost attention to detail.
            </p>
          </div>
          <AreasGrid />
        </div>
      </section>

      <section className="py-16 bg-[var(--color-bg-alt)]">
        <div className="container grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="rounded-xl overflow-hidden shadow-[var(--shadow-card)]">
            <Image
              src={site.mapSmall}
              alt="NWS Custom Homes and Remodeling map"
              width={638}
              height={766}
              className="w-full h-auto"
            />
          </div>
          <ContactForm />
        </div>
      </section>

      <section className="py-16 bg-[var(--color-bg)]">
        <div className="container">
          <p className="section-label">Start Your Project</p>
          <h2 className="section-title">Reach Out to Our Contractors</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            <div>
              <h3 className="text-lg mb-2">Phone</h3>
              <p className="text-sm text-muted-foreground mb-2">
                Questions or queries? Get in touch!
              </p>
              <a
                href={`tel:${site.phone.officeTel}`}
                className="text-[var(--color-primary)] font-semibold"
              >
                Office: {site.phone.office}
              </a>
            </div>
            <div>
              <h3 className="text-lg mb-2">Find Us</h3>
              <p>{site.location}</p>
            </div>
            <div>
              <h3 className="text-lg mb-2">Business Hours</h3>
              <p className="mb-1">
                <strong>Mon - Fri:</strong> 8:00 AM - 6:00 PM
              </p>
              <p className="mb-1">
                <strong>Sat:</strong> 8:00 AM - 12:00 PM
              </p>
              <p>
                <strong>Sun:</strong> Closed
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
