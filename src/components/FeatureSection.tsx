
import React, { useEffect, useRef, useState } from 'react';
import { Code, Award, BookOpen, Video } from 'lucide-react';
import AnimatedCard from './AnimatedCard';
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Checkbox } from "./ui/checkbox";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "./ui/form";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  message: z.string().min(5, {
    message: "Message must be at least 5 characters.",
  }),
  acceptTerms: z.boolean().refine(val => val === true, {
    message: "You must accept the terms and conditions.",
  }),
});

const FeatureSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

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
      icon: <Code size={24} className="text-blue-600" />,
      title: "Real-World Projects",
      description: "Apply your knowledge to real-world projects that enhance your portfolio and prepare you for industry challenges."
    },
    {
      icon: <Award size={24} className="text-blue-600" />,
      title: "Industry Certification",
      description: "Earn recognized certifications that validate your skills to potential employers."
    },
    {
      icon: <BookOpen size={24} className="text-blue-600" />,
      title: "Comprehensive Resources",
      description: "Access a vast library of learning materials, code samples, and additional resources to support your learning."
    },
    {
      icon: <Video size={24} className="text-blue-600" />,
      title: "Interactive Learning",
      description: "Engage with interactive lessons, coding challenges, and hands-on workshops for practical experience."
    },
  ];

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
      acceptTerms: false,
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    setIsSubmitted(true);
    form.reset();
    
    setTimeout(() => {
      setIsSubmitted(false);
    }, 3000);
  }

  return (
    <section id="features" className="py-16 bg-gray-50" ref={sectionRef}>
      <div className="container-custom">
        <div className="text-center mb-12">
          <h5 className="text-orange-500 font-semibold text-sm uppercase tracking-wider mb-2">Why Choose Us</h5>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Features That Set Us Apart
          </h2>
          <div className="w-20 h-1 bg-orange-500 mx-auto"></div>
          <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
            Our platform offers unique advantages designed to ensure your success in today's competitive tech landscape.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <AnimatedCard 
              key={index} 
              className="h-full bg-white shadow-sm border border-gray-200 rounded-lg"
              delay={index * 100}
            >
              <div className="w-12 h-12 mb-4 bg-blue-50 rounded-lg flex items-center justify-center">
                {feature.icon}
              </div>
              <h3 className="text-lg font-bold mb-2 text-gray-800">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </AnimatedCard>
          ))}
        </div>

        <div className="mt-20 bg-white rounded-lg shadow-lg overflow-hidden transition-opacity duration-1000 border border-gray-200 ${isVisible ? 'opacity-100' : 'opacity-0'}">
          <div className="grid md:grid-cols-2 gap-0">
            <div className="bg-blue-600 text-white p-8 md:p-10">
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
                  <p className="text-sm opacity-90">Hands-on projects with real-world applications</p>
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
            
            <div className="bg-white p-8 md:p-10">
              {isSubmitted ? (
                <div className="text-center py-8">
                  <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h4 className="text-xl font-bold text-gray-800 mb-2">Thank You!</h4>
                  <p className="text-gray-600">Your message has been sent successfully. We'll be in touch soon.</p>
                </div>
              ) : (
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                    <h4 className="text-xl font-bold text-gray-800 mb-4">Contact Us</h4>
                    
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-gray-700">Your Name</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="John Doe" 
                              {...field} 
                              className="border-gray-300 focus:ring-blue-600 focus:border-blue-600" 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-gray-700">Email Address</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="john@example.com" 
                              type="email" 
                              {...field} 
                              className="border-gray-300 focus:ring-blue-600 focus:border-blue-600" 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-gray-700">Message</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="How can we help you?" 
                              {...field} 
                              className="border-gray-300 focus:ring-blue-600 focus:border-blue-600 min-h-[100px]" 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="acceptTerms"
                      render={({ field }) => (
                        <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                          <FormControl>
                            <Checkbox 
                              checked={field.value} 
                              onCheckedChange={field.onChange} 
                              className="data-[state=checked]:bg-blue-600 data-[state=checked]:border-blue-600" 
                            />
                          </FormControl>
                          <div className="space-y-1 leading-none">
                            <FormLabel className="text-sm font-normal text-gray-700">
                              I accept the <a href="#" className="text-blue-600 hover:underline">terms and conditions</a>
                            </FormLabel>
                            <FormMessage />
                          </div>
                        </FormItem>
                      )}
                    />
                    
                    <button 
                      type="submit" 
                      className="w-full bg-orange-500 hover:bg-orange-600 text-white font-medium py-2.5 px-4 rounded transition-colors"
                    >
                      Send Message
                    </button>
                  </form>
                </Form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
