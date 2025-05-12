"use client";

import React, { useState } from "react";
import { FiPhone, FiMapPin, FiMail } from "react-icons/fi";

const ContactPage: React.FC = () => {
	const [name, setName] = useState("");
	const [phone, setPhone] = useState("");
	const [message, setMessage] = useState("");

	// Replace with your actual WhatsApp number (in international format without +)
	const whatsappNumber = "91+91 99972 07761";

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		// Construct the message text
		const text = `Name: ${name}\nPhone: ${phone}\nMessage: ${message}`;
		// Create the WhatsApp URL
		const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
			text
		)}`;
		window.open(url, "_blank");
	};

	return (
		<div className="min-h-screen bg-gray-50 py-12 px-4 space-y-12">
			{/* Top Section: Info & Form */}
			<div className=" rounded-xl max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 bg-gradient-to-r from-blue-500 to-green-600">
				{/* Left Column: Information */}
				<div className="  p-8 rounded-lg shadow-lg">
					<h1 className="text-4xl font-bold text-white mb-4">
						Get in Touch With Us
					</h1>
					<p className="text-md text-white font-light">
						At Sharma Hospital, we are dedicated to providing natural healing
						through authentic Ayurvedic therapies. Whether you have a query or
						need personalized guidance, our team is here to help you on your
						journey to holistic wellness.
					</p>
				</div>
				{/* Right Column: Contact Form */}
				<div className="  p-8 rounded-lg shadow-lg">
					<h2 className="text-3xl font-bold text-white text-center mb-6">
						Contact Us
					</h2>
					<form onSubmit={handleSubmit} className="space-y-4">
						<div>
							<label
								htmlFor="name"
								className="block text-white font-semibold mb-1">
								Name
							</label>
							<input
								type="text"
								id="name"
								value={name}
								onChange={(e) => setName(e.target.value)}
								required
								className="w-full border border-gray-300 rounded-md p-2"
							/>
						</div>
						<div>
							<label
								htmlFor="phone"
								className="block text-white font-semibold mb-1">
								Phone Number
							</label>
							<input
								type="tel"
								id="phone"
								value={phone}
								onChange={(e) => setPhone(e.target.value)}
								required
								className="w-full border border-gray-300 rounded-md p-2"
							/>
						</div>
						<div>
							<label
								htmlFor="message"
								className="block text-white font-semibold mb-1">
								Message
							</label>
							<textarea
								id="message"
								value={message}
								onChange={(e) => setMessage(e.target.value)}
								required
								rows={4}
								className="w-full border border-gray-300 rounded-md p-2"></textarea>
						</div>
						<button
							type="submit"
							className="w-full bg-white text-green-600 py-2 rounded-md font-semibold hover:bg-gray-100 transition">
							Send via WhatsApp
						</button>
					</form>
				</div>
			</div>

			{/* Contact Details & Map Section */}
			<div className="max-w-7xl mx-auto space-y-8">
				{/* Contact Details */}
				<div className="bg-white rounded-lg shadow-lg p-8">
					<h2 className="text-2xl font-bold text-gray-800 mb-4">
						Get in Touch
					</h2>
					<div className="flex flex-col sm:flex-row justify-between items-center">
						<div className="flex items-center space-x-2 mb-4 sm:mb-0">
							<FiPhone className="text-green-500 text-xl" />
							<span className="text-gray-700 font-medium">
								+91 1800 889 7351
							</span>
						</div>
						<div className="flex items-center space-x-2 mb-4 sm:mb-0">
							<FiMapPin className="text-red-500 text-xl" />
							<span className="text-gray-700 font-medium">
								C8Q8+C8M Shamli Rural, Uttar Pradesh
							</span>
						</div>
						<div className="flex items-center space-x-2">
							<FiMail className="text-blue-500 text-xl" />
							<span className="text-gray-700 font-medium">
								info@shreeayurvedicclinic.com
							</span>
						</div>
					</div>
				</div>

				{/* Google Maps Embed */}
				<div className="bg-white rounded-lg shadow-lg overflow-hidden">
					<div className="w-full h-64 md:h-96">
						<iframe
							src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3474.665206741187!2d77.31323607553072!3d29.438579975234227!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjnCsDI2JzE4LjkiTiA3N8KwMTgnNTYuOSJF!5e0!3m2!1sen!2sin!4v1742647717601!5m2!1sen!2sin"
							width="100%"
							height="100%"
							style={{ border: 0 }}
							allowFullScreen
							loading="lazy"
							referrerPolicy="no-referrer-when-downgrade"></iframe>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ContactPage;
