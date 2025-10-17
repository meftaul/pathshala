import { ProblemSet, MCQProblem, NumberInputProblem, DragDropProblem } from '@/types/content';

// Problem 1: Identify acute angle
const problem1: MCQProblem = {
  id: 'prob_angle_001',
  type: 'mcq',
  difficulty: 1,
  question: {
    en: 'Which of these angles is an acute angle?',
    bn: 'এই কোণগুলির মধ্যে কোনটি সূক্ষ্মকোণ?',
  },
  options: [
    {
      id: 'opt_a',
      text: { en: '30°', bn: '৩০°' },
      isCorrect: true,
    },
    {
      id: 'opt_b',
      text: { en: '90°', bn: '৯০°' },
      isCorrect: false,
    },
    {
      id: 'opt_c',
      text: { en: '120°', bn: '১২০°' },
      isCorrect: false,
    },
    {
      id: 'opt_d',
      text: { en: '180°', bn: '১৮০°' },
      isCorrect: false,
    },
  ],
  explanation: {
    en: 'An acute angle is between 0° and 90°. Only 30° fits this range!',
    bn: 'সূক্ষ্মকোণ ০° এবং ৯০° এর মধ্যে। শুধুমাত্র ৩০° এই সীমায় মাপসই!',
  },
  hints: [
    {
      level: 1,
      text: {
        en: 'Think about which angle is less than 90°',
        bn: 'ভাবো কোন কোণ ৯০° এর কম',
      },
    },
    {
      level: 2,
      text: {
        en: 'Acute angles are "sharp" and smaller than a right angle',
        bn: 'সূক্ষ্মকোণ "তীক্ষ্ণ" এবং সমকোণের চেয়ে ছোট',
      },
    },
  ],
  feedback: {
    correct: {
      en: 'Perfect! 30° is an acute angle because it\'s less than 90° 🎉',
      bn: 'চমৎকার! ৩০° একটি সূক্ষ্মকোণ কারণ এটি ৯০° এর কম 🎉',
    },
    incorrect: {
      opt_b: {
        en: '90° is a right angle, not acute',
        bn: '৯০° একটি সমকোণ, সূক্ষ্মকোণ নয়',
      },
      opt_c: {
        en: '120° is an obtuse angle (greater than 90°)',
        bn: '১২০° একটি স্থূলকোণ (৯০° এর বেশি)',
      },
      opt_d: {
        en: '180° is a straight angle',
        bn: '১৮০° একটি সরলকোণ',
      },
    },
  },
  tags: ['angle-types', 'acute', 'identification'],
  estimatedTime: 30,
  points: 10,
};

// Problem 2: Right angle identification
const problem2: MCQProblem = {
  id: 'prob_angle_002',
  type: 'mcq',
  difficulty: 1,
  question: {
    en: 'A right angle measures:',
    bn: 'একটি সমকোণ পরিমাপ করে:',
  },
  options: [
    {
      id: 'opt_a',
      text: { en: '45°', bn: '৪৫°' },
      isCorrect: false,
    },
    {
      id: 'opt_b',
      text: { en: '90°', bn: '৯০°' },
      isCorrect: true,
    },
    {
      id: 'opt_c',
      text: { en: '180°', bn: '১৮০°' },
      isCorrect: false,
    },
    {
      id: 'opt_d',
      text: { en: '360°', bn: '৩৬০°' },
      isCorrect: false,
    },
  ],
  explanation: {
    en: 'A right angle is always exactly 90° - like the corner of a book!',
    bn: 'একটি সমকোণ সবসময় ঠিক ৯০° - বইয়ের কোণার মতো!',
  },
  hints: [
    {
      level: 1,
      text: {
        en: 'Think about the corner of a square',
        bn: 'একটি বর্গের কোণা সম্পর্কে ভাবো',
      },
    },
    {
      level: 2,
      text: {
        en: 'Right angles form a perfect "L" shape',
        bn: 'সমকোণ একটি নিখুঁত "L" আকৃতি তৈরি করে',
      },
    },
  ],
  tags: ['angle-types', 'right-angle', 'measurement'],
  estimatedTime: 30,
  points: 10,
};

// Problem 3: Right angle measure (number input)
const problem3: NumberInputProblem = {
  id: 'prob_angle_003',
  type: 'number-input',
  difficulty: 1,
  question: {
    en: 'What is the measure of a right angle in degrees?',
    bn: 'ডিগ্রিতে একটি সমকোণের পরিমাপ কত?',
  },
  correctAnswer: 90,
  explanation: {
    en: 'Correct! A right angle is always 90 degrees 📐',
    bn: 'সঠিক! একটি সমকোণ সবসময় ৯০ ডিগ্রি 📐',
  },
  hints: [
    {
      level: 1,
      text: {
        en: 'Think about a square corner',
        bn: 'একটি বর্গাকার কোণা সম্পর্কে ভাবো',
      },
    },
    {
      level: 2,
      text: {
        en: 'It\'s between 0 and 180, and forms an "L"',
        bn: 'এটি ০ এবং ১৮০ এর মধ্যে, এবং একটি "L" গঠন করে',
      },
    },
  ],
  tags: ['right-angle', 'measurement', 'basics'],
  estimatedTime: 30,
  points: 10,
};

