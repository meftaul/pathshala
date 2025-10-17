import { Problem, ProblemSet } from '@/types/content';

// Problem 1: Identifying line vs ray vs segment
const problem1: Problem = {
  id: 'lines_basic_1',
  type: 'mcq',
  difficulty: 1,
  question: {
    en: 'Which of these extends infinitely in both directions?',
    bn: 'এগুলির মধ্যে কোনটি উভয় দিকে অসীমভাবে প্রসারিত হয়?',
  },
  options: [
    {
      id: 'a',
      text: {
        en: 'Line segment',
        bn: 'রেখাংশ',
      },
    },
    {
      id: 'b',
      text: {
        en: 'Ray',
        bn: 'রশ্মি',
      },
    },
    {
      id: 'c',
      text: {
        en: 'Line',
        bn: 'রেখা',
      },
    },
    {
      id: 'd',
      text: {
        en: 'None of these',
        bn: 'এগুলির কোনটিই নয়',
      },
    },
  ],
  correctAnswer: 'c',
  explanation: {
    en: 'A line extends infinitely in both directions. A ray has one endpoint and extends infinitely in one direction. A segment has two endpoints.',
    bn: 'একটি রেখা উভয় দিকে অসীমভাবে প্রসারিত হয়। একটি রশ্মির একটি প্রান্তবিন্দু আছে এবং একদিকে অসীমভাবে প্রসারিত হয়। একটি রেখাংশের দুটি প্রান্তবিন্দু আছে।',
  },
  hints: [
    {
      level: 1,
      text: {
        en: 'Think about which has no endpoints.',
        bn: 'কোনটির কোন প্রান্তবিন্দু নেই তা চিন্তা করো।',
      },
    },
    {
      level: 2,
      text: {
        en: 'A line has arrows on both ends.',
        bn: 'একটি রেখার উভয় প্রান্তে তীর থাকে।',
      },
    },
    {
      level: 3,
      text: {
        en: 'The answer is "Line".',
        bn: 'উত্তর হল "রেখা"।',
      },
    },
  ],
  points: 10,
};

// Problem 2: Ray identification
const problem2: Problem = {
  id: 'lines_basic_2',
  type: 'mcq',
  difficulty: 1,
  question: {
    en: 'A ray has:',
    bn: 'একটি রশ্মির আছে:',
  },
  options: [
    {
      id: 'a',
      text: {
        en: 'Two endpoints',
        bn: 'দুটি প্রান্তবিন্দু',
      },
    },
    {
      id: 'b',
      text: {
        en: 'One endpoint',
        bn: 'একটি প্রান্তবিন্দু',
      },
    },
    {
      id: 'c',
      text: {
        en: 'No endpoints',
        bn: 'কোন প্রান্তবিন্দু নেই',
      },
    },
    {
      id: 'd',
      text: {
        en: 'Three endpoints',
        bn: 'তিনটি প্রান্তবিন্দু',
      },
    },
  ],
  correctAnswer: 'b',
  explanation: {
    en: 'A ray has exactly one endpoint. It starts at a point and extends infinitely in one direction.',
    bn: 'একটি রশ্মির ঠিক একটি প্রান্তবিন্দু আছে। এটি একটি বিন্দু থেকে শুরু হয় এবং একদিকে অসীমভাবে প্রসারিত হয়।',
  },
  hints: [
    {
      level: 1,
      text: {
        en: 'Think about a ray of sunlight starting from the sun.',
        bn: 'সূর্য থেকে শুরু হওয়া সূর্যালোকের রশ্মির কথা চিন্তা করো।',
      },
    },
    {
      level: 2,
      text: {
        en: 'A ray starts somewhere and goes on forever in one direction.',
        bn: 'একটি রশ্মি কোথাও শুরু হয় এবং একদিকে চিরকালের জন্য চলতে থাকে।',
      },
    },
    {
      level: 3,
      text: {
        en: 'A ray has one endpoint.',
        bn: 'একটি রশ্মির একটি প্রান্তবিন্দু আছে।',
      },
    },
  ],
  points: 10,
};

