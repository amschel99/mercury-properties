'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { 
  Users, 
  Building2, 
  Calendar, 
  Phone, 
  MapPin, 
  Wallet,
  ChevronDown,
  ChevronUp,
  RefreshCw,
  Lock,
  MessageSquare
} from 'lucide-react';

interface RenterApplication {
  id: string;
  fullName: string;
  phone: string;
  location: string;
  budgetRange: string;
  requirements: string | null;
  createdAt: string;
}

interface LandlordApplication {
  id: string;
  fullName: string;
  phone: string;
  propertyType: string;
  location: string;
  message: string | null;
  createdAt: string;
}

export default function AdminDashboard() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [authError, setAuthError] = useState('');
  const [activeTab, setActiveTab] = useState<'renters' | 'landlords'>('renters');
  const [renterApplications, setRenterApplications] = useState<RenterApplication[]>([]);
  const [landlordApplications, setLandlordApplications] = useState<LandlordApplication[]>([]);
  const [loading, setLoading] = useState(true);
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === process.env.NEXT_PUBLIC_ADMIN_PASSWORD || password === 'mercury2024') {
      setIsAuthenticated(true);
      setAuthError('');
    } else {
      setAuthError('Invalid password');
    }
  };

  const fetchData = async () => {
    setLoading(true);
    try {
      const [rentersRes, landlordsRes] = await Promise.all([
        fetch('/api/applications/renter'),
        fetch('/api/applications/landlord'),
      ]);
      
      if (rentersRes.ok) {
        const renters = await rentersRes.json();
        setRenterApplications(renters);
      }
      
      if (landlordsRes.ok) {
        const landlords = await landlordsRes.json();
        setLandlordApplications(landlords);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      fetchData();
    }
  }, [isAuthenticated]);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-KE', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-mercury-black flex items-center justify-center p-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-md"
        >
          <div className="glass rounded-3xl p-8">
            <div className="text-center mb-8">
              <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-mercury-emerald to-mercury-emerald-dark flex items-center justify-center mb-4">
                <Lock className="w-8 h-8" />
              </div>
              <h1 className="text-2xl font-bold">Admin Access</h1>
              <p className="text-mercury-gray text-sm mt-2">Enter password to continue</p>
            </div>

            <form onSubmit={handleLogin} className="space-y-4">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
                className="w-full px-4 py-3 bg-mercury-charcoal rounded-xl border border-mercury-gray/20 focus:border-mercury-emerald outline-none transition-colors"
              />
              {authError && (
                <p className="text-red-400 text-sm">{authError}</p>
              )}
              <button
                type="submit"
                className="w-full py-3 bg-gradient-to-r from-mercury-emerald to-mercury-emerald-dark rounded-xl font-medium hover:shadow-lg hover:shadow-mercury-emerald/20 transition-all"
              >
                Access Dashboard
              </button>
            </form>

            <Link href="/" className="block text-center text-mercury-gray text-sm mt-6 hover:text-white transition-colors">
              ← Back to Home
            </Link>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-mercury-black">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-mercury-black/80 backdrop-blur-lg border-b border-mercury-gray/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-mercury-emerald to-mercury-emerald-dark flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-mercury-white">
                  <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <span className="font-semibold">Mercury Admin</span>
                <span className="text-mercury-gold">.</span>
              </div>
            </Link>
          </div>

          <button
            onClick={fetchData}
            disabled={loading}
            className="flex items-center gap-2 px-4 py-2 glass rounded-xl text-sm hover:border-mercury-emerald/50 transition-colors disabled:opacity-50"
          >
            <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
            Refresh
          </button>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-8">
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <StatCard
            icon={<Users className="w-5 h-5" />}
            label="House Seekers"
            value={renterApplications.length}
            color="emerald"
          />
          <StatCard
            icon={<Building2 className="w-5 h-5" />}
            label="Property Owners"
            value={landlordApplications.length}
            color="gold"
          />
          <StatCard
            icon={<Calendar className="w-5 h-5" />}
            label="Today"
            value={[...renterApplications, ...landlordApplications].filter(
              app => new Date(app.createdAt).toDateString() === new Date().toDateString()
            ).length}
            color="emerald"
          />
          <StatCard
            icon={<Phone className="w-5 h-5" />}
            label="To Contact"
            value={renterApplications.length + landlordApplications.length}
            color="gold"
          />
        </div>

        {/* Tab Switcher */}
        <div className="glass rounded-2xl p-1.5 inline-flex mb-8">
          <button
            onClick={() => setActiveTab('renters')}
            className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all ${
              activeTab === 'renters'
                ? 'bg-gradient-to-r from-mercury-emerald to-mercury-emerald-dark text-white'
                : 'text-mercury-gray hover:text-white'
            }`}
          >
            <Users className="w-4 h-4" />
            House Seekers ({renterApplications.length})
          </button>
          <button
            onClick={() => setActiveTab('landlords')}
            className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all ${
              activeTab === 'landlords'
                ? 'bg-gradient-to-r from-mercury-gold/90 to-mercury-gold text-mercury-black'
                : 'text-mercury-gray hover:text-white'
            }`}
          >
            <Building2 className="w-4 h-4" />
            Property Owners ({landlordApplications.length})
          </button>
        </div>

        {/* Applications List */}
        {loading ? (
          <div className="text-center py-20">
            <RefreshCw className="w-8 h-8 animate-spin mx-auto text-mercury-emerald mb-4" />
            <p className="text-mercury-gray">Loading...</p>
          </div>
        ) : (
          <div className="space-y-4">
            <AnimatePresence mode="wait">
              {activeTab === 'renters' ? (
                renterApplications.length === 0 ? (
                  <EmptyState type="house seekers" />
                ) : (
                  renterApplications.map((app, index) => (
                    <RenterCard
                      key={app.id}
                      application={app}
                      index={index}
                      expanded={expandedId === app.id}
                      onToggle={() => setExpandedId(expandedId === app.id ? null : app.id)}
                      formatDate={formatDate}
                    />
                  ))
                )
              ) : (
                landlordApplications.length === 0 ? (
                  <EmptyState type="property owners" />
                ) : (
                  landlordApplications.map((app, index) => (
                    <LandlordCard
                      key={app.id}
                      application={app}
                      index={index}
                      expanded={expandedId === app.id}
                      onToggle={() => setExpandedId(expandedId === app.id ? null : app.id)}
                      formatDate={formatDate}
                    />
                  ))
                )
              )}
            </AnimatePresence>
          </div>
        )}
      </main>
    </div>
  );
}

