import styles from "./Heading.module.scss";

interface HeadingProps {
  children: React.ReactNode;
}

export function Heading({ children }: HeadingProps) {
  return (
    <div className={styles.heading}>
      <div className={styles.content}>{children}</div>
    </div>
  );
}
