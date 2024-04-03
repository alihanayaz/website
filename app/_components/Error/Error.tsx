import styles from "./Error.module.scss";

export function Error() {
  return (
    <div className={styles.errorWrapper}>
      <h2>Not Found</h2>
      <span>This page doesn&apos;t exist or is unavailable</span>
    </div>
  );
}
