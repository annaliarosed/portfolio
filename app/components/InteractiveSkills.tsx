"use client";

import { useMemo, useState } from "react";
import styles from "./InteractiveSkills.module.scss";

type SkillCategory = {
  id: string;
  label: string;
  items: string[];
  note: string;
};

const CATEGORIES: SkillCategory[] = [
  {
    id: "core",
    label: "Core",
    items: ["React", "TypeScript", "JavaScript", "HTML", "CSS"],
    note: "The foundation I rely on for readable, maintainable UI in production.",
  },
  {
    id: "accessibility",
    label: "Accessibility (WCAG/ADA)",
    items: ["Semantic UI", "Keyboard and screen reader support", "Contrast & focus states", "Inclusive UX patterns"],
    note: "I treat accessibility as a product constraint, not a polish pass.",
  },
  {
    id: "design-systems",
    label: "Design Systems",
    items: ["Component architecture", "Shared libraries", "Documentation patterns", "Design-system rollout support"],
    note: "Design systems are leverage: better defaults, faster shipping, fewer regressions.",
  },
  {
    id: "testing",
    label: "Testing & Reliability",
    items: ["Jest", "React Testing Library", "Regression-focused UI testing", "Reducing production errors"],
    note: "I use tests to protect UX and keep complex UI changes safe.",
  },
  {
    id: "performance",
    label: "Performance",
    items: ["Measuring impact", "Optimizing critical paths", "Reducing agent/user handling time", "Performance + accessibility together"],
    note: "Performance isn’t “faster pixels”—it’s measurable user outcomes.",
  },
  {
    id: "state-data",
    label: "State & Data",
    items: ["Redux", "Apollo Client", "GraphQL integrations", "Complex UI data flows"],
    note: "I ship robust data-driven interfaces in complex product environments.",
  },
  {
    id: "tools",
    label: "Tools",
    items: ["Storybook", "Figma", "GitHub", "Jira"],
    note: "Workflow and tooling that make teams consistent and productive.",
  },
  {
    id: "analytics",
    label: "Analytics & Monitoring",
    items: ["Mixpanel", "Sentry", "Event design", "UX impact loops"],
    note: "I define meaningful events and close the loop from insight to UX improvements.",
  },
];

export default function InteractiveSkills() {
  const [activeId, setActiveId] = useState<string>("accessibility");

  const activeCategory = useMemo(
    () => CATEGORIES.find((c) => c.id === activeId) ?? CATEGORIES[0],
    [activeId]
  );

  const chipOrder = useMemo(() => {
    const accessibility = CATEGORIES.find((c) => c.id === "accessibility");
    const rest = CATEGORIES.filter((c) => c.id !== "accessibility");
    return accessibility ? [accessibility, ...rest] : CATEGORIES;
  }, []);

  return (
    <div className={styles.root}>
      <div className={styles.side}>
        <p className={styles.sideTitle}>Skill focus</p>

        <div className={styles.tabs}>
          {chipOrder.map((c) => {
            const isActive = c.id === activeId;
            return (
              <button
                key={c.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveId(c.id)}
                className={[
                  styles.tabButton,
                  isActive ? styles.tabActive : "",
                ].join(" ")}
              >
                <span className={styles.tabRow}>
                  <span
                    aria-hidden="true"
                    className={[
                      styles.dot,
                      isActive ? styles.dotActive : "",
                    ].join(" ")}
                  />
                  {c.label}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      <div className={styles.panel}>
        <div className={styles.panelHeader}>
          <div>
            <h3 className={styles.panelTitle}>{activeCategory.label}</h3>
            <p className={styles.panelNote}>{activeCategory.note}</p>
          </div>
          <p className={styles.panelMeta}>
            Applied in product work
          </p>
        </div>

        <div className={styles.chips}>
          {activeCategory.items.map((item) => (
            <span
              key={item}
              className={styles.chip}
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

