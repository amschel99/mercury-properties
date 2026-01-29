'use client';

'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { User, Phone, Building2, MapPin, MessageSquare, Check } from 'lucide-react';
import FormModal from './FormModal';

interface FormData {
  fullName: string;
  phone: string;
  propertyType: string;
  location: string;
  message: string;
}

const propertyTypes = [
  { value: 'apartment-building', label: 'Apartment Building' },
  { value: 'single-units', label: 'Single Units' },
  { value: 'residential-house', label: 'Residential House' },
  { value: 'townhouse', label: 'Townhouse' },
  { value: 'commercial', label: 'Commercial' },
  { value: 'other', label: 'Other' },
];

const locations = [
  { value: 'nairobi', label: 'Nairobi' },
  { value: 'mombasa', label: 'Mombasa' },
  { value: 'kisumu', label: 'Kisumu' },
  { value: 'eldoret', label: 'Eldoret' },
  { value: 'nakuru', label: 'Nakuru' },
  { value: 'thika', label: 'Thika' },
  { value: 'other', label: 'Other' },
];

interface LandlordFormProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function LandlordForm({ isOpen, onClose }: LandlordFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    phone: '',
    propertyType: '',
    location: '',
    message: '',
  });

  const updateField = <K extends keyof FormData>(field: K, value: FormData[K]) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const canSubmit = formData.fullName.length >= 2 && 
                   formData.phone.length >= 9 && 
                   formData.propertyType !== '' && 
                   formData.location !== '';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!canSubmit || isSubmitting) return;

    setIsSubmitting(true);
    try {
      const response = await fetch('/api/applications/landlord', {
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
            propertyType: '',
            location: '',
            message: '',
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
      <FormModal isOpen={isOpen} onClose={onClose} title="Partner With Us" accentColor="gold">
        <div className="text-center py-12">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", duration: 0.8 }}
            className="w-20 h-20 mx-auto rounded-full bg-gradient-to-r from-mercury-gold/90 to-mercury-gold flex items-center justify-center mb-6"
          >
            <Check className="w-10 h-10 text-mercury-black" />
          </motion.div>
          <h3 className="text-2xl font-bold mb-3">Thank You!</h3>
          <p className="text-mercury-gray">
            We'll call you to arrange a visit to your property!
          </p>
        </div>
      </FormModal>
    );
  }

  return (
    <FormModal isOpen={isOpen} onClose={onClose} title="Partner With Us" accentColor="gold">
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name */}
        <div>
          <label className="flex items-center gap-2 text-sm font-medium text-mercury-gray mb-2">
            <User className="w-4 h-4 text-mercury-gold" />
            Full Name *
          </label>
          <input
            type="text"
            value={formData.fullName}
            onChange={(e) => updateField('fullName', e.target.value)}
            placeholder="Your full name"
            required
            className="w-full px-4 py-3 bg-mercury-charcoal/50 rounded-xl border border-mercury-gray/20 focus:border-mercury-gold focus:outline-none transition-colors"
          />
        </div>

        {/* Phone */}
        <div>
          <label className="flex items-center gap-2 text-sm font-medium text-mercury-gray mb-2">
            <Phone className="w-4 h-4 text-mercury-gold" />
            Phone Number *
          </label>
          <input
            type="tel"
            value={formData.phone}
            onChange={(e) => updateField('phone', e.target.value)}
            placeholder="0712 345 678"
            required
            className="w-full px-4 py-3 bg-mercury-charcoal/50 rounded-xl border border-mercury-gray/20 focus:border-mercury-gold focus:outline-none transition-colors"
          />
          <p className="text-xs text-mercury-gray mt-1">We'll call to arrange a visit</p>
        </div>

        {/* Property Type */}
        <div>
          <label className="flex items-center gap-2 text-sm font-medium text-mercury-gray mb-2">
            <Building2 className="w-4 h-4 text-mercury-gold" />
            Property Type *
          </label>
          <div className="grid grid-cols-2 gap-2">
            {propertyTypes.map((type) => (
              <button
                key={type.value}
                type="button"
                onClick={() => updateField('propertyType', type.value)}
                className={`p-3 rounded-lg border-2 text-left transition-all ${
                  formData.propertyType === type.value
                    ? 'bg-mercury-gold/10 border-mercury-gold text-mercury-gold'
                    : 'bg-mercury-charcoal/50 border-mercury-gray/20 hover:border-mercury-gray/40'
                }`}
              >
                {type.label}
              </button>
            ))}
          </div>
        </div>

        {/* Location */}
        <div>
          <label className="flex items-center gap-2 text-sm font-medium text-mercury-gray mb-2">
            <MapPin className="w-4 h-4 text-mercury-gold" />
            Location *
          </label>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
            {locations.map((location) => (
              <button
                key={location.value}
                type="button"
                onClick={() => updateField('location', location.value)}
                className={`p-3 rounded-lg border-2 text-left transition-all ${
                  formData.location === location.value
                    ? 'bg-mercury-gold/10 border-mercury-gold text-mercury-gold'
                    : 'bg-mercury-charcoal/50 border-mercury-gray/20 hover:border-mercury-gray/40'
                }`}
              >
                {location.label}
              </button>
            ))}
          </div>
        </div>

        {/* Message */}
        <div>
          <label className="flex items-center gap-2 text-sm font-medium text-mercury-gray mb-2">
            <MessageSquare className="w-4 h-4 text-mercury-gold" />
            Additional Information (Optional)
          </label>
          <textarea
            value={formData.message}
            onChange={(e) => updateField('message', e.target.value)}
            placeholder="E.g., I have 5 apartments in Kilimani, currently 2 are vacant..."
            rows={4}
            className="w-full px-4 py-3 bg-mercury-charcoal/50 rounded-xl border border-mercury-gray/20 focus:border-mercury-gold focus:outline-none transition-colors resize-none"
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
            className="flex-1 px-6 py-3 bg-gradient-to-r from-mercury-gold/90 to-mercury-gold rounded-xl font-medium text-mercury-black disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-lg hover:shadow-mercury-gold/20 transition-all"
          >
            {isSubmitting ? 'Submitting...' : 'Submit'}
          </button>
        </div>
      </form>
    </FormModal>
  );
}
