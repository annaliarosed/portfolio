export const profile = {
  name: "Annalia DeStefano",
  title: "Frontend Engineer (React, TypeScript)",
  location: "Tallinn, Estonia | Remote",
  email: "annaliadestefano@gmail.com",
  linkedin: "https://linkedin.com/in/annaliadestefano/",
  github: "https://github.com/annaliarosed",
  summary:
    "Senior Frontend Engineer with ~6 years of experience building accessible, high-quality React and TypeScript interfaces for SaaS and AI-driven products. Strong frontend ownership across design systems, UX improvements, accessibility, testing, and performance in complex, regulated environments.",
  experience: [
    {
      company: "Wise",
      role: "Frontend Engineer",
      start: "Aug 2025",
      end: "Present",
      bullets: [
        "Led frontend implementation of analytics (Mixpanel) across internal tools, partnering with product stakeholders to define meaningful events.",
        "Designed and built AI-assisted frontend workflows for financial crime operations.",
        "Implemented frontend changes to meet requirements from major regulators, ensuring compliance across critical workflows.",
        "Shipped UX improvements that reduced agent handling time by 24%.",
        "Owned accessibility improvements, user research initiatives, and a shared design library, collaborating closely with product and design teams.",
      ],
    },
    {
      company: "Spawning",
      role: "Frontend Engineer",
      start: "Mar 2023",
      end: "Mar 2025",
      bullets: [
        "Owned frontend development across multiple AI-related products and internal tools.",
        "Built and redesigned “Have I Been Trained?”, improving accessibility by 53% and performance by 26%.",
        "Reduced frontend production errors by 17% through improved testing practices.",
        "Maintained a shared component library, increasing development speed by 23%.",
      ],
    },
    {
      company: "SpotHero",
      role: "Frontend Engineer",
      start: "Mar 2022",
      end: "Mar 2023",
      bullets: [
        "Built frontend features across multiple SaaS product verticals.",
        "Contributed to a V2 design system rollout, including component development and documentation.",
      ],
    },
    {
      company: "Spiff",
      role: "Frontend Engineer",
      start: "Sep 2021",
      end: "Mar 2022",
      bullets: [
        "Led frontend work on customer-facing features.",
        "Supported migration to TypeScript and GraphQL.",
        "Improved ADA AA accessibility compliance by ~10%.",
      ],
    },
    {
      company: "Veriff",
      role: "Frontend Engineer",
      start: "Jun 2019",
      end: "Sep 2021",
      bullets: [
        "Built internal tools for document verification, QA, and customer support.",
        "Strengthened and documented a shared design system.",
        "Shipped accessibility improvements and frontend GraphQL integrations.",
      ],
    },
  ],
  projects: [
    {
      title: "Source Plus (open source frontend)",
      description:
        "Source.Plus was a platform for curating and licensing AI training datasets. As the sole Frontend Engineer, I led the development of the frontend from the ground up.",
      linkLabel: "GitHub repo",
      href: "https://github.com/Spawning-Inc/source-plus-frontend",
    },
    {
      title: "Soundbraid (multimodal interface)",
      description:
        "Sound braid is an exploration of collaborative listening and sonic conversations. A mutable platform subject to change and revision, the sound braid website invites sounds that move, simmer, or ignite discussions.",
      linkLabel: "soundbraid.org",
      href: "http://soundbraid.org/",
    },
  ],
};

export type Profile = typeof profile;

