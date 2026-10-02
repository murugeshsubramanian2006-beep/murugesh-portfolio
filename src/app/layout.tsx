import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Murugesh S | Portfolio",
  description: "Computer Science student building practical software and security-focused projects.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} scroll-smooth`}>
      <body className="antialiased min-h-screen flex flex-col" style={{ background: "#0d0d0d", color: "#f0ece4" }}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
