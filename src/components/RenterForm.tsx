'use client';

'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { User, Phone, MapPin, Wallet, MessageSquare, Check } from 'lucide-react';
import FormModal from './FormModal';

interface FormData {
  fullName: string;
  phone: string;
  location: string;
  budgetRange: string;
  requirements: string;
}

const locations = [
  { value: 'nairobi-westlands', label: 'Westlands' },
  { value: 'nairobi-kilimani', label: 'Kilimani' },
  { value: 'nairobi-lavington', label: 'Lavington' },
  { value: 'nairobi-karen', label: 'Karen' },
  { value: 'nairobi-kileleshwa', label: 'Kileleshwa' },
  { value: 'nairobi-parklands', label: 'Parklands' },
  { value: 'nairobi-south-b', label: 'South B/C' },
  { value: 'nairobi-cbd', label: 'Nairobi CBD' },
  { value: 'mombasa', label: 'Mombasa' },
  { value: 'kisumu', label: 'Kisumu' },
  { value: 'eldoret', label: 'Eldoret' },
  { value: 'nakuru', label: 'Nakuru' },
  { value: 'other', label: 'Other Location' },
];

const budgetRanges = [
  { value: 'under-15k', label: 'Under KES 15,000' },
  { value: '15k-30k', label: 'KES 15,000 - 30,000' },
  { value: '30k-50k', label: 'KES 30,000 - 50,000' },
  { value: '50k-80k', label: 'KES 50,000 - 80,000' },
  { value: '80k-150k', label: 'KES 80,000 - 150,000' },
  { value: 'above-150k', label: 'Above KES 150,000' },
];

interface RenterFormProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function RenterForm({ isOpen, onClose }: RenterFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    phone: '',
    location: '',
    budgetRange: '',
    requirements: '',
  });

  const updateField = <K extends keyof FormData>(field: K, value: FormData[K]) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const canSubmit = formData.fullName.length >= 2 && 
                   formData.phone.length >= 9 && 
                   formData.location !== '' && 
                   formData.budgetRange !== '';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!canSubmit || isSubmitting) return;

    setIsSubmitting(true);
    try {
      const response = await fetch('/api/applications/renter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      
      if (response.ok) {
        setIsComplete(true);
        setTimeout(() => {
          setIsComplete(false);
          setFormData({
            fullName: '',
            phone: '',
            location: '',
            budgetRange: '',
            requirements: '',
          });
          onClose();
        }, 2000);
      } else {
        alert('Something went wrong. Please try again.');
      }
    } catch {
      alert('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isComplete) {
    return (
      <FormModal isOpen={isOpen} onClose={onClose} title="Find Your Home" accentColor="emerald">
        <div className="text-center py-12">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", duration: 0.8 }}
            className="w-20 h-20 mx-auto rounded-full bg-gradient-to-r from-mercury-emerald to-mercury-emerald-dark flex items-center justify-center mb-6"
          >
            <Check className="w-10 h-10 text-white" />
          </motion.div>
          <h3 className="text-2xl font-bold mb-3">Application Submitted!</h3>
          <p className="text-mercury-gray">
            We'll contact you within 2 hours with real options!
          </p>
        </div>
      </FormModal>
    );
  }

  return (
    <FormModal isOpen={isOpen} onClose={onClose} title="Find Your Home" accentColor="emerald">
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name */}
        <div>
          <label className="flex items-center gap-2 text-sm font-medium text-mercury-gray mb-2">
            <User className="w-4 h-4 text-mercury-emerald" />
            Full Name *
          </label>
          <input
            type="text"
            value={formData.fullName}
            onChange={(e) => updateField('fullName', e.target.value)}
            placeholder="Your full name"
            required
            className="w-full px-4 py-3 bg-mercury-charcoal/50 rounded-xl border border-mercury-gray/20 focus:border-mercury-emerald focus:outline-none transition-colors"
          />
        </div>

        {/* Phone */}
        <div>
          <label className="flex items-center gap-2 text-sm font-medium text-mercury-gray mb-2">
            <Phone className="w-4 h-4 text-mercury-emerald" />
            Phone Number *
          </label>
          <input
            type="tel"
            value={formData.phone}
            onChange={(e) => updateField('phone', e.target.value)}
            placeholder="0712 345 678"
            required
            className="w-full px-4 py-3 bg-mercury-charcoal/50 rounded-xl border border-mercury-gray/20 focus:border-mercury-emerald focus:outline-none transition-colors"
          />
          <p className="text-xs text-mercury-gray mt-1">We'll call or WhatsApp you within 2 hours</p>
        </div>

        {/* Location */}
        <div>
          <label className="flex items-center gap-2 text-sm font-medium text-mercury-gray mb-2">
            <MapPin className="w-4 h-4 text-mercury-emerald" />
            Preferred Location *
          </label>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2 max-h-48 overflow-y-auto pr-2 custom-scrollbar">
            {locations.map((location) => (
              <button
                key={location.value}
                type="button"
                onClick={() => updateField('location', location.value)}
                className={`p-3 rounded-lg border-2 text-left text-sm transition-all ${
                  formData.location === location.value
                    ? 'bg-mercury-emerald/10 border-mercury-emerald text-mercury-emerald'
                    : 'bg-mercury-charcoal/50 border-mercury-gray/20 hover:border-mercury-gray/40'
                }`}
              >
                {location.label}
              </button>
            ))}
          </div>
        </div>

        {/* Budget */}
        <div>
          <label className="flex items-center gap-2 text-sm font-medium text-mercury-gray mb-2">
            <Wallet className="w-4 h-4 text-mercury-emerald" />
            Budget Range *
          </label>
          <div className="grid grid-cols-2 gap-2">
            {budgetRanges.map((range) => (
              <button
                key={range.value}
                type="button"
                onClick={() => updateField('budgetRange', range.value)}
                className={`p-3 rounded-lg border-2 text-left transition-all ${
                  formData.budgetRange === range.value
                    ? 'bg-mercury-emerald/10 border-mercury-emerald text-mercury-emerald'
                    : 'bg-mercury-charcoal/50 border-mercury-gray/20 hover:border-mercury-gray/40'
                }`}
              >
                {range.label}
              </button>
            ))}
          </div>
        </div>

        {/* Requirements */}
        <div>
          <label className="flex items-center gap-2 text-sm font-medium text-mercury-gray mb-2">
            <MessageSquare className="w-4 h-4 text-mercury-emerald" />
            Additional Requirements (Optional)
          </label>
          <textarea
            value={formData.requirements}
            onChange={(e) => updateField('requirements', e.target.value)}
            placeholder="E.g., 2 bedrooms, parking needed, pet-friendly, moving in next month..."
            rows={4}
            className="w-full px-4 py-3 bg-mercury-charcoal/50 rounded-xl border border-mercury-gray/20 focus:border-mercury-emerald focus:outline-none transition-colors resize-none"
          />
        </div>

        {/* Submit */}
        <div className="flex gap-3 pt-4">
          <button
            type="button"
            onClick={onClose}
            className="flex-1 px-6 py-3 glass rounded-xl font-medium hover:border-mercury-gray/40 transition-colors"
          >
            Cancel
          </button>
          <button
            type="submit"
            disabled={!canSubmit || isSubmitting}
            className="flex-1 px-6 py-3 bg-gradient-to-r from-mercury-emerald to-mercury-emerald-dark rounded-xl font-medium disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-lg hover:shadow-mercury-emerald/20 transition-all"
          >
            {isSubmitting ? 'Submitting...' : 'Submit'}
          </button>
        </div>
      </form>
    </FormModal>
  );
}
