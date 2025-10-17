import { Problem, ProblemSet } from '@/types/content';

// Problem 1: Identifying reflex angles
const problem1: Problem = {
  id: 'angles_adv_1',
  type: 'mcq',
  difficulty: 2,
  question: {
    en: 'Which angle measurement represents a reflex angle?',
    bn: 'কোন কোণের মাপ একটি প্রবিষ্ট কোণ নির্দেশ করে?',
  },
  options: [
    {
      id: 'a',
      text: {
        en: '85°',
        bn: '৮৫°',
      },
      isCorrect: false,
    },
    {
      id: 'b',
      text: {
        en: '170°',
        bn: '১৭০°',
      },
      isCorrect: false,
    },
    {
      id: 'c',
      text: {
        en: '270°',
        bn: '২৭০°',
      },
      isCorrect: true,
    },
    {
      id: 'd',
      text: {
        en: '360°',
        bn: '৩৬০°',
      },
      isCorrect: false,
    },
  ],
  explanation: {
    en: 'A reflex angle measures greater than 180° but less than 360°. Among the options, only 270° falls in this range.',
    bn: 'একটি প্রবিষ্ট কোণের মাপ ১৮০° থেকে বেশি কিন্তু ৩৬০° থেকে কম। বিকল্পগুলির মধ্যে, শুধুমাত্র ২৭০° এই পরিসরে পড়ে।',
  },
  hints: [
    {
      level: 1,
      text: {
        en: 'Remember: reflex angles are larger than straight angles.',
        bn: 'মনে রাখো: প্রবিষ্ট কোণগুলি সরল কোণের চেয়ে বড়।',
      },
    },
    {
      level: 2,
      text: {
        en: 'Reflex angles measure between 180° and 360°.',
        bn: 'প্রবিষ্ট কোণের মাপ ১৮০° এবং ৩৬০° এর মধ্যে।',
      },
    },
    {
      level: 3,
      text: {
        en: 'Look for the angle greater than 180° but not equal to 360°.',
        bn: '১৮০° থেকে বড় কিন্তু ৩৬০° এর সমান নয় এমন কোণ খুঁজো।',
      },
    },
  ],
  points: 10,
  tags: ['reflex-angles'],
  estimatedTime: 60,
};

// Problem 2: Full rotation angle
const problem2: Problem = {
  id: 'angles_adv_2',
  type: 'number-input',
  difficulty: 2,
  question: {
    en: 'How many degrees are in a full rotation (complete circle)?',
    bn: 'একটি সম্পূর্ণ আবর্তন (সম্পূর্ণ বৃত্ত) এ কত ডিগ্রি আছে?',
  },
  correctAnswer: 360,
  explanation: {
    en: 'A full rotation or complete circle measures 360°. This is why we say there are 360 degrees in a circle.',
    bn: 'একটি সম্পূর্ণ আবর্তন বা সম্পূর্ণ বৃত্তের মাপ ৩৬০°। এই কারণেই আমরা বলি একটি বৃত্তে ৩৬০ ডিগ্রি আছে।',
  },
  hints: [
    {
      level: 1,
      text: {
        en: 'Think about a clock hand making one complete turn.',
        bn: 'একটি ঘড়ির কাঁটা সম্পূর্ণ একবার ঘোরার কথা চিন্তা করো।',
      },
    },
    {
      level: 2,
      text: {
        en: 'A straight angle is 180°. A full rotation is twice that.',
        bn: 'একটি সরল কোণ ১৮০°। একটি সম্পূর্ণ আবর্তন তার দ্বিগুণ।',
      },
    },
    {
      level: 3,
      text: {
        en: 'The answer is 360.',
        bn: 'উত্তর হল ৩৬০।',
      },
    },
  ],
  points: 10,
  tags: ['full-rotation'],
  estimatedTime: 60,
};

// Problem 3: Straight angle identification
const problem3: Problem = {
  id: 'angles_adv_3',
  type: 'mcq',
  difficulty: 2,
  question: {
    en: 'What is the measure of a straight angle?',
    bn: 'একটি সরল কোণের মাপ কত?',
  },
  options: [
    {
      id: 'a',
      text: {
        en: '90°',
        bn: '৯০°',
      },
      isCorrect: false,
    },
    {
      id: 'b',
      text: {
        en: '180°',
        bn: '১৮০°',
      },
      isCorrect: true,
    },
    {
      id: 'c',
      text: {
        en: '270°',
        bn: '২৭০°',
      },
      isCorrect: false,
    },
    {
      id: 'd',
      text: {
        en: '360°',
        bn: '৩৬০°',
      },
      isCorrect: false,
    },
  ],
  explanation: {
    en: 'A straight angle measures exactly 180°. It forms a straight line, which is why it\'s called a "straight" angle.',
    bn: 'একটি সরল কোণের মাপ ঠিক ১৮০°। এটি একটি সরল রেখা তৈরি করে, যে কারণে এটিকে "সরল" কোণ বলা হয়।',
  },
  hints: [
    {
      level: 1,
      text: {
        en: 'Think about what a straight line looks like.',
        bn: 'একটি সরল রেখা কেমন দেখতে তা চিন্তা করো।',
      },
    },
    {
      level: 2,
      text: {
        en: 'It\'s half of a full rotation (360°).',
        bn: 'এটি একটি সম্পূর্ণ আবর্তনের (৩৬০°) অর্ধেক।',
      },
    },
    {
      level: 3,
      text: {
        en: 'A straight angle is 180°.',
        bn: 'একটি সরল কোণ হল ১৮০°।',
      },
    },
  ],
  points: 10,
  tags: ['straight-angles'],
  estimatedTime: 60,  
};

