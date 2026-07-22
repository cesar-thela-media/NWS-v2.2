import Link from "next/link";
import { ReactNode } from "react";

type Props = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "outline" | "white";
  className?: string;
};

export function Button({
  href,
  children,
  variant = "primary",
  className = "",
}: Props) {
  const cls =
    variant === "outline"
      ? "btn btn-outline"
      : variant === "white"
        ? "btn btn-white"
        : "btn";

  return (
    <Link href={href} className={`${cls} ${className}`.trim()}>
      {children}
    </Link>
  );
}
