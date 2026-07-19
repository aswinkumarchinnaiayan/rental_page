import React from 'react';
import { motion } from 'motion/react';
import { MessageSquare, Phone, CheckCircle, ChevronDown } from 'lucide-react';
import { getWhatsAppUrl, getPhoneCallUrl, VEHICLES } from '../data';

export default function Hero() {
  const fortuner = VEHICLES.find(v => v.id === 'toyota-fortuner');
  const r15 = VEHICLES.find(v => v.id === 'yamaha-r15-v4');

  const trustFeatures = [
    'Well Maintained Vehicles',
    'Fast Customer Support',
    'Clean & Sanitized',
    'Flexible Rental Duration'
  ];

  const handleScrollToVehicles = () => {
    const target = document.querySelector('#vehicles');
    if (target) {
      const offset = 90;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = target.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen w-full flex items-center pt-[90px] overflow-hidden bg-brand-secondary"
    >
      {/* Background Image with Dark Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1506012787146-f92b2d7d6d96?auto=format&fit=crop&q=80&w=1920')`
        }}
      >
        {/* Real luxurious dark overlay to ensure maximum contrast and premium readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-secondary via-brand-secondary/95 to-brand-secondary/70" />
      </div>

      {/* Decorative ambient glow on the right */}
      <div className="absolute top-1/4 right-[-10%] w-[500px] h-[500px] bg-brand-primary/15 blur-[120px] rounded-full pointer-events-none" />

      {/* Container */}
      <div className="relative z-10 w-full max-w-[1320px] mx-auto px-6 py-12 lg:py-20 grid grid-cols-1 lg:grid-cols-12 items-center gap-12 lg:gap-8">
        
        {/* Left Column (55% / 7 cols) */}
        <div className="lg:col-span-7 flex flex-col justify-center text-left">
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-brand-primary/10 border border-brand-primary/30 px-4 py-1.5 rounded-full mb-6 w-fit"
          >
            <span className="w-2 h-2 rounded-full bg-brand-primary animate-pulse" />
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-white">
              Tamil Nadu's Elite Rental Fleet
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6 leading-[1.1]"
          >
            PREMIUM <br />
            <span className="text-brand-primary">CAR & BIKE</span> <br />
            RENTALS <br />
            <span className="text-sm sm:text-lg tracking-[0.15em] block text-gray-300 font-semibold mt-2 uppercase">
              Across Tamil Nadu • Self-Drive & Chauffeur
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg text-gray-300 mb-8 max-w-xl leading-relaxed font-normal"
          >
            Travel comfortably with our well-maintained cars and bikes for family trips, business travel, tourism, airport pickup, and weekend rides.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 mb-10"
          >
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 bg-brand-primary text-white font-semibold text-base px-8 py-4 rounded-[14px] hover:bg-[#D00000] transition-all duration-300 shadow-lg shadow-brand-primary/35 transform hover:-translate-y-1 group"
            >
              <MessageSquare className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span>Get Quote on WhatsApp</span>
            </a>

            <a
              href={getPhoneCallUrl()}
              className="flex items-center justify-center gap-3 border-2 border-white/30 text-white font-semibold text-base px-8 py-4 rounded-[14px] hover:border-white hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-1 group"
            >
              <Phone className="w-5 h-5 group-hover:animate-bounce" />
              <span>Call Now</span>
            </a>
          </motion.div>

          {/* Trust Features Checklist */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-2 gap-y-4 gap-x-6 pt-6 border-t border-white/10 max-w-lg"
          >
            {trustFeatures.map((feature, i) => (
              <div key={i} className="flex items-center gap-2.5">
                <CheckCircle className="w-5 h-5 text-brand-primary shrink-0" />
                <span className="text-sm text-gray-300 font-medium">{feature}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right Column (45% / 5 cols) - Layered Fleet Perspective Display */}
        <div className="lg:col-span-5 relative h-[380px] sm:h-[450px] lg:h-[500px] flex items-center justify-center">
          
          {/* Overlay Background Glass Card */}
          <div className="absolute inset-0 bg-white/[0.02] border border-white/5 rounded-3xl backdrop-blur-3xl" />

          {/* Fortuner Layered Display Card */}
          {fortuner && (
            <motion.div
              initial={{ opacity: 0, x: 100, rotate: 5 }}
              animate={{ opacity: 1, x: 0, rotate: -2 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              whileHover={{ scale: 1.05, rotate: -1, zIndex: 30 }}
              className="absolute top-12 left-4 w-[75%] sm:w-[68%] bg-white rounded-2xl shadow-2xl overflow-hidden border border-brand-border/10 cursor-pointer group z-20"
            >
              <div className="relative h-28 sm:h-36 bg-gray-100 overflow-hidden">
                <img
                  src={fortuner.image}
                  alt={fortuner.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-3 left-3 bg-brand-primary text-white text-[10px] font-bold px-2.5 py-1 rounded-md uppercase tracking-wider">
                  {fortuner.category}
                </div>
              </div>
              <div className="p-4 bg-white">
                <h4 className="text-sm sm:text-base font-extrabold text-brand-secondary">{fortuner.name}</h4>
                <div className="flex gap-3 text-[11px] text-gray-500 mt-1 font-medium">
                  <span>{fortuner.fuel}</span>
                  <span>•</span>
                  <span>{fortuner.transmission}</span>
                </div>
              </div>
            </motion.div>
          )}

          {/* Yamaha R15 Layered Display Card */}
          {r15 && (
            <motion.div
              initial={{ opacity: 0, x: -100, rotate: -8 }}
              animate={{ opacity: 1, x: 0, rotate: 6 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              whileHover={{ scale: 1.05, rotate: 4, zIndex: 30 }}
              className="absolute bottom-12 right-4 w-[65%] sm:w-[58%] bg-white rounded-2xl shadow-2xl overflow-hidden border border-brand-border/10 cursor-pointer group z-10"
            >
              <div className="relative h-24 sm:h-32 bg-gray-100 overflow-hidden">
                <img
                  src={r15.image}
                  alt={r15.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-3 left-3 bg-brand-secondary text-white text-[10px] font-bold px-2.5 py-1 rounded-md uppercase tracking-wider">
                  {r15.category}
                </div>
              </div>
              <div className="p-4 bg-white">
                <h4 className="text-sm sm:text-base font-extrabold text-brand-secondary">{r15.name}</h4>
                <div className="flex gap-3 text-[11px] text-gray-500 mt-1 font-medium">
                  <span>{r15.seats}</span>
                  <span>•</span>
                  <span>Sport</span>
                </div>
              </div>
            </motion.div>
          )}

          {/* Golden glowing ring highlight behind */}
          <div className="absolute bottom-0 right-1/4 w-32 h-32 bg-brand-primary/20 rounded-full blur-2xl pointer-events-none" />
        </div>
      </div>

      {/* Bottom Featured Top Selections Strip */}
      <div className="absolute bottom-0 left-0 w-full bg-brand-light-gray border-t border-brand-border h-[130px] hidden xl:flex items-center px-12 z-20">
        <div className="flex-none w-[200px] text-left">
          <p className="text-[10px] font-extrabold text-brand-primary tracking-widest uppercase">Our Fleet</p>
          <h3 className="text-lg font-extrabold text-brand-secondary">TOP SELECTIONS</h3>
        </div>

        <div className="flex gap-5 flex-1 px-8">
          {VEHICLES.slice(0, 4).map((vehicle) => (
            <div
              key={vehicle.id}
              className="flex-1 bg-white p-3.5 rounded-[12px] shadow-sm border border-brand-border flex items-center gap-3.5 hover:shadow-md hover:border-brand-primary/20 transition-all duration-300 group cursor-pointer"
              onClick={handleScrollToVehicles}
            >
              <div className="w-16 h-11 bg-brand-light-gray rounded-lg overflow-hidden shrink-0">
                <img
                  src={vehicle.image}
                  alt={vehicle.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="text-left">
                <h4 className="text-xs font-extrabold text-brand-secondary group-hover:text-brand-primary transition-colors">
                  {vehicle.name}
                </h4>
                <p className="text-[9px] text-gray-400 font-bold uppercase mt-0.5">
                  {vehicle.fuel} • {vehicle.transmission.split(' ')[0]}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex-none pl-6">
          <button
            onClick={handleScrollToVehicles}
            className="w-11 h-11 bg-brand-secondary text-white rounded-full flex items-center justify-center hover:bg-brand-primary transition-colors duration-300 shadow-md cursor-pointer"
            aria-label="View all vehicles"
          >
            <ChevronDown className="w-5 h-5 -rotate-90" />
          </button>
        </div>
      </div>
    </section>
  );
}
