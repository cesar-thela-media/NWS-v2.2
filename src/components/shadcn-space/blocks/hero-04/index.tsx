import HeroContent, {
  type Hero04Props,
} from "@/components/shadcn-space/blocks/hero-04/hero";

/**
 * Production hero-04 wrapper - content only.
 * Does NOT mount the registry demo navbar (site chrome is navbar-02).
 */
export default function Hero04Nws(props: Hero04Props) {
  return <HeroContent {...props} />;
}

export type { Hero04Props };
