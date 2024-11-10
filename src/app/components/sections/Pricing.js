// components/sections/Pricing.js
"use client";

import React from "react";
import { Check } from "lucide-react";
import useIntersectionObserver from "../../../hooks/useIntersectionObserver";
const Pricing = () => {
  const { isVisible, ref } = useIntersectionObserver();

  const pricingPlans = [
    {
      name: "Free",
      price: "0",
      features: [
        "Virtual $100,000 trading account",
        "Basic market analytics",
        "Community access",
        "Educational content",
      ],
      buttonText: "Start Free",
      popular: false,
    },
    {
      name: "Pro",
      price: "19.99",
      features: [
        "Group staking access",
        "Advanced analytics",
        "Priority support",
        "No commission fees",
        "Extended trading hours",
        "Professional tools",
      ],
      buttonText: "Go Pro",
      popular: true,
    },
    {
      name: "Enterprise",
      price: "49.99",
      features: [
        "All Pro features",
        "API access",
        "Custom analytics",
        "Dedicated account manager",
        "Team collaboration tools",
        "Custom blockchain solutions",
      ],
      buttonText: "Contact Sales",
      popular: false,
    },
  ];

  return (
    <section id="pricing" className="py-16 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`transition-all duration-700 transform ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Choose Your Trading Journey
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-gray-900 rounded-xl overflow-hidden transition-all duration-300 transform hover:-translate-y-2 ${
                  plan.popular
                    ? "border-2 border-green-500 scale-105"
                    : "border border-gray-800"
                }`}
              >
                {plan.popular && (
                  <div className="absolute top-0 right-0 bg-green-500 text-white px-4 py-1 rounded-bl-lg">
                    Most Popular
                  </div>
                )}
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
                  <div className="mb-6">
                    <span className="text-4xl font-bold">${plan.price}</span>
                    <span className="text-gray-400">/month</span>
                  </div>
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center">
                        <Check className="w-5 h-5 text-green-500 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button
                    className={`w-full py-3 rounded-lg font-semibold transition-colors ${
                      plan.popular
                        ? "bg-green-500 hover:bg-green-600"
                        : "bg-gray-800 hover:bg-gray-700"
                    }`}
                  >
                    {plan.buttonText}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
