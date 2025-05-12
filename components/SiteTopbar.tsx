"use client";

import Link from "next/link";

const SiteTopbar: React.FC = () => {
	return (
		<div id="site-topbar" className="bg-blue-100 border-b border-gray-300">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
				{/* Welcome Text */}
				<div className="py-2 flex-grow text-center md:text-left">
					<span className="text-sm md:text-md text-gray-600">
						Welcome to Sharma Hospital
					</span>
				</div>
				{/* Desktop Menu */}
				<div className="hidden md:flex items-center">
					<ul id="menu-top-menu" className="flex items-center">
						<li className="menu-item">
							<Link href="/about" className="text-gray-800 hover:text-black">
								About Us
							</Link>
						</li>
						<li className="mx-2">
							<div className="h-4 border-l border-gray-300" />
						</li>
						<li className="menu-item">
							<Link href="/services" className="text-gray-800 hover:text-black">
								Services
							</Link>
						</li>
						<li className="mx-2">
							<div className="h-4 border-l border-gray-300" />
						</li>
						<li className="menu-item">
							<Link href="/doctors" className="text-gray-800 hover:text-black">
								Team
							</Link>
						</li>
						<li className="mx-2">
							<div className="h-4 border-l border-gray-300" />
						</li>
						<li className="menu-item">
							<Link href="/contact" className="text-gray-800 hover:text-black">
								Contact
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default SiteTopbar;
