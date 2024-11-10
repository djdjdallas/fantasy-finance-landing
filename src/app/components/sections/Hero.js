// components/sections/Hero.js
"use client";

import React from "react";
import useIntersectionObserver from "../../../hooks/useIntersectionObserver";
const Hero = () => {
  const { isVisible, ref } = useIntersectionObserver();

  return (
    <div className="relative pt-24 pb-8 md:pt-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-green-600/20 to-green-900/20 animate-gradient-x"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div
          ref={ref}
          className={`transition-all duration-700 transform ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Smarter Stock Market Predictions with
            <span className="text-green-500"> Commons</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Stake on real market events - from daily price movements to earnings
            predictions. Learn, compete, and earn in a blockchain-verified
            environment.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <button className="bg-green-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-600 transition-all transform hover:scale-105">
              Start Trading
            </button>
            <button className="border border-green-500 text-green-500 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-500 hover:text-white transition-all">
              View Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
