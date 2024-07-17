import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/globals.css";
import Navbar from "@/_components/Navbar";
import { META_DATA, TWITTER_USERNAME } from "@/_lib/constants";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://alihan.dev"),
  title: META_DATA.title,
  description: META_DATA.description,
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: META_DATA.title,
    description: META_DATA.description,
    url: "/",
    siteName: META_DATA.title,
    images: "/api/og",
    locale: "en_IE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    creator: TWITTER_USERNAME,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-neutral-50 text-neutral-950`}>
        <main className="mx-auto mb-40 mt-14 flex max-w-2xl flex-col px-6 antialiased md:px-0">
          <Navbar />
          {children}
        </main>
      </body>
    </html>
  );
}
