import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import { METADATA } from "@/lib/constants";

export const metadata: Metadata = {
  metadataBase: new URL(METADATA.siteUrl),
  title: METADATA.root.title,
  description: METADATA.root.description,
  robots: { index: true, follow: true },
  alternates: {
    canonical: METADATA.root.path,
  },
  openGraph: {
    title: METADATA.root.title,
    description: METADATA.root.description,
    url: new URL(METADATA.root.path, METADATA.siteUrl).toString(),
    siteName: METADATA.root.title,
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
