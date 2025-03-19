
import React from 'react';
import { Users } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="container-custom">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-celestialBlue mb-6">
            ABOUT US
          </h2>
          
          <div className="prose max-w-3xl mx-auto text-lg">
            <p className="mb-4">
              At Smart Skills Academy, we believe that the right skills can open doors to limitless opportunities. Our mission is to provide comprehensive training that empowers individuals across all industries with the essential skills needed to excel in today's dynamic job market.
            </p>
            
            <p className="mb-4">
              We offer job-oriented skill courses at an affordable cost, designed to elevate your professional abilities and expand your career opportunities, helping you secure well-paying job roles.
            </p>
            
            <p className="mb-8">
              Our commitment extends beyond teaching technical knowledge. We prioritize practical, hands-on learning experiences that empower our students to excel in real-world scenarios.
            </p>
          </div>
          
          <div className="flex items-center justify-center gap-8 mt-12">
            <div className="flex flex-col items-center">
              <div className="flex items-center justify-center mb-4">
                <Users size={48} className="text-resolutionBlue" />
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold">200 +</p>
                <p className="text-xl">Students</p>
              </div>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-28 h-28 relative mb-4">
                <img 
                  src="https://placehold.co/120x120/13247E/FFFFFF?text=Google" 
                  alt="Google Rating" 
                  className="w-full h-full object-contain" 
                />
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold">4.9</p>
                <p className="text-xl">Google Rating</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
