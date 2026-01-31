"use server";

import { getBookmarksByCollectionId } from "@/features/bookmarks/api/queries";
import type { PaginatedBookmarks } from "@/features/bookmarks";

export async function loadBookmarks(
  collectionId: number,
  page = 0,
): Promise<PaginatedBookmarks> {
  return await getBookmarksByCollectionId(collectionId, page);
}
