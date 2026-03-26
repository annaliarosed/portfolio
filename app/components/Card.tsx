import styles from "./Card.module.scss";

const Card = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <section
      data-reveal
      className={[
        "scrollchapters-reveal",
        styles.card,
        className ?? "",
      ].join(" ")}
    >
      {children}
    </section>
  );
};

export default Card;