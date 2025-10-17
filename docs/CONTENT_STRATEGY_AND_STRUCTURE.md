# Content Strategy & File-Based Architecture

## Philosophy: File-Based Content + Database Progress

**Content (Static)** → TypeScript/JSON files (version controlled, fast, cacheable)
**Interactions (Dynamic)** → Supabase database (user progress, analytics, personalization)

This approach provides:
- ✅ Fast content delivery (no DB queries for problems)
- ✅ Easy version control (Git tracks content changes)
- ✅ Type safety (TypeScript interfaces)
- ✅ Quick iteration (no migration scripts for content updates)
- ✅ Scalable (CDN-ready, static generation)
- ✅ Offline capable (content can be bundled)

---

## 1. Content Hierarchy & Organization

### 1.1 Learning Structure

```
Curriculum
  └── Subject (Math)
      └── Level (Grade 1-10)
          └── Topic (Addition, Fractions, Algebra)
              └── Unit (Basic Addition, 2-Digit Addition)
                  └── Lesson (Theory + Examples)
                      └── Problem Set (Practice problems)
                          └── Problem (Individual question)
```

### 1.2 File Structure

```
content/
├── index.ts                    # Central export for all content
├── curriculum.ts               # Overall curriculum structure
│
├── levels/
│   ├── level-1-grade-1-2.ts   # Age 6-8
│   ├── level-2-grade-3-5.ts   # Age 9-11
│   ├── level-3-grade-6-8.ts   # Age 12-14
│   └── level-4-grade-9-10.ts  # Age 15+
│
├── topics/
│   ├── arithmetic/
│   │   ├── index.ts
│   │   ├── addition.ts
│   │   ├── subtraction.ts
│   │   ├── multiplication.ts
│   │   └── division.ts
│   │
│   ├── fractions/
│   │   ├── index.ts
│   │   ├── introduction.ts
│   │   ├── operations.ts
│   │   └── word-problems.ts
│   │
│   ├── geometry/
│   │   ├── index.ts
│   │   ├── shapes.ts
│   │   ├── perimeter.ts
│   │   └── area.ts
│   │
│   └── algebra/
│       ├── index.ts
│       ├── variables.ts
│       └── equations.ts
│
├── problems/
│   ├── types/              # Problem type definitions
│   │   ├── mcq.ts
│   │   ├── fill-blank.ts
│   │   ├── number-input.ts
│   │   ├── drag-drop.ts
│   │   ├── step-by-step.ts
│   │   ├── drawing.ts
│   │   └── matching.ts
│   │
│   ├── sets/               # Organized problem collections
│   │   ├── addition-set-1.ts
│   │   ├── addition-set-2.ts
│   │   └── fractions-set-1.ts
│   │
│   └── generators/         # Dynamic problem generation
│       ├── arithmetic-generator.ts
│       └── algebra-generator.ts
│
├── lessons/
│   ├── addition/
│   │   ├── 01-intro-to-addition.ts
│   │   ├── 02-single-digit-addition.ts
│   │   └── 03-double-digit-addition.ts
│   │
│   └── fractions/
│       └── 01-what-are-fractions.ts
│
├── assets/                 # Content-related media
│   ├── images/
│   │   ├── geometry/
│   │   └── number-line/
│   ├── animations/
│   │   └── lottie/
│   └── videos/
│       └── explainers/
│
└── utils/
    ├── validators.ts       # Answer validation functions
    ├── formatters.ts       # Content formatting utilities
    └── localization.ts     # Bangla/English text helpers
```

---

## 2. Type Definitions

### 2.1 Core Content Types

