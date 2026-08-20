import { createFileRoute, notFound } from "@tanstack/react-router";
import { PageLayout } from "@/components/PageLayout";
import { CtaLink, TextLink } from "@/components/ui-kit";
import { posts, getPost } from "@/data/posts";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = getPost(params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Not found | Imagina Devs" }, { name: "robots", content: "noindex" }],
      };
    }
    const { post } = loaderData;
    return {
      meta: [
        { title: `${post.title} | Imagina Devs` },
        { name: "description", content: post.excerpt },
        { property: "og:title", content: `${post.title} | Imagina Devs` },
        { property: "og:description", content: post.excerpt },
        { property: "og:type", content: "article" },
      ],
    };
  },
  component: ArticlePage,
});

function ArticlePage() {
  const { post } = Route.useLoaderData();
  const more = posts.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <PageLayout>
      <article>
        <section className="section-deep grain pt-32 pb-14 md:pt-40 md:pb-20">
          <div className="shell max-w-3xl">
            <TextLink to="/blog">All articles</TextLink>
            <p className="eyebrow mt-10">{post.topic}</p>
            <h1 className="display mt-5 text-3xl md:text-5xl">{post.title}</h1>
            <p className="mt-6 text-sm text-muted-foreground">{post.readingTime}</p>
          </div>
        </section>

        <section className="section-light grain py-20 md:py-28">
          <div className="shell max-w-2xl">
            <p className="text-lg leading-relaxed text-brand md:text-xl">{post.excerpt}</p>
            <div className="mt-12 space-y-12">
              {post.body.map((block, i) => (
                <div key={i}>
                  {block.heading && (
                    <h2 className="text-xl font-medium tracking-tight text-brand">
                      {block.heading}
                    </h2>
                  )}
                  {block.paragraphs.map((p) => (
                    <p key={p} className="mt-4 text-base leading-relaxed text-brand/75">
                      {p}
                    </p>
                  ))}
                  {block.bullets && (
                    <ul className="mt-6 space-y-3">
                      {block.bullets.map((b) => (
                        <li key={b} className="flex gap-3 text-base text-brand/75">
                          <span className="mt-2.5 block h-1 w-1 shrink-0 rounded-full bg-brand/50" />
                          {b}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      </article>

      <section className="section-deep grain py-20 md:py-24">
        <div className="shell grid gap-12 md:grid-cols-2">
          <div>
            <h2 className="display text-2xl md:text-3xl">
              Need engineering capacity for this kind of work?
            </h2>
            <div className="mt-8">
              <CtaLink to="/contact">Talk to us</CtaLink>
            </div>
          </div>
          <div>
            <p className="eyebrow">Keep reading</p>
            <div className="mt-5 space-y-4">
              {more.map((p) => (
                <TextLink
                  key={p.slug}
                  to="/blog/$slug"
                  params={{ slug: p.slug }}
                  className="block text-base"
                >
                  {p.title}
                </TextLink>
              ))}
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
