import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
	src: "./fonts/GeistVF.woff",
	variable: "--font-geist-sans",
	weight: "100 900",
});
const geistMono = localFont({
	src: "./fonts/GeistMonoVF.woff",
	variable: "--font-geist-mono",
	weight: "100 900",
});
const figtree = localFont({
	src: "./fonts/Figtree.woff",
	variable: "--font-figtree",
	weight: "100 400 900",
});
const figtreeBlack = localFont({
	src: "./fonts/Figtree-Black.woff",
	variable: "--font-figtree-black",
	weight: "100 900",
});

export const metadata: Metadata = {
	title: "Home | xvcf.dev",
	description: "Welcome to xvcf's website!",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${geistSans.variable} ${geistMono.variable} ${figtree.variable} ${figtreeBlack.variable} antialiased bg-black`}
			>
				{children}
			</body>
		</html>
	);
}
