import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export type Lang = "en" | "es";

const dict = {
  en: {
    "nav.expertise": "Expertise",
    "nav.caseStudies": "Case Studies",
    "nav.testimonials": "Testimonials",
    "nav.blog": "Blog",
    "nav.about": "About",
    "nav.contact": "Contact",
    "nav.home": "Home",
    "cta.buildTeam": "Build your team",
    "cta.talk": "Talk to us",
    "cta.explore": "Explore services",
    "cta.letsTalk": "Let's talk",
    "home.trusted": "Trusted by teams we build with",
    "home.whatWeDo": "What we do",
    "home.whatWeDoTitle": "Built for teams that need to move fast",
    "home.exploreExpertise": "Explore our expertise",
    "home.industries": "Industries & Expertise",
    "home.industriesTitle": "Expertise shaped by complex operations",
    "home.caseStudies": "Case studies",
    "home.caseStudiesTitle": "Real impact for real clients",
    "home.viewCases": "View case studies",
    "home.about": "About",
    "home.aboutTitle": "A tech partner that fits your team.",
    "home.moreAbout": "More about Imagina",
    "home.testimonials": "Testimonials",
    "home.testimonialsTitle": "What our clients say",
    "home.allTestimonials": "Read all testimonials",
    "home.blog": "Blog",
    "home.blogTitle": "Practical perspectives on engineering teams",
    "home.readBlog": "Read the blog",
    "home.why": "Why Imagina Devs",
    "home.whyTitle": "Your engineering team, extended.",
    "home.contact": "Contact",
    "home.contactTitle": "Ready to scale your engineering team?",
    "home.contactText":
      "Tell us what you're building, what you're trying to solve, or where your team needs support.",
    "common.readStory": "Read the full story",
    "common.seeStory": "See the full story",
  },
  es: {
    "nav.expertise": "Servicios",
    "nav.caseStudies": "Casos de éxito",
    "nav.testimonials": "Testimonios",
    "nav.blog": "Blog",
    "nav.about": "Nosotros",
    "nav.contact": "Contacto",
    "nav.home": "Inicio",
    "cta.buildTeam": "Arma tu equipo",
    "cta.talk": "Hablemos",
    "cta.explore": "Ver servicios",
    "cta.letsTalk": "Hablemos",
    "home.trusted": "Equipos que confían en nosotros",
    "home.whatWeDo": "Qué hacemos",
    "home.whatWeDoTitle": "Hecho para equipos que necesitan avanzar rápido",
    "home.exploreExpertise": "Conoce nuestros servicios",
    "home.industries": "Industrias y experiencia",
    "home.industriesTitle": "Experiencia moldeada por operaciones complejas",
    "home.caseStudies": "Casos de éxito",
    "home.caseStudiesTitle": "Impacto real para clientes reales",
    "home.viewCases": "Ver casos de éxito",
    "home.about": "Nosotros",
    "home.aboutTitle": "Un socio tecnológico que encaja con tu equipo.",
    "home.moreAbout": "Más sobre Imagina",
    "home.testimonials": "Testimonios",
    "home.testimonialsTitle": "Lo que dicen nuestros clientes",
    "home.allTestimonials": "Ver todos los testimonios",
    "home.blog": "Blog",
    "home.blogTitle": "Perspectivas prácticas sobre equipos de ingeniería",
    "home.readBlog": "Leer el blog",
    "home.why": "Por qué Imagina Devs",
    "home.whyTitle": "Tu equipo de ingeniería, extendido.",
    "home.contact": "Contacto",
    "home.contactTitle": "¿Listo para escalar tu equipo de ingeniería?",
    "home.contactText":
      "Cuéntanos qué estás construyendo, qué quieres resolver o dónde tu equipo necesita apoyo.",
    "common.readStory": "Leer la historia completa",
    "common.seeStory": "Ver la historia completa",
  },
} satisfies Record<Lang, Record<string, string>>;

export type TKey = keyof (typeof dict)["en"];

type Ctx = { lang: Lang; setLang: (l: Lang) => void; t: (key: TKey) => string };

const LanguageContext = createContext<Ctx>({
  lang: "en",
  setLang: () => {},
  t: (key) => dict.en[key],
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    const stored = window.localStorage.getItem("imagina-lang");
    if (stored === "es" || stored === "en") setLangState(stored);
  }, []);

  const setLang = useCallback((l: Lang) => {
    setLangState(l);
    window.localStorage.setItem("imagina-lang", l);
    document.documentElement.lang = l;
  }, []);

  const value = useMemo<Ctx>(
    () => ({ lang, setLang, t: (key: TKey) => dict[lang][key] ?? dict.en[key] }),
    [lang, setLang],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export const useLang = () => useContext(LanguageContext);
