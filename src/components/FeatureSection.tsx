
import React, { useEffect, useRef, useState } from 'react';
import { Code, UserCheck, Briefcase, Award, BookOpen, Video, Users, Globe } from 'lucide-react';
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
      icon: <Code size={24} className="text-[#004E89]" />,
      title: "Real-World Projects",
      description: "Apply your knowledge to real-world projects that enhance your portfolio and prepare you for industry challenges."
    },
    {
      icon: <Award size={24} className="text-[#004E89]" />,
      title: "Industry Certification",
      description: "Earn recognized certifications that validate your skills to potential employers."
    },
    {
      icon: <BookOpen size={24} className="text-[#004E89]" />,
      title: "Comprehensive Resources",
      description: "Access a vast library of learning materials, code samples, and additional resources to support your learning."
    },
    {
      icon: <Video size={24} className="text-[#004E89]" />,
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
    <section id="features" className="section-padding bg-[#f9f9f9]" ref={sectionRef}>
      <div className="container-custom">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-[#004E89]/10 text-[#004E89] rounded-full text-sm font-medium mb-5">
            Why Choose Us
          </span>
          <h2 className="section-heading">
            Features That <span className="bg-gradient-to-r from-[#004E89] to-[#FF6B35] bg-clip-text text-transparent">Set Us Apart</span>
          </h2>
          <p className="section-subheading">
            Our platform offers unique advantages designed to ensure your success in today's competitive tech landscape.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <AnimatedCard 
              key={index} 
              className="h-full bg-white border border-gray-100"
              delay={index * 100}
            >
              <div className="w-12 h-12 mb-4 bg-[#004E89]/10 rounded-lg flex items-center justify-center">
                {feature.icon}
              </div>
              <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </AnimatedCard>
          ))}
        </div>

        <div className={`mt-20 bg-gradient-to-r from-[#004E89] to-[#0076CE] rounded-2xl overflow-hidden transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
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
            
            <div className="bg-white p-6 rounded-xl shadow-md">
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
                    <h4 className="text-xl font-bold text-[#004E89] mb-4">Contact Us</h4>
                    
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Your Name</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="John Doe" 
                              {...field} 
                              className="border-gray-300 focus:border-[#004E89] focus:ring-[#004E89]/20" 
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
                          <FormLabel>Email Address</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="john@example.com" 
                              type="email" 
                              {...field} 
                              className="border-gray-300 focus:border-[#004E89] focus:ring-[#004E89]/20" 
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
                          <FormLabel>Message</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="How can we help you?" 
                              {...field} 
                              className="border-gray-300 focus:border-[#004E89] focus:ring-[#004E89]/20 min-h-[100px]" 
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
                              className="data-[state=checked]:bg-[#004E89] data-[state=checked]:border-[#004E89]" 
                            />
                          </FormControl>
                          <div className="space-y-1 leading-none">
                            <FormLabel className="text-sm font-normal">
                              I accept the <a href="#" className="text-[#004E89] hover:underline">terms and conditions</a>
                            </FormLabel>
                            <FormMessage />
                          </div>
                        </FormItem>
                      )}
                    />
                    
                    <button 
                      type="submit" 
                      className="w-full bg-[#004E89] hover:bg-[#004E89]/90 text-white font-medium py-2.5 px-4 rounded-lg transition-colors"
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