// Problem 3: Line segment property
const problem3: Problem = {
  id: 'lines_basic_3',
  type: 'mcq',
  difficulty: 1,
  question: {
    en: 'Which of these can be measured for length?',
    bn: 'এগুলির মধ্যে কোনটির দৈর্ঘ্য পরিমাপ করা যায়?',
  },
  options: [
    {
      id: 'a',
      text: {
        en: 'Line',
        bn: 'রেখা',
      },
    },
    {
      id: 'b',
      text: {
        en: 'Ray',
        bn: 'রশ্মি',
      },
    },
    {
      id: 'c',
      text: {
        en: 'Line segment',
        bn: 'রেখাংশ',
      },
    },
    {
      id: 'd',
      text: {
        en: 'All of these',
        bn: 'এগুলির সবগুলি',
      },
    },
  ],
  correctAnswer: 'c',
  explanation: {
    en: 'Only a line segment can be measured for length because it has two endpoints. Lines and rays extend infinitely, so they have no measurable length.',
    bn: 'শুধুমাত্র একটি রেখাংশের দৈর্ঘ্য পরিমাপ করা যায় কারণ এর দুটি প্রান্তবিন্দু আছে। রেখা এবং রশ্মি অসীমভাবে প্রসারিত হয়, তাই তাদের কোন পরিমাপযোগ্য দৈর্ঘ্য নেই।',
  },
  hints: [
    {
      level: 1,
      text: {
        en: 'Think about which one has both a start and an end.',
        bn: 'কোনটির একটি শুরু এবং একটি শেষ উভয়ই আছে তা চিন্তা করো।',
      },
    },
    {
      level: 2,
      text: {
        en: 'You can\'t measure something that goes on forever.',
        bn: 'যা চিরকাল চলতে থাকে তা তুমি পরিমাপ করতে পারো না।',
      },
    },
    {
      level: 3,
      text: {
        en: 'Only a line segment has a finite length.',
        bn: 'শুধুমাত্র একটি রেখাংশের সীমিত দৈর্ঘ্য আছে।',
      },
    },
  ],
  points: 10,
};

// Problem 4: Drag-drop matching line types
const problem4: Problem = {
  id: 'lines_basic_4',
  type: 'drag-drop',
  difficulty: 2,
  question: {
    en: 'Match each line type with its description:',
    bn: 'প্রতিটি রেখার ধরনকে এর বর্ণনার সাথে মিলাও:',
  },
  draggables: [
    {
      id: 'drag_infinite_both',
      content: { en: 'Extends infinitely in both directions', bn: 'উভয় দিকে অসীমভাবে প্রসারিত' }
    },
    {
      id: 'drag_one_endpoint',
      content: { en: 'Has one endpoint, extends infinitely one way', bn: 'একটি প্রান্তবিন্দু আছে, একদিকে অসীমভাবে প্রসারিত' }
    },
    {
      id: 'drag_two_endpoints',
      content: { en: 'Has two endpoints, finite length', bn: 'দুটি প্রান্তবিন্দু আছে, সীমিত দৈর্ঘ্য' }
    },
  ],
  dropZones: [
    {
      id: 'drop_line',
      label: { en: 'Line', bn: 'রেখা' },
      accepts: ['drag_infinite_both']
    },
    {
      id: 'drop_ray',
      label: { en: 'Ray', bn: 'রশ্মি' },
      accepts: ['drag_one_endpoint']
    },
    {
      id: 'drop_segment',
      label: { en: 'Segment', bn: 'রেখাংশ' },
      accepts: ['drag_two_endpoints']
    },
  ],
  solution: {
    drop_line: 'drag_infinite_both',
    drop_ray: 'drag_one_endpoint',
    drop_segment: 'drag_two_endpoints',
  },
  explanation: {
    en: 'Each line type has unique properties: lines have no endpoints, rays have one, and segments have two.',
    bn: 'প্রতিটি রেখার ধরনের অনন্য বৈশিষ্ট্য আছে: রেখার কোন প্রান্তবিন্দু নেই, রশ্মির একটি আছে, এবং রেখাংশের দুটি আছে।',
  },
  hints: [
    {
      level: 1,
      text: {
        en: 'Count the endpoints for each type.',
        bn: 'প্রতিটি ধরনের জন্য প্রান্তবিন্দু গণনা করো।',
      },
    },
    {
      level: 2,
      text: {
        en: 'A segment is the only one that can be measured.',
        bn: 'রেখাংশই একমাত্র যা পরিমাপ করা যায়।',
      },
    },
    {
      level: 3,
      text: {
        en: 'Line=0 endpoints, Ray=1 endpoint, Segment=2 endpoints',
        bn: 'রেখা=০ প্রান্তবিন্দু, রশ্মি=১ প্রান্তবিন্দু, রেখাংশ=২ প্রান্তবিন্দু',
      },
    },
  ],
  points: 15,
};

