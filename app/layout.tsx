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
  description: "JPDS is a boutique design studio that specializes in high-end Residence, landscape architecture, urban design, public art and environmental planning in pan India with head office in Faridabad.",
  keywords: ["architecture projects", "interior design", "home renovation","modern home design","top architects near me", "residential architecture design"],
  robots: "index, follow",
  openGraph: {
    title: "Projects | JPDS",
    description: "Explore all our featured projects including designs, architecture, and renovation solutions by our expert team.",
    type: "website",
    url: "https://www.jpds.in",
    images: [
      {
        url: "https://www.jpds.in/_next/image?url=%2FJPDS.png&w=128&q=75",
        width: 1200,
        height: 630,
        alt: "JPDS",
      },
    ],
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
