import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  UsersThree,
  Cloud,
  Code,
  Wrench,
  Truck,
  Buildings,
  Clock,
  Handshake,
  ArrowsOutSimple,
  Sparkle,
} from "@phosphor-icons/react";
import { PageLayout } from "@/components/PageLayout";
import { ParticleNetwork, type NetworkMode } from "@/components/ParticleNetwork";
import { Reveal } from "@/components/Reveal";
import { CtaLink, TextLink } from "@/components/ui-kit";
import { caseStudies } from "@/data/caseStudies";
import { posts } from "@/data/posts";
import logoRenuity from "@/assets/logos/logo-renuity.png.asset.json";
import logoAgione from "@/assets/logos/logo-agione.png.asset.json";
import logoBbva from "@/assets/logos/logo-BBVA.png.asset.json";
import logoNutresa from "@/assets/logos/logo-Nutresa.png.asset.json";
import logoBimbo from "@/assets/logos/logo-bimbo.png.asset.json";
import logoDane from "@/assets/logos/logo-dane.png.asset.json";
import logoAmazonia from "@/assets/logos/logo-amazonia.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Imagina Devs — Nearshore Engineering Teams for U.S. Companies" },
      {
        name: "description",
        content:
          "Senior engineering talent and software expertise, aligned with your team. Staff augmentation, Salesforce experts and custom software development.",
      },
      {
        property: "og:title",
        content: "Imagina Devs — Nearshore Engineering Teams for U.S. Companies",
      },
      {
        property: "og:description",
        content:
          "Senior engineering talent and software expertise, aligned with your team.",
      },
    ],
  }),
  component: Home,
});

const services = [
  {
    id: "staff" as NetworkMode,
    eyebrow: "Staff augmentation",
    title: (
      <>
        Scale your engineering
        <br />
        team fast
      </>
    ),
    text: "Add experienced engineers who work directly with your team.",
  },
  {
    id: "salesforce" as NetworkMode,
    eyebrow: "Salesforce experts",
    title: (
      <>
        Specialized Salesforce
        <br />
        engineering when you need it fast
      </>
    ),
    text: "Extend your Salesforce capabilities with experienced engineers.",
  },
];

