# Adding Custom Components to Lessons

This guide explains how to create and integrate custom interactive components into lesson content to make learning more engaging and personalized.

## Understanding the Content Block System

Lessons are built using content blocks defined in `types/content.ts`. Currently supported blocks:
- `text` - Paragraphs, headings, callouts
- `image` - Static images with captions
- `example` - Worked examples with steps

You can extend this system to add custom interactive components like:
- Visual counters and number lines
- Interactive diagrams and animations
- Step-by-step visualizations
- Games and activities
- Custom calculators
- And more!

## Step-by-Step: Adding a Custom Component

### Step 1: Define the Content Block Type

Add your new block type to `types/content.ts`:

```typescript
// types/content.ts

// Add your new block interface
export interface CounterBlock {
  type: 'counter';
  startValue: number;
  maxValue: number;
  label: LocalizedText;
  showEquation?: boolean;
}

export interface NumberLineBlock {
  type: 'number-line';
  min: number;
  max: number;
  highlightPoints?: number[];
  showJumps?: Array<{
    from: number;
    to: number;
    label: LocalizedText;
  }>;
}

export interface InteractiveGridBlock {
  type: 'interactive-grid';
  rows: number;
  cols: number;
  initialFilled?: number;
  instruction: LocalizedText;
}

// Update the LessonContentBlock union type
export type LessonContentBlock =
  | TextBlock
  | ImageBlock
  | ExampleBlock
  | CounterBlock           // Add your new types here
  | NumberLineBlock
  | InteractiveGridBlock;
```

### Step 2: Create the Component

Create your custom component in `components/learning/custom/`:

**Example 1: Interactive Counter Component**

```typescript
// components/learning/custom/CounterComponent.tsx
'use client';

import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

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
        <h4 className="card-title text-lg">{label}</h4>

        {/* Visual representation */}
        <div className="flex flex-wrap gap-2 justify-center max-w-md my-4">
          {Array.from({ length: count }, (_, i) => (
            <div
              key={i}
              className="w-10 h-10 bg-primary rounded-lg shadow-md animate-in fade-in zoom-in duration-300"
            />
          ))}
        </div>

        {/* Counter display */}
        <div className="text-6xl font-bold text-primary my-4">
          {displayNumber(count)}
        </div>

        {/* Equation display */}
        {showEquation && history.length > 1 && (
          <div className="badge badge-lg badge-secondary">
            {displayNumber(history[history.length - 2])} → {displayNumber(count)}
          </div>
        )}

        {/* Controls */}
        <div className="flex gap-4">
          <button
            onClick={decrement}
            disabled={count <= 0}
            className="btn btn-circle btn-error"
          >
            <Minus className="w-5 h-5" />
          </button>

          <button
            onClick={reset}
            className="btn btn-ghost"
          >
            {language === 'en' ? 'Reset' : 'রিসেট'}
          </button>

          <button
            onClick={increment}
            disabled={count >= maxValue}
            className="btn btn-circle btn-success"
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
```

**Example 2: Number Line Component**

