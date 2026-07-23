import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { CTABanner } from "@/components/CTABanner";
import { servicePages, getServicePage } from "@/data/servicePages";
import { site } from "@/data/site";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return servicePages.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const page = getServicePage(slug);
  if (!page) return {};
  return {
    title: page.title,
    description: page.metaDescription,
  };
}

/** Service detail: split hero + narrow reading column (not PageHero stack) */
export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const page = getServicePage(slug);
  if (!page) notFound();

  return (
    <>
      <section className="grid grid-cols-1 lg:grid-cols-2 min-h-[min(70svh,640px)]">
        <div className="relative min-h-[16rem] lg:min-h-full order-1 lg:order-2">
          <Image
            src={page.image || "/images/kitchen-gallery-1.jpeg"}
            alt={page.imageAlt || page.breadcrumb}
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="flex flex-col justify-center gap-5 px-6 sm:px-10 lg:px-16 py-14 bg-[#12181b] text-white order-2 lg:order-1">
          <nav className="text-sm text-white/55">
            <Link href="/" className="hover:text-primary">
              Home
            </Link>
            <span className="mx-2">/</span>
            <Link href="/services/" className="hover:text-primary">
              Services
            </Link>
            <span className="mx-2">/</span>
            <span className="text-white/90">{page.breadcrumb}</span>
          </nav>
          {page.heroLabel && (
            <p className="text-sm font-semibold text-primary !m-0">
              {page.heroLabel}
            </p>
          )}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight !m-0">
            {page.heroTitle || page.h1}
          </h1>
          <p className="text-white/75 text-base sm:text-lg !m-0 max-w-xl">
            {page.heroText}
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <Button
              className="rounded-[4px] h-11 !text-white"
              render={
                <a href={`tel:${site.phone.officeTel}`}>
                  {page.heroCta || "Get in touch"}
                </a>
              }
            >
              {page.heroCta || "Get in touch"}
            </Button>
            <Button
              variant="outline"
              className="rounded-[4px] h-11 !border-white/35 !text-white hover:!bg-white/10"
              render={<Link href="/remodeling-gallery/" />}
            >
              View our work
            </Button>
          </div>
        </div>
      </section>

      <section className="py-14 md:py-20 bg-background">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 prose-nws">
          <h2 className="text-[26px] md:text-[32px] text-foreground font-bold tracking-tight">
            {page.h1}
          </h2>
          {page.intro.map((p) => (
            <p key={p.slice(0, 40)}>{p}</p>
          ))}

          {page.sections.map((section) => (
            <div key={section.heading} className="mt-10">
              <h3>{section.heading}</h3>
              {section.paragraphs?.map((p) => (
                <p key={p.slice(0, 40)}>{p}</p>
              ))}
              {section.bullets && (
                <ul>
                  {section.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              )}
              {section.subBlocks?.map((block) => (
                <div key={block.title} className="mb-6">
                  <h4>{block.title}</h4>
                  <ul>
                    {block.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          ))}

          {page.faqs && page.faqs.length > 0 && (
            <div className="mt-14">
              <h2 className="section-title">FAQ</h2>
              <div className="mt-4 space-y-3">
                {page.faqs.map((faq) => (
                  <details
                    key={faq.q}
                    className="rounded-xl border border-border bg-muted/30 p-4"
                  >
                    <summary className="font-semibold cursor-pointer">
                      {faq.q}
                    </summary>
                    <div className="mt-2 text-muted-foreground">{faq.a}</div>
                  </details>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      <CTABanner
        label={page.ctaLabel || "Get in Touch"}
        title={page.ctaTitle || "Let's Get Started"}
        text={
          page.ctaText ||
          "Contact NWS Custom Homes and Remodeling today to discuss your project."
        }
        ctaLabel={page.ctaButton || "Call Now"}
        ctaHref={`tel:${site.phone.officeTel}`}
      />
    </>
  );
}
