'use client';

import { motion } from 'framer-motion';
import { Shield, MapPin, FileCheck, Users, Quote } from 'lucide-react';

const trustPoints = [
  {
    icon: FileCheck,
    title: "KRA Compliant",
    description: "All tax filings and financial records meet Kenya Revenue Authority standards"
  },
  {
    icon: Shield,
    title: "Security Partners",
    description: "Vetted partnerships with trusted local security companies"
  },
  {
    icon: MapPin,
    title: "Nationwide Coverage",
    description: "Operating in Nairobi, Mombasa, Kisumu, Eldoret, Nakuru, and more"
  },
  {
    icon: Users,
    title: "Local Expertise",
    description: "Deep understanding of Kenyan property market dynamics"
  }
];

const testimonials = [
  {
    quote: "Mercury transformed how I manage my 12 rental units. I haven't dealt with a tenant complaint in 8 months.",
    author: "James Mwangi",
    role: "Property Owner, Westlands",
    avatar: "JM"
  },
  {
    quote: "Found my dream apartment in Kilimani within a day. No fake listings, no wasted trips. Finally.",
    author: "Aisha Mohamed",
    role: "Tenant",
    avatar: "AM"
  },
  {
    quote: "The tax filing service alone saved me from a KRA nightmare. These guys know their stuff.",
    author: "David Ochieng",
    role: "Property Owner, Lavington",
    avatar: "DO"
  }
];

const cities = [
  "Nairobi", "Mombasa", "Kisumu", "Eldoret", "Nakuru", "Thika", "Machakos", "Nyeri"
];

export default function TrustSection() {
  return (
    <section id="trust" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-mercury-black to-mercury-charcoal/50" />
      
      {/* Kenya Map Pattern (Abstract) */}
      <div className="absolute inset-0 opacity-5">
        <svg viewBox="0 0 800 600" className="w-full h-full">
          <path 
            d="M400,100 Q550,150 600,250 Q650,350 550,450 Q450,550 300,500 Q150,450 200,300 Q250,150 400,100" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2"
            className="text-mercury-emerald"
          />
        </svg>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm font-medium mb-6">
            🇰🇪 Proudly Kenyan
          </span>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Built for <span className="text-mercury-emerald">Kenya</span>
          </h2>
          
          <p className="text-lg text-mercury-gray max-w-2xl mx-auto">
            We understand the local market, comply with local regulations, 
            and partner with local businesses.
          </p>
        </motion.div>

        {/* Trust Points */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {trustPoints.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 mx-auto rounded-2xl bg-mercury-emerald/10 flex items-center justify-center mb-4">
                <point.icon className="w-8 h-8 text-mercury-emerald" />
              </div>
              <h3 className="font-semibold text-lg mb-2">{point.title}</h3>
              <p className="text-mercury-gray text-sm">{point.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Cities Coverage */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass rounded-3xl p-8 mb-20"
        >
          <h3 className="text-center text-xl font-semibold mb-6">
            <MapPin className="inline w-5 h-5 mr-2 text-mercury-gold" />
            Cities We Cover
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {cities.map((city, index) => (
              <motion.span
                key={city}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="px-4 py-2 rounded-full bg-mercury-charcoal border border-mercury-gray/20 text-sm hover:border-mercury-emerald/50 transition-colors cursor-default"
              >
                {city}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-center text-2xl font-bold mb-12">
            Trusted by Landlords & Tenants
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="glass rounded-2xl p-6 relative"
              >
                <Quote className="absolute top-4 right-4 w-8 h-8 text-mercury-gold/20" />
                <p className="text-mercury-gray mb-6 leading-relaxed">"{testimonial.quote}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-mercury-emerald to-mercury-emerald-dark flex items-center justify-center text-sm font-semibold">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-medium">{testimonial.author}</div>
                    <div className="text-xs text-mercury-gray">{testimonial.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
