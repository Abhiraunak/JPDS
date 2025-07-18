import type { Metadata } from "next";
import { Geist, Geist_Mono, Italianno, Roboto } from "next/font/google";
import "./globals.css";
import { Appbar } from "@/components/Appbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const italianno = Italianno({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-italianno',
})

const robot = Roboto({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-Roboto',
})

export const metadata: Metadata = {
  title: "JPDS",
  description: "JPDS is a boutique design studio that specializes in high-end Residence, landscape architecture, urban design public art and environmental planning in pan India with head office in Faridabad.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <div className="pt-3 pl-2 pr-2">
        <Appbar />
      </div>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${italianno.variable}  ${robot.variable}  antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
