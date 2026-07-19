import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Gauge, Phone, MessageSquare, Menu, X } from 'lucide-react';
import { PHONE_NUMBER, getWhatsAppUrl, getPhoneCallUrl } from '../data';

interface NavbarProps {
  activeSection: string;
}

export default function Navbar({ activeSection }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: 'Home', href: '#home' },
    { label: 'Vehicles', href: '#vehicles' },
    { label: 'About Us', href: '#about-us' },
    { label: 'Why Choose Us', href: '#why-choose-us' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
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
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      <header
        id="navbar-root"
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 h-[90px] flex items-center bg-white ${
          isScrolled 
            ? 'shadow-md border-b border-brand-border bg-white/95 backdrop-blur-md' 
            : 'border-b border-transparent bg-white'
        }`}
      >
        <div className="w-full max-w-[1320px] mx-auto px-6 flex items-center justify-between">
          {/* Brand Logo & Name */}
          <a href="#home" onClick={(e) => handleScrollTo(e, '#home')} className="flex items-center gap-3 group">
            <div className="w-12 h-12 rounded-xl bg-brand-primary flex items-center justify-center text-white shadow-lg shadow-brand-primary/20 group-hover:rotate-12 transition-transform duration-300">
              <Gauge className="w-6 h-6" />
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-extrabold tracking-tight text-brand-secondary leading-none">
                Drive<span className="text-brand-primary">X</span>
              </span>
              <span className="text-[9px] font-bold tracking-[0.2em] text-gray-500 mt-1 uppercase">
                RENT • DRIVE • ENJOY
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8">
            {menuItems.map((item) => {
              const isActive = activeSection === item.href.slice(1);
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleScrollTo(e, item.href)}
                  className="relative text-sm font-semibold text-brand-secondary/80 hover:text-brand-secondary transition-colors py-2"
                >
                  {item.label}
                  {isActive && (
                    <motion.div
                      layoutId="activeUnderline"
                      className="absolute bottom-0 left-0 right-0 h-[3px] bg-brand-primary rounded-full"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  {/* Subtle underline hover effect if not active */}
                  {!isActive && (
                    <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-brand-primary/50 transition-all duration-300 hover:w-full group-hover:w-full" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center gap-4">
            {/* Button 2: WhatsApp (White, Red Border) */}
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-[10px] border-2 border-brand-primary text-brand-primary font-semibold text-sm hover:bg-brand-primary hover:text-white transition-all duration-300 group shadow-sm"
            >
              <MessageSquare className="w-4 h-4 group-hover:scale-110 transition-transform" />
              <span>WhatsApp</span>
            </a>

            {/* Button 1: Call Now (Red Filled) */}
            <a
              href={getPhoneCallUrl()}
              className="flex items-center gap-2 px-5 py-2.5 rounded-[10px] bg-brand-primary text-white font-semibold text-sm hover:bg-[#D00000] transition-all duration-300 group shadow-md shadow-brand-primary/10"
            >
              <Phone className="w-4 h-4 group-hover:animate-bounce" />
              <span>Call Now</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl text-brand-secondary hover:bg-gray-100 transition-colors focus:outline-none"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed top-[90px] left-0 w-full bg-white z-40 border-b border-brand-border shadow-xl lg:hidden max-h-[calc(100vh-90px)] overflow-y-auto"
          >
            <div className="px-6 py-8 flex flex-col gap-6">
              <div className="flex flex-col gap-4">
                {menuItems.map((item) => {
                  const isActive = activeSection === item.href.slice(1);
                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      onClick={(e) => handleScrollTo(e, item.href)}
                      className={`text-lg font-bold py-2 border-b border-gray-100 transition-colors ${
                        isActive ? 'text-brand-primary' : 'text-brand-secondary hover:text-brand-primary'
                      }`}
                    >
                      {item.label}
                    </a>
                  );
                })}
              </div>

              <div className="flex flex-col gap-3 pt-4 border-t border-gray-100">
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3.5 rounded-[10px] border-2 border-brand-primary text-brand-primary font-semibold text-base hover:bg-brand-primary hover:text-white transition-all"
                >
                  <MessageSquare className="w-5 h-5" />
                  <span>WhatsApp Enquiry</span>
                </a>
                <a
                  href={getPhoneCallUrl()}
                  className="flex items-center justify-center gap-2 w-full py-3.5 rounded-[10px] bg-brand-primary text-white font-semibold text-base hover:bg-[#D00000] transition-all"
                >
                  <Phone className="w-5 h-5" />
                  <span>Direct Call Now</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
