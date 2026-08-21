import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { CaretLeft, CaretRight } from "@phosphor-icons/react";
import { testimonials } from "@/data/testimonials";

export function TestimonialsCarousel() {
  const [index, setIndex] = useState(0);
  const active = testimonials[index]!;

  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % testimonials.length), 8000);
    return () => clearInterval(t);
  }, []);

  const go = (dir: number) =>
    setIndex((i) => (i + dir + testimonials.length) % testimonials.length);

  return (
    <div className="mt-14">
      <div
        key={active.slug}
        className="card-light animate-in fade-in slide-in-from-bottom-2 fill-mode-both grid gap-8 overflow-hidden rounded-2xl duration-500 md:grid-cols-[0.6fr_1.4fr]"
      >
        <img
          src={active.image}
          alt={active.name}
          width={640}
          height={640}
          loading="lazy"
          className="h-64 w-full object-cover md:h-full"
        />
        <div className="p-8 md:p-12">
          <p className="eyebrow-dark">{active.context}</p>
          <blockquote className="mt-6 text-xl leading-snug text-brand md:text-2xl">
            “{active.quote}”
          </blockquote>
          <p className="mt-8 text-sm font-medium text-brand">{active.name}</p>
          <p className="text-sm text-brand/60">
            {active.role} · {active.company}
          </p>
          <Link
            to="/testimonials/$slug"
            params={{ slug: active.slug }}
            className="mt-6 inline-block text-sm font-medium text-brand underline underline-offset-4"
          >
            Read the full story →
          </Link>
        </div>
      </div>

      <div className="mt-8 flex items-center gap-3">
        <button
          type="button"
          onClick={() => go(-1)}
          aria-label="Previous testimonial"
          className="grid h-10 w-10 place-items-center rounded-full border border-brand/20 text-brand transition-colors hover:border-brand/50"
        >
          <CaretLeft size={16} />
        </button>
        <button
          type="button"
          onClick={() => go(1)}
          aria-label="Next testimonial"
          className="grid h-10 w-10 place-items-center rounded-full border border-brand/20 text-brand transition-colors hover:border-brand/50"
        >
          <CaretRight size={16} />
        </button>
        <div className="ml-3 flex items-center gap-2">
          {testimonials.map((t, i) => (
            <button
              key={t.slug}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`Testimonial ${i + 1}`}
              className={`h-2 rounded-full transition-all ${
                i === index ? "w-8 bg-brand" : "w-2 bg-brand/25 hover:bg-brand/50"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