// Problem 4: Obtuse angle identification
const problem4: MCQProblem = {
  id: 'prob_angle_004',
  type: 'mcq',
  difficulty: 2,
  question: {
    en: 'Which angle is obtuse?',
    bn: 'কোন কোণটি স্থূলকোণ?',
  },
  options: [
    {
      id: 'opt_a',
      text: { en: '45°', bn: '৪৫°' },
      isCorrect: false,
    },
    {
      id: 'opt_b',
      text: { en: '89°', bn: '৮৯°' },
      isCorrect: false,
    },
    {
      id: 'opt_c',
      text: { en: '135°', bn: '১৩৫°' },
      isCorrect: true,
    },
    {
      id: 'opt_d',
      text: { en: '90°', bn: '৯০°' },
      isCorrect: false,
    },
  ],
  explanation: {
    en: 'An obtuse angle is greater than 90° but less than 180°. 135° fits perfectly!',
    bn: 'একটি স্থূলকোণ ৯০° এর বেশি কিন্তু ১৮০° এর কম। ১৩৫° নিখুঁতভাবে মাপসই!',
  },
  hints: [
    {
      level: 1,
      text: {
        en: 'Obtuse angles are wider than right angles',
        bn: 'স্থূলকোণ সমকোণের চেয়ে প্রশস্ত',
      },
    },
    {
      level: 2,
      text: {
        en: 'Look for the angle greater than 90°',
        bn: '৯০° এর বেশি কোণ খোঁজো',
      },
    },
  ],
  tags: ['angle-types', 'obtuse', 'identification'],
  estimatedTime: 40,
  points: 15,
};

// Problem 5: Match angle types (drag-drop)
const problem5: DragDropProblem = {
  id: 'prob_angle_005',
  type: 'drag-drop',
  difficulty: 2,
  question: {
    en: 'Match each angle type to its correct range',
    bn: 'প্রতিটি কোণের ধরনকে তার সঠিক সীমার সাথে মিলাও',
  },
  draggables: [
    { id: 'drag_acute', content: { en: 'Acute Angle', bn: 'সূক্ষ্মকোণ' } },
    { id: 'drag_right', content: { en: 'Right Angle', bn: 'সমকোণ' } },
    { id: 'drag_obtuse', content: { en: 'Obtuse Angle', bn: 'স্থূলকোণ' } },
  ],
  dropZones: [
    { id: 'drop_0_90', label: { en: '0° to 90°', bn: '০° থেকে ৯০°' }, accepts: ['drag_acute'] },
    { id: 'drop_90', label: { en: 'Exactly 90°', bn: 'ঠিক ৯০°' }, accepts: ['drag_right'] },
    { id: 'drop_90_180', label: { en: '90° to 180°', bn: '৯০° থেকে ১৮০°' }, accepts: ['drag_obtuse'] },
  ],
  solution: {
    drop_0_90: 'drag_acute',
    drop_90: 'drag_right',
    drop_90_180: 'drag_obtuse',
  },
  explanation: {
    en: 'Great matching! Acute (0-90°), Right (90°), Obtuse (90-180°) ✨',
    bn: 'চমৎকার মিল! সূক্ষ্মকোণ (০-৯০°), সমকোণ (৯০°), স্থূলকোণ (৯০-১৮০°) ✨',
  },
  hints: [
    {
      level: 1,
      text: {
        en: 'Think about which angles are smaller, equal to, or larger than 90°',
        bn: 'কোন কোণগুলি ৯০° এর চেয়ে ছোট, সমান বা বড় তা ভাবো',
      },
    },
  ],
  tags: ['angle-types', 'matching', 'ranges'],
  estimatedTime: 60,
  points: 15,
};

