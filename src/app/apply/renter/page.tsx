'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function RenterRedirect() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to home with query param to open renter modal
    router.replace('/?apply=renter');
  }, [router]);

  return (
    <div className="min-h-screen bg-mercury-black flex items-center justify-center">
      <div className="text-center">
        <div className="w-16 h-16 mx-auto rounded-full bg-mercury-emerald/10 flex items-center justify-center mb-4">
          <div className="w-8 h-8 border-4 border-mercury-emerald border-t-transparent rounded-full animate-spin" />
        </div>
        <p className="text-mercury-gray">Opening application form...</p>
      </div>
    </div>
  );
}
