import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "hscii transliterator",
  description: "hscii transliterate asian phonetical languages to inglish4(4Aԃɦт)+8aiueohcg",
};

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  return ( <html lang="en"><body>{children}</body></html> );
}
