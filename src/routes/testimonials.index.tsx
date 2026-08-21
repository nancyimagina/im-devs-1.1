import { createFileRoute, Link } from "@tanstack/react-router";
import { PageLayout, PageHero } from "@/components/PageLayout";
import { Reveal } from "@/components/Reveal";
import { testimonials } from "@/data/testimonials";

export const Route = createFileRoute("/testimonials/")({
  head: () => ({
    meta: [
      { title: "Testimonials — What Our Clients Say | Imagina Devs" },
      {
        name: "description",
        content:
          "Client stories from teams that scaled engineering capacity with Imagina Devs across field operations, logistics and Salesforce.",
      },
      { property: "og:title", content: "Testimonials | Imagina Devs" },
      {
        property: "og:description",
        content:
          "Client stories from teams that scaled engineering capacity with Imagina Devs.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: TestimonialsIndex,
});

function TestimonialsIndex() {
  return (
    <PageLayout>
      <PageHero
        eyebrow="Testimonials"
        title="What our clients say."
        intro="Long-term partnerships, senior engineers and teams that stay through the hard parts."
      />

      <section className="section-light grain py-20 md:py-28">
        <div className="shell grid gap-8 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.slug} delay={i * 90}>
              <Link
                to="/testimonials/$slug"
                params={{ slug: t.slug }}
                className="card-light group flex h-full flex-col overflow-hidden rounded-2xl"
              >
                <img
                  src={t.image}
                  alt={t.name}
                  width={640}
                  height={640}
                  loading="lazy"
                  className="h-52 w-full object-cover"
                />
                <div className="flex flex-1 flex-col p-8">
                  <p className="eyebrow-dark">{t.context}</p>
                  <p className="mt-5 text-base leading-relaxed text-brand">“{t.quote}”</p>
                  <div className="mt-auto pt-8">
                    <p className="text-sm font-medium text-brand">{t.name}</p>
                    <p className="text-sm text-brand/60">
                      {t.role} · {t.company}
                    </p>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </PageLayout>
  );
}
