import { profile } from "@/app/lib/profile";
import Card from "@/app/components/Card";
import styles from "./page.module.scss";

export const metadata = {
  title: "Experience | Annalia DeStefano",
  description: "Frontend engineering experience and impact highlights.",
};

export default function ExperiencePage() {
  return (
    <main className={styles.main}>
      <Card className={`${styles.headerCard} p-10`}>
        <header>
          <p className={styles.kicker}>Experience</p>
          <h1 className={`k-title ${styles.title}`}>
            Work I’ve shipped product environments.
          </h1>
          <p className={styles.lede}>
            A timeline showing my work in product environments.
          </p>

          <div className={styles.actions}>

            <a
              href={`mailto:${profile.email}`}
              className={[styles.pillLink, styles.email].join(" ")}
            >
              Email
            </a>
          </div>
        </header>
      </Card>

      <section>
        <ol className={styles.list}>
          {profile.experience.map((job) => (
            <li key={`${job.company}-${job.start}`}>
              <Card className="p-10">
                <div className={styles.jobGrid}>
                  <div>
                    <p className={styles.company}>{job.company}</p>
                    <p className={styles.role}>{job.role}</p>
                    <p className={styles.dates}>
                      {job.start} – {job.end}
                    </p>
                  </div>

                  <div>
                    <ul className={styles.bullets}>
                      {job.bullets.map((b, bIdx) => (
                        <li key={bIdx} className={styles.bullet}>
                          <span aria-hidden="true" className={styles.dot} />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            </li>
          ))}
        </ol>
      </section>
    </main>
  );
}

