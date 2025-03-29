// components/Header.tsx
"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { HiOutlineMenu } from "react-icons/hi";
import {
	FaFacebookF,
	FaLinkedinIn,
	FaInstagram,
	FaYoutube,
} from "react-icons/fa";
import { poppins } from "../lib/fonts"; // adjust path as necessary

const Header: React.FC = () => {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
	const [discoverOpen, setDiscoverOpen] = useState(false);
	const discoverRef = useRef<HTMLDivElement>(null);

	const toggleMobileMenu = () => {
		setMobileMenuOpen((prev) => !prev);
	};

	const toggleDiscover = () => {
		setDiscoverOpen((prev) => !prev);
	};

	// Close the Discover dropdown when clicking outside
	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (
				discoverRef.current &&
				!discoverRef.current.contains(event.target as Node)
			) {
				setDiscoverOpen(false);
			}
		};

		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, []);

	return (
		<header className="bg-white shadow">
			{/* Main header container */}
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
				{/* Mobile Header: Only visible on small screens */}
				<div className="flex items-center justify-between md:hidden">
					{/* Logo */}
					<div className="header-brand">
						<Link href="/">
							{/* <Image
								src="/uploads/image/eBiaCQs2-geims-small-logo.png"
								alt="Shree Ganesh Ayurvedic Clinic"
								width={40}
								height={40}
								 unoptimized={true}
								className="h-10"
							/> */}
							<h2 className="text-2xl font-extrabold">
								Shree Ganesh <br /> Ayurvedic Clinic
							</h2>
						</Link>
					</div>
					{/* Hamburger Icon */}
					<button
						onClick={toggleMobileMenu}
						className="text-gray-800 hover:text-black focus:outline-none">
						<HiOutlineMenu size={24} />
					</button>
				</div>

				{/* Desktop Header: Visible on md and larger */}
				<div className="hidden md:flex items-center justify-between">
					{/* Left Section: Logo + Discover dropdown */}
					<div className="flex items-center space-x-4">
						<div className="header-brand">
							<Link href="/">
								{/* <Image
									src="/uploads/image/eBiaCQs2-geims-small-logo.png"
									alt="Shree Ganesh Ayurvedic Clinic"
									width={40}
									height={40}
									 unoptimized={true}
									className="h-10"
								/> */}
								<h2 className="text-3xl font-extrabold md:mr-4">
									Shree Ganesh Ayurvedic Clinic
								</h2>
							</Link>
						</div>
						{/* Discover Dropdown */}
						<div className="relative" ref={discoverRef}>
							<button
								onClick={toggleDiscover}
								className={`flex items-center text-gray-800 hover:text-blue-500 focus:outline-none ${poppins.className}`}>
								<HiOutlineMenu size={24} className="mr-1" />
								<span>Discover</span>
							</button>
							{discoverOpen && (
								<div className="absolute left-0 mt-2 w-40 bg-white shadow-lg rounded transition-opacity duration-300 z-10">
									<ul className="py-2">
										<li>
											<Link
												href="/about"
												className="block px-4 py-2 text-gray-800 hover:bg-gray-100 hover:text-black">
												About Us
											</Link>
										</li>
										<li>
											<Link
												href="/doctors"
												className="block px-4 py-2 text-gray-800 hover:bg-gray-100 hover:text-black">
												Doctor
											</Link>
										</li>
										<li>
											<Link
												href="/services"
												className="block px-4 py-2 text-gray-800 hover:bg-gray-100 hover:text-black">
												Services
											</Link>
										</li>
										<li>
											<Link
												href="/contact"
												className="block px-4 py-2 text-gray-800 hover:bg-gray-100 hover:text-black">
												Contact
											</Link>
										</li>
									</ul>
								</div>
							)}
						</div>
					</div>

					{/* Right Section: Need Help info and Social Icons */}
					<div className="flex items-center space-x-6">
						<div
							className={`header-info-text text-sm text-gray-700 border-l border-r border-gray-300 px-2 ${poppins.className}`}>
							Need Help? 24x7{" "}
							<strong>
								<Link href="tel:+91 99972 07761" className="hover:text-black">
									+91 99972 07761
								</Link>
							</strong>
						</div>
						<div className="social-icons flex space-x-3">
							<Link
								href="https://www.facebook.com/graphicerahospital"
								target="_blank"
								className="text-gray-800 hover:text-black">
								<FaFacebookF size={18} />
							</Link>
							<Link
								href="https://www.linkedin.com/company/geimshospital/"
								target="_blank"
								className="text-gray-800 hover:text-black">
								<FaLinkedinIn size={18} />
							</Link>
							<Link
								href="https://www.instagram.com/graphicerahospital/"
								target="_blank"
								className="text-gray-800 hover:text-black">
								<FaInstagram size={18} />
							</Link>
							<Link
								href="https://www.youtube.com/@graphicerahospital"
								target="_blank"
								className="text-gray-800 hover:text-black">
								<FaYoutube size={18} />
							</Link>
						</div>
					</div>
				</div>
			</div>

			{/* Mobile Menu Overlay */}
			{mobileMenuOpen && (
				<div className="md:hidden bg-white shadow">
					<ul className="py-4">
						<li className="px-4 py-2 border-b border-gray-200">
							<Link
								href="/about"
								onClick={() => setMobileMenuOpen(false)}
								className="block text-gray-800 hover:text-black">
								About Us
							</Link>
						</li>
						<li className="px-4 py-2 border-b border-gray-200">
							<Link
								href="/Doctors"
								onClick={() => setMobileMenuOpen(false)}
								className="block text-gray-800 hover:text-black">
								Doctor
							</Link>
						</li>
						<li className="px-4 py-2 border-b border-gray-200">
							<Link
								href="/services"
								onClick={() => setMobileMenuOpen(false)}
								className="block text-gray-800 hover:text-black">
								Services
							</Link>
						</li>
						<li className="px-4 py-2">
							<Link
								href="/contact"
								onClick={() => setMobileMenuOpen(false)}
								className="block text-gray-800 hover:text-black">
								Contact
							</Link>
						</li>
					</ul>
				</div>
			)}
		</header>
	);
};

export default Header;
