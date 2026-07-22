import Link from "next/link";
import { locations } from "@/data/locations";

export function AreasGrid({ className = "" }: { className?: string }) {
  return (
    <div
      className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 ${className}`}
    >
      {locations.map((loc) =>
        loc.href === "#" ? (
          <span key={loc.slug} className="area-chip cursor-default">
            {loc.name}
          </span>
        ) : (
          <Link key={loc.slug} href={loc.href} className="area-chip">
            {loc.name}
          </Link>
        )
      )}
    </div>
  );
}
