
import React from "react";
import {
	FiAlertTriangle,
	FiUsers,
	FiMonitor,
	FiActivity,
	FiUser,
	FiDroplet,
} from "react-icons/fi";

interface Service {
	name: string;
	description: string;
	Icon: React.ComponentType<{ className?: string }>;
	bg: string;
	textColor: string;
}

const services: Service[] = [
	{
		name: "Emergency And ICU Services",
		description: "Immediate, specialized care for critical conditions.",
		Icon: FiAlertTriangle,
		bg: "bg-red-100",
		textColor: "text-red-800",
	},
	{
		name: "Obstetrics And Gynaecology",
		description: "Comprehensive care for maternal and women's health.",
		Icon: FiUsers,
		bg: "bg-pink-100",
		textColor: "text-pink-800",
	},
	{
		name: "Radiology",
		description: "Advanced imaging for accurate diagnosis.",
		Icon: FiMonitor,
		bg: "bg-blue-100",
		textColor: "text-blue-800",
	},
	{
		name: "Orthopaedics",
		description: "Expert treatment for musculoskeletal conditions.",
		Icon: FiActivity,
		bg: "bg-green-100",
		textColor: "text-green-800",
	},
	{
		name: "General Physician",
		description: "Personalized primary care for all ages.",
		Icon: FiUser,
		bg: "bg-yellow-100",
		textColor: "text-yellow-800",
	},
	{
		name: "Laboratory Services",
		description: "Accurate diagnostics with state-of-the-art tests.",
		Icon: FiDroplet,
		bg: "bg-purple-100",
		textColor: "text-purple-800",
	},
];

const OurServices: React.FC = () => {
	return (
		<section className="py-16 bg-white">
			<div className="max-w-7xl mx-auto px-4">
				{/* Header & Description */}
				<div className="flex flex-col md:flex-row md:justify-between items-start mb-12">
					<div className="md:w-1/2">
						<h3 className="text-3xl font-bold mb-4">Our Scope of Services</h3>
					</div>
					<div className="md:w-1/2">
						<p className="text-lg text-gray-700">
							Our scope of services is growing with each passing day, ensuring
							that the best treatment is provided to every patient. Here’s a
							list of the services that the Hospital is currently working with.
						</p>
					</div>
				</div>
				{/* Services Cards */}
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
					{services.map((service, index) => {
						const { name, description, Icon, bg, textColor } = service;
						return (
							<div
								key={index}
								className={`flex flex-col items-center p-6 ${bg} ${textColor} rounded-xl shadow-lg transform transition hover:scale-105 min-h-[220px]`}>
								<div className="mb-4">
									<Icon className="text-4xl" />
								</div>
								<h4 className="text-xl font-bold mb-2 text-center">{name}</h4>
								<p className="text-center">{description}</p>
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
};

export default OurServices;
