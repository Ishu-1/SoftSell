"use client";

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaUpload, FaSearchDollar, FaMoneyBillWave } from 'react-icons/fa';

export default function HowItWorks() {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  const steps = [
    {
      icon: <FaUpload className="text-4xl mb-4 text-blue-600" />,
      title: "Upload License",
      description: "Provide details about your software license through our secure portal.",
      aosDelay: "0"
    },
    {
      icon: <FaSearchDollar className="text-4xl mb-4 text-purple-600" />,
      title: "Get Valuation",
      description: "We'll assess your license and provide a fair market valuation within 24 hours.",
      aosDelay: "200"
    },
    {
      icon: <FaMoneyBillWave className="text-4xl mb-4 text-green-600" />,
      title: "Get Paid",
      description: "Accept our offer and receive payment via your preferred method.",
      aosDelay: "400"
    }
  ];

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 
          className="text-3xl font-bold text-center mb-12"
          data-aos="fade-down"
        >
          How It Works
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-lg shadow-md text-center hover:shadow-xl hover:scale-125  transition-all duration-300
                        transform hover:-translate-y-2"
              data-aos="fade-up"
              data-aos-delay={step.aosDelay}
            >
              <div className="flex justify-center">{step.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}