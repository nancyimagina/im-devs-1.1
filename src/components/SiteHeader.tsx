import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { List, X } from "@phosphor-icons/react";
import { cn } from "@/lib/utils";

export const navItems = [
  { label: "Expertise", to: "/expertise" },
  { label: "Case Studies", to: "/case-studies" },
  { label: "Testimonials", to: "/testimonials" },
  { label: "Blog", to: "/blog" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

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
        <Link to="/" className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <span className="block h-2 w-2 rounded-full bg-accent" />
          <span className="text-[0.95rem] font-medium tracking-tight text-foreground">
            Imagina Devs
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeProps={{ className: "text-accent" }}
              activeOptions={{ exact: false }}
              className="text-sm text-foreground/70 transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            to="/contact"
            className="hidden rounded-full bg-accent px-5 py-2 text-sm font-medium text-accent-foreground transition-opacity hover:opacity-90 sm:inline-flex"
          >
            Build your team
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
                {item.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
