"use client";

import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

interface FAQItem {
  question: string;
  answer: string;
}

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      question: "What is SchoolSync?",
      answer: "SchoolSync is an all-in-one platform to manage school operations, engage parents, and enhance learning.",
    },
    {
      question: "How secure is the platform?",
      answer: "We use industry-standard encryption and comply with data protection regulations to ensure security.",
    },
    {
      question: "Can I customize the platform?",
      answer: "Yes, SchoolSync supports school-specific branding, themes, and custom workflows.",
    },
    {
      question: "Is there a free trial?",
      answer: "Yes, we offer a 14-day free trial for all plans with no credit card required.",
    },
  ];

  return (
    <section id="faq" className="py-20 bg-neutral">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-primary-dark animate-slide-up">
          Frequently Asked Questions
        </h2>
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md mb-4 animate-slide-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="flex justify-between items-center w-full text-left"
              >
                <h3 className="text-xl font-semibold text-primary-dark">{faq.question}</h3>
                {openIndex === index ? <FaMinus className="text-accent" /> : <FaPlus className="text-accent" />}
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-40" : "max-h-0"
                }`}
              >
                <p className="text-gray-600 mt-4">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};