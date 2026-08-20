import person1 from "@/assets/person-1.jpg";
import person2 from "@/assets/person-2.jpg";
import person3 from "@/assets/person-3.jpg";

export type Testimonial = {
  slug: string;
  name: string;
  role: string;
  company: string;
  image: string;
  quote: string;
  context: string;
  story: string[];
  results: string[];
};

export const testimonials: Testimonial[] = [
  {
    slug: "renuity-field-operations",
    name: "Sarah Whitfield",
    role: "VP of Operations",
    company: "Renuity",
    image: person1,
    quote:
      "Imagina works like part of our own engineering team. After eight years, they know our operation as well as we do.",
    context: "Home Services & Field Operations",
    story: [
      "When we started, our field teams were working with legacy tools and a mobile experience that slowed everyone down. We needed engineers who could understand operations, not just tickets.",
      "Imagina embedded directly with our team, shipped route optimization and a custom mobile app, and stayed with us as the business grew across new markets.",
    ],
    results: [
      "~20% productivity increase in the first quarter after launch",
      "On-time completion up from ~85% to 95%+",
      "8+ years of continuous collaboration",
    ],
  },
  {
    slug: "agione-airport-operations",
    name: "Michael Reyes",
    role: "Director of Technology",
    company: "AgiOne",
    image: person2,
    quote:
      "They replaced fragmented processes with one platform our crews actually trust in real time.",
    context: "Logistics & Mission-Critical Operations",
    story: [
      "Airport operations change minute to minute. Our legacy software couldn't keep up across multiple locations, and every gap turned into a manual workaround.",
      "The Imagina team built a unified web and mobile platform for flight organization, ramp services and security workflows — and iterated with our operators, not around them.",
    ],
    results: [
      "~40% estimated reduction in manual errors",
      "~30% faster response times",
      "Platform designed to scale to new airports",
    ],
  },
  {
    slug: "salesforce-engineering-capacity",
    name: "Daniel Okafor",
    role: "Engineering Manager",
    company: "Enterprise Salesforce platform",
    image: person3,
    quote:
      "We added senior Salesforce engineers in weeks, in our time zone, without changing how our team works.",
    context: "Enterprise Salesforce",
    story: [
      "Our roadmap needed specialized Salesforce capacity fast, and hiring locally would have taken months we didn't have.",
      "Imagina's engineers joined our existing rituals, took ownership of integrations and extensions, and delivered against the same standards as our internal team.",
    ],
    results: [
      "Senior engineers onboarded in weeks",
      "Full U.S. time-zone overlap",
      "Ongoing capacity that scales with the roadmap",
    ],
  },
];

export const getTestimonial = (slug: string) =>
  testimonials.find((t) => t.slug === slug);
