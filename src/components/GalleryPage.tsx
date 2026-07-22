import Image from "next/image";
import { PageHero } from "@/components/PageHero";
import type { Gallery } from "@/data/galleries";

export function GalleryPage({ gallery }: { gallery: Gallery }) {
  return (
    <>
      <PageHero
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: gallery.title },
        ]}
        title={gallery.title}
        ctaLabel="Get In Touch"
        ctaHref="/contact/"
      />

      <section className="py-16 md:py-20 bg-[var(--color-bg)]">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="section-title">{gallery.heading}</h1>
            <p className="text-muted-foreground">{gallery.description}</p>
          </div>

          <div className="gallery-grid">
            {gallery.images.map((src, i) => (
              <a key={src} href={src} target="_blank" rel="noopener noreferrer">
                <Image
                  src={src}
                  alt={`${gallery.heading} ${i + 1}`}
                  width={600}
                  height={450}
                  className="w-full h-full object-cover"
                />
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