```typescript
// components/learning/custom/NumberLineComponent.tsx
'use client';

import { useState } from 'react';

interface NumberLineComponentProps {
  min: number;
  max: number;
  highlightPoints?: number[];
  showJumps?: Array<{
    from: number;
    to: number;
    label: string;
  }>;
  language: 'en' | 'bn';
}

export function NumberLineComponent({
  min,
  max,
  highlightPoints = [],
  showJumps = [],
  language,
}: NumberLineComponentProps) {
  const [selectedPoint, setSelectedPoint] = useState<number | null>(null);
  const range = max - min;
  const points = Array.from({ length: range + 1 }, (_, i) => min + i);

  const displayNumber = (num: number) => {
    if (language === 'bn') {
      const bengaliDigits = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];
      return num.toString().split('').map(d => bengaliDigits[parseInt(d)]).join('');
    }
    return num.toString();
  };

  return (
    <div className="card bg-base-200 shadow-lg p-6">
      <div className="relative h-32">
        {/* Number line */}
        <div className="absolute top-1/2 left-0 right-0 h-2 bg-gradient-to-r from-primary to-secondary rounded-full" />

        {/* Points */}
        <div className="absolute top-1/2 left-0 right-0 flex justify-between">
          {points.map((point) => {
            const isHighlighted = highlightPoints.includes(point);
            const isSelected = selectedPoint === point;

            return (
              <div
                key={point}
                className="flex flex-col items-center -translate-y-1/2"
                onClick={() => setSelectedPoint(point)}
              >
                {/* Point marker */}
                <div
                  className={`w-4 h-4 rounded-full border-2 cursor-pointer transition-all ${
                    isSelected
                      ? 'bg-accent border-accent scale-150 shadow-lg'
                      : isHighlighted
                      ? 'bg-primary border-primary scale-125'
                      : 'bg-base-100 border-base-300'
                  }`}
                />

                {/* Number label */}
                <div className={`text-sm mt-6 font-semibold ${
                  isHighlighted || isSelected ? 'text-primary' : 'text-base-content/60'
                }`}>
                  {displayNumber(point)}
                </div>
              </div>
            );
          })}
        </div>

        {/* Jump arrows */}
        {showJumps.map((jump, idx) => {
          const fromPercent = ((jump.from - min) / range) * 100;
          const toPercent = ((jump.to - min) / range) * 100;

          return (
            <div
              key={idx}
              className="absolute top-8"
              style={{
                left: `${Math.min(fromPercent, toPercent)}%`,
                width: `${Math.abs(toPercent - fromPercent)}%`,
              }}
            >
              <div className="flex flex-col items-center">
                <div className="text-xs badge badge-accent mb-1">
                  {jump.label}
                </div>
                <div className={`w-full h-1 bg-accent rounded-full relative ${
                  jump.to > jump.from ? 'arrow-right' : 'arrow-left'
                }`} />
              </div>
            </div>
          );
        })}
      </div>

      {selectedPoint !== null && (
        <div className="text-center mt-8 animate-in fade-in slide-in-from-bottom-4">
          <div className="badge badge-lg badge-primary">
            {language === 'en' ? 'Selected: ' : 'নির্বাচিত: '}
            {displayNumber(selectedPoint)}
          </div>
        </div>
      )}
    </div>
  );
}
```

**Example 3: Interactive Grid Component**

```typescript
// components/learning/custom/InteractiveGridComponent.tsx
'use client';

import { useState } from 'react';

interface InteractiveGridComponentProps {
  rows: number;
  cols: number;
  initialFilled?: number;
  instruction: string;
  language: 'en' | 'bn';
}

export function InteractiveGridComponent({
  rows,
  cols,
  initialFilled = 0,
  instruction,
  language,
}: InteractiveGridComponentProps) {
  const [filled, setFilled] = useState<Set<string>>(
    new Set(
      Array.from({ length: initialFilled }, (_, i) => {
        const row = Math.floor(i / cols);
        const col = i % cols;
        return `${row}-${col}`;
      })
    )
  );

  const toggleCell = (row: number, col: number) => {
    const key = `${row}-${col}`;
    const newFilled = new Set(filled);

    if (newFilled.has(key)) {
      newFilled.delete(key);
    } else {
      newFilled.add(key);
    }

    setFilled(newFilled);
  };

  const reset = () => {
    setFilled(new Set());
  };

  const displayNumber = (num: number) => {
    if (language === 'bn') {
      const bengaliDigits = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];
      return num.toString().split('').map(d => bengaliDigits[parseInt(d)]).join('');
    }
    return num.toString();
  };

  return (
    <div className="card bg-base-200 shadow-lg">
      <div className="card-body">
        <div className="text-center mb-4">
          <p className="text-base-content/70 mb-2">{instruction}</p>
          <div className="badge badge-lg badge-primary">
            {language === 'en' ? 'Count: ' : 'গণনা: '}
            {displayNumber(filled.size)}
          </div>
        </div>

        {/* Grid */}
        <div
          className="inline-grid gap-2 mx-auto p-4"
          style={{
            gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))`,
          }}
        >
          {Array.from({ length: rows }, (_, row) =>
            Array.from({ length: cols }, (_, col) => {
              const key = `${row}-${col}`;
              const isFilled = filled.has(key);

              return (
                <button
                  key={key}
                  onClick={() => toggleCell(row, col)}
                  className={`w-12 h-12 rounded-lg border-2 transition-all duration-200 ${
                    isFilled
                      ? 'bg-primary border-primary scale-95 shadow-lg'
                      : 'bg-base-100 border-base-300 hover:border-primary/50'
                  }`}
                >
                  {isFilled && (
                    <div className="w-full h-full flex items-center justify-center text-primary-content font-bold">
                      ✓
                    </div>
                  )}
                </button>
              );
            })
          )}
        </div>

        <div className="flex gap-2 justify-center mt-4">
          <button onClick={reset} className="btn btn-ghost btn-sm">
            {language === 'en' ? 'Clear All' : 'সব মুছে ফেলো'}
          </button>
        </div>
      </div>
    </div>
  );
}
```

**Example 4: Step-by-Step Animator**

```typescript
// components/learning/custom/StepAnimatorComponent.tsx
'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Step {
  visual: string;
  explanation: string;
}

