'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState, useEffect } from 'react';

interface NavigationProps {
  onRenterClick?: () => void;
  onLandlordClick?: () => void;
}

export default function Navigation({ onRenterClick, onLandlordClick }: NavigationProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        scrolled 
          ? 'bg-mercury-black/95 backdrop-blur-xl py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-4 group">
          <div className="relative">
            <img 
              src="/logo.png" 
              alt="Mercury Properties" 
              className="w-32 h-32 md:w-40 md:h-40 object-contain"
            />
            <div className="absolute inset-0 rounded-xl bg-mercury-emerald blur-xl opacity-0 group-hover:opacity-40 transition-opacity" />
          </div>
          <span className="text-xl font-semibold tracking-tight">
            Mercury<span className="text-mercury-gold">.</span>
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <NavLink href="#renters">Find a House</NavLink>
          <NavLink href="#landlords">For Landlords</NavLink>
          <NavLink href="#how-it-works">How It Works</NavLink>
          <NavLink href="#trust">Why Mercury</NavLink>
        </div>

        <div className="flex items-center gap-4">
          <button 
            onClick={onRenterClick}
            className="hidden sm:block px-5 py-2.5 text-sm font-medium text-mercury-white hover:text-mercury-gold transition-colors"
          >
            Apply Now
          </button>
          <button
            onClick={onLandlordClick}
            className="px-5 py-2.5 text-sm font-medium bg-gradient-to-r from-mercury-emerald to-mercury-emerald-dark rounded-lg hover:shadow-lg hover:shadow-mercury-emerald/20 transition-all hover:-translate-y-0.5"
          >
            List Property
          </button>
        </div>
      </div>
    </motion.nav>
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
