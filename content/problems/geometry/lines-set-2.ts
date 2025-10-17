import { Problem, ProblemSet } from '@/types/content';

// Problem 1: Understanding slope
const problem1: Problem = {
  id: 'lines_adv_1',
  type: 'mcq',
  difficulty: 2,
  question: {
    en: 'What is the slope of a horizontal line?',
    bn: 'একটি অনুভূমিক রেখার ঢাল কত?',
  },
  options: [
    {
      id: 'a',
      text: {
        en: '0',
        bn: '০',
      },
      isCorrect: true,
    },
    {
      id: 'b',
      text: {
        en: '1',
        bn: '১',
      },
      isCorrect: false,
    },
    {
      id: 'c',
      text: {
        en: 'Undefined',
        bn: 'অসংজ্ঞায়িত',
      },
      isCorrect: false,
    },
    {
      id: 'd',
      text: {
        en: 'Infinity',
        bn: 'অসীম',
      },
      isCorrect: false,
    },
  ],
  explanation: {
    en: 'A horizontal line has a slope of 0 because there is no vertical change (rise = 0) as you move along the line.',
    bn: 'একটি অনুভূমিক রেখার ঢাল ০ কারণ রেখা বরাবর চলার সময় কোন উল্লম্ব পরিবর্তন নেই (উত্থান = ০)।',
  },
  hints: [
    {
      level: 1,
      text: {
        en: 'Think about how much a horizontal line rises.',
        bn: 'একটি অনুভূমিক রেখা কতটুকু উঠে তা চিন্তা করো।',
      },
    },
    {
      level: 2,
      text: {
        en: 'Slope = rise ÷ run. If rise is 0...',
        bn: 'ঢাল = উত্থান ÷ ভ্রমণ। যদি উত্থান ০ হয়...',
      },
    },
    {
      level: 3,
      text: {
        en: 'Horizontal lines have slope = 0.',
        bn: 'অনুভূমিক রেখার ঢাল = ০।',
      },
    },
  ],
  points: 10,
  tags: ['line-angles'],
  estimatedTime: 60,
};

// Problem 2: Vertical line slope
const problem2: Problem = {
  id: 'lines_adv_2',
  type: 'mcq',
  difficulty: 2,
  question: {
    en: 'What is the slope of a vertical line?',
    bn: 'একটি উল্লম্ব রেখার ঢাল কত?',
  },
  options: [
    {
      id: 'a',
      text: {
        en: '0',
        bn: '০',
      },
      isCorrect: false,
    },
    {
      id: 'b',
      text: {
        en: '1',
        bn: '১',
      },
      isCorrect: false,
    },
    {
      id: 'c',
      text: {
        en: 'Undefined',
        bn: 'অসংজ্ঞায়িত',
      },
      isCorrect: true,
    },
    {
      id: 'd',
      text: {
        en: '-1',
        bn: '-১',
      },
      isCorrect: false,
    },
  ],
  explanation: {
    en: 'A vertical line has an undefined slope because the run (horizontal change) is 0, and we cannot divide by 0.',
    bn: 'একটি উল্লম্ব রেখার ঢাল অসংজ্ঞায়িত কারণ ভ্রমণ (অনুভূমিক পরিবর্তন) ০, এবং আমরা ০ দিয়ে ভাগ করতে পারি না।',
  },
  hints: [
    {
      level: 1,
      text: {
        en: 'Think about the run (horizontal change) of a vertical line.',
        bn: 'একটি উল্লম্ব রেখার ভ্রমণ (অনুভূমিক পরিবর্তন) সম্পর্কে চিন্তা করো।',
      },
    },
    {
      level: 2,
      text: {
        en: 'Slope = rise ÷ run. What happens when run = 0?',
        bn: 'ঢাল = উত্থান ÷ ভ্রমণ। যখন ভ্রমণ = ০ তখন কী হয়?',
      },
    },
    {
      level: 3,
      text: {
        en: 'Division by zero is undefined.',
        bn: 'শূন্য দিয়ে ভাগ অসংজ্ঞায়িত।',
      },
    },
  ],
  points: 10,
  tags: ['line-angles'],
  estimatedTime: 60,
};

