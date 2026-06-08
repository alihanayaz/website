import "server-only";

import { cache } from "react";
import Parser from "rss-parser";
import { fetcher } from "@/lib/utils";
import { REVALIDATE } from "@/lib/constants";
import type { BookInfo } from "./types";

const GOODREADS_USER_ID = process.env.GOODREADS_USER_ID;
const GOODREADS_BASE_URL = "https://www.goodreads.com";
const GOODREADS_BASE_RSS_URL = `${GOODREADS_BASE_URL}/review/list_rss`;

type CustomFeedItem = {
  bookId: string;
  bookLargeImageUrl: string;
  authorName: string;
};

const parser = new Parser<object, CustomFeedItem>({
  customFields: {
    item: [
      ["book_id", "bookId"],
      ["book_large_image_url", "bookLargeImageUrl"],
      ["author_name", "authorName"],
    ],
  },
});

function cleanTitle(title: string): string {
  if (!title) return title;

  let cleaned = title;
  cleaned = cleaned.replace(/\s*\([^)]*#\d+[^)]*\)$/, "");
  cleaned = cleaned.replace(/\s*\([^)]*\)$/, "");
  cleaned = cleaned.split(":")[0];

  return cleaned.trim();
}

export const getCurrentlyReading = cache(async (): Promise<BookInfo | null> => {
  if (!GOODREADS_USER_ID) {
    throw new Error("Missing environment variable: GOODREADS_USER_ID");
  }

  const url = `${GOODREADS_BASE_RSS_URL}/${GOODREADS_USER_ID}?shelf=currently-reading`;

  const xml = await fetcher<string>(url, {
    responseType: "text",
    revalidate: REVALIDATE.READING,
    tags: ["reading"],
  });

  if (!xml) return null;

  const feed = await parser.parseString(xml);

  if (!feed.items?.length) return null;

  const item = feed.items[0];

  return {
    title: cleanTitle(item.title || ""),
    author: item.authorName || "",
    url: `${GOODREADS_BASE_URL}/book/show/${item.bookId}`,
    coverUrl: item.bookLargeImageUrl || "",
  };
});
