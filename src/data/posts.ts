export type Post = {
  slug: string;
  title: string;
  topic: string;
  readingTime: string;
  excerpt: string;
  body: { heading?: string; paragraphs: string[]; bullets?: string[] }[];
};

export const posts: Post[] = [
  {
    slug: "building-and-scaling-engineering-teams",
    title: "Building and scaling engineering teams",
    topic: "Engineering teams",
    readingTime: "4 min read",
    excerpt:
      "Capacity is rarely the only constraint. How teams grow decides whether new engineers add speed or add coordination cost.",
    body: [
      {
        paragraphs: [
          "Most engineering teams do not slow down because they lack people. They slow down because context lives in a few heads, ownership is unclear, and every new contributor needs weeks before their work is trusted in production.",
          "Scaling well means designing for that reality: clear ownership boundaries, documented decisions, and a delivery rhythm that a new engineer can join without renegotiating how the team works.",
        ],
      },
      {
        heading: "What tends to work",
        paragraphs: [],
        bullets: [
          "Add engineers to an existing rhythm rather than creating a parallel team",
          "Give every new contributor an owned surface within the first weeks",
          "Keep review, deployment and on-call practices unchanged as the team grows",
          "Measure delivery, not headcount",
        ],
      },
      {
        heading: "Growth as a long-term decision",
        paragraphs: [
          "The teams that scale best treat added capacity as a long-term relationship rather than a short-term fix. Continuity keeps context, and context is what turns capacity into velocity.",
        ],
      },
    ],
  },
  {
    slug: "staff-augmentation-and-distributed-teams",
    title: "Staff augmentation and distributed teams",
    topic: "Staff augmentation",
    readingTime: "3 min read",
    excerpt:
      "Augmentation works when engineers integrate into your team, not when they operate as an external unit.",
    body: [
      {
        paragraphs: [
          "Staff augmentation is often described as a resourcing decision. In practice it is an integration decision. The difference between capacity that helps and capacity that fragments delivery is whether the engineers work inside your team's process.",
          "That means your backlog, your reviews, your standards and your definition of done — not a separate workflow that has to be reconciled later.",
        ],
      },
      {
        heading: "Time zone alignment matters",
        paragraphs: [
          "Distributed work is normal. Asynchronous-only work is not. Overlapping hours let questions get resolved in minutes instead of days, which is usually where distributed delivery is won or lost.",
        ],
      },
      {
        heading: "Signals of a healthy setup",
        paragraphs: [],
        bullets: [
          "Shared tooling and repositories from day one",
          "Direct communication with product and engineering leads",
          "Same review and quality bar as internal engineers",
          "Stable people over rotating profiles",
        ],
      },
    ],
  },
  {
    slug: "modernizing-legacy-software",
    title: "Modernizing legacy software without stopping operations",
    topic: "Legacy modernization",
    readingTime: "4 min read",
    excerpt:
      "Legacy systems usually run the business. Modernization has to happen alongside operations, not instead of them.",
    body: [
      {
        paragraphs: [
          "In operational businesses, the legacy system is rarely optional. It schedules the work, tracks the field team, or coordinates the site. A rewrite that pauses operations is not a viable plan.",
          "The practical path is incremental: isolate the workflows that create the most friction, rebuild them behind clear interfaces, and move traffic gradually while the existing system keeps running.",
        ],
      },
      {
        heading: "Start where the friction is visible",
        paragraphs: [
          "Scheduling, dispatch, time tracking and mobile access are usually where users feel the age of a system first. Improving those surfaces delivers value early and funds the rest of the work with credibility.",
        ],
      },
      {
        heading: "Keep integrations honest",
        paragraphs: [
          "Most modernization risk sits in the seams: APIs, data ownership and multi-site behavior. Defining those contracts early keeps the migration reversible at every step.",
        ],
      },
    ],
  },
  {
    slug: "salesforce-engineering-capacity",
    title: "When Salesforce needs engineering, not configuration",
    topic: "Salesforce engineering",
    readingTime: "3 min read",
    excerpt:
      "Platform teams reach a point where Apex, Lightning Web Components and integrations require dedicated engineering capacity.",
    body: [
      {
        paragraphs: [
          "Salesforce is configurable until the moment it becomes a platform. Once business-critical workflows depend on custom logic, integrations and data flowing across systems, the work becomes software engineering with the same expectations as any other codebase.",
          "That shift is where many teams get stuck: administrators are at capacity, and general developers lack platform depth.",
        ],
      },
      {
        heading: "Where specialized capacity pays off",
        paragraphs: [],
        bullets: [
          "Apex development and refactoring",
          "Lightning Web Components for real product surfaces",
          "Integrations with operational and external systems",
          "Enterprise platform development and maintenance",
        ],
      },
      {
        heading: "Treat it like product engineering",
        paragraphs: [
          "Version control, review, testing and release discipline apply to the platform as much as to the rest of the stack. Teams that adopt that stance early avoid the slow accumulation of unmaintainable custom logic.",
        ],
      },
    ],
  },
  {
    slug: "technology-for-complex-operations",
    title: "Technology for complex operations",
    topic: "Complex operations",
    readingTime: "3 min read",
    excerpt:
      "Coordination, visibility and responsiveness are the requirements that matter when operations cannot pause.",
    body: [
      {
        paragraphs: [
          "Operational software is judged differently from most business tools. It is used under time pressure, in the field or on the floor, often by people who cannot stop to interpret an interface.",
          "That places the emphasis on three things: coordination across teams, visibility into what is happening now, and the ability to respond when conditions change.",
        ],
      },
      {
        heading: "Design for the worst moment",
        paragraphs: [
          "The right benchmark is not the ideal day. It is the delayed schedule, the multi-site incident, the shift where information is incomplete. Systems that hold up there earn adoption everywhere else.",
        ],
      },
      {
        heading: "Real-time is a product decision",
        paragraphs: [
          "Real-time information is expensive to build everywhere and essential in a few places. Choosing those places deliberately keeps the platform both reliable and maintainable as it scales to more sites and volume.",
        ],
      },
    ],
  },
];

export const getPost = (slug: string) => posts.find((p) => p.slug === slug);
