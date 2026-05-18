'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, Star, Shield, Clock } from 'lucide-react';
import { Button } from '../ui/Button';

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/Ronaldsway_Airport_Terminal_Building.jpg"
          alt="Ronaldsway Airport Terminal Building"
          fill
          className="object-cover"
          priority
          quality={90}
        />
        <div className="absolute inset-0 bg-black/70"></div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80 z-10"></div>

      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl relative z-20 pt-20">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.div
              className="inline-flex items-center space-x-2 bg-[#D4AF37]/10 border border-[#D4AF37]/30 rounded-full px-4 py-2 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Star className="w-4 h-4 text-[#D4AF37]" fill="#D4AF37" />
              <span className="text-sm text-[#D4AF37] font-medium">Professional Airport Transfer Service</span>
            </motion.div>

            <h1 className="text-3xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="text-white">Reliable Airport Transfers</span>
              <br />
              <span className="text-gradient-gold">Across the Isle of Man</span>
            </h1>

            <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
              Professional airport transfer and chauffeur service across the Isle of Man. 
              Comfortable, punctual, and reliable transportation you can count on.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12 justify-center">
              <Button href="#contact" variant="primary" size="lg">
                Book Your Transfer
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-6 max-w-2xl mx-auto">
              <motion.div
                className="text-center"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex justify-center mb-2">
                  <Shield className="w-8 h-8 text-[#D4AF37]" />
                </div>
                <p className="text-sm text-gray-400">Fully Licenced</p>
              </motion.div>
              <motion.div
                className="text-center"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex justify-center mb-2">
                  <Clock className="w-8 h-8 text-[#D4AF37]" />
                </div>
                <p className="text-sm text-gray-400">24/7 Available</p>
              </motion.div>
              <motion.div
                className="text-center"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex justify-center mb-2">
                  <Star className="w-8 h-8 text-[#D4AF37]" fill="#D4AF37" />
                </div>
                <p className="text-sm text-gray-400">5-Star Rated</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="hidden md:block absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-[#D4AF37] rounded-full flex justify-center pt-2">
          <div className="w-1 h-3 bg-[#D4AF37] rounded-full"></div>
        </div>
      </motion.div>
    </section>
  );
};