```typescript
// types/content.ts

export type Difficulty = 1 | 2 | 3 | 4 | 5; // 1=easiest, 5=hardest

export type ContentLanguage = 'en' | 'bn';

export interface LocalizedText {
  en: string;
  bn: string;
}

export interface ContentMetadata {
  id: string;
  slug: string;
  version: string; // For content versioning
  createdAt: string;
  updatedAt: string;
  authors: string[];
  reviewers?: string[];
}

// Curriculum Structure
export interface Level {
  id: string;
  name: LocalizedText;
  description: LocalizedText;
  gradeRange: [number, number]; // [1, 2] for grades 1-2
  ageRange: [number, number];   // [6, 8] for ages 6-8
  topics: Topic[];
  order: number;
}

export interface Topic {
  id: string;
  name: LocalizedText;
  description: LocalizedText;
  icon: string; // Lucide icon name
  color: string; // Theme color
  prerequisites: string[]; // Topic IDs
  units: Unit[];
  order: number;
  estimatedHours: number;
}

export interface Unit {
  id: string;
  topicId: string;
  name: LocalizedText;
  description: LocalizedText;
  order: number;
  lessons: Lesson[];
  problemSets: ProblemSet[];
  quiz?: Quiz;
}

export interface Lesson {
  id: string;
  unitId: string;
  title: LocalizedText;
  content: LessonContent[];
  order: number;
  estimatedMinutes: number;
}

export type LessonContentBlock =
  | TextBlock
  | ImageBlock
  | VideoBlock
  | AnimationBlock
  | InteractiveBlock
  | ExampleBlock;

export interface TextBlock {
  type: 'text';
  content: LocalizedText;
  format?: 'paragraph' | 'heading' | 'callout' | 'quote';
}

export interface ImageBlock {
  type: 'image';
  src: string;
  alt: LocalizedText;
  caption?: LocalizedText;
  width?: number;
  height?: number;
}

export interface VideoBlock {
  type: 'video';
  src: string;
  thumbnail: string;
  duration: number;
  transcript?: LocalizedText;
}

export interface AnimationBlock {
  type: 'animation';
  animationType: 'lottie' | 'svg' | 'canvas';
  src: string;
  config?: Record<string, any>;
}

export interface InteractiveBlock {
  type: 'interactive';
  component: string; // Component name to render
  props: Record<string, any>;
}

export interface ExampleBlock {
  type: 'example';
  title: LocalizedText;
  problem: LocalizedText;
  solution: LocalizedText;
  steps?: Array<{
    step: number;
    description: LocalizedText;
    visual?: string;
  }>;
}

export type LessonContent = LessonContentBlock[];

// Problem Types
export interface ProblemSet {
  id: string;
  unitId: string;
  name: LocalizedText;
  description: LocalizedText;
  problems: Problem[];
  order: number;
  minScoreToPass: number; // 0-100
}

export interface Quiz extends ProblemSet {
  timeLimit?: number; // seconds
  randomize: boolean;
  showAnswersAfter: boolean;
}

export type ProblemType =
  | 'mcq'
  | 'multi-select'
  | 'fill-blank'
  | 'number-input'
  | 'drag-drop'
  | 'step-by-step'
  | 'drawing'
  | 'matching'
  | 'sorting'
  | 'true-false';

export interface BaseProblem {
  id: string;
  type: ProblemType;
  difficulty: Difficulty;
  question: LocalizedText;
  explanation: LocalizedText;
  hints: Array<{
    level: number; // 1=subtle, 2=moderate, 3=direct
    text: LocalizedText;
  }>;
  tags: string[];
  estimatedTime: number; // seconds
  points: number;
  metadata?: ContentMetadata;
}

export interface MCQProblem extends BaseProblem {
  type: 'mcq';
  options: Array<{
    id: string;
    text: LocalizedText;
    isCorrect: boolean;
  }>;
  feedback?: {
    correct: LocalizedText;
    incorrect: Record<string, LocalizedText>; // optionId -> feedback
  };
}

export interface MultiSelectProblem extends BaseProblem {
  type: 'multi-select';
  options: Array<{
    id: string;
    text: LocalizedText;
    isCorrect: boolean;
  }>;
  minSelections: number;
  maxSelections: number;
}

export interface FillBlankProblem extends BaseProblem {
  type: 'fill-blank';
  template: LocalizedText; // "5 + 3 = __BLANK__"
  blanks: Array<{
    id: string;
    correctAnswers: string[]; // Multiple acceptable answers
    caseSensitive: boolean;
    allowPartialCredit: boolean;
  }>;
}

export interface NumberInputProblem extends BaseProblem {
  type: 'number-input';
  correctAnswer: number;
  tolerance?: number; // Allow ±tolerance
  unit?: LocalizedText; // "cm", "kg", etc.
  acceptEquivalent?: boolean; // Accept fractions/decimals equivalents
}

export interface DragDropProblem extends BaseProblem {
  type: 'drag-drop';
  draggables: Array<{
    id: string;
    content: LocalizedText | { type: 'image'; src: string };
  }>;
  dropZones: Array<{
    id: string;
    label: LocalizedText;
    accepts: string[]; // draggable IDs
  }>;
  solution: Record<string, string>; // dropZoneId -> draggableId
  allowMultiple?: boolean; // Multiple items per zone
}

export interface StepByStepProblem extends BaseProblem {
  type: 'step-by-step';
  steps: Array<{
    order: number;
    instruction: LocalizedText;
    answer: string | number;
    validation: (input: any) => boolean;
    feedback: {
      correct: LocalizedText;
      incorrect: LocalizedText;
    };
  }>;
  allowSkip: boolean;
  showPreviousSteps: boolean;
}

export interface DrawingProblem extends BaseProblem {
  type: 'drawing';
  canvas: {
    width: number;
    height: number;
    background?: string;
  };
  tools: Array<'pen' | 'line' | 'circle' | 'rectangle' | 'eraser'>;
  validation: 'manual' | 'pattern-match'; // Manual = teacher reviews
  expectedPattern?: string; // For auto-validation
}

export interface MatchingProblem extends BaseProblem {
  type: 'matching';
  leftColumn: Array<{
    id: string;
    content: LocalizedText;
  }>;
  rightColumn: Array<{
    id: string;
    content: LocalizedText;
  }>;
  correctMatches: Record<string, string>; // leftId -> rightId
}

export interface SortingProblem extends BaseProblem {
  type: 'sorting';
  items: Array<{
    id: string;
    content: LocalizedText;
  }>;
  correctOrder: string[]; // Array of item IDs in correct sequence
  sortCriteria: LocalizedText; // "smallest to largest", etc.
}

export interface TrueFalseProblem extends BaseProblem {
  type: 'true-false';
  statement: LocalizedText;
  correctAnswer: boolean;
}

export type Problem =
  | MCQProblem
  | MultiSelectProblem
  | FillBlankProblem
  | NumberInputProblem
  | DragDropProblem
  | StepByStepProblem
  | DrawingProblem
  | MatchingProblem
  | SortingProblem
  | TrueFalseProblem;
```

---

## 3. Example Content Files

### 3.1 Topic Definition

```typescript
// content/topics/arithmetic/addition.ts

import { Topic, Unit } from '@/types/content';
import { additionUnit1 } from './units/addition-basics';
import { additionUnit2 } from './units/two-digit-addition';

export const additionTopic: Topic = {
  id: 'topic_addition',
  name: {
    en: 'Addition',
    bn: 'যোগ',
  },
  description: {
    en: 'Learn to add numbers together',
    bn: 'সংখ্যা একসাথে যোগ করতে শিখুন',
  },
  icon: 'Plus',
  color: 'blue',
  prerequisites: [],
  units: [additionUnit1, additionUnit2],
  order: 1,
  estimatedHours: 4,
};
```

### 3.2 Unit with Lesson

