import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar2 from "./Components/Navbar2";
import Footer from "./Components/Footer";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CARE Therapy",
  description: "Care Therapy - Your Path to Wellness"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="light">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <header data-theme="light" className="h-24">
          <Navbar2/>
        </header>
        <main data-theme="light" className="pt-10">
          {children}
        </main>
        <Footer data-theme="light"/>
      </body>
    </html>
  );
}
