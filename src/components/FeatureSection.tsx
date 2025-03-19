
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
      title: "Industry-Relevant Curriculum",
      description: "Constantly updated curriculum aligned with current industry standards and practices."
    },
    {
      icon: <UserCheck size={24} className="text-celestialBlue" />,
      title: "Expert Instructors",
      description: "Learn from experienced professionals who have worked at top tech companies."
    },
    {
      icon: <Briefcase size={24} className="text-celestialBlue" />,
      title: "Project-Based Learning",
      description: "Build portfolio-ready projects that demonstrate your skills to potential employers."
    },
    {
      icon: <Award size={24} className="text-celestialBlue" />,
      title: "Certification",
      description: "Earn recognized certificates upon course completion to boost your resume."
    },
    {
      icon: <BookOpen size={24} className="text-celestialBlue" />,
      title: "Comprehensive Resources",
      description: "Access detailed course materials, code samples, and additional learning resources."
    },
    {
      icon: <Video size={24} className="text-celestialBlue" />,
      title: "On-Demand Video Lessons",
      description: "Learn at your own pace with high-quality video lessons available 24/7."
    },
    {
      icon: <Users size={24} className="text-celestialBlue" />,
      title: "Community Support",
      description: "Join our active community of learners for collaboration and networking opportunities."
    },
    {
      icon: <Globe size={24} className="text-celestialBlue" />,
      title: "Career Services",
      description: "Get resume reviews, interview preparation, and job placement assistance."
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
            Our courses are designed with a focus on practical skills, industry relevance, and student success.
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
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Ready to Start Your Learning Journey?</h3>
              <p className="mb-8 opacity-90">
                Join thousands of students who have transformed their careers through our expert-led courses. Get started today with our special launch offer.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="bg-white/20 rounded-full p-1 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-sm opacity-90">30-day money-back guarantee</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-white/20 rounded-full p-1 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-sm opacity-90">Lifetime access to course materials</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-white/20 rounded-full p-1 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-sm opacity-90">Regular updates with latest content</p>
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
                <div className="text-sm opacity-80 mb-1">Special Launch Offer</div>
                <div className="flex items-end">
                  <span className="text-4xl font-bold">$999</span>
                  <span className="ml-2 text-sm opacity-70">USD</span>
                </div>
                <div className="mt-1 inline-block px-2 py-1 bg-selectiveYellow text-resolutionBlue text-xs font-bold rounded">SAVE 30%</div>
              </div>
              <button className="w-full py-3 px-6 bg-white text-resolutionBlue font-bold rounded-lg hover:bg-white/90 transition-colors">
                Enroll Now with Discount
              </button>
              <p className="text-xs opacity-70 text-center mt-4">Limited-time offer. No credit card required to start.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
