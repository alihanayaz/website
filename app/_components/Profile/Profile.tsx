import styles from "./Profile.module.scss";
import Icon from "@/_components/Icon";

export function Profile() {
  return (
    <div className={styles.wrapper}>
        <h1>Alihan Ayaz</h1>
        <h2>Software Developer</h2>
        <div className={styles.location}>
          <Icon name="Earth" size="small" />
          <span>Istanbul, Turkey</span>
        </div>
    </div>
  );
}
