
import React from 'react';
import { ArrowUpRight, Twitter, Linkedin, Youtube, Instagram, Mail, Phone } from 'lucide-react';

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
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          <div className="lg:col-span-2">
            <a href="#" className="text-2xl font-bold text-white mb-4 inline-block">
              Smart<span className="text-orange-500"> Skills </span>Academy
            </a>

            <p className="text-gray-400 mb-6 max-w-md">
              Empowering individuals to master modern tech skills through expert-led courses, hands-on projects, and personalized mentorship.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-orange-500 hover:text-white transition-colors" aria-label="Twitter">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-orange-500 hover:text-white transition-colors" aria-label="LinkedIn">
                <Linkedin size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-orange-500 hover:text-white transition-colors" aria-label="YouTube">
                <Youtube size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-orange-500 hover:text-white transition-colors" aria-label="Instagram">
                <Instagram size={18} />
              </a>
            </div>
          </div>
          
          {footerLinks.map((section, index) => (
            <div key={index}>
              <h3 className="font-bold text-white mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link, i) => (
                  <li key={i}>
                    <a 
                      href={link.href} 
                      className="text-gray-400 hover:text-orange-500 transition-colors inline-flex items-center text-sm group"
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
          <div className="flex flex-wrap gap-4 text-sm text-gray-500">
            <a href="#" className="hover:text-orange-500 transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-orange-500 transition-colors">
              Privacy Policy
            </a>
            <div className="flex items-center">
              <Mail size={16} className="mr-2 text-orange-500" />
              <a href="mailto:contact@smartskills.academy" className="hover:text-orange-500 transition-colors">
                contact@smartskills.academy
              </a>
            </div>
            <div className="flex items-center">
              <Phone size={16} className="mr-2 text-orange-500" />
              <a href="tel:+1234567890" className="hover:text-orange-500 transition-colors">
                (123) 456-7890
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
