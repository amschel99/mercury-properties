'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { 
  Phone, 
  Search, 
  MessageCircle, 
  Home,
  ClipboardList,
  Eye,
  Handshake,
  Users
} from 'lucide-react';

const renterSteps = [
  {
    icon: Phone,
    title: "Contact Us",
    description: "Tell us your location and budget"
  },
  {
    icon: Search,
    title: "We Search",
    description: "Our team finds verified properties for you"
  },
  {
    icon: MessageCircle,
    title: "We Call Back",
    description: "Get real options within 2 hours"
  },
  {
    icon: Home,
    title: "Move In",
    description: "Tour, choose, and settle in"
  }
];

const ownerSteps = [
  {
    icon: Phone,
    title: "Contact Us",
    description: "Reach out about your property"
  },
  {
    icon: Eye,
    title: "We Visit",
    description: "We come to see your property"
  },
  {
    icon: Handshake,
    title: "We Agree",
    description: "Discuss terms and services"
  },
  {
    icon: Users,
    title: "We Deliver",
    description: "We find tenants & manage everything"
  }
];

export default function HowItWorks() {
  const [activeTab, setActiveTab] = useState<'renter' | 'owner'>('renter');
  const steps = activeTab === 'renter' ? renterSteps : ownerSteps;

  return (
    <section id="how-it-works" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-mercury-black via-mercury-charcoal/30 to-mercury-black" />
      
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            How It <span className="text-mercury-gold">Works</span>
          </h2>
          <p className="text-mercury-gray text-lg">
            Simple, fast, no hassle
          </p>
        </motion.div>

        {/* Tab Switcher */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center mb-16"
        >
          <div className="glass rounded-2xl p-1.5 inline-flex">
            <button
              onClick={() => setActiveTab('renter')}
              className={`px-8 py-3 rounded-xl font-medium transition-all ${
                activeTab === 'renter'
                  ? 'bg-gradient-to-r from-mercury-emerald to-mercury-emerald-dark text-white'
                  : 'text-mercury-gray hover:text-white'
              }`}
            >
              Looking for a House
            </button>
            <button
              onClick={() => setActiveTab('owner')}
              className={`px-8 py-3 rounded-xl font-medium transition-all ${
                activeTab === 'owner'
                  ? 'bg-gradient-to-r from-mercury-gold/90 to-mercury-gold text-mercury-black'
                  : 'text-mercury-gray hover:text-white'
              }`}
            >
              Property Owner
            </button>
          </div>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-mercury-gray/20 to-transparent hidden lg:block" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={`${activeTab}-${index}`}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                <div className="glass rounded-2xl p-8 text-center h-full hover:border-mercury-emerald/30 transition-all hover:-translate-y-2 group">
                  {/* Step Number */}
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-mercury-charcoal border border-mercury-gray/30 flex items-center justify-center text-sm font-bold text-mercury-gold">
                    {index + 1}
                  </div>
                  
                  {/* Icon */}
                  <div className={`w-16 h-16 mx-auto rounded-2xl ${
                    activeTab === 'renter' 
                      ? 'bg-mercury-emerald/10 group-hover:bg-mercury-emerald/20' 
                      : 'bg-mercury-gold/10 group-hover:bg-mercury-gold/20'
                  } flex items-center justify-center mb-6 transition-colors`}>
                    <step.icon className={`w-8 h-8 ${
                      activeTab === 'renter' ? 'text-mercury-emerald' : 'text-mercury-gold'
                    }`} />
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-mercury-gray text-sm">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-mercury-gray mb-4">Ready to get started?</p>
          <a 
            href="https://wa.me/254752794698" 
            target="_blank"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#25D366] rounded-xl font-medium hover:opacity-90 transition-opacity"
          >
            <MessageCircle className="w-5 h-5" />
            WhatsApp: 0752 794 698
          </a>
        </motion.div>
      </div>
    </section>
  );
}
