import type { Metadata } from "next";
import ServicesHero12 from "@/components/shadcn-space/blocks/hero-12";
import Services10 from "@/components/shadcn-space/blocks/services-10/services";
import { ServiceAlternatingStrips } from "@/components/ServiceAlternatingStrips";
import { serviceCards } from "@/data/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Learn more about our dependable remodeling company in Richmond, TX. We have over 35 years of combined experience. Call us at (281) 299-2309.",
};

/** Services hub: hero-12 + services-10 + scratch alternating strips */
export default function ServicesPage() {
  return (
    <>
      <ServicesHero12 />
      <Services10 />
      <ServiceAlternatingStrips services={serviceCards} />
    </>
  );
}
