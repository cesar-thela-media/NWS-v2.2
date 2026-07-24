"use client";

import { useRef, useEffect } from "react";
import Link from "next/link";
import {
  motion,
  useInView,
  useMotionValue,
  useAnimationFrame,
  useTransform,
  type MotionValue,
} from "motion/react";
import { Button } from "@/components/ui/button";
import { site } from "@/data/site";

const RADIUS = 750;
const CARD_W = 275;
const CARD_H = 330;

function CarouselCard({
  index,
  rotation,
  images,
}: {
  index: number;
  rotation: MotionValue<number>;
  images: { src: string; alt: string }[];
}) {
  const n = images.length || 1;
  const img = images[index % n];
  const nTotal = n * 2;

  const angle = useTransform(
    rotation,
    (r) => r + Math.PI + (index / nTotal) * Math.PI * 2,
  );
  const x = useTransform(angle, (a) => RADIUS * Math.sin(a));
  const z = useTransform(angle, (a) => RADIUS * Math.cos(a));
  const rotateY = useTransform(
    x,
    [-RADIUS, -RADIUS * 0.55, 0, RADIUS * 0.55, RADIUS],
    [70, 30, 0, -30, -70],
  );
  const opacity = useTransform(z, [0, RADIUS * 0.25], [1, 0]);
  const zIndex = useTransform(z, [-RADIUS, 0], [0, 9]);

  return (
    <motion.div
      className="absolute bottom-0 left-1/2 overflow-hidden rounded-2xl pointer-events-none border border-white/10"
      style={{
        width: CARD_W,
        height: CARD_H,
        marginLeft: -CARD_W / 2,
        x,
        z,
        rotateY,
        opacity,
        zIndex,
      }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={img.src}
        alt={img.alt}
        className="w-full h-full object-cover select-none pointer-events-none"
        draggable={false}
      />
    </motion.div>
  );
}

export type Hero22Props = {
  heading?: string;
  description?: string;
  ctaText?: string;
  ctaHref?: string;
  images?: string[];
  eyebrow?: string;
};

/**
 * Gallery family hero - hero-22 carousel with NWS project images + Glyph theme.
 * Does NOT mount its own navbar (site uses navbar-02).
 */
export default function Hero22({
  heading = "Project gallery",
  description = "See the craftsmanship behind NWS custom homes and remodels across Fort Bend.",
  ctaText = "Start a project",
  ctaHref = "/contact/",
  images = [],
  eyebrow = "NWS Homes",
}: Hero22Props) {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });
  const rotation = useMotionValue(0);
  const isDragging = useRef(false);
  const dragStartRotation = useRef(0);

  const carouselImages =
    images.length > 0
      ? images.map((src, i) => ({
          src,
          alt: `${heading} project ${i + 1}`,
        }))
      : [
          {
            src: "/images/custom-homes-1.jpeg",
            alt: "Custom home project",
          },
          {
            src: "/images/kitchen-gallery-1.jpeg",
            alt: "Kitchen remodel",
          },
          {
            src: "/images/bathroom-gallery-1.jpeg",
            alt: "Bathroom remodel",
          },
          { src: "/images/remodeling-1.jpeg", alt: "Home remodel" },
          {
            src: "/images/custom-homes-3.jpeg",
            alt: "Custom home exterior",
          },
          {
            src: "/images/kitchen-gallery-3.jpeg",
            alt: "Kitchen renovation",
          },
          {
            src: "/images/bathroom-gallery-3.jpeg",
            alt: "Bathroom renovation",
          },
        ];

  const nImages = carouselImages.length;
  const nTotal = nImages * 2;

  useAnimationFrame((_, delta) => {
    if (!isDragging.current) {
      rotation.set(rotation.get() + delta * 0.00012);
    }
  });

  useEffect(() => {
    // ensure motion values hydrate on client
  }, []);

  return (
    <section
      ref={sectionRef}
      data-hero-22
      className="relative overflow-hidden bg-[#0a0e10] text-white"
    >
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{
          backgroundImage: `url(${carouselImages[0]?.src || "/images/custom-homes-1.jpeg"})`,
        }}
        aria-hidden
      />
      <div
        className="absolute inset-0 bg-gradient-to-b from-black/90 via-[#0a0e10]/95 to-[#0a0e10]"
        aria-hidden
      />
      <div
        className="absolute inset-0 bg-[color-mix(in_oklab,var(--primary)_10%,transparent)]"
        aria-hidden
      />

      <div className="relative z-10 max-w-7xl xl:px-16 lg:px-8 px-4 mx-auto pt-28 sm:pt-32">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.7, delay: 0.1, ease: "easeInOut" }}
          className="flex flex-col items-center gap-6 text-center"
        >
          <p className="text-sm font-semibold text-primary !m-0">{eyebrow}</p>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight max-w-3xl !m-0">
            {heading}
          </h1>
          <p className="text-base sm:text-lg text-white/80 max-w-xl mx-auto !m-0">
            {description}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Button
              className="rounded-[4px] h-11 px-6 !text-white"
              render={<Link href={ctaHref} />}
            >
              {ctaText}
            </Button>
            <Button
              variant="outline"
              data-dark-outline-cta
              className="rounded-[4px] h-11 px-6 !border-white/70 !bg-transparent !text-white hover:!bg-white/15 hover:!text-white shadow-none"
              render={<a href={`tel:${site.phone.officeTel}`} data-dark-outline-cta="" />}
            >
              Call us
            </Button>
          </div>
        </motion.div>
      </div>

      <div className="relative z-10 overflow-hidden pb-10 2xl:max-w-7xl 2xl:mx-auto mt-6">
        <div className="hidden 2xl:block absolute left-0 top-0 bottom-0 w-64 bg-gradient-to-r from-[#0a0e10] to-transparent z-10 pointer-events-none" />
        <div className="hidden 2xl:block absolute right-0 top-0 bottom-0 w-64 bg-gradient-to-l from-[#0a0e10] to-transparent z-10 pointer-events-none" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.9, delay: 0.35, ease: "easeInOut" }}
          className="relative w-full overflow-hidden h-90 cursor-grab"
          onPanStart={() => {
            isDragging.current = true;
            dragStartRotation.current = rotation.get();
          }}
          onPanEnd={() => {
            isDragging.current = false;
          }}
          onPan={(_, info) => {
            const sensitivity = 0.0015;
            rotation.set(
              dragStartRotation.current - info.offset.x * sensitivity,
            );
          }}
        >
          <div className="absolute inset-0 perspective-midrange perspective-origin-[50%_65%]">
            {Array.from({ length: nTotal }, (_, i) => (
              <CarouselCard
                key={i}
                index={i}
                rotation={rotation}
                images={carouselImages}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
