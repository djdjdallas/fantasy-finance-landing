// components/sections/Features.js
"use client";

import React from "react";
import {
  TrendingUp,
  Shield,
  DollarSign,
  Zap,
  Users,
  Target,
} from "lucide-react";
import useIntersectionObserver from "../../../hooks/useIntersectionObserver";
const Features = () => {
  const { isVisible, ref } = useIntersectionObserver();

  const features = [
    {
      title: "Real-Time Trading Simulation",
      description:
        "Practice with $100,000 virtual currency on your favorite stocks",
      icon: <TrendingUp className="w-6 h-6 text-green-500" />,
    },
    {
      title: "Dynamic Staking Options",
      description:
        "Stake on diverse market events: daily price movements, earnings forecasts, trading volume milestones, and more - all secured by blockchain.",
      icon: <TrendingUp className="w-6 h-6 text-green-500" />,
    },
    {
      title: "Real-Time Market Integration",
      description:
        "Practice with $100,000 virtual currency while accessing live market data to make informed staking decisions.",
      icon: <DollarSign className="w-6 h-6 text-green-500" />,
    },
    {
      title: "Daily Staking Pools",
      description:
        "Join daily group pools with other traders and share rewards when your predictions are correct.",
      icon: <Users className="w-6 h-6 text-green-500" />,
    },
    {
      title: "Event-Based Predictions",
      description:
        "Stake on quarterly earnings, stock splits, market sentiment, and other key financial events.",
      icon: <Target className="w-6 h-6 text-green-500" />,
    },
    {
      title: "Group Staking",
      description:
        "Join daily group stakes on market movements with blockchain verification",
      icon: <DollarSign className="w-6 h-6 text-green-500" />,
    },
    {
      title: "Blockchain Security",
      description:
        "Every stake and transaction is secured and verified on the blockchain",
      icon: <Shield className="w-6 h-6 text-green-500" />,
    },
    {
      title: "Pro Trading Tools",
      description:
        "Access advanced analytics and trading tools used by professionals",
      icon: <Zap className="w-6 h-6 text-green-500" />,
    },
  ];

  return (
    <section id="features" className="py-16 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`transition-all duration-700 transform ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Everything You Need to Succeed
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-black/50 p-6 rounded-lg hover:bg-gray-800 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl border border-gray-800"
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
