export type FaqItem = {
  question: string;
  answer: string;
  links?: { text: string; href: string }[];
};

export const faqs: FaqItem[] = [
  {
    question: "What services do you offer as a remodeling company?",
    answer:
      "We specialize in custom home building, remodeling, kitchen remodeling, bathroom remodeling, and whole home remodeling.",
    links: [
      { text: "custom home building", href: "/services/custom-home-builder/" },
      { text: "remodeling", href: "/services/remodeling-company/" },
      { text: "kitchen remodeling", href: "/services/kitchen-remodeling/" },
      { text: "bathroom remodeling", href: "/services/bathroom-remodeling/" },
      { text: "whole home remodeling", href: "/services/home-remodel/" },
    ],
  },
  {
    question: "How can I find a reliable custom home builder near me?",
    answer:
      "Trust our experienced team for top-notch custom home building services tailored to your needs.",
    links: [
      { text: "custom home building", href: "/services/custom-home-builder/" },
    ],
  },
  {
    question: "What sets your kitchen remodeling apart from other companies?",
    answer:
      "Our kitchen remodels combine functionality and aesthetics, enhancing your living space.",
    links: [
      { text: "kitchen remodels", href: "/services/kitchen-remodeling/" },
    ],
  },
  {
    question: "Why should I choose your bathroom remodeling services?",
    answer:
      "Transform your bathroom into a spa-like retreat with our expert bathroom remodeling solutions.",
    links: [
      {
        text: "bathroom remodeling",
        href: "/services/bathroom-remodeling/",
      },
    ],
  },
  {
    question: "What are the benefits of whole home remodeling?",
    answer:
      "Our whole home remodeling services improve your entire living environment, from design to completion.",
    links: [
      { text: "whole home remodeling", href: "/services/home-remodel/" },
    ],
  },
  {
    question: "How can I compare different remodeling companies?",
    answer:
      "Evaluate our track record and client reviews to see why we're a top choice among remodeling companies.",
    links: [{ text: "remodeling companies", href: "/" }],
  },
  {
    question: "What's the process for starting a home remodel with you?",
    answer:
      "Begin your house remodeling journey with a consultation and tailored plan by our experts.",
    links: [
      { text: "house remodeling", href: "/services/custom-home-builder/" },
    ],
  },
  {
    question: "What do I need to know about working with home builders?",
    answer:
      "Discover essential insights on collaborating with our seasoned home builders for your project.",
    links: [
      { text: "home builders", href: "/services/custom-home-builder/" },
    ],
  },
  {
    question: "Can I see examples of your kitchen remodel projects?",
    answer:
      "Explore our gallery showcasing stunning kitchen remodels for inspiration.",
    links: [
      { text: "kitchen remodels", href: "/services/kitchen-remodeling/" },
    ],
  },
  {
    question: "What's the typical timeline for bathroom remodels?",
    answer:
      "Get an idea of our bathroom remodeling project durations for efficient planning.",
    links: [
      {
        text: "bathroom remodeling",
        href: "/services/bathroom-remodeling/",
      },
    ],
  },
  {
    question: "Do you offer financing options for whole home remodeling?",
    answer:
      "Learn about our flexible financing solutions to make your remodeling dreams a reality.",
    links: [{ text: "remodeling", href: "/services/home-remodel/" }],
  },
  {
    question: "Are there energy-efficient options for custom home building?",
    answer:
      "Find out how we incorporate eco-friendly features in our custom home building projects.",
    links: [
      { text: "custom home building", href: "/services/custom-home-builder/" },
    ],
  },
  {
    question: "What materials do you use in your remodeling projects?",
    answer:
      "Discover the quality materials we source for lasting and beautiful results.",
  },
  {
    question: "How do I request a quote for a house remodeling project?",
    answer: "Get a free quote tailored to your specific remodeling needs.",
    links: [{ text: "remodeling", href: "/" }],
  },
  {
    question: "Do you have testimonials from satisfied clients?",
    answer:
      "Read real client testimonials to see the outcomes of our remodeling and home building services.",
  },
];
