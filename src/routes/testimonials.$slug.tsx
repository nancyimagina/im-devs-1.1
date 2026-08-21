import { createFileRoute, notFound } from "@tanstack/react-router";
import { PageLayout } from "@/components/PageLayout";
import { Reveal } from "@/components/Reveal";
import { CtaLink, TextLink } from "@/components/ui-kit";
import { testimonials, getTestimonial } from "@/data/testimonials";

export const Route = createFileRoute("/testimonials/$slug")({
  loader: ({ params }) => {
    const testimonial = getTestimonial(params.slug);
    if (!testimonial) throw notFound();
    return { testimonial };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Not found | Imagina Devs" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const { testimonial } = loaderData;
    const title = `${testimonial.name}, ${testimonial.company} | Imagina Devs`;
    return {
      meta: [
        { title },
        { name: "description", content: testimonial.quote },
        { property: "og:title", content: title },
        { property: "og:description", content: testimonial.quote },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  component: TestimonialPage,
});

function TestimonialPage() {
  const { testimonial } = Route.useLoaderData();
  const more = testimonials.filter((t) => t.slug !== testimonial.slug);

  return (
    <PageLayout>
      <section className="section-deep grain pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="shell grid gap-12 lg:grid-cols-[1.3fr_0.7fr] lg:items-center">
          <div>
            <TextLink to="/testimonials">All testimonials</TextLink>
            <p className="eyebrow mt-10">{testimonial.context}</p>
            <h1 className="display mt-5 max-w-2xl text-3xl leading-snug md:text-5xl">
              “{testimonial.quote}”
            </h1>
            <p className="mt-8 text-base font-medium">{testimonial.name}</p>
            <p className="text-sm text-muted-foreground">
              {testimonial.role} · {testimonial.company}
            </p>
          </div>
          <img
            src={testimonial.image}
            alt={testimonial.name}
            width={640}
            height={640}
            className="aspect-square w-full max-w-sm rounded-3xl object-cover"
          />
        </div>
      </section>

      <section className="section-light grain py-20 md:py-28">
        <div className="shell grid gap-16 lg:grid-cols-[1.2fr_0.8fr]">
          <Reveal className="max-w-2xl space-y-6">
            {testimonial.story.map((p) => (
              <p key={p} className="text-lg leading-relaxed text-brand/80">
                {p}
              </p>
            ))}
          </Reveal>
          <Reveal delay={100} className="card-light rounded-2xl p-8">
            <p className="eyebrow-dark">Results</p>
            <ul className="mt-6 space-y-4">
              {testimonial.results.map((r) => (
                <li key={r} className="flex gap-3 text-sm leading-relaxed text-brand/75">
                  <span className="mt-2 block h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  {r}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="section-deep grain py-20 md:py-24">
        <div className="shell grid gap-12 md:grid-cols-2">
          <div>
            <h2 className="display text-2xl md:text-3xl">
              Want this kind of partnership?
            </h2>
            <div className="mt-8">
              <CtaLink to="/contact">Talk to us</CtaLink>
            </div>
          </div>
          <div>
            <p className="eyebrow">More testimonials</p>
            <div className="mt-5 space-y-4">
              {more.map((t) => (
                <TextLink
                  key={t.slug}
                  to="/testimonials/$slug"
                  params={{ slug: t.slug }}
                  className="block text-base"
                >
                  {t.name} — {t.company}
                </TextLink>
              ))}
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
