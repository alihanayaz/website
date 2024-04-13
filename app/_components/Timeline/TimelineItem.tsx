import styles from "./TimelineItem.module.scss";
import { TimelineProps } from "@/_lib/sanity/types";
import { urlFor } from "@/_lib/sanity/query";

export default function TimelineItem({ item }: { item: TimelineProps }) {
  const { title, duration, detail, image } = item;
  return (
    <ol className={styles.wrapper}>
      <li className={styles.content}>
        <div className={styles.bulletPoint}></div>
        <div className={styles.heading}>
          <span className={styles.title}>{title}</span>
          {duration && <span className={styles.duration}>{duration}</span>}
        </div>
        <p className={styles.detail}>{detail}</p>
        {image && (
          <div className={styles.imageContainer}>
            <img src={urlFor(image).url()} alt={title} />
          </div>
        )}
      </li>
    </ol>
  );
}
