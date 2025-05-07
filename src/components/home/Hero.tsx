"use client";

import { Button } from "@/components/common/Button";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

export const Hero: React.FC = () => {
  return (
    <section className="relative h-screen flex items-center justify-center bg-hero-gradient text-white overflow-hidden parallax-bg" style={{ backgroundImage: "url(/images/hero-bg.jpg)" }}>
      <video
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover opacity-20"
      >
        <source src="/videos/hero-bg.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-primary-dark opacity-50"></div>
      <div className="container mx-auto px-4 relative z-10 text-center">
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight animate-fade-in">
          Revolutionize Education with <span className="text-accent">SchoolSync</span>
        </h1>
        <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: "0.2s" }}>
          Empower schools with a cutting-edge platform for seamless management, engagement, and analytics.
        </p>
        <div className="flex justify-center space-x-6 animate-fade-in" style={{ animationDelay: "0.4s" }}>
          <Link href="/register">
            <Button className="bg-accent hover:bg-accent-light text-lg px-10 py-4 flex items-center animate-pulse-glow">
              Start Free Trial <FaArrowRight className="ml-2" />
            </Button>
          </Link>
          <Link href="/login">
            <Button variant="secondary" className="border border-accent hover:bg-accent-light hover:text-primary-dark text-lg px-10 py-4">
              Login
            </Button>
          </Link>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-primary-dark to-transparent animate-fade-in"></div>
    </section>
  );
};