import type { Metadata } from "next";
import { Inter } from "next/font/google";
import TechBackground from "@/components/TechBackground";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Mapepa Innovation | Building the Future of Software",
  description:
    "Mapepa Innovation LLC is a technology company delivering innovative B2B and B2C software products and services. Discover VeriTalent — our flagship talent verification platform.",
  keywords: [
    "Mapepa Innovation",
    "VeriTalent",
    "software development",
    "B2B software",
    "B2C products",
    "talent verification",
    "technology company",
  ],
  openGraph: {
    title: "Mapepa Innovation | Building the Future of Software",
    description:
      "Innovative technology company delivering B2B and B2C software products and services.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="relative min-h-screen">
        <TechBackground />
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
}