interface StepAnimatorComponentProps {
  steps: Step[];
  title: string;
  language: 'en' | 'bn';
}

export function StepAnimatorComponent({
  steps,
  title,
  language,
}: StepAnimatorComponentProps) {
  const [currentStep, setCurrentStep] = useState(0);

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="card bg-gradient-to-br from-secondary/10 to-accent/10 shadow-lg">
      <div className="card-body">
        <h4 className="card-title text-center">{title}</h4>

        {/* Step visualization */}
        <div className="bg-base-100 rounded-lg p-8 min-h-[200px] flex items-center justify-center my-4">
          <div className="text-4xl font-bold animate-in fade-in slide-in-from-right-4">
            {steps[currentStep].visual}
          </div>
        </div>

        {/* Step explanation */}
        <div className="alert bg-accent/10 border-accent/30">
          <div>
            <div className="badge badge-accent mb-2">
              {language === 'en' ? 'Step' : 'ধাপ'} {currentStep + 1} / {steps.length}
            </div>
            <p className="text-sm">{steps[currentStep].explanation}</p>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center mt-4">
          <button
            onClick={prevStep}
            disabled={currentStep === 0}
            className="btn btn-ghost btn-sm gap-2"
          >
            <ChevronLeft className="w-4 h-4" />
            {language === 'en' ? 'Previous' : 'আগের'}
          </button>

          {/* Progress dots */}
          <div className="flex gap-2">
            {steps.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentStep(idx)}
                className={`w-2 h-2 rounded-full transition-all ${
                  idx === currentStep
                    ? 'bg-primary w-8'
                    : idx < currentStep
                    ? 'bg-primary/50'
                    : 'bg-base-300'
                }`}
              />
            ))}
          </div>

          <button
            onClick={nextStep}
            disabled={currentStep === steps.length - 1}
            className="btn btn-ghost btn-sm gap-2"
          >
            {language === 'en' ? 'Next' : 'পরবর্তী'}
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
```

### Step 3: Update LessonRenderer

Integrate your custom components into `components/learning/LessonRenderer.tsx`:

```typescript
// components/learning/LessonRenderer.tsx
'use client';

import { LessonContent } from '@/types/content';
import Image from 'next/image';
// Import your custom components
import { CounterComponent } from './custom/CounterComponent';
import { NumberLineComponent } from './custom/NumberLineComponent';
import { InteractiveGridComponent } from './custom/InteractiveGridComponent';
import { StepAnimatorComponent } from './custom/StepAnimatorComponent';

interface LessonRendererProps {
  content: LessonContent;
  language: 'en' | 'bn';
}

