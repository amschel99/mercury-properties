'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { ReactNode, useEffect } from 'react';
import { ArrowLeft, ArrowRight, Check } from 'lucide-react';
import Link from 'next/link';

interface TypeformWrapperProps {
  children: ReactNode;
  currentStep: number;
  totalSteps: number;
  onNext: () => void;
  onPrev: () => void;
  canProceed: boolean;
  isSubmitting?: boolean;
  isComplete?: boolean;
  title: string;
  accentColor?: 'emerald' | 'gold';
  successMessage?: string;
}

export default function TypeformWrapper({
  children,
  currentStep,
  totalSteps,
  onNext,
  onPrev,
  canProceed,
  isSubmitting = false,
  isComplete = false,
  title,
  accentColor = 'emerald',
  successMessage = "Our team will review your application and contact you shortly."
}: TypeformWrapperProps) {
  const progress = ((currentStep + 1) / totalSteps) * 100;
  
  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Enter' && canProceed && !isSubmitting) {
        onNext();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [canProceed, isSubmitting, onNext]);

  const gradientClass = accentColor === 'emerald' 
    ? 'from-mercury-emerald to-mercury-emerald-dark'
    : 'from-mercury-gold/90 to-mercury-gold';

  const accentTextClass = accentColor === 'emerald' 
    ? 'text-mercury-emerald'
    : 'text-mercury-gold';

  if (isComplete) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-mercury-black">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", duration: 0.8 }}
          className="text-center px-6"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring" }}
            className={`w-24 h-24 mx-auto rounded-full bg-gradient-to-r ${gradientClass} flex items-center justify-center mb-8`}
          >
            <Check className="w-12 h-12 text-white" />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-4xl font-bold mb-4"
          >
            Application Submitted!
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-mercury-gray text-lg mb-8 max-w-md"
          >
            {successMessage}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <Link 
              href="/"
              className={`inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r ${gradientClass} rounded-2xl font-semibold hover:-translate-y-1 transition-transform`}
            >
              Back to Home
            </Link>
          </motion.div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-mercury-black flex flex-col">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-mercury-black/80 backdrop-blur-lg border-b border-mercury-gray/10">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-mercury-emerald to-mercury-emerald-dark flex items-center justify-center">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-mercury-white">
                <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <span className="font-semibold text-sm">{title}</span>
          </Link>
          
          <div className="flex items-center gap-4">
            <span className="text-sm text-mercury-gray">
              {currentStep + 1} of {totalSteps}
            </span>
          </div>
        </div>
        
        {/* Progress Bar */}
        <div className="h-1 bg-mercury-charcoal">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className={`h-full bg-gradient-to-r ${gradientClass}`}
          />
        </div>
      </header>

      {/* Content */}
      <main className="flex-1 flex items-center justify-center px-6 pt-24 pb-32">
        <div className="w-full max-w-2xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
              {children}
            </motion.div>
          </AnimatePresence>
        </div>
      </main>

      {/* Footer Navigation */}
      <footer className="fixed bottom-0 left-0 right-0 bg-mercury-black/80 backdrop-blur-lg border-t border-mercury-gray/10">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
          <button
            onClick={onPrev}
            disabled={currentStep === 0}
            className="flex items-center gap-2 px-4 py-2 text-mercury-gray hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </button>
          
          <div className="flex items-center gap-2 text-sm text-mercury-gray">
            <span>Press</span>
            <kbd className="px-2 py-1 bg-mercury-charcoal rounded text-xs font-mono">Enter ↵</kbd>
          </div>
          
          <button
            onClick={onNext}
            disabled={!canProceed || isSubmitting}
            className={`flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r ${gradientClass} rounded-xl font-medium disabled:opacity-50 disabled:cursor-not-allowed transition-all hover:shadow-lg ${
              accentColor === 'emerald' ? 'hover:shadow-mercury-emerald/30' : 'hover:shadow-mercury-gold/30'
            }`}
          >
            {isSubmitting ? (
              <>
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                />
                Submitting...
              </>
            ) : currentStep === totalSteps - 1 ? (
              <>
                Submit
                <Check className="w-4 h-4" />
              </>
            ) : (
              <>
                Continue
                <ArrowRight className="w-4 h-4" />
              </>
            )}
          </button>
        </div>
      </footer>
    </div>
  );
}