```typescript
// content/topics/arithmetic/units/addition-basics.ts

import { Unit, Lesson } from '@/types/content';
import { additionProblemSet1 } from '@/content/problems/sets/addition-set-1';

const introLesson: Lesson = {
  id: 'lesson_addition_intro',
  unitId: 'unit_addition_basics',
  title: {
    en: 'What is Addition?',
    bn: 'যোগ কি?',
  },
  content: [
    {
      type: 'text',
      content: {
        en: 'Addition is when we put numbers together to make a bigger number.',
        bn: 'যোগ হল যখন আমরা সংখ্যাগুলিকে একত্রিত করে একটি বড় সংখ্যা তৈরি করি।',
      },
      format: 'heading',
    },
    {
      type: 'image',
      src: '/content/assets/images/addition/intro-apples.png',
      alt: {
        en: 'Two apples plus three apples equals five apples',
        bn: 'দুটি সেব যোগ তিনটি সেব সমান পাঁচটি সেব',
      },
      caption: {
        en: '2 + 3 = 5',
        bn: '২ + ৩ = ৫',
      },
    },
    {
      type: 'text',
      content: {
        en: 'We use the plus sign (+) to show addition.',
        bn: 'যোগ দেখাতে আমরা যোগ চিহ্ন (+) ব্যবহার করি।',
      },
    },
    {
      type: 'interactive',
      component: 'NumberLineAddition',
      props: {
        equation: { a: 2, b: 3 },
        showAnimation: true,
      },
    },
    {
      type: 'example',
      title: {
        en: 'Example 1',
        bn: 'উদাহরণ ১',
      },
      problem: {
        en: 'If you have 4 candies and your friend gives you 2 more, how many candies do you have?',
        bn: 'যদি তোমার ৪টি মিঠাই থাকে এবং তোমার বন্ধু তোমাকে আরও ২টি দেয়, তাহলে তোমার কতটি মিঠাই আছে?',
      },
      solution: {
        en: '4 + 2 = 6 candies',
        bn: '৪ + ২ = ৬টি মিঠাই',
      },
      steps: [
        {
          step: 1,
          description: {
            en: 'Start with 4 candies',
            bn: '৪টি মিঠাই দিয়ে শুরু করুন',
          },
          visual: '/content/assets/images/addition/candies-step1.svg',
        },
        {
          step: 2,
          description: {
            en: 'Add 2 more candies',
            bn: 'আরও ২টি মিঠাই যোগ করুন',
          },
          visual: '/content/assets/images/addition/candies-step2.svg',
        },
        {
          step: 3,
          description: {
            en: 'Count all candies: 1, 2, 3, 4, 5, 6',
            bn: 'সব মিঠাই গুনুন: ১, ২, ৩, ৪, ৫, ৬',
          },
          visual: '/content/assets/images/addition/candies-step3.svg',
        },
      ],
    },
  ],
  order: 1,
  estimatedMinutes: 10,
};

export const additionUnit1: Unit = {
  id: 'unit_addition_basics',
  topicId: 'topic_addition',
  name: {
    en: 'Addition Basics',
    bn: 'যোগের মূল বিষয়',
  },
  description: {
    en: 'Learn to add single-digit numbers',
    bn: 'এক-সংখ্যার সংখ্যা যোগ করতে শিখুন',
  },
  order: 1,
  lessons: [introLesson],
  problemSets: [additionProblemSet1],
};
```

### 3.3 Problem Set Examples

```typescript
// content/problems/sets/addition-set-1.ts

import { ProblemSet, MCQProblem, NumberInputProblem, DragDropProblem } from '@/types/content';

const problem1: MCQProblem = {
  id: 'prob_add_001',
  type: 'mcq',
  difficulty: 1,
  question: {
    en: 'What is 2 + 3?',
    bn: '২ + ৩ = ?',
  },
  options: [
    {
      id: 'opt_a',
      text: { en: '4', bn: '৪' },
      isCorrect: false,
    },
    {
      id: 'opt_b',
      text: { en: '5', bn: '৫' },
      isCorrect: true,
    },
    {
      id: 'opt_c',
      text: { en: '6', bn: '৬' },
      isCorrect: false,
    },
    {
      id: 'opt_d',
      text: { en: '7', bn: '৭' },
      isCorrect: false,
    },
  ],
  explanation: {
    en: 'When you add 2 and 3, you get 5. Try counting on your fingers!',
    bn: 'যখন আপনি ২ এবং ৩ যোগ করেন, আপনি ৫ পান। আপনার আঙুলে গণনা করার চেষ্টা করুন!',
  },
  hints: [
    {
      level: 1,
      text: {
        en: 'Try using your fingers to count.',
        bn: 'গণনা করতে আপনার আঙুল ব্যবহার করার চেষ্টা করুন।',
      },
    },
    {
      level: 2,
      text: {
        en: 'Start at 2, then count up 3 more: 3, 4, 5',
        bn: '২ থেকে শুরু করুন, তারপর আরও ৩টি গুনুন: ৩, ৪, ৫',
      },
    },
  ],
  feedback: {
    correct: {
      en: 'Perfect! 2 + 3 = 5',
      bn: 'চমৎকার! ২ + ৩ = ৫',
    },
    incorrect: {
      opt_a: {
        en: 'Not quite. Did you subtract instead of add?',
        bn: 'ঠিক না। আপনি কি যোগ করার পরিবর্তে বিয়োগ করেছেন?',
      },
      opt_c: {
        en: 'Close! You added one too many.',
        bn: 'কাছাকাছি! আপনি একটি অতিরিক্ত যোগ করেছেন।',
      },
      opt_d: {
        en: 'That\'s too high. Try counting again carefully.',
        bn: 'এটা খুব বেশি। আবার সাবধানে গণনা করার চেষ্টা করুন।',
      },
    },
  },
  tags: ['single-digit', 'basic-addition'],
  estimatedTime: 30,
  points: 10,
};

const problem2: NumberInputProblem = {
  id: 'prob_add_002',
  type: 'number-input',
  difficulty: 1,
  question: {
    en: 'Calculate: 4 + 5 = ?',
    bn: 'হিসাব করুন: ৪ + ৫ = ?',
  },
  correctAnswer: 9,
  explanation: {
    en: '4 plus 5 equals 9',
    bn: '৪ যোগ ৫ সমান ৯',
  },
  hints: [
    {
      level: 1,
      text: {
        en: 'Think about counting upwards from 4.',
        bn: '৪ থেকে উপরের দিকে গণনা করার কথা ভাবুন।',
      },
    },
  ],
  tags: ['single-digit', 'basic-addition'],
  estimatedTime: 30,
  points: 10,
};

const problem3: DragDropProblem = {
  id: 'prob_add_003',
  type: 'drag-drop',
  difficulty: 2,
  question: {
    en: 'Match each addition problem with its answer',
    bn: 'প্রতিটি যোগ সমস্যাকে তার উত্তরের সাথে মেলান',
  },
  draggables: [
    { id: 'drag_1', content: { en: '1 + 1', bn: '১ + ১' } },
    { id: 'drag_2', content: { en: '2 + 2', bn: '২ + ২' } },
    { id: 'drag_3', content: { en: '3 + 3', bn: '৩ + ৩' } },
  ],
  dropZones: [
    { id: 'drop_2', label: { en: '2', bn: '২' }, accepts: ['drag_1'] },
    { id: 'drop_4', label: { en: '4', bn: '৪' }, accepts: ['drag_2'] },
    { id: 'drop_6', label: { en: '6', bn: '৬' }, accepts: ['drag_3'] },
  ],
  solution: {
    drop_2: 'drag_1',
    drop_4: 'drag_2',
    drop_6: 'drag_3',
  },
  explanation: {
    en: 'Great job matching! 1+1=2, 2+2=4, 3+3=6',
    bn: 'মিলানো দুর্দান্ত! ১+১=২, ২+২=৪, ৩+৩=৬',
  },
  hints: [
    {
      level: 1,
      text: {
        en: 'Try the smallest numbers first.',
        bn: 'প্রথমে ছোট সংখ্যাগুলি চেষ্টা করুন।',
      },
    },
  ],
  tags: ['matching', 'doubles'],
  estimatedTime: 60,
  points: 15,
};

export const additionProblemSet1: ProblemSet = {
  id: 'set_addition_1',
  unitId: 'unit_addition_basics',
  name: {
    en: 'Practice: Basic Addition',
    bn: 'অনুশীলন: মৌলিক যোগ',
  },
  description: {
    en: 'Practice adding single-digit numbers',
    bn: 'এক-সংখ্যার সংখ্যা যোগ করার অনুশীলন করুন',
  },
  problems: [problem1, problem2, problem3],
  order: 1,
  minScoreToPass: 70,
};
```

