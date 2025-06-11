"use client";

import Link from 'next/link';
import { useState } from 'react';

// Simple SVG Logo Placeholder
const LogoPlaceholder = () => (
  <svg width="40" height="40" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <rect width="100" height="100" rx="10" fill="#E2E8F0"/> {/* Lighter gray background for placeholder */}
    <path d="M20 80L20 20L50 20L50 50L80 50L80 80L20 80Z" fill="#4A5568"/> {/* Dark gray path */}
    <circle cx="65" cy="35" r="10" fill="#A0AEC0"/> {/* Darker gray accent */}
  </svg>
);

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/awards", label: "Awards" },
    { href: "/contact", label: "Contact" },
  ];
  return (
    <header className="bg-white text-gray-800 border-b border-gray-100"> {/* Light background, dark text, bottom border */}
      <nav className="container mx-auto flex justify-between items-center p-5"> {/* Increased padding */}
        <Link href="/" aria-label="Blueprint by Dilip homepage" className="flex items-center space-x-3 text-2xl font-bold text-gray-800 hover:text-gray-600 transition-colors"> {/* Hover to blue */}
          <LogoPlaceholder />
          <span>Blueprint by Dilip</span>
        </Link>
        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-6"> {/* Increased spacing between nav items */}
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="text-gray-800 hover:text-gray-600 transition-colors py-2">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
            aria-expanded={isMobileMenuOpen}
            className="text-gray-800 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500 p-2 rounded-md"
          >
            {isMobileMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-0 left-0 w-full min-h-screen bg-white z-50 flex flex-col items-center justify-center shadow-xl">
          <div className="absolute top-5 right-5">
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              aria-label="Close mobile menu"
              className="text-gray-800 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500 p-2 rounded-md"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <ul className="flex flex-col items-center space-y-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link 
                  href={link.href} 
                  className="text-2xl text-gray-800 hover:text-gray-600 transition-colors py-2"
                  onClick={() => setIsMobileMenuOpen(false)} // Close menu on link click
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
