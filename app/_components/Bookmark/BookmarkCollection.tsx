import Link from "next/link";
import { BookmarkCollectionProps } from "@/_lib/raindrop/types";
import Icon from "@/_components/Icon";

export function BookmarkCollection({
  title,
  slug,
  count,
}: BookmarkCollectionProps) {
  return (
    <div>
      <Link
        className="flex flex-col items-center justify-start gap-2 rounded-lg border border-neutral-200 p-4 transition-all hover:bg-neutral-100 md:flex-row md:justify-between md:p-6"
        href={`/bookmarks/${slug}`}
      >
        <div className="flex items-center justify-center gap-2">
          <Icon name="Collection" />
          <h4>{title}</h4>
        </div>
        <span className="text-sm text-neutral-500">
          {count} {count > 1 ? "Bookmarks" : "Bookmark"}
        </span>
      </Link>
    </div>
  );
}
