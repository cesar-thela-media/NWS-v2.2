import type { Metadata } from "next";
import { LocationPage } from "@/components/LocationPage";
import { locations } from "@/data/locations";

const location = locations.find((l) => l.slug === "rosenberg-tx")!;

export const metadata: Metadata = {
  title: location.title,
  description: location.description,
};

export default function Page() {
  return <LocationPage location={location} />;
}
