import styles from "./Timeline.module.scss";
import TimelineItem from "./TimelineItem";
import { getTimeline } from "@/_lib/sanity/query";
import { TimelineProps } from "@/_lib/sanity/types";
import { notFound } from "next/navigation";

interface GroupedTimelineProps {
  [year: string]: TimelineProps[];
}

export async function Timeline() {
  const timeline = await getTimeline();
  !timeline && notFound();

  const groupedTimeline = groupTimelineByYear(timeline);
  const sortedYears = Object.keys(groupedTimeline).sort(
    (a, b) => parseInt(b) - parseInt(a)
  );

  return (
    <div className={styles.wrapper}>
      {sortedYears.map((year) => (
        <div className={styles.group} key={year}>
          <h2>{year}</h2>
          <div>
            {groupedTimeline[year].map((item, i) => (
              <TimelineItem key={i} item={item} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

function groupTimelineByYear(timeline: TimelineProps[]) {
  const groupedTimeline: GroupedTimelineProps = {};
  timeline.forEach((item) => {
    const { year, ...rest } = item;
    if (!groupedTimeline[year]) {
      groupedTimeline[year] = [];
    }
    groupedTimeline[year].push({ year, ...rest });
  });

  return groupedTimeline;
}
