const features = [
  {
    title: "Since 2007",
    description:
      "Serving Richmond, TX and nearby Fort Bend communities with custom builds and full-service remodeling.",
    image: "/images/custom-home-richmond-tx.jpg",
    alt: "Custom home by NWS in Richmond, TX",
  },
  {
    title: "Full-service team",
    description:
      "Service from kitchens and baths to additions and custom homes, one accountable team.",
    image: "/images/kitchen-gallery-1.jpeg",
    alt: "Kitchen remodeling by NWS",
  },
  {
    title: "Ready for a clear next step?",
    description:
      "Free consult · 5% off when you mention the website. Call our Richmond office today.",
    image: "/images/bathroom-remodeling-richmond-tx.jpg",
    alt: "Bathroom remodeling by NWS",
  },
];

/**
 * About bento cards: equal aspect images, soft bottom fade into orange panel + white type.
 */
export function FeatureCardsGrid() {
  return (
    <div data-bento-orange-cards>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((feature) => (
          <article
            key={feature.title}
            className="group relative flex flex-col overflow-hidden rounded-xl border border-primary/20 bg-primary shadow-none min-h-[22rem]"
          >
            <div className="relative aspect-[4/3] w-full overflow-hidden shrink-0">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={feature.image}
                alt={feature.alt}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              />
              {/* Soft seamless fade image → orange text panel */}
              <div
                className="pointer-events-none absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-b from-transparent via-primary/55 to-primary"
                aria-hidden
              />
              <div
                className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 backdrop-blur-[2px] bg-gradient-to-b from-transparent to-primary/40"
                aria-hidden
              />
            </div>
            <div className="relative z-[1] flex flex-1 flex-col gap-2 bg-primary px-5 pb-6 pt-2 sm:px-6">
              <h3 className="text-lg font-semibold tracking-tight text-white !m-0">
                {feature.title}
              </h3>
              <p className="text-sm leading-normal text-white/90 !m-0">
                {feature.description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
