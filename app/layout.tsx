import type { Metadata } from "next";
import { Geist, Geist_Mono, Roboto } from "next/font/google";
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
      <Appbar />
      <body
        className={`${geistSans.variable} ${geistMono.variable}  ${robot.variable}  antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