// Problem 3: Parallel lines and slope
const problem3: Problem = {
  id: 'lines_adv_3',
  type: 'mcq',
  difficulty: 3,
  question: {
    en: 'If two lines are parallel, their slopes are:',
    bn: 'যদি দুটি রেখা সমান্তরাল হয়, তাদের ঢাল:',
  },
  options: [
    {
      id: 'a',
      text: {
        en: 'Equal',
        bn: 'সমান',
      },
      isCorrect: true,
    },
    {
      id: 'b',
      text: {
        en: 'Opposite',
        bn: 'বিপরীত',
      },
      isCorrect: false
    },
    {
      id: 'c',
      text: {
        en: 'Negative reciprocals',
        bn: 'ঋণাত্মক বিপরীত',
      },
      isCorrect: false,
    },
    {
      id: 'd',
      text: {
        en: 'Always different',
        bn: 'সবসময় ভিন্ন',
      },
      isCorrect: false,
    },
  ],
  explanation: {
    en: 'Parallel lines have the same slope because they rise and run at the same rate. This is why they never meet.',
    bn: 'সমান্তরাল রেখার একই ঢাল থাকে কারণ তারা একই হারে উঠে এবং চলে। এই কারণেই তারা কখনও মিলিত হয় না।',
  },
  hints: [
    {
      level: 1,
      text: {
        en: 'Parallel lines maintain the same direction.',
        bn: 'সমান্তরাল রেখা একই দিক বজায় রাখে।',
      },
    },
    {
      level: 2,
      text: {
        en: 'Same direction means same steepness.',
        bn: 'একই দিক মানে একই খাড়াত্ব।',
      },
    },
    {
      level: 3,
      text: {
        en: 'Parallel lines have equal slopes.',
        bn: 'সমান্তরাল রেখার সমান ঢাল থাকে।',
      },
    },
  ],
  points: 15,
  tags: ['line-angles'],
  estimatedTime: 90,
};

// Problem 4: Perpendicular lines and slope
const problem4: Problem = {
  id: 'lines_adv_4',
  type: 'mcq',
  difficulty: 3,
  question: {
    en: 'If two lines are perpendicular (form a 90° angle), their slopes are:',
    bn: 'যদি দুটি রেখা লম্ব হয় (৯০° কোণ তৈরি করে), তাদের ঢাল:',
  },
  options: [
    {
      id: 'a',
      text: {
        en: 'Equal',
        bn: 'সমান',
      },
      isCorrect: false
    },
    {
      id: 'b',
      text: {
        en: 'Both zero',
        bn: 'উভয়ই শূন্য',
      },
      isCorrect: false
    },
    {
      id: 'c',
      text: {
        en: 'Negative reciprocals (m₁ × m₂ = -1)',
        bn: 'ঋণাত্মক বিপরীত (m₁ × m₂ = -১)',
      },
      isCorrect: true
    },
    {
      id: 'd',
      text: {
        en: 'Always 1',
        bn: 'সবসময় ১',
      },
      isCorrect: false
    },
  ],
  explanation: {
    en: 'Perpendicular lines have slopes that are negative reciprocals. If one slope is m, the other is -1/m. Their product equals -1.',
    bn: 'লম্ব রেখার ঢাল ঋণাত্মক বিপরীত হয়। যদি একটি ঢাল m হয়, অন্যটি -১/m। তাদের গুণফল -১ এর সমান।',
  },
  hints: [
    {
      level: 1,
      text: {
        en: 'Think about a horizontal and vertical line.',
        bn: 'একটি অনুভূমিক এবং উল্লম্ব রেখার কথা চিন্তা করো।',
      },
    },
    {
      level: 2,
      text: {
        en: 'Perpendicular means the lines turn 90° from each other.',
        bn: 'লম্ব মানে রেখাগুলি একে অপর থেকে ৯০° ঘুরে।',
      },
    },
    {
      level: 3,
      text: {
        en: 'The slopes multiply to give -1.',
        bn: 'ঢালগুলি গুণ করলে -১ পাওয়া যায়।',
      },
    },
  ],
  points: 15,
  tags: ['line-angles'],
  estimatedTime: 90,
};

// Problem 5: Calculating slope from two points
const problem5: Problem = {
  id: 'lines_adv_5',
  type: 'number-input',
  difficulty: 3,
  question: {
    en: 'A line passes through points (0, 2) and (4, 6). What is the slope? (Enter as a decimal)',
    bn: 'একটি রেখা (০, ২) এবং (৪, ৬) বিন্দু দিয়ে যায়। ঢাল কত? (দশমিক হিসাবে লিখো)',
  },
  correctAnswer: 1,
  explanation: {
    en: 'Slope = (y₂ - y₁) ÷ (x₂ - x₁) = (6 - 2) ÷ (4 - 0) = 4 ÷ 4 = 1',
    bn: 'ঢাল = (y₂ - y₁) ÷ (x₂ - x₁) = (৬ - ২) ÷ (৪ - ০) = ৪ ÷ ৪ = ১',
  },
  hints: [
    {
      level: 1,
      text: {
        en: 'Use the slope formula: (y₂ - y₁) ÷ (x₂ - x₁)',
        bn: 'ঢাল সূত্র ব্যবহার করো: (y₂ - y₁) ÷ (x₂ - x₁)',
      },
    },
    {
      level: 2,
      text: {
        en: 'Change in y = 6 - 2, Change in x = 4 - 0',
        bn: 'y এর পরিবর্তন = ৬ - ২, x এর পরিবর্তন = ৪ - ০',
      },
    },
    {
      level: 3,
      text: {
        en: '4 ÷ 4 = 1',
        bn: '৪ ÷ ৪ = ১',
      },
    },
  ],
  points: 15,
  tags: ['line-angles'],
  estimatedTime: 60,
};