### 3.4 Problem Generator (Advanced)

```typescript
// content/problems/generators/arithmetic-generator.ts

import { NumberInputProblem } from '@/types/content';

export class ArithmeticProblemGenerator {
  /**
   * Generates random addition problems
   */
  static generateAddition(
    difficulty: 1 | 2 | 3,
    count: number
  ): NumberInputProblem[] {
    const problems: NumberInputProblem[] = [];

    const ranges = {
      1: { min: 1, max: 10 },
      2: { min: 10, max: 50 },
      3: { min: 50, max: 100 },
    };

    const range = ranges[difficulty];

    for (let i = 0; i < count; i++) {
      const a = this.randomInt(range.min, range.max);
      const b = this.randomInt(range.min, range.max);
      const answer = a + b;

      problems.push({
        id: `gen_add_${difficulty}_${Date.now()}_${i}`,
        type: 'number-input',
        difficulty,
        question: {
          en: `Calculate: ${a} + ${b} = ?`,
          bn: `হিসাব করুন: ${this.toBengaliNumber(a)} + ${this.toBengaliNumber(b)} = ?`,
        },
        correctAnswer: answer,
        explanation: {
          en: `${a} plus ${b} equals ${answer}`,
          bn: `${this.toBengaliNumber(a)} যোগ ${this.toBengaliNumber(b)} সমান ${this.toBengaliNumber(answer)}`,
        },
        hints: [
          {
            level: 1,
            text: {
              en: difficulty > 1 ? 'Try breaking it into smaller parts' : 'Use your fingers or a number line',
              bn: difficulty > 1 ? 'এটিকে ছোট অংশে ভাগ করার চেষ্টা করুন' : 'আপনার আঙুল বা সংখ্যা রেখা ব্যবহার করুন',
            },
          },
        ],
        tags: ['generated', 'addition'],
        estimatedTime: 30 + difficulty * 15,
        points: 10 + difficulty * 5,
      });
    }

    return problems;
  }

  private static randomInt(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  private static toBengaliNumber(num: number): string {
    const bengaliDigits = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];
    return num
      .toString()
      .split('')
      .map((d) => bengaliDigits[parseInt(d)])
      .join('');
  }
}
```

---

## 4. Component Architecture

### 4.1 Problem Renderer Components

```typescript
// components/problems/ProblemRenderer.tsx
'use client';

import { Problem } from '@/types/content';
import { MCQProblemComponent } from './types/MCQProblem';
import { NumberInputProblemComponent } from './types/NumberInputProblem';
import { DragDropProblemComponent } from './types/DragDropProblem';
import { StepByStepProblemComponent } from './types/StepByStepProblem';
// ... import other problem types

interface ProblemRendererProps {
  problem: Problem;
  language: 'en' | 'bn';
  onSubmit: (answer: any) => void;
  onHintRequest: (level: number) => void;
  showExplanation?: boolean;
  isCorrect?: boolean;
}

export function ProblemRenderer({
  problem,
  language,
  onSubmit,
  onHintRequest,
  showExplanation,
  isCorrect,
}: ProblemRendererProps) {
  const renderProblem = () => {
    switch (problem.type) {
      case 'mcq':
        return (
          <MCQProblemComponent
            problem={problem}
            language={language}
            onSubmit={onSubmit}
          />
        );

      case 'number-input':
        return (
          <NumberInputProblemComponent
            problem={problem}
            language={language}
            onSubmit={onSubmit}
          />
        );

      case 'drag-drop':
        return (
          <DragDropProblemComponent
            problem={problem}
            language={language}
            onSubmit={onSubmit}
          />
        );

      case 'step-by-step':
        return (
          <StepByStepProblemComponent
            problem={problem}
            language={language}
            onSubmit={onSubmit}
          />
        );

      // ... other problem types

      default:
        return <div>Unsupported problem type</div>;
    }
  };

  return (
    <div className="problem-container">
      {/* Problem Header */}
      <div className="flex justify-between items-start mb-4">
        <div className="flex items-center gap-2">
          <DifficultyBadge level={problem.difficulty} />
          <PointsBadge points={problem.points} />
        </div>
        <HintButton
          hints={problem.hints}
          language={language}
          onRequest={onHintRequest}
        />
      </div>

      {/* Question */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">
          {problem.question[language]}
        </h3>
      </div>

      {/* Problem-specific component */}
      {renderProblem()}

      {/* Explanation (shown after submission) */}
      {showExplanation && (
        <ExplanationCard
          explanation={problem.explanation[language]}
          isCorrect={isCorrect}
        />
      )}
    </div>
  );
}
```

