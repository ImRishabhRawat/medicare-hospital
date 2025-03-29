// components/Footer.tsx
import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
	FaFacebookF,
	FaInstagram,
	FaTwitter,
	FaLinkedinIn,
} from "react-icons/fa";

const Footer: React.FC = () => {
	return (
		<footer className="bg-gray-900 text-gray-300 py-12">
			<div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
				{/* Branding Section */}
				<div>
					<h2 className="text-2xl font-bold text-white">
						Shree Ganesh Ayurvedic Clinic
					</h2>
					<p className="mt-4 text-sm">
						Shree Ganesh Ayurvedic Clinic provides world-class healthcare
						services. Our team of experienced doctors and staff ensure you
						receive compassionate care.
					</p>
					<div className="flex space-x-4 mt-4">
						<Link href="https://facebook.com">
							<FaFacebookF className="hover:text-white transition" />
						</Link>
						<Link href="https://twitter.com">
							<FaTwitter className="hover:text-white transition" />
						</Link>
						<Link href="https://instagram.com">
							<FaInstagram className="hover:text-white transition" />
						</Link>
						<Link href="https://linkedin.com">
							<FaLinkedinIn className="hover:text-white transition" />
						</Link>
					</div>
				</div>

				{/* Quick Links Section */}
				<div>
					<h3 className="text-xl font-semibold text-white">Quick Links</h3>
					<ul className="mt-4 space-y-2">
						<li>
							<Link href="/">Home</Link>
						</li>
						<li>
							<Link href="/about">About Us</Link>
						</li>
						<li>
							<Link href="/services">Services</Link>
						</li>
						<li>
							<Link href="/doctors">Doctors</Link>
						</li>
						<li>
							<Link href="/contact">Contact</Link>
						</li>
					</ul>
				</div>

				{/* Photo Gallery Section */}
				<div>
					<h3 className="text-xl font-semibold text-white">Gallery</h3>
					<div className="grid grid-cols-2 gap-2 mt-4 ">
						<div className="relative h-20 w-20 overflow-hidden rounded">
							<Image
								src="/gallery1.jpg"
								alt="Gallery Image 1"
								fill
								unoptimized={true}
								className="object-cover"
							/>
						</div>
						<div className="relative h-20 w-20 overflow-hidden rounded">
							<Image
								src="/gallery2.jpg"
								alt="Gallery Image 2"
								fill
								unoptimized={true}
								className="object-cover"
							/>
						</div>
						<div className="relative h-20 w-20 overflow-hidden rounded">
							<Image
								src="/gallery3.jpg"
								alt="Gallery Image 3"
								fill
								unoptimized={true}
								className="object-cover"
							/>
						</div>
						<div className="relative h-20 w-20 overflow-hidden rounded">
							<Image
								src="/gallery4.jpg"
								alt="Gallery Image 4"
								fill
								unoptimized={true}
								className="object-cover"
							/>
						</div>
					</div>
				</div>
			</div>

			{/* Footer Bottom */}
			<div className="border-t border-gray-800 mt-8 pt-4 text-center text-sm text-gray-500">
				&copy; {new Date().getFullYear()} Shree Ganesh Ayurvedic Clinic. All
				rights reserved.
			</div>
		</footer>
	);
};

export default Footer;
