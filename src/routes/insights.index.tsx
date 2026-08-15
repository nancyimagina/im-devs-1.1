import { createFileRoute, Link } from "@tanstack/react-router";
import { PageLayout, PageHero } from "@/components/PageLayout";
import { Reveal } from "@/components/Reveal";
import { posts } from "@/data/posts";

export const Route = createFileRoute("/insights/")({
  head: () => ({
    meta: [
      { title: "Insights — Engineering Teams & Software Delivery | Imagina Devs" },
      {
        name: "description",
        content:
          "Practical perspectives on engineering teams, software delivery and scaling technology.",
      },
      { property: "og:title", content: "Insights | Imagina Devs" },
      {
        property: "og:description",
        content:
          "Practical perspectives on engineering teams, software delivery and scaling technology.",
      },
    ],
  }),
  component: InsightsIndex,
});

function InsightsIndex() {
  return (
    <PageLayout>
      <PageHero
        eyebrow="Insights"
        title="Insights"
        intro="Practical perspectives on engineering teams, software delivery and scaling technology."
      />

      <section className="section-deep py-16 md:py-24">
        <div className="shell divide-y divide-border border-y border-border">
          {posts.map((p, i) => (
            <Reveal key={p.slug} delay={i * 70}>
              <Link
                to="/insights/$slug"
                params={{ slug: p.slug }}
                className="arrow-move group grid gap-4 py-8 md:grid-cols-[10rem_1fr_auto] md:items-baseline md:gap-10"
              >
                <p className="eyebrow">{p.topic}</p>
                <div>
                  <h2 className="text-xl font-medium tracking-tight transition-colors group-hover:text-accent md:text-2xl">
                    {p.title}
                  </h2>
                  <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground">
                    {p.excerpt}
                  </p>
                </div>
                <span className="text-xs text-muted-foreground">{p.readingTime}</span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </PageLayout>
  );
}
