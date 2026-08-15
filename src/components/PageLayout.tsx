import type { ReactNode } from "react";
import { SiteHeader } from "./SiteHeader";
import { SiteFooter } from "./SiteFooter";

export function PageLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>{children}</main>
      <SiteFooter />
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
}) {
  return (
    <section className="section-deep grain pt-32 pb-16 md:pt-40 md:pb-24">
      <div className="shell max-w-3xl">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="display mt-5 text-4xl md:text-6xl">{title}</h1>
        {intro && (
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
            {intro}
          </p>
        )}
      </div>
    </section>
  );
}
