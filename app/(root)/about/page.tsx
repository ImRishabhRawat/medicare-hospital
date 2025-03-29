// app/about/page.tsx
"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
	GiPlantRoots,
	GiMedicinePills,
	GiMeditation,
	GiHeartBeats,
} from "react-icons/gi";
import Breadcrumb, { BreadcrumbItem } from "@/components/Breadcrumbs";

const breadcrumbItems: BreadcrumbItem[] = [
	{ label: "Home", href: "/" },
	{ label: "About", href: "/about" },
];

/* -------------------- About Section -------------------- */
const AboutSection: React.FC = () => {
	const values = [
		{
			title: "Authentic Ayurvedic Treatments",
			description:
				"Experience time-honored therapies that harness the healing power of natural herbs.",
			Icon: GiPlantRoots,
			bg: "bg-pink-100",
			textColor: "text-pink-800",
		},
		{
			title: "Herbal Formulations",
			description:
				"Our medicines are crafted using organic ingredients following ancient wisdom.",
			Icon: GiMedicinePills,
			bg: "bg-green-100",
			textColor: "text-green-800",
		},
		{
			title: "Holistic Wellness",
			description:
				"We integrate mind, body, and spirit for complete, balanced health.",
			Icon: GiMeditation,
			bg: "bg-blue-100",
			textColor: "text-blue-800",
		},
		{
			title: "Personalized Care",
			description:
				"Tailored treatment plans designed to meet your unique constitution.",
			Icon: GiHeartBeats,
			bg: "bg-purple-100",
			textColor: "text-purple-800",
		},
	];

	return (
		<section className="py-16 mx-4">
			<div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start">
				{/* Left Side: Image */}
				<div className="w-full lg:w-1/2 relative">
					<Image
						src="/about-img.jpg" // Replace with your about image
						alt="About Shree Ganesh Ayurvedic Clinic"
						width={600}
						height={500}
						unoptimized={true}
						className="object-cover rounded-lg"
					/>
				</div>
				{/* Right Side: Text and Value Cards */}
				<div className="w-full lg:w-1/2 mt-8 lg:mt-0 lg:pl-12">
					{/* Updated H1 with SEO-friendly keywords */}
					<h1 className="text-4xl font-bold mb-4">
						Shree Ganesh Ayurvedic Clinic: Best Ayurvedic Treatments & Natural
						Healing
					</h1>
					<p className="text-lg text-gray-700 mb-6">
						At Shree Ganesh Ayurvedic Clinic, we blend ancient Ayurvedic
						traditions with modern insights to offer holistic, personalized
						care. Our authentic treatments and herbal formulations help restore
						balance and promote natural healing.
					</p>

					<Link href="/services">
						<button className="px-8 py-3 bg-red-500 text-white rounded-lg shadow hover:bg-red-600 transition">
							Explore our Services
						</button>
					</Link>
				</div>
			</div>
			{/* Value Cards */}
			<div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8 my-6">
				{values.map((value, idx) => {
					const { title, description, Icon, bg, textColor } = value;
					return (
						<div
							key={idx}
							className={`flex flex-col items-center justify-center p-6 ${bg} ${textColor} rounded-lg shadow-md transition transform hover:scale-105 min-h-[220px]`}>
							<Icon className="text-4xl mb-4" />
							<h4 className="text-xl font-bold mb-2 text-center">{title}</h4>
							<p className="text-center text-sm">{description}</p>
						</div>
					);
				})}
			</div>
		</section>
	);
};

/* -------------------- Gallery Section -------------------- */
const GallerySection: React.FC = () => {
	const images = [
		"gallery1.jpg",
		"gallery2.jpg",
		"gallery3.jpg",
		"gallery4.jpg",
	];
	return (
		<section className="py-16 bg-gray-50 mx-4">
			<div className="max-w-7xl mx-auto px-4">
				<h2 className="text-3xl font-bold text-center mb-8">Gallery</h2>
				<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
					{images.map((img, idx) => (
						<div key={idx} className="overflow-hidden rounded-lg">
							<Image
								src={`/${img}`}
								alt={`Gallery Image ${idx + 1}`}
								width={300}
								height={200}
								unoptimized={true}
								className="object-cover hover:scale-105 transition-transform duration-300"
							/>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

/* -------------------- CTA Section -------------------- */
const CTASection: React.FC = () => {
	return (
		<section className="py-16 bg-gradient-to-r from-red-500 to-pink-500">
			<div className="max-w-7xl mx-auto px-4 text-center">
				<h2 className="text-3xl font-bold text-white mb-4">
					Ready to take the next step?
				</h2>
				<p className="text-white text-lg mb-8">
					Contact us today and let us help you on your path to better health.
				</p>
				<Link href="/contact">
					<button className="px-8 py-4 bg-white text-red-500 font-semibold rounded-full shadow hover:bg-gray-100 transition">
						Contact Us
					</button>
				</Link>
			</div>
		</section>
	);
};

/* -------------------- About Page -------------------- */
export default function AboutPage() {
	return (
		<>
			<Breadcrumb items={breadcrumbItems} />
			<AboutSection />
			<GallerySection />
			<CTASection />
		</>
	);
}
