'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { MessageCircle, Phone, Mail, MapPin, ArrowUpRight } from 'lucide-react';

const quickLinks = [
  { label: 'Find a House', href: '/apply/renter' },
  { label: 'List Property', href: '/apply/landlord' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'About Us', href: '#trust' },
];

const services = [
  'Tenant Sourcing',
  'Property Management',
  'Tax & Accounting',
  'Security Services',
  'Rent Collection',
  'Maintenance',
];

export default function Footer() {
  return (
    <footer className="relative pt-20 pb-8 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-mercury-charcoal to-mercury-black" />
      <div className="absolute inset-0 grid-pattern opacity-30" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass rounded-3xl p-8 md:p-12 mb-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-mercury-gray mb-8 max-w-xl mx-auto">
            Whether you're looking for your next home or want us to manage your property, 
            we're here to help.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="https://wa.me/254752794698"
              target="_blank"
              className="flex items-center gap-2 px-6 py-3 bg-[#25D366] rounded-xl font-medium hover:opacity-90 transition-opacity"
            >
              <MessageCircle className="w-5 h-5" />
              Chat on WhatsApp
            </Link>
            <Link
              href="tel:+254752794698"
              className="flex items-center gap-2 px-6 py-3 glass rounded-xl font-medium hover:border-mercury-gold/50 transition-colors"
            >
              <Phone className="w-5 h-5" />
              0752 794 698
            </Link>
          </div>
        </motion.div>

        {/* Footer Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-4 mb-4">
              <img 
                src="/logo.png" 
                alt="Mercury Properties" 
                className="w-32 h-32 md:w-40 md:h-40 object-contain"
              />
              <span className="text-xl font-semibold">
                Mercury<span className="text-mercury-gold">.</span>
              </span>
            </Link>
            <p className="text-mercury-gray text-sm mb-4">
              Kenya's premium property management company. We find tenants, manage security, handle taxes, and keep your property profitable.
            </p>
            <div className="flex items-center gap-2 text-sm text-mercury-gray">
              <MapPin className="w-4 h-4" />
              Nairobi, Kenya
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link 
                    href={link.href}
                    className="text-mercury-gray hover:text-mercury-white transition-colors text-sm flex items-center gap-1 group"
                  >
                    {link.label}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service} className="text-mercury-gray text-sm">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li>
                <a 
                  href="mailto:hello@mercuryproperties.co.ke"
                  className="text-mercury-gray hover:text-mercury-white transition-colors text-sm flex items-center gap-2"
                >
                  <Mail className="w-4 h-4" />
                  hello@mercuryproperties.co.ke
                </a>
              </li>
              <li>
                <a 
                  href="tel:+254752794698"
                  className="text-mercury-gray hover:text-mercury-white transition-colors text-sm flex items-center gap-2"
                >
                  <Phone className="w-4 h-4" />
                  0752 794 698
                </a>
              </li>
              <li>
                <a 
                  href="https://wa.me/254752794698"
                  target="_blank"
                  className="text-mercury-gray hover:text-mercury-white transition-colors text-sm flex items-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-mercury-gray/10 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-mercury-gray text-sm">
              © {new Date().getFullYear()} Mercury Properties. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm text-mercury-gray">
              <a href="#" className="hover:text-mercury-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-mercury-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
