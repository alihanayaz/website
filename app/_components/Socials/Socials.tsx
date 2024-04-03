import styles from "./Socials.module.scss";
import { SOCIALS } from "@/_lib/constants";
import Icon from "@/_components/Icon";

export function Socials() {
  return (
    <div className={styles.socials}>
      {SOCIALS.map((social, i) => {
        return (
          <a
            href={social.url}
            key={i}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon name={social.name} />
            {social.name}
          </a>
        );
      })}
    </div>
  );
}
