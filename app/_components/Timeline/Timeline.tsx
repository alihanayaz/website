import TimelineItem from "./TimelineItem";
import { TIMELINE_CONTENT } from "@/_lib/constants";

export function Timeline() {
  return (
    <div>
      {TIMELINE_CONTENT.map((item, i) => (
        <TimelineItem key={i} item={item} />
      ))}
    </div>
  );
}
