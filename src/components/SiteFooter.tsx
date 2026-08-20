import { Link } from "@tanstack/react-router";
import {
  InstagramLogo,
  FacebookLogo,
  LinkedinLogo,
  TiktokLogo,
} from "@phosphor-icons/react";
import { navItems } from "./SiteHeader";

const socials = [
  { label: "Instagram", href: "https://instagram.com", Icon: InstagramLogo },
  { label: "Facebook", href: "https://facebook.com", Icon: FacebookLogo },
  { label: "LinkedIn", href: "https://linkedin.com", Icon: LinkedinLogo },
  { label: "TikTok", href: "https://tiktok.com", Icon: TiktokLogo },
];

export function SiteFooter() {
  return (
    <footer className="section-deep grain border-t border-border">
      <div className="shell grid gap-12 py-16 md:grid-cols-[1.4fr_1fr_1fr] md:py-20">
        <div className="max-w-sm">
          <div className="flex items-center gap-2.5">
            <span className="block h-2 w-2 rounded-full bg-accent" />
            <span className="text-base font-medium tracking-tight">Imagina Devs</span>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            Nearshore engineering for U.S. companies.
          </p>
        </div>

        <nav className="flex flex-col gap-3">
          <p className="eyebrow">Navigation</p>
          <Link to="/" className="text-sm text-foreground/75 hover:text-accent">
            Home
          </Link>
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="text-sm text-foreground/75 hover:text-accent"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex flex-col gap-3">
          <p className="eyebrow">Follow</p>
          <div className="flex gap-3">
            {socials.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer noopener"
                aria-label={label}
                className="grid h-10 w-10 place-items-center rounded-full border border-border text-foreground/75 transition-colors hover:border-accent/60 hover:text-accent"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="shell flex flex-col gap-2 border-t border-border py-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} Imagina Devs. All rights reserved.</p>
        <p>Senior engineering talent, aligned with your team.</p>
      </div>
    </footer>
  );
}