### 4.2 Example Problem Type Component

```typescript
// components/problems/types/MCQProblem.tsx
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
        {language === 'en' ? 'Submit Answer' : 'উত্তর জমা দিন'}
      </button>
    </div>
  );
}
```

```typescript
// components/problems/types/NumberInputProblem.tsx
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
  problem,
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
          placeholder={language === 'en' ? 'Enter your answer' : 'আপনার উত্তর লিখুন'}
          className="input input-bordered flex-1 text-xl text-center"
          autoFocus
        />
        {problem.unit && (
          <span className="flex items-center px-3 bg-base-200 rounded-lg">
            {problem.unit[language]}
          </span>
        )}
      </div>

      <button
        onClick={handleSubmit}
        disabled={!answer || disabled}
        className="btn btn-primary w-full"
      >
        {language === 'en' ? 'Submit Answer' : 'উত্তর জমা দিন'}
      </button>
    </div>
  );
}
```

```typescript
// components/problems/types/DragDropProblem.tsx
'use client';

import { useState } from 'react';
import { DndContext, DragEndEvent, useDraggable, useDroppable } from '@dnd-kit/core';
import { DragDropProblem } from '@/types/content';

interface DragDropProblemComponentProps {
  problem: DragDropProblem;
  language: 'en' | 'bn';
  onSubmit: (answer: Record<string, string>) => void;
  disabled?: boolean;
}

export function DragDropProblemComponent({
  problem,
  language,
  onSubmit,
  disabled = false,
}: DragDropProblemComponentProps) {
  const [assignments, setAssignments] = useState<Record<string, string>>({});

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (over) {
      setAssignments((prev) => ({
        ...prev,
        [over.id as string]: active.id as string,
      }));
    }
  };

  const handleSubmit = () => {
    onSubmit(assignments);
  };

  const isComplete = problem.dropZones.every(zone => assignments[zone.id]);

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <div className="space-y-6">
        {/* Draggables Pool */}
        <div className="p-4 bg-base-200 rounded-lg">
          <h4 className="font-semibold mb-3">
            {language === 'en' ? 'Drag these items:' : 'এই আইটেমগুলি টানুন:'}
          </h4>
          <div className="flex flex-wrap gap-2">
            {problem.draggables.map((draggable) => (
              <DraggableItem
                key={draggable.id}
                id={draggable.id}
                content={
                  typeof draggable.content === 'string'
                    ? draggable.content[language]
                    : draggable.content
                }
                disabled={disabled}
              />
            ))}
          </div>
        </div>

        {/* Drop Zones */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {problem.dropZones.map((zone) => (
            <DroppableZone
              key={zone.id}
              id={zone.id}
              label={zone.label[language]}
              assignedId={assignments[zone.id]}
              disabled={disabled}
            />
          ))}
        </div>

        <button
          onClick={handleSubmit}
          disabled={!isComplete || disabled}
          className="btn btn-primary w-full"
        >
          {language === 'en' ? 'Check Answer' : 'উত্তর পরীক্ষা করুন'}
        </button>
      </div>
    </DndContext>
  );
}

function DraggableItem({ id, content, disabled }: any) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id,
    disabled,
  });

  const style = transform
    ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
      }
    : undefined;

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
      className="px-4 py-2 bg-white border-2 border-primary rounded-lg cursor-move"
    >
      {typeof content === 'string' ? content : <img src={content.src} alt="" />}
    </div>
  );
}

function DroppableZone({ id, label, assignedId, disabled }: any) {
  const { setNodeRef } = useDroppable({ id, disabled });

  return (
    <div
      ref={setNodeRef}
      className="min-h-[100px] p-4 border-2 border-dashed border-base-300 rounded-lg"
    >
      <div className="font-semibold mb-2">{label}</div>
      {assignedId && (
        <div className="px-4 py-2 bg-primary/10 border-2 border-primary rounded-lg">
          {assignedId}
        </div>
      )}
    </div>
  );
}
```

### 4.3 Supporting Components

```typescript
// components/problems/shared/HintButton.tsx
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
        <div className="absolute top-full right-0 mt-2 p-4 bg-yellow-50 border-2 border-yellow-200 rounded-lg shadow-lg w-64 z-10">
          <button
            onClick={() => setShowHint(false)}
            className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
          >
            ×
          </button>
          <p className="text-sm">{currentHint.text[language]}</p>
        </div>
      )}
    </div>
  );
}
```

```typescript
// components/problems/shared/DifficultyBadge.tsx

interface DifficultyBadgeProps {
  level: 1 | 2 | 3 | 4 | 5;
}

export function DifficultyBadge({ level }: DifficultyBadgeProps) {
  const colors = {
    1: 'badge-success',
    2: 'badge-info',
    3: 'badge-warning',
    4: 'badge-error',
    5: 'badge-error',
  };

  const labels = {
    1: 'Easy',
    2: 'Medium',
    3: 'Hard',
    4: 'Very Hard',
    5: 'Expert',
  };

  return (
    <span className={`badge ${colors[level]}`}>
      {labels[level]}
    </span>
  );
}
```

