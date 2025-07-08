import type { Metadata } from "next";
import "./globals.css";
import { hindienglosoftw8asc } from "@/components/hsciifp/hsciifonts";


export const metadata: Metadata = {
  title: "hscii transliterator",
  description: "hscii transliterate asian phonetical languages to inglish4(4Aԃɦт)+8aiueohcg",
};

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  return ( <html lang="en"><body className={`${hindienglosoftw8asc.className} antialiased`}>{children}</body></html> );
}
