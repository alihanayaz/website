import type { Metadata } from "next";
import { METADATA } from "@/lib/constants";

export const metadata: Metadata = {
  title: METADATA.now.title,
  description: METADATA.now.description,
  alternates: {
    canonical: METADATA.now.path,
  },
  openGraph: {
    title: METADATA.now.title,
    description: METADATA.now.description,
    url: new URL(METADATA.now.path, METADATA.siteUrl).toString(),
  },
};

export default function NowContentLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