// Problem 6: Real-world angle
const problem6: MCQProblem = {
  id: 'prob_angle_006',
  type: 'mcq',
  difficulty: 2,
  question: {
    en: 'When scissors are slightly open, what type of angle do the blades form?',
    bn: 'যখন কাঁচি সামান্য খোলা থাকে, তখন ব্লেডগুলি কী ধরনের কোণ তৈরি করে?',
  },
  options: [
    {
      id: 'opt_a',
      text: { en: 'Acute angle', bn: 'সূক্ষ্মকোণ' },
      isCorrect: true,
    },
    {
      id: 'opt_b',
      text: { en: 'Right angle', bn: 'সমকোণ' },
      isCorrect: false,
    },
    {
      id: 'opt_c',
      text: { en: 'Straight angle', bn: 'সরলকোণ' },
      isCorrect: false,
    },
    {
      id: 'opt_d',
      text: { en: 'Reflex angle', bn: 'প্রবৃদ্ধকোণ' },
      isCorrect: false,
    },
  ],
  explanation: {
    en: 'Slightly open scissors form an acute angle (less than 90°). When wide open, they can form an obtuse angle!',
    bn: 'সামান্য খোলা কাঁচি একটি সূক্ষ্মকোণ (৯০° এর কম) তৈরি করে। যখন প্রশস্তভাবে খোলা থাকে, তারা একটি স্থূলকোণ তৈরি করতে পারে!',
  },
  hints: [
    {
      level: 1,
      text: {
        en: 'Think about how sharp or wide the opening is',
        bn: 'খোলা অংশটি কতটা তীক্ষ্ণ বা প্রশস্ত তা ভাবো',
      },
    },
    {
      level: 2,
      text: {
        en: 'Slightly open means the angle is small - less than 90°',
        bn: 'সামান্য খোলা মানে কোণটি ছোট - ৯০° এর কম',
      },
    },
  ],
  tags: ['real-world', 'acute', 'application'],
  estimatedTime: 45,
  points: 15,
};

// Problem 7: Angle type from measure
const problem7: NumberInputProblem = {
  id: 'prob_angle_007',
  type: 'number-input',
  difficulty: 2,
  question: {
    en: 'An angle measures 135°. Is this acute (1), right (2), or obtuse (3)?',
    bn: 'একটি কোণ ১৩৫° পরিমাপ করে। এটি কি সূক্ষ্মকোণ (১), সমকোণ (২), নাকি স্থূলকোণ (৩)?',
  },
  correctAnswer: 3,
  explanation: {
    en: 'Correct! 135° is obtuse because it\'s greater than 90° but less than 180° 🎯',
    bn: 'সঠিক! ১৩৫° স্থূলকোণ কারণ এটি ৯০° এর বেশি কিন্তু ১৮০° এর কম 🎯',
  },
  hints: [
    {
      level: 1,
      text: {
        en: 'Compare 135° to 90°',
        bn: '১৩৫° কে ৯০° এর সাথে তুলনা করো',
      },
    },
    {
      level: 2,
      text: {
        en: 'Since 135° > 90°, it\'s not acute or right',
        bn: 'যেহেতু ১৩৫° > ৯০°, এটি সূক্ষ্মকোণ বা সমকোণ নয়',
      },
    },
  ],
  tags: ['angle-types', 'obtuse', 'classification'],
  estimatedTime: 40,
  points: 15,
};

// Problem 8: Comparing angles
const problem8: MCQProblem = {
  id: 'prob_angle_008',
  type: 'mcq',
  difficulty: 1,
  question: {
    en: 'Which angle is larger: 45° or 120°?',
    bn: 'কোন কোণটি বড়: ৪৫° নাকি ১২০°?',
  },
  options: [
    {
      id: 'opt_a',
      text: { en: '45°', bn: '৪৫°' },
      isCorrect: false,
    },
    {
      id: 'opt_b',
      text: { en: '120°', bn: '১২০°' },
      isCorrect: true,
    },
    {
      id: 'opt_c',
      text: { en: 'They are equal', bn: 'তারা সমান' },
      isCorrect: false,
    },
  ],
  explanation: {
    en: '120° is larger than 45°. The bigger the number, the wider the angle!',
    bn: '১২০° হল ৪৫° এর চেয়ে বড়। সংখ্যা যত বড়, কোণ তত প্রশস্ত!',
  },
  hints: [
    {
      level: 1,
      text: {
        en: 'Compare the two numbers',
        bn: 'দুটি সংখ্যা তুলনা করো',
      },
    },
  ],
  tags: ['comparison', 'basic', 'measurement'],
  estimatedTime: 30,
  points: 10,
};

export const anglesProblemSet1: ProblemSet = {
  id: 'set_angles_1',
  unitId: 'unit_angles_basics',
  name: {
    en: 'Practice: Angle Identification & Basics',
    bn: 'অনুশীলন: কোণ চিহ্নিতকরণ এবং মূল বিষয়',
  },
  description: {
    en: 'Master the basics of identifying and measuring different types of angles',
    bn: 'বিভিন্ন ধরনের কোণ চিহ্নিত এবং পরিমাপ করার মূল বিষয়গুলি আয়ত্ত করো',
  },
  problems: [problem1, problem2, problem3, problem4, problem5, problem6, problem7, problem8],
  order: 1,
  minScoreToPass: 70,
};
