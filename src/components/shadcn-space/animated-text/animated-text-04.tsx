"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

type RollerItem = {
  text: string;
  color?: string;
};

export type AnimatedTextRollerProps = {
  /** Static prefix (e.g. "Custom homes & remodels in") */
  prefix?: string;
  items: RollerItem[];
  intervalMs?: number;
  defaultColor?: string;
  className?: string;
};

/**
 * animated-text-04 — vertical roller showing ONE line at a time.
 * Matches shadcn-space pattern: fixed-height clip + translateY by line height in rem.
 */
const AnimatedTextRoller = ({
  prefix,
  items,
  intervalMs = 2200,
  defaultColor = "text-primary",
  className,
}: AnimatedTextRollerProps) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (items.length <= 1) return;
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % items.length);
    }, intervalMs);
    return () => clearInterval(id);
  }, [items.length, intervalMs]);

  // Fixed line box (matches original demo: h-8 / 2rem steps scaled for hero)
  // Use CSS variables so viewport + each line + translate stay in lockstep.
  return (
    <span
      className={cn(
        "inline-flex flex-col sm:flex-row sm:items-center gap-x-3 gap-y-1 justify-center text-center sm:text-left",
        className,
      )}
    >
      {prefix ? (
        <span className="text-white whitespace-nowrap">{prefix}</span>
      ) : null}

      {/* Viewport: exactly one line tall, clips the rest */}
      <span
        className="relative block overflow-hidden text-left mx-auto sm:mx-0"
        style={{
          height: "1.15em",
          minWidth: "12ch",
        }}
        aria-live="polite"
        aria-atomic="true"
      >
        <span
          className="flex flex-col transition-transform duration-700 ease-in-out will-change-transform"
          style={{
            // CRITICAL: use em relative to line height, NOT % of full stack
            // Each child is 1.15em tall → step by index * 1.15em
            transform: `translateY(calc(-${index} * 1.15em))`,
          }}
        >
          {items.map((item, i) => (
            <span
              key={`${item.text}-${i}`}
              className={cn(
                "flex items-center justify-center sm:justify-start whitespace-nowrap",
                item.color ?? defaultColor,
              )}
              style={{
                height: "1.15em",
                lineHeight: "1.15em",
              }}
              aria-hidden={i !== index}
            >
              {item.text}
            </span>
          ))}
        </span>
      </span>
    </span>
  );
};

export default AnimatedTextRoller;
