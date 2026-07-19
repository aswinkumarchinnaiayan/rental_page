import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, Quote, ChevronLeft, ChevronRight, CheckCircle2 } from 'lucide-react';
import { TESTIMONIALS } from '../data';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto scroll testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  return (
    <section id="testimonials" className="py-24 bg-white border-b border-brand-border overflow-hidden">
      <div className="w-full max-w-[1320px] mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-extrabold uppercase tracking-[0.25em] text-brand-primary block mb-3"
          >
            TESTIMONIALS
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-brand-secondary"
          >
            What Our Customers Say
          </motion.h2>
          <p className="text-gray-500 mt-4 max-w-xl mx-auto text-sm sm:text-base">
            Verified rental feedback from real families, riders, and corporate managers across South India.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative max-w-4xl mx-auto px-4 md:px-12">
          
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="bg-brand-light-gray/60 p-8 sm:p-12 rounded-[24px] border border-brand-border relative shadow-sm text-left flex flex-col md:flex-row gap-8 items-center"
            >
              <Quote className="absolute top-8 right-8 w-16 h-16 text-brand-primary/5 pointer-events-none" />

              {/* Profile Image & Meta */}
              <div className="flex flex-col items-center text-center md:text-left md:items-start shrink-0">
                <div className="relative w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-md mb-4">
                  <img
                    src={TESTIMONIALS[currentIndex].image}
                    alt={TESTIMONIALS[currentIndex].name}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute bottom-0 right-0 bg-green-500 text-white p-1 rounded-full border border-white">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                </div>
                
                <h3 className="text-lg font-extrabold text-brand-secondary">
                  {TESTIMONIALS[currentIndex].name}
                </h3>
                
                <p className="text-xs text-brand-primary font-bold tracking-wide uppercase mt-0.5">
                  {TESTIMONIALS[currentIndex].role}
                </p>

                <div className="bg-brand-primary/10 text-brand-primary text-[10px] font-extrabold px-2.5 py-1 rounded-full mt-3 uppercase tracking-wider">
                  {TESTIMONIALS[currentIndex].location}
                </div>
              </div>

              {/* Feedback Content */}
              <div className="flex-grow flex flex-col justify-center">
                {/* Stars */}
                <div className="flex gap-1 mb-4 justify-center md:justify-start">
                  {[...Array(TESTIMONIALS[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                <p className="text-gray-600 text-base sm:text-lg italic leading-relaxed font-normal">
                  "{TESTIMONIALS[currentIndex].feedback}"
                </p>

                {/* Google Verified Seal */}
                <div className="flex items-center gap-2 mt-6 justify-center md:justify-start text-xs font-bold text-gray-400">
                  <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" 
                    alt="Google" 
                    className="w-4 h-4"
                    referrerPolicy="no-referrer"
                  />
                  <span>Verified Google Business Review</span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Left/Right Navigation Arrows */}
          <button
            onClick={handlePrev}
            className="absolute left-[-20px] md:left-[-10px] top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white border border-brand-border shadow-md flex items-center justify-center text-brand-secondary hover:bg-brand-primary hover:text-white hover:border-brand-primary transition-all duration-300 z-10 cursor-pointer"
            aria-label="Previous review"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          
          <button
            onClick={handleNext}
            className="absolute right-[-20px] md:right-[-10px] top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white border border-brand-border shadow-md flex items-center justify-center text-brand-secondary hover:bg-brand-primary hover:text-white hover:border-brand-primary transition-all duration-300 z-10 cursor-pointer"
            aria-label="Next review"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Slider Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                currentIndex === i ? 'w-8 bg-brand-primary' : 'w-2.5 bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
