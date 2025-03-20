
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import { useEffect } from "react";

const benefits = [
  "Hands-on project-based learning",
  "Access to mobile testing devices",
  "Access to exclusive developer community",
  "Certificate of completion"
];

const CallToAction = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll(".animate-on-scroll");
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section className="py-24 px-6 md:px-10 relative overflow-hidden bg-white">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-[#004E89]/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-[#FF6B35]/5 rounded-full blur-3xl -z-10"></div>
      <div className="max-w-7xl mx-auto">
        
        <div className="mt-24 text-center space-y-8 animate-on-scroll">
          <h2 className="text-3xl md:text-4xl font-bold">
            Frequently Asked Questions
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 mt-12 text-left">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:border-[#004E89]/30 transition-colors">
              <h3 className="text-xl font-semibold mb-3 text-[#004E89]">Do I need prior coding experience?</h3>
              <p className="text-foreground/70">
                Basic JavaScript knowledge is recommended, but our curriculum includes refresher modules to help beginners get up to speed.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:border-[#004E89]/30 transition-colors">
              <h3 className="text-xl font-semibold mb-3 text-[#004E89]">What is the time commitment?</h3>
              <p className="text-foreground/70">
                Students should expect to dedicate at least 20-25 hours per week to classes, projects, and self-study for optimal learning outcomes.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:border-[#004E89]/30 transition-colors">
              <h3 className="text-xl font-semibold mb-3 text-[#004E89]">What kind of support will I receive?</h3>
              <p className="text-foreground/70">
                Students receive mentorship from experienced mobile developers, code reviews, career coaching, and lifetime access to our alumni network.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:border-[#004E89]/30 transition-colors">
              <h3 className="text-xl font-semibold mb-3 text-[#004E89]">Do I need a Mac for development?</h3>
              <p className="text-foreground/70">
                While a Mac is required for iOS development, Android development can be done on Windows, Mac, or Linux. Our course focuses primarily on Android with React Native.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
