
import React from 'react';
import { ArrowUpRight, Twitter, Linkedin, Youtube, Instagram, Mail, Phone, MapPin, Send } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: "Courses",
      links: [
        { label: "Web Development", href: "#" },
        { label: "Mobile Development", href: "#" },
        { label: "UI/UX Design", href: "#" },
        { label: "Data Science", href: "#" },
        { label: "Cloud Computing", href: "#" }
      ]
    },
    {
      title: "Company",
      links: [
        { label: "About Us", href: "#about" },
        { label: "Our Team", href: "#" },
        { label: "Blog", href: "#" },
        { label: "Careers", href: "#" },
        { label: "Contact Us", href: "#contact" }
      ]
    },
    {
      title: "Resources",
      links: [
        { label: "Free Tutorials", href: "#" },
        { label: "Documentation", href: "#" },
        { label: "Community", href: "#" },
        { label: "FAQ", href: "#" },
        { label: "Student Projects", href: "#" }
      ]
    }
  ];

  return (
    <footer className="bg-gray-900 pt-20 pb-10 relative">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-blue-800"></div>
      <div className="absolute top-0 right-0 w-40 h-40 bg-blue-500 rounded-full opacity-5 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-40 h-40 bg-orange-500 rounded-full opacity-5 blur-3xl"></div>
      
      <div className="container-custom">
        {/* Newsletter Section */}
        <div className="bg-gray-800 rounded-2xl p-8 mb-16 relative overflow-hidden shadow-xl">
          <div className="absolute top-0 right-0 w-72 h-72 bg-blue-600 rounded-full opacity-10 -translate-y-1/2 translate-x-1/2"></div>
          
          <div className="grid md:grid-cols-2 gap-8 items-center relative">
            <div>
              <h3 className="text-2xl font-bold text-white mb-3">Subscribe to Our Newsletter</h3>
              <p className="text-gray-400 mb-0">Stay updated with the latest courses, tech news and special offers.</p>
            </div>
            <div>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 text-white rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-r-lg flex items-center justify-center transition-colors">
                  <Send className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-16">
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center mb-6">
              <img src="logo.png" alt="Logo" className="w-10 h-10 object-contain" />
              <span className="text-xl font-bold text-white ml-2">
                Smart<span className="text-blue-500"> Skills </span>Academy
              </span>
            </a>

            <p className="text-gray-400 mb-6 max-w-md leading-relaxed">
              Empowering individuals to master modern tech skills through expert-led courses, hands-on projects, and personalized mentorship.
            </p>
            
            <div className="space-y-3 mb-8">
              <div className="flex items-start">
                <MapPin className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />
                <span className="ml-3 text-gray-400">
                  1234 Tech Lane, San Francisco, CA 94107
                </span>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 text-blue-500 flex-shrink-0" />
                <a href="mailto:contact@smartskills.academy" className="ml-3 text-gray-400 hover:text-blue-500 transition-colors">
                  contact@smartskills.academy
                </a>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 text-blue-500 flex-shrink-0" />
                <a href="tel:+1234567890" className="ml-3 text-gray-400 hover:text-blue-500 transition-colors">
                  (123) 456-7890
                </a>
              </div>
            </div>
            
            <div className="flex space-x-3">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-blue-600 hover:text-white transition-colors" aria-label="Twitter">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-blue-600 hover:text-white transition-colors" aria-label="LinkedIn">
                <Linkedin size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-blue-600 hover:text-white transition-colors" aria-label="YouTube">
                <Youtube size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-blue-600 hover:text-white transition-colors" aria-label="Instagram">
                <Instagram size={18} />
              </a>
            </div>
          </div>
          
          {footerLinks.map((section, index) => (
            <div key={index}>
              <h3 className="font-bold text-white mb-6 relative inline-block after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-10 after:h-1 after:bg-blue-600">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link, i) => (
                  <li key={i}>
                    <a 
                      href={link.href} 
                      className="text-gray-400 hover:text-blue-500 transition-colors inline-flex items-center group"
                    >
                      {link.label}
                      <ArrowUpRight 
                        size={14} 
                        className="ml-1 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" 
                      />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-500 text-sm mb-4 md:mb-0">
            © {currentYear} SmartSkills Academy. All rights reserved.
          </div>
          <div className="flex flex-wrap gap-6 text-sm text-gray-500">
            <a href="#" className="hover:text-blue-500 transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-blue-500 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-blue-500 transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
