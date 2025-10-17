import { ProblemSet, MCQProblem, NumberInputProblem, DragDropProblem } from '@/types/content';

const problem1: MCQProblem = {
  id: 'prob_add_001',
  type: 'mcq',
  difficulty: 1,
  question: {
    en: 'What is 2 + 3?',
    bn: '২ + ৩ = কত?',
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
    bn: 'যখন তুমি ২ এবং ৩ যোগ করো, তুমি ৫ পাও। তোমার আঙুলে গণনা করার চেষ্টা করো!',
  },
  hints: [
    {
      level: 1,
      text: {
        en: 'Try using your fingers to count.',
        bn: 'গণনা করতে তোমার আঙুল ব্যবহার করার চেষ্টা করো।',
      },
    },
    {
      level: 2,
      text: {
        en: 'Start at 2, then count up 3 more: 3, 4, 5',
        bn: '২ থেকে শুরু করো, তারপর আরও ৩টি গুনো: ৩, ৪, ৫',
      },
    },
  ],
  feedback: {
    correct: {
      en: 'Perfect! 2 + 3 = 5 🎉',
      bn: 'চমৎকার! ২ + ৩ = ৫ 🎉',
    },
    incorrect: {
      opt_a: {
        en: 'Not quite. Did you subtract instead of add?',
        bn: 'ঠিক না। তুমি কি যোগ করার পরিবর্তে বিয়োগ করেছ?',
      },
      opt_c: {
        en: 'Close! You added one too many.',
        bn: 'কাছাকাছি! তুমি একটি অতিরিক্ত যোগ করেছ।',
      },
      opt_d: {
        en: "That's too high. Try counting again carefully.",
        bn: 'এটা খুব বেশি। আবার সাবধানে গণনা করার চেষ্টা করো।',
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
    bn: 'হিসাব করো: ৪ + ৫ = ?',
  },
  correctAnswer: 9,
  explanation: {
    en: '4 plus 5 equals 9. Great job! 🌟',
    bn: '৪ যোগ ৫ সমান ৯। দুর্দান্ত! 🌟',
  },
  hints: [
    {
      level: 1,
      text: {
        en: 'Think about counting upwards from 4.',
        bn: '৪ থেকে উপরের দিকে গণনা করার কথা ভাবো।',
      },
    },
    {
      level: 2,
      text: {
        en: '4 + 5 = 4, 5, 6, 7, 8, 9',
        bn: '৪ + ৫ = ৪, ৫, ৬, ৭, ৮, ৯',
      },
    },
  ],
  tags: ['single-digit', 'basic-addition'],
  estimatedTime: 30,
  points: 10,
};

const problem3: MCQProblem = {
  id: 'prob_add_003',
  type: 'mcq',
  difficulty: 1,
  question: {
    en: 'If you have 3 apples and get 2 more, how many apples do you have?',
    bn: 'যদি তোমার ৩টি আপেল থাকে এবং আরও ২টি পাও, তোমার কতটি আপেল আছে?',
  },
  options: [
    {
      id: 'opt_a',
      text: { en: '3', bn: '৩' },
      isCorrect: false,
    },
    {
      id: 'opt_b',
      text: { en: '4', bn: '৪' },
      isCorrect: false,
    },
    {
      id: 'opt_c',
      text: { en: '5', bn: '৫' },
      isCorrect: true,
    },
    {
      id: 'opt_d',
      text: { en: '6', bn: '৬' },
      isCorrect: false,
    },
  ],
  explanation: {
    en: '3 apples + 2 apples = 5 apples! 🍎🍎🍎🍎🍎',
    bn: '৩টি আপেল + ২টি আপেল = ৫টি আপেল! 🍎🍎🍎🍎🍎',
  },
  hints: [
    {
      level: 1,
      text: {
        en: 'Count the apples: start with 3, add 2 more.',
        bn: 'আপেল গুনো: ৩ দিয়ে শুরু করো, আরও ২টি যোগ করো।',
      },
    },
  ],
  tags: ['word-problem', 'basic-addition'],
  estimatedTime: 45,
  points: 15,
};

const problem4: DragDropProblem = {
  id: 'prob_add_004',
  type: 'drag-drop',
  difficulty: 2,
  question: {
    en: 'Match each addition problem with its answer',
    bn: 'প্রতিটি যোগ সমস্যাকে তার উত্তরের সাথে মিলাও',
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
    en: 'Great job matching! 1+1=2, 2+2=4, 3+3=6 ✨',
    bn: 'মিলানো দুর্দান্ত! ১+১=২, ২+২=৪, ৩+৩=৬ ✨',
  },
  hints: [
    {
      level: 1,
      text: {
        en: 'Try the smallest numbers first.',
        bn: 'প্রথমে ছোট সংখ্যাগুলি চেষ্টা করো।',
      },
    },
  ],
  tags: ['matching', 'doubles'],
  estimatedTime: 60,
  points: 15,
};

const problem5: NumberInputProblem = {
  id: 'prob_add_005',
  type: 'number-input',
  difficulty: 1,
  question: {
    en: 'What is 6 + 3?',
    bn: '৬ + ৩ = কত?',
  },
  correctAnswer: 9,
  explanation: {
    en: '6 + 3 = 9. Excellent work! 🎯',
    bn: '৬ + ৩ = ৯। চমৎকার কাজ! 🎯',
  },
  hints: [
    {
      level: 1,
      text: {
        en: 'Start from 6 and count up 3 more numbers.',
        bn: '৬ থেকে শুরু করো এবং আরও ৩টি সংখ্যা গুনো।',
      },
    },
  ],
  tags: ['single-digit', 'basic-addition'],
  estimatedTime: 30,
  points: 10,
};

const problem6: DragDropProblem = {
  id: 'prob_add_006',
  type: 'drag-drop',
  difficulty: 2,
  question: {
    en: 'Match the sums with the correct answers',
    bn: 'যোগফলগুলিকে সঠিক উত্তরের সাথে মিলাও',
  },
  draggables: [
    { id: 'drag_a', content: { en: '4 + 4', bn: '৪ + ৪' } },
    { id: 'drag_b', content: { en: '5 + 5', bn: '৫ + ৫' } },
    { id: 'drag_c', content: { en: '3 + 4', bn: '৩ + ৪' } },
  ],
  dropZones: [
    { id: 'drop_7', label: { en: '7', bn: '৭' }, accepts: ['drag_c'] },
    { id: 'drop_8', label: { en: '8', bn: '৮' }, accepts: ['drag_a'] },
    { id: 'drop_10', label: { en: '10', bn: '১০' }, accepts: ['drag_b'] },
  ],
  solution: {
    drop_7: 'drag_c',
    drop_8: 'drag_a',
    drop_10: 'drag_b',
  },
  explanation: {
    en: 'Perfect! 4+4=8, 5+5=10, 3+4=7 🏆',
    bn: 'নিখুঁত! ৪+৪=৮, ৫+৫=১০, ৩+৪=৭ 🏆',
  },
  hints: [
    {
      level: 1,
      text: {
        en: 'Work on the doubles first (same numbers added together).',
        bn: 'প্রথমে দ্বিগুণগুলিতে কাজ করো (একই সংখ্যা একসাথে যোগ করা)।',
      },
    },
  ],
  tags: ['matching', 'mixed-addition'],
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
    bn: 'এক-সংখ্যার সংখ্যা যোগ করার অনুশীলন করো',
  },
  problems: [problem1, problem2, problem3, problem4, problem5, problem6],
  order: 1,
  minScoreToPass: 70,
};
