import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
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

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const page = getServicePage(slug);
  if (!page) notFound();

  return (
    <>
      <PageHero
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services/" },
          { label: page.breadcrumb },
        ]}
        title={page.breadcrumb}
        ctaLabel={page.heroCta || "Get In Touch"}
        ctaHref="/contact/"
      />

      <section className="py-14 md:py-16 bg-[var(--color-bg)]">
        <div className="container max-w-4xl text-center">
          {page.heroLabel && (
            <p className="section-label">{page.heroLabel}</p>
          )}
          <h2 className="section-title section-title-lg">{page.heroTitle}</h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto mb-6">
            {page.heroText}
          </p>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-[var(--color-bg)]">
        <div className="container prose-nws max-w-4xl">
          <h1 className="text-[28px] md:text-[36px] text-[var(--color-heading)]">
            {page.h1}
          </h1>
          {page.intro.map((p) => (
            <p key={p.slice(0, 40)}>{p}</p>
          ))}

          {page.image && (
            <div className="content-image">
              <Image
                src={page.image}
                alt={page.imageAlt || page.breadcrumb}
                width={900}
                height={600}
                className="w-full h-auto"
              />
            </div>
          )}

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
              <h2 className="section-title">
                {page.slug === "home-remodel"
                  ? "Frequently Asked Questions About Home Remodeling"
                  : page.slug === "kitchen-remodeling"
                    ? "Frequently Asked Questions About Kitchen Remodeling"
                    : page.slug === "bathroom-remodeling"
                      ? "Bathroom Remodeling FAQ"
                      : page.slug === "custom-home-builder"
                        ? "Custom Home Building FAQ"
                        : `${page.breadcrumb} FAQ`}
              </h2>
              <div className="mt-4">
                {page.faqs.map((faq) => (
                  <details key={faq.q} className="faq-item">
                    <summary>{faq.q}</summary>
                    <div className="faq-answer">{faq.a}</div>
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
