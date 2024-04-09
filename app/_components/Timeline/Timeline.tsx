import TimelineItem from "./TimelineItem";
import { getTimeline } from "@/_lib/sanity/query";
import { TimelineProps } from "@/_lib/sanity/types";

export async function Timeline() {
  const timeline = await getTimeline();
  return (
    <div>
      {timeline.map((item: TimelineProps, i: number) => (
        <TimelineItem key={i} item={item} />
      ))}
    </div>
  );
}
