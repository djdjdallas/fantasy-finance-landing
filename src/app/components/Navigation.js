// components/Navigation.js
"use client";

import React, { useState } from "react";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-gray-900/95 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <span className="text-xl font-bold text-green-500">Commons</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#features"
              className="text-gray-300 hover:text-green-500 transition-colors"
            >
              Features
            </a>
            <a
              href="#pricing"
              className="text-gray-300 hover:text-green-500 transition-colors"
            >
              Pricing
            </a>
            <a
              href="#security"
              className="text-gray-300 hover:text-green-500 transition-colors"
            >
              Security
            </a>
            <button className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors">
              Get Started
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-gray-300 hover:text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="w-6 h-6 flex flex-col justify-around">
              <span
                className={`block h-0.5 w-full bg-current transform transition-all duration-300 ${
                  isMenuOpen ? "rotate-45 translate-y-2.5" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-full bg-current transition-all duration-300 ${
                  isMenuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-full bg-current transform transition-all duration-300 ${
                  isMenuOpen ? "-rotate-45 -translate-y-2.5" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden transition-all duration-300 ${
          isMenuOpen ? "max-h-64" : "max-h-0"
        } overflow-hidden bg-gray-900/95 backdrop-blur-sm`}
      >
        <div className="px-4 pt-2 pb-3 space-y-1">
          <a
            href="#features"
            className="block text-gray-300 hover:text-green-500 transition-colors py-2"
          >
            Features
          </a>
          <a
            href="#pricing"
            className="block text-gray-300 hover:text-green-500 transition-colors py-2"
          >
            Pricing
          </a>
          <a
            href="#security"
            className="block text-gray-300 hover:text-green-500 transition-colors py-2"
          >
            Security
          </a>
          <button className="w-full bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors mt-4">
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
