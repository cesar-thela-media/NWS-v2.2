import Link from "next/link";
import { Button } from "@/components/ui/button";
import Hero22 from "@/components/shadcn-space/blocks/hero-22/hero";
import { GalleryMasonry } from "@/components/GalleryMasonry";
import type { Gallery } from "@/data/galleries";

/**
 * Gallery family: Hero 22 carousel + scratch masonry + contrast-safe secondary band.
 */
export function GalleryPage({ gallery }: { gallery: Gallery }) {
  return (
    <>
      <Hero22
        eyebrow="Project gallery"
        heading={gallery.heading}
        description={gallery.description}
        ctaText="Start a project"
        ctaHref="/contact/"
        images={gallery.images.slice(0, 7)}
      />

      <GalleryMasonry images={gallery.images} heading={gallery.heading} />

      {/* Secondary showcase band - forced light copy on dark for contrast */}
      <section
        className="relative overflow-hidden bg-[#0a0e10] text-white py-16 md:py-20"
        data-gallery-secondary-band
      >
        <div
          className="absolute inset-0 bg-cover bg-center opacity-35"
          style={{
            backgroundImage: `url(${gallery.images[1] || gallery.images[0] || "/images/custom-homes-1.jpeg"})`,
          }}
          aria-hidden
        />
        <div
          className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-[#0a0e10]"
          aria-hidden
        />
        <div
          className="absolute inset-0 bg-[color-mix(in_oklab,var(--primary)_14%,transparent)]"
          aria-hidden
        />
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-semibold text-primary !m-0 mb-3">
            Other project gallery
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white !m-0">
            Ready to see your home transformed?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-white/85 !m-0 max-w-xl mx-auto">
            Browse more kitchens, baths, and full remodels, or talk with our
            Richmond team about your next project.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Button
              className="rounded-[4px] h-11 !text-white"
              render={<Link href="/remodeling-gallery/" />}
            >
              View remodeling gallery
            </Button>
            <Button
              variant="outline"
              className="rounded-[4px] h-11 border-white/50 bg-transparent !text-white hover:!bg-white/15 hover:!text-white"
              render={<Link href="/contact/" />}
            >
              Book a consult
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
