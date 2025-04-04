
import React, { useEffect } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import FeatureSection from '../components/FeatureSection';
import InstructorSection from '../components/InstructorSection';
import TestimonialSection from '../components/TestimonialSection';
import CTASection from '../components/CTASection';
import Footer from '../components/Footer';
import ContactForm from '@/components/ContactForm';
import CallToAction from '@/components/CallToAction';
import CourseSection from '@/components/CourseSection';

const Index = () => {
  useEffect(() => {
    // Animation for fade-in sections on scroll
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.1
    });

    document.querySelectorAll('.fade-in-section').forEach(section => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-white text-gray-800 overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <CourseSection />
        <FeatureSection />
        {/* <InstructorSection /> */}
        {/* <TestimonialSection /> */}
        {/* <CTASection /> */}
        <CallToAction/>
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
