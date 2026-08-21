import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { List, X } from "@phosphor-icons/react";
import { cn } from "@/lib/utils";
import { useLang, type TKey } from "@/lib/i18n";
import logoLight from "@/assets/logos/logo-im-devs-light.png.asset.json";

export const navItems: { key: TKey; to: string }[] = [
  { key: "nav.expertise", to: "/expertise" },
  { key: "nav.caseStudies", to: "/case-studies" },
  { key: "nav.testimonials", to: "/testimonials" },
  { key: "nav.blog", to: "/blog" },
  { key: "nav.about", to: "/about" },
  { key: "nav.contact", to: "/contact" },
];

function LanguageToggle({ className }: { className?: string }) {
  const { lang, setLang } = useLang();
  return (
    <div
      className={cn(
        "flex items-center gap-1 rounded-full border border-border px-1 py-1 text-xs",
        className,
      )}
    >
      {(["en", "es"] as const).map((l) => (
        <button
          key={l}
          type="button"
          onClick={() => setLang(l)}
          aria-pressed={lang === l}
          className={cn(
            "rounded-full px-2.5 py-1 uppercase tracking-wide transition-colors",
            lang === l
              ? "bg-accent text-accent-foreground"
              : "text-foreground/60 hover:text-foreground",
          )}
        >
          {l}
        </button>
      ))}
    </div>
  );
}

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { t } = useLang();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-500",
        scrolled ? "glass" : "border-b border-transparent",
      )}
    >
      <div className="shell flex h-16 items-center justify-between gap-6">
        <Link to="/" className="flex items-center" onClick={() => setOpen(false)}>
          <img
            src={logoLight.url}
            alt="Imagina Devs"
            width={160}
            height={32}
            className="h-7 w-auto md:h-8"
          />
        </Link>

        <nav className="hidden items-center gap-5 md:flex lg:gap-7">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeProps={{ className: "text-accent" }}
              activeOptions={{ exact: false }}
              className="text-sm text-foreground/70 transition-colors hover:text-foreground"
            >
              {t(item.key)}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <LanguageToggle className="hidden sm:flex" />
          <Link
            to="/contact"
            className="hidden rounded-full bg-accent px-5 py-2 text-sm font-medium text-accent-foreground transition-opacity hover:opacity-90 lg:inline-flex"
          >
            {t("cta.buildTeam")}
          </Link>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
            className="grid h-9 w-9 place-items-center rounded-full border border-border text-foreground md:hidden"
          >
            {open ? <X size={17} /> : <List size={17} />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="glass md:hidden">
          <div className="shell flex flex-col gap-1 py-4">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="rounded-md px-1 py-2.5 text-base text-foreground/80"
              >
                {t(item.key)}
              </Link>
            ))}
            <LanguageToggle className="mt-3 w-fit" />
          </div>
        </nav>
      )}
    </header>
  );
}
