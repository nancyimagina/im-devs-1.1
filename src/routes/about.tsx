import { createFileRoute } from "@tanstack/react-router";
import { Clock, Handshake, Sparkle, ArrowsOutSimple } from "@phosphor-icons/react";
import { PageLayout, PageHero } from "@/components/PageLayout";
import { Reveal } from "@/components/Reveal";
import { CtaLink, TextLink } from "@/components/ui-kit";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — A Nearshore Partner Built Around Your Team | Imagina Devs" },
      {
        name: "description",
        content:
          "Imagina Devs provides senior engineering talent and custom software development for U.S. companies, aligned with U.S. time zones.",
      },
      { property: "og:title", content: "About | Imagina Devs" },
      {
        property: "og:description",
        content:
          "Senior engineering talent and custom software development for U.S. companies.",
      },
    ],
  }),
  component: About,
});

const principles = [
  {
    Icon: Sparkle,
    title: "Senior talent",
    copy: "Experienced engineers integrated directly into your team.",
  },
  {
    Icon: Clock,
    title: "U.S. time zone aligned",
    copy: "Real-time collaboration with your team.",
  },
  {
    Icon: Handshake,
    title: "Long-term partnership",
    copy: "Stable engineering capacity built for ongoing collaboration.",
  },
  {
    Icon: ArrowsOutSimple,
    title: "Flexible scaling",
    copy: "Increase or evolve your engineering capacity as needs change.",
  },
];

function About() {
  return (
    <PageLayout>
      <PageHero
        eyebrow="About"
        title="A nearshore partner built around your team."
      />

      <section className="section-light grain py-24 md:py-32">
        <div className="shell grid gap-14 lg:grid-cols-2 lg:gap-24">
          <Reveal>
            <p className="text-lg leading-relaxed text-brand md:text-xl">
              Imagina Devs provides senior engineering talent and custom software
              development for U.S. companies.
            </p>
            <p className="mt-6 text-lg leading-relaxed text-brand/75 md:text-xl">
              The teams work directly with client engineering and product organizations,
              aligned with U.S. time zones and designed for long-term collaboration.
            </p>
          </Reveal>

          <Reveal delay={100} className="grid gap-8 sm:grid-cols-3 lg:self-center">
            {[
              { value: "8+ Years", label: "Long-term client partnership" },
              { value: "Senior Engineering", label: "Experienced technical teams" },
              { value: "U.S. Aligned", label: "Direct collaboration with U.S. teams" },
            ].map((s) => (
              <div key={s.value}>
                <p className="display text-xl text-brand md:text-2xl">{s.value}</p>
                <p className="mt-2 text-sm leading-relaxed text-brand/65">{s.label}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="section-deep grain py-24 md:py-32">
        <div className="shell">
          <Reveal className="max-w-xl">
            <p className="eyebrow">How we work</p>
            <h2 className="display mt-5 text-3xl md:text-5xl">
              Your engineering team, extended.
            </h2>
          </Reveal>

          <div className="mt-16 grid gap-x-12 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
            {principles.map(({ Icon, title, copy }, i) => (
              <Reveal key={title} delay={i * 80}>
                <Icon size={26} weight="light" className="text-accent" />
                <h3 className="mt-5 text-base font-medium tracking-tight">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{copy}</p>
              </Reveal>
            ))}
          </div>

          <div className="mt-16 flex flex-wrap items-center gap-6">
            <CtaLink to="/contact">Build your team</CtaLink>
            <TextLink to="/case-studies">See our work</TextLink>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