export function LessonRenderer({ content, language }: LessonRendererProps) {
  return (
    <div className="lesson-content space-y-6">
      {content.map((block, index) => {
        switch (block.type) {
          case 'text':
            // ... existing text rendering code
            break;

          case 'image':
            // ... existing image rendering code
            break;

          case 'example':
            // ... existing example rendering code
            break;

          // Add your custom component cases
          case 'counter':
            return (
              <CounterComponent
                key={index}
                startValue={block.startValue}
                maxValue={block.maxValue}
                label={block.label[language]}
                showEquation={block.showEquation}
                language={language}
              />
            );

          case 'number-line':
            return (
              <NumberLineComponent
                key={index}
                min={block.min}
                max={block.max}
                highlightPoints={block.highlightPoints}
                showJumps={block.showJumps?.map(jump => ({
                  ...jump,
                  label: jump.label[language],
                }))}
                language={language}
              />
            );

          case 'interactive-grid':
            return (
              <InteractiveGridComponent
                key={index}
                rows={block.rows}
                cols={block.cols}
                initialFilled={block.initialFilled}
                instruction={block.instruction[language]}
                language={language}
              />
            );

          case 'step-animator':
            return (
              <StepAnimatorComponent
                key={index}
                steps={block.steps.map(step => ({
                  visual: step.visual[language],
                  explanation: step.explanation[language],
                }))}
                title={block.title[language]}
                language={language}
              />
            );

          default:
            return null;
        }
      })}
    </div>
  );
}
```

### Step 4: Use in Lesson Content

Now you can use your custom components in lesson content files:

```typescript
// content/topics/arithmetic/units/addition-basics.ts
import { Lesson } from '@/types/content';