// Problem 4: Complementary angles
const problem4: Problem = {
  id: 'angles_adv_4',
  type: 'number-input',
  difficulty: 3,
  question: {
    en: 'Two angles are complementary. If one angle measures 35°, what is the measure of the other angle?',
    bn: 'দুটি কোণ পরিপূরক। যদি একটি কোণের মাপ ৩৫° হয়, তাহলে অন্য কোণের মাপ কত?',
  },
  correctAnswer: 55,
  explanation: {
    en: 'Complementary angles add up to 90°. If one angle is 35°, the other must be 90° - 35° = 55°.',
    bn: 'পরিপূরক কোণের সমষ্টি ৯০°। যদি একটি কোণ ৩৫° হয়, তাহলে অন্যটি অবশ্যই ৯০° - ৩৫° = ৫৫° হবে।',
  },
  hints: [
    {
      level: 1,
      text: {
        en: 'Complementary angles sum to 90°.',
        bn: 'পরিপূরক কোণের সমষ্টি ৯০°।',
      },
    },
    {
      level: 2,
      text: {
        en: 'Subtract 35° from 90°.',
        bn: '৯০° থেকে ৩৫° বিয়োগ করো।',
      },
    },
    {
      level: 3,
      text: {
        en: '90° - 35° = 55°',
        bn: '৯০° - ৩৫° = ৫৫°',
      },
    },
  ],
  points: 15,
  tags: ['complementary-angles'],
  estimatedTime: 60,
};

// Problem 5: Supplementary angles
const problem5: Problem = {
  id: 'angles_adv_5',
  type: 'number-input',
  difficulty: 3,
  question: {
    en: 'Two angles are supplementary. If one angle measures 115°, what is the measure of the other angle?',
    bn: 'দুটি কোণ সম্পূরক। যদি একটি কোণের মাপ ১১৫° হয়, তাহলে অন্য কোণের মাপ কত?',
  },
  correctAnswer: 65,
  explanation: {
    en: 'Supplementary angles add up to 180°. If one angle is 115°, the other must be 180° - 115° = 65°.',
    bn: 'সম্পূরক কোণের সমষ্টি ১৮০°। যদি একটি কোণ ১১৫° হয়, তাহলে অন্যটি অবশ্যই ১৮০° - ১১৫° = ৬৫° হবে।',
  },
  hints: [
    {
      level: 1,
      text: {
        en: 'Supplementary angles sum to 180°.',
        bn: 'সম্পূরক কোণের সমষ্টি ১৮০°।',
      },
    },
    {
      level: 2,
      text: {
        en: 'Subtract 115° from 180°.',
        bn: '১৮০° থেকে ১১৫° বিয়োগ করো।',
      },
    },
    {
      level: 3,
      text: {
        en: '180° - 115° = 65°',
        bn: '১৮০° - ১১৫° = ৬৫°',
      },
    },
  ],
  points: 15,
  tags: ['supplementary-angles'],
  estimatedTime: 60,
};

