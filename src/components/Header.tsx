"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { site } from "@/data/site";
import { navServices } from "@/data/services";
import { locations } from "@/data/locations";

const galleries = [
  { label: "Custom Homes Gallery", href: "/custom-homes-gallery/" },
  { label: "Remodeling Gallery", href: "/remodeling-gallery/" },
  { label: "Kitchen Remodeling Gallery", href: "/kitchen-remodeling-gallery/" },
  {
    label: "Bathroom Remodeling Gallery",
    href: "/bathroom-remodeling-gallery/",
  },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("mobile-nav-open", open);
  }, [open]);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-[var(--color-border)]">
      {/* Single slim row — Glyph-style density; logo hard-capped so Next/Image cannot overflow */}
      <div className="container flex items-center justify-between gap-3 h-14 md:h-16">
        <Link
          href="/"
          className="relative shrink-0 block h-9 w-[120px] md:w-[132px] overflow-hidden"
          onClick={() => setOpen(false)}
        >
          {/* eslint-disable-next-line @next/next/no-img-element -- need strict size control; next/image was ignoring h-* */}
          <img
            src={site.logo}
            alt={site.name}
            width={132}
            height={36}
            className="h-9 w-auto max-h-9 max-w-full object-contain object-left"
            style={{ height: 36, maxHeight: 36, width: "auto" }}
          />
        </Link>

        <nav className="hidden lg:flex items-center gap-0.5">
          <NavLink href="/">Home</NavLink>
          <NavLink href="/about/">About</NavLink>

          <div className="relative group">
            <button
              type="button"
              className="px-2.5 py-1.5 text-sm font-medium text-[var(--color-heading)] hover:text-[var(--color-primary)] flex items-center gap-1"
            >
              Services
              <Chevron />
            </button>
            <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all absolute left-0 top-full pt-2 min-w-[260px] z-50">
              <div className="bg-white rounded-lg shadow-lg border border-[var(--color-border)] py-1.5 max-h-[70vh] overflow-y-auto">
                {navServices.map((s) => (
                  <Link
                    key={s.href}
                    href={s.href}
                    className="block px-3.5 py-2 text-sm text-[var(--color-text)] hover:bg-[var(--color-bg-alt)] hover:text-[var(--color-primary)]"
                  >
                    {s.label}
                  </Link>
                ))}
                <Link
                  href="/services/"
                  className="block px-3.5 py-2 text-sm font-semibold text-[var(--color-primary)] hover:bg-[var(--color-bg-alt)] border-t border-[var(--color-border)] mt-1"
                >
                  View All Our Services
                </Link>
              </div>
            </div>
          </div>

          <div className="relative group">
            <button
              type="button"
              className="px-2.5 py-1.5 text-sm font-medium text-[var(--color-heading)] hover:text-[var(--color-primary)] flex items-center gap-1"
            >
              More
              <Chevron />
            </button>
            <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all absolute left-0 top-full pt-2 min-w-[240px] z-50">
              <div className="bg-white rounded-lg shadow-lg border border-[var(--color-border)] py-1.5">
                <div className="px-3.5 py-1 text-[11px] font-bold uppercase tracking-wide text-muted-foreground">
                  Galleries
                </div>
                {galleries.map((g) => (
                  <Link
                    key={g.href}
                    href={g.href}
                    className="block px-3.5 py-1.5 text-sm text-[var(--color-text)] hover:bg-[var(--color-bg-alt)] hover:text-[var(--color-primary)]"
                  >
                    {g.label}
                  </Link>
                ))}
                <div className="px-3.5 py-1 text-[11px] font-bold uppercase tracking-wide text-muted-foreground border-t border-[var(--color-border)] mt-1">
                  Areas We Serve
                </div>
                <Link
                  href="/areas-we-serve/"
                  className="block px-3.5 py-1.5 text-sm font-semibold text-[var(--color-text)] hover:bg-[var(--color-bg-alt)] hover:text-[var(--color-primary)]"
                >
                  All Areas We Serve
                </Link>
                {locations
                  .filter((l) => l.href !== "#")
                  .map((l) => (
                    <Link
                      key={l.slug}
                      href={l.href}
                      className="block px-3.5 py-1.5 text-sm text-[var(--color-text)] hover:bg-[var(--color-bg-alt)] hover:text-[var(--color-primary)]"
                    >
                      {l.name}
                    </Link>
                  ))}
                <Link
                  href="/faqs/"
                  className="block px-3.5 py-2 text-sm text-[var(--color-text)] hover:bg-[var(--color-bg-alt)] hover:text-[var(--color-primary)] border-t border-[var(--color-border)] mt-1"
                >
                  FAQs
                </Link>
              </div>
            </div>
          </div>

          <NavLink href="/contact/">Contact</NavLink>

          <a
            href={`tel:${site.phone.officeTel}`}
            className="ml-2 text-sm font-medium text-muted-foreground hover:text-[var(--color-heading)] px-2"
          >
            {site.phone.office}
          </a>
          <a
            href={`tel:${site.phone.officeTel}`}
            className="ml-1 inline-flex items-center justify-center rounded-[4px] bg-[var(--color-dark)] text-white text-sm font-bold px-4 py-2 hover:bg-black transition-colors"
          >
            Book Now
          </a>
        </nav>

        <div className="flex lg:hidden items-center gap-2">
          <a
            href={`tel:${site.phone.officeTel}`}
            className="inline-flex items-center justify-center rounded-[4px] bg-[var(--color-dark)] text-white text-xs font-bold px-3 py-1.5"
          >
            Book Now
          </a>
          <button
            type="button"
            className="p-2 rounded-md border border-[var(--color-border)]"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="block w-5 h-0.5 bg-[var(--color-heading)] mb-1" />
            <span className="block w-5 h-0.5 bg-[var(--color-heading)] mb-1" />
            <span className="block w-5 h-0.5 bg-[var(--color-heading)]" />
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-[var(--color-border)] bg-white max-h-[75vh] overflow-y-auto">
          <div className="container py-3 flex flex-col gap-0.5">
            <MobileLink href="/" onClick={() => setOpen(false)}>
              Home
            </MobileLink>
            <MobileLink href="/about/" onClick={() => setOpen(false)}>
              About
            </MobileLink>

            <button
              type="button"
              className="flex justify-between items-center py-2.5 text-sm font-semibold text-[var(--color-heading)]"
              onClick={() => setServicesOpen((v) => !v)}
            >
              Services <span>{servicesOpen ? "−" : "+"}</span>
            </button>
            {servicesOpen &&
              navServices.map((s) => (
                <Link
                  key={s.href}
                  href={s.href}
                  className="pl-3 py-1.5 text-sm text-muted-foreground"
                  onClick={() => setOpen(false)}
                >
                  {s.label}
                </Link>
              ))}

            <button
              type="button"
              className="flex justify-between items-center py-2.5 text-sm font-semibold text-[var(--color-heading)]"
              onClick={() => setMoreOpen((v) => !v)}
            >
              More <span>{moreOpen ? "−" : "+"}</span>
            </button>
            {moreOpen && (
              <>
                {galleries.map((g) => (
                  <Link
                    key={g.href}
                    href={g.href}
                    className="pl-3 py-1.5 text-sm text-muted-foreground"
                    onClick={() => setOpen(false)}
                  >
                    {g.label}
                  </Link>
                ))}
                <Link
                  href="/areas-we-serve/"
                  className="pl-3 py-1.5 text-sm text-muted-foreground"
                  onClick={() => setOpen(false)}
                >
                  Areas We Serve
                </Link>
                <Link
                  href="/faqs/"
                  className="pl-3 py-1.5 text-sm text-muted-foreground"
                  onClick={() => setOpen(false)}
                >
                  FAQs
                </Link>
              </>
            )}

            <MobileLink href="/contact/" onClick={() => setOpen(false)}>
              Contact
            </MobileLink>
            <a
              href={`mailto:${site.email}`}
              className="py-2 text-sm text-muted-foreground"
            >
              {site.email}
            </a>
            <a
              href={`tel:${site.phone.officeTel}`}
              className="mt-2 inline-flex items-center justify-center rounded-[4px] bg-[var(--color-dark)] text-white text-sm font-bold px-4 py-2.5 text-center"
            >
              Book Now · {site.phone.office}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

function NavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="px-2.5 py-1.5 text-sm font-medium text-[var(--color-heading)] hover:text-[var(--color-primary)]"
    >
      {children}
    </Link>
  );
}

function MobileLink({
  href,
  children,
  onClick,
}: {
  href: string;
  children: React.ReactNode;
  onClick: () => void;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="py-2.5 text-sm font-semibold text-[var(--color-heading)] border-b border-[var(--color-border)]"
    >
      {children}
    </Link>
  );
}

function Chevron() {
  return (
    <svg width="10" height="6" viewBox="0 0 10 6" fill="none" aria-hidden>
      <path
        d="M1 1l4 4 4-4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}
