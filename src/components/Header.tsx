
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import Button from './Button';
import { Menu, X } from 'lucide-react';
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
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4',
        isScrolled 
          ? 'bg-white/90 backdrop-blur-lg shadow-sm' 
          : 'bg-transparent'
      )}
    >
      <div className="container-custom flex items-center justify-between">
        <div className="flex items-center">
        <img src="logo.png" alt="Logo" className="w-20" />
          <a href="#" className="text-2xl font-bold text-resolutionBlue">
            Smart <span className="text-celestialBlue">Skills </span>Academy
          </a>
        </div>

        {/* Desktop Navigation */}
        {!isMobile && (
          <nav className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-gray-700 hover:text-celestialBlue transition-colors font-medium"
              >
                {item.label}
              </a>
            ))}
          </nav>
        )}

        <div className="hidden md:flex items-center space-x-4">
          <a href='#contact'>
          <Button variant="primary" size="sm">
            Get Started
          </Button>
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
                className="text-xl font-medium text-gray-800 hover:text-celestialBlue"
                onClick={closeMenu}
              >
                {item.label}
              </a>
            ))}
            <div className="flex flex-col space-y-4 pt-6">
              <Button variant="outline">Sign In</Button>
              <Button>Get Started</Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
