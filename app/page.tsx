import type { ReactNode } from "react";
import InteractiveSkills from "@/app/components/InteractiveSkills";
import Link from "next/link";
import { profile } from "@/app/lib/profile";
import Card from "@/app/components/Card";
import styles from "./page.module.scss";

function ExternalLink({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  const isExternal = href.startsWith("http://") || href.startsWith("https://");
  return (
    <a
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noreferrer" : undefined}
      className={styles.primaryLink}
    >
      {children}
      {isExternal ? (
        <span aria-hidden="true" className={styles.externalMark}>
          ↗
        </span>
      ) : null}
    </a>
  );
}

export default function Home() {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <header className={styles.header}>
          <Card className="p-10">
            <div className={styles.headerGrid}>
                <h1 className={styles.lede}>
                  I’m{" "}
                  <span className={styles.bold}>{profile.name}</span>, a{" "}
                  <span className={styles.bold}>{profile.title}</span> based in{" "}
                  <span className={styles.bold}>{profile.location}</span>.
                </h1>

                <p className={styles.summary}>
                  {profile.summary}
                </p>


            </div>
          </Card>

          <div className={styles.actionsRow}>
            <div className={styles.actions}>
              <ExternalLink href={`mailto:${profile.email}`}>Email</ExternalLink>
              <ExternalLink href={profile.linkedin}>LinkedIn</ExternalLink>
              <Link
                href="/experience"
                className={[styles.primaryLink, styles.experienceLink].join(" ")}
              >
                Experience page
              </Link>
            </div>
          </div>
        </header>

        <main className={styles.main}>
          <section aria-labelledby="about-title" id="about" data-chapter>
            <Card className="p-10">
              
              <div className={styles.sectionGrid}>
                <div>
                  <h2
                    id="about-title"
                    className={`k-title ${styles.sectionTitle}`}
                  >
                    What I optimize for
                  </h2>
                  <p className={styles.sectionLead}>
                    Clarity, kindness, and measurable outcomes.
                  </p>
                </div>

                <div className={styles.bullets}>
                  <div className={styles.bulletRow}>
                    <span aria-hidden="true" className={styles.bulletDot} />
                    <div>
                      <p className={styles.bulletTitle}>
                        Accessibility that survives complexity
                      </p>
                      <p className={styles.bulletText}>
                        I treat WCAG/ADA as product requirements: testing, component patterns, and clear UX for regulated workflows.
                      </p>
                    </div>
                  </div>

                  <div className={styles.bulletRow}>
                    <span aria-hidden="true" className={styles.bulletDotAlt} />
                    <div>
                      <p className={styles.bulletTitle}>
                        Design systems as leverage
                      </p>
                      <p className={styles.bulletText}>
                        Shared libraries, better defaults, and documentation that help teams ship faster—without losing quality.
                      </p>
                    </div>
                  </div>

                  <div className={styles.bulletRow}>
                    <span aria-hidden="true" className={styles.bulletDotInk} />
                    <div>
                      <p className={styles.bulletTitle}>
                        Performance you can measure
                      </p>
                      <p className={styles.bulletText}>
                        I focus on real user outcomes: accessibility impact, production errors, and measurable UI improvements.
                      </p>
                    </div>
                  </div>

                  <div className={styles.bulletRow}>
                    <span aria-hidden="true" className={styles.bulletDotWash} />
                    <div>
                      <p className={styles.bulletTitle}>
                        Compliance-ready UI changes
                      </p>
                      <p className={styles.bulletText}>
                        When regulators ask, I translate requirements into maintainable frontend work and test it like a product.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </section>

          <section aria-labelledby="skills-title" id="skills" data-chapter>
            <Card className="p-10">
              <div className={styles.sectionGrid}>
                <div>
                  <h2
                    id="skills-title"
                    className={`k-title ${styles.sectionTitle}`}
                  >
                    Skills
                  </h2>
                  <p className={styles.sectionLead}>
                    Pick a focus—watch how the toolkit changes.
                  </p>
                </div>
                <div>
                  <InteractiveSkills />
                </div>
              </div>
            </Card>
          </section>

          <section aria-labelledby="projects-title" id="projects" data-chapter>
            <Card className="p-10">
              <div className={styles.sectionGrid}>
                <div>
                  <h2
                    id="projects-title"
                    className={`k-title ${styles.sectionTitle}`}
                  >
                    Projects & notes
                  </h2>
                  <p className={styles.sectionLead}>
                    Two standout pieces—from open source to multimodal experiments.
                  </p>
                </div>

                <div className={styles.projectsList}>
                  {profile.projects.map((p) => (
                    <article
                      key={p.title}
                      className={styles.projectCard}
                    >
                      <div className={styles.projectRow}>
                        <div>
                          <h3 className={styles.projectTitle}>
                            {p.title}
                          </h3>
                          <p className={styles.projectText}>
                            {p.description}
                          </p>
                        </div>
                        <div className="shrink-0">
                          <ExternalLink href={p.href}>{p.linkLabel}</ExternalLink>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </Card>
          </section>

          <section aria-labelledby="contact-title" id="contact" data-chapter>
            <Card className="p-10">
              <div className={styles.sectionGrid}>
                <div>
                  <h2
                    id="contact-title"
                    className={`k-title ${styles.sectionTitle}`}
                  >
                    Get in touch
                  </h2>
              
                </div>

                <div className={styles.projectCard}>
                  
                  <div className={styles.actions} style={{ marginTop: 24 }}>
                    <ExternalLink href={`mailto:${profile.email}`}>Email</ExternalLink>
                    <ExternalLink href={profile.linkedin}>LinkedIn</ExternalLink>
                    <ExternalLink href={profile.github}>GitHub</ExternalLink>
                  </div>
                </div>
              </div>
            </Card>
          </section>
        </main>

       
      </div>
    </div>
  );
}
