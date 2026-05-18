'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { Section } from '../ui/Section';

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'How do I book a transfer?',
      answer: 'You can book through the contact form, call me directly at +44 7624 354427, or email me. I recommend booking at least 24 hours in advance, though I can accommodate last-minute requests subject to availability.',
    },
    {
      question: 'Do you track flight arrivals?',
      answer: 'Yes, I monitor all flight arrivals in real-time. If your flight is delayed or arrives early, I will adjust accordingly at no extra charge. I ensure I\'m always there to meet you.',
    },
    {
      question: 'What areas do you cover?',
      answer: 'I provide coverage across the entire Isle of Man, including Douglas, Ramsey, Peel, Castletown, and all areas in between. I also offer scenic tour routes for visitors.',
    },
    {
      question: 'Are you licenced and insured?',
      answer: 'Yes, absolutely. I am fully licenced, insured, and have over 10 years of professional driving experience. Your safety and comfort are my top priorities.',
    },
    {
      question: 'What is your cancellation policy?',
      answer: 'I offer free cancellation up to 24 hours before your scheduled pickup. Cancellations within 24 hours may incur a 50% charge. No-shows are charged in full.',
    },
    {
      question: 'Do you offer regular business accounts?',
      answer: 'Yes, I can arrange regular booking arrangements for businesses with monthly billing. Contact me to discuss your requirements.',
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'I accept cash, all major credit and debit cards, and bank transfers. Business clients can also set up monthly invoicing arrangements.',
    },
  ];

  return (
    <Section id="faq">
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          <span className="text-gradient-gold">Frequently Asked Questions</span>
        </h2>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
          Everything you need to know about our services
        </p>
      </motion.div>

      <div className="max-w-4xl mx-auto">
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            className="mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
          >
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full bg-[#1a1a1a] border border-gray-800 rounded-xl p-6 text-left transition-all duration-300 hover:border-[#D4AF37]"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-lg md:text-xl font-semibold text-white pr-8">
                  {faq.question}
                </h3>
                <div className="flex-shrink-0">
                  {openIndex === index ? (
                    <Minus className="w-6 h-6 text-[#D4AF37]" />
                  ) : (
                    <Plus className="w-6 h-6 text-[#D4AF37]" />
                  )}
                </div>
              </div>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="text-gray-400 mt-4 leading-relaxed">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="mt-12 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <p className="text-gray-400 mb-2">Still have questions?</p>
        <a href="#contact" className="text-[#D4AF37] hover:text-[#F4E4B0] transition-colors font-semibold">
          Contact us directly →
        </a>
      </motion.div>
    </Section>
  );
};
