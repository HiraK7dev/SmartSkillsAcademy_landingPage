
import React, { useEffect, useState } from 'react';
import Button from './Button';
import { ArrowRight, Code, Smartphone, Zap } from 'lucide-react';

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-to-b from-[#f9f9f9] to-white">
      {/* Background elements */}
      <div className="absolute top-0 left-0 right-0 h-full overflow-hidden -z-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#FF6B35]/5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/4"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#004E89]/5 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/4"></div>
      </div>

      <div className="container-custom relative">
        <div className="text-center max-w-4xl mx-auto">
          <div 
            className={`transition-all duration-700 delay-100 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <span className="inline-block px-4 py-1.5 bg-[#004E89]/10 text-[#004E89] rounded-full text-sm font-medium mb-5">
              The Future of Tech Skills Learning
            </span>
          </div>

          <h1 
            className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight transition-all duration-700 delay-200 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            Learn <span className="bg-gradient-to-r from-[#004E89] to-[#FF6B35] bg-clip-text text-transparent">Modern Tech Skills</span><br />
            For The Digital Age
          </h1>

          <p 
            className={`text-xl text-gray-600 mb-8 max-w-2xl mx-auto transition-all duration-700 delay-300 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            Unlock your potential with our comprehensive tech courses. Whether you're a beginner or looking to advance your skills, we have the perfect learning path for you.
          </p>

          <div 
            className={`flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-700 delay-400 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <Button size="lg" className="w-full sm:w-auto bg-[#004E89] hover:bg-[#004E89]/90">
              Start Learning Now <ArrowRight size={18} className="ml-2" />
            </Button>
            <Button variant="outline" size="lg" className="w-full sm:w-auto border-[#004E89] text-[#004E89]">
              Explore Courses
            </Button>
          </div>
        </div>

        <div 
          className={`mt-16 flex flex-col md:flex-row gap-6 items-center justify-center transition-all duration-700 delay-500 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="bg-white shadow-lg rounded-xl overflow-hidden flex-1 max-w-md transform transition-transform hover:scale-[1.02] duration-500 border border-gray-100">
            <div className="h-2 bg-[#004E89]"></div>
            <div className="p-6">
              <div className="w-12 h-12 bg-[#004E89]/10 rounded-lg flex items-center justify-center mb-4">
                <Code size={28} className="text-[#004E89]" />
              </div>
              <h3 className="text-xl font-bold mb-2">Web Development</h3>
              <p className="text-gray-600">Master modern frameworks and tools to build responsive, dynamic websites and web applications.</p>
            </div>
          </div>

          <div className="bg-white shadow-lg rounded-xl overflow-hidden flex-1 max-w-md transform transition-transform hover:scale-[1.02] duration-500 border border-gray-100">
            <div className="h-2 bg-[#FF6B35]"></div>
            <div className="p-6">
              <div className="w-12 h-12 bg-[#FF6B35]/10 rounded-lg flex items-center justify-center mb-4">
                <Smartphone size={28} className="text-[#FF6B35]" />
              </div>
              <h3 className="text-xl font-bold mb-2">Mobile App Development</h3>
              <p className="text-gray-600">Learn to build cross-platform mobile applications for iOS and Android devices.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
