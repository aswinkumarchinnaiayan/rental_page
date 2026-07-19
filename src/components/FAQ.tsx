import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, HelpCircle, MessageSquare } from 'lucide-react';
import { FAQS, getWhatsAppUrl } from '../data';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-brand-light-gray border-b border-brand-border">
      <div className="w-full max-w-[850px] mx-auto px-6">
        
        {/* Section Title */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-extrabold uppercase tracking-[0.25em] text-brand-primary block mb-3"
          >
            HAVE QUESTIONS?
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold tracking-tight text-brand-secondary"
          >
            Frequently Asked Questions
          </motion.h2>
          <p className="text-gray-500 mt-4 text-sm sm:text-base">
            Everything you need to know about our premium car & bike rentals.
          </p>
        </div>

        {/* Accordion List */}
        <div className="flex flex-col gap-4">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-white border border-brand-border rounded-xl overflow-hidden transition-all duration-300 shadow-sm hover:shadow-md"
              >
                {/* Trigger Button */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left gap-4 cursor-pointer hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <HelpCircle className="w-5 h-5 text-brand-primary shrink-0" />
                    <span className="text-sm sm:text-base font-extrabold text-brand-secondary">
                      {faq.question}
                    </span>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 text-brand-primary' : ''
                    }`}
                  />
                </button>

                {/* Animated Collapsible Body */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                    >
                      <div className="px-6 pb-6 pt-2 border-t border-brand-border text-gray-500 text-sm sm:text-base leading-relaxed font-normal">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* CTA Footer in FAQ */}
        <div className="mt-12 text-center">
          <p className="text-sm text-gray-500 mb-4 font-medium">
            Still have queries or need customized trip planning?
          </p>
          <a
            href={getWhatsAppUrl(undefined, 'FAQ Custom Question')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-brand-secondary text-white font-semibold text-xs uppercase tracking-wider px-6 py-3.5 rounded-[12px] hover:bg-brand-primary transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Chat Directly on WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
}
