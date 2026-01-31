import type { Metadata } from "next";
import { METADATA } from "@/lib/constants";

export const metadata: Metadata = {
  title: METADATA.bookmarks.title,
  description: METADATA.bookmarks.description,
  alternates: {
    canonical: METADATA.bookmarks.path,
  },
  openGraph: {
    title: METADATA.bookmarks.title,
    description: METADATA.bookmarks.description,
    url: new URL(METADATA.bookmarks.path, METADATA.siteUrl).toString(),
  },
};

export default function BookmarksLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
