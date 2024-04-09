import styles from "./Error.module.scss";

export function Error() {
  return (
    <div className={styles.errorWrapper}>
      <h1>Not Found</h1>
      <span>This page doesn&apos;t exist or is unavailable</span>
    </div>
  );
}
