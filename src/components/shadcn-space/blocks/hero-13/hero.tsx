"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { site } from "@/data/site";
import { ArrowRight, ArrowUpRight, Play, X } from "lucide-react";
import { useCallback, useMemo, useState } from "react";

/**
 * Official NWS YouTube channel (linked from nws-homes.com footer).
 * Source: https://www.youtube.com/channel/UCeJ8l_IhyNplw76bt0yk4NA
 * Primary: Second Bath Makeover - https://www.youtube.com/watch?v=nSJ_8lzRTjM
 */
export const NWS_ABOUT_YOUTUBE_ID = "nSJ_8lzRTjM";
export const NWS_ABOUT_YOUTUBE_WATCH = `https://www.youtube.com/watch?v=${NWS_ABOUT_YOUTUBE_ID}`;

function buildEmbedSrc(origin: string) {
  const params = new URLSearchParams({
    autoplay: "1",
    rel: "0",
    modestbranding: "1",
    playsinline: "1",
    enablejsapi: "1",
  });
  if (origin) params.set("origin", origin);
  return `https://www.youtube.com/embed/${NWS_ABOUT_YOUTUBE_ID}?${params.toString()}`;
}

const HeroSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [embedFailed, setEmbedFailed] = useState(false);

  const origin =
    typeof window !== "undefined" ? window.location.origin : "";

  const embedSrc = useMemo(() => buildEmbedSrc(origin), [origin]);

  const handlePlay = useCallback(() => {
    setEmbedFailed(false);
    setIsPlaying(true);
  }, []);

  const handleClose = useCallback(() => {
    setIsPlaying(false);
    setEmbedFailed(false);
  }, []);

  return (
    <section className="bg-background" data-about-hero-13>
      <div className="relative">
        <div className="relative max-w-7xl mx-auto xl:px-16 lg:px-8 px-4 w-full h-full z-20">
          <div className="flex lg:flex-row flex-col justify-between lg:items-end relative z-1 gap-6 py-10 md:py-16 pt-28 md:pt-32">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold text-primary mb-3 !m-0">
                About NWS
              </p>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-foreground uppercase !m-0">
                Your go-to home builders
              </h1>
            </div>
            <div className="flex group items-center gap-1 shrink-0">
              <Button
                className="px-6 py-3.5 h-auto rounded-[4px] cursor-pointer !text-white"
                render={<a href={`tel:${site.phone.officeTel}`} />}
              >
                Speak to Our Experts
              </Button>
              <Button
                className="p-4 rounded-[4px] h-auto transition-transform duration-300 ease-out group-hover:rotate-45 cursor-pointer !text-white"
                render={<Link href="/services/" />}
                aria-label="View services"
              >
                <ArrowRight size={16} />
              </Button>
            </div>
          </div>
        </div>

        <div className="absolute top-0 left-0 w-full h-full grid grid-cols-6 border-x right-0 pointer-events-none opacity-40">
          <div className="border-r border-border" />
          <div className="border-r border-border" />
          <div className="border-r border-border" />
          <div className="border-r border-border" />
          <div className="border-r border-border" />
          <div />
        </div>
      </div>

      <div className="border-t border-border">
        <div
          className="relative max-w-7xl mx-auto overflow-hidden aspect-video bg-black"
          data-about-video
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/hero-home-remodeled-richmond-tx.webp"
            alt="NWS custom home and remodeling in Richmond, TX"
            width={1280}
            height={720}
            className={`absolute inset-0 z-[1] object-cover w-full h-full transition-opacity duration-300 ${
              isPlaying && !embedFailed
                ? "opacity-0 pointer-events-none"
                : "opacity-100 pointer-events-none"
            }`}
          />

          {isPlaying && !embedFailed ? (
            <iframe
              key={embedSrc}
              title="NWS Custom Homes and Remodeling - project video"
              src={embedSrc}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              referrerPolicy="strict-origin-when-cross-origin"
              className="absolute inset-0 z-[2] w-full h-full border-0"
              data-nws-youtube-embed={NWS_ABOUT_YOUTUBE_ID}
              onError={() => setEmbedFailed(true)}
            />
          ) : null}

          {/* If YouTube blocks embed, show poster + watch CTA (still real NWS video) */}
          {isPlaying && embedFailed ? (
            <div className="absolute inset-0 z-[3] flex flex-col items-center justify-center gap-4 bg-black/70 px-6 text-center">
              <p className="text-white text-base sm:text-lg max-w-md !m-0">
                Watch this NWS project video on YouTube
              </p>
              <Button
                className="rounded-[4px] h-11 !text-white gap-2"
                render={
                  <a
                    href={NWS_ABOUT_YOUTUBE_WATCH}
                    target="_blank"
                    rel="noopener noreferrer"
                  />
                }
              >
                Open Second Bath Makeover
                <ArrowUpRight className="size-4" />
              </Button>
              <button
                type="button"
                onClick={handleClose}
                className="text-white/80 text-sm underline bg-transparent border-0 cursor-pointer"
              >
                Back to poster
              </button>
            </div>
          ) : null}

          {!isPlaying ? (
            <div className="absolute left-1/2 top-1/2 z-[3] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-3">
              <button
                type="button"
                onClick={handlePlay}
                aria-label="Play NWS project video"
                data-about-video-play
                className="flex h-16 w-16 lg:h-22 lg:w-22 items-center justify-center rounded-full bg-primary hover:bg-primary/90 text-white shadow-lg transition hover:scale-105 cursor-pointer border-0"
              >
                <Play className="lg:size-8 size-5 text-white" fill="white" />
              </button>
              <a
                href={NWS_ABOUT_YOUTUBE_WATCH}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/90 text-xs sm:text-sm font-medium underline-offset-2 hover:underline drop-shadow"
                data-about-video-watch
              >
                or open on YouTube
              </a>
            </div>
          ) : (
            <button
              type="button"
              onClick={handleClose}
              aria-label="Close video"
              data-about-video-close
              className="absolute right-4 top-4 z-[4] flex h-10 w-10 items-center justify-center rounded-full bg-black/70 hover:bg-black/90 text-white cursor-pointer border-0"
            >
              <X className="size-5 text-white" />
            </button>
          )}

          <div
            className={`absolute bottom-6 left-6 right-6 z-[3] md:bottom-10 md:left-10 lg:max-w-xl text-white transition-all duration-300 pointer-events-none ${
              isPlaying
                ? "opacity-0 translate-y-4"
                : "opacity-100 translate-y-0"
            }`}
          >
            <p className="text-base sm:text-xl text-white font-normal drop-shadow-md !m-0">
              Full-service custom homes and remodeling in Richmond and nearby
              Fort Bend communities since 2007.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
