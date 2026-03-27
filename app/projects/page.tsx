import Image from "next/image";
import styles from "./page.module.scss";

import ddn1 from "@/app/images/DDN_1.png";
import ddn2 from "@/app/images/DDN_2.png";
import ddn3 from "@/app/images/DDN_3.png";
import source1 from "@/app/images/source.plus screenshot 1.png";
import source2 from "@/app/images/source.plus screenshot 2.png";
import source3 from "@/app/images/source.plus screenshot 3.png";
import Link from "next/link";

export const metadata = {
    title: "Projects | Annalia DeStefano",
    description: "Frontend case study: Source.Plus project details and outcomes.",
};

type SectionProps = {
    id: string;
    title: string;
    children: React.ReactNode;
};

function Section({ id, title, children }: SectionProps) {
    return (
        <section id={id} className={styles.section} aria-labelledby={`${id}-title`}>
            <h2 id={`${id}-title`} className={styles.sectionTitle}>
                {title}
            </h2>
            <div className={styles.sectionBody}>{children}</div>
        </section>
    );
}

export default function ProjectsPage() {
    const tags = [
        "React",
        "Next.js",
        "TypeScript",
        "Redux Toolkit",
        "Elasticsearch",
        "Amazon Cognito",
        "Jest",
        "Testing Library",
        "Mixpanel",
        "Sentry",
    ];

    const contributions = [
        "Built the frontend from the ground up as the sole frontend engineer.",
        "Designed a modular component architecture that balanced MUI with custom design-system components.",
        "Implemented critical user flows including search, authentication, and form-heavy workflows.",
        "Integrated Elasticsearch UI, auth/session management, analytics, and monitoring.",
        "Collaborated closely with backend and product to shape performant, shippable UX.",
    ];

    const features = [
        {
            title: "Dataset Search & Filtering",
            body: "Fast, faceted search experience backed by ElasticSearch with query behavior tuned for discoverability and precision.",
        },
        {
            title: "Authentication & Session Flows",
            body: "Secure login/session flows via Amazon Cognito, including clear user feedback for auth edge cases.",
        },
        {
            title: "Curation Workflow UI",
            body: "Structured, form-driven interfaces for building and managing curated AI training datasets.",
        },
        {
            title: "Observability & Product Insights",
            body: "Sentry for operational visibility and Mixpanel events for product decision-making.",
        },
    ];

    const dundeeTags = [
        "React",
        "TypeScript",
        "Node.js",
        "Full-stack",
        "Community Product",
    ];

    const dundeeContributions = [
        "Built a full-stack news platform concept for East Dundee residents.",
        "Implemented frontend flows for browsing, reading, and organizing local content.",
        "Worked from a custom visual direction provided by a dedicated graphic designer.",
        "Designed the frontend structure to support future editorial workflows and scaling.",
        "Prepared the product for community use, despite the launch being paused.",
    ];

    const dundeeFeatures = [
        {
            title: "Local-News Focused UX",
            body: "Information architecture designed for residents who need fast access to practical community updates.",
        },
        {
            title: "Editorial-Ready Layout",
            body: "Structure intended to support recurring content publishing and easy article maintenance.",
        },
        {
            title: "Brand-Led Interface",
            body: "Frontend implementation aligned to bespoke branding and visual direction from a professional designer.",
        },
    ];

    return (
        <main className={styles.main}>

            <article className={styles.container}>
                <nav className={styles.projectNav}>
                    <Link href="#source-plus" className={styles.projectNavLink}>Source.Plus</Link>
                    <Link href="#dundee-daily-news" className={styles.projectNavLink}>Dundee Daily News</Link>
                </nav>
                <header className={styles.hero} aria-labelledby="project-title" id="source-plus">
                    <p className={styles.kicker}>Case Study</p>
                    <h1 id="project-title" className={`k-title ${styles.title}`}>
                        Source.Plus
                    </h1>
                    <p className={styles.subtitle}>
                        Platform for curating and licensing AI training datasets with a search-first user experience.
                    </p>

                    <div className={styles.metaRow}>
                        <div>
                            <span className={styles.metaLabel}>Role</span>
                            <p className={styles.metaValue}>Sole Frontend Engineer</p>
                        </div>
                        <div className={styles.linkGroup}>
                            <a
                                href="https://github.com/Spawning-Inc/source-plus-frontend"
                                target="_blank"
                                rel="noreferrer"
                                className={styles.topLink}
                            >
                                GitHub
                            </a>

                        </div>
                    </div>

                    <ul className={styles.tagList} aria-label="Tech tags">
                        {tags.map((tag) => (
                            <li key={tag} className={styles.tag}>
                                {tag}
                            </li>
                        ))}
                    </ul>
                </header>

                <Section id="preview" title="Visual Preview">
                    <div className={styles.previewGrid}>
                        <figure className={styles.mediaCard}>
                            <div className={styles.mediaFrame}>
                                <Image
                                    src={source1}
                                    alt="Source.Plus UI screenshot (1)"
                                    className={styles.mediaImage}
                                    sizes="(min-width: 768px) 33vw, 100vw"
                                    priority
                                />
                            </div>
                        </figure>
                        <figure className={styles.mediaCard}>
                            <div className={styles.mediaFrame}>
                                <Image
                                    src={source2}
                                    alt="Source.Plus UI screenshot (2)"
                                    className={styles.mediaImage}
                                    sizes="(min-width: 768px) 33vw, 100vw"
                                />
                            </div>

                        </figure>
                        <figure className={styles.mediaCard}>
                            <div className={styles.mediaFrame}>
                                <Image
                                    src={source3}
                                    alt="Source.Plus UI screenshot (3)"
                                    className={styles.mediaImage}
                                    sizes="(min-width: 768px) 33vw, 100vw"
                                />
                            </div>

                        </figure>
                    </div>
                </Section>

                <Section id="overview" title="Overview">
                    <p className={styles.paragraph}>
                        Source.Plus is a platform for teams curating and licensing AI training datasets. It is built for users
                        who need strong discoverability, clear workflows, and predictable performance across data-heavy interfaces.
                        The product solves a practical problem: making dataset discovery and curation usable at scale without
                        sacrificing speed or UI clarity.
                    </p>
                </Section>

                <Section id="contributions" title="My Role & Contributions">
                    <ul className={styles.bulletList}>
                        {contributions.map((item) => (
                            <li key={item} className={styles.bulletItem}>
                                {item}
                            </li>
                        ))}
                    </ul>
                </Section>

                <Section id="stack" title="Tech Stack">
                    <ul className={styles.stackGrid}>
                        {tags.map((item) => (
                            <li key={item} className={styles.stackItem}>
                                {item}
                            </li>
                        ))}
                    </ul>
                </Section>

                <Section id="features" title="Key Features">
                    <div className={styles.featureGrid}>
                        {features.map((feature) => (
                            <article key={feature.title} className={styles.featureCard}>
                                <h3 className={styles.featureTitle}>{feature.title}</h3>
                                <p className={styles.featureText}>{feature.body}</p>
                            </article>
                        ))}
                    </div>
                </Section>

                <Section id="architecture" title="Architecture / Technical Details">
                    <div className={styles.detailGrid}>
                        <div className={styles.detailCard}>
                            <h3 className={styles.detailTitle}>Rendering strategy</h3>
                            <p className={styles.detailText}>
                                Mixed SSR, SSG, and client-side interactions in Next.js for fast initial load while preserving rich
                                interactive behavior.
                            </p>
                        </div>
                        <div className={styles.detailCard}>
                            <h3 className={styles.detailTitle}>State & data flow</h3>
                            <p className={styles.detailText}>
                                Redux Toolkit + Redux Persist for predictable global state and persisted session-sensitive UI state.
                            </p>
                        </div>
                        <div className={styles.detailCard}>
                            <h3 className={styles.detailTitle}>Search integration</h3>
                            <p className={styles.detailText}>
                                ElasticSearch integration through Search UI tooling and query builders to support advanced filtering and relevance.
                            </p>
                        </div>
                        <div className={styles.detailCard}>
                            <h3 className={styles.detailTitle}>Performance & reliability</h3>
                            <p className={styles.detailText}>
                                Feature-level monitoring with Sentry, behavioral analytics with Mixpanel, and robust testing with Jest + Testing Library.
                            </p>
                        </div>
                    </div>
                </Section>

                <Section id="outcome" title="Outcome / Reflection">
                    <p className={styles.paragraph}>
                        The project was shut down due to funding constraints, and the frontend codebase was open-sourced. The key
                        outcome for me was proving end-to-end frontend ownership: architecture, UX execution, and operational quality
                        in one product. It sharpened how I design systems that stay maintainable while handling real-world complexity.
                    </p>
                </Section>

                <Section id="future" title="Improvements / Future Work">
                    <ul className={styles.bulletList}>
                        <li className={styles.bulletItem}>Expand accessibility audits for complex filter/search flows and edge-case keyboard navigation.</li>
                        <li className={styles.bulletItem}>Optimize bundle and interaction performance in data-heavy screens through deeper code splitting.</li>
                        <li className={styles.bulletItem}>Evolve the design system with stronger tokens, docs, and visual regression coverage.</li>
                    </ul>
                </Section>

                <header className={`${styles.hero} ${styles.caseStudySpacer}`} aria-labelledby="dundee-title" id="dundee-daily-news">
                    <p className={styles.kicker}>Case Study</p>
                    <h1 id="dundee-title" className={`k-title ${styles.title}`}>
                        Dundee Daily News
                    </h1>
                    <p className={styles.subtitle}>
                        A community-focused local news product concept for East Dundee, IL.
                    </p>

                    <div className={styles.metaRow}>
                        <div>
                            <span className={styles.metaLabel}>Role</span>
                            <p className={styles.metaValue}>Frontend + Full-stack Product Builder</p>
                        </div>
                        <div className={styles.linkGroup}>
                            <a
                                href="https://github.com/annaliarosed/Dundee-daily-news"
                                target="_blank"
                                rel="noreferrer"
                                className={styles.topLink}
                            >
                                GitHub
                            </a>

                        </div>
                    </div>

                    <ul className={styles.tagList} aria-label="Dundee tech tags">
                        {dundeeTags.map((tag) => (
                            <li key={tag} className={styles.tag}>
                                {tag}
                            </li>
                        ))}
                    </ul>
                </header>

                <Section id="dundee-preview" title="Visual Preview">
                    <div className={styles.previewGrid}>
                        <figure className={styles.mediaCard}>
                            <div className={styles.mediaFrame}>
                                <Image
                                    src={ddn1}
                                    alt="Dundee Daily News UI screenshot (1)"
                                    className={styles.mediaImage}
                                    sizes="(min-width: 768px) 33vw, 100vw"
                                />
                            </div>
                        </figure>
                        <figure className={styles.mediaCard}>
                            <div className={styles.mediaFrame}>
                                <Image
                                    src={ddn2}
                                    alt="Dundee Daily News UI screenshot (2)"
                                    className={styles.mediaImage}
                                    sizes="(min-width: 768px) 33vw, 100vw"
                                />
                            </div>
                        </figure>
                        <figure className={styles.mediaCard}>
                            <div className={styles.mediaFrame}>
                                <Image
                                    src={ddn3}
                                    alt="Dundee Daily News UI screenshot (3)"
                                    className={styles.mediaImage}
                                    sizes="(min-width: 768px) 33vw, 100vw"
                                />
                            </div>
                        </figure>
                    </div>
                </Section>

                <Section id="dundee-overview" title="Overview">
                    <p className={styles.paragraph}>
                        Dundee Daily News was built for residents of East Dundee, IL to have a local-first source of community
                        updates. The concept focused on accessibility and readability for everyday users, with a structure that
                        could support recurring publishing. While the product wasn’t ultimately released, it was built as a
                        complete full-stack application and validated the core UX direction.
                    </p>
                </Section>

                <Section id="dundee-contributions" title="My Role & Contributions">
                    <ul className={styles.bulletList}>
                        {dundeeContributions.map((item) => (
                            <li key={item} className={styles.bulletItem}>
                                {item}
                            </li>
                        ))}
                    </ul>
                </Section>

                <Section id="dundee-stack" title="Tech Stack">
                    <ul className={styles.stackGrid}>
                        {dundeeTags.map((item) => (
                            <li key={item} className={styles.stackItem}>
                                {item}
                            </li>
                        ))}
                    </ul>
                </Section>

                <Section id="dundee-features" title="Key Features">
                    <div className={styles.featureGrid}>
                        {dundeeFeatures.map((feature) => (
                            <article key={feature.title} className={styles.featureCard}>
                                <h3 className={styles.featureTitle}>{feature.title}</h3>
                                <p className={styles.featureText}>{feature.body}</p>
                            </article>
                        ))}
                    </div>
                </Section>

                <Section id="dundee-architecture" title="Architecture / Technical Details">
                    <div className={styles.detailGrid}>
                        <div className={styles.detailCard}>
                            <h3 className={styles.detailTitle}>Full-stack scope</h3>
                            <p className={styles.detailText}>
                                Implemented as a full-stack app, allowing product decisions to span UI, data flow, and deployment constraints.
                            </p>
                        </div>
                        <div className={styles.detailCard}>
                            <h3 className={styles.detailTitle}>Content-first frontend</h3>
                            <p className={styles.detailText}>
                                Prioritized legibility, scannability, and low-friction article consumption for local-news use cases.
                            </p>
                        </div>
                        <div className={styles.detailCard}>
                            <h3 className={styles.detailTitle}>Design collaboration</h3>
                            <p className={styles.detailText}>
                                Translated custom visual direction from a graphic designer into maintainable, responsive frontend implementation.
                            </p>
                        </div>
                        <div className={styles.detailCard}>
                            <h3 className={styles.detailTitle}>Launch-readiness</h3>
                            <p className={styles.detailText}>
                                Built with practical launch intent, though final stakeholder decision paused release.
                            </p>
                        </div>
                    </div>
                </Section>

                <Section id="dundee-outcome" title="Outcome / Reflection">
                    <p className={styles.paragraph}>
                        The project was not released after strategic decisions shifted, but it delivered strong learning around
                        building civic/community products: keeping interfaces clear for broad audiences, collaborating with design
                        stakeholders, and shipping pragmatically even when product direction changes.
                    </p>
                </Section>

                <Section id="dundee-future" title="Improvements / Future Work">
                    <ul className={styles.bulletList}>
                        <li className={styles.bulletItem}>Introduce stronger editorial tooling for recurring content operations.</li>
                        <li className={styles.bulletItem}>Expand accessibility checks for long-form reading and keyboard-only navigation.</li>
                        <li className={styles.bulletItem}>Add performance budgets and image optimization for media-heavy stories.</li>
                    </ul>
                </Section>
            </article>
        </main>
    );
}

