import Image from "next/image";

/**
 * Scratch masonry grid for gallery family (NWS project photos only).
 */
export function GalleryMasonry({
  images,
  heading,
}: {
  images: string[];
  heading: string;
}) {
  return (
    <section className="py-12 md:py-16 bg-background" data-gallery-masonry>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 max-w-2xl mx-auto">
          <p className="text-sm font-semibold text-primary !m-0 mb-2">
            Project photos
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground !m-0">
            {heading} in detail
          </h2>
        </div>
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {images.map((src, i) => (
            <a
              key={src}
              href={src}
              target="_blank"
              rel="noopener noreferrer"
              className="group block break-inside-avoid rounded-xl overflow-hidden border border-border bg-muted shadow-sm hover:shadow-md hover:border-primary/30 transition-all"
            >
              <Image
                src={src}
                alt={`${heading} ${i + 1}`}
                width={600}
                height={i % 3 === 0 ? 520 : i % 3 === 1 ? 400 : 460}
                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-[1.02]"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