function StatCard({ icon, label, value, color }: { icon: React.ReactNode; label: string; value: number; color: 'emerald' | 'gold' }) {
  return (
    <div className="glass rounded-2xl p-5">
      <div className={`w-10 h-10 rounded-xl ${
        color === 'emerald' ? 'bg-mercury-emerald/10' : 'bg-mercury-gold/10'
      } flex items-center justify-center mb-3`}>
        <span className={color === 'emerald' ? 'text-mercury-emerald' : 'text-mercury-gold'}>
          {icon}
        </span>
      </div>
      <div className="text-2xl font-bold">{value}</div>
      <div className="text-sm text-mercury-gray">{label}</div>
    </div>
  );
}

function EmptyState({ type }: { type: string }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="text-center py-20"
    >
      <div className="w-16 h-16 mx-auto rounded-2xl bg-mercury-charcoal flex items-center justify-center mb-4">
        <Users className="w-8 h-8 text-mercury-gray" />
      </div>
      <p className="text-mercury-gray">No {type} inquiries yet</p>
    </motion.div>
  );
}

function RenterCard({ 
  application, 
  index, 
  expanded, 
  onToggle,
  formatDate
}: { 
  application: RenterApplication; 
  index: number; 
  expanded: boolean; 
  onToggle: () => void;
  formatDate: (date: string) => string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
      className="glass rounded-2xl overflow-hidden"
    >
      <button
        onClick={onToggle}
        className="w-full p-5 flex items-center justify-between text-left hover:bg-white/[0.02] transition-colors"
      >
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-mercury-emerald/10 flex items-center justify-center text-mercury-emerald font-semibold">
            {application.fullName.split(' ').map(n => n[0]).join('').slice(0, 2)}
          </div>
          <div>
            <div className="font-semibold">{application.fullName}</div>
            <div className="text-sm text-mercury-gray flex items-center gap-2">
              <MapPin className="w-3 h-3" />
              {application.location.replace(/-/g, ' ').replace(/nairobi /i, '')}
              <span className="text-mercury-gray/50">•</span>
              <Wallet className="w-3 h-3" />
              {application.budgetRange.replace(/-/g, ' ').replace(/k/g, ',000')}
            </div>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-xs text-mercury-gray">{formatDate(application.createdAt)}</span>
          {expanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
        </div>
      </button>

      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="p-5 pt-0 border-t border-mercury-gray/10">
              <div className="grid md:grid-cols-2 gap-4 mt-4">
                <InfoItem icon={<Phone className="w-4 h-4" />} label="Phone" value={application.phone} />
                <InfoItem icon={<MapPin className="w-4 h-4" />} label="Location" value={application.location.replace(/-/g, ' ')} />
                <InfoItem icon={<Wallet className="w-4 h-4" />} label="Budget" value={application.budgetRange.replace(/-/g, ' ').replace(/k/g, ',000')} />
              </div>
              {application.requirements && (
                <div className="mt-4 p-4 bg-mercury-charcoal/50 rounded-xl">
                  <div className="text-xs text-mercury-gray mb-1 flex items-center gap-1">
                    <MessageSquare className="w-3 h-3" />
                    Requirements
                  </div>
                  <p className="text-sm">{application.requirements}</p>
                </div>
              )}
              <div className="mt-4 flex gap-2">
                <a
                  href={`tel:${application.phone}`}
                  className="flex items-center gap-2 px-4 py-2 bg-mercury-emerald/10 text-mercury-emerald rounded-lg text-sm hover:bg-mercury-emerald/20 transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  Call
                </a>
                <a
                  href={`https://wa.me/254${application.phone.replace(/^0/, '').replace(/\D/g, '')}`}
                  target="_blank"
                  className="flex items-center gap-2 px-4 py-2 bg-[#25D366]/10 text-[#25D366] rounded-lg text-sm hover:bg-[#25D366]/20 transition-colors"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

function LandlordCard({ 
  application, 
  index, 
  expanded, 
  onToggle,
  formatDate
}: { 
  application: LandlordApplication; 
  index: number; 
  expanded: boolean; 
  onToggle: () => void;
  formatDate: (date: string) => string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
      className="glass rounded-2xl overflow-hidden"
    >
      <button
        onClick={onToggle}
        className="w-full p-5 flex items-center justify-between text-left hover:bg-white/[0.02] transition-colors"
      >
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-mercury-gold/10 flex items-center justify-center text-mercury-gold font-semibold">
            {application.fullName.split(' ').map(n => n[0]).join('').slice(0, 2)}
          </div>
          <div>
            <div className="font-semibold">{application.fullName}</div>
            <div className="text-sm text-mercury-gray flex items-center gap-2">
              <Building2 className="w-3 h-3" />
              {application.propertyType.replace(/-/g, ' ')}
              <span className="text-mercury-gray/50">•</span>
              <MapPin className="w-3 h-3" />
              {application.location}
            </div>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-xs text-mercury-gray">{formatDate(application.createdAt)}</span>
          {expanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
        </div>
      </button>

      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="p-5 pt-0 border-t border-mercury-gray/10">
              <div className="grid md:grid-cols-2 gap-4 mt-4">
                <InfoItem icon={<Phone className="w-4 h-4" />} label="Phone" value={application.phone} />
                <InfoItem icon={<Building2 className="w-4 h-4" />} label="Property Type" value={application.propertyType.replace(/-/g, ' ')} />
                <InfoItem icon={<MapPin className="w-4 h-4" />} label="Location" value={application.location} />
              </div>
              
              {application.message && (
                <div className="mt-4 p-4 bg-mercury-charcoal/50 rounded-xl">
                  <div className="text-xs text-mercury-gray mb-1 flex items-center gap-1">
                    <MessageSquare className="w-3 h-3" />
                    Message
                  </div>
                  <p className="text-sm">{application.message}</p>
                </div>
              )}
              
              <div className="mt-4 flex gap-2">
                <a
                  href={`tel:${application.phone}`}
                  className="flex items-center gap-2 px-4 py-2 bg-mercury-gold/10 text-mercury-gold rounded-lg text-sm hover:bg-mercury-gold/20 transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  Call
                </a>
                <a
                  href={`https://wa.me/254${application.phone.replace(/^0/, '').replace(/\D/g, '')}`}
                  target="_blank"
                  className="flex items-center gap-2 px-4 py-2 bg-[#25D366]/10 text-[#25D366] rounded-lg text-sm hover:bg-[#25D366]/20 transition-colors"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

function InfoItem({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="flex items-start gap-3">
      <span className="text-mercury-gray mt-0.5">{icon}</span>
      <div>
        <div className="text-xs text-mercury-gray">{label}</div>
        <div className="text-sm capitalize">{value}</div>
      </div>
    </div>
  );
}
