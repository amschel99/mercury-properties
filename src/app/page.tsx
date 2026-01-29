'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import RentersSection from '@/components/RentersSection';
import LandlordsSection from '@/components/LandlordsSection';
import HowItWorks from '@/components/HowItWorks';
import TrustSection from '@/components/TrustSection';
import Footer from '@/components/Footer';
import RenterForm from '@/components/RenterForm';
import LandlordForm from '@/components/LandlordForm';

function HomeContent() {
  const searchParams = useSearchParams();
  const [renterModalOpen, setRenterModalOpen] = useState(false);
  const [landlordModalOpen, setLandlordModalOpen] = useState(false);

  // Check for query params on mount and open appropriate modal
  useEffect(() => {
    const apply = searchParams.get('apply');
    if (apply === 'renter') {
      setRenterModalOpen(true);
      // Clean up URL without reload
      window.history.replaceState({}, '', '/');
    } else if (apply === 'landlord') {
      setLandlordModalOpen(true);
      // Clean up URL without reload
      window.history.replaceState({}, '', '/');
    }
  }, [searchParams]);

  return (
    <main className="min-h-screen">
      <Navigation 
        onRenterClick={() => setRenterModalOpen(true)}
        onLandlordClick={() => setLandlordModalOpen(true)}
      />
      <Hero 
        onRenterClick={() => setRenterModalOpen(true)}
        onLandlordClick={() => setLandlordModalOpen(true)}
      />
      <RentersSection onApplyClick={() => setRenterModalOpen(true)} />
      <LandlordsSection onContactClick={() => setLandlordModalOpen(true)} />
      <HowItWorks />
      <TrustSection />
      <Footer />
      
      <RenterForm isOpen={renterModalOpen} onClose={() => setRenterModalOpen(false)} />
      <LandlordForm isOpen={landlordModalOpen} onClose={() => setLandlordModalOpen(false)} />
    </main>
  );
}

export default function Home() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-mercury-black flex items-center justify-center">
        <div className="w-16 h-16 border-4 border-mercury-emerald border-t-transparent rounded-full animate-spin" />
      </div>
    }>
      <HomeContent />
    </Suspense>
  );
}