const lesson1: Lesson = {
  id: 'lesson_addition_interactive',
  unitId: 'unit_addition_basics',
  title: {
    en: 'Interactive Addition',
    bn: 'ইন্টারেক্টিভ যোগ'
  },
  content: [
    {
      type: 'text',
      format: 'heading',
      content: {
        en: 'Let\'s Count Together!',
        bn: 'চলো একসাথে গণনা করি!'
      }
    },

    // Use the counter component
    {
      type: 'counter',
      startValue: 0,
      maxValue: 10,
      label: {
        en: 'Count objects by clicking +',
        bn: '+ ক্লিক করে বস্তু গণনা করো'
      },
      showEquation: true
    },

    {
      type: 'text',
      format: 'paragraph',
      content: {
        en: 'Addition is like counting forward on a number line.',
        bn: 'যোগ হলো সংখ্যা রেখায় সামনের দিকে গণনা করার মতো।'
      }
    },

    // Use the number line component
    {
      type: 'number-line',
      min: 0,
      max: 10,
      highlightPoints: [3, 5, 8],
      showJumps: [
        {
          from: 3,
          to: 5,
          label: { en: '+2', bn: '+২' }
        },
        {
          from: 5,
          to: 8,
          label: { en: '+3', bn: '+৩' }
        }
      ]
    },

    {
      type: 'text',
      format: 'callout',
      content: {
        en: '💡 Try clicking on different numbers on the number line!',
        bn: '💡 সংখ্যা রেখায় বিভিন্ন সংখ্যায় ক্লিক করে দেখো!'
      }
    },

    // Use the interactive grid
    {
      type: 'interactive-grid',
      rows: 5,
      cols: 5,
      initialFilled: 0,
      instruction: {
        en: 'Click to fill squares and count them!',
        bn: 'বর্গ পূরণ করতে ক্লিক করো এবং সেগুলি গণনা করো!'
      }
    },

    // Use step animator
    {
      type: 'step-animator',
      title: {
        en: 'How to Add 7 + 5',
        bn: '৭ + ৫ যোগ করার উপায়'
      },
      steps: [
        {
          visual: { en: '7', bn: '৭' },
          explanation: { en: 'Start with 7', bn: '৭ দিয়ে শুরু করো' }
        },
        {
          visual: { en: '7 + 5', bn: '৭ + ৫' },
          explanation: { en: 'We need to add 5', bn: 'আমাদের ৫ যোগ করতে হবে' }
        },
        {
          visual: { en: '7 + 3 + 2', bn: '৭ + ৩ + ২' },
          explanation: { en: 'Break 5 into 3 and 2 (easier!)', bn: '৫ কে ৩ এবং ২ তে ভাঙো (সহজ!)' }
        },
        {
          visual: { en: '10 + 2', bn: '১০ + ২' },
          explanation: { en: '7 + 3 makes 10', bn: '৭ + ৩ হলো ১০' }
        },
        {
          visual: { en: '12', bn: '১২' },
          explanation: { en: '10 + 2 = 12. Answer!', bn: '১০ + ২ = ১২। উত্তর!' }
        }
      ]
    }
  ],
  order: 1,
  estimatedMinutes: 20
};
```

## More Custom Component Ideas

### 1. Coin Counter (for money concepts)
```typescript
export interface CoinCounterBlock {
  type: 'coin-counter';
  availableCoins: Array<{
    value: number;
    label: LocalizedText;
    icon: string;
  }>;
  targetAmount: number;
  instruction: LocalizedText;
}
```

### 2. Shape Builder (for geometry)
```typescript
export interface ShapeBuilderBlock {
  type: 'shape-builder';
  availableShapes: Array<'circle' | 'square' | 'triangle' | 'rectangle'>;
  instruction: LocalizedText;
  showArea?: boolean;
  showPerimeter?: boolean;
}
```

### 3. Fraction Visualizer
```typescript
export interface FractionVisualizerBlock {
  type: 'fraction-visualizer';
  numerator: number;
  denominator: number;
  visualType: 'pie' | 'bar' | 'number-line';
  allowInteraction: boolean;
}
```

### 4. Pattern Matcher
```typescript
export interface PatternMatcherBlock {
  type: 'pattern-matcher';
  sequence: number[];
  missingIndices: number[];
  instruction: LocalizedText;
}
```

### 5. Clock Interactive (for time)
```typescript
export interface ClockInteractiveBlock {
  type: 'clock-interactive';
  showTime?: string; // "03:30"
  allowUserSet: boolean;
  instruction: LocalizedText;
}
```

### 6. Balance Scale (for equations)
```typescript
export interface BalanceScaleBlock {
  type: 'balance-scale';
  leftSide: number;
  rightSide: number;
  allowInteraction: boolean;
  instruction: LocalizedText;
}
```

## Best Practices

### 1. Make Components Interactive
- Allow students to manipulate and explore
- Provide immediate visual feedback
- Use animations for state changes
- Make it fun and engaging!

### 2. Maintain Bilingual Support
- Always use LocalizedText for all text content
- Support Bengali numerals when appropriate
- Test both languages thoroughly

### 3. Responsive Design
- Test on mobile and desktop
- Use Tailwind's responsive classes
- Ensure touch interactions work well

### 4. Accessibility
- Add proper ARIA labels
- Ensure keyboard navigation works
- Use sufficient color contrast
- Provide text alternatives for visual content

### 5. Performance
- Use React hooks efficiently (useState, useMemo, useCallback)
- Avoid unnecessary re-renders
- Lazy load heavy components if needed

### 6. Visual Consistency
- Use DaisyUI components and classes
- Follow the existing design system
- Maintain consistent spacing and sizing
- Use theme colors (primary, secondary, accent)

## Complete Example: Adding a Math Expression Builder

Here's a complete example from start to finish:

### 1. Add Type Definition
```typescript
// types/content.ts
export interface ExpressionBuilderBlock {
  type: 'expression-builder';
  numbers: number[];
  operators: Array<'+' | '-' | '×' | '÷'>;
  targetResult: number;
  instruction: LocalizedText;
  hints?: LocalizedText[];
}

export type LessonContentBlock =
  | TextBlock
  | ImageBlock
  | ExampleBlock
  | ExpressionBuilderBlock;
```

### 2. Create Component
```typescript
// components/learning/custom/ExpressionBuilderComponent.tsx
'use client';

