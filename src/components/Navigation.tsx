'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface NavigationProps {
  onRenterClick?: () => void;
  onLandlordClick?: () => void;
}

export default function Navigation({ onRenterClick, onLandlordClick }: NavigationProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking outside or on link
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const handleNavClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          scrolled 
            ? 'bg-mercury-black/95 backdrop-blur-xl py-2' 
            : 'bg-transparent py-3 md:py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 md:gap-4 group flex-shrink-0">
            <div className="relative">
              <img 
                src="/logo.png" 
                alt="Mercury Properties" 
                className="w-36 h-36 sm:w-40 sm:h-40 md:w-32 md:h-32 lg:w-40 lg:h-40 object-contain"
              />
              <div className="absolute inset-0 rounded-xl bg-mercury-emerald blur-xl opacity-0 group-hover:opacity-40 transition-opacity" />
            </div>
            <span className="text-base sm:text-lg md:text-xl font-semibold tracking-tight hidden sm:inline">
              Mercury<span className="text-mercury-gold">.</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            <NavLink href="#renters">Find a House</NavLink>
            <NavLink href="#landlords">For Landlords</NavLink>
            <NavLink href="#how-it-works">How It Works</NavLink>
            <NavLink href="#trust">Why Mercury</NavLink>
          </div>

          {/* Desktop Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <button 
              onClick={onRenterClick}
              className="px-4 py-2 text-sm font-medium text-mercury-white hover:text-mercury-gold transition-colors"
            >
              Apply Now
            </button>
            <button
              onClick={onLandlordClick}
              className="px-4 py-2 text-sm font-medium bg-gradient-to-r from-mercury-emerald to-mercury-emerald-dark rounded-lg hover:shadow-lg hover:shadow-mercury-emerald/20 transition-all"
            >
              List Property
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-mercury-white hover:text-mercury-gold transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[50] md:hidden"
            />
            
            {/* Menu Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-80 max-w-[85vw] bg-mercury-charcoal border-l border-mercury-gray/20 z-[51] md:hidden overflow-y-auto"
            >
              <div className="p-6">
                {/* Close Button */}
                <div className="flex justify-end mb-8">
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-2 text-mercury-white hover:text-mercury-gold transition-colors"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                {/* Logo */}
                <Link href="/" onClick={handleNavClick} className="flex items-center gap-3 mb-8">
                  <img 
                    src="/logo.png" 
                    alt="Mercury Properties" 
                    className="w-16 h-16 object-contain"
                  />
                  <span className="text-xl font-semibold">
                    Mercury<span className="text-mercury-gold">.</span>
                  </span>
                </Link>

                {/* Navigation Links */}
                <nav className="space-y-4 mb-8">
                  <MobileNavLink href="#renters" onClick={handleNavClick}>
                    Find a House
                  </MobileNavLink>
                  <MobileNavLink href="#landlords" onClick={handleNavClick}>
                    For Landlords
                  </MobileNavLink>
                  <MobileNavLink href="#how-it-works" onClick={handleNavClick}>
                    How It Works
                  </MobileNavLink>
                  <MobileNavLink href="#trust" onClick={handleNavClick}>
                    Why Mercury
                  </MobileNavLink>
                </nav>

                {/* CTA Buttons */}
                <div className="space-y-3">
                  <button
                    onClick={() => {
                      handleNavClick();
                      onRenterClick?.();
                    }}
                    className="w-full px-6 py-3 bg-gradient-to-r from-mercury-emerald to-mercury-emerald-dark rounded-xl font-semibold hover:shadow-lg hover:shadow-mercury-emerald/20 transition-all"
                  >
                    Find Me a House
                  </button>
                  <button
                    onClick={() => {
                      handleNavClick();
                      onLandlordClick?.();
                    }}
                    className="w-full px-6 py-3 glass rounded-xl font-semibold hover:border-mercury-gold/50 transition-all"
                  >
                    I Own Property
                  </button>
                </div>

                {/* Contact Info */}
                <div className="mt-8 pt-8 border-t border-mercury-gray/20">
                  <p className="text-sm text-mercury-gray mb-2">Contact Us</p>
                  <a 
                    href="tel:+254752794698" 
                    className="text-mercury-gold font-semibold block mb-2"
                  >
                    0752 794 698
                  </a>
                  <a 
                    href="https://wa.me/254752794698" 
                    target="_blank"
                    className="text-mercury-emerald text-sm"
                  >
                    WhatsApp
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a 
      href={href}
      className="text-sm text-mercury-gray hover:text-mercury-white transition-colors relative group"
    >
      {children}
      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-mercury-gold transition-all group-hover:w-full" />
    </a>
  );
}

function MobileNavLink({ href, children, onClick }: { href: string; children: React.ReactNode; onClick: () => void }) {
  return (
    <a 
      href={href}
      onClick={onClick}
      className="block py-3 text-mercury-white hover:text-mercury-gold transition-colors border-b border-mercury-gray/10"
    >
      {children}
    </a>
  );
}