```typescript
// components/problems/shared/ExplanationCard.tsx

interface ExplanationCardProps {
  explanation: string;
  isCorrect?: boolean;
}

export function ExplanationCard({ explanation, isCorrect }: ExplanationCardProps) {
  return (
    <div
      className={`mt-6 p-4 rounded-lg border-2 ${
        isCorrect
          ? 'bg-success/10 border-success'
          : 'bg-error/10 border-error'
      }`}
    >
      <h4 className="font-semibold mb-2">
        {isCorrect ? '✅ Correct!' : '❌ Not quite'}
      </h4>
      <p>{explanation}</p>
    </div>
  );
}
```

---

## 5. Database Integration for Progress Tracking

### 5.1 Progress Tracking Service

```typescript
// lib/services/progress-tracker.ts

import { createClient } from '@/lib/supabase/server';
import { Problem } from '@/types/content';

export interface ProblemAttempt {
  userId: string;
  problemId: string;
  answer: any;
  isCorrect: boolean;
  hintsUsed: number;
  timeSpent: number; // seconds
}

export interface ProgressUpdate {
  isCorrect: boolean;
  newMasteryLevel: number;
  pointsEarned: number;
  streakUpdated: boolean;
  achievementsUnlocked: string[];
}

export class ProgressTracker {
  /**
   * Records a problem attempt and updates progress
   */
  static async recordAttempt(
    attempt: ProblemAttempt,
    problem: Problem
  ): Promise<ProgressUpdate> {
    const supabase = createClient();

    // 1. Insert attempt record
    const { error: attemptError } = await supabase
      .from('problem_attempts')
      .insert({
        user_id: attempt.userId,
        problem_id: attempt.problemId,
        answer: attempt.answer,
        is_correct: attempt.isCorrect,
        hints_used: attempt.hintsUsed,
        time_taken: attempt.timeSpent,
        attempted_at: new Date().toISOString(),
      });

    if (attemptError) throw attemptError;

    // 2. Calculate points (reduce for hints)
    const pointsEarned = attempt.isCorrect
      ? problem.points - attempt.hintsUsed * 2
      : 0;

    // 3. Update user progress for the unit
    const newMasteryLevel = await this.calculateMasteryLevel(
      attempt.userId,
      problem.id
    );

    // 4. Check and update streaks
    const streakUpdated = await this.updateStreak(attempt.userId);

    // 5. Check for new achievements
    const achievementsUnlocked = await this.checkAchievements(attempt.userId);

    return {
      isCorrect: attempt.isCorrect,
      newMasteryLevel,
      pointsEarned,
      streakUpdated,
      achievementsUnlocked,
    };
  }

  /**
   * Calculates mastery level for a problem (0-100)
   */
  private static async calculateMasteryLevel(
    userId: string,
    problemId: string
  ): Promise<number> {
    const supabase = createClient();

    // Get last 5 attempts for this problem
    const { data: attempts } = await supabase
      .from('problem_attempts')
      .select('is_correct, time_taken, hints_used')
      .eq('user_id', userId)
      .eq('problem_id', problemId)
      .order('attempted_at', { ascending: false })
      .limit(5);

    if (!attempts || attempts.length === 0) return 0;

    // Calculate mastery based on:
    // - Correctness (70% weight)
    // - Speed (15% weight)
    // - Independence/no hints (15% weight)

    const correctnessScore =
      (attempts.filter((a) => a.is_correct).length / attempts.length) * 70;

    const avgTime =
      attempts.reduce((sum, a) => sum + a.time_taken, 0) / attempts.length;
    const speedScore = Math.max(0, 15 - avgTime / 10); // Faster = higher score

    const avgHints =
      attempts.reduce((sum, a) => sum + a.hints_used, 0) / attempts.length;
    const independenceScore = Math.max(0, 15 - avgHints * 5);

    return Math.round(correctnessScore + speedScore + independenceScore);
  }

  /**
   * Updates user's daily streak
   */
  private static async updateStreak(userId: string): Promise<boolean> {
    const supabase = createClient();

    // Get user's last activity date
    const { data: profile } = await supabase
      .from('profiles')
      .select('last_activity_date, current_streak')
      .eq('id', userId)
      .single();

    if (!profile) return false;

    const today = new Date().toISOString().split('T')[0];
    const lastActivity = profile.last_activity_date;

    if (lastActivity === today) {
      // Already counted today
      return false;
    }

    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    const yesterdayStr = yesterday.toISOString().split('T')[0];

    const newStreak =
      lastActivity === yesterdayStr ? profile.current_streak + 1 : 1;

    await supabase
      .from('profiles')
      .update({
        last_activity_date: today,
        current_streak: newStreak,
        longest_streak: Math.max(newStreak, profile.longest_streak || 0),
      })
      .eq('id', userId);

    return true;
  }

  /**
   * Checks and unlocks new achievements
   */
  private static async checkAchievements(
    userId: string
  ): Promise<string[]> {
    const supabase = createClient();
    const unlocked: string[] = [];

    // Get user stats
    const { data: stats } = await supabase.rpc('get_user_stats', {
      p_user_id: userId,
    });

    // Define achievement conditions
    const achievementChecks = [
      {
        id: 'first_problem',
        condition: stats.total_problems >= 1,
      },
      {
        id: 'ten_problems',
        condition: stats.total_problems >= 10,
      },
      {
        id: 'perfect_score',
        condition: stats.recent_accuracy >= 100,
      },
      {
        id: 'week_streak',
        condition: stats.current_streak >= 7,
      },
      // ... more achievements
    ];

    for (const check of achievementChecks) {
      if (check.condition) {
        // Check if already unlocked
        const { data: existing } = await supabase
          .from('user_achievements')
          .select('achievement_id')
          .eq('user_id', userId)
          .eq('achievement_id', check.id)
          .single();

        if (!existing) {
          // Unlock achievement
          await supabase.from('user_achievements').insert({
            user_id: userId,
            achievement_id: check.id,
            unlocked_at: new Date().toISOString(),
          });

          unlocked.push(check.id);
        }
      }
    }

    return unlocked;
  }

  /**
   * Gets comprehensive user progress
   */
  static async getUserProgress(userId: string) {
    const supabase = createClient();

    const { data, error } = await supabase.rpc('get_user_progress_detailed', {
      p_user_id: userId,
    });

    return data;
  }
}
```