import { useState } from 'react';
import { CheckCircle, XCircle, RotateCcw } from 'lucide-react';

interface ExpressionBuilderComponentProps {
  numbers: number[];
  operators: Array<'+' | '-' | '×' | '÷'>;
  targetResult: number;
  instruction: string;
  hints?: string[];
  language: 'en' | 'bn';
}

export function ExpressionBuilderComponent({
  numbers,
  operators,
  targetResult,
  instruction,
  hints = [],
  language,
}: ExpressionBuilderComponentProps) {
  const [expression, setExpression] = useState<Array<number | string>>([]);
  const [result, setResult] = useState<number | null>(null);
  const [showHint, setShowHint] = useState(false);

  const addToExpression = (item: number | string) => {
    setExpression([...expression, item]);
  };

  const removeLastItem = () => {
    setExpression(expression.slice(0, -1));
    setResult(null);
  };

  const calculate = () => {
    try {
      // Simple evaluation (in production, use a proper math parser)
      const exprString = expression.join(' ').replace('×', '*').replace('÷', '/');
      const calculated = eval(exprString);
      setResult(calculated);
    } catch {
      setResult(null);
    }
  };

  const reset = () => {
    setExpression([]);
    setResult(null);
    setShowHint(false);
  };

  const displayNumber = (num: number) => {
    if (language === 'bn') {
      const bengaliDigits = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];
      return num.toString().split('').map(d => bengaliDigits[parseInt(d)]).join('');
    }
    return num.toString();
  };

  const isCorrect = result === targetResult;

  return (
    <div className="card bg-gradient-to-br from-accent/10 to-primary/10 shadow-lg">
      <div className="card-body">
        <h4 className="text-center font-semibold text-lg">{instruction}</h4>

        <div className="text-center my-2">
          <span className="badge badge-lg badge-primary">
            {language === 'en' ? 'Target: ' : 'লক্ষ্য: '}
            {displayNumber(targetResult)}
          </span>
        </div>

        {/* Expression display */}
        <div className="bg-base-100 rounded-lg p-6 min-h-[80px] flex items-center justify-center text-3xl font-bold">
          {expression.length > 0 ? (
            <div className="flex gap-2 flex-wrap justify-center">
              {expression.map((item, idx) => (
                <span key={idx} className="text-primary">
                  {typeof item === 'number' ? displayNumber(item) : item}
                </span>
              ))}
            </div>
          ) : (
            <span className="text-base-content/30">
              {language === 'en' ? 'Build your expression...' : 'তোমার এক্সপ্রেশন তৈরি করো...'}
            </span>
          )}
        </div>

        {/* Result */}
        {result !== null && (
          <div className={`alert ${isCorrect ? 'alert-success' : 'alert-error'} animate-in fade-in`}>
            <div className="flex items-center gap-2">
              {isCorrect ? (
                <>
                  <CheckCircle className="w-5 h-5" />
                  <span>
                    {language === 'en'
                      ? `Correct! ${expression.join(' ')} = ${result}`
                      : `সঠিক! ${expression.join(' ')} = ${displayNumber(result)}`}
                  </span>
                </>
              ) : (
                <>
                  <XCircle className="w-5 h-5" />
                  <span>
                    {language === 'en'
                      ? `Not quite. Try again!`
                      : `ঠিক নয়। আবার চেষ্টা করো!`}
                  </span>
                </>
              )}
            </div>
          </div>
        )}

        {/* Number and operator buttons */}
        <div className="space-y-4">
          <div>
            <p className="text-sm text-base-content/60 mb-2">
              {language === 'en' ? 'Numbers:' : 'সংখ্যা:'}
            </p>
            <div className="flex gap-2 flex-wrap">
              {numbers.map((num, idx) => (
                <button
                  key={idx}
                  onClick={() => addToExpression(num)}
                  className="btn btn-primary btn-sm"
                >
                  {displayNumber(num)}
                </button>
              ))}
            </div>
          </div>

          <div>
            <p className="text-sm text-base-content/60 mb-2">
              {language === 'en' ? 'Operators:' : 'অপারেটর:'}
            </p>
            <div className="flex gap-2">
              {operators.map((op, idx) => (
                <button
                  key={idx}
                  onClick={() => addToExpression(op)}
                  className="btn btn-secondary btn-sm"
                >
                  {op}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Action buttons */}
        <div className="flex gap-2 mt-4">
          <button
            onClick={removeLastItem}
            disabled={expression.length === 0}
            className="btn btn-ghost btn-sm flex-1"
          >
            {language === 'en' ? 'Undo' : 'আনডু'}
          </button>

          <button
            onClick={calculate}
            disabled={expression.length === 0}
            className="btn btn-primary btn-sm flex-1"
          >
            {language === 'en' ? 'Calculate' : 'হিসাব করো'}
          </button>

          <button
            onClick={reset}
            className="btn btn-ghost btn-sm"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>

        {/* Hint */}
        {hints.length > 0 && (
          <div className="mt-4">
            {showHint ? (
              <div className="alert bg-info/10 border-info/30">
                <span className="text-sm">{hints[0]}</span>
              </div>
            ) : (
              <button
                onClick={() => setShowHint(true)}
                className="btn btn-ghost btn-sm w-full"
              >
                {language === 'en' ? '💡 Show Hint' : '💡 হিন্ট দেখাও'}
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
```

### 3. Add to LessonRenderer
```typescript
// components/learning/LessonRenderer.tsx
import { ExpressionBuilderComponent } from './custom/ExpressionBuilderComponent';

// In the switch statement:
case 'expression-builder':
  return (
    <ExpressionBuilderComponent
      key={index}
      numbers={block.numbers}
      operators={block.operators}
      targetResult={block.targetResult}
      instruction={block.instruction[language]}
      hints={block.hints?.map(h => h[language])}
      language={language}
    />
  );
```

### 4. Use in Content
```typescript
// content/topics/arithmetic/units/addition-basics.ts
content: [
  {
    type: 'text',
    format: 'heading',
    content: {
      en: 'Build Your Own Math Expression!',
      bn: 'তোমার নিজের গণিত এক্সপ্রেশন তৈরি করো!'
    }
  },
  {
    type: 'expression-builder',
    numbers: [2, 3, 5, 7],
    operators: ['+', '-'],
    targetResult: 10,
    instruction: {
      en: 'Use the numbers and operators to make 10',
      bn: 'সংখ্যা এবং অপারেটর ব্যবহার করে ১০ তৈরি করো'
    },
    hints: [
      {
        en: 'Try adding 3 and 7',
        bn: '৩ এবং ৭ যোগ করে দেখো'
      }
    ]
  }
]
```

## Testing Your Custom Components

1. **Unit Test the Component**:
```bash
npm test components/learning/custom/YourComponent.test.tsx
```

2. **Visual Test in Storybook** (if set up):
```bash
npm run storybook
```

3. **Test in Development**:
```bash
npm run dev
# Navigate to the lesson with your component
```

4. **Test Both Languages**: Toggle between English and Bangla

5. **Test Responsiveness**: Try on mobile and desktop viewports

6. **Test Interactions**: Click, drag, type - verify all interactions work

## Troubleshooting

**Component not rendering**:
- Check if type is added to `LessonContentBlock` union
- Verify case statement in LessonRenderer
- Check for TypeScript errors

**Bilingual issues**:
- Ensure all text uses LocalizedText type
- Test number display in both languages
- Verify fallback values

**Styling issues**:
- Use DaisyUI classes for consistency
- Check responsive classes (sm:, md:, lg:)
- Test in both light and dark themes

## Summary

Custom components make lessons interactive and engaging:

1. **Define** the content block type in `types/content.ts`
2. **Create** the React component in `components/learning/custom/`
3. **Register** in `LessonRenderer.tsx`
4. **Use** in lesson content files

With custom components, you can create:
- Interactive visualizations
- Games and activities
- Step-by-step animations
- Personalized learning experiences
- Unique engaging content

Get creative and build amazing learning experiences!
