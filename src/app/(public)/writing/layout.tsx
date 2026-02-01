import type { Metadata } from "next";
import { METADATA } from "@/lib/constants";

export const metadata: Metadata = {
  title: METADATA.writing.title,
  description: METADATA.writing.description,
  alternates: {
    canonical: METADATA.writing.path,
  },
  openGraph: {
    title: METADATA.writing.title,
    description: METADATA.writing.description,
    url: new URL(METADATA.writing.path, METADATA.siteUrl).toString(),
  },
};

export default function WritingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
