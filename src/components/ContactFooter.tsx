import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Gauge, Phone, MessageSquare, Mail, MapPin, 
  ArrowUp, ExternalLink, ShieldCheck, Heart 
} from 'lucide-react';
import { 
  PHONE_NUMBER, WHATSAPP_NUMBER, EMAIL_ADDRESS, OFFICE_ADDRESS,
  getWhatsAppUrl, getPhoneCallUrl 
} from '../data';

export default function ContactFooter() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const handleScrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const offset = 90; // Navbar height
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = targetElement.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <>
      <footer id="contact" className="bg-brand-secondary text-white pt-20 pb-8 border-t border-white/5 relative z-10">
        
        {/* Core Footer Grid */}
        <div className="w-full max-w-[1320px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          
          {/* COLUMN 1: Company Profile (4 cols) */}
          <div className="lg:col-span-4 flex flex-col gap-5 text-left">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-brand-primary flex items-center justify-center text-white shadow-lg">
                <Gauge className="w-5 h-5" />
              </div>
              <span className="text-xl font-extrabold tracking-tight">
                Drive<span className="text-brand-primary">X</span>
              </span>
            </div>
            
            <p className="text-sm text-gray-400 leading-relaxed font-normal">
              Tamil Nadu's premier automotive self-drive car and bike rental partner. Offering elite customer hospitality, immaculate sanitization, and certified safety parameters across South India.
            </p>

            <div className="flex items-center gap-2.5 bg-white/5 border border-white/10 px-4 py-3 rounded-xl w-fit">
              <ShieldCheck className="w-5 h-5 text-brand-primary shrink-0" />
              <span className="text-xs font-bold uppercase tracking-wider text-gray-300">
                Authorized Dealer Serviced
              </span>
            </div>
          </div>

          {/* COLUMN 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2 flex flex-col gap-4 text-left">
            <h3 className="text-sm font-extrabold uppercase tracking-[0.2em] text-white">
              Quick Links
            </h3>
            <ul className="flex flex-col gap-2.5 text-sm">
              {[
                { label: 'Home', href: '#home' },
                { label: 'Vehicles', href: '#vehicles' },
                { label: 'About Us', href: '#about-us' },
                { label: 'Why Choose Us', href: '#why-choose-us' },
                { label: 'Gallery', href: '#gallery' },
                { label: 'Testimonials', href: '#testimonials' },
                { label: 'FAQ', href: '#faq' },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => handleScrollToSection(e, link.href)}
                    className="text-gray-400 hover:text-brand-primary transition-colors flex items-center gap-1 group"
                  >
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 3: Contact Info (3 cols) */}
          <div className="lg:col-span-3 flex flex-col gap-4 text-left">
            <h3 className="text-sm font-extrabold uppercase tracking-[0.2em] text-white">
              Get In Touch
            </h3>
            <ul className="flex flex-col gap-4 text-sm text-gray-400">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-brand-primary shrink-0 mt-0.5" />
                <span className="leading-relaxed">{OFFICE_ADDRESS}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-brand-primary shrink-0" />
                <a href={getPhoneCallUrl()} className="hover:text-white transition-colors font-semibold">
                  {PHONE_NUMBER}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-brand-primary shrink-0" />
                <a href={`mailto:${EMAIL_ADDRESS}`} className="hover:text-white transition-colors font-medium">
                  {EMAIL_ADDRESS}
                </a>
              </li>
            </ul>
          </div>

          {/* COLUMN 4: Enquiry CTA Box (3 cols) */}
          <div className="lg:col-span-3">
            <div className="bg-white/[0.03] border border-white/10 p-6 rounded-2xl text-left flex flex-col gap-4">
              <h3 className="text-base font-extrabold text-white">
                Instant Enquiry
              </h3>
              <p className="text-xs text-gray-400 leading-relaxed font-normal">
                Want custom package queries, corporate deals, or airport delivery coordination? Talk to our managers.
              </p>

              <div className="flex flex-col gap-3">
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3 bg-[#25D366] hover:bg-[#20ba5a] text-white font-semibold text-xs rounded-lg uppercase tracking-wider transition-all duration-300"
                >
                  <MessageSquare className="w-4 h-4 fill-white" />
                  <span>Chat on WhatsApp</span>
                </a>

                <a
                  href={getPhoneCallUrl()}
                  className="flex items-center justify-center gap-2 w-full py-3 bg-brand-primary hover:bg-[#D00000] text-white font-semibold text-xs rounded-lg uppercase tracking-wider transition-all duration-300"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call Now</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar (Copyright & Legal) */}
        <div className="w-full max-w-[1320px] mx-auto px-6 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-gray-500 font-medium">
          <p>© {new Date().getFullYear()} DriveX Rentals Tamil Nadu. All Rights Reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#home" className="hover:text-white transition-colors">Privacy Policy</a>
            <span>•</span>
            <a href="#home" className="hover:text-white transition-colors">Terms of Service</a>
            <span>•</span>
            <span className="flex items-center gap-1">
              Crafted in Tamil Nadu <Heart className="w-3.5 h-3.5 text-brand-primary fill-brand-primary shrink-0" />
            </span>
          </div>
        </div>
      </footer>

      {/* FLOATING ACTION TRIGGERS (Bottom Right) */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3 items-end pointer-events-none">
        
        {/* Call Floating button */}
        <motion.a
          href={getPhoneCallUrl()}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: 0.2 }}
          whileHover={{ scale: 1.1 }}
          className="w-14 h-14 rounded-full bg-brand-primary text-white flex items-center justify-center shadow-2xl pointer-events-auto cursor-pointer hover:bg-[#D00000] transition-colors relative group"
          title="Call DriveX Now"
        >
          <Phone className="w-6 h-6" />
          <span className="absolute right-16 bg-brand-secondary border border-white/10 text-white text-xs font-bold px-3 py-1.5 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-md">
            Call Direct
          </span>
        </motion.a>

        {/* WhatsApp Floating button */}
        <motion.a
          href={getWhatsAppUrl()}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          whileHover={{ scale: 1.1 }}
          className="w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-2xl pointer-events-auto cursor-pointer hover:bg-[#20ba5a] transition-colors relative group"
          title="WhatsApp Enquiry"
        >
          {/* Ripple animation */}
          <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-35" />
          <MessageSquare className="w-6 h-6 fill-white relative z-10" />
          <span className="absolute right-16 bg-brand-secondary border border-white/10 text-white text-xs font-bold px-3 py-1.5 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-md">
            WhatsApp Live
          </span>
        </motion.a>

        {/* Back To Top Button */}
        <AnimatePresence>
          {showBackToTop && (
            <motion.button
              onClick={handleScrollToTop}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className="w-10 h-10 rounded-full bg-white border border-brand-border text-brand-secondary flex items-center justify-center shadow-xl pointer-events-auto cursor-pointer hover:bg-brand-primary hover:text-white hover:border-brand-primary transition-all duration-300"
              title="Back To Top"
            >
              <ArrowUp className="w-4 h-4" />
            </motion.button>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}
