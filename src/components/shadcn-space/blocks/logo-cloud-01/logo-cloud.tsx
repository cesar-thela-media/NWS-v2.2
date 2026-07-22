"use client";

import Link from "next/link";
import { Marquee } from "@/components/shadcn-space/animations/marquee";
import { locations } from "@/data/locations";

type AreaLogoItem = {
  name: string;
  short: string;
  href: string;
  /** Distinctive mark rendered next to the wordmark */
  mark: "line" | "pin" | "bar" | "peak" | "wave" | "badge" | "star" | "house" | "compass";
};

const markBySlug: Record<string, AreaLogoItem["mark"]> = {
  "richmond-tx": "line",
  "sugar-land-tx": "pin",
  "katy-tx": "bar",
  "fulshear-tx": "peak",
  "cinco-ranch-tx": "star",
  "rosenberg-tx": "badge",
  "weston-lakes-tx": "wave",
  "park-row-tx": "house",
  "west-side-of-houston-tx": "compass",
};

const areas: AreaLogoItem[] = locations
  .map((loc) => {
    const mark = markBySlug[loc.slug];
    if (!mark) return null;
    return {
      name: loc.name,
      short: loc.name.replace(/,?\s*TX$/i, ""),
      href: loc.href === "#" ? "/areas-we-serve/" : loc.href,
      mark,
    };
  })
  .filter((a): a is AreaLogoItem => a !== null);

function LogoMark({ type }: { type: AreaLogoItem["mark"] }) {
  const common = "shrink-0 text-primary";
  switch (type) {
    case "line":
      return (
        <span className={`${common} flex flex-col gap-1`} aria-hidden>
          <span className="block h-0.5 w-5 bg-primary rounded-full" />
          <span className="block h-0.5 w-3.5 bg-primary/60 rounded-full" />
        </span>
      );
    case "pin":
      return (
        <svg className={`${common} size-4`} viewBox="0 0 16 16" fill="currentColor" aria-hidden>
          <path d="M8 1.5a4.5 4.5 0 0 0-4.5 4.5c0 3.2 4.5 8.5 4.5 8.5s4.5-5.3 4.5-8.5A4.5 4.5 0 0 0 8 1.5zm0 6.2a1.7 1.7 0 1 1 0-3.4 1.7 1.7 0 0 1 0 3.4z" />
        </svg>
      );
    case "bar":
      return <span className={`${common} block w-1 h-5 rounded-full bg-primary`} aria-hidden />;
    case "peak":
      return (
        <svg className={`${common} size-4`} viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
          <path d="M2 13 L8 3 L14 13 Z" />
        </svg>
      );
    case "wave":
      return (
        <svg className={`${common} size-5`} viewBox="0 0 20 12" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
          <path d="M1 6 Q5 1 9 6 T17 6" strokeLinecap="round" />
        </svg>
      );
    case "badge":
      return (
        <span
          className={`${common} flex items-center justify-center size-5 rounded border border-primary text-[8px] font-bold leading-none`}
          aria-hidden
        >
          TX
        </span>
      );
    case "star":
      return (
        <svg className={`${common} size-3.5`} viewBox="0 0 16 16" fill="currentColor" aria-hidden>
          <path d="M8 1.2l1.8 3.7 4.1.6-3 2.9.7 4.1L8 10.6l-3.6 1.9.7-4.1-3-2.9 4.1-.6L8 1.2z" />
        </svg>
      );
    case "house":
      return (
        <svg className={`${common} size-4`} viewBox="0 0 16 16" fill="currentColor" aria-hidden>
          <path d="M8 2 L2 7.5 V14 h4.5 V10 h3 v4 H14 V7.5 L8 2z" />
        </svg>
      );
    case "compass":
      return (
        <svg className={`${common} size-4`} viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden>
          <circle cx="8" cy="8" r="6" />
          <path d="M8 4 L8 8 L11 10" strokeLinecap="round" />
        </svg>
      );
    default:
      return null;
  }
}

function AreaLogo({ area }: { area: AreaLogoItem }) {
  return (
    <Link
      href={area.href}
      className="group mx-6 sm:mx-10 lg:mx-14 shrink-0 flex items-center gap-2.5 opacity-75 transition-opacity hover:opacity-100"
      aria-label={`Areas we serve — ${area.short}`}
    >
      <LogoMark type={area.mark} />
      <span className="text-base sm:text-lg font-semibold tracking-[0.08em] uppercase text-zinc-100 whitespace-nowrap">
        {area.short}
      </span>
    </Link>
  );
}

/**
 * logo-cloud-01 — Areas we serve
 * Dark marquee strip + light location logos (shadcnspace demo style).
 * Title + subcopy centered above the strip.
 */
export default function LogoCloudAreas() {
  return (
    <section className="w-full bg-background">
      {/* Centered title + subheaders */}
      <div className="px-4 sm:px-6 lg:px-8 xl:px-16 max-w-3xl mx-auto pt-12 sm:pt-16 md:pt-20 pb-8 sm:pb-10 text-center flex flex-col items-center gap-2">
        <p className="text-sm sm:text-base font-semibold text-primary !m-0">
          Areas we serve
        </p>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground !m-0">
          Richmond & nearby Fort Bend
        </h2>
        <p className="text-muted-foreground text-base sm:text-lg max-w-2xl !m-0 mt-1">
          Custom homes and remodeling across Richmond, Sugar Land, Katy,
          Fulshear, and surrounding communities.
        </p>
      </div>

      {/* Dark marquee strip — matches shadcnspace logo-cloud demo */}
      <div className="relative overflow-hidden bg-zinc-950 py-8 sm:py-10">
        <Marquee pauseOnHover className="[--duration:40s] p-0 [--gap:0px]">
          {areas.map((area) => (
            <AreaLogo key={area.name} area={area} />
          ))}
        </Marquee>

        <Marquee
          reverse
          pauseOnHover
          className="[--duration:45s] p-0 [--gap:0px] mt-6 hidden sm:flex"
        >
          {[...areas].reverse().map((area) => (
            <AreaLogo key={`r-${area.name}`} area={area} />
          ))}
        </Marquee>

        {/* Edge fades on dark strip */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/6 sm:w-1/5 bg-gradient-to-r from-zinc-950 to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/6 sm:w-1/5 bg-gradient-to-l from-zinc-950 to-transparent z-10" />
      </div>
    </section>
  );
}
