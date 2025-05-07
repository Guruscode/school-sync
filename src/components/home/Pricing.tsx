"use client";

import { useState } from "react";
import { Button } from "@/components/common/Button";
import Link from "next/link";

interface PricingPlan {
  name: string;
  monthlyPrice: string;
  annualPrice: string;
  features: string[];
}

export const Pricing: React.FC = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  const plans: PricingPlan[] = [
    {
      name: "Basic",
      monthlyPrice: "$99/month",
      annualPrice: "$950/year",
      features: [
        "Up to 50 students",
        "Student Management",
        "Attendance Tracking",
        "Email Support",
      ],
    },
    {
      name: "Standard",
      monthlyPrice: "$299/month",
      annualPrice: "$2900/year",
      features: [
        "Up to 500 students",
        "All Basic Features",
        "Parent Portal",
        "Financial Management",
        "Priority Support",
      ],
    },
    {
      name: "Premium",
      monthlyPrice: "$599/month",
      annualPrice: "$5900/year",
      features: [
        "Unlimited students",
        "All Standard Features",
        "Advanced Analytics",
        "Mobile Apps",
        "Dedicated Support",
      ],
    },
  ];

  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-primary-dark animate-slide-up">
          Choose Your Plan
        </h2>
        <div className="flex justify-center mb-8">
          <button
            onClick={() => setIsAnnual(false)}
            className={`px-6 py-2 rounded-l-full ${!isAnnual ? "bg-accent text-white" : "bg-neutral"}`}
          >
            Monthly
          </button>
          <button
            onClick={() => setIsAnnual(true)}
            className={`px-6 py-2 rounded-r-full ${isAnnual ? "bg-accent text-white" : "bg-neutral"}`}
          >
            Annual
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="bg-glass p-8 rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 glassmorphism animate-slide-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <h3 className="text-2xl font-semibold mb-4 text-primary-dark">{plan.name}</h3>
              <p className="text-3xl font-bold mb-6 text-accent">{isAnnual ? plan.annualPrice : plan.monthlyPrice}</p>
              <ul className="mb-8 space-y-2">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="text-gray-600 flex items-center">
                    <svg className="w-5 h-5 text-accent mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <Link href="/register">
                <Button className="w-full bg-accent hover:bg-accent-light">Choose Plan</Button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};