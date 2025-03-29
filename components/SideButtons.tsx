"use client";

import React from "react";
import { FiPhone, FiMapPin } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

const SideButtons: React.FC = () => {
	return (
		<div className="fixed right-4 top-1/2 transform -translate-y-1/2 space-y-4 z-50">
			{/* Call Button */}
			<a
				href="tel:+919997207761"
				className="flex items-center justify-center w-12 h-12 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition">
				<FiPhone size={20} />
			</a>
			{/* WhatsApp Button */}
			<a
				href="https://wa.me/919997207761"
				target="_blank"
				rel="noopener noreferrer"
				className="flex items-center justify-center w-12 h-12 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 transition">
				<FaWhatsapp size={20} />
			</a>
			{/* Location Button */}
			<a
				href="https://maps.app.goo.gl/AimrwQy98huRgimu5"
				target="_blank"
				rel="noopener noreferrer"
				className="flex items-center justify-center w-12 h-12 bg-red-600 text-white rounded-full shadow-lg hover:bg-red-700 transition">
				<FiMapPin size={20} />
			</a>
		</div>
	);
};

export default SideButtons;
