import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-gray-900">
      <div className="px-4 md:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">
              <span className="text-gradient-gold">Exclusive</span>
              <span className="text-white ml-2">Airport Transfer</span>
            </h3>
            <p className="text-gray-400">
              Professional driver and airport transfer service across the Isle of Man.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="text-gray-400 hover:text-[#D4AF37] transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#fleet" className="text-gray-400 hover:text-[#D4AF37] transition-colors">
                  Our Fleet
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-gray-400 hover:text-[#D4AF37] transition-colors">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#faq" className="text-gray-400 hover:text-[#D4AF37] transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-[#D4AF37] transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li className="text-gray-400">Airport Transfers</li>
              <li className="text-gray-400">Business Travel</li>
              <li className="text-gray-400">Island-Wide Service</li>
              <li className="text-gray-400">Regular Bookings</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                <a href="tel:+447624354427" className="text-gray-400 hover:text-[#D4AF37] transition-colors">
                  +44 7624 354427
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                <a href="mailto:bookings@eat.co.im" className="text-gray-400 hover:text-[#D4AF37] transition-colors">
                  bookings@eat.co.im
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                <span className="text-gray-400">
                  Douglas, Isle of Man
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-900 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400">
              © {currentYear} Exclusive Airport Transfer. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-[#D4AF37] transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-[#D4AF37] transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-[#D4AF37] transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
