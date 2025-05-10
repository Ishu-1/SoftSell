"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaShieldAlt, FaClock, FaPercent, FaHeadset } from "react-icons/fa";

const benefits = [
  {
    icon: <FaShieldAlt className="text-4xl text-blue-600" />,
    title: "Secure Transactions",
    description: "Bank-level security for all your transactions and data.",
    aosDelay: "0",
  },
  {
    icon: <FaClock className="text-4xl text-blue-600" />,
    title: "Fast Payouts",
    description: "Get paid within 48 hours of accepting our offer.",
    aosDelay: "200",
  },
  {
    icon: <FaPercent className="text-4xl text-blue-600" />,
    title: "Competitive Rates",
    description: "We offer the best rates in the industry.",
    aosDelay: "400",
  },
  {
    icon: <FaHeadset className="text-4xl text-blue-600" />,
    title: "Dedicated Support",
    description: "Our team is available to help you.",
    aosDelay: "600",
  },
];

const WhyChooseUs = () => {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12" data-aos="fade-down">
          <h2 className="text-3xl font-bold text-gray-800">Why Choose SoftSell?</h2>
          <p className="mt-2 text-gray-600">
            Discover what makes us the preferred choice
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={benefit.aosDelay}
              className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300"
            >
              <div className="flex justify-center mb-4">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold text-center mb-2 text-gray-800">
                {benefit.title}
              </h3>
              <p className="text-gray-600 text-center">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;