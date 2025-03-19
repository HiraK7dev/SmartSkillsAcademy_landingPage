
import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-resolutionBlue text-white py-8">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <img 
              src="/lovable-uploads/caf03ba0-ea5c-468e-91cb-eec3d332ede5.png" 
              alt="Smart Skills Logo" 
              className="h-16 w-auto invert" 
            />
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-sm">© {currentYear} Smart Skills Academy. All rights reserved.</p>
            <p className="text-sm mt-1">Designed with ❤️ for skill development</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
