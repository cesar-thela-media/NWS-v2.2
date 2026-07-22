import type { Metadata } from "next";
import Contact from "@/components/shadcn-space/blocks/contact-01";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Office: (281) 299-2309 Mobile: (713) 884-6571 info@nws-homes.com. Hours Mon - Fri: 8:00 AM - 6:00 PM Sat: 8:00 AM - 12:00 PM Sun: Closed",
};

export default function ContactPage() {
  return <Contact />;
}
