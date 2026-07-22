import { cn } from "@/lib/utils";

type FullBleedBackgroundProps = {
  src: string;
  className?: string;
  /** Extra overlay classes on top of default vignette */
  overlayClassName?: string;
  /**
   * CSS background-position for cover crop.
   * Defaults to a responsive set via utility classes when omitted.
   */
  positionClassName?: string;
};

/**
 * Full-width section background: covers mobile → large desktop.
 * CSS `background-size: cover` + absolute fill so the image always
 * paints edge-to-edge regardless of section height.
 */
export function FullBleedBackground({
  src,
  className,
  overlayClassName,
  positionClassName = "bg-[center_40%] sm:bg-[center_45%] md:bg-center lg:bg-center xl:bg-[center_38%] 2xl:bg-[center_35%]",
}: FullBleedBackgroundProps) {
  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 z-0 overflow-hidden",
        className,
      )}
      aria-hidden
    >
      {/*
        min-h/w full + cover: fills tall sections on large monitors
        slight scale on mobile reduces letterboxing at portrait aspect
      */}
      <div
        className={cn(
          "absolute inset-0 h-full w-full min-h-full min-w-full",
          "bg-cover bg-no-repeat",
          "scale-[1.08] sm:scale-100 origin-center",
          positionClassName,
        )}
        style={{ backgroundImage: `url(${src})` }}
      />
      <div
        className={cn(
          "absolute inset-0",
          overlayClassName ??
            "bg-gradient-to-b from-black/60 via-black/45 to-black/70",
        )}
      />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_10%,rgba(5,5,5,0.5)_100%)]" />
    </div>
  );
}