// Problem 6: Drag-drop matching line orientations with slopes
const problem6: Problem = {
  id: 'lines_adv_6',
  type: 'drag-drop',
  difficulty: 3,
  question: {
    en: 'Match each line orientation with its slope characteristic:',
    bn: 'প্রতিটি রেখার অভিমুখকে এর ঢাল বৈশিষ্ট্যের সাথে মিলাও:',
  },
  draggables: [
    { id: 'drag_slope_0', content: { en: 'Slope = 0', bn: 'ঢাল = ০' } },
    { id: 'drag_slope_undef', content: { en: 'Slope = undefined', bn: 'ঢাল = অসংজ্ঞায়িত' } },
    { id: 'drag_slope_pos', content: { en: 'Slope = positive', bn: 'ঢাল = ধনাত্মক' } },
    { id: 'drag_slope_neg', content: { en: 'Slope = negative', bn: 'ঢাল = ঋণাত্মক' } },
  ],
  dropZones: [
    {
      id: 'drop_horizontal',
      label: { en: 'Horizontal line', bn: 'অনুভূমিক রেখা' },
      accepts: ['drag_slope_0']
    },
    {
      id: 'drop_vertical',
      label: { en: 'Vertical line', bn: 'উল্লম্ব রেখা' },
      accepts: ['drag_slope_undef']
    },
    {
      id: 'drop_rising',
      label: { en: 'Diagonal line (rising left to right)', bn: 'কর্ণ রেখা (বাম থেকে ডান উঠছে)' },
      accepts: ['drag_slope_pos']
    },
    {
      id: 'drop_falling',
      label: { en: 'Diagonal line (falling left to right)', bn: 'কর্ণ রেখা (বাম থেকে ডান নামছে)' },
      accepts: ['drag_slope_neg']
    },
  ],
  solution: {
    drop_horizontal: 'drag_slope_0',
    drop_vertical: 'drag_slope_undef',
    drop_rising: 'drag_slope_pos',
    drop_falling: 'drag_slope_neg',
  },
  explanation: {
    en: 'Horizontal lines have no rise (slope=0), vertical lines have no run (undefined), upward diagonal lines have positive slope, and downward diagonal lines have negative slope.',
    bn: 'অনুভূমিক রেখার কোন উত্থান নেই (ঢাল=০), উল্লম্ব রেখার কোন ভ্রমণ নেই (অসংজ্ঞায়িত), ঊর্ধ্বমুখী কর্ণ রেখার ধনাত্মক ঢাল আছে, এবং নিম্নমুখী কর্ণ রেখার ঋণাত্মক ঢাল আছে।',
  },
  hints: [
    {
      level: 1,
      text: {
        en: 'Think about whether the line is going up or down.',
        bn: 'রেখা উপরে যাচ্ছে নাকি নিচে যাচ্ছে তা চিন্তা করো।',
      },
    },
    {
      level: 2,
      text: {
        en: 'No change in y means slope is 0. No change in x means undefined.',
        bn: 'y তে কোন পরিবর্তন নেই মানে ঢাল ০। x এ কোন পরিবর্তন নেই মানে অসংজ্ঞায়িত।',
      },
    },
    {
      level: 3,
      text: {
        en: 'Rising = positive, falling = negative.',
        bn: 'উঠছে = ধনাত্মক, নামছে = ঋণাত্মক।',
      },
    },
  ],
  points: 20,
  tags: ['line-angles'],
  estimatedTime: 90,
};

