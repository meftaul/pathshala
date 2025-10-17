'use client';

import { useState } from 'react';
import { MCQProblem } from '@/types/content';

interface MCQProblemComponentProps {
  problem: MCQProblem;
  language: 'en' | 'bn';
  onSubmit: (answer: string) => void;
  disabled?: boolean;
}

export function MCQProblemComponent({
  problem,
  language,
  onSubmit,
  disabled = false,
}: MCQProblemComponentProps) {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleSelect = (optionId: string) => {
    if (disabled) return;
    setSelectedOption(optionId);
  };

  const handleSubmit = () => {
    if (!selectedOption) return;
    onSubmit(selectedOption);
  };

  return (
    <div className="space-y-3">
      {problem.options.map((option) => (
        <button
          key={option.id}
          onClick={() => handleSelect(option.id)}
          disabled={disabled}
          className={`
            w-full p-4 text-left rounded-lg border-2 transition-all
            ${
              selectedOption === option.id
                ? 'border-primary bg-primary/10'
                : 'border-base-300 hover:border-primary/50'
            }
            ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
          `}
        >
          <div className="flex items-center gap-3">
            <div
              className={`
              w-6 h-6 rounded-full border-2 flex items-center justify-center
              ${selectedOption === option.id ? 'border-primary bg-primary' : 'border-base-300'}
            `}
            >
              {selectedOption === option.id && (
                <div className="w-3 h-3 rounded-full bg-white" />
              )}
            </div>
            <span className="text-base">{option.text[language]}</span>
          </div>
        </button>
      ))}

      <button
        onClick={handleSubmit}
        disabled={!selectedOption || disabled}
        className="btn btn-primary w-full mt-4"
      >
        {language === 'en' ? 'Submit Answer' : 'উত্তর জমা দাও'}
      </button>
    </div>
  );
}
