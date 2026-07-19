import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, Fuel, Sliders, Users, Eye } from 'lucide-react';
import { VEHICLES, getWhatsAppUrl } from '../data';
import { Vehicle } from '../types';

export default function Vehicles() {
  const [filter, setFilter] = useState<'all' | 'car' | 'bike'>('all');

  const filteredVehicles = VEHICLES.filter((v) => {
    if (filter === 'all') return true;
    return v.type === filter;
  });

  return (
    <section id="vehicles" className="py-24 bg-white border-b border-brand-border">
      <div className="w-full max-w-[1320px] mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-extrabold uppercase tracking-[0.25em] text-brand-primary block mb-3"
          >
            OUR VEHICLES
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-brand-secondary"
          >
            Choose From Our <span className="text-brand-primary">Premium</span> Fleet
          </motion.h2>
          <p className="text-gray-500 mt-4 max-w-xl mx-auto text-sm sm:text-base">
            Meticulously serviced, highly sanitized, and perfectly tuned cars and bikes optimized for long rides across South India.
          </p>
        </div>

        {/* Filter Controls (Pill Design) */}
        <div className="flex justify-center gap-3 mb-16">
          {(['all', 'car', 'bike'] as const).map((type) => (
            <button
              key={type}
              onClick={() => setFilter(type)}
              className={`px-6 py-3 rounded-full text-sm font-semibold tracking-wide uppercase transition-all duration-300 border ${
                filter === type
                  ? 'bg-brand-primary border-brand-primary text-white shadow-lg shadow-brand-primary/20'
                  : 'bg-white border-brand-border text-brand-secondary/70 hover:border-brand-secondary hover:text-brand-secondary'
              }`}
            >
              {type === 'all' ? 'All Fleet' : type === 'car' ? 'Premium Cars' : 'Adventure Bikes'}
            </button>
          ))}
        </div>

        {/* Fleet Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredVehicles.map((vehicle: Vehicle) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                whileHover={{ y: -10 }}
                key={vehicle.id}
                className="bg-white rounded-[14px] overflow-hidden border border-brand-border shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col group h-full"
              >
                {/* Vehicle Image Container */}
                <div className="relative h-56 sm:h-64 bg-brand-light-gray overflow-hidden">
                  <img
                    src={vehicle.image}
                    alt={vehicle.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Category Pill Tag */}
                  <div className="absolute top-4 left-4 bg-brand-secondary text-white text-xs font-bold px-3 py-1.5 rounded-lg shadow-md uppercase tracking-wider">
                    {vehicle.category}
                  </div>
                </div>

                {/* Vehicle Details */}
                <div className="p-6 flex flex-col flex-grow justify-between">
                  <div>
                    {/* Header Spec Block */}
                    <div className="flex justify-between items-start gap-4 mb-3">
                      <h3 className="text-xl font-extrabold text-brand-secondary leading-tight group-hover:text-brand-primary transition-colors">
                        {vehicle.name}
                      </h3>
                    </div>

                    <p className="text-gray-500 text-sm mb-6 leading-relaxed">
                      {vehicle.description}
                    </p>

                    {/* Specifications Row */}
                    <div className="grid grid-cols-3 gap-2 py-4 border-y border-brand-border mb-6 text-center">
                      <div className="flex flex-col items-center gap-1">
                        <Fuel className="w-4 h-4 text-brand-primary" />
                        <span className="text-[10px] uppercase font-bold text-gray-400">Fuel</span>
                        <span className="text-xs font-bold text-brand-secondary mt-0.5">{vehicle.fuel}</span>
                      </div>
                      <div className="flex flex-col items-center gap-1 border-x border-brand-border">
                        <Sliders className="w-4 h-4 text-brand-primary" />
                        <span className="text-[10px] uppercase font-bold text-gray-400">Drive</span>
                        <span className="text-xs font-bold text-brand-secondary mt-0.5">{vehicle.transmission}</span>
                      </div>
                      <div className="flex flex-col items-center gap-1">
                        <Users className="w-4 h-4 text-brand-primary" />
                        <span className="text-[10px] uppercase font-bold text-gray-400">Capacity</span>
                        <span className="text-xs font-bold text-brand-secondary mt-0.5">{vehicle.seats}</span>
                      </div>
                    </div>
                  </div>

                  {/* Enquire CTA Button */}
                  <a
                    href={getWhatsAppUrl(vehicle.name, 'Enquire Now')}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2.5 w-full py-3.5 rounded-[10px] bg-brand-primary hover:bg-[#D00000] text-white font-semibold text-sm transition-all duration-300 shadow-md shadow-brand-primary/10 hover:shadow-xl hover:shadow-brand-primary/20 group/btn"
                  >
                    <MessageSquare className="w-4 h-4 group-hover/btn:scale-110 transition-transform" />
                    <span>Enquire on WhatsApp</span>
                  </a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
