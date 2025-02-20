"use client";

import Image from "next/image";
import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import logo from '../../images/Group 15.png'
export default function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-white to-gray-100 shadow-md py-4 px-6 flex justify-between items-center">
      <div className="text-2xl font-bold text-gray-900">

        <Image
                className=""
                src={logo}
                alt="Cash GIF"
              />
      </div>
      <nav className="hidden md:flex space-x-6 items-center">
        <a href="#" className="text-gray-900 hover:text-green-500 transition border border-black rounded-full px-4 py-1">
          Home
        </a>
        <div className="relative">
          <button
            className="flex items-center text-gray-900 hover:text-green-500 transition border border-black rounded-full px-4 py-1"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            <span>Services</span>
            <FaChevronDown className="ml-1 text-sm" />
          </button>
          {isDropdownOpen && (
            <div className="absolute left-0 mt-2 bg-white shadow-lg rounded-md py-2 w-36">
              <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Web Design</a>
              <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">SEO</a>
            </div>
          )}
        </div>
        <a href="#" className="text-gray-900 hover:text-green-500 transition border border-black rounded-full px-4 py-1">
          About Us
        </a>
      </nav>
      <a href="#" className="bg-[#171D3F] text-white px-4 py-2 hover:bg-blue-800 transition rounded-full px-4 py-1">
        Contact Us >
      </a>
      <div className="md:hidden">
        <button className="text-gray-900 focus:outline-none">☰</button>
      </div>
    </header>
  );
}
