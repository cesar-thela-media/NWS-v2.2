import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/PageHero";
import { ContactForm } from "@/components/ContactForm";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "We're a full-service construction company specializing in remodeling and custom homes. We've been building our reputation for excellence since 2007.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "About" }]}
        title="About"
        ctaLabel="Get In Touch"
        ctaHref="/contact/"
      />

      <section className="py-16 md:py-20 bg-[var(--color-bg)]">
        <div className="container grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="section-title section-title-lg">
              Your Go-to Home Builders
            </h1>
            <p>
              Discover the true meaning of Custom Homes with NWS Custom Homes
              and Remodeling! We&apos;re a full-service construction company
              specializing in remodeling and custom homes. We&apos;ve been
              building our reputation for excellence since 2007 and have
              recently expanded our services to include more projects than ever
              before. We offer a range of options for your remodeling needs:
              from kitchen and bathroom renovations to complete additions, we do
              it all!
            </p>
            <a href={`tel:${site.phone.officeTel}`} className="btn mt-4">
              Speak to Our Experts
            </a>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-[var(--shadow-card)]">
            <Image
              src="/images/hero-custom-home-remodeling-paralax-image.jpg"
              alt="hero custom home remodeling"
              width={900}
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
              alt="NWS Custom Homes and Remodeling map"
              width={638}
              height={766}
              className="w-full h-auto"
            />
          </div>
          <div>
            <p className="text-muted-foreground mb-6">
              Our team is composed of highly skilled professionals who work
              together seamlessly to ensure that each project goes smoothly from
              start to finish.
            </p>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
