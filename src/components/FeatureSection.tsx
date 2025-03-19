
import React, { useEffect, useRef, useState } from 'react';
import { Code, UserCheck, Briefcase, Award, BookOpen, Video, Users, Globe } from 'lucide-react';
import AnimatedCard from './AnimatedCard';

const FeatureSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const features = [
    {
      icon: <Code size={24} className="text-celestialBlue" />,
      title: "Real-World Projects",
      description: "Apply your knowledge to real-world projects that enhance your portfolio and prepare you for industry challenges."
    },
    {
      icon: <UserCheck size={24} className="text-celestialBlue" />,
      title: "Experienced Mentors",
      description: "Learn from industry experts with years of professional experience at top tech companies."
    },
    {
      icon: <Briefcase size={24} className="text-celestialBlue" />,
      title: "Career Guidance",
      description: "Receive personalized career advice, resume reviews, and interview preparation to land your dream job."
    },
    {
      icon: <Award size={24} className="text-celestialBlue" />,
      title: "Industry Certification",
      description: "Earn recognized certifications that validate your skills to potential employers."
    },
    {
      icon: <BookOpen size={24} className="text-celestialBlue" />,
      title: "Comprehensive Resources",
      description: "Access a vast library of learning materials, code samples, and additional resources to support your learning."
    },
    {
      icon: <Video size={24} className="text-celestialBlue" />,
      title: "Interactive Learning",
      description: "Engage with interactive lessons, coding challenges, and hands-on workshops for practical experience."
    },
    {
      icon: <Users size={24} className="text-celestialBlue" />,
      title: "Community Support",
      description: "Join our active community of learners for networking, collaboration, and peer-to-peer learning."
    },
    {
      icon: <Globe size={24} className="text-celestialBlue" />,
      title: "Lifetime Access",
      description: "Get lifetime access to course materials and free updates as technologies evolve and change."
    }
  ];

  return (
    <section id="features" className="section-padding" ref={sectionRef}>
      <div className="container-custom">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-celestialBlue/10 text-celestialBlue rounded-full text-sm font-medium mb-5">
            Why Choose Us
          </span>
          <h2 className="section-heading">
            Features That <span className="text-gradient-blue">Set Us Apart</span>
          </h2>
          <p className="section-subheading">
            Our platform offers unique advantages designed to ensure your success in today's competitive tech landscape.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <AnimatedCard 
              key={index} 
              className="h-full"
              delay={index * 100}
            >
              <div className="w-12 h-12 mb-4 bg-celestialBlue/10 rounded-lg flex items-center justify-center">
                {feature.icon}
              </div>
              <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </AnimatedCard>
          ))}
        </div>

        <div className={`mt-20 bg-gradient-to-r from-resolutionBlue to-celestialBlue rounded-2xl overflow-hidden transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <div className="grid md:grid-cols-2 gap-8 p-8 md:p-12">
            <div className="text-white">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Ready to Transform Your Career?</h3>
              <p className="mb-8 opacity-90">
                Join thousands of students who have accelerated their careers with our practical, job-focused tech training programs.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="bg-white/20 rounded-full p-1 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-sm opacity-90">Flexible learning schedules that fit your lifestyle</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-white/20 rounded-full p-1 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-sm opacity-90">Pay monthly or get a discount with full payment</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-white/20 rounded-full p-1 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-sm opacity-90">Job placement assistance for course graduates</p>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-white">
              <div className="mb-4">
                <div className="text-sm opacity-80 mb-1">Regular Price</div>
                <div className="flex items-end">
                  <span className="text-2xl font-bold line-through opacity-70">$1,499</span>
                  <span className="ml-2 text-sm opacity-70">USD</span>
                </div>
              </div>
              <div className="mb-6">
                <div className="text-sm opacity-80 mb-1">Special Offer</div>
                <div className="flex items-end">
                  <span className="text-4xl font-bold">$999</span>
                  <span className="ml-2 text-sm opacity-70">USD</span>
                </div>
                <div className="mt-1 inline-block px-2 py-1 bg-selectiveYellow text-resolutionBlue text-xs font-bold rounded">SAVE 33%</div>
              </div>
              <button className="w-full py-3 px-6 bg-white text-resolutionBlue font-bold rounded-lg hover:bg-white/90 transition-colors">
                Enroll Now and Save
              </button>
              <p className="text-xs opacity-70 text-center mt-4">Limited time offer. First 100 students only.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