function Hero() {
  const [index, setIndex] = useState(0);
  const active = services[index]!;

  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % services.length), 6500);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="section-deep grain relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 opacity-90">
        <div className="absolute inset-0 md:left-[30%]">
          <ParticleNetwork mode={active.id} />
        </div>
      </div>

      <div className="shell relative grid min-h-[92vh] items-center pt-32 pb-20 md:pt-36">
        <div className="max-w-2xl">
          <div key={active.id} className="animate-in fade-in slide-in-from-bottom-3 fill-mode-both duration-700">
            <p className="eyebrow">{active.eyebrow}</p>
            <h1 className="display mt-6 text-[2.6rem] leading-[1.03] sm:text-6xl lg:text-7xl">
              {active.title}
            </h1>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-muted-foreground md:text-lg">
              {active.text}
            </p>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <CtaLink to="/contact">Talk to us</CtaLink>
            <CtaLink to="/expertise" variant="secondary">
              Explore services
            </CtaLink>
          </div>

          <div className="mt-12 flex items-center gap-3">
            {services.map((s, i) => (
              <button
                key={s.id}
                type="button"
                onClick={() => setIndex(i)}
                className={`h-2.5 rounded-full transition-all ${
                  i === index
                    ? "w-10 bg-accent"
                    : "w-2.5 bg-foreground/30 hover:bg-foreground/55"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const clientLogos = [
  { src: logoRenuity.url, alt: "Renuity" },
  { src: logoAgione.url, alt: "AgiOne" },
  { src: logoBbva.url, alt: "BBVA" },
  { src: logoNutresa.url, alt: "Nutresa" },
  { src: logoBimbo.url, alt: "Bimbo" },
  { src: logoDane.url, alt: "DANE" },
  { src: logoAmazonia.url, alt: "Amazonía" },
];

function Clients() {
  return (
    <section className="section-deep border-y border-border py-10">
      <div className="shell flex flex-col gap-6">
        <p className="eyebrow text-center md:text-left">Trusted by teams we build with</p>
        <div className="marquee-mask relative overflow-hidden">
          <div className="flex w-max animate-[marquee_38s_linear_infinite] items-center gap-16 pr-16">
            {[...clientLogos, ...clientLogos].map((logo, i) => (
              <img
                key={`${logo.alt}-${i}`}
                src={logo.src}
                alt={logo.alt}
                loading="lazy"
                className="h-8 w-auto shrink-0 opacity-55 grayscale transition duration-300 hover:opacity-100 hover:grayscale-0 md:h-10"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


const proof = [
  { value: "8+ Years", label: "Long-term client partnership" },
  { value: "Senior Engineering", label: "Experienced technical teams" },
  { value: "U.S. Aligned", label: "Direct collaboration with U.S. teams" },
];

const whatWeDo = [
  {
    Icon: UsersThree,
    title: "Staff Augmentation",
    copy: "Extend your engineering team with experienced developers.",
  },
  {
    Icon: Cloud,
    title: "Salesforce Experts",
    copy: "Add specialized Salesforce engineering capacity.",
  },
  {
    Icon: Code,
    title: "Custom Software Development",
    copy: "Build software tailored to your business and operational needs.",
  },
];

const industries = [
  {
    Icon: Wrench,
    title: "Home Services & Field Operations",
    copy: "Software for field teams, scheduling, mobile operations and workflow optimization.",
  },
  {
    Icon: Truck,
    title: "Logistics & Mission-Critical Operations",
    copy: "Reliable software for complex, real-time and multi-site operations.",
  },
  {
    Icon: Buildings,
    title: "Enterprise Salesforce",
    copy: "Engineering expertise for Salesforce-based platforms, extensions and integrations.",
  },
];

const why = [
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

function Home() {
  return (
    <PageLayout>
      <Hero />
      <Clients />

      {/* Proof + What we do */}
      <section className="section-light grain py-24 md:py-32">
        <div className="shell">
          <div className="grid gap-8 sm:grid-cols-3">
            {proof.map((p, i) => (
              <Reveal key={p.value} delay={i * 80}>
                <p className="display text-2xl text-brand md:text-3xl">{p.value}</p>
                <p className="mt-2 text-sm text-brand/65">{p.label}</p>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-24 max-w-2xl">
            <p className="eyebrow-dark">What we do</p>
            <h2 className="display mt-5 text-3xl text-brand md:text-5xl">
              Built for teams that need to move fast
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-brand/12 bg-brand/12 md:grid-cols-3">
            {whatWeDo.map(({ Icon, title, copy }, i) => (
              <Reveal
                key={title}
                delay={i * 90}
                className="bg-light/90 p-8 transition-colors hover:bg-light"
              >
                <Icon size={24} className="text-brand" weight="light" />
                <h3 className="mt-6 text-lg font-medium tracking-tight text-brand">
                  {title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-brand/65">{copy}</p>
              </Reveal>
            ))}
          </div>

          <div className="mt-10">
            <TextLink to="/expertise" tone="brand">
              Explore our expertise
            </TextLink>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="section-deep grain py-24 md:py-32">
        <div className="shell">
          <Reveal className="max-w-2xl">
            <p className="eyebrow">Industries & Expertise</p>
            <h2 className="display mt-5 text-3xl md:text-5xl">
              Expertise shaped by complex operations
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              Technology expertise shaped by complex operations, real-world challenges and
              long-term partnerships.
            </p>
          </Reveal>

          <div className="mt-16 divide-y divide-border border-y border-border">
            {industries.map(({ Icon, title, copy }, i) => (
              <Reveal
                key={title}
                delay={i * 80}
                className="group grid gap-4 py-8 md:grid-cols-[auto_1fr_1.1fr] md:items-center md:gap-10"
              >
                <Icon size={26} weight="light" className="text-accent" />
                <h3 className="text-xl font-medium tracking-tight">{title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{copy}</p>
              </Reveal>
            ))}
          </div>

          <div className="mt-10">
            <TextLink to="/expertise">Explore our expertise</TextLink>
          </div>
        </div>
      </section>

      {/* Case studies */}
      <section className="section-light grain py-24 md:py-32">
        <div className="shell">
          <Reveal className="max-w-2xl">
            <p className="eyebrow-dark">Case studies</p>
            <h2 className="display mt-5 text-3xl text-brand md:text-5xl">
              Real impact for real clients
            </h2>
            <p className="mt-5 text-base leading-relaxed text-brand/65">
              A few examples of how Imagina helps teams improve operations, modernize
              software and scale technology.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {caseStudies.map((c, i) => (
              <Reveal key={c.slug} delay={i * 100}>
                <Link
                  to="/case-studies/$slug"
                  params={{ slug: c.slug }}
                  className="lift group block h-full rounded-2xl border border-brand/12 bg-brand p-8 text-light md:p-10"
                >
                  <p className="eyebrow">{c.category}</p>
                  <h3 className="display mt-6 text-2xl md:text-3xl">{c.name}</h3>
                  <p className="mt-3 max-w-sm text-sm leading-relaxed text-light/65">
                    {c.summary}
                  </p>
                  <p className="mt-8 text-sm font-medium text-accent">
                    See the full story →
                  </p>
                </Link>
              </Reveal>
            ))}
          </div>

          <div className="mt-10">
            <TextLink to="/case-studies" tone="brand">
              View case studies
            </TextLink>
          </div>
        </div>
      </section>

      {/* Insights */}
      <section className="section-deep py-24 md:py-32">
        <div className="shell">
          <Reveal className="flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-xl">
              <p className="eyebrow">Insights</p>
              <h2 className="display mt-5 text-3xl md:text-4xl">
                Practical perspectives on engineering teams
              </h2>
            </div>
            <TextLink to="/insights">Read insights</TextLink>
          </Reveal>

          <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-3">
            {posts.slice(0, 3).map((p, i) => (
              <Reveal key={p.slug} delay={i * 90}>
                <Link
                  to="/insights/$slug"
                  params={{ slug: p.slug }}
                  className="flex h-full flex-col bg-background p-8 transition-colors hover:bg-card"
                >
                  <p className="eyebrow">{p.topic}</p>
                  <h3 className="mt-5 text-lg font-medium leading-snug tracking-tight">
                    {p.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {p.excerpt}
                  </p>
                  <span className="mt-auto pt-6 text-xs text-muted-foreground">
                    {p.readingTime}
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why */}
      <section className="section-deep grain border-t border-border py-24 md:py-32">
        <div className="shell grid gap-16 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <p className="eyebrow">Why Imagina Devs</p>
            <h2 className="display mt-5 text-3xl md:text-5xl">
              Your engineering team, extended.
            </h2>
          </Reveal>
          <div className="grid gap-x-10 gap-y-10 sm:grid-cols-2">
            {why.map(({ Icon, title, copy }, i) => (
              <Reveal key={title} delay={i * 80}>
                <Icon size={24} weight="light" className="text-accent" />
                <h3 className="mt-4 text-base font-medium tracking-tight">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {copy}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* About preview */}
      <section className="section-light grain py-24 md:py-32">
        <div className="shell grid gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <p className="eyebrow-dark">About</p>
            <h2 className="display mt-5 text-3xl text-brand md:text-5xl">
              A tech partner that fits your team.
            </h2>
          </Reveal>
          <Reveal delay={100} className="max-w-lg">
            <p className="text-base leading-relaxed text-brand/75">
              Imagina Devs is a nearshore software development partner for U.S. companies,
              providing senior engineering talent through staff augmentation and custom
              development.
            </p>
            <p className="mt-5 text-base leading-relaxed text-brand/75">
              Our teams work aligned with U.S. time zones and integrate directly with
              engineering and product teams.
            </p>
            <div className="mt-8">
              <TextLink to="/about" tone="brand">
                More about Imagina
              </TextLink>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="section-deep grain py-24 md:py-32">
        <div className="shell max-w-3xl text-center">
          <Reveal>
            <p className="eyebrow">Contact</p>
            <h2 className="display mt-5 text-3xl md:text-5xl">
              Ready to scale your engineering team?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
              Tell us what you're building, what you're trying to solve, or where your team
              needs support.
            </p>
            <div className="mt-9 flex justify-center">
              <CtaLink to="/contact">Let's talk</CtaLink>
            </div>
          </Reveal>
        </div>
      </section>
    </PageLayout>
  );
}
