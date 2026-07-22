import type { Metadata } from "next";
import Faq from "@/components/shadcn-space/blocks/faq-07/faq";

export const metadata: Metadata = {
  title: "FAQs",
  description:
    "Common questions about custom homes and remodeling in Richmond, TX. Call (281) 299-2309.",
};

export default function FaqsPage() {
  return <Faq />;
}
