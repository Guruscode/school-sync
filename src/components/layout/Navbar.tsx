"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/common/Button";
import { FaChevronDown } from "react-icons/fa";

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [featuresOpen, setFeaturesOpen] = useState(false);
  const [usersOpen, setUsersOpen] = useState(false);

  return (
    <nav className="bg-primary-dark text-white sticky top-0 z-50 shadow-lg glassmorphism">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          {/* <img src="/images/logo.png" alt="SchoolSync Logo" className="h-10 mr-3" /> */}
          <span className="text-2xl font-extrabold">SchoolSync</span>
        </Link>
        <div className="hidden md:flex space-x-8 items-center">
          <div className="relative group">
            <button
              onMouseEnter={() => setFeaturesOpen(true)}
              onMouseLeave={() => setFeaturesOpen(false)}
              className="flex items-center hover:text-accent transition-colors"
            >
              Features <FaChevronDown className="ml-2" />
            </button>
            <div
              className={`absolute top-12 left-0 bg-white text-primary-dark rounded-xl shadow-2xl p-6 w-[600px] glassmorphism transition-opacity duration-300 ${
                featuresOpen ? "opacity-100" : "opacity-0 pointer-events-none"
              }`}
              onMouseEnter={() => setFeaturesOpen(true)}
              onMouseLeave={() => setFeaturesOpen(false)}
            >
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h4 className="text-lg font-semibold mb-2">Core Features</h4>
                  <Link href="#features" className="block py-1 hover:text-accent">Student Management</Link>
                  <Link href="#features" className="block py-1 hover:text-accent">Attendance Tracking</Link>
                  <Link href="#features" className="block py-1 hover:text-accent">Parent Portal</Link>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2">Advanced Tools</h4>
                  <Link href="#features" className="block py-1 hover:text-accent">Analytics Dashboard</Link>
                  <Link href="#features" className="block py-1 hover:text-accent">Financial Management</Link>
                  <Link href="#features" className="block py-1 hover:text-accent">Mobile Apps</Link>
                </div>
              </div>
            </div>
          </div>
          <div className="relative group">
            <button
              onMouseEnter={() => setUsersOpen(true)}
              onMouseLeave={() => setUsersOpen(false)}
              className="flex items-center hover:text-accent transition-colors"
            >
              For Users <FaChevronDown className="ml-2" />
            </button>
            <div
              className={`absolute top-12 left-0 bg-white text-primary-dark rounded-xl shadow-2xl p-6 w-48 glassmorphism transition-opacity duration-300 ${
                usersOpen ? "opacity-100" : "opacity-0 pointer-events-none"
              }`}
              onMouseEnter={() => setUsersOpen(true)}
              onMouseLeave={() => setUsersOpen(false)}
            >
              <Link href="/admin" className="block py-1 hover:text-accent">Administrators</Link>
              <Link href="/teacher" className="block py-1 hover:text-accent">Teachers</Link>
              <Link href="/parent" className="block py-1 hover:text-accent">Parents</Link>
              <Link href="/student" className="block py-1 hover:text-accent">Students</Link>
            </div>
          </div>
          <Link href="#pricing" className="hover:text-accent transition-colors">Pricing</Link>
          <Link href="#blog" className="hover:text-accent transition-colors">Blog</Link>
          <Link href="/login">
            <Button className="bg-accent hover:bg-accent-light px-6 py-2">Login</Button>
          </Link>
          <Link href="/register">
            <Button variant="secondary" className="border border-accent hover:bg-accent-light hover:text-primary-dark px-6 py-2">
              Sign Up
            </Button>
          </Link>
        </div>
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>
      {isOpen && (
        <div className="md:hidden bg-primary-dark px-4 py-4 glassmorphism">
          <Link href="#features" className="block py-2 hover:text-accent">Features</Link>
          <Link href="#pricing" className="block py-2 hover:text-accent">Pricing</Link>
          <Link href="#blog" className="block py-2 hover:text-accent">Blog</Link>
          <Link href="/login" className="block py-2">
            <Button className="bg-accent w-full">Login</Button>
          </Link>
          <Link href="/register" className="block py-2">
            <Button variant="secondary" className="border border-accent w-full">Sign Up</Button>
          </Link>
        </div>
      )}
    </nav>
  );
};