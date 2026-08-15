import { createFileRoute, Link } from "@tanstack/react-router";
import { PageLayout, PageHero } from "@/components/PageLayout";
import { Reveal } from "@/components/Reveal";
import { caseStudies } from "@/data/caseStudies";

export const Route = createFileRoute("/case-studies/")({
  head: () => ({
    meta: [
      { title: "Case Studies — Real Impact for Real Clients | Imagina Devs" },
      {
        name: "description",
        content:
          "How Imagina helps teams improve operations, modernize software and scale technology — including Renuity and AgiOne.",
      },
      { property: "og:title", content: "Case Studies | Imagina Devs" },
      {
        property: "og:description",
        content:
          "How Imagina helps teams improve operations, modernize software and scale technology.",
      },
    ],
  }),
  component: CaseStudiesIndex,
});

function CaseStudiesIndex() {
  return (
    <PageLayout>
      <PageHero
        eyebrow="Case studies"
        title="Real impact for real clients."
        intro="A few examples of how Imagina helps teams improve operations, modernize software and scale technology."
      />

      <section className="section-light grain py-20 md:py-28">
        <div className="shell space-y-6">
          {caseStudies.map((c, i) => (
            <Reveal key={c.slug} delay={i * 90}>
              <Link
                to="/case-studies/$slug"
                params={{ slug: c.slug }}
                className="lift group grid gap-8 rounded-2xl border border-brand/12 bg-brand p-8 text-light md:grid-cols-[1fr_1fr] md:p-12"
              >
                <div>
                  <p className="eyebrow">{c.category}</p>
                  <h2 className="display mt-6 text-3xl md:text-4xl">{c.name}</h2>
                  <p className="mt-4 max-w-sm text-sm leading-relaxed text-light/65">
                    {c.summary}
                  </p>
                  <p className="mt-8 text-sm font-medium text-accent">
                    See the full story →
                  </p>
                </div>
                <div className="grid gap-6 self-center sm:grid-cols-3 md:border-l md:border-light/10 md:pl-10">
                  {c.proof.map((p) => (
                    <div key={p.label}>
                      <p className="display text-2xl text-accent">{p.value}</p>
                      <p className="mt-2 text-xs leading-relaxed text-light/60">
                        {p.label}
                      </p>
                    </div>
                  ))}
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </PageLayout>
  );
}
