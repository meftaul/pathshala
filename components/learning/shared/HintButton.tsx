'use client';

import { useState } from 'react';
import { Lightbulb } from 'lucide-react';

interface HintButtonProps {
  hints: Array<{ level: number; text: { en: string; bn: string } }>;
  language: 'en' | 'bn';
  onRequest: (level: number) => void;
}

export function HintButton({ hints, language, onRequest }: HintButtonProps) {
  const [currentHintLevel, setCurrentHintLevel] = useState(0);
  const [showHint, setShowHint] = useState(false);

  const handleRequestHint = () => {
    const nextLevel = currentHintLevel + 1;
    if (nextLevel <= hints.length) {
      setCurrentHintLevel(nextLevel);
      setShowHint(true);
      onRequest(nextLevel);
    }
  };

  const currentHint = hints[currentHintLevel - 1];

  return (
    <div className="relative">
      <button
        onClick={handleRequestHint}
        disabled={currentHintLevel >= hints.length}
        className="btn btn-ghost btn-sm gap-2"
      >
        <Lightbulb className="w-4 h-4" />
        {language === 'en' ? 'Hint' : 'ইঙ্গিত'} ({currentHintLevel}/{hints.length})
      </button>

      {showHint && currentHint && (
        <div className="absolute top-full right-0 mt-2 p-4 bg-yellow-50 border-2 border-yellow-200 rounded-lg shadow-lg w-64 z-10 dark:bg-yellow-900/20 dark:border-yellow-700">
          <button
            onClick={() => setShowHint(false)}
            className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 dark:text-gray-400"
          >
            ×
          </button>
          <p className="text-sm">{currentHint.text[language]}</p>
        </div>
      )}
    </div>
  );
}