### 5.2 Content Loader Service

```typescript
// lib/services/content-loader.ts

import { Topic, Problem, ProblemSet } from '@/types/content';
import { additionTopic } from '@/content/topics/arithmetic/addition';
// ... import other topics

export class ContentLoader {
  private static topics: Topic[] = [
    additionTopic,
    // ... more topics
  ];

  /**
   * Get all available topics
   */
  static getAllTopics(): Topic[] {
    return this.topics;
  }

  /**
   * Get topic by ID
   */
  static getTopicById(topicId: string): Topic | undefined {
    return this.topics.find((t) => t.id === topicId);
  }

  /**
   * Get unit by ID
   */
  static getUnitById(unitId: string) {
    for (const topic of this.topics) {
      const unit = topic.units.find((u) => u.id === unitId);
      if (unit) return { topic, unit };
    }
    return null;
  }

  /**
   * Get problem by ID
   */
  static getProblemById(problemId: string): Problem | undefined {
    for (const topic of this.topics) {
      for (const unit of topic.units) {
        for (const problemSet of unit.problemSets) {
          const problem = problemSet.problems.find((p) => p.id === problemId);
          if (problem) return problem;
        }
      }
    }
    return undefined;
  }

  /**
   * Get next recommended problems for a user
   */
  static async getRecommendedProblems(
    userId: string,
    count: number = 5
  ): Promise<Problem[]> {
    // This would use progress data to recommend appropriate problems
    // For now, return first problems from each topic
    const problems: Problem[] = [];

    for (const topic of this.topics) {
      for (const unit of topic.units) {
        for (const problemSet of unit.problemSets) {
          problems.push(...problemSet.problems);
          if (problems.length >= count) break;
        }
        if (problems.length >= count) break;
      }
      if (problems.length >= count) break;
    }

    return problems.slice(0, count);
  }

  /**
   * Search problems by tags, difficulty, etc.
   */
  static searchProblems(filters: {
    tags?: string[];
    difficulty?: number[];
    topicId?: string;
  }): Problem[] {
    let allProblems: Problem[] = [];

    // Collect all problems
    for (const topic of this.topics) {
      if (filters.topicId && topic.id !== filters.topicId) continue;

      for (const unit of topic.units) {
        for (const problemSet of unit.problemSets) {
          allProblems.push(...problemSet.problems);
        }
      }
    }

    // Apply filters
    if (filters.tags) {
      allProblems = allProblems.filter((p) =>
        filters.tags!.some((tag) => p.tags.includes(tag))
      );
    }

    if (filters.difficulty) {
      allProblems = allProblems.filter((p) =>
        filters.difficulty!.includes(p.difficulty)
      );
    }

    return allProblems;
  }
}
```

---

## 6. API Routes for Content & Progress

```typescript
// app/api/problems/[problemId]/attempt/route.ts

import { NextRequest, NextResponse } from 'next/server';
import { ProgressTracker } from '@/lib/services/progress-tracker';
import { ContentLoader } from '@/lib/services/content-loader';
import { validateAnswer } from '@/lib/utils/validators';
import { createClient } from '@/lib/supabase/server';

export async function POST(
  request: NextRequest,
  { params }: { params: { problemId: string } }
) {
  try {
    const supabase = createClient();
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body = await request.json();
    const { answer, timeSpent, hintsUsed } = body;

    // Load problem from content files
    const problem = ContentLoader.getProblemById(params.problemId);

    if (!problem) {
      return NextResponse.json(
        { error: 'Problem not found' },
        { status: 404 }
      );
    }

    // Validate answer
    const isCorrect = validateAnswer(problem, answer);

    // Record attempt
    const progressUpdate = await ProgressTracker.recordAttempt(
      {
        userId: user.id,
        problemId: params.problemId,
        answer,
        isCorrect,
        hintsUsed: hintsUsed || 0,
        timeSpent: timeSpent || 0,
      },
      problem
    );

    return NextResponse.json({
      isCorrect,
      explanation: problem.explanation,
      ...progressUpdate,
    });
  } catch (error) {
    console.error('Error recording attempt:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
```

```typescript
// app/api/content/topics/route.ts

import { NextResponse } from 'next/server';
import { ContentLoader } from '@/lib/services/content-loader';

export async function GET() {
  const topics = ContentLoader.getAllTopics();
  return NextResponse.json({ topics });
}
```

```typescript
// app/api/progress/route.ts

import { NextRequest, NextResponse } from 'next/server';
import { ProgressTracker } from '@/lib/services/progress-tracker';
import { createClient } from '@/lib/supabase/server';

export async function GET(request: NextRequest) {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const progress = await ProgressTracker.getUserProgress(user.id);
  return NextResponse.json(progress);
}
```

---

## 7. Content Creation Workflow

### 7.1 Adding New Content (Step-by-Step)

#### Step 1: Create Problem TypeScript File

```bash
# Create new problem set file
touch content/problems/sets/multiplication-set-1.ts
```

#### Step 2: Define Problems

```typescript
// content/problems/sets/multiplication-set-1.ts
import { ProblemSet, MCQProblem } from '@/types/content';

const prob1: MCQProblem = {
  id: 'prob_mult_001',
  type: 'mcq',
  // ... problem definition
};

export const multiplicationSet1: ProblemSet = {
  id: 'set_mult_1',
  name: { en: 'Basic Multiplication', bn: 'মৌলিক গুণ' },
  problems: [prob1],
  // ... rest
};
```

