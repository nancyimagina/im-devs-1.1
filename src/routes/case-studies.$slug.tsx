import { createFileRoute, notFound } from "@tanstack/react-router";
import { PageLayout } from "@/components/PageLayout";
import { Reveal } from "@/components/Reveal";
import { CtaLink, TextLink } from "@/components/ui-kit";
import { caseStudies, getCaseStudy } from "@/data/caseStudies";
import { caseImage } from "@/data/images";

export const Route = createFileRoute("/case-studies/$slug")({
  loader: ({ params }) => {
    const study = getCaseStudy(params.slug);
    if (!study) throw notFound();
    return { study };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Not found | Imagina Devs" }, { name: "robots", content: "noindex" }],
      };
    }
    const { study } = loaderData;
    return {
      meta: [
        { title: `${study.title} | Imagina Devs` },
        { name: "description", content: study.summary },
        { property: "og:title", content: `${study.title} | Imagina Devs` },
        { property: "og:description", content: study.summary },
      ],
    };
  },
  component: CaseStudyPage,
});

function CaseStudyPage() {
  const { study } = Route.useLoaderData();
  const others = caseStudies.filter((c) => c.slug !== study.slug);

  return (
    <PageLayout>
      <section className="section-deep grain pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="shell">
          <TextLink to="/case-studies">All case studies</TextLink>
          <p className="eyebrow mt-10">{study.category}</p>
          <h1 className="display mt-5 max-w-3xl text-4xl md:text-6xl">{study.title}</h1>
          {study.relationship && (
            <p className="mt-6 text-sm text-muted-foreground">{study.relationship}</p>
          )}

          <img
            src={caseImage(study.slug)}
            alt={study.name}
            width={1200}
            height={800}
            className="mt-12 aspect-[16/9] w-full rounded-2xl object-cover"
          />

          <div className="mt-16 grid gap-8 border-t border-border pt-10 sm:grid-cols-3">
            {study.proof.map((p, i) => (
              <Reveal key={p.label} delay={i * 80}>
                <p className="display text-3xl text-accent md:text-4xl">{p.value}</p>
                <p className="mt-3 max-w-[16rem] text-sm leading-relaxed text-muted-foreground">
                  {p.label}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-light grain py-24 md:py-32">
        <div className="shell grid gap-16 lg:grid-cols-2 lg:gap-24">
          <Reveal>
            <p className="eyebrow-dark">Challenge</p>
            <p className="mt-5 text-lg leading-relaxed text-brand md:text-xl">
              {study.challenge}
            </p>
          </Reveal>
          <Reveal delay={100}>
            <p className="eyebrow-dark">Solution</p>
            <p className="mt-5 text-lg leading-relaxed text-brand md:text-xl">
              {study.solution}
            </p>
          </Reveal>
        </div>

        <div className="shell mt-20">
          <Reveal>
            <p className="eyebrow-dark">Key outcomes</p>
          </Reveal>
          <ul className="mt-8 divide-y divide-brand/12 border-y border-brand/12">
            {study.outcomes.map((o, i) => (
              <Reveal as="li" key={o} delay={i * 60} className="flex gap-6 py-5">
                <span className="text-xs text-brand/40">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-base text-brand/85">{o}</span>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-deep grain py-24 md:py-28">
        <div className="shell grid gap-10 md:grid-cols-2 md:items-center">
          <Reveal>
            <h2 className="display text-3xl md:text-4xl">
              Looking for a similar outcome?
            </h2>
            <div className="mt-8">
              <CtaLink to="/contact">Talk to us</CtaLink>
            </div>
          </Reveal>
          <Reveal delay={100} className="md:justify-self-end">
            <p className="eyebrow">Next case study</p>
            {others.map((c) => (
              <TextLink
                key={c.slug}
                to="/case-studies/$slug"
                params={{ slug: c.slug }}
                className="mt-4 block text-lg"
              >
                {c.name}
              </TextLink>
            ))}
          </Reveal>
        </div>
      </section>
    </PageLayout>
  );
}
