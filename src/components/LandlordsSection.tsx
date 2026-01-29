'use client';

import { motion } from 'framer-motion';
import { 
  Building2, 
  FileText, 
  Shield, 
  Megaphone, 
  UserCheck, 
  Wallet,
  ArrowRight,
  Phone,
  MessageSquare,
  CheckCircle2
} from 'lucide-react';
import Image from 'next/image';

const services = [
  {
    icon: UserCheck,
    title: "Tenant Sourcing",
    description: "We find quality tenants for your property fast",
    color: "emerald"
  },
  {
    icon: Shield,
    title: "Security Management",
    description: "Vetted security partners and 24/7 monitoring",
    color: "gold"
  },
  {
    icon: FileText,
    title: "Tax & Accounting",
    description: "KRA-compliant records and annual returns handled",
    color: "emerald"
  },
  {
    icon: Megaphone,
    title: "Property Marketing",
    description: "Professional listings across all major platforms",
    color: "gold"
  },
  {
    icon: Wallet,
    title: "Rent Collection",
    description: "Automated collection with direct deposits to you",
    color: "emerald"
  },
  {
    icon: Building2,
    title: "Full Management",
    description: "End-to-end property operations handled",
    color: "gold"
  }
];

const howItWorks = [
  "You contact us about your property",
  "We visit and assess the property",
  "We agree on terms and services",
  "We find tenants and manage everything"
];

interface LandlordsSectionProps {
  onContactClick?: () => void;
}

export default function LandlordsSection({ onContactClick }: LandlordsSectionProps) {
  return (
    <section id="landlords" className="relative py-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 gradient-radial-gold opacity-50" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header with Image */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[400px] lg:h-[500px]"
          >
            <div className="absolute inset-0 rounded-3xl overflow-hidden glass-strong border-2 border-mercury-gold/20">
              <Image
                src="/mercury2.png"
                alt="Property Management"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-mercury-gold/10 border border-mercury-gold/20 text-mercury-gold text-sm font-medium mb-6">
              <Building2 className="w-4 h-4" />
              For Property Owners
            </span>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Own Property?
              <span className="block text-mercury-gold mt-2">Let's Talk.</span>
            </h2>
            
            <p className="text-lg text-mercury-gray mb-8">
              Contact us, we visit your property, and handle everything from there — 
              tenant sourcing, security, taxes, the works.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button
                onClick={onContactClick}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-mercury-gold/90 to-mercury-gold rounded-2xl font-semibold text-lg text-mercury-black"
              >
                <Phone className="w-5 h-5" />
                Contact Us
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
              <a href="https://wa.me/254752794698" target="_blank">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center gap-3 px-8 py-4 glass rounded-2xl font-semibold text-lg hover:border-[#25D366]/50"
                >
                  <MessageSquare className="w-5 h-5 text-[#25D366]" />
                  WhatsApp: 0752 794 698
                </motion.button>
              </a>
            </div>
          </motion.div>
        </div>

        {/* How It Works */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass rounded-3xl p-8 md:p-12 mb-16"
        >
          <h3 className="text-2xl font-bold mb-8 text-center">How It Works</h3>
          <div className="grid md:grid-cols-4 gap-6">
            {howItWorks.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="w-12 h-12 mx-auto rounded-full bg-mercury-gold/10 flex items-center justify-center text-mercury-gold font-bold mb-4">
                  {i + 1}
                </div>
                <p className="text-mercury-gray text-sm">{step}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Services Grid with Image */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[500px] order-2 lg:order-1"
          >
            <div className="absolute inset-0 rounded-3xl overflow-hidden glass-strong">
              <Image
                src="/mercury3.png"
                alt="Property Services"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2"
          >
            <h3 className="text-2xl font-bold mb-8">What We Handle For You</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group"
                >
                  <div className="glass rounded-2xl p-6 h-full hover:border-mercury-gold/30 transition-all hover:-translate-y-1">
                    <div className={`w-14 h-14 rounded-xl ${
                      service.color === 'emerald' 
                        ? 'bg-mercury-emerald/10 group-hover:bg-mercury-emerald/20' 
                        : 'bg-mercury-gold/10 group-hover:bg-mercury-gold/20'
                    } flex items-center justify-center mb-4 transition-colors`}>
                      <service.icon className={`w-7 h-7 ${
                        service.color === 'emerald' ? 'text-mercury-emerald' : 'text-mercury-gold'
                      }`} />
                    </div>
                    <h3 className="font-semibold text-xl mb-2">{service.title}</h3>
                    <p className="text-mercury-gray text-sm leading-relaxed">{service.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
