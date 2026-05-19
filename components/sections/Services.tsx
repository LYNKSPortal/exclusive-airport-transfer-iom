'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Plane, Briefcase, MapPin, Users, Clock, Shield, Camera } from 'lucide-react';
import { Section } from '../ui/Section';
import { Card } from '../ui/Card';

export const Services = () => {
  const services = [
    {
      icon: Plane,
      title: 'Airport Transfers',
      description: 'Reliable transfers to and from Isle of Man Airport. Flight tracking and meet & greet service to ensure you never wait.',
      features: ['Flight Monitoring', 'Meet & Greet', 'Luggage Help'],
    },
    {
      icon: MapPin,
      title: 'TT Course Tours',
      description: 'Experience the world-famous TT course with a guided tour. Perfect for motorsport enthusiasts visiting the Isle of Man.',
      features: ['TT Course Route', 'Photo Stops', 'Expert Commentary'],
    },
    {
      icon: Camera,
      title: 'Tourist Attraction Tours',
      description: 'Discover the Isle of Man\'s stunning attractions. From Laxey Wheel to Peel Castle, explore all the island has to offer.',
      features: ['Custom Itineraries', 'Scenic Routes', 'Local Knowledge'],
    },
    {
      icon: Briefcase,
      title: 'Business Travel',
      description: 'Professional driver service for business travelers. Punctual and comfortable transportation for meetings and events.',
      features: ['Punctual Service', 'Clean Vehicle', 'Professional'],
    },
  ];

  return (
    <Section id="services" dark>
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          <span className="text-gradient-gold">Our Services</span>
        </h2>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
          Professional transportation services across the Isle of Man
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card hover glass>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#D4AF37] to-[#B8941F] rounded-xl flex items-center justify-center">
                    <service.icon className="w-8 h-8 text-black" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-400 mb-4 leading-relaxed">{service.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {service.features.map((feature) => (
                      <span
                        key={feature}
                        className="inline-flex items-center px-3 py-1 bg-[#D4AF37]/10 border border-[#D4AF37]/30 rounded-full text-sm text-[#D4AF37]"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="mt-16 grid md:grid-cols-3 gap-8"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <div className="text-center">
          <div className="flex justify-center mb-4">
            <Clock className="w-12 h-12 text-[#D4AF37]" />
          </div>
          <h4 className="text-xl font-bold text-white mb-2">24/7 Availability</h4>
          <p className="text-gray-400">Round-the-clock service for your convenience</p>
        </div>
        <div className="text-center">
          <div className="flex justify-center mb-4">
            <Shield className="w-12 h-12 text-[#D4AF37]" />
          </div>
          <h4 className="text-xl font-bold text-white mb-2">Fully Insured</h4>
          <p className="text-gray-400">Complete peace of mind with comprehensive coverage</p>
        </div>
        <div className="text-center">
          <div className="flex justify-center mb-4">
            <Users className="w-12 h-12 text-[#D4AF37]" />
          </div>
          <h4 className="text-xl font-bold text-white mb-2">Professional Service</h4>
          <p className="text-gray-400">Experienced, licensed, and courteous driver</p>
        </div>
      </motion.div>
    </Section>
  );
};
