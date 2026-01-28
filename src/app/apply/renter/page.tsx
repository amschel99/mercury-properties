'use client';

import { useState } from 'react';
import TypeformWrapper from '@/components/TypeformWrapper';
import { FormField, TextInput, SelectOption, TextArea } from '@/components/FormField';
import { User, MapPin, Wallet, MessageSquare, Phone } from 'lucide-react';

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

const TOTAL_STEPS = 5;

export default function RenterApplication() {
  const [currentStep, setCurrentStep] = useState(0);
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

  const canProceed = () => {
    switch (currentStep) {
      case 0:
        return formData.fullName.length >= 2;
      case 1:
        return formData.phone.length >= 9;
      case 2:
        return formData.location !== '';
      case 3:
        return formData.budgetRange !== '';
      case 4:
        return true; // Requirements are optional
      default:
        return false;
    }
  };

  const handleNext = async () => {
    if (currentStep < TOTAL_STEPS - 1) {
      setCurrentStep(prev => prev + 1);
    } else {
      setIsSubmitting(true);
      try {
        const response = await fetch('/api/applications/renter', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        });
        
        if (response.ok) {
          setIsComplete(true);
        } else {
          alert('Something went wrong. Please try again.');
        }
      } catch {
        alert('Something went wrong. Please try again.');
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return (
          <FormField
            stepNumber={1}
            question="What's your name?"
            description="Let's start with how we should address you"
            icon={<User className="w-5 h-5 text-mercury-emerald" />}
          >
            <TextInput
              value={formData.fullName}
              onChange={(v) => updateField('fullName', v)}
              placeholder="Type your full name..."
            />
          </FormField>
        );

      case 1:
        return (
          <FormField
            stepNumber={2}
            question={`Hi ${formData.fullName.split(' ')[0]}! What's your phone number?`}
            description="We'll call or WhatsApp you within 2 hours with options"
            icon={<Phone className="w-5 h-5 text-mercury-emerald" />}
          >
            <TextInput
              type="tel"
              value={formData.phone}
              onChange={(v) => updateField('phone', v)}
              placeholder="0712 345 678"
            />
          </FormField>
        );

      case 2:
        return (
          <FormField
            stepNumber={3}
            question="Where do you want to live?"
            description="Select your preferred area"
            icon={<MapPin className="w-5 h-5 text-mercury-emerald" />}
          >
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
              {locations.map((location) => (
                <button
                  key={location.value}
                  onClick={() => updateField('location', location.value)}
                  className={`p-4 rounded-xl border-2 text-left transition-all hover:-translate-y-0.5 ${
                    formData.location === location.value
                      ? 'bg-mercury-emerald/10 border-mercury-emerald'
                      : 'bg-mercury-charcoal/50 border-mercury-gray/20 hover:border-mercury-gray/40'
                  }`}
                >
                  <div className="font-semibold">{location.label}</div>
                </button>
              ))}
            </div>
          </FormField>
        );

      case 3:
        return (
          <FormField
            stepNumber={4}
            question="What's your budget?"
            description="Monthly rent range you're comfortable with"
            icon={<Wallet className="w-5 h-5 text-mercury-emerald" />}
          >
            <SelectOption
              options={budgetRanges}
              value={formData.budgetRange}
              onChange={(v) => updateField('budgetRange', v)}
              columns={2}
            />
          </FormField>
        );

      case 4:
        return (
          <FormField
            stepNumber={5}
            question="Any specific requirements?"
            description="Bedrooms, parking, pets, move-in date — anything helps! (optional)"
            icon={<MessageSquare className="w-5 h-5 text-mercury-emerald" />}
          >
            <TextArea
              value={formData.requirements}
              onChange={(v) => updateField('requirements', v)}
              placeholder="E.g., 2 bedrooms, parking needed, pet-friendly, moving in next month..."
              rows={5}
            />
          </FormField>
        );

      default:
        return null;
    }
  };

  return (
    <TypeformWrapper
      currentStep={currentStep}
      totalSteps={TOTAL_STEPS}
      onNext={handleNext}
      onPrev={handlePrev}
      canProceed={canProceed()}
      isSubmitting={isSubmitting}
      isComplete={isComplete}
      title="Find Your Home"
      accentColor="emerald"
      successMessage="We'll contact you within 2 hours with real options!"
    >
      {renderStep()}
    </TypeformWrapper>
  );
}
