'use client';

import { useState } from 'react';
import { NumberInputProblem } from '@/types/content';

interface NumberInputProblemComponentProps {
  problem: NumberInputProblem;
  language: 'en' | 'bn';
  onSubmit: (answer: number) => void;
  disabled?: boolean;
}

export function NumberInputProblemComponent({
  language,
  onSubmit,
  disabled = false,
}: NumberInputProblemComponentProps) {
  const [answer, setAnswer] = useState('');

  const handleSubmit = () => {
    const numAnswer = parseFloat(answer);
    if (isNaN(numAnswer)) return;
    onSubmit(numAnswer);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex gap-2">
        <input
          type="number"
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          onKeyPress={handleKeyPress}
          disabled={disabled}
          placeholder={
            language === 'en' ? 'Enter your answer' : 'তোমার উত্তর লেখো'
          }
          className="input input-bordered flex-1 text-xl text-center"
          autoFocus
        />
      </div>

      <button
        onClick={handleSubmit}
        disabled={!answer || disabled}
        className="btn btn-primary w-full"
      >
        {language === 'en' ? 'Submit Answer' : 'উত্তর জমা দাও'}
      </button>
    </div>
  );
}
