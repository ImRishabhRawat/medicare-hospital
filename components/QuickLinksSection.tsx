"use client";

import React from "react";
import Link from "next/link";
import { FiPhone, FiCalendar, FiUser, FiMail } from "react-icons/fi";

const QuickLinksSection: React.FC = () => {
	return (
		<section id="quick-links" className="py-16 bg-gray-100">
			<div className="max-w-7xl mx-auto px-4 text-center">
				<h2 className="text-3xl font-bold mb-4">
					Quick links to the information and resources you need.
				</h2>
				<div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-8">
					<Link
						href="/about"
						className="block p-6 bg-white rounded-lg shadow hover:shadow-lg transition">
						<div className="flex flex-col items-center">
							<FiPhone size={32} className="text-blue-600 mb-2" />
							<h3 className="text-xl font-semibold">Need For Support</h3>
						</div>
					</Link>
					<Link
						href="/contact"
						className="block p-6 bg-white rounded-lg shadow hover:shadow-lg transition">
						<div className="flex flex-col items-center">
							<FiCalendar size={32} className="text-green-600 mb-2" />
							<h3 className="text-xl font-semibold">Schedule Appointment</h3>
						</div>
					</Link>
					<Link
						href="/doctors"
						className="block p-6 bg-white rounded-lg shadow hover:shadow-lg transition">
						<div className="flex flex-col items-center">
							<FiUser size={32} className="text-purple-600 mb-2" />
							<h3 className="text-xl font-semibold">Find a Doctor</h3>
						</div>
					</Link>
					<Link
						href="/contact"
						className="block p-6 bg-white rounded-lg shadow hover:shadow-lg transition">
						<div className="flex flex-col items-center">
							<FiMail size={32} className="text-red-600 mb-2" />
							<h3 className="text-xl font-semibold">Contact Us</h3>
						</div>
					</Link>
				</div>
			</div>
		</section>
	);
};

export default QuickLinksSection;