// Problem 5: Horizontal line identification
const problem5: Problem = {
  id: 'lines_basic_5',
  type: 'mcq',
  difficulty: 1,
  question: {
    en: 'Which real-world object best represents a horizontal line?',
    bn: 'কোন বাস্তব-জগতের বস্তু সবচেয়ে ভালোভাবে একটি অনুভূমিক রেখা প্রতিনিধিত্ব করে?',
  },
  options: [
    {
      id: 'a',
      text: {
        en: 'A flagpole',
        bn: 'একটি পতাকা দণ্ড',
      },
    },
    {
      id: 'b',
      text: {
        en: 'The horizon',
        bn: 'দিগন্ত',
      },
    },
    {
      id: 'c',
      text: {
        en: 'A ladder leaning against a wall',
        bn: 'দেয়ালের সাথে হেলে থাকা একটি মই',
      },
    },
    {
      id: 'd',
      text: {
        en: 'A door frame',
        bn: 'একটি দরজার ফ্রেম',
      },
    },
  ],
  correctAnswer: 'b',
  explanation: {
    en: 'The horizon runs left to right, parallel to the ground, making it a perfect example of a horizontal line.',
    bn: 'দিগন্ত বাম থেকে ডানে চলে, মাটির সমান্তরাল, এটিকে একটি অনুভূমিক রেখার একটি নিখুঁত উদাহরণ করে তোলে।',
  },
  hints: [
    {
      level: 1,
      text: {
        en: 'Horizontal means running left to right.',
        bn: 'অনুভূমিক মানে বাম থেকে ডানে চলা।',
      },
    },
    {
      level: 2,
      text: {
        en: 'Think about what you see when you look at the sky meeting the earth.',
        bn: 'যখন তুমি আকাশ এবং পৃথিবীর মিলন দেখো তখন কী দেখো তা চিন্তা করো।',
      },
    },
    {
      level: 3,
      text: {
        en: 'The horizon is a horizontal line.',
        bn: 'দিগন্ত একটি অনুভূমিক রেখা।',
      },
    },
  ],
  points: 10,
};

// Problem 6: Vertical line identification
const problem6: Problem = {
  id: 'lines_basic_6',
  type: 'mcq',
  difficulty: 1,
  question: {
    en: 'A vertical line runs:',
    bn: 'একটি উল্লম্ব রেখা চলে:',
  },
  options: [
    {
      id: 'a',
      text: {
        en: 'Left to right',
        bn: 'বাম থেকে ডানে',
      },
    },
    {
      id: 'b',
      text: {
        en: 'Up and down',
        bn: 'উপর এবং নিচে',
      },
    },
    {
      id: 'c',
      text: {
        en: 'At an angle',
        bn: 'একটি কোণে',
      },
    },
    {
      id: 'd',
      text: {
        en: 'In a circle',
        bn: 'একটি বৃত্তে',
      },
    },
  ],
  correctAnswer: 'b',
  explanation: {
    en: 'A vertical line runs up and down, perpendicular to the horizon. Examples include walls, flagpoles, and trees.',
    bn: 'একটি উল্লম্ব রেখা উপর এবং নিচে চলে, দিগন্তের লম্ব। উদাহরণগুলির মধ্যে রয়েছে দেয়াল, পতাকা দণ্ড এবং গাছ।',
  },
  hints: [
    {
      level: 1,
      text: {
        en: 'Think about a standing person.',
        bn: 'একজন দাঁড়িয়ে থাকা মানুষের কথা চিন্তা করো।',
      },
    },
    {
      level: 2,
      text: {
        en: 'Vertical is the opposite of horizontal.',
        bn: 'উল্লম্ব হল অনুভূমিকের বিপরীত।',
      },
    },
    {
      level: 3,
      text: {
        en: 'Vertical lines go up and down.',
        bn: 'উল্লম্ব রেখা উপর এবং নিচে যায়।',
      },
    },
  ],
  points: 10,
};

