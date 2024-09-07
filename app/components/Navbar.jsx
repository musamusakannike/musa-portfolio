"use client";
import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-transparent w-full z-10 border-b border-gray-300 sticky">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <a href="/" className="text-2xl font-bold text-gray-800">
              Musa Musa K
            </a>
          </div>
          <div className="hidden lg:flex space-x-4">
            <a
              href="#"
              className="text-gray-800 hover:text-gray-600 px-3 py-2 rounded-md text-sm font-medium"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-gray-800 hover:text-gray-600 px-3 py-2 rounded-md text-sm font-medium"
            >
              About Me
            </a>
            <a
              href="#projects"
              className="text-gray-800 hover:text-gray-600 px-3 py-2 rounded-md text-sm font-medium"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="rounded-full px-5 py-2 text-lg bg-gray-950 hover:bg-gray-800 text-white"
            >
              <FontAwesomeIcon icon={faPhone} /> Contact
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-800 hover:text-gray-600 focus:outline-none"
            >
              {isOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="lg:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="#"
              className="block text-gray-800 hover:text-gray-600 px-3 py-2 rounded-md text-base font-medium"
            >
              Home
            </a>
            <a
              href="#about"
              className="block text-gray-800 hover:text-gray-600 px-3 py-2 rounded-md text-base font-medium"
            >
              About Me
            </a>
            <a
              href="#projects"
              className="block text-gray-800 hover:text-gray-600 px-3 py-2 rounded-md text-base font-medium"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="rounded-full px-5 py-2 text-lg bg-gray-950 hover:bg-gray-800 text-white mt-2"
            >
              <FontAwesomeIcon icon={faPhone} />
              Contact Me
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
