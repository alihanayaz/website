"use client";
import { BookmarkItemProps } from "@/_lib/raindrop/types";
import Icon from "@/_components/Icon";

export function BookmarkItem({
  title,
  link,
  cover,
  excerpt,
}: BookmarkItemProps) {
  const strippedLink = link.replace(/(^\w+:|^)\/\/([^/]+).*/, "$2");
  const href = `${link}?ref=alihan.dev`;
  return (
    <a
      className="flex flex-col justify-start gap-2 rounded-lg border border-neutral-200 p-4 transition-all hover:bg-neutral-100"
      href={href}
      target="_blank"
      rel="noreferrer noopener"
    >
      <div className="relative mb-4 w-full overflow-hidden rounded-lg pt-[56.25%]">
        <img
          className="absolute left-0 top-0 h-full w-full object-cover"
          src={cover || "/fallback.webp"}
          alt={title}
          onError={(e) => {
            (e.target as HTMLImageElement).onerror = null;
            (e.target as HTMLImageElement).src = "/fallback.webp";
          }}
        ></img>
      </div>
      <span className="overflow-hidden text-ellipsis">{title}</span>
      <div className="flex items-center gap-1 text-sm">
        <Icon name="Link" size="small" />
        <span>{strippedLink}</span>
      </div>
      <p className="line-clamp-2 text-sm text-neutral-500">{excerpt}</p>
    </a>
  );
}
