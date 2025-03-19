
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
        { label: "About Us", href: "#" },
        { label: "Careers", href: "#" },
        { label: "Blog", href: "#" },
        { label: "Press", href: "#" },
        { label: "Partners", href: "#" }
      ]
    },
    {
      title: "Resources",
      links: [
        { label: "Documentation", href: "#" },
        { label: "Tutorials", href: "#" },
        { label: "Free Courses", href: "#" },
        { label: "FAQ", href: "#" },
        { label: "Community", href: "#" }
      ]
    }
  ];

  return (
    <footer className="bg-gray-50 pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          <div className="lg:col-span-2">
            <a href="#" className="text-2xl font-bold text-resolutionBlue mb-4 inline-block">
              DevCourse<span className="text-celestialBlue">HQ</span>
            </a>
            <p className="text-gray-600 mb-6 max-w-md">
              Transforming careers through expert-led tech education. Join our community of developers and launch your tech career today.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-celestialBlue hover:text-white transition-colors" aria-label="Twitter">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-celestialBlue hover:text-white transition-colors" aria-label="LinkedIn">
                <Linkedin size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-celestialBlue hover:text-white transition-colors" aria-label="YouTube">
                <Youtube size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-celestialBlue hover:text-white transition-colors" aria-label="Instagram">
                <Instagram size={18} />
              </a>
            </div>
          </div>
          
          {footerLinks.map((section, index) => (
            <div key={index}>
              <h3 className="font-bold text-gray-900 mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link, i) => (
                  <li key={i}>
                    <a 
                      href={link.href} 
                      className="text-gray-600 hover:text-celestialBlue transition-colors inline-flex items-center group"
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

        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-500 text-sm mb-4 md:mb-0">
            © {currentYear} DevCourseHQ. All rights reserved.
          </div>
          <div className="flex flex-wrap gap-4 text-sm text-gray-500">
            <a href="#" className="hover:text-celestialBlue transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-celestialBlue transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-celestialBlue transition-colors">
              Cookie Policy
            </a>
            <div className="flex items-center">
              <Mail size={16} className="mr-2 text-celestialBlue" />
              <a href="mailto:info@devcoursehq.com" className="hover:text-celestialBlue transition-colors">
                info@devcoursehq.com
              </a>
            </div>
            <div className="flex items-center">
              <Phone size={16} className="mr-2 text-celestialBlue" />
              <a href="tel:+1234567890" className="hover:text-celestialBlue transition-colors">
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
