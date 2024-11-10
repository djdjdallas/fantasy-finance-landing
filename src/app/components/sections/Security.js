// components/sections/Security.js
"use client";

import React from "react";
import { Shield } from "lucide-react";
import useIntersectionObserver from "../../../hooks/useIntersectionObserver";
const Security = () => {
  const { isVisible, ref } = useIntersectionObserver();

  const securityFeatures = [
    "Multi-factor authentication",
    "Cold storage for digital assets",
    "Regular security audits",
    "24/7 fraud monitoring",
    "Insured trading accounts",
    "Transparent blockchain records",
  ];

  return (
    <section id="security" className="py-16 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`transition-all duration-700 transform ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Bank-Grade Security with Blockchain Technology
              </h2>
              <p className="text-gray-300 text-lg mb-8">
                Your funds and transactions are protected by state-of-the-art
                security measures and blockchain verification.
              </p>
              <ul className="space-y-4">
                {securityFeatures.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <Shield className="w-5 h-5 text-green-500 mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-green-900/10 rounded-lg"></div>
              <img
                src="/images/security-key.jpg"
                alt="Security Features"
                className="rounded-lg shadow-2xl relative z-10"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Security;
