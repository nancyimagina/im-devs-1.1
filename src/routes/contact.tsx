import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { CheckCircle, ArrowRight } from "@phosphor-icons/react";
import { PageLayout } from "@/components/PageLayout";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Let's Build What's Next | Imagina Devs" },
      {
        name: "description",
        content:
          "Tell us what you're building, what you're trying to solve, or where your team needs support.",
      },
      { property: "og:title", content: "Contact | Imagina Devs" },
      {
        property: "og:description",
        content: "Start a conversation with Imagina Devs about your engineering team.",
      },
    ],
  }),
  component: Contact,
});

const chips = ["Staff Augmentation", "Salesforce", "Custom Software", "Other"];

const values = [
  "Senior engineers integrated into your team",
  "Aligned with U.S. time zones",
  "Built for long-term collaboration",
];

const fieldClass =
  "w-full rounded-lg border border-border bg-background/40 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/70 outline-none transition-colors focus:border-accent/70";

function Contact() {
  const [selected, setSelected] = useState<string[]>([]);
  const [sent, setSent] = useState(false);

  const toggle = (chip: string) =>
    setSelected((s) => (s.includes(chip) ? s.filter((c) => c !== chip) : [...s, chip]));

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <PageLayout>
      <section className="section-deep grain pt-32 pb-24 md:pt-40 md:pb-32">
        <div className="shell grid gap-14 lg:grid-cols-2 lg:gap-24">
          <Reveal>
            <p className="eyebrow">Contact</p>
            <h1 className="display mt-5 text-4xl md:text-6xl">Let's build what's next.</h1>
            <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground">
              Tell us what you're building, what you're trying to solve, or where your team
              needs support.
            </p>
            <ul className="mt-12 space-y-4">
              {values.map((v) => (
                <li key={v} className="flex items-start gap-3 text-sm text-foreground/80">
                  <CheckCircle size={18} weight="light" className="mt-0.5 text-accent" />
                  {v}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={120}>
            <div className="glass rounded-2xl p-7 md:p-9">
              {sent ? (
                <div className="py-14 text-center">
                  <CheckCircle size={34} weight="light" className="mx-auto text-accent" />
                  <h2 className="mt-5 text-xl font-medium tracking-tight">
                    Thanks — message received.
                  </h2>
                  <p className="mt-3 text-sm text-muted-foreground">
                    We'll get back to you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={onSubmit} className="space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="mb-2 block text-xs text-muted-foreground">
                        Name
                      </label>
                      <input id="name" name="name" required className={fieldClass} placeholder="Your name" />
                    </div>
                    <div>
                      <label htmlFor="email" className="mb-2 block text-xs text-muted-foreground">
                        Work email
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        className={fieldClass}
                        placeholder="you@company.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="company" className="mb-2 block text-xs text-muted-foreground">
                      Company
                    </label>
                    <input id="company" name="company" className={fieldClass} placeholder="Company name" />
                  </div>

                  <div>
                    <p className="mb-3 text-xs text-muted-foreground">I'm interested in</p>
                    <div className="flex flex-wrap gap-2">
                      {chips.map((chip) => {
                        const on = selected.includes(chip);
                        return (
                          <button
                            key={chip}
                            type="button"
                            onClick={() => toggle(chip)}
                            className={`rounded-full border px-4 py-1.5 text-xs transition-colors ${
                              on
                                ? "border-accent bg-accent text-accent-foreground"
                                : "border-border text-foreground/70 hover:border-accent/50"
                            }`}
                          >
                            {chip}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="mb-2 block text-xs text-muted-foreground">
                      What can we help with?
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      className={`${fieldClass} resize-none`}
                      placeholder="A short description of your team, project or challenge."
                    />
                  </div>

                  <button
                    type="submit"
                    className="arrow-move inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm font-medium text-accent-foreground transition-opacity hover:opacity-90"
                  >
                    Start a conversation
                    <ArrowRight size={16} weight="bold" />
                  </button>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </section>
    </PageLayout>
  );
}
