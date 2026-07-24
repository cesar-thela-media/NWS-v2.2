import Image from "next/image";
import Link from "next/link";
import type { ServiceCard } from "@/data/services";

const stripPhotos = [
  "/images/custom-homes-1.jpeg",
  "/images/kitchen-gallery-1.jpeg",
  "/images/bathroom-gallery-1.jpeg",
  "/images/whole-home-remodeling-richmond-tx.jpg",
  "/images/home-addition-contractors.webp",
  "/images/garage-remodel.webp",
  "/images/open-concept.webp",
  "/images/Basement-Finishing.webp",
  "/images/remodeling-1.jpeg",
  "/images/custom-homes-3.jpeg",
  "/images/bathroom-gallery-3.jpeg",
];

/**
 * Scratch alternating photo + copy bands for services hub (easy to swap later).
 */
export function ServiceAlternatingStrips({
  services,
}: {
  services: ServiceCard[];
}) {
  return (
    <section
      className="py-14 md:py-20 bg-background"
      data-service-alternating-strips
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="max-w-2xl mb-4">
          <p className="text-sm font-semibold text-primary !m-0 mb-2">
            Explore by service
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground !m-0">
            From kitchens to full custom homes
          </h2>
        </div>

        {services.map((s, i) => {
          const photoLeft = i % 2 === 0;
          return (
            <article
              key={s.slug}
              className="grid grid-cols-1 md:grid-cols-12 gap-0 overflow-hidden rounded-2xl border border-border bg-card shadow-sm hover:border-primary/35 transition-colors"
            >
              <div
                className={`md:col-span-5 relative min-h-[14rem] md:min-h-[16rem] ${
                  photoLeft ? "" : "md:order-2"
                }`}
              >
                <Image
                  src={stripPhotos[i % stripPhotos.length]}
                  alt={s.title}
                  fill
                  className="object-cover"
                />
                <div
                  className={`absolute inset-0 ${
                    photoLeft
                      ? "bg-gradient-to-r from-transparent to-card/20"
                      : "bg-gradient-to-l from-transparent to-card/20"
                  }`}
                  aria-hidden
                />
              </div>
              <div
                className={`md:col-span-7 p-6 sm:p-10 flex flex-col justify-center gap-3 ${
                  photoLeft ? "" : "md:order-1"
                }`}
              >
                <p className="text-xs font-semibold uppercase tracking-wider text-primary !m-0">
                  Service
                </p>
                <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground !m-0">
                  {s.title}
                </h3>
                <p className="text-muted-foreground !m-0 leading-relaxed text-base">
                  {s.front}
                </p>
                <Link
                  href={s.href}
                  className="mt-2 inline-flex items-center gap-1 text-primary font-semibold w-fit hover:underline"
                >
                  Learn more
                  <span aria-hidden>→</span>
                </Link>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
