import Link from "next/link";
import { PostProps } from "@/_lib/sanity/types";

export function PostCard({
  title,
  excerpt,
  slug,
  image,
  _createdAt,
}: PostProps) {
  return (
    <Link
      className="flex flex-col gap-2 rounded-lg border border-neutral-200 pb-6 transition-all hover:bg-neutral-100"
      href={`/blog/${slug}`}
    >
      <div className="relative mb-2 w-full overflow-hidden rounded-t-lg pt-[56.25%]">
        <img
          className="absolute left-0 top-0 h-full w-full object-cover"
          src={image}
          alt={title}
        />
        <span className="absolute right-2 top-2 rounded-lg bg-neutral-100 px-2 text-xs text-neutral-500">
          {_createdAt}
        </span>
      </div>
      <div className="flex flex-col gap-2 px-4">
        <h1 className="overflow-hidden text-ellipsis">{title}</h1>
        <span className="line-clamp-2 text-sm text-neutral-500">{excerpt}</span>
      </div>
    </Link>
  );
}
