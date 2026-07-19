import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Vehicles from './components/Vehicles';
import WhyChooseUs from './components/WhyChooseUs';
import ServicesGallery from './components/ServicesGallery';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import ContactFooter from './components/ContactFooter';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const sections = [
      'home',
      'vehicles',
      'about-us', // Matches the Services header trigger element
      'why-choose-us',
      'gallery',
      'testimonials',
      'faq',
      'contact'
    ];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 160; // Offset for trigger accuracy

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Trigger initial detection
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen bg-white font-sans antialiased selection:bg-brand-primary selection:text-white">
      {/* Premium Sticky Navigation */}
      <Navbar activeSection={activeSection} />

      {/* Main Sections */}
      <main>
        {/* Hero Banner Section */}
        <Hero />

        {/* Vehicles Grid Section */}
        <Vehicles />

        {/* Custom Services & Gallery Grid (Hosts #about-us and #gallery) */}
        <ServicesGallery />

        {/* Why Choose Us Section */}
        <WhyChooseUs />

        {/* Testimonials Review Slider */}
        <Testimonials />

        {/* FAQ Accordion Section */}
        <FAQ />
      </main>

      {/* Contact & Dark Footer Section (Hosts #contact) */}
      <ContactFooter />
    </div>
  );
}
