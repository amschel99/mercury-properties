'use client';

import { useState } from 'react';
import TypeformWrapper from '@/components/TypeformWrapper';
import { FormField, TextInput, SelectOption, TextArea } from '@/components/FormField';
import { User, Phone, Building2, MapPin, MessageSquare } from 'lucide-react';

interface FormData {
  fullName: string;
  phone: string;
  propertyType: string;
  location: string;
  message: string;
}

const propertyTypes = [
  { value: 'apartment-building', label: 'Apartment Building', icon: <Building2 className="w-5 h-5 text-mercury-gold" /> },
  { value: 'single-units', label: 'Single Units', icon: <Building2 className="w-5 h-5 text-mercury-gold" /> },
  { value: 'residential-house', label: 'Residential House', icon: <Building2 className="w-5 h-5 text-mercury-gold" /> },
  { value: 'townhouse', label: 'Townhouse', icon: <Building2 className="w-5 h-5 text-mercury-gold" /> },
  { value: 'commercial', label: 'Commercial', icon: <Building2 className="w-5 h-5 text-mercury-gold" /> },
  { value: 'other', label: 'Other', icon: <Building2 className="w-5 h-5 text-mercury-gold" /> },
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

const TOTAL_STEPS = 5;

export default function LandlordApplication() {
  const [currentStep, setCurrentStep] = useState(0);
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

  const canProceed = () => {
    switch (currentStep) {
      case 0:
        return formData.fullName.length >= 2;
      case 1:
        return formData.phone.length >= 9;
      case 2:
        return formData.propertyType !== '';
      case 3:
        return formData.location !== '';
      case 4:
        return true; // Message is optional
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
        const response = await fetch('/api/applications/landlord', {
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
            description="Let's get acquainted"
            icon={<User className="w-5 h-5 text-mercury-gold" />}
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
            description="We'll call to arrange a visit to your property"
            icon={<Phone className="w-5 h-5 text-mercury-gold" />}
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
            question="What type of property do you have?"
            icon={<Building2 className="w-5 h-5 text-mercury-gold" />}
          >
            <SelectOption
              options={propertyTypes}
              value={formData.propertyType}
              onChange={(v) => updateField('propertyType', v)}
              columns={2}
            />
          </FormField>
        );

      case 3:
        return (
          <FormField
            stepNumber={4}
            question="Where is your property located?"
            icon={<MapPin className="w-5 h-5 text-mercury-gold" />}
          >
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {locations.map((location) => (
                <button
                  key={location.value}
                  onClick={() => updateField('location', location.value)}
                  className={`p-4 rounded-xl border-2 text-left transition-all hover:-translate-y-0.5 ${
                    formData.location === location.value
                      ? 'bg-mercury-gold/10 border-mercury-gold'
                      : 'bg-mercury-charcoal/50 border-mercury-gray/20 hover:border-mercury-gray/40'
                  }`}
                >
                  <div className="font-semibold">{location.label}</div>
                </button>
              ))}
            </div>
          </FormField>
        );

      case 4:
        return (
          <FormField
            stepNumber={5}
            question="Anything else you'd like us to know?"
            description="Number of units, current situation, questions — optional but helpful"
            icon={<MessageSquare className="w-5 h-5 text-mercury-gold" />}
          >
            <TextArea
              value={formData.message}
              onChange={(v) => updateField('message', v)}
              placeholder="E.g., I have 5 apartments in Kilimani, currently 2 are vacant..."
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
      title="Partner With Us"
      accentColor="gold"
      successMessage="We'll call you to arrange a visit to your property!"
    >
      {renderStep()}
    </TypeformWrapper>
  );
}
