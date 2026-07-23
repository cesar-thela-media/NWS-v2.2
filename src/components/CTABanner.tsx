import { site } from "@/data/site";
import { Button } from "./Button";

type Props = {
  label?: string;
  title?: string;
  text?: string;
  ctaLabel?: string;
  ctaHref?: string;
};

export function CTABanner({
  label = "Free consultation",
  title = "Ready to start your project?",
  text = "Get a clear next step, no hard sell. Mention this website for a free consult and 5% off your next project.",
  ctaLabel = `Call ${site.phone.office}`,
  ctaHref = `tel:${site.phone.officeTel}`,
}: Props) {
  return (
    <section
      className="relative py-14 md:py-16 text-white text-center overflow-hidden"
      style={{
        backgroundImage:
          "linear-gradient(rgba(5,5,5,0.84), rgba(5,5,5,0.8)), url(/images/hero-whole-home-remodeling-paralax-image.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container relative z-10 max-w-3xl">
        <p className="text-primary text-sm font-semibold mb-2 uppercase tracking-wide">
          {label}
        </p>
        <h2 className="text-white text-[32px] md:text-[46px] font-bold mb-4 tracking-tight">
          {title}
        </h2>
        <p className="text-white/80 mb-6 text-base md:text-lg">{text}</p>
        <Button href={ctaHref} variant="primary">
          {ctaLabel}
        </Button>
      </div>
    </section>
  );
}
