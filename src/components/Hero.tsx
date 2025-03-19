
import React, { useEffect, useState } from 'react';
import Button from './Button';
import { ArrowRight, Code, Smartphone } from 'lucide-react';

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 right-0 h-full overflow-hidden -z-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-celestialBlue/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/4"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-selectiveYellow/10 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/4"></div>
      </div>

      <div className="container-custom relative">
        <div className="text-center max-w-4xl mx-auto">
          <div 
            className={`transition-all duration-700 delay-100 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <span className="inline-block px-4 py-1.5 bg-celestialBlue/10 text-celestialBlue rounded-full text-sm font-medium mb-5">
              Launch Offer: 30% Off All Courses
            </span>
          </div>

          <h1 
            className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight transition-all duration-700 delay-200 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            Master <span className="text-gradient-blue">Web & Mobile</span> Development<br />
            From Industry Experts
          </h1>

          <p 
            className={`text-xl text-gray-600 mb-8 max-w-2xl mx-auto transition-all duration-700 delay-300 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            Launch your tech career with our comprehensive, hands-on courses designed by industry professionals. Build real-world projects and gain the skills employers actually need.
          </p>

          <div 
            className={`flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-700 delay-400 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <Button size="lg" className="w-full sm:w-auto">
              Explore Courses <ArrowRight size={18} className="ml-2" />
            </Button>
            <Button variant="outline" size="lg" className="w-full sm:w-auto">
              View Course Catalog
            </Button>
          </div>
        </div>

        <div 
          className={`mt-16 flex flex-col md:flex-row gap-6 items-center justify-center transition-all duration-700 delay-500 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="bg-white shadow-xl rounded-xl overflow-hidden flex-1 max-w-md transform transition-transform hover:scale-[1.02] duration-500">
            <div className="h-2 bg-celestialBlue"></div>
            <div className="p-6">
              <div className="w-12 h-12 bg-celestialBlue/10 rounded-lg flex items-center justify-center mb-4">
                <Code size={28} className="text-celestialBlue" />
              </div>
              <h3 className="text-xl font-bold mb-2">Web Development</h3>
              <p className="text-gray-600">Learn frontend, backend, or full stack development with modern frameworks and tools.</p>
            </div>
          </div>

          <div className="bg-white shadow-xl rounded-xl overflow-hidden flex-1 max-w-md transform transition-transform hover:scale-[1.02] duration-500">
            <div className="h-2 bg-selectiveYellow"></div>
            <div className="p-6">
              <div className="w-12 h-12 bg-selectiveYellow/10 rounded-lg flex items-center justify-center mb-4">
                <Smartphone size={28} className="text-selectiveYellow" />
              </div>
              <h3 className="text-xl font-bold mb-2">Mobile App Development</h3>
              <p className="text-gray-600">Create native and cross-platform mobile applications for iOS and Android.</p>
            </div>
          </div>
        </div>

        <div 
          className={`mt-16 text-center transition-all duration-700 delay-600 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <p className="text-sm text-gray-500 mb-3">TRUSTED BY DEVELOPERS FROM</p>
          <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6">
            <img src="https://placehold.co/120x40/13247E/FFFFFF?text=Google" alt="Google" className="h-8 opacity-70 hover:opacity-100 transition-opacity" />
            <img src="https://placehold.co/120x40/13247E/FFFFFF?text=Microsoft" alt="Microsoft" className="h-8 opacity-70 hover:opacity-100 transition-opacity" />
            <img src="https://placehold.co/120x40/13247E/FFFFFF?text=Amazon" alt="Amazon" className="h-8 opacity-70 hover:opacity-100 transition-opacity" />
            <img src="https://placehold.co/120x40/13247E/FFFFFF?text=Facebook" alt="Facebook" className="h-8 opacity-70 hover:opacity-100 transition-opacity" />
            <img src="https://placehold.co/120x40/13247E/FFFFFF?text=Apple" alt="Apple" className="h-8 opacity-70 hover:opacity-100 transition-opacity" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
