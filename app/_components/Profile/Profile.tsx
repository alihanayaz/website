import styles from "./Profile.module.scss";
import Image from "next/image";

export function Profile() {
  return (
    <div className={styles.profile}>
      <Image
        src="/alihan.png"
        alt="A photo of Alihan"
        className={styles.profilePhoto}
        width={64}
        height={64}
        priority={true}
      />
      <div className={styles.profileInfo}>
        <h1>Alihan Ayaz</h1>
        <h2>Software Developer</h2>
      </div>
    </div>
  );
}
