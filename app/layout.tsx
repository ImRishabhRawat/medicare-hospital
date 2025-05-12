// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import { inter } from "../lib/fonts"; // adjust the path as needed
import SiteTopbar from "@/components/SiteTopbar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SideButtons from "@/components/SideButtons";

export const metadata: Metadata = {
	title: "Sharma Hospital | Authentic Ayurvedic Treatments & Holistic Wellness",
	description:
		"Experience holistic Ayurvedic healing at Sharma Hospital. Our award-winning team offers authentic Ayurvedic treatments, personalized care, and natural therapies to restore balance and well-being.",
	openGraph: {
		title:
			"Sharma Hospital | Authentic Ayurvedic Treatments & Holistic Wellness",
		description:
			"Experience holistic Ayurvedic healing at Sharma Hospital. Our award-winning team offers authentic Ayurvedic treatments, personalized care, and natural therapies to restore balance and well-being.",
		url: "https://www.shreeganeshayurvedicclinic.com",
		siteName: "Sharma Hospital",
		images: [
			{
				url: "https://www.shreeganeshayurvedicclinic.com/og-image.jpg",
				width: 1200,
				height: 630,
				alt: "Sharma Hospital",
			},
		],
		locale: "en_US",
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		site: "@your_twitter_handle",
		creator: "@your_twitter_handle",
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<SiteTopbar />
				<Header />
				<SideButtons />
				{children}
				<Footer />
			</body>
		</html>
	);
}
