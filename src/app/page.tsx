import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import RentersSection from '@/components/RentersSection';
import LandlordsSection from '@/components/LandlordsSection';
import HowItWorks from '@/components/HowItWorks';
import TrustSection from '@/components/TrustSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <RentersSection />
      <LandlordsSection />
      <HowItWorks />
      <TrustSection />
      <Footer />
    </main>
  );
}
