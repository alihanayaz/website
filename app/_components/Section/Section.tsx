import styles from "./Section.module.scss";

interface SectionProps {
  children: React.ReactNode;
}

export function Section({ children }: SectionProps) {
  return (
    <div className={styles.section}>
      <div className={styles.content}>{children}</div>
    </div>
  );
}
