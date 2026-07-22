"use client";

import { useState } from "react";
import { ServiceFlipCard } from "./ServiceFlipCard";
import type { ServiceCard } from "@/data/services";

export function ServiceCarousel({ services }: { services: ServiceCard[] }) {
  const [page, setPage] = useState(0);
  const perPage = 3;
  const totalPages = Math.ceil(services.length / perPage);
  const visible = services.slice(page * perPage, page * perPage + perPage);

  function prev() {
    setPage((p) => (p === 0 ? totalPages - 1 : p - 1));
  }
  function next() {
    setPage((p) => (p === totalPages - 1 ? 0 : p + 1));
  }

  return (
    <div className="relative">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {visible.map((s) => (
          <ServiceFlipCard key={s.slug} service={s} />
        ))}
      </div>

      <div className="flex items-center justify-center gap-3 mt-8">
        <button
          type="button"
          onClick={prev}
          className="w-10 h-10 rounded-full border border-[var(--color-border)] bg-white hover:border-[var(--color-primary)] text-xl text-[var(--color-heading)]"
          aria-label="Previous services"
        >
          {"‹"}
        </button>
        <div className="flex gap-2">
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setPage(i)}
              className={`w-2.5 h-2.5 rounded-full ${
                i === page
                  ? "bg-[var(--color-primary)]"
                  : "bg-[var(--color-border)]"
              }`}
              aria-label={`Services page ${i + 1}`}
            />
          ))}
        </div>
        <button
          type="button"
          onClick={next}
          className="w-10 h-10 rounded-full border border-[var(--color-border)] bg-white hover:border-[var(--color-primary)] text-xl text-[var(--color-heading)]"
          aria-label="Next services"
        >
          {"›"}
        </button>
      </div>
    </div>
  );
}
