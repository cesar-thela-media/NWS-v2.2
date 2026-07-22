import type { Metadata } from "next";
import { GalleryPage } from "@/components/GalleryPage";
import { galleries } from "@/data/galleries";

const gallery = galleries.find(
  (g) => g.slug === "bathroom-remodeling-gallery"
)!;

export const metadata: Metadata = {
  title: gallery.title,
  description: gallery.description,
};

export default function Page() {
  return <GalleryPage gallery={gallery} />;
}
