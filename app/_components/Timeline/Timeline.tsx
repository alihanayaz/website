import styles from "./Timeline.module.scss";
import TimelineItem from "./TimelineItem";
import { TIMELINE_CONTENT } from "@/_lib/constants";

export function Timeline() {
  return (
    <div className={styles.timelineContainer}>
      <h3>My Journey So Far</h3>
      {TIMELINE_CONTENT.map((item, i) => (
        <TimelineItem key={i} item={item} />
      ))}
    </div>
  );
}
