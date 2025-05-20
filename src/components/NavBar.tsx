"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  // Lock scroll when mobile menu is open
  useEffect(() => {
    document.body.classList.toggle("overflow-hidden", isOpen);
  }, [isOpen]);

  return (
    <header className="bg-white shadow z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <span className="text-2xl font-bold text-[#0B1E4A]">H&I Construction</span>
        </Link>

        {/* Hamburger button */}
        <button
          onClick={() => setIsOpen((v) => !v)}
          className="md:hidden p-2 focus:outline-none"
          aria-label="Toggle navigation menu"
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

        {/* Menu links */}
        <nav
          id="main-navigation"
          className={`
            ${isOpen ? "block" : "hidden"}
            md:block
            transition-all duration-200 ease-out
          `}
        >
          <ul className="flex flex-col md:flex-row md:space-x-6">
            {[
              { href: "/", label: "Home" },
              { href: "/services", label: "Services" },
              { href: "/about", label: "About Us" },
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