
import React from 'react';
import { Check } from 'lucide-react';

const WhyChooseUsSection = () => {
  const reasons = [
    "We are the No 1 Skill Institute of Biswanath Chariali",
    "We are located at College Road & Kochgaon",
    "Official Training Partner of Tally Education (TEPL)",
    "An ISO 9001: 2015 Certified Institute",
    "Practical Training/ Internship Available",
    "Full refund of fees if cancelled within 7 days."
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-black">
            GET SKILL, GET CERTIFIED, GET PLACED
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold text-celestialBlue mb-8">
            WHY CHOOSE US?
          </h3>
          
          <ul className="space-y-4">
            {reasons.map((reason, index) => (
              <li key={index} className="flex items-center gap-3">
                <div className="flex-shrink-0 text-celestialBlue">
                  <Check size={24} className="text-resolutionBlue" />
                </div>
                <span className="text-lg">{reason}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
