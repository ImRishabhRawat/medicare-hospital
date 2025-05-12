// components/HowWeHelp.tsx
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

const HowWeHelp: React.FC = () => {
	return (
		<section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-700">
			<div className="max-w-7xl mx-auto px-4 text-white">
				{/* Header: Two columns on md+ */}
				<div className="flex flex-col md:flex-row md:justify-between items-center mb-12">
					{/* Title */}
					<div className="w-full md:w-1/2 mb-6 md:mb-0 text-left">
						<h2 className="text-4xl md:text-5xl font-bold">
							Experience Holistic Ayurvedic Healing
						</h2>
					</div>
					{/* Description */}
					<div className="w-full md:w-1/2 text-left">
						<p className="text-xl md:text-lg font-light">
							At Sharma Hospital, we blend ancient wisdom with modern practices
							to offer personalized natural therapies. Explore our specialized
							treatments designed to nurture your body, mind, and spirit.
						</p>
					</div>
				</div>

				{/* Cards Grid */}
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					{/* Card 1: Ayurvedic Treatments */}
					<div className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col">
						<div className="relative h-48">
							<Image
								src="/emergency.jpeg"
								alt="Authentic Ayurvedic Treatments"
								fill
								unoptimized={true}
								className="object-cover"
							/>
						</div>
						<div className="p-6 flex flex-col flex-grow">
							<h3 className="text-xl font-bold text-gray-800 mb-2">
								Authentic Ayurvedic Treatments
							</h3>
							<p className="text-gray-600 mb-4 flex-grow">
								Discover natural healing through time-tested Ayurvedic
								therapies, tailored to restore balance and boost vitality.
							</p>
							<Link
								href="/ayurvedic-treatments"
								className="inline-flex items-center mt-auto px-4 py-2 border border-blue-600 text-blue-600 font-semibold rounded hover:bg-blue-600 hover:text-white transition">
								<FaArrowRight className="mr-2" />
								Learn More
							</Link>
						</div>
					</div>

					{/* Card 2: Holistic Wellness Programs */}
					<div className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col">
						<div className="relative h-48">
							<Image
								src="/emergency2.jpeg"
								alt="Holistic Wellness Programs"
								fill
								unoptimized={true}
								className="object-cover"
							/>
						</div>
						<div className="p-6 flex flex-col flex-grow">
							<h3 className="text-xl font-bold text-gray-800 mb-2">
								Holistic Wellness Programs
							</h3>
							<p className="text-gray-600 mb-4 flex-grow">
								Embrace a balanced lifestyle with our comprehensive wellness
								programs, focusing on mind, body, and spirit.
							</p>
							<Link
								href="/wellness-programs"
								className="inline-flex items-center mt-auto px-4 py-2 border border-green-600 text-green-600 font-semibold rounded hover:bg-green-600 hover:text-white transition">
								<FaArrowRight className="mr-2" />
								Learn More
							</Link>
						</div>
					</div>

					{/* Card 3: Advanced Natural Therapies */}
					<div className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col">
						<div className="relative h-48">
							<Image
								src="/emergency.jpeg"
								alt="Advanced Natural Therapies"
								fill
								unoptimized={true}
								className="object-cover"
							/>
						</div>
						<div className="p-6 flex flex-col flex-grow">
							<h3 className="text-xl font-bold text-gray-800 mb-2">
								Advanced Natural Therapies
							</h3>
							<p className="text-gray-600 mb-4 flex-grow">
								Experience cutting-edge natural therapies that combine
								traditional Ayurvedic knowledge with modern insights for optimal
								health.
							</p>
							<Link
								href="/natural-therapies"
								className="inline-flex items-center mt-auto px-4 py-2 border border-red-600 text-red-600 font-semibold rounded hover:bg-red-600 hover:text-white transition">
								<FaArrowRight className="mr-2" />
								Learn More
							</Link>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default HowWeHelp;
