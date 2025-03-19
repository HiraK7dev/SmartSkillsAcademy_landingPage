
import React from 'react';
import { Phone, Mail, Globe, MapPin } from 'lucide-react';

const ContactSection = () => {
  return (
    <section className="py-16 bg-[#B5D0F1]">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold mb-10 text-black">CONTACT US</h2>
          
          <div className="space-y-6 text-xl">
            <div className="flex items-center gap-4">
              <Phone size={24} className="text-resolutionBlue" />
              <p className="font-bold">6002113161</p>
            </div>
            
            <div className="flex items-center gap-4">
              <Mail size={24} className="text-resolutionBlue" />
              <p>smartskillsacademy24@gmail.com</p>
            </div>
            
            <div className="flex items-center gap-4">
              <Globe size={24} className="text-resolutionBlue" />
              <p>www.smartskills.net.in</p>
            </div>
            
            <div className="mt-10">
              <div className="flex items-start gap-4">
                <MapPin size={24} className="text-resolutionBlue flex-shrink-0 mt-1" />
                <div>
                  <p className="font-bold mb-2">Address:</p>
                  <p>Kochgaon, Biswanath Chariali,</p>
                  <p>784176, Assam, India.</p>
                </div>
              </div>
            </div>
            
            <div className="mt-6">
              <div className="flex items-start gap-4">
                <MapPin size={24} className="text-resolutionBlue flex-shrink-0 mt-1" />
                <div>
                  <p>College Road, Biswanath Chariali</p>
                  <p>784176, Assam, India</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