// Problem 7: Parallel lines
const problem7: Problem = {
  id: 'lines_basic_7',
  type: 'mcq',
  difficulty: 2,
  question: {
    en: 'Two parallel lines:',
    bn: 'দুটি সমান্তরাল রেখা:',
  },
  options: [
    {
      id: 'a',
      text: {
        en: 'Will eventually meet',
        bn: 'শেষ পর্যন্ত মিলিত হবে',
      },
    },
    {
      id: 'b',
      text: {
        en: 'Never meet',
        bn: 'কখনও মিলিত হয় না',
      },
    },
    {
      id: 'c',
      text: {
        en: 'Always cross each other',
        bn: 'সবসময় একে অপরকে কাটে',
      },
    },
    {
      id: 'd',
      text: {
        en: 'Form a 90° angle',
        bn: '৯০° কোণ তৈরি করে',
      },
    },
  ],
  correctAnswer: 'b',
  explanation: {
    en: 'Parallel lines are always the same distance apart and never meet, no matter how far they are extended.',
    bn: 'সমান্তরাল রেখা সবসময় একই দূরত্বে থাকে এবং কখনও মিলিত হয় না, তারা যতই প্রসারিত হোক না কেন।',
  },
  hints: [
    {
      level: 1,
      text: {
        en: 'Think about railway tracks.',
        bn: 'রেলপথের কথা চিন্তা করো।',
      },
    },
    {
      level: 2,
      text: {
        en: 'Parallel means staying the same distance apart.',
        bn: 'সমান্তরাল মানে একই দূরত্বে থাকা।',
      },
    },
    {
      level: 3,
      text: {
        en: 'Parallel lines never meet.',
        bn: 'সমান্তরাল রেখা কখনও মিলিত হয় না।',
      },
    },
  ],
  points: 10,
};

// Problem 8: Perpendicular lines
const problem8: Problem = {
  id: 'lines_basic_8',
  type: 'mcq',
  difficulty: 2,
  question: {
    en: 'When two lines are perpendicular, they form what type of angle?',
    bn: 'যখন দুটি রেখা লম্ব হয়, তারা কোন ধরনের কোণ তৈরি করে?',
  },
  options: [
    {
      id: 'a',
      text: {
        en: 'Acute angle',
        bn: 'সূক্ষ্ম কোণ',
      },
    },
    {
      id: 'b',
      text: {
        en: 'Right angle (90°)',
        bn: 'সমকোণ (৯০°)',
      },
    },
    {
      id: 'c',
      text: {
        en: 'Obtuse angle',
        bn: 'স্থূল কোণ',
      },
    },
    {
      id: 'd',
      text: {
        en: 'Straight angle',
        bn: 'সরল কোণ',
      },
    },
  ],
  correctAnswer: 'b',
  explanation: {
    en: 'Perpendicular lines intersect at a right angle (90°). The corner of a book or the intersection of a wall and floor are examples.',
    bn: 'লম্ব রেখা একটি সমকোণে (৯০°) ছেদ করে। একটি বইয়ের কোণা বা একটি দেয়াল এবং মেঝের ছেদ উদাহরণ।',
  },
  hints: [
    {
      level: 1,
      text: {
        en: 'Think about the corner of a square.',
        bn: 'একটি বর্গক্ষেত্রের কোণার কথা চিন্তা করো।',
      },
    },
    {
      level: 2,
      text: {
        en: 'Perpendicular means meeting at a perfect "L" shape.',
        bn: 'লম্ব মানে একটি নিখুঁত "L" আকারে মিলিত হওয়া।',
      },
    },
    {
      level: 3,
      text: {
        en: 'Perpendicular lines form 90° angles.',
        bn: 'লম্ব রেখা ৯০° কোণ তৈরি করে।',
      },
    },
  ],
  points: 10,
};

export const linesProblemSet1: ProblemSet = {
  id: 'set_lines_1',
  unitId: 'unit_lines_basics',
  name: {
    en: 'Practice: Line Basics',
    bn: 'অনুশীলন: রেখার মূল বিষয়',
  },
  description: {
    en: 'Practice identifying lines, rays, segments, and basic line relationships',
    bn: 'রেখা, রশ্মি, রেখাংশ এবং মৌলিক রেখা সম্পর্ক চিহ্নিত করার অনুশীলন করো',
  },
  problems: [problem1, problem2, problem3, problem4, problem5, problem6, problem7, problem8],
  order: 1,
  minScoreToPass: 70,
};
