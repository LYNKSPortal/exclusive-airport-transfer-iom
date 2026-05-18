'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Award, Shield, Users, TrendingUp } from 'lucide-react';
import { Section } from '../ui/Section';
import { Card } from '../ui/Card';

export const About = () => {
  const stats = [
    { icon: Award, value: '10+', label: 'Years Experience' },
    { icon: Users, value: '300+', label: 'Happy Clients' },
    { icon: Shield, value: '100%', label: 'Licenced & Insured' },
    { icon: TrendingUp, value: '5.0', label: 'Customer Rating' },
  ];

  return (
    <Section id="about">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient-gold">About Us</span>
          </h2>
          <p className="text-xl text-gray-300 mb-6 leading-relaxed">
            Exclusive Airport Transfer is a professional chauffeur service based in the Isle of Man, 
            providing reliable transportation since 2014.
          </p>
          <p className="text-gray-400 mb-6 leading-relaxed">
            I specialize in airport transfers, business travel, and island-wide transportation 
            services. My commitment to punctuality, safety, and customer satisfaction has made 
            me a trusted choice for travelers and businesses across the Isle of Man.
          </p>
          <p className="text-gray-400 mb-8 leading-relaxed">
            With a well-maintained vehicle and years of professional driving experience, 
            I ensure every journey is comfortable, safe, and reliable. 
            Whether you're traveling for business or pleasure, you can count on professional service.
          </p>

          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card glass hover={false} className="text-center">
                  <div className="flex justify-center mb-3">
                    <stat.icon className="w-8 h-8 text-[#D4AF37]" />
                  </div>
                  <div className="text-3xl font-bold text-gradient-gold mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="relative"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37] to-[#B8941F] rounded-2xl blur-3xl opacity-20 md:opacity-20"></div>
            <Card glass className="relative bg-[#8B7520]/40 md:bg-transparent">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#D4AF37] to-[#B8941F] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Safety First</h3>
                    <p className="text-white md:text-gray-400">
                      Fully licenced, insured, and experienced driver. Your safety and comfort 
                      are my top priorities on every journey.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#D4AF37] to-[#B8941F] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Award className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Reliable Service</h3>
                    <p className="text-white md:text-gray-400">
                      Well-maintained vehicle, regularly serviced to ensure a comfortable and 
                      dependable journey every time.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#D4AF37] to-[#B8941F] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Professional Service</h3>
                    <p className="text-white md:text-gray-400">
                      Years of experience providing punctual, courteous service. I'm dedicated to 
                      making every journey smooth and stress-free.
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </motion.div>
      </div>
    </Section>
  );
};
