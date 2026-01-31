import "server-only";

import { cache } from "react";
import { fetcher } from "@/lib/utils";
import { BOOKMARKS_CONFIG, REVALIDATE } from "@/lib/constants";
import type {
  BookmarkCollection,
  BookmarkResponse,
  PaginatedBookmarks,
} from "@/features/bookmarks";

const RAINDROP_ACCESS_TOKEN = process.env.RAINDROP_ACCESS_TOKEN;
const RAINDROP_API_BASE_URL = "https://api.raindrop.io/rest/v1";

async function getRaindropData<T>(endpoint: string) {
  if (!RAINDROP_ACCESS_TOKEN) {
    throw new Error("Missing environment variable: RAINDROP_ACCESS_TOKEN");
  }

  const url = `${RAINDROP_API_BASE_URL}/${endpoint}`;

  return await fetcher<T>(url, {
    headers: {
      Authorization: `Bearer ${RAINDROP_ACCESS_TOKEN}`,
    },
    revalidate: REVALIDATE.BOOKMARKS,
    tags: ["bookmarks"],
  });
}

export const getChildCollections = cache(
  async (): Promise<BookmarkCollection[]> => {
    const data = await getRaindropData<{ items: BookmarkCollection[] }>(
      "collections/childrens",
    );

    return data?.items ?? [];
  },
);

export const getPublicCollections = cache(
  async (): Promise<BookmarkCollection[]> => {
    const collections = await getChildCollections();

    return collections.filter(
      (col) =>
        col.parent?.$id === BOOKMARKS_CONFIG.PUBLIC_BOOKMARK_COLLECTION_ID &&
        col.count > 0,
    );
  },
);

export const getBookmarksByCollectionId = cache(
  async (collectionId: number, page = 0): Promise<PaginatedBookmarks> => {
    const params = new URLSearchParams({
      page: page.toString(),
      perpage: BOOKMARKS_CONFIG.BOOKMARKS_PER_PAGE.toString(),
      sort: "-sort",
    });
    const endpoint = `raindrops/${collectionId}?${params}`;

    const data = await getRaindropData<BookmarkResponse>(endpoint);

    const totalCount = data?.count ?? 0;

    return {
      items: data?.items ?? [],
      total: totalCount,
      totalPages: Math.ceil(totalCount / BOOKMARKS_CONFIG.BOOKMARKS_PER_PAGE),
      currentPage: page,
    };
  },
);
