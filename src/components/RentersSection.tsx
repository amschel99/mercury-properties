'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Search, MessageSquare, Key, Clock, ArrowRight, CheckCircle2, Phone } from 'lucide-react';

const steps = [
  {
    icon: Phone,
    title: "Contact Us",
    description: "Tell us where you want to live and your budget",
    highlight: "2 minutes"
  },
  {
    icon: Search,
    title: "We Search",
    description: "Our team finds real, verified options for you",
    highlight: "We do the work"
  },
  {
    icon: MessageSquare,
    title: "We Call You",
    description: "Get matched with properties within 2 hours",
    highlight: "< 2 hours"
  },
  {
    icon: Key,
    title: "Move In",
    description: "Tour, choose, and settle into your new home",
    highlight: "Done!"
  }
];

const benefits = [
  "No endless scrolling through fake listings",
  "No agent fees or hidden charges",
  "Verified properties only",
  "Real options within 2 hours"
];

export default function RentersSection() {
  return (
    <section id="renters" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-mercury-black via-mercury-charcoal/50 to-mercury-black" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-mercury-emerald/10 border border-mercury-emerald/20 text-mercury-emerald text-sm font-medium mb-6">
              <Search className="w-4 h-4" />
              For House Seekers
            </span>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Looking for a House?
              <span className="block text-mercury-gold mt-2">We'll Find It. Fast.</span>
            </h2>
            
            <p className="text-lg text-mercury-gray mb-8 leading-relaxed">
              Stop wasting time on fake listings and unresponsive agents. 
              Just tell us what you need — we'll find real options and 
              call you back <span className="text-mercury-white font-semibold">within 2 hours</span>.
            </p>

            <div className="space-y-3 mb-10">
              {benefits.map((benefit, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-mercury-emerald flex-shrink-0" />
                  <span className="text-mercury-gray">{benefit}</span>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/apply/renter">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="group flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-mercury-emerald to-mercury-emerald-dark rounded-2xl font-semibold text-lg"
                >
                  Find Me a House
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </Link>
              <a href="https://wa.me/254752794698" target="_blank">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center gap-3 px-8 py-4 glass rounded-2xl font-semibold text-lg hover:border-[#25D366]/50"
                >
                  <MessageSquare className="w-5 h-5 text-[#25D366]" />
                  WhatsApp Us
                </motion.button>
              </a>
            </div>
          </motion.div>

          {/* Right - Steps */}
          <div className="relative">
            {/* Connection Line */}
            <div className="absolute left-8 top-16 bottom-16 w-px bg-gradient-to-b from-mercury-emerald via-mercury-gold to-mercury-emerald-dark hidden md:block" />
            
            <div className="space-y-6">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                  className="relative"
                >
                  <div className="glass rounded-2xl p-6 ml-0 md:ml-12 hover:border-mercury-emerald/30 transition-colors group">
                    {/* Number Badge */}
                    <div className="absolute -left-0 md:-left-4 top-1/2 -translate-y-1/2 w-8 h-8 bg-mercury-charcoal rounded-full border-2 border-mercury-emerald flex items-center justify-center text-sm font-bold text-mercury-emerald hidden md:flex">
                      {index + 1}
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-mercury-emerald/10 flex items-center justify-center flex-shrink-0 group-hover:bg-mercury-emerald/20 transition-colors">
                        <step.icon className="w-6 h-6 text-mercury-emerald" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <h3 className="font-semibold text-lg">{step.title}</h3>
                          <span className="text-xs px-2 py-1 rounded-full bg-mercury-gold/10 text-mercury-gold">
                            {step.highlight}
                          </span>
                        </div>
                        <p className="text-mercury-gray text-sm">{step.description}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
