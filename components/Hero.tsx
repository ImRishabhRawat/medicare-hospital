import React from "react";
import { FiPhone, FiMapPin } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { HiChevronDown } from "react-icons/hi";

const MainContent: React.FC = () => {
	return (
		<main id="main-content" className="relative">
			{/* Fixed Side Buttons */}
			<div className="fixed right-4 top-1/2 transform -translate-y-1/2 space-y-4 z-50">
				{/* Call Button */}
				<a
					href="tel:+91 99972 07761"
					className="flex items-center justify-center w-12 h-12 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition">
					<FiPhone size={20} />
				</a>
				{/* WhatsApp Button */}
				<a
					href="https://wa.me/1234567890"
					target="_blank"
					rel="noopener noreferrer"
					className="flex items-center justify-center w-12 h-12 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 transition">
					<FaWhatsapp size={20} />
				</a>
				{/* Location Button */}
				<a
					href="https://www.google.com/maps"
					target="_blank"
					rel="noopener noreferrer"
					className="flex items-center justify-center w-12 h-12 bg-red-600 text-white rounded-full shadow-lg hover:bg-red-700 transition">
					<FiMapPin size={20} />
				</a>
			</div>

			{/* Hero Section */}
			<section className="relative h-screen overflow-hidden">
				{/* Video Background */}
				<video
					className="absolute top-0 left-0 w-full h-full object-cover"
					src="/hero-bg.mp4"
					autoPlay
					muted
					loop
					playsInline
				/>
				{/* Optional overlay for better text contrast */}
				<div className="absolute inset-0 bg-black opacity-40"></div>
				{/* Centered Text */}
				<div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
					<h1 className="text-white text-4xl md:text-6xl font-bold mb-4">
						Best Ayurvedic Care
					</h1>
					<p className="text-white text-lg md:text-2xl max-w-2xl">
						Discover holistic healing through ancient Ayurvedic wisdom and
						personalized natural therapies—delivered by our award-winning team
						of Ayurvedic doctors dedicated to your well-being.
					</p>
				</div>
				{/* Scroll Down Animation */}
				<div className="absolute bottom-10 w-full flex justify-center z-10">
					<a href="#next-section" className="animate-bounce text-white">
						<HiChevronDown size={32} />
					</a>
				</div>
			</section>
		</main>
	);
};

export default MainContent;
