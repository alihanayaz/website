import styles from "./Socials.module.scss";
import socialsData from "@/_data/socials.json";

export function Socials() {
  return (
    <div className={styles.socials}>
      {socialsData.map((social, i) => {
        return (
          <a
            href={social.url}
            key={i}
            target="_blank"
            rel="noopener noreferrer"
          >
            {social.name}
          </a>
        );
      })}
    </div>
  );
}
