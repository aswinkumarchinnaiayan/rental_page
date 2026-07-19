import React from 'react';
import { motion } from 'motion/react';
import { Headphones, Sparkles, Coins, Zap, ShieldCheck, CalendarRange } from 'lucide-react';

export default function WhyChooseUs() {
  const features = [
    {
      title: '24/7 Roadside Support',
      description: 'Stuck on the highway at midnight? Our emergency support team is available round-the-clock for instant assistance across Tamil Nadu.',
      icon: Headphones,
    },
    {
      title: 'Immaculately Maintained',
      description: 'Our fleet is maintained strictly at certified dealer workshops. Absolute engine smoothness, functional AC, and supreme cleanliness are guaranteed.',
      icon: Sparkles,
    },
    {
      title: 'Transparent, Affordable Rates',
      description: 'Enjoy premium, executive driving experience without hidden costs or extra charges. Honest security deposits and flexible terms.',
      icon: Coins,
    },
    {
      title: 'Instant Booking Response',
      description: 'Skip long registration procedures. Chat on WhatsApp or make a call; our team provides instant availability and booking quotes in under 5 minutes.',
      icon: Zap,
    },
    {
      title: 'Uncompromised Safety & Security',
      description: 'Every vehicle is fully insured and strictly equipped with crucial safety features like dual airbags, ABS, and standard GPS tracking systems.',
      icon: ShieldCheck,
    },
    {
      title: 'Ultra-Flexible Rentals',
      description: 'Whether you need a sports bike for a 12-hour weekend run or an SUV for a monthly corporate contract, we adapt to your specific timeline.',
      icon: CalendarRange,
    },
  ];

  return (
    <section id="why-choose-us" className="py-24 bg-brand-light-gray border-b border-brand-border">
      <div className="w-full max-w-[1320px] mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-extrabold uppercase tracking-[0.25em] text-brand-primary block mb-3"
          >
            WHY DRIVE WITH US
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-brand-secondary"
          >
            We Make Your Ride <span className="text-brand-primary font-extrabold">Better</span>
          </motion.h2>
          <p className="text-gray-500 mt-4 max-w-xl mx-auto text-sm sm:text-base">
            No middle-men, no automated system bugs. Just direct human hospitality, top-tier vehicles, and bulletproof service quality.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ y: -8, boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.05), 0 8px 10px -6px rgb(0 0 0 / 0.05)' }}
                className="bg-white p-8 rounded-[14px] border border-brand-border hover:border-brand-primary/30 transition-all duration-300 group flex flex-col items-start text-left"
              >
                {/* Outline Icon Wrapper */}
                <div className="w-14 h-14 rounded-xl border border-brand-primary/20 bg-brand-primary/5 flex items-center justify-center text-brand-primary mb-6 transition-all duration-300 group-hover:bg-brand-primary group-hover:text-white group-hover:shadow-lg group-hover:shadow-brand-primary/25">
                  <IconComponent className="w-6 h-6 stroke-[1.75]" />
                </div>

                <h3 className="text-lg font-extrabold text-brand-secondary mb-3 group-hover:text-brand-primary transition-colors">
                  {feature.title}
                </h3>
                
                <p className="text-gray-500 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
