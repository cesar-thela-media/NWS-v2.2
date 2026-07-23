import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";
import { site } from "@/data/site";

type LogoProps = HTMLAttributes<HTMLDivElement> & {
  /**
   * When true (over-hero / dark chrome), use light mark treatment.
   * Transparent asset preferred; no solid white plate.
   */
  onDark?: boolean;
};

/**
 * Official NWS logo (transparent PNG when available).
 * Dual roofs + copper NWS + tagline without a white bounding box.
 */
const Logo = ({ onDark = false, className, ...props }: LogoProps) => {
  return (
    <div className={cn("flex items-center shrink-0", className)} {...props}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={site.logoTransparent ?? site.logo}
        alt={site.name}
        width={160}
        height={92}
        className={cn(
          "h-10 sm:h-11 w-auto max-h-11 object-contain object-left",
          // Slight lift on dark hero without white plate
          onDark && "drop-shadow-[0_1px_2px_rgba(0,0,0,0.45)]",
        )}
        style={{ height: 44, maxHeight: 44, width: "auto" }}
        decoding="async"
      />
    </div>
  );
};

export default Logo;
