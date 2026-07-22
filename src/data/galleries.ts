export type Gallery = {
  slug: string;
  title: string;
  heading: string;
  description: string;
  images: string[];
};

export const galleries: Gallery[] = [
  {
    slug: "custom-homes-gallery",
    title: "Custom Homes Gallery",
    heading: "Custom Homes",
    description:
      "We're dedicated to building the homes you've always dreamed of, and we want to make sure that every step of the process is as smooth and stress-free as possible.",
    images: Array.from({ length: 9 }, (_, i) => `/images/custom-homes-${i + 1}.jpeg`),
  },
  {
    slug: "remodeling-gallery",
    title: "Remodeling Gallery",
    heading: "Remodeling",
    description:
      "See the results of our remodeling company in Richmond, TX. We have over 35 years of combined experience.",
    images: Array.from({ length: 7 }, (_, i) => `/images/remodeling-${i + 1}.jpeg`),
  },
  {
    slug: "kitchen-remodeling-gallery",
    title: "Kitchen Remodeling Gallery",
    heading: "Kitchen Remodeling",
    description:
      "See the results of our kitchen remodeling work in Richmond, TX. We have over 35 years of combined experience.",
    images: Array.from(
      { length: 9 },
      (_, i) => `/images/kitchen-gallery-${i + 1}.jpeg`
    ),
  },
  {
    slug: "bathroom-remodeling-gallery",
    title: "Bathroom Remodeling Gallery",
    heading: "Bathroom Remodeling",
    description:
      "See the results of our bathroom remodeling work in Richmond, TX. We have over 35 years of combined experience.",
    images: Array.from(
      { length: 9 },
      (_, i) => `/images/bathroom-gallery-${i + 1}.jpeg`
    ),
  },
];
