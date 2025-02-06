import React from "react";
import Link from "next/link"; // Import Link component
import { AiOutlineMail, AiOutlineWhatsApp } from "react-icons/ai";
import { FaMapMarkerAlt } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-red-900 text-gray-300 py-8">
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
                <Link href="/" className="hover:text-neutral-400">
                  Home
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/Services" className="hover:text-neutral-400">
                  Services
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/Careers" className="hover:text-neutral-400">
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
                <a href="mailto:talentsolutions.tfs@gmail.com">
                  <AiOutlineMail className="text-2xl hover:text-neutral-400 " />
                </a>
                <span>Mail</span>
              </div>
              <div className="flex items-center space-x-3">
                <a
                  href="https://wa.me/+254722516292"
                  target="_blank"
                  rel="noreferrer "
                >
                  <AiOutlineWhatsApp className="text-2xl hover:text-neutral-400" />
                </a>
                <span>Contact</span>
              </div>
              <div className="flex items-center space-x-3">
                <FaMapMarkerAlt className="text-2xl hover:text-neutral-400" />
                <span>1st Floor, Magharibi Place, Mai Mahiu Rd,Nairobi, Kenya</span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 mt-8"></div>

        {/* Social Media & Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-4">
          <div className="flex space-x-4">
            <a
              href="https://github.com/Genevive-Mbesi"
              className="hover:text-neutral-400"
            >
              <svg
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 0c-6.627 0-12 5.373-12 12 0 5.303 3.438 9.799 8.205 11.396.6.111.82-.26.82-.577v-2.189c-3.338.725-4.039-1.514-4.039-1.514-.548-1.397-1.338-1.77-1.338-1.77-1.09-.744.082-.729.082-.729 1.205.085 1.84 1.244 1.84 1.244 1.07 1.831 2.809 1.3 3.494.996.108-.774.419-1.3.762-1.599-2.669-.303-5.467-1.335-5.467-5.93 0-1.309.47-2.381 1.24-3.219-.124-.303-.536-1.524.117-3.168 0 0 1.008-.324 3.29 1.24.957-.266 1.979-.4 2.999-.405 1.02.005 2.042.14 2.998.405 2.282-1.565 3.29-1.24 3.29-1.24.653 1.644.241 2.865.117 3.168.771.838 1.24 1.91 1.24 3.219 0 4.607-2.799 5.626-5.471 5.92.428.369.818 1.099.818 2.22v3.28c0 .318.218.694.82.577 4.768-1.597 8.205-6.093 8.205-11.396 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>

            <a
              href="https://www.linkedin.com/in/genevive-mbesi-5a5a98224"
              className="hover:text-neutral-400"
            >
              <svg
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M19 0h-14c-2.75 0-5 2.25-5 5v14c0 2.75 2.25 5 5 5h14c2.75 0 5-2.25 5-5v-14c0-2.75-2.25-5-5-5zM8.339 18.481h-2.87v-8.572h2.87v8.572zM6.904 8.632c-.916 0-1.662-.746-1.662-1.662 0-.916.746-1.662 1.662-1.662s1.662.746 1.662 1.662c0 .916-.746 1.662-1.662 1.662zM18.481 18.481h-2.87v-4.49c0-1.07-.02-2.447-1.49-2.447-1.492 0-1.72 1.163-1.72 2.367v4.57h-2.869v-8.572h2.755v1.168h.039c.383-.726 1.319-1.49 2.717-1.49 2.906 0 3.445 1.913 3.445 4.397v4.497z" />
              </svg>
            </a>
          </div>
          <p className="text-sm mt-4 md:mt-0">
            &copy; 2025 Talent Frontiers Solutions Limited. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
