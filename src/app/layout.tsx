import type { Metadata } from "next";
import { Inter_Tight, Gloria_Hallelujah } from "next/font/google";
import "./globals.css";

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const gloriaHallelujah = Gloria_Hallelujah({
  variable: "--font-gloria",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Mindly | Master Generative AI & ChatGPT",
  description:
    "Stop getting generic AI results. Our advanced prompt engineering course teaches you to command AI, save 10+ hours a week, and build a portfolio of high-value work. Join today!",
  icons: {
    icon: "/seo/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${interTight.variable} ${gloriaHallelujah.variable} antialiased`}
    >
      <body className="bg-[#f2f1ee] text-black font-[family-name:var(--font-inter-tight)]">
        {children}
      </body>
    </html>
  );
}
