import type { Metadata } from "next";
import { METADATA } from "@/lib/constants";

export const metadata: Metadata = {
  title: METADATA.colophon.title,
  description: METADATA.colophon.description,
  alternates: {
    canonical: METADATA.colophon.path,
  },
  openGraph: {
    title: METADATA.colophon.title,
    description: METADATA.colophon.description,
    url: new URL(METADATA.colophon.path, METADATA.siteUrl).toString(),
  },
};

export default function ColophonContentLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
