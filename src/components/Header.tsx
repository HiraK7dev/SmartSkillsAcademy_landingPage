
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import Button from './Button';
import { Menu, X, ChevronDown } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    setIsScrolled(scrollPosition > 10);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '#' },
    { label: 'Courses', href: '#courses' },
    { label: 'Features', href: '#features' },
    { label: 'Contact', href: '#contact' },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled 
          ? 'py-3 bg-white shadow-md' 
          : 'py-5 bg-transparent'
      )}
    >
      <div className="container-custom flex items-center justify-between">
        <div className="flex items-center">
          <img src="logo.png" alt="Logo" className="w-12 h-12 object-contain" />
          <a href="#" className="text-xl font-bold text-gray-800 ml-2">
            Smart <span className="text-blue-600">Skills</span> Academy
          </a>
        </div>

        {/* Desktop Navigation */}
        {!isMobile && (
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-gray-700 hover:text-blue-600 transition-colors text-sm font-semibold"
              >
                {item.label}
              </a>
            ))}
            <div className="relative group">
              <button className="flex items-center text-gray-700 hover:text-blue-600 transition-colors text-sm font-semibold">
                Pages <ChevronDown size={16} className="ml-1 transition-transform group-hover:rotate-180" />
              </button>
              <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 transition-all duration-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible">
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">About Us</a>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Services</a>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Blog</a>
              </div>
            </div>
          </nav>
        )}

        <div className="hidden md:flex items-center gap-4">
          <a href="#contact" className="web-veda-button-outline">
            Login
          </a>
          <a href="#contact" className="web-veda-button">
            Get Started
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobile && (
        <div
          className={cn(
            'fixed inset-0 z-40 bg-white pt-20 px-6 transition-transform duration-300 ease-in-out',
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          )}
        >
          <nav className="flex flex-col space-y-6">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-xl font-medium text-gray-800 hover:text-blue-600"
                onClick={closeMenu}
              >
                {item.label}
              </a>
            ))}
            <div className="py-3">
              <div className="text-xl font-medium text-gray-800 mb-3">Pages</div>
              <div className="flex flex-col space-y-3 pl-3">
                <a href="#" className="text-base text-gray-600 hover:text-blue-600">About Us</a>
                <a href="#" className="text-base text-gray-600 hover:text-blue-600">Services</a>
                <a href="#" className="text-base text-gray-600 hover:text-blue-600">Blog</a>
              </div>
            </div>
            <div className="flex flex-col space-y-4 pt-6">
              <Button variant="outline" className="border-blue-600 text-blue-600 w-full">Login</Button>
              <Button className="bg-gradient-to-r from-blue-600 to-blue-700 w-full">Get Started</Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
