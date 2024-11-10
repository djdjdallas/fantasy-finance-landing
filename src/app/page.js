// app/page.js
"use client";

import Navigation from "./components/Navigation";
import Hero from "./components/sections/Hero";
import Features from "./components/sections/Features";
import Testimonials from "./components/sections/Testimonials";
import Security from "./components/sections/Security";
import CTA from "./components/sections/CTA";
import Footer from "./components/sections/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      <Hero />
      <Features />

      <Testimonials />
      <Security />
      <CTA />
      <Footer />
    </div>
  );
}
