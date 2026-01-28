'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Home, Building2 } from 'lucide-react';
import { FloatingShapes, NairobiSkyline } from './Illustrations';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 gradient-radial" />
      <div className="absolute inset-0 grid-pattern opacity-50" />
      <FloatingShapes />
      <NairobiSkyline className="absolute bottom-0 left-0 right-0 h-48" />
      
      {/* Floating Orbs */}
      <motion.div
        animate={{ 
          y: [0, -30, 0],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-mercury-emerald/10 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ 
          y: [0, 30, 0],
          opacity: [0.2, 0.4, 0.2]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-mercury-gold/5 rounded-full blur-3xl"
      />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-32 pb-20">
        <div className="text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8"
          >
            <span className="w-2 h-2 bg-mercury-emerald rounded-full animate-pulse" />
            <span className="text-sm text-mercury-gray">Trusted by property owners across Kenya</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-none mb-6"
          >
            <span className="block">Rent Smarter.</span>
            <span className="block mt-2 bg-gradient-to-r from-mercury-gold via-mercury-gold-light to-mercury-gold bg-clip-text text-transparent text-glow-gold">
              Own Stress-Free.
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-mercury-gray max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            We find tenants, manage security, handle taxes, and keep your property profitable — 
            <span className="text-mercury-white"> anywhere in Kenya.</span>
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20"
          >
            <Link href="/apply/renter" className="group">
              <button className="flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-mercury-emerald to-mercury-emerald-dark rounded-2xl font-semibold text-lg hover:shadow-2xl hover:shadow-mercury-emerald/30 transition-all hover:-translate-y-1">
                <Home className="w-5 h-5" />
                Find Me a House
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
            <Link href="/apply/landlord" className="group">
              <button className="flex items-center gap-3 px-8 py-4 glass rounded-2xl font-semibold text-lg hover:border-mercury-gold/50 transition-all hover:-translate-y-1">
                <Building2 className="w-5 h-5" />
                I Own Property
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
          </motion.div>

          {/* Direct Contact */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="flex items-center justify-center gap-2 text-mercury-gray mb-16"
          >
            <span>Or call/WhatsApp us directly:</span>
            <a href="tel:+254752794698" className="text-mercury-gold font-semibold hover:underline">
              0752 794 698
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            <StatItem number="500+" label="Properties Managed" />
            <StatItem number="2hrs" label="Avg. Response Time" />
            <StatItem number="8" label="Cities Covered" />
            <StatItem number="98%" label="Tenant Satisfaction" />
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-mercury-gray/30 flex items-start justify-center p-2"
        >
          <div className="w-1.5 h-1.5 bg-mercury-gold rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}

function StatItem({ number, label }: { number: string; label: string }) {
  return (
    <div className="text-center">
      <div className="text-3xl md:text-4xl font-bold text-mercury-white mb-1">{number}</div>
      <div className="text-sm text-mercury-gray">{label}</div>
    </div>
  );
}
