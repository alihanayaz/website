import styles from "./TimelineItem.module.scss";
import { TimelineProps } from "@/_lib/sanity/types";

export default function TimelineItem({ item }: { item: TimelineProps }) {
  const { title, year, duration, detail } = item;
  return (
    <ol className={styles.timelineItem}>
      <li className={styles.timelineItemContent}>
        <div className={styles.bulletPoint}></div>
        <div className={styles.heading}>
          <span className={styles.year}>{year}</span>
          <span className={styles.title}>{title}</span>
          <span className={styles.duration}>{duration}</span>
        </div>
        <p className={styles.detail}>{detail}</p>
      </li>
    </ol>
  );
}
