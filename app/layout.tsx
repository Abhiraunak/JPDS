import type { Metadata } from "next";
import { Inter, Roboto } from "next/font/google";
import "./globals.css";
import { Appbar } from "@/components/Appbar";

const robot = Roboto({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-Roboto',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-Inter',

})

export const metadata: Metadata = {
  title: "JPDS",
  description:
    "JPDS is a architecture design studio specializing in high-end residential architecture, landscape design, urban planning, public art, and environmental solutions. Based in Faridabad, serving clients pan India.",
  keywords: [
    "architecture projects",
    "interior design",
    "home renovation",
    "modern home design",
    "top architects near me",
    "residential architecture design",
    "landscape architecture India",
    "urban design studio",
    "JPDS Faridabad",
    "Vastu consulting",
    "Best architecture",
    "vastu designing"
  ],
  robots: "index, follow",
  openGraph: {
    title: "JPDS | Featured Architecture & Design Projects",
    description:
      "Explore JPDS's signature architecture and design projects across India — from luxury residences to urban public art and planning solutions.",
    type: "website",
    url: "https://www.jpds.in",
    siteName: "JPDS",
    images: [
      {
        url: "https://www.jpds.in/JPDS.png", // <- updated image
        width: 1200,
        height: 630,
        alt: "JPDS Logo",
      },
    ],
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "JPDS | Architecture & Design Studio",
    description:
      "Discover high-end residential and environmental design solutions from JPDS — based in Faridabad, delivering excellence across India.",
    images: ["https://www.jpds.in/JPDS.png"],
  },
  icons: {
    icon: "/favicon.ico", // optional favicon
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Appbar />
      <body
        className={`${robot.variable} ${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
