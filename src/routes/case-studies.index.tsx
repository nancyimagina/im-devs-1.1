import { createFileRoute, Link } from "@tanstack/react-router";
import { PageLayout, PageHero } from "@/components/PageLayout";
import { Reveal } from "@/components/Reveal";
import { caseStudies } from "@/data/caseStudies";
import { caseImage } from "@/data/images";

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
                className="card-light group grid overflow-hidden rounded-2xl md:grid-cols-[1fr_1fr]"
              >
                <img
                  src={caseImage(c.slug)}
                  alt={c.name}
                  width={1200}
                  height={800}
                  loading="lazy"
                  className="h-56 w-full object-cover md:h-full"
                />
                <div className="p-8 md:p-12">
                  <p className="eyebrow-dark">{c.category}</p>
                  <h2 className="display mt-5 text-3xl text-brand md:text-4xl">{c.name}</h2>
                  <p className="mt-4 text-sm leading-relaxed text-brand/65">{c.summary}</p>
                  <div className="mt-8 grid gap-6 border-t border-brand/10 pt-8 sm:grid-cols-3">
                    {c.proof.map((p) => (
                      <div key={p.label}>
                        <p className="display text-2xl text-brand">{p.value}</p>
                        <p className="mt-2 text-xs leading-relaxed text-brand/55">{p.label}</p>
                      </div>
                    ))}
                  </div>
                  <p className="mt-8 text-sm font-medium text-brand">See the full story →</p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </PageLayout>
  );
}