// Problem 6: Drag-drop matching angle relationships
const problem6: Problem = {
  id: 'angles_adv_6',
  type: 'drag-drop',
  difficulty: 3,
  question: {
    en: 'Match each angle relationship with its sum:',
    bn: 'প্রতিটি কোণ সম্পর্ককে এর সমষ্টির সাথে মিলাও:',
  },
  draggables: [
    { id: 'drag_90', content: { en: '90°', bn: '৯০°' } },
    { id: 'drag_180', content: { en: '180°', bn: '১৮০°' } },
    { id: 'drag_360', content: { en: '360°', bn: '৩৬০°' } },
  ],
  dropZones: [
    {
      id: 'drop_complementary',
      label: { en: 'Complementary angles', bn: 'পরিপূরক কোণ' },
      accepts: ['drag_90']
    },
    {
      id: 'drop_supplementary',
      label: { en: 'Supplementary angles', bn: 'সম্পূরক কোণ' },
      accepts: ['drag_180']
    },
    {
      id: 'drop_full',
      label: { en: 'Full rotation', bn: 'সম্পূর্ণ আবর্তন' },
      accepts: ['drag_360']
    },
  ],
  solution: {
    drop_complementary: 'drag_90',
    drop_supplementary: 'drag_180',
    drop_full: 'drag_360',
  },
  explanation: {
    en: 'Complementary angles sum to 90°, supplementary angles sum to 180°, and a full rotation is 360°.',
    bn: 'পরিপূরক কোণের সমষ্টি ৯০°, সম্পূরক কোণের সমষ্টি ১৮০°, এবং একটি সম্পূর্ণ আবর্তন ৩৬০°।',
  },
  hints: [
    {
      level: 1,
      text: {
        en: 'Think about which sums you\'ve learned for different angle relationships.',
        bn: 'বিভিন্ন কোণ সম্পর্কের জন্য তুমি কোন সমষ্টি শিখেছ তা চিন্তা করো।',
      },
    },
    {
      level: 2,
      text: {
        en: 'Complementary is smaller than supplementary.',
        bn: 'পরিপূরক, সম্পূরক থেকে ছোট।',
      },
    },
    {
      level: 3,
      text: {
        en: 'Complementary=90°, Supplementary=180°, Full rotation=360°',
        bn: 'পরিপূরক=৯০°, সম্পূরক=১৮০°, সম্পূর্ণ আবর্তন=৩৬০°',
      },
    },
  ],
  points: 15,
  tags: ['angle-relationships'],
  estimatedTime: 90,
};

// Problem 7: Real-world application with reflex angles
const problem7: Problem = {
  id: 'angles_adv_7',
  type: 'mcq',
  difficulty: 4,
  question: {
    en: 'A door opens from fully closed. If the door is opened so wide that it goes past the wall (more than halfway around), what type of angle is formed?',
    bn: 'একটি দরজা সম্পূর্ণ বন্ধ থেকে খোলা হয়। যদি দরজা এত প্রশস্তভাবে খোলা হয় যে এটি দেয়াল অতিক্রম করে (অর্ধেকের বেশি ঘুরে), তাহলে কোন ধরনের কোণ তৈরি হয়?',
  },
  options: [
    {
      id: 'a',
      text: {
        en: 'Acute angle',
        bn: 'সূক্ষ্ম কোণ',
      },
      isCorrect: false,
    },
    {
      id: 'b',
      text: {
        en: 'Obtuse angle',
        bn: 'স্থূল কোণ',
      },
      isCorrect: false,
    },
    {
      id: 'c',
      text: {
        en: 'Reflex angle',
        bn: 'প্রবিষ্ট কোণ',
      },
      isCorrect: true,
    },
    {
      id: 'd',
      text: {
        en: 'Right angle',
        bn: 'সমকোণ',
      },
      isCorrect: false,
    },
  ],
  explanation: {
    en: 'When the door goes past the wall (more than 180° rotation), it forms a reflex angle. Reflex angles are greater than 180° but less than 360°.',
    bn: 'যখন দরজা দেয়াল অতিক্রম করে (১৮০° এর বেশি আবর্তন), এটি একটি প্রবিষ্ট কোণ তৈরি করে। প্রবিষ্ট কোণ ১৮০° এর বেশি কিন্তু ৩৬০° এর কম।',
  },
  hints: [
    {
      level: 1,
      text: {
        en: 'Think about how much the door has rotated.',
        bn: 'দরজা কতটা আবর্তিত হয়েছে তা চিন্তা করো।',
      },
    },
    {
      level: 2,
      text: {
        en: 'More than halfway around means more than 180°.',
        bn: 'অর্ধেকের বেশি ঘোরা মানে ১৮০° এর বেশি।',
      },
    },
    {
      level: 3,
      text: {
        en: 'Angles greater than 180° are reflex angles.',
        bn: '১৮০° এর বেশি কোণগুলি প্রবিষ্ট কোণ।',
      },
    },
  ],
  points: 20,
  tags: ['reflex-angles', 'real-world-applications'],
  estimatedTime: 90,
};

export const anglesProblemSet2: ProblemSet = {
  id: 'set_angles_2',
  unitId: 'unit_angles_basics',
  name: {
    en: 'Practice: Advanced Angle Concepts',
    bn: 'অনুশীলন: উন্নত কোণ ধারণা',
  },
  description: {
    en: 'Practice with reflex angles, full rotations, complementary and supplementary angles',
    bn: 'প্রবিষ্ট কোণ, সম্পূর্ণ আবর্তন, পরিপূরক এবং সম্পূরক কোণ নিয়ে অনুশীলন করো',
  },
  problems: [problem1, problem2, problem3, problem4, problem5, problem6, problem7],
  order: 2,
  minScoreToPass: 75,
};
