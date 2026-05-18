'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { Button } from '../ui/Button';

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
    } else {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
    }
    return () => {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-black/95 backdrop-blur-lg border-b border-gray-800 shadow-lg'
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <motion.div
            className="flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}
          >
            <div className="text-2xl md:text-3xl font-bold">
              <span className="text-gradient-gold">Exclusive</span>
              <span className="text-white ml-2">Airport Transfer</span>
            </div>
          </motion.div>

          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-white hover:text-[#D4AF37] transition-colors duration-300 font-medium"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="hidden lg:flex items-center space-x-4">
            <a href="tel:+447624354427" className="flex items-center text-white hover:text-[#D4AF37] transition-colors">
              <Phone className="w-4 h-4 mr-2" />
              <span>+44 7624 354427</span>
            </a>
            <Button href="#contact" variant="primary" size="sm">
              Book Now
            </Button>
          </div>

          <button
            className="lg:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden fixed inset-0 top-0 left-0 right-0 bottom-0 bg-gradient-to-br from-[#D4AF37] to-[#B8941F] z-[100] flex items-center justify-center">
            <button
              className="absolute top-6 right-6 text-black hover:text-white transition-colors z-[101]"
              onClick={() => setMobileMenuOpen(false)}
            >
              <X className="w-8 h-8" />
            </button>
            
            <div className="flex flex-col items-center space-y-8 text-center px-8 w-full">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-black hover:text-white transition-colors duration-300 font-bold text-3xl"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="tel:+447624354427" 
                className="flex items-center text-black hover:text-white transition-colors text-2xl font-semibold"
              >
                <Phone className="w-6 h-6 mr-3" />
                <span>+44 7624 354427</span>
              </a>
              <div>
                <Button href="#contact" variant="secondary" size="lg" onClick={() => setMobileMenuOpen(false)}>
                  Book Now
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </motion.nav>
  );
};
