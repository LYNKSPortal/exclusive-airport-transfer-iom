'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import { Section } from '../ui/Section';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    pickupLocation: '',
    dropoffLocation: '',
    date: '',
    time: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      content: '+44 7624 354427',
      link: 'tel:+447624354427',
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'bookings@eat.co.im',
      link: 'mailto:bookings@eat.co.im',
    },
    {
      icon: MapPin,
      title: 'Location',
      content: 'Douglas, Isle of Man',
      link: null,
    },
    {
      icon: Clock,
      title: 'Hours',
      content: '24/7 Available',
      link: null,
    },
  ];

  return (
    <Section id="contact" dark>
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          <span className="text-gradient-gold">Book Your Transfer</span>
        </h2>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
          Get in touch to reserve your professional transportation service
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-3 gap-8">
        <motion.div
          className="lg:col-span-2"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Card glass>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:border-[#D4AF37] focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/20 transition-all"
                    placeholder="John Smith"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:border-[#D4AF37] focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/20 transition-all"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:border-[#D4AF37] focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/20 transition-all"
                    placeholder="+44 1624 000000"
                  />
                </div>
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-2">
                    Service Type *
                  </label>
                  <select
                    id="service"
                    name="service"
                    required
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-lg text-white focus:border-[#D4AF37] focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/20 transition-all"
                  >
                    <option value="">Select a service</option>
                    <option value="airport">Airport Transfer</option>
                    <option value="executive">Executive Travel</option>
                    <option value="island">Island-Wide Service</option>
                    <option value="corporate">Corporate Account</option>
                  </select>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="pickupLocation" className="block text-sm font-medium text-gray-300 mb-2">
                    Pickup Location *
                  </label>
                  <input
                    type="text"
                    id="pickupLocation"
                    name="pickupLocation"
                    required
                    value={formData.pickupLocation}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:border-[#D4AF37] focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/20 transition-all"
                    placeholder="e.g., Isle of Man Airport"
                  />
                </div>
                <div>
                  <label htmlFor="dropoffLocation" className="block text-sm font-medium text-gray-300 mb-2">
                    Drop-off Location *
                  </label>
                  <input
                    type="text"
                    id="dropoffLocation"
                    name="dropoffLocation"
                    required
                    value={formData.dropoffLocation}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:border-[#D4AF37] focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/20 transition-all"
                    placeholder="e.g., Douglas Town Centre"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="date" className="block text-sm font-medium text-gray-300 mb-2">
                    Date *
                  </label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    required
                    value={formData.date}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-lg text-white focus:border-[#D4AF37] focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/20 transition-all"
                  />
                </div>
                <div>
                  <label htmlFor="time" className="block text-sm font-medium text-gray-300 mb-2">
                    Time *
                  </label>
                  <input
                    type="time"
                    id="time"
                    name="time"
                    required
                    value={formData.time}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-lg text-white focus:border-[#D4AF37] focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/20 transition-all"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Additional Information
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:border-[#D4AF37] focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/20 transition-all resize-none"
                  placeholder="Pickup location, destination, special requirements..."
                ></textarea>
              </div>

              <Button type="submit" variant="primary" size="lg" className="w-full">
                <Send className="w-5 h-5 mr-2" />
                Submit Booking Request
              </Button>
            </form>
          </Card>
        </motion.div>

        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {contactInfo.map((info, index) => (
            <Card key={info.title} glass hover={false}>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#D4AF37] to-[#B8941F] rounded-lg flex items-center justify-center">
                    <info.icon className="w-6 h-6 text-black" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">{info.title}</h3>
                  {info.link ? (
                    <a
                      href={info.link}
                      className="text-gray-400 hover:text-[#D4AF37] transition-colors"
                    >
                      {info.content}
                    </a>
                  ) : (
                    <p className="text-gray-400">{info.content}</p>
                  )}
                </div>
              </div>
            </Card>
          ))}

          <Card glass className="bg-gradient-to-br from-[#D4AF37]/10 to-[#B8941F]/10 border-[#D4AF37]/30">
            <h3 className="text-xl font-bold text-white mb-3">Why Choose Us?</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-start">
                <span className="text-[#D4AF37] mr-2">✓</span>
                <span>Professional licensed chauffeurs</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#D4AF37] mr-2">✓</span>
                <span>Luxury fleet of premium vehicles</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#D4AF37] mr-2">✓</span>
                <span>24/7 availability</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#D4AF37] mr-2">✓</span>
                <span>Flight tracking & monitoring</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#D4AF37] mr-2">✓</span>
                <span>Competitive pricing</span>
              </li>
            </ul>
          </Card>
        </motion.div>
      </div>
    </Section>
  );
};
