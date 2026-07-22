import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";
import { site } from "@/data/site";

type LogoProps = HTMLAttributes<HTMLDivElement> & {
  /** Light treatment for dark / over-hero chrome */
  onDark?: boolean;
};

/**
 * NWS brand mark — real site logo from public/images/gbp.png
 */
const Logo = ({ onDark = false, className, ...props }: LogoProps) => {
  return (
    <div
      className={cn("flex items-center shrink-0", className)}
      {...props}
    >
      {/* eslint-disable-next-line @next/next/no-img-element -- fixed height control for navbar */}
      <img
        src={site.logo}
        alt={site.name}
        width={160}
        height={48}
        className={cn(
          "h-9 sm:h-10 w-auto max-h-10 max-w-[160px] object-contain object-left",
          // Black roof lines vanish on dark hero — render as white mark
          onDark && "brightness-0 invert drop-shadow-sm",
        )}
        style={{ height: 40, maxHeight: 40, width: "auto" }}
      />
    </div>
  );
};

export default Logo;
