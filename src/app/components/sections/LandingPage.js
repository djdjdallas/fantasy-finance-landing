import React, { useState, useEffect } from "react";
import {
  TrendingUp,
  Shield,
  BookOpen,
  Award,
  Download,
  DollarSign,
  Zap,
  ChevronRight,
} from "lucide-react";

const LandingPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [isVisible, setIsVisible] = useState({});

  // Auto-advance testimonials every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  // Intersection Observer for fade-in animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({
              ...prev,
              [entry.target.id]: true,
            }));
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll("[data-animate]").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      title: "Real-Time Trading Simulation",
      description:
        "Practice with $100,000 virtual currency on your favorite stocks",
      icon: <TrendingUp className="w-6 h-6 text-indigo-500" />,
    },
    {
      title: "Group Staking",
      description:
        "Join daily group stakes on market movements with blockchain verification",
      icon: <DollarSign className="w-6 h-6 text-indigo-500" />,
    },
    {
      title: "Blockchain Security",
      description:
        "Every stake and transaction is secured and verified on the blockchain",
      icon: <Shield className="w-6 h-6 text-indigo-500" />,
    },
    {
      title: "Pro Trading Tools",
      description:
        "Access advanced analytics and trading tools used by professionals",
      icon: <Zap className="w-6 h-6 text-indigo-500" />,
    },
  ];

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

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Day Trader",
      image: "/api/placeholder/64/64",
      content:
        "Commons helped me transition from simulation to real staking seamlessly. The blockchain verification gives me complete confidence in my transactions.",
    },
    {
      name: "Michael Chen",
      role: "Investment Analyst",
      image: "/api/placeholder/64/64",
      content:
        "The combination of virtual trading and group staking makes Commons unique. I can test strategies risk-free before applying them with real money.",
    },
    {
      name: "Emma Davis",
      role: "Retail Investor",
      image: "/api/placeholder/64/64",
      content:
        "As a beginner, the educational resources and practice environment were invaluable. Now I'm confidently participating in group stakes.",
    },
  ];

  // Animation classes
  const fadeInUp = "transition-all duration-700 transform";
  const fadeInUpVisible = "translate-y-0 opacity-100";
  const fadeInUpHidden = "translate-y-10 opacity-0";

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-gray-900/95 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <span className="text-xl font-bold text-indigo-500">Commons</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a
                href="#features"
                className="text-gray-300 hover:text-indigo-400 transition-colors"
              >
                Features
              </a>
              <a
                href="#pricing"
                className="text-gray-300 hover:text-indigo-400 transition-colors"
              >
                Pricing
              </a>
              <a
                href="#security"
                className="text-gray-300 hover:text-indigo-400 transition-colors"
              >
                Security
              </a>
              <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors">
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
              className="block text-gray-300 hover:text-indigo-400 transition-colors py-2"
            >
              Features
            </a>
            <a
              href="#pricing"
              className="block text-gray-300 hover:text-indigo-400 transition-colors py-2"
            >
              Pricing
            </a>
            <a
              href="#security"
              className="block text-gray-300 hover:text-indigo-400 transition-colors py-2"
            >
              Security
            </a>
            <button className="w-full bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors mt-4">
              Get Started
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative pt-24 pb-8 md:pt-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-purple-600/20 animate-gradient-x"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div
            className={`${fadeInUp} ${
              isVisible["hero"] ? fadeInUpVisible : fadeInUpHidden
            }`}
            id="hero"
            data-animate
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Trade Smarter with
              <span className="text-indigo-400"> Commons</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              From virtual practice to real-money group staking - all secured by
              blockchain technology.
            </p>
            <div className="flex flex-col md:flex-row justify-center gap-4">
              <button className="bg-indigo-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-indigo-700 transition-all transform hover:scale-105">
                Start Trading
              </button>
              <button className="border border-indigo-400 text-indigo-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-indigo-400 hover:text-white transition-all">
                View Demo
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div id="features" className="py-16 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`${fadeInUp} ${
              isVisible["features"] ? fadeInUpVisible : fadeInUpHidden
            }`}
            id="features"
            data-animate
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Everything You Need to Succeed
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-gray-800/50 p-6 rounded-lg hover:bg-indigo-900/30 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl"
                >
                  <div className="mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Continue with remaining sections... */}
    </div>
  );
};

export default LandingPage;
