
import React, { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

const TestimonialSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const testimonials = [
    {
      name: "Alex Thompson",
      role: "Frontend Developer at TechStart",
      image: "https://placehold.co/200x200/1598F2/FFFFFF?text=Alex+T",
      text: "The Web Development course completely transformed my career. I went from working a retail job to landing a six-figure developer position within 3 months of completing the course. The project-based approach gave me real-world experience that employers valued.",
      rating: 5,
      company: "TechStart"
    },
    {
      name: "Priya Sharma",
      role: "Mobile App Developer at AppWorks",
      image: "https://placehold.co/200x200/13247E/FFFFFF?text=Priya+S",
      text: "After trying several online courses, this was the only one that actually prepared me for real mobile development work. The instructors are incredibly knowledgeable and supportive. I built a portfolio of apps that actually impressed in interviews.",
      rating: 5,
      company: "AppWorks"
    },
    {
      name: "Marcus Johnson",
      role: "Full Stack Developer at DataFlow",
      image: "https://placehold.co/200x200/FEB727/FFFFFF?text=Marcus+J",
      text: "The depth of knowledge I gained from the Full Stack course was incredible. The curriculum stays current with industry trends, and the career services helped me navigate the job search process. Worth every penny!",
      rating: 5,
      company: "DataFlow"
    }
  ];

  const nextTestimonial = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  const prevTestimonial = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 6000);
    return () => clearInterval(interval);
  }, [currentIndex, isAnimating]);

  return (
    <section id="testimonials" className="section-padding bg-gray-900 text-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 right-0 bottom-0 overflow-hidden -z-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-celestialBlue/20 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/4"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-selectiveYellow/20 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/4"></div>
      </div>
      
      <div className="container-custom">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-white/10 text-white rounded-full text-sm font-medium mb-5">
            Student Success Stories
          </span>
          <h2 className="section-heading text-white">
            What Our <span className="text-gradient-gold">Graduates Say</span>
          </h2>
          <p className="section-subheading text-gray-300">
            Real success stories from students who have completed our courses and transformed their careers.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index} 
                  className="w-full flex-shrink-0 px-4"
                >
                  <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 md:p-10">
                    <div className="flex items-center mb-6">
                      <div className="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden mr-4 border-2 border-white/20">
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.name} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold">{testimonial.name}</h3>
                        <p className="text-white/70">{testimonial.role}</p>
                        <div className="flex mt-1">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} size={16} className="text-selectiveYellow fill-selectiveYellow" />
                          ))}
                        </div>
                      </div>
                    </div>
                    <blockquote className="text-lg md:text-xl italic mb-6 font-light leading-relaxed">
                      "{testimonial.text}"
                    </blockquote>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  if (!isAnimating) {
                    setIsAnimating(true);
                    setCurrentIndex(index);
                    setTimeout(() => setIsAnimating(false), 500);
                  }
                }}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentIndex === index 
                    ? 'bg-white scale-100' 
                    : 'bg-white/30 scale-75'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          {/* Navigation arrows */}
          <button
            onClick={prevTestimonial}
            className="absolute top-1/2 -translate-y-1/2 -left-4 md:left-4 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md flex items-center justify-center transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={20} className="text-white" />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute top-1/2 -translate-y-1/2 -right-4 md:right-4 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md flex items-center justify-center transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight size={20} className="text-white" />
          </button>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white/5 backdrop-blur-md rounded-xl p-6 text-center">
            <div className="text-4xl font-bold text-white mb-2">95%</div>
            <p className="text-white/70">Job placement rate within 6 months</p>
          </div>
          <div className="bg-white/5 backdrop-blur-md rounded-xl p-6 text-center">
            <div className="text-4xl font-bold text-white mb-2">$85K</div>
            <p className="text-white/70">Average starting salary of graduates</p>
          </div>
          <div className="bg-white/5 backdrop-blur-md rounded-xl p-6 text-center">
            <div className="text-4xl font-bold text-white mb-2">15,000+</div>
            <p className="text-white/70">Students enrolled in our courses</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
