"use client";
import React, { useState } from "react";
import Link from "next/link";
import Logo from "@/app/components/Images/tfslogo.png";
import Image from "next/image";
import Slide from "@/components/Slide"

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
<Slide>
    <nav className="bg-white text-red-700 border-b pt-11 border-gray-200 h-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" aria-label="Home">
              <Image
                src={Logo}
                alt="Cover image"
                width={200}
                height={100}
                objectFit="cover"
                className="absolute left-10 top-5 z-20 mb-10"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-4">
            <Link
              href="/"
              className="hover:bg-gray-100 px-3 py-2 rounded-md text-sm font-medium transition"
              aria-label="Navigate to Home"
            >
              WHO WE ARE
            </Link>
            <Link
              href="/Services"
              className="hover:bg-gray-100 px-3 py-2 rounded-md text-sm font-medium transition"
              aria-label="View Projects"
            >
              SERVICES
            </Link>
            <Link
              href="/Careers"
              className="hover:bg-gray-100 px-3 py-2 rounded-md text-sm font-medium transition"
              aria-label="Contact Page"
            >
              CAREERS
            </Link>
            <Link
              href="/Contact"
              className="hover:bg-gray-100 px-3 py-2 rounded-md text-sm font-medium transition"
              aria-label="View Projects"
            >
              CONTACT US
            </Link>
            <Link
              href="/Location"
              className="hover:bg-gray-100 px-3 py-2 rounded-md text-sm font-medium transition"
              aria-label="View Projects"
            >
              LOCATION
            </Link>
            
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center z-20 justify-end ml-auto">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-red-800 focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-50 w-fit ml-auto right-0  z-20 absolute top-24 rounded-md shadow-md">
          <Link
            href="/"
            className="block px-4 py-2 hover:bg-gray-100 text-sm font-medium transition"
            aria-label="Navigate to Home"
          >
            WHO WE ARE
          </Link>
          <Link
            href="/Services"
            className="block px-4 py-2 hover:bg-gray-100 text-sm font-medium transition"
            aria-label="View Projects"
          >
            SERVICES
          </Link>
          <Link
            href="/Careers"
            className="block px-4 py-2 hover:bg-gray-100 text-sm font-medium transition"
            aria-label="Contact Page"
          >
            CAREERS
          </Link>
          <Link
            href="/Contact"
            className="block px-4 py-2 hover:bg-gray-100 text-sm font-medium transition"
            aria-label="Contact Page"
          >
            CONTACT US
          </Link>
          <Link
            href="/Location"
            className="block px-4 py-2 hover:bg-gray-100 text-sm font-medium transition"
            aria-label="Contact Page"
          >
            LOCATION
          </Link>
        </div>
      )}
    </nav>
    </Slide>
  );
};

export default Navbar;
