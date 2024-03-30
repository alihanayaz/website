import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/globals.scss";
import Navbar from "@/_components/Navbar";
import Socials from "@/_components/Socials";

const spaceGrotesk = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Alihan Ayaz",
  description: "Software Developer based in Istanbul, Turkey",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${spaceGrotesk.className}`}>
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
