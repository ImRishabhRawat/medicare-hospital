// components/ServiceCard.tsx
import React from "react";
import { Service } from "@/data/servicesData";

const ServiceCard: React.FC<Service> = ({ title, description, icon: Icon }) => {
	return (
		<div className="flex flex-col items-center p-6 bg-[#95bd9f] rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
			<Icon className="text-red-500 text-4xl mb-4" />
			<h3 className="text-xl font-semibold mb-2 text-center">{title}</h3>
			<p className="text-gray-600 text-center">{description}</p>
		</div>
	);
};

export default ServiceCard;
