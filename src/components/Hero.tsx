'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Home, Building2 } from 'lucide-react';
import Image from 'next/image';

interface HeroProps {
  onRenterClick?: () => void;
  onLandlordClick?: () => void;
}

export default function Hero({ onRenterClick, onLandlordClick }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden z-0">
      {/* Background Images */}
      <div className="absolute inset-0 z-0">
        <motion.div
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 0.3, scale: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute top-0 left-0 w-full h-full"
        >
          <Image
            src="/mercury1.png"
            alt="Mercury Properties"
            fill
            className="object-cover opacity-30"
            priority
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-b from-mercury-black via-mercury-black/80 to-mercury-black z-10" />
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Text Content */}
          <div>
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
              className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-none mb-6"
            >
              <span className="block">Rent Smarter.</span>
              <span className="block mt-2 text-mercury-gold">
                Own Stress-Free.
              </span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg md:text-xl text-mercury-gray mb-8 leading-relaxed"
            >
              We find tenants, manage security, handle taxes, and keep your property profitable — 
              <span className="text-mercury-white"> anywhere in Kenya.</span>
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-start gap-4 mb-8"
            >
              <button 
                onClick={onRenterClick}
                className="group flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-mercury-emerald to-mercury-emerald-dark rounded-2xl font-semibold text-lg hover:shadow-2xl hover:shadow-mercury-emerald/30 transition-all hover:-translate-y-1"
              >
                <Home className="w-5 h-5" />
                Find Me a House
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button 
                onClick={onLandlordClick}
                className="group flex items-center gap-3 px-8 py-4 glass rounded-2xl font-semibold text-lg hover:border-mercury-gold/50 transition-all hover:-translate-y-1"
              >
                <Building2 className="w-5 h-5" />
                I Own Property
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>

            {/* Direct Contact */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.35 }}
              className="flex items-center gap-2 text-mercury-gray mb-8"
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
              className="grid grid-cols-2 md:grid-cols-4 gap-6"
            >
              <StatItem number="500+" label="Properties" />
              <StatItem number="2hrs" label="Response" />
              <StatItem number="8" label="Cities" />
              <StatItem number="98%" label="Satisfaction" />
            </motion.div>
          </div>

          {/* Right - Images */}
          <div className="relative h-[600px] lg:h-[700px]">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="absolute top-0 right-0 w-full h-2/3 rounded-3xl overflow-hidden glass-strong"
            >
              <Image
                src="/mercury2.png"
                alt="Property"
                fill
                className="object-cover"
                priority
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="absolute bottom-0 left-0 w-4/5 h-2/3 rounded-3xl overflow-hidden glass-strong border-2 border-mercury-gold/20"
            >
              <Image
                src="/mercury3.png"
                alt="Property"
                fill
                className="object-cover"
                priority
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
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
      <div className="text-2xl md:text-3xl font-bold text-mercury-white mb-1">{number}</div>
      <div className="text-xs text-mercury-gray">{label}</div>
    </div>
  );
}
