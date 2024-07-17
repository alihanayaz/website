import { TimelineProps } from "@/_lib/sanity/types";
import { urlFor } from "@/_lib/sanity/query";

export default function TimelineItem({ item }: { item: TimelineProps }) {
  const { title, duration, detail, image } = item;
  return (
    <ol className="relative flex border-l border-solid border-l-neutral-500">
      <li className="mb-16 ml-4">
        <div className="absolute -left-2 -top-2 mt-2 h-4 w-4 rounded-full bg-neutral-950"></div>
        <div className="flex flex-col items-start gap-4 leading-none md:flex-row md:items-center">
          <span className="font-semibold">{title}</span>
          {duration && (
            <span className="text-sm text-neutral-500">{duration}</span>
          )}
        </div>
        <p className="my-6">{detail}</p>
        {image && (
          <img className="rounded-lg" src={urlFor(image).url()} alt={title} />
        )}
      </li>
    </ol>
  );
}