// Problem 7: Intersecting lines
const problem7: Problem = {
  id: 'lines_adv_7',
  type: 'mcq',
  difficulty: 3,
  question: {
    en: 'When two lines intersect (cross), how many angles are formed?',
    bn: 'যখন দুটি রেখা ছেদ (কাটাকাটি) করে, কতগুলি কোণ তৈরি হয়?',
  },
  options: [
    {
      id: 'a',
      text: {
        en: '2 angles',
        bn: '২টি কোণ',
      },
      isCorrect: false,
    },
    {
      id: 'b',
      text: {
        en: '3 angles',
        bn: '৩টি কোণ',
      },
      isCorrect: false,
    },
    {
      id: 'c',
      text: {
        en: '4 angles',
        bn: '৪টি কোণ',
      },
      isCorrect: true,
    },
    {
      id: 'd',
      text: {
        en: '6 angles',
        bn: '৬টি কোণ',
      },
      isCorrect: false,
    },
  ],
  explanation: {
    en: 'When two lines intersect, they form 4 angles at the point of intersection. Opposite angles (called vertical angles) are equal.',
    bn: 'যখন দুটি রেখা ছেদ করে, তারা ছেদবিন্দুতে ৪টি কোণ তৈরি করে। বিপরীত কোণ (যাকে শীর্ষ কোণ বলা হয়) সমান।',
  },
  hints: [
    {
      level: 1,
      text: {
        en: 'Draw two lines crossing like an X and count the angles.',
        bn: 'X এর মতো দুটি রেখা কাটাকাটি করে আঁকো এবং কোণগুলি গণনা করো।',
      },
    },
    {
      level: 2,
      text: {
        en: 'Look at all four spaces around the intersection point.',
        bn: 'ছেদবিন্দুর চারপাশের সব চারটি স্থান দেখো।',
      },
    },
    {
      level: 3,
      text: {
        en: 'Two intersecting lines form 4 angles.',
        bn: 'দুটি ছেদকারী রেখা ৪টি কোণ তৈরি করে।',
      },
    },
  ],
  points: 15,
  tags: ['line-angles'],
  estimatedTime: 60,
};

// Problem 8: Real-world application
const problem8: Problem = {
  id: 'lines_adv_8',
  type: 'mcq',
  difficulty: 4,
  question: {
    en: 'A ladder is leaning against a wall. The wall is vertical and the ground is horizontal. What is the relationship between the wall and ground?',
    bn: 'একটি মই একটি দেয়ালের সাথে হেলে আছে। দেয়াল উল্লম্ব এবং মাটি অনুভূমিক। দেয়াল এবং মাটির মধ্যে সম্পর্ক কী?',
  },
  options: [
    {
      id: 'a',
      text: {
        en: 'Parallel',
        bn: 'সমান্তরাল',
      },
      isCorrect: false,
    },
    {
      id: 'b',
      text: {
        en: 'Perpendicular',
        bn: 'লম্ব',
      },
      isCorrect: true,
    },
    {
      id: 'c',
      text: {
        en: 'Intersecting at 45°',
        bn: '৪৫° তে ছেদ করছে',
      },
      isCorrect: false,
    },
    {
      id: 'd',
      text: {
        en: 'They do not touch',
        bn: 'তারা স্পর্শ করে না',
      },
      isCorrect: false,
    },
  ],
  explanation: {
    en: 'The wall (vertical) and ground (horizontal) are perpendicular to each other, forming a 90° angle. This is why the corner where they meet looks like an "L".',
    bn: 'দেয়াল (উল্লম্ব) এবং মাটি (অনুভূমিক) একে অপরের লম্ব, একটি ৯০° কোণ তৈরি করে। এই কারণেই তারা যেখানে মিলিত হয় সেই কোণা "L" এর মতো দেখায়।',
  },
  hints: [
    {
      level: 1,
      text: {
        en: 'Think about the corner of a room.',
        bn: 'একটি ঘরের কোণার কথা চিন্তা করো।',
      },
    },
    {
      level: 2,
      text: {
        en: 'Vertical and horizontal lines meet at what angle?',
        bn: 'উল্লম্ব এবং অনুভূমিক রেখা কোন কোণে মিলিত হয়?',
      },
    },
    {
      level: 3,
      text: {
        en: 'They are perpendicular (90° angle).',
        bn: 'তারা লম্ব (৯০° কোণ)।',
      },
    },
  ],
  points: 20,
  tags: ['line-angles'],
  estimatedTime: 90,
};

export const linesProblemSet2: ProblemSet = {
  id: 'set_lines_2',
  unitId: 'unit_lines_basics',
  name: {
    en: 'Practice: Advanced Line Concepts',
    bn: 'অনুশীলন: উন্নত রেখা ধারণা',
  },
  description: {
    en: 'Practice with slopes, line relationships, and advanced line properties',
    bn: 'ঢাল, রেখা সম্পর্ক এবং উন্নত রেখা বৈশিষ্ট্য নিয়ে অনুশীলন করো',
  },
  problems: [problem1, problem2, problem3, problem4, problem5, problem6, problem7, problem8],
  order: 2,
  minScoreToPass: 75,
};
