'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface FormFieldProps {
  stepNumber: number;
  question: string;
  description?: string;
  children: ReactNode;
  icon?: ReactNode;
}

export function FormField({ stepNumber, question, description, children, icon }: FormFieldProps) {
  return (
    <div className="space-y-8">
      {/* Question */}
      <div className="space-y-3">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="flex items-center gap-3"
        >
          <span className="text-mercury-emerald font-mono text-sm">{stepNumber} →</span>
          {icon}
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="text-3xl md:text-4xl font-bold leading-tight"
        >
          {question}
        </motion.h2>
        {description && (
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-mercury-gray text-lg"
          >
            {description}
          </motion.p>
        )}
      </div>

      {/* Input */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.25 }}
      >
        {children}
      </motion.div>
    </div>
  );
}

// Reusable Input Components
export function TextInput({ 
  value, 
  onChange, 
  placeholder, 
  type = 'text',
  autoFocus = true 
}: { 
  value: string; 
  onChange: (value: string) => void; 
  placeholder: string;
  type?: string;
  autoFocus?: boolean;
}) {
  return (
    <input
      type={type}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      autoFocus={autoFocus}
      className="w-full text-2xl md:text-3xl font-medium bg-transparent border-b-2 border-mercury-gray/30 focus:border-mercury-emerald pb-4 transition-colors placeholder:text-mercury-gray/50 outline-none"
    />
  );
}

export function TextArea({ 
  value, 
  onChange, 
  placeholder,
  rows = 4
}: { 
  value: string; 
  onChange: (value: string) => void; 
  placeholder: string;
  rows?: number;
}) {
  return (
    <textarea
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      rows={rows}
      className="w-full text-xl font-medium bg-mercury-charcoal/50 rounded-2xl p-6 border border-mercury-gray/20 focus:border-mercury-emerald transition-colors placeholder:text-mercury-gray/50 outline-none resize-none"
    />
  );
}

export function SelectOption({ 
  options, 
  value, 
  onChange,
  columns = 2
}: { 
  options: { value: string; label: string; icon?: ReactNode; description?: string }[]; 
  value: string; 
  onChange: (value: string) => void;
  columns?: number;
}) {
  return (
    <div className={`grid grid-cols-1 ${columns === 2 ? 'md:grid-cols-2' : 'md:grid-cols-3'} gap-4`}>
      {options.map((option, index) => (
        <motion.button
          key={option.value}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 + index * 0.05 }}
          onClick={() => onChange(option.value)}
          className={`flex items-center gap-4 p-5 rounded-2xl border-2 text-left transition-all hover:-translate-y-1 ${
            value === option.value
              ? 'bg-mercury-emerald/10 border-mercury-emerald'
              : 'bg-mercury-charcoal/50 border-mercury-gray/20 hover:border-mercury-gray/40'
          }`}
        >
          {option.icon && (
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${
              value === option.value ? 'bg-mercury-emerald/20' : 'bg-mercury-gray/10'
            }`}>
              {option.icon}
            </div>
          )}
          <div>
            <div className="font-semibold text-lg">{option.label}</div>
            {option.description && (
              <div className="text-sm text-mercury-gray">{option.description}</div>
            )}
          </div>
          <div className={`ml-auto w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-colors ${
            value === option.value
              ? 'border-mercury-emerald bg-mercury-emerald'
              : 'border-mercury-gray/30'
          }`}>
            {value === option.value && (
              <motion.svg
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="w-3 h-3 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </motion.svg>
            )}
          </div>
        </motion.button>
      ))}
    </div>
  );
}

export function MultiSelect({ 
  options, 
  value, 
  onChange 
}: { 
  options: { value: string; label: string; icon?: ReactNode }[]; 
  value: string[]; 
  onChange: (value: string[]) => void;
}) {
  const toggleOption = (optionValue: string) => {
    if (value.includes(optionValue)) {
      onChange(value.filter(v => v !== optionValue));
    } else {
      onChange([...value, optionValue]);
    }
  };

  return (
    <div className="space-y-3">
      {options.map((option, index) => (
        <motion.button
          key={option.value}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 + index * 0.05 }}
          onClick={() => toggleOption(option.value)}
          className={`w-full flex items-center gap-4 p-5 rounded-2xl border-2 text-left transition-all hover:-translate-y-0.5 ${
            value.includes(option.value)
              ? 'bg-mercury-gold/10 border-mercury-gold'
              : 'bg-mercury-charcoal/50 border-mercury-gray/20 hover:border-mercury-gray/40'
          }`}
        >
          {option.icon && (
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${
              value.includes(option.value) ? 'bg-mercury-gold/20' : 'bg-mercury-gray/10'
            }`}>
              {option.icon}
            </div>
          )}
          <div className="font-semibold">{option.label}</div>
          <div className={`ml-auto w-6 h-6 rounded-lg border-2 flex items-center justify-center flex-shrink-0 transition-colors ${
            value.includes(option.value)
              ? 'border-mercury-gold bg-mercury-gold'
              : 'border-mercury-gray/30'
          }`}>
            {value.includes(option.value) && (
              <motion.svg
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="w-3 h-3 text-mercury-black"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </motion.svg>
            )}
          </div>
        </motion.button>
      ))}
    </div>
  );
}

