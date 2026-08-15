import { createFileRoute } from "@tanstack/react-router";
import { UsersThree, Cloud, Code, Wrench, Truck, Buildings } from "@phosphor-icons/react";
import { PageLayout, PageHero } from "@/components/PageLayout";
import { Reveal } from "@/components/Reveal";
import { CtaLink, TextLink } from "@/components/ui-kit";

export const Route = createFileRoute("/expertise")({
  head: () => ({
    meta: [
      { title: "Expertise — Staff Augmentation & Salesforce | Imagina Devs" },
      {
        name: "description",
        content:
          "Staff augmentation, Salesforce engineering and custom software development for U.S. companies running complex operations.",
      },
      { property: "og:title", content: "Expertise | Imagina Devs" },
      {
        property: "og:description",
        content:
          "Staff augmentation, Salesforce engineering and custom software development.",
      },
    ],
  }),
  component: Expertise,
});

const services = [
  {
    Icon: UsersThree,
    title: "Staff Augmentation",
    copy: "Extend your engineering team with experienced developers who work directly with your team, aligned with U.S. time zones.",
    points: [
      "Senior engineers integrated into your process",
      "Direct collaboration with product and engineering",
      "Capacity that scales as needs change",
    ],
  },
  {
    Icon: Cloud,
    title: "Salesforce Experts",
    copy: "Engineering capacity for Salesforce-heavy organizations and teams that need specialized development support.",
    points: [
      "Apex development",
      "Lightning Web Components",
      "Salesforce integrations",
      "Enterprise platform development",
    ],
  },
  {
    Icon: Code,
    title: "Custom Software Development",
    copy: "Build software tailored to your business and operational needs, from mobile applications to operational platforms.",
    points: [
      "Operational platforms",
      "Mobile applications",
      "APIs and integrations",
      "Legacy modernization",
    ],
  },
];

const industries = [
  {
    Icon: Wrench,
    title: "Home Services & Field Operations",
    copy: "We build and extend software for companies managing distributed field teams and complex operational workflows.",
    focus: [
      "Field operations",
      "Mobile applications",
      "Scheduling and dispatch",
      "Route optimization",
      "Operational workflows",
    ],
    proof: "Renuity — more than 8 years of collaboration.",
  },
  {
    Icon: Truck,
    title: "Logistics & Mission-Critical Operations",
    copy: "We build reliable software for complex operations where coordination, visibility and responsiveness matter.",
    focus: [
      "Operational platforms",
      "Real-time information",
      "Legacy modernization",
      "APIs and integrations",
      "Multi-site workflows",
    ],
    proof: "AgiOne — unified web and mobile platform for airport operations.",
  },
  {
    Icon: Buildings,
    title: "Enterprise Salesforce",
    copy: "We provide engineering capacity for Salesforce-heavy organizations and teams that need specialized development support.",
    focus: [
      "Apex",
      "Lightning Web Components",
      "Salesforce integrations",
      "Enterprise platform development",
    ],
  },
];

function Expertise() {
  return (
    <PageLayout>
      <PageHero
        eyebrow="Expertise"
        title="Engineering capacity, shaped around your team."
        intro="Technology expertise shaped by complex operations, real-world challenges and long-term partnerships."
      />

      <section className="section-light grain py-24 md:py-32">
        <div className="shell">
          <Reveal>
            <p className="eyebrow-dark">Services</p>
          </Reveal>
          <div className="mt-12 divide-y divide-brand/12 border-y border-brand/12">
            {services.map(({ Icon, title, copy, points }, i) => (
              <Reveal
                key={title}
                delay={i * 80}
                className="grid gap-6 py-12 md:grid-cols-[auto_1fr_1fr] md:gap-12"
              >
                <Icon size={28} weight="light" className="text-brand" />
                <div>
                  <h2 className="text-2xl font-medium tracking-tight text-brand">
                    {title}
                  </h2>
                  <p className="mt-4 max-w-sm text-sm leading-relaxed text-brand/65">
                    {copy}
                  </p>
                </div>
                <ul className="space-y-2.5 text-sm text-brand/75">
                  {points.map((p) => (
                    <li key={p} className="flex gap-3">
                      <span className="mt-2 block h-1 w-1 shrink-0 rounded-full bg-brand/50" />
                      {p}
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-deep grain py-24 md:py-32">
        <div className="shell">
          <Reveal className="max-w-2xl">
            <p className="eyebrow">Industries & Expertise</p>
            <h2 className="display mt-5 text-3xl md:text-5xl">
              Where we have experience
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {industries.map(({ Icon, title, copy, focus, proof }, i) => (
              <Reveal
                key={title}
                delay={i * 90}
                className="lift flex h-full flex-col rounded-2xl border border-border bg-card/60 p-8"
              >
                <Icon size={26} weight="light" className="text-accent" />
                <h3 className="mt-6 text-lg font-medium leading-snug tracking-tight">
                  {title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{copy}</p>
                <ul className="mt-6 space-y-2 text-sm text-foreground/75">
                  {focus.map((f) => (
                    <li key={f} className="flex gap-3">
                      <span className="mt-2 block h-1 w-1 shrink-0 rounded-full bg-accent" />
                      {f}
                    </li>
                  ))}
                </ul>
                {proof && (
                  <p className="mt-auto pt-8 text-xs leading-relaxed text-accent">{proof}</p>
                )}
              </Reveal>
            ))}
          </div>

          <div className="mt-12 flex flex-wrap items-center gap-6">
            <CtaLink to="/contact">Build your team</CtaLink>
            <TextLink to="/case-studies">View case studies</TextLink>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
