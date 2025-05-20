"use client";

import { useState } from "react";
import Link from "next/link";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo / Brand */}
        <Link href="/" className="text-2xl font-bold text-[#0B1E4A]">
          H&I Construction
        </Link>

        {/* Hamburger on mobile */}
        <button
          onClick={() => setIsOpen(v => !v)}
          className="md:hidden p-2 focus:outline-none"
          aria-label="Toggle menu"
          aria-expanded={isOpen}
          aria-controls="main-navigation"
        >
          <svg
            className="w-6 h-6 text-gray-800"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {/* Links */}
        <nav
          id="main-navigation"
          className={`${isOpen ? "block" : "hidden"} md:block`}
        >
          <ul className="flex flex-col md:flex-row md:space-x-6">
            {[
              { href: "/", label: "Home" },
              { href: "/services", label: "Services" },
              { href: "/about-us", label: "About Us" },
              { href: "/contact", label: "Contact" },
            ].map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="block px-4 py-2 text-gray-800 hover:text-[#0B1E4A]"
                  onClick={() => setIsOpen(false)}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}