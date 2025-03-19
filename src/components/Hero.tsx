
import React, { useEffect, useState } from 'react';
import Button from './Button';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="relative min-h-screen bg-[#B5D0F1] overflow-hidden">
      <div className="container-custom h-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-20 md:py-28 min-h-[calc(100vh-80px)]">
          {/* Left column */}
          <div className="flex flex-col justify-center">
            <div 
              className={`transition-all duration-700 delay-100 ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <div className="mb-6">
                <img 
                  src="/lovable-uploads/caf03ba0-ea5c-468e-91cb-eec3d332ede5.png" 
                  alt="Smart Skills Logo" 
                  className="h-24 md:h-32 object-contain" 
                />
              </div>
            </div>

            <h1 
              className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 transition-all duration-700 delay-200 ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              Learn today's<br />
              in-demand<br />
              <span className="text-white">SKILLS</span>
            </h1>

            <h2 
              className={`text-4xl md:text-5xl font-bold mb-8 transition-all duration-700 delay-300 ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              Be Ready for<br />
              <span className="text-white">JOB</span>
            </h2>

            <div 
              className={`transition-all duration-700 delay-400 ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <Button size="lg" className="w-full sm:w-auto">
                Explore Courses <ArrowRight size={18} className="ml-2" />
              </Button>
            </div>
          </div>

          {/* Right column */}
          <div className="flex items-center justify-center">
            <div 
              className={`transition-all duration-700 delay-500 ${
                isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
              }`}
            >
              <img 
                src="/lovable-uploads/268a32fe-f655-44e9-9838-1b2a65c50746.png" 
                alt="Web Development Illustration" 
                className="max-w-full h-auto" 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
