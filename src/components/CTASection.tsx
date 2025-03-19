
import React, { useState } from 'react';
import Button from './Button';
import { ArrowRight, Smartphone, Code, CheckCircle } from 'lucide-react';

const CTASection = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      console.log('Email submitted:', email);
      setSubmitted(true);
      setEmail('');
      setTimeout(() => setSubmitted(false), 3000);
    }
  };

  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 right-0 bottom-0 pointer-events-none -z-10">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-celestialBlue/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-selectiveYellow/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container-custom">
        <div className="bg-gradient-to-br from-resolutionBlue to-celestialBlue rounded-2xl overflow-hidden shadow-xl">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Start Your Tech Career Journey?
              </h2>
              <p className="text-white/90 mb-8 text-lg">
                Join our tech community and get early access to new courses, exclusive discounts, and free learning resources.
              </p>

              <form onSubmit={handleSubmit} className="mb-6">
                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="flex-grow px-5 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/30"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <Button
                    variant="secondary"
                    type="submit"
                    className={`whitespace-nowrap ${submitted ? 'bg-green-500 text-white' : ''}`}
                  >
                    {submitted ? (
                      <>
                        <CheckCircle size={18} className="mr-2" />
                        Subscribed!
                      </>
                    ) : (
                      <>
                        Get Started
                        <ArrowRight size={18} className="ml-2" />
                      </>
                    )}
                  </Button>
                </div>
              </form>

              <div className="flex flex-col sm:flex-row items-center gap-4 text-white/80 text-sm">
                <div className="flex items-center">
                  <CheckCircle size={16} className="mr-2 text-white" />
                  <span>No credit card required</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle size={16} className="mr-2 text-white" />
                  <span>Cancel anytime</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle size={16} className="mr-2 text-white" />
                  <span>24/7 support</span>
                </div>
              </div>
            </div>

            <div className="hidden md:block relative">
              <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -bottom-10 -right-10 w-80 h-80 bg-white/10 rounded-full blur-xl"></div>
              </div>
              
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-xs">
                <div className="relative z-10">
                  <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-xl animate-float border border-white/20">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center mr-4">
                        <Code size={20} className="text-white" />
                      </div>
                      <div>
                        <h3 className="text-white font-bold">Web Development</h3>
                        <p className="text-white/70 text-sm">Full Stack Course</p>
                      </div>
                    </div>
                    <div className="bg-white/10 rounded-lg p-3 mb-4">
                      <div className="text-xs text-white/70 mb-1">PROGRESS</div>
                      <div className="w-full bg-white/20 rounded-full h-2">
                        <div className="bg-selectiveYellow h-2 rounded-full" style={{ width: '75%' }}></div>
                      </div>
                    </div>
                    <Button variant="secondary" size="sm" className="w-full">
                      Continue Learning
                    </Button>
                  </div>
                  
                  <div className="absolute top-20 -left-16 bg-white/10 backdrop-blur-md rounded-xl p-4 shadow-xl animate-float animation-delay-200 border border-white/20">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center mr-3">
                        <Smartphone size={16} className="text-white" />
                      </div>
                      <div>
                        <h3 className="text-white font-bold text-sm">Mobile Development</h3>
                        <p className="text-white/70 text-xs">Coming soon</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
