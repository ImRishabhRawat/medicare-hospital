// components/Breadcrumb.tsx
import React from "react";
import Link from "next/link";
import { HiChevronRight } from "react-icons/hi";

export interface BreadcrumbItem {
	label: string;
	href: string;
}

interface BreadcrumbProps {
	items: BreadcrumbItem[];
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
	return (
		<nav aria-label="breadcrumb" className="bg-gray-100 px-4 lg:px-16 py-2 ">
			<ol className="flex items-center space-x-2 text-sm text-gray-700">
				{items.map((item, index) => {
					const isLast = index === items.length - 1;
					return (
						<li key={index} className="flex items-center">
							{isLast ? (
								<span className="font-medium">{item.label}</span>
							) : (
								<>
									<Link href={item.href}>
										<span className="hover:underline">{item.label}</span>
									</Link>
									<HiChevronRight className="mx-2 flex-shrink-0 text-gray-500" />
								</>
							)}
						</li>
					);
				})}
			</ol>
		</nav>
	);
};

export default Breadcrumb;
