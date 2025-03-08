import React from "react";
import Link from "next/link"; // Import Link component
import { AiOutlineMail, AiOutlineWhatsApp } from "react-icons/ai";
import { FaMapMarkerAlt } from "react-icons/fa";
import Slide from "@/components/Slide";

export default function Footer() {
  return (
    <div>
      <Slide>
    <footer className="bg-red-900 text-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h2 className="text-xl font-semibold text-white mb-4">
              Vision & Mission Statement
            </h2>
            <p className="text-sm">
              <strong>Vision</strong> <br />
              Alleviating Poverty and Joblessness in Africa by providing African
              workers access to well-paying job opportunities overseas.
              <br />
              <br />
              <strong> Mission </strong> <br /> To bridge the gap between
              African workers and global employers by offering ethical,
              transparent, and comprehensive migration services.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-white mb-4">
              Quick Links
            </h2>
            <ul>
              <li className="mb-2">
                <Link href="/" >
                  Home
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/Services" >
                  Services
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/Careers">
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h2 className="text-xl font-semibold text-white mb-4">Contact</h2>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <a href="mailto:gennymbesi@gmail.com">
                  <AiOutlineMail className="text-2xl " />
                </a>
                <span>Mail</span>
              </div>
              <div className="flex items-center space-x-3">
                <a
                  href="https://wa.me/+254740528336"
                  target="_blank"
                  rel="noreferrer "
                >
                  <AiOutlineWhatsApp className="text-2xl " />
                </a>
                <span>Contact</span>
              </div>
              <div className="flex items-center space-x-3">
                <FaMapMarkerAlt className="text-2xl" />
                <span>Nairobi, Kenya</span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t  mt-8"></div>

        {/* Social Media & Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-4">
          <div className="flex space-x-4">
            <a
              href="https://x.com/talentfrontiers?t=cYWWjFxRK7K54ZIs8LUcXw&s=08"
              className="hover:text-neutral-400"
            >
              <svg
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
               <path d="M23 3a10.9 10.9 0 0 1-3.14.86 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.7 11.7 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/>

              </svg>
            </a>

            <a
              href="https://www.instagram.com/talentfrontiers?igsh=bxV5OWN6bxJucmNn"
              className="hover:text-neutral-400"
            >
              <svg
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9A5.5 5.5 0 0 1 16.5 22h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2zm0-2A7.5 7.5 0 0 0 0 7.5v9A7.5 7.5 0 0 0 7.5 24h9A7.5 7.5 0 0 0 24 16.5v-9A7.5 7.5 0 0 0 16.5 0zM12 6.5a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11zm0 9a3.5 3.5 0 1 1 0-7 3.5 3.5 0 0 1 0 7zm7.5-11a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z"/>
              </svg>
            </a>
            <a
              href="https://www.tiktok.com/@talentfrontiers?"
              className="hover:text-neutral-400"
            >
              <svg
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M18.5 5.5c-2.1-.2-3.8-1.2-5-3h-3v13a2.5 2.5 0 1 1-2-2.45V9.5a5 5 0 1 0 6 4.95V7.8c1.3 1 2.9 1.6 4.7 1.7V7a6 6 0 0 1-2.7-1.5z"/>

              </svg>
            </a>
          </div>
          <p className="text-sm mt-4 md:mt-0">
            &copy; 2025 Talent Frontiers Solutions Limited. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
    </Slide>
    </div>
  );
}
