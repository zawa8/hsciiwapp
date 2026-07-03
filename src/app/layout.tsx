import type { Metadata } from "next";
import "./globals.css";
import { eng52font, binaryfont, korian52font, russian52font, hin38font, hin52font, bangla52font, odia52font, pnzabi52font, guzrati52font, 	telugu52font, knrra52font, sinhl52font, mlyalm52font, tmil52font } from '@/components/hsciifp/varfonts';

export const metadata: Metadata = {
  title: "hscii transliterator",
  description: "hscii transliterate asian phonetical languages to inglish4(4xqjv)+8aiueohcg",
};

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
	return (
		<html lang="en" className={
			`${eng52font.variable} ${binaryfont.variable} ${korian52font.variable} ${russian52font.variable} ${hin38font.variable} ${hin52font.variable} ${bangla52font.variable} ${odia52font.variable} ${pnzabi52font.variable} ${guzrati52font.variable} 			${telugu52font.variable} ${knrra52font.variable} ${sinhl52font.variable} ${mlyalm52font.variable} ${tmil52font.variable}`
		}>
			<body>{children}</body>
		</html>
	);
}
