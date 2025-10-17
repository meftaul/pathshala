'use client';

import { useState } from 'react';
import { Plus, Minus, RotateCcw } from 'lucide-react';

interface CounterComponentProps {
  startValue: number;
  maxValue: number;
  label: string;
  showEquation?: boolean;
  language: 'en' | 'bn';
}

export function CounterComponent({
  startValue,
  maxValue,
  label,
  showEquation = false,
  language,
}: CounterComponentProps) {
  const [count, setCount] = useState(startValue);
  const [history, setHistory] = useState<number[]>([startValue]);

  const increment = () => {
    if (count < maxValue) {
      const newCount = count + 1;
      setCount(newCount);
      setHistory([...history, newCount]);
    }
  };

  const decrement = () => {
    if (count > 0) {
      const newCount = count - 1;
      setCount(newCount);
      setHistory([...history, newCount]);
    }
  };

  const reset = () => {
    setCount(startValue);
    setHistory([startValue]);
  };

  // Convert to Bengali numerals if needed
  const displayNumber = (num: number) => {
    if (language === 'bn') {
      const bengaliDigits = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];
      return num.toString().split('').map(d => bengaliDigits[parseInt(d)]).join('');
    }
    return num.toString();
  };

  return (
    <div className="card bg-gradient-to-br from-primary/10 to-secondary/10 shadow-lg border-2 border-primary/20">
      <div className="card-body items-center">
        <h4 className="card-title text-lg text-center">{label}</h4>

        {/* Visual representation */}
        <div className="flex flex-wrap gap-2 justify-center max-w-md my-4 min-h-[120px] items-center">
          {Array.from({ length: count }, (_, i) => (
            <div
              key={i}
              className="w-10 h-10 bg-primary rounded-lg shadow-md animate-in fade-in zoom-in duration-300"
              style={{ animationDelay: `${i * 50}ms` }}
            />
          ))}
          {count === 0 && (
            <div className="text-base-content/40 text-center">
              {language === 'en' ? 'Click + to add objects' : '+ ক্লিক করে বস্তু যোগ করো'}
            </div>
          )}
        </div>

        {/* Counter display */}
        <div className="text-6xl font-bold text-primary my-4">
          {displayNumber(count)}
        </div>

        {/* Equation display */}
        {showEquation && history.length > 1 && (
          <div className="badge badge-lg badge-secondary animate-in fade-in">
            {displayNumber(history[history.length - 2])} → {displayNumber(count)}
            <span className="ml-2 text-xs">
              ({history[history.length - 1] > history[history.length - 2] ? '+' : '-'}1)
            </span>
          </div>
        )}

        {/* Controls */}
        <div className="flex gap-4 items-center">
          <button
            onClick={decrement}
            disabled={count <= 0}
            className="btn btn-circle btn-error"
            aria-label={language === 'en' ? 'Decrease' : 'কমাও'}
          >
            <Minus className="w-5 h-5" />
          </button>

          <button
            onClick={reset}
            className="btn btn-ghost btn-sm gap-2"
          >
            <RotateCcw className="w-4 h-4" />
            {language === 'en' ? 'Reset' : 'রিসেট'}
          </button>

          <button
            onClick={increment}
            disabled={count >= maxValue}
            className="btn btn-circle btn-success"
            aria-label={language === 'en' ? 'Increase' : 'বাড়াও'}
          >
            <Plus className="w-5 h-5" />
          </button>
        </div>

        <div className="text-sm text-base-content/60 mt-2">
          {language === 'en'
            ? `Range: 0 to ${maxValue}`
            : `সীমা: ০ থেকে ${displayNumber(maxValue)}`}
        </div>
      </div>
    </div>
  );
}
