import Image from "next/image";
import Link from "next/link";
import type { ServiceCard } from "@/data/services";

export function ServiceFlipCard({ service }: { service: ServiceCard }) {
  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <Image
            src={service.icon}
            alt={service.title}
            width={72}
            height={72}
            className="flip-card-icon"
          />
          <h3>{service.title}</h3>
          {service.front ? <p>{service.front}</p> : null}
          <span className="learn-more">Learn More</span>
        </div>
        <div className="flip-card-back">
          <h3>{service.title}</h3>
          {service.back ? <p className="mb-3">{service.back}</p> : null}
          {service.features && (
            <ul>
              {service.features.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
          )}
          <Link href={service.href} className="learn-more">
            {service.ctaLabel || "Learn More"}
          </Link>
        </div>
      </div>
    </div>
  );
}
