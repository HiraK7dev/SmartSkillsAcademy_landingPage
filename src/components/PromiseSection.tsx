
import React from 'react';
import { Check } from 'lucide-react';
import AnimatedCard from './AnimatedCard';

const PromiseSection = () => {
  const promises = [
    "Robust Infrastructure Facilities",
    "Experienced Faculties/Trainer",
    "Practical Training/ Internship",
    "100% Job Assistance",
    "No nonsense Approach. Practical Teaching"
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-resolutionBlue mb-2">
            SMART SKILLS ACADEMY
          </h2>
          <div className="flex items-center justify-center gap-2">
            <p className="text-2xl font-bold">
              "SKILL UP, MOVE UP"
            </p>
            <img 
              src="/lovable-uploads/fe9b294f-379f-4af3-b76f-00180a0f4b1d.png" 
              alt="Graduation Cap" 
              className="h-8 w-auto" 
            />
          </div>
        </div>

        <div className="max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold text-resolutionBlue mb-6">
            OUR PROMISE
          </h3>
          <ul className="space-y-4">
            {promises.map((promise, index) => (
              <li key={index} className="flex items-center gap-3">
                <div className="flex-shrink-0 text-celestialBlue">
                  <Check size={24} className="text-resolutionBlue" />
                </div>
                <span className="text-lg">{promise}</span>
              </li>
            ))}
          </ul>

          <div className="mt-12">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="flex items-center justify-center">
                <img 
                  src="/lovable-uploads/0930ce5e-f82b-45ae-b686-f0302e615360.png" 
                  alt="Android Logo" 
                  className="h-24 w-auto" 
                />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">DOWNLOAD OUR ANDROID APP</h3>
                <p>Our Android Application is available in Play Store. Download & Login Now.</p>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <h3 className="text-2xl font-bold mb-4">
              ADD SKILLS TO YOUR CV/RESUME,<br/>
              STAND OUT FROM CROWDS
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromiseSection;
