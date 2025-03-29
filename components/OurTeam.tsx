// components/DoctorProfile.tsx
import React from "react";
import Image from "next/image";

const specialities = [
	"Women's Health & Infertility",
	"Men's Health Issues",
	"Bone, Joint & Muscle Disorders",
	"Mental Health & Stress Management",
	"Skin Disorders",
	"Digestive & Urinary Disorders",
	"Respiratory Issues",
	"Hair Disorders",
	"Metabolic & Lifestyle Disorders",
];

// Define an array of gradient backgrounds (using direct CSS gradient strings)
const gradientBackgrounds = [
	"linear-gradient(135deg, #FFD1DC, #FFC0CB)", // pastel pink
	"linear-gradient(135deg, #AEC6CF, #B0E0E6)", // pastel blue
	"linear-gradient(135deg, #77DD77, #C1E1C1)", // pastel green
	"linear-gradient(135deg, #CBAACB, #E3E4FA)", // pastel purple
	"linear-gradient(135deg, #FDFD96, #FFFACD)", // pastel yellow
];

interface SpecialityCardProps {
	speciality: string;
	bg: string;
}

const SpecialityCard: React.FC<SpecialityCardProps> = ({ speciality, bg }) => {
	return (
		<div
			className="px-4 py-2 rounded-lg shadow-md transition-transform transform hover:scale-105"
			style={{ background: bg }}>
			<p className="text-sm font-medium text-black text-center">{speciality}</p>
		</div>
	);
};

const DoctorProfile: React.FC = () => {
	return (
		<section className="py-16 bg-gradient-to-r from-green-500 to-blue-900">
			<div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row items-center">
				{/* Left Side: Profile Image (not rounded) */}
				<div className="w-full lg:w-1/3">
					<div className="relative w-full h-80 shadow-lg">
						<Image
							src="/doc.jpg"
							alt="Dr. Amit Sharma"
							fill
							unoptimized={true}
							className="object-cover"
						/>
					</div>
				</div>
				{/* Right Side: Doctor Details */}
				<div className="w-full lg:w-2/3 mt-8 lg:mt-0 lg:pl-12">
					<h2 className="text-4xl font-bold text-gray-800 mb-2">
						Dr. Amit Sharma
					</h2>
					<p className="text-xl text-gray-700 mb-2">
						Ayurvedic Physician (B.A.M.S., M.D.A.M.)
					</p>
					<p className="text-gray-600 mb-6">Reg. No.: MZN/SHM/047</p>
					<h3 className="text-2xl font-semibold text-gray-800 mb-4">
						Specialties:
					</h3>
					<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
						{specialities.map((speciality, index) => (
							<SpecialityCard
								key={index}
								speciality={speciality}
								bg={gradientBackgrounds[index % gradientBackgrounds.length]}
							/>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default DoctorProfile;
