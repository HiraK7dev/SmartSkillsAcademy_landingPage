
import React, { useEffect, useState } from 'react';
import Button from './Button';
import { ArrowRight, Code, Smartphone } from 'lucide-react';

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden bg-white">
      <div className="container-custom relative">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div 
            className={`transition-all duration-700 delay-100 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6 text-gray-800">
              Learn <span className="text-orange-500">Modern Tech Skills</span> For The Digital Age
            </h1>
            <p className="text-base text-gray-600 mb-8">
              Unlock your potential with our comprehensive tech courses. Whether you're a beginner or looking to advance your skills, we have the perfect learning path for you.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="md" className="bg-orange-500 hover:bg-orange-600 rounded-md">
                Start Learning Now <ArrowRight size={16} className="ml-2" />
              </Button>
              <Button variant="outline" size="md" className="border-gray-800 text-gray-800 rounded-md">
                Explore Courses
              </Button>
            </div>
          </div>
          
          <div 
            className={`transition-all duration-700 delay-300 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="relative">
              <div className="absolute -top-16 -left-16 w-32 h-32 bg-blue-50 rounded-full"></div>
              <div className="absolute -bottom-16 -right-16 w-32 h-32 bg-orange-50 rounded-full"></div>
              <img 
                src="https://placehold.co/600x400/f8f9fa/e9ecef?text=Learning+Platform" 
                alt="Learning Platform" 
                className="relative z-10 rounded-lg shadow-lg w-full object-cover"
              />
            </div>
          </div>
        </div>

        <div 
          className={`mt-16 grid grid-cols-1 md:grid-cols-2 gap-6 transition-all duration-700 delay-500 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="bg-white shadow rounded-lg overflow-hidden transform transition-transform hover:scale-[1.02] duration-500 border border-gray-100">
            <div className="h-2 bg-blue-600"></div>
            <div className="p-6">
              <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
                <Code size={24} className="text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-800">Web Development</h3>
              <p className="text-gray-600">Master modern frameworks and tools to build responsive, dynamic websites and web applications.</p>
            </div>
          </div>

          <div className="bg-white shadow rounded-lg overflow-hidden transform transition-transform hover:scale-[1.02] duration-500 border border-gray-100">
            <div className="h-2 bg-orange-500"></div>
            <div className="p-6">
              <div className="w-12 h-12 bg-orange-50 rounded-lg flex items-center justify-center mb-4">
                <Smartphone size={24} className="text-orange-500" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-800">Mobile App Development</h3>
              <p className="text-gray-600">Learn to build cross-platform mobile applications for iOS and Android devices.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
