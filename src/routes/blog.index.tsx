import { createFileRoute, Link } from "@tanstack/react-router";
import { PageLayout, PageHero } from "@/components/PageLayout";
import { Reveal } from "@/components/Reveal";
import { posts } from "@/data/posts";
import { postImage } from "@/data/images";

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: [
      { title: "Blog — Engineering Teams & Software Delivery | Imagina Devs" },
      {
        name: "description",
        content:
          "Practical perspectives on engineering teams, software delivery and scaling technology.",
      },
      { property: "og:title", content: "Blog | Imagina Devs" },
      {
        property: "og:description",
        content:
          "Practical perspectives on engineering teams, software delivery and scaling technology.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: BlogIndex,
});

function BlogIndex() {
  return (
    <PageLayout>
      <PageHero
        eyebrow="Blog"
        title="Blog"
        intro="Practical perspectives on engineering teams, software delivery and scaling technology."
      />

      <section className="section-light grain py-16 md:py-24">
        <div className="shell grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((p, i) => (
            <Reveal key={p.slug} delay={i * 70}>
              <Link
                to="/blog/$slug"
                params={{ slug: p.slug }}
                className="card-light group flex h-full flex-col overflow-hidden rounded-2xl"
              >
                <img
                  src={postImage(p.slug)}
                  alt={p.title}
                  width={1200}
                  height={800}
                  loading="lazy"
                  className="h-44 w-full object-cover"
                />
                <div className="flex flex-1 flex-col p-8">
                  <p className="eyebrow-dark">{p.topic}</p>
                  <h2 className="mt-4 text-lg font-medium leading-snug tracking-tight text-brand">
                    {p.title}
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-brand/65">{p.excerpt}</p>
                  <span className="mt-auto pt-6 text-xs text-brand/50">{p.readingTime}</span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </PageLayout>
  );
}
