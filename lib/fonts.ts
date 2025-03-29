// lib/fonts.ts
import { Inter, Poppins } from "next/font/google";

export const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
export const poppins = Poppins({ subsets: ["latin"], weight: "600", variable: "--font-poppins" });
