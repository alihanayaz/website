import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/globals.scss";
import Navbar from "@/_components/Navbar";
import Socials from "@/_components/Socials";
import { META_DATA, TWITTER_USERNAME, REVALIDATE_TIME } from "@/_lib/constants";

export const revalidate = REVALIDATE_TIME;

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
      <body className={`${inter.className}`}>
        <svg width="100%" height="100%">
          <filter id="filterNoise">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.80"
              numOctaves="4"
              stitchTiles="stitch"
            />
          </filter>
          <rect width="100%" height="100%" filter="url(#filterNoise)"></rect>
        </svg>
        <div className="container">
          <main>
            <Navbar />
            {children}
          </main>
          <div className="gradient-wrapper">
            <div className="gradient"></div>
          </div>
        </div>
        <Socials />
      </body>
    </html>
  );
}
