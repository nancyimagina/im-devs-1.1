export type CaseStudy = {
  slug: string;
  name: string;
  title: string;
  category: string;
  summary: string;
  relationship?: string;
  challenge: string;
  solution: string;
  outcomes: string[];
  proof: { value: string; label: string }[];
  imagePrompt: string;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "renuity",
    name: "Renuity",
    title: "Renuity — optimizing field operations",
    category: "Home Services & Field Operations",
    summary: "Route optimization and mobile technology for field teams.",
    relationship: "8+ years of collaboration",
    challenge:
      "Legacy systems and an outdated mobile experience were making scheduling, time tracking and field operations harder to manage.",
    solution:
      "Imagina worked as an extension of Renuity's team to develop technology for route optimization and field installation operations, including a custom mobile application.",
    outcomes: [
      "Real-time schedule visibility",
      "More efficient field operations",
      "Improved time tracking",
      "Better customer information at the point of service",
      "Scalable technology for continued growth",
    ],
    proof: [
      { value: "~20%", label: "Productivity increase in the first quarter after launch" },
      { value: "95%+", label: "On-time project completion, up from around 85%" },
      { value: "8+", label: "Years of continuous collaboration" },
    ],
    imagePrompt: "renuity",
  },
  {
    slug: "agione",
    name: "AgiOne",
    title: "AgiOne — modernizing airport operations",
    category: "Logistics & Mission-Critical Operations",
    summary: "A unified platform for complex airport operations.",
    challenge:
      "Legacy software and fragmented processes made it difficult to manage continuously changing airport operations across multiple locations.",
    solution:
      "Imagina developed a unified web and mobile operational platform covering flight organization, ramp services and security-related workflows.",
    outcomes: [
      "Fewer manual errors",
      "Faster response times",
      "Better operational coordination",
      "Improved safety and visibility",
      "Platform designed to scale with additional airports and volume",
    ],
    proof: [
      { value: "40%", label: "Estimated reduction in manual errors" },
      { value: "30%", label: "Estimated reduction in response times" },
      { value: "~20%", label: "Faster completion of key processes" },
    ],
    imagePrompt: "agione",
  },
];

export const getCaseStudy = (slug: string) =>
  caseStudies.find((c) => c.slug === slug);
