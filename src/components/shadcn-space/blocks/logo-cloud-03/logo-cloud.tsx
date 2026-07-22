import { Marquee } from "@/components/shadcn-space/animations/marquee";
import { site } from "@/data/site";

type BrandList = {
  image: string;
  name: string;
  href?: string;
};

const brandList: BrandList[] = [
  {
    image: "/images/FB-Badge-150x80.png",
    name: "Facebook",
    href: site.social.facebook,
  },
  {
    image: "/images/IG-Badge-150x80.png",
    name: "Instagram",
    href: site.social.instagram,
  },
  {
    image: "/images/Houzz-Horizontal-175x100-Color-01.svg",
    name: "Houzz",
    href: site.social.houzz,
  },
  {
    image: "/images/FB-Badge-150x80.png",
    name: "Facebook reviews",
    href: site.social.facebook,
  },
  {
    image: "/images/IG-Badge-150x80.png",
    name: "Instagram",
    href: site.social.instagram,
  },
  {
    image: "/images/Houzz-Horizontal-175x100-Color-01.svg",
    name: "Houzz",
    href: site.social.houzz,
  },
];

export default function LogoCloudDemo() {
  return (
    <section className="lg:py-12 sm:py-10 py-8">
      <div className="max-w-7xl mx-auto xl:px-16 lg:px-8 px-4 mb-6">
        <p className="text-center text-sm font-medium text-muted-foreground">
          Trusted across Fort Bend · Serving since 2007
        </p>
      </div>
      <div className="border-y overflow-hidden">
        <div className="max-w-7xl mx-auto xl:px-16 lg:px-8 px-4">
          <Marquee pauseOnHover className="[--duration:24s] py-0 [--gap:0px]">
            {brandList.map((brand, index) => (
              <a
                key={index}
                href={brand.href || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="w-48 shrink-0 h-28 flex items-center justify-center border-r px-8"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={brand.image}
                  alt={brand.name}
                  className="max-h-14 w-auto object-contain"
                />
              </a>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
}
