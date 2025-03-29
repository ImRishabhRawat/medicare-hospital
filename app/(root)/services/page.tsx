// app/services/page.tsx
import React from "react";
import ServiceCard from "@/components/ServiceCard";
import { services } from "@/data/servicesData";

const ServicesPage: React.FC = () => {
	return (
		<div className="min-h-screen bg-gray-100 py-10">
			<div className="container mx-auto px-4">
				<h1 className="text-4xl font-bold text-center mb-8">Our Services</h1>
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
					{services.map((service, index) => (
						<ServiceCard key={index} {...service} />
					))}
				</div>
			</div>
		</div>
	);
};

export default ServicesPage;
