
import React, { useEffect, useState } from 'react';
import Button from './Button';
import { ArrowRight, Check } from 'lucide-react';

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="relative pt-32 pb-16 md:pt-44 md:pb-24 overflow-hidden bg-white web-veda-bg-pattern">
      <div className="container-custom relative">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div 
            className={`transition-all duration-700 delay-100 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="inline-flex items-center px-4 py-2 bg-blue-50 rounded-full text-blue-600 text-sm font-medium mb-6">
              <span className="animate-pulse mr-2">🔥</span> Most Trusted Learning Platform
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Learn <span className="text-gradient-blue">Modern Tech Skills</span> For The Digital Age
            </h1>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Unlock your potential with our comprehensive tech courses. Whether you're a beginner or looking to advance your skills, we have the perfect learning path for you.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-100 flex items-center justify-center mt-1">
                  <Check size={12} className="text-green-600" />
                </div>
                <span className="ml-2 text-gray-700">Expert Instructors</span>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-100 flex items-center justify-center mt-1">
                  <Check size={12} className="text-green-600" />
                </div>
                <span className="ml-2 text-gray-700">Practical Projects</span>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-100 flex items-center justify-center mt-1">
                  <Check size={12} className="text-green-600" />
                </div>
                <span className="ml-2 text-gray-700">Certification</span>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-100 flex items-center justify-center mt-1">
                  <Check size={12} className="text-green-600" />
                </div>
                <span className="ml-2 text-gray-700">24/7 Support</span>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <a href="#courses" className="web-veda-button">
                Browse Courses <ArrowRight size={16} className="ml-2" />
              </a>
              <a href="#features" className="web-veda-button-outline">
                Learn More
              </a>
            </div>
            
            <div className="flex items-center mt-8">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-white overflow-hidden">
                    <img 
                      src={`https://i.pravatar.cc/100?img=${i+10}`}
                      alt={`User ${i}`} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
              <div className="ml-4">
                <div className="flex items-center">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-sm text-gray-600">From over <span className="font-semibold">15,000+ reviews</span></p>
              </div>
            </div>
          </div>
          
          <div 
            className={`relative transition-all duration-700 delay-300 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-yellow-100 rounded-full blur-3xl opacity-60"></div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-100 rounded-full blur-3xl opacity-60"></div>
            
            <div className="relative z-10 bg-white rounded-xl overflow-hidden shadow-2xl">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-indigo-600"></div>
              <img 
                src="https://placehold.co/600x400/f8f9fa/e9ecef?text=Learning+Platform" 
                alt="Learning Platform" 
                className="w-full h-auto object-cover"
              />
              
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-blue-600 rounded-full opacity-10"></div>
              
              <div className="absolute top-5 right-5 bg-white p-2 rounded-lg shadow-md">
                <div className="text-xs font-medium text-gray-500">Students</div>
                <div className="text-lg font-bold text-blue-600">15,000+</div>
              </div>
              
              <div className="absolute -bottom-6 left-10 transform translate-y-1/2 bg-white p-3 rounded-lg shadow-lg w-52">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <div className="text-xs text-gray-500">Job Placement</div>
                    <div className="text-sm font-bold text-gray-800">97% Success Rate</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div 
          className={`mt-24 transition-all duration-700 delay-500 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="text-center mb-10">
            <p className="text-gray-500 uppercase tracking-wider text-sm font-medium">Trusted by leading companies</p>
          </div>
          
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            {['Google', 'Microsoft', 'Amazon', 'Meta', 'Apple'].map((company, i) => (
              <div key={i} className="grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
                <div className="text-xl font-bold text-gray-400">{company}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
