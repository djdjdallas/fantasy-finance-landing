// components/sections/CTA.js
"use client";

import React from "react";
import { Download, ChevronRight } from "lucide-react";
import useIntersectionObserver from "../../../hooks/useIntersectionObserver";
const CTA = () => {
  const { isVisible, ref } = useIntersectionObserver();

  return (
    <section id="cta" className="py-16 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div
          ref={ref}
          className={`transition-all duration-700 transform ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Start Predicting Market Movements Today
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of traders making smart predictions on daily price
            movements, earnings events, and market milestones - all with
            blockchain-verified stakes.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <button className="flex items-center justify-center bg-green-500 px-8 py-4 rounded-lg hover:bg-green-600 transition-all transform hover:scale-105">
              <Download className="w-6 h-6 mr-2" />
              Download Now
            </button>
            <button className="flex items-center justify-center border border-green-500 text-green-500 px-8 py-4 rounded-lg hover:bg-green-500 hover:text-white transition-all">
              <ChevronRight className="w-6 h-6 mr-2" />
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
