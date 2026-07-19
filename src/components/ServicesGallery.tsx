import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Plane, Briefcase, Compass, Calendar, Heart, Key, Sparkles, Users, 
  ArrowRight, Eye, Grid, Car, Bike, Sunset 
} from 'lucide-react';
import { SERVICES, GALLERY, getWhatsAppUrl } from '../data';

export default function ServicesGallery() {
  const [activeTab, setActiveTab] = useState<'all' | 'cars' | 'bikes' | 'scenic'>('all');
  const [hoveredImage, setHoveredImage] = useState<string | null>(null);

  // Icon mapping helper
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Plane': return Plane;
      case 'Briefcase': return Briefcase;
      case 'Compass': return Compass;
      case 'Calendar': return Calendar;
      case 'Heart': return Heart;
      case 'Key': return Key;
      case 'Sparkles': return Sparkles;
      case 'Users': return Users;
      default: return Sparkles;
    }
  };

  const filteredGallery = GALLERY.filter(
    item => activeTab === 'all' || item.category === activeTab
  );

  return (
    <section id="gallery" className="py-24 bg-white border-b border-brand-border">
      <div className="w-full max-w-[1320px] mx-auto px-6">
        
        {/* Section Title */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-extrabold uppercase tracking-[0.25em] text-brand-primary block mb-3"
          >
            SERVICES & PORTFOLIO
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-brand-secondary"
          >
            Custom Travel Solutions & <span className="text-brand-primary">Scenic</span> Tours
          </motion.h2>
          <p className="text-gray-500 mt-4 max-w-xl mx-auto text-sm sm:text-base">
            From business events to long-distance coastal cruise runs, we provide the perfect companion vehicle.
          </p>
        </div>

        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* LEFT: Specialized Services (5 cols) */}
          <div id="about-us" className="lg:col-span-5 flex flex-col gap-4">
            <div className="mb-4">
              <h3 className="text-2xl font-extrabold text-brand-secondary">
                Our Specialized Services
              </h3>
              <p className="text-sm text-gray-400 mt-1 font-medium">
                Tailored car & bike rental experiences engineered for comfort
              </p>
            </div>

            {/* Vertical Service list */}
            <div className="flex flex-col gap-3">
              {SERVICES.map((service, index) => {
                const IconComponent = getIcon(service.iconName);
                return (
                  <motion.a
                    href={getWhatsAppUrl(undefined, service.title)}
                    target="_blank"
                    rel="noopener noreferrer"
                    key={service.id}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 0.95, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    whileHover={{ scale: 1.01, x: 5 }}
                    className="flex items-center justify-between p-4 rounded-xl border border-brand-border bg-brand-light-gray/40 hover:bg-white hover:border-brand-primary/30 hover:shadow-lg transition-all duration-300 group cursor-pointer"
                  >
                    <div className="flex items-center gap-4 text-left">
                      <div className="w-10 h-10 rounded-lg bg-white border border-brand-border flex items-center justify-center text-brand-secondary group-hover:text-white group-hover:bg-brand-primary transition-colors duration-300">
                        <IconComponent className="w-5 h-5 stroke-[1.75]" />
                      </div>
                      <div>
                        <h4 className="text-sm font-extrabold text-brand-secondary group-hover:text-brand-primary transition-colors">
                          {service.title}
                        </h4>
                        <p className="text-[11px] text-gray-500 mt-0.5 line-clamp-1 max-w-[280px]">
                          {service.description}
                        </p>
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-brand-primary transition-colors" />
                  </motion.a>
                );
              })}
            </div>
          </div>

          {/* RIGHT: Photo Gallery Grid (7 cols) */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-brand-border pb-4">
              <div>
                <h3 className="text-2xl font-extrabold text-brand-secondary">
                  DriveX Gallery
                </h3>
                <p className="text-sm text-gray-400 font-medium">
                  Real photos of our fleet navigating majestic Tamil Nadu routes
                </p>
              </div>

              {/* Gallery category filters */}
              <div className="flex flex-wrap gap-2">
                {[
                  { id: 'all', label: 'All Photos', icon: Grid },
                  { id: 'cars', label: 'Cars', icon: Car },
                  { id: 'bikes', label: 'Bikes', icon: Bike },
                  { id: 'scenic', label: 'Routes', icon: Sunset },
                ].map(tab => {
                  const TabIcon = tab.icon;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id as any)}
                      className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider border transition-all duration-300 ${
                        activeTab === tab.id
                          ? 'bg-brand-secondary border-brand-secondary text-white shadow-md'
                          : 'bg-white border-brand-border text-gray-500 hover:text-brand-secondary hover:border-brand-secondary'
                      }`}
                    >
                      <TabIcon className="w-3 h-3" />
                      <span>{tab.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Gallery 2x4 grid or responsive layout */}
            <motion.div 
              layout 
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4"
            >
              <AnimatePresence mode="popLayout">
                {filteredGallery.map((photo) => (
                  <motion.div
                    layout
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.3 }}
                    key={photo.id}
                    className="relative aspect-square rounded-[14px] overflow-hidden bg-brand-light-gray group cursor-pointer border border-brand-border shadow-sm"
                    onMouseEnter={() => setHoveredImage(photo.id)}
                    onMouseLeave={() => setHoveredImage(null)}
                  >
                    <img
                      src={photo.url}
                      alt={photo.caption}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      referrerPolicy="no-referrer"
                    />
                    
                    {/* Dark glassmorphism overlay on hover */}
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-3 text-left">
                      <p className="text-[10px] font-extrabold text-brand-primary uppercase tracking-[0.1em] mb-1">
                        {photo.category}
                      </p>
                      <p className="text-white text-xs font-semibold leading-tight line-clamp-2">
                        {photo.caption}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>

            {/* View More Button */}
            <div className="mt-4 flex justify-center">
              <a
                href={getWhatsAppUrl(undefined, 'Gallery View More')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 border border-brand-secondary text-brand-secondary hover:bg-brand-secondary hover:text-white rounded-[14px] text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-sm"
              >
                <span>View More Photos on WhatsApp</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
