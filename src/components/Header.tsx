
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
    { label: 'Courses', href: '#courses' },
    { label: 'About', href: '#about' },
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
          <a href="#" className="flex items-center">
            <img 
              src="/lovable-uploads/caf03ba0-ea5c-468e-91cb-eec3d332ede5.png" 
              alt="Smart Skills Logo" 
              className="h-10 md:h-12" 
            />
          </a>
        </div>

        {/* Desktop Navigation */}
        {!isMobile && (
          <nav className="hidden md:flex items-center space-x-12">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-resolutionBlue hover:text-celestialBlue transition-colors font-medium text-lg"
              >
                {item.label}
              </a>
            ))}
          </nav>
        )}

        <div className="hidden md:flex items-center">
          <Button 
            variant="primary" 
            size="md" 
            className="bg-resolutionBlue hover:bg-resolutionBlue/90 text-white px-8"
          >
            Login
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-resolutionBlue"
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
                className="text-xl font-medium text-resolutionBlue hover:text-celestialBlue"
                onClick={closeMenu}
              >
                {item.label}
              </a>
            ))}
            <div className="flex flex-col space-y-4 pt-6">
              <Button 
                className="bg-resolutionBlue hover:bg-resolutionBlue/90 text-white"
              >
                Login
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
