import type { Metadata } from "next";
import "./globals.css";
// import { inglishenglosoftw8asc } from "@/components/hsciifp/varfonts";
import { eng52font, hin52font, hin38font, bangla38font, telugu38font } from '@/components/hsciifp/varfonts';

export const metadata: Metadata = {
  title: "hscii transliterator",
  description: "hscii transliterate asian phonetical languages to inglish4(4Aԃɦт)+8aiueohcg",
};

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
	return (
		<html lang="en" className={
			`${eng52font.variable} ${hin52font.variable} ${hin38font.variable} ${bangla38font.variable} ${telugu38font.variable}`
		}>
			<body>{children}</body>
		</html>
	);
}
