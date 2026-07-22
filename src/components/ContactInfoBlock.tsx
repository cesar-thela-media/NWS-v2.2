import Image from "next/image";
import { site } from "@/data/site";

type Props = {
  showMap?: boolean;
  mapSrc?: string;
};

export function ContactInfoBlock({
  showMap = true,
  mapSrc = site.mapSmall,
}: Props) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
      <div>
        <p className="section-label">Start Your Project</p>
        <h2 className="section-title">Reach Out to Our Contractors</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-8">
          <div>
            <h3 className="text-lg mb-2">Support</h3>
            <a
              href={`mailto:${site.email}`}
              className="text-primary hover:underline"
            >
              {site.email}
            </a>
            <div className="mt-4 space-y-1">
              <a
                href={`tel:${site.phone.officeTel}`}
                className="block hover:text-primary"
              >
                Office: {site.phone.office}
              </a>
              <a
                href={`tel:${site.phone.mobileTel}`}
                className="block hover:text-primary"
              >
                Mobile: {site.phone.mobile}
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-lg mb-2">Business Hours</h3>
            <p className="mb-1">
              <strong>Mon - Fri:</strong> 8:00 AM - 6:00 PM
            </p>
            <p className="mb-1">
              <strong>Sat:</strong> 8:00 AM - 12:00 PM
            </p>
            <p>
              <strong>Sun:</strong> Closed
            </p>
          </div>
        </div>
      </div>

      {showMap && (
        <div className="rounded-xl overflow-hidden shadow-[var(--shadow-card)]">
          <Image
            src={mapSrc}
            alt="NWS Custom Homes and Remodeling map"
            width={638}
            height={766}
            className="w-full h-auto"
          />
        </div>
      )}
    </div>
  );
}
