import { Link } from "@tanstack/react-router";
import { ArrowRight } from "@phosphor-icons/react";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

const base =
  "arrow-move inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-colors";

export function CtaLink({
  to,
  hash,
  children,
  variant = "primary",
  className,
}: {
  to: string;
  hash?: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "onLight";
  className?: string;
}) {
  const styles = {
    primary: "bg-accent text-accent-foreground hover:bg-accent/90",
    secondary:
      "border border-border text-foreground hover:border-accent/60 hover:text-accent",
    onLight:
      "border border-brand/20 text-brand hover:border-brand/50 hover:bg-brand/5",
  }[variant];

  return (
    <Link
      to={to}
      {...(hash ? { hash } : {})}
      className={cn(base, styles, className)}
    >
      {children}
      <ArrowRight size={16} weight="bold" />
    </Link>
  );
}

export function TextLink({
  to,
  children,
  tone = "accent",
  params,
  className,
}: {
  to: string;
  children: ReactNode;
  tone?: "accent" | "brand";
  params?: Record<string, string>;
  className?: string;
}) {
  return (
    <Link
      to={to}
      params={params as never}
      className={cn(
        "arrow-move inline-flex items-center gap-2 text-sm font-medium",
        tone === "accent" ? "text-accent" : "text-brand",
        className,
      )}
    >
      {children}
      <ArrowRight size={15} weight="bold" />
    </Link>
  );
}

export function Eyebrow({
  children,
  tone = "dark",
}: {
  children: ReactNode;
  tone?: "dark" | "light";
}) {
  return (
    <p className={tone === "dark" ? "eyebrow" : "eyebrow-dark"}>{children}</p>
  );
}
