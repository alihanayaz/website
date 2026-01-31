"use client";

import { useState, useTransition } from "react";
import {
  loadBookmarks,
  type BookmarkItem,
  type PaginatedBookmarks,
} from "@/features/bookmarks";
import { BookmarkItem as BookmarkItemComp } from "./bookmark-item";
import { Button, Icon } from "@/components/ui";
import { ArrowDown, Loader2 } from "lucide-react";

interface BookmarkListProps {
  initialData: PaginatedBookmarks;
  collectionId: number;
}

export function BookmarkList({ initialData, collectionId }: BookmarkListProps) {
  const [data, setData] = useState(initialData.items);
  const [page, setPage] = useState(initialData.currentPage);
  const [total, setTotal] = useState(initialData.total);

  const [isPending, startTransition] = useTransition();

  const hasMore = data.length < total;

  const loadMore = () => {
    if (!hasMore || isPending) return;

    startTransition(async () => {
      const nextPage = page + 1;
      const response = await loadBookmarks(collectionId, nextPage);

      if (response.items.length > 0) {
        setData((prev) => [...prev, ...response.items]);
        setPage(nextPage);
        setTotal(response.total);
      }
    });
  };

  const firstCol: BookmarkItem[] = [];
  const secondCol: BookmarkItem[] = [];

  data.forEach((item, index) => {
    if (index % 2 === 0) {
      firstCol.push(item);
    } else {
      secondCol.push(item);
    }
  });

  const columns = [firstCol, secondCol];

  return (
    <div className="flex flex-col gap-8">
      <div className="grid grid-cols-1 items-start gap-4 sm:grid-cols-2">
        <div className="flex flex-col gap-4 sm:hidden">
          {data.map((bookmark) => (
            <BookmarkItemComp key={bookmark._id} {...bookmark} />
          ))}
        </div>

        {columns.map((colItems, i) => (
          <div key={`col-${i}`} className="hidden flex-col gap-4 sm:flex">
            {colItems.map((bookmark) => (
              <BookmarkItemComp key={bookmark._id} {...bookmark} />
            ))}
          </div>
        ))}
      </div>

      {hasMore && (
        <Button
          onClick={loadMore}
          variant="outline"
          size="lg"
          disabled={isPending}
          className="mx-auto w-fit"
        >
          {isPending ? (
            <>
              <Icon as={Loader2} size={16} className="animate-spin" />
              Loading...
            </>
          ) : (
            <>
              Load more
              <Icon as={ArrowDown} size={16} />
            </>
          )}
        </Button>
      )}
    </div>
  );
}