export function RangeSlider({
  min,
  max,
  minValue,
  maxValue,
  onMinChange,
  onMaxChange,
  step = 1000,
  formatValue
}: {
  min: number;
  max: number;
  minValue: number;
  maxValue: number;
  onMinChange: (value: number) => void;
  onMaxChange: (value: number) => void;
  step?: number;
  formatValue: (value: number) => string;
}) {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between text-2xl font-bold">
        <span className="text-mercury-emerald">{formatValue(minValue)}</span>
        <span className="text-mercury-gray">—</span>
        <span className="text-mercury-gold">{formatValue(maxValue)}</span>
      </div>
      <div className="space-y-6">
        <div>
          <label className="text-sm text-mercury-gray mb-2 block">Minimum Budget</label>
          <input
            type="range"
            min={min}
            max={max}
            step={step}
            value={minValue}
            onChange={(e) => {
              const val = parseInt(e.target.value);
              if (val < maxValue) onMinChange(val);
            }}
            className="w-full h-2 bg-mercury-charcoal rounded-full appearance-none cursor-pointer slider-emerald"
          />
        </div>
        <div>
          <label className="text-sm text-mercury-gray mb-2 block">Maximum Budget</label>
          <input
            type="range"
            min={min}
            max={max}
            step={step}
            value={maxValue}
            onChange={(e) => {
              const val = parseInt(e.target.value);
              if (val > minValue) onMaxChange(val);
            }}
            className="w-full h-2 bg-mercury-charcoal rounded-full appearance-none cursor-pointer slider-gold"
          />
        </div>
      </div>
    </div>
  );
}

export function NumberInput({
  value,
  onChange,
  min = 0,
  max = 100,
  unit = ''
}: {
  value: number;
  onChange: (value: number) => void;
  min?: number;
  max?: number;
  unit?: string;
}) {
  return (
    <div className="flex items-center justify-center gap-6">
      <button
        onClick={() => value > min && onChange(value - 1)}
        className="w-14 h-14 rounded-full bg-mercury-charcoal border border-mercury-gray/20 flex items-center justify-center text-2xl font-bold hover:border-mercury-emerald transition-colors"
      >
        −
      </button>
      <div className="text-center">
        <div className="text-5xl font-bold text-mercury-emerald">{value}</div>
        {unit && <div className="text-mercury-gray mt-1">{unit}</div>}
      </div>
      <button
        onClick={() => value < max && onChange(value + 1)}
        className="w-14 h-14 rounded-full bg-mercury-charcoal border border-mercury-gray/20 flex items-center justify-center text-2xl font-bold hover:border-mercury-emerald transition-colors"
      >
        +
      </button>
    </div>
  );
}
