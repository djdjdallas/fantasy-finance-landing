// components/sections/Testimonials.js
import React, { useState, useEffect } from "react";
import Image from "next/image";

const Testimonials = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const testimonials = [
    {
      name: "Michael Chen",
      role: "Investment Analyst",
      image: "/images/testimonial-3.jpg",
      content:
        "Using Commons has transformed how I approach market predictions. The ability to stake on specific earnings events and daily price movements gives me a practical way to apply my analysis skills.",
    },
    {
      name: "Amira Hassan",
      role: "Fintech Developer",
      image: "/images/testimonial-2.jpg",
      content:
        "The blockchain verification system adds a level of transparency I've never seen before. Being able to track all predictions and outcomes on-chain makes this platform truly unique.",
    },
    {
      name: "Sarah Johnson",
      role: "Portfolio Manager",
      image: "/images/testimonial-1.jpg",
      content:
        "Commons has revolutionized how I engage with market predictions. The diverse staking options, from earnings calls to price movements, keep me constantly learning and engaged.",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById("testimonials-section");
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="testimonials-section" className="py-16 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`transition-all duration-700 transform ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
            Trusted by Traders Worldwide
          </h2>
          <div className="relative">
            <div className="relative h-[300px] overflow-hidden">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className={`absolute top-0 left-0 w-full transition-all duration-500 transform ${
                    index === activeTestimonial
                      ? "translate-x-0 opacity-100"
                      : index < activeTestimonial
                      ? "-translate-x-full opacity-0"
                      : "translate-x-full opacity-0"
                  }`}
                >
                  <div className="max-w-2xl mx-auto text-center">
                    <div className="w-16 h-16 relative mx-auto mb-4">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        fill
                        className="rounded-full border-2 border-green-500 object-cover"
                      />
                    </div>
                    <p className="text-xl text-gray-300 mb-6">
                      "{testimonial.content}"
                    </p>
                    <h4 className="font-semibold text-white">
                      {testimonial.name}
                    </h4>
                    <p className="text-green-500">{testimonial.role}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === activeTestimonial
                      ? "bg-green-500 w-6"
                      : "bg-gray-600"
                  }`}
                  onClick={() => setActiveTestimonial(index)}
                >
                  <span className="sr-only">Testimonial {index + 1}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