#### Step 3: Create Unit

```typescript
// content/topics/arithmetic/units/multiplication-basics.ts
import { Unit } from '@/types/content';
import { multiplicationSet1 } from '@/content/problems/sets/multiplication-set-1';

export const multiplicationUnit1: Unit = {
  id: 'unit_mult_basics',
  topicId: 'topic_multiplication',
  name: { en: 'Multiplication Basics', bn: 'গুণের মূল বিষয়' },
  // ...
  problemSets: [multiplicationSet1],
};
```

#### Step 4: Add to Topic

```typescript
// content/topics/arithmetic/multiplication.ts
import { Topic } from '@/types/content';
import { multiplicationUnit1 } from './units/multiplication-basics';

export const multiplicationTopic: Topic = {
  id: 'topic_multiplication',
  name: { en: 'Multiplication', bn: 'গুণ' },
  units: [multiplicationUnit1],
  // ...
};
```

#### Step 5: Register in Content Loader

```typescript
// lib/services/content-loader.ts
import { multiplicationTopic } from '@/content/topics/arithmetic/multiplication';

export class ContentLoader {
  private static topics: Topic[] = [
    additionTopic,
    multiplicationTopic, // Add here
    // ...
  ];
}
```

### 7.2 Content Validation Script

```typescript
// scripts/validate-content.ts

import { ContentLoader } from '@/lib/services/content-loader';

function validateContent() {
  const topics = ContentLoader.getAllTopics();
  const errors: string[] = [];

  for (const topic of topics) {
    // Check for duplicate IDs
    const problemIds = new Set();

    for (const unit of topic.units) {
      for (const problemSet of unit.problemSets) {
        for (const problem of problemSet.problems) {
          if (problemIds.has(problem.id)) {
            errors.push(`Duplicate problem ID: ${problem.id}`);
          }
          problemIds.add(problem.id);

          // Validate required fields
          if (!problem.question.en || !problem.question.bn) {
            errors.push(`Problem ${problem.id} missing question text`);
          }

          if (!problem.explanation.en || !problem.explanation.bn) {
            errors.push(`Problem ${problem.id} missing explanation`);
          }

          // Validate problem-specific fields
          if (problem.type === 'mcq') {
            const correctCount = problem.options.filter(
              (o) => o.isCorrect
            ).length;
            if (correctCount !== 1) {
              errors.push(
                `MCQ Problem ${problem.id} has ${correctCount} correct answers (should be 1)`
              );
            }
          }
        }
      }
    }
  }

  if (errors.length > 0) {
    console.error('Content validation errors:');
    errors.forEach((e) => console.error(`- ${e}`));
    process.exit(1);
  } else {
    console.log('✅ Content validation passed!');
  }
}

validateContent();
```

Run validation:
```bash
npx tsx scripts/validate-content.ts
```

---

## 8. Advanced Features

### 8.1 Content Versioning

```typescript
// lib/services/content-versioner.ts

export class ContentVersioner {
  /**
   * Track which version of content a user has seen
   */
  static async recordContentView(
    userId: string,
    contentId: string,
    version: string
  ) {
    // Store in DB which version user saw
    // Useful for A/B testing explanations, hints, etc.
  }

  /**
   * Get appropriate content version for user
   */
  static getContentVersion(problem: Problem, userId: string): Problem {
    // Could return different variations for A/B testing
    return problem;
  }
}
```

### 8.2 Dynamic Problem Generation Cache

```typescript
// lib/services/problem-cache.ts

import { Problem } from '@/types/content';
import { ArithmeticProblemGenerator } from '@/content/problems/generators/arithmetic-generator';

export class ProblemCache {
  /**
   * Generate and cache problems for faster delivery
   */
  static async generateProblemSet(
    type: 'addition' | 'subtraction' | 'multiplication',
    difficulty: 1 | 2 | 3,
    count: number
  ): Promise<Problem[]> {
    // Check cache first
    const cacheKey = `${type}_${difficulty}_${count}`;

    // Generate if not cached
    const problems = ArithmeticProblemGenerator.generateAddition(
      difficulty,
      count
    );

    // Store in cache (Redis/Supabase)

    return problems;
  }
}
```

---

## 9. Summary & Best Practices

### Content Organization Principles

1. **Separation of Concerns**
   - Content files = Static definitions
   - Database = User interactions and progress
   - Services = Business logic

2. **Type Safety**
   - Use TypeScript interfaces for all content
   - Validate at build time with scripts
   - Catch errors before runtime

3. **Localization First**
   - Always provide en + bn text
   - Use LocalizedText type everywhere
   - Easy to add more languages later

4. **Version Control**
   - Content changes tracked in Git
   - Easy to revert problematic content
   - Collaborate with teachers via PR

5. **Performance**
   - Content loaded from files (fast)
   - No DB queries for problem definitions
   - Cache generated problems
   - Bundle content for offline use

6. **Scalability**
   - Easy to add new problem types
   - Generator functions for infinite practice
   - Component-based rendering
   - Lazy load heavy content (videos, animations)

### Recommended Workflow

```
1. Design curriculum structure (topics → units)
2. Create type definitions
3. Implement core problem types (MCQ, number-input)
4. Build 1 complete topic with 20-30 problems
5. Test with real users
6. Iterate and expand
7. Add advanced problem types (drag-drop, step-by-step)
8. Implement problem generators
9. Scale content creation (involve teachers)
```

### Quick Start Checklist

- [ ] Set up types/content.ts with all type definitions
- [ ] Create content/ folder structure
- [ ] Implement 2-3 problem type components
- [ ] Build ContentLoader service
- [ ] Create 1 complete topic (20+ problems)
- [ ] Implement ProgressTracker service
- [ ] Build problem solving page
- [ ] Add hint system
- [ ] Create progress dashboard
- [ ] Write content validation script

---

This file-based approach gives you maximum flexibility while maintaining type safety and performance. Start small with 1-2 problem types and 1 complete topic, then expand based on user feedback!
