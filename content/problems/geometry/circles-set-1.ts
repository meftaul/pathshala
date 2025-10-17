import { Problem, ProblemSet } from '@/types/content';

// Problem 1: MCQ - Identifying circle parts
const problem1: Problem = {
  type: 'mcq',
  id: 'prob_circles_parts_001',
  difficulty: 1,
  question: {
    en: 'What is the name of the middle point of a circle?',
    bn: 'বৃত্তের মাঝের বিন্দুর নাম কি?'
  },
  options: [
    {
      id: 'opt_a',
      text: { en: 'Radius', bn: 'ব্যাসার্ধ' },
      isCorrect: false
    },
    {
      id: 'opt_b',
      text: { en: 'Center', bn: 'কেন্দ্র' },
      isCorrect: true
    },
    {
      id: 'opt_c',
      text: { en: 'Diameter', bn: 'ব্যাস' },
      isCorrect: false
    },
    {
      id: 'opt_d',
      text: { en: 'Edge', bn: 'প্রান্ত' },
      isCorrect: false
    }
  ],
  explanation: {
    en: 'The center is the exact middle point of a circle. All points on the circle are the same distance from the center.',
    bn: 'কেন্দ্র হলো বৃত্তের ঠিক মাঝের বিন্দু। বৃত্তের সব বিন্দু কেন্দ্র থেকে সমান দূরত্বে থাকে।'
  },
  hints: [
    {
      level: 1,
      text: {
        en: 'Think about the exact middle of the circle',
        bn: 'বৃত্তের ঠিক মাঝখানের কথা ভাবো'
      }
    },
    {
      level: 2,
      text: {
        en: 'It\'s the point where you could balance the circle perfectly',
        bn: 'এটি সেই বিন্দু যেখানে তুমি বৃত্তটিকে নিখুঁতভাবে ভারসাম্য করতে পারো'
      }
    },
    {
      level: 3,
      text: {
        en: 'The answer is Center',
        bn: 'উত্তর হলো কেন্দ্র'
      }
    }
  ],
  tags: ['circles', 'parts', 'identification', 'basic'],
  estimatedTime: 30,
  points: 10
};

// Problem 2: Number Input - Diameter calculation
const problem2: Problem = {
  type: 'number-input',
  id: 'prob_circles_diameter_001',
  difficulty: 1,
  question: {
    en: 'If a circle has a radius of 8 units, what is its diameter?',
    bn: 'যদি একটি বৃত্তের ব্যাসার্ধ ৮ একক হয়, তবে এর ব্যাস কত?'
  },
  correctAnswer: 16,
  tolerance: 0,
  explanation: {
    en: 'The diameter is always 2 times the radius. So, 8 × 2 = 16 units.',
    bn: 'ব্যাস সবসময় ব্যাসার্ধের ২ গুণ হয়। সুতরাং, ৮ × ২ = ১৬ একক।'
  },
  hints: [
    {
      level: 1,
      text: {
        en: 'Remember the secret formula: Diameter = 2 × Radius',
        bn: 'গোপন সূত্রটি মনে রাখো: ব্যাস = ২ × ব্যাসার্ধ'
      }
    },
    {
      level: 2,
      text: {
        en: 'Multiply 8 by 2',
        bn: '৮ কে ২ দিয়ে গুণ করো'
      }
    },
    {
      level: 3,
      text: {
        en: '8 × 2 = 16',
        bn: '৮ × ২ = ১৬'
      }
    }
  ],
  tags: ['circles', 'diameter', 'radius', 'calculation', 'basic'],
  estimatedTime: 45,
  points: 15
};

// Problem 3: Number Input - Radius calculation
const problem3: Problem = {
  type: 'number-input',
  id: 'prob_circles_radius_001',
  difficulty: 2,
  question: {
    en: 'If a circle has a diameter of 20 units, what is its radius?',
    bn: 'যদি একটি বৃত্তের ব্যাস ২০ একক হয়, তবে এর ব্যাসার্ধ কত?'
  },
  correctAnswer: 10,
  tolerance: 0,
  explanation: {
    en: 'The radius is half of the diameter. So, 20 ÷ 2 = 10 units.',
    bn: 'ব্যাসার্ধ হলো ব্যাসের অর্ধেক। সুতরাং, ২০ ÷ ২ = ১০ একক।'
  },
  hints: [
    {
      level: 1,
      text: {
        en: 'If diameter = 2 × radius, then radius = diameter ÷ 2',
        bn: 'যদি ব্যাস = ২ × ব্যাসার্ধ, তবে ব্যাসার্ধ = ব্যাস ÷ ২'
      }
    },
    {
      level: 2,
      text: {
        en: 'Divide 20 by 2',
        bn: '২০ কে ২ দিয়ে ভাগ করো'
      }
    },
    {
      level: 3,
      text: {
        en: '20 ÷ 2 = 10',
        bn: '২০ ÷ ২ = ১০'
      }
    }
  ],
  tags: ['circles', 'radius', 'diameter', 'calculation', 'reverse'],
  estimatedTime: 45,
  points: 15
};

// Problem 4: MCQ - Real world circles
const problem4: Problem = {
  type: 'mcq',
  id: 'prob_circles_realworld_001',
  difficulty: 1,
  question: {
    en: 'Which of these things is NOT shaped like a circle?',
    bn: 'এই জিনিসগুলির মধ্যে কোনটি বৃত্ত আকৃতির নয়?'
  },
  options: [
    {
      id: 'opt_a',
      text: { en: 'A wheel', bn: 'একটি চাকা' },
      isCorrect: false
    },
    {
      id: 'opt_b',
      text: { en: 'A coin', bn: 'একটি মুদ্রা' },
      isCorrect: false
    },
    {
      id: 'opt_c',
      text: { en: 'A square box', bn: 'একটি বর্গাকার বাক্স' },
      isCorrect: true
    },
    {
      id: 'opt_d',
      text: { en: 'A pizza', bn: 'একটি পিজ্জা' },
      isCorrect: false
    }
  ],
  explanation: {
    en: 'A square box has straight sides and corners, while circles have no corners or straight sides. Wheels, coins, and pizzas are all circular.',
    bn: 'একটি বর্গাকার বাক্সের সোজা দিক এবং কোণ আছে, যেখানে বৃত্তের কোনো কোণ বা সোজা দিক নেই। চাকা, মুদ্রা এবং পিজ্জা সবই গোলাকার।'
  },
  hints: [
    {
      level: 1,
      text: {
        en: 'Think about shapes with corners vs shapes without corners',
        bn: 'কোণযুক্ত আকার বনাম কোণবিহীন আকারের কথা ভাবো'
      }
    },
    {
      level: 2,
      text: {
        en: 'Which one has straight sides and sharp corners?',
        bn: 'কোনটির সোজা দিক এবং তীক্ষ্ণ কোণ আছে?'
      }
    },
    {
      level: 3,
      text: {
        en: 'A square box has 4 corners and 4 straight sides',
        bn: 'একটি বর্গাকার বাক্সের ৪টি কোণ এবং ৪টি সোজা দিক আছে'
      }
    }
  ],
  tags: ['circles', 'real-world', 'identification', 'shapes'],
  estimatedTime: 30,
  points: 10
};

// Problem 5: Drag and Drop - Circle parts matching
const problem5: Problem = {
  type: 'drag-drop',
  id: 'prob_circles_matching_001',
  difficulty: 2,
  question: {
    en: 'Match each term with its correct description',
    bn: 'প্রতিটি পদকে তার সঠিক বর্ণনার সাথে মেলাও'
  },
  draggables: [
    {
      id: 'drag_center',
      content: { en: 'Center', bn: 'কেন্দ্র' }
    },
    {
      id: 'drag_radius',
      content: { en: 'Radius', bn: 'ব্যাসার্ধ' }
    },
    {
      id: 'drag_diameter',
      content: { en: 'Diameter', bn: 'ব্যাস' }
    }
  ],
  dropZones: [
    {
      id: 'drop_1',
      label: { 
        en: 'The middle point of the circle', 
        bn: 'বৃত্তের মাঝের বিন্দু' 
      },
      accepts: ['drag_center', 'drag_radius', 'drag_diameter']
    },
    {
      id: 'drop_2',
      label: { 
        en: 'Distance from center to edge', 
        bn: 'কেন্দ্র থেকে প্রান্ত পর্যন্ত দূরত্ব' 
      },
      accepts: ['drag_center', 'drag_radius', 'drag_diameter']
    },
    {
      id: 'drop_3',
      label: { 
        en: 'Distance across through the center', 
        bn: 'কেন্দ্র দিয়ে একদিক থেকে অন্যদিকের দূরত্ব' 
      },
      accepts: ['drag_center', 'drag_radius', 'drag_diameter']
    }
  ],
  solution: {
    drop_1: 'drag_center',
    drop_2: 'drag_radius',
    drop_3: 'drag_diameter'
  },
  explanation: {
    en: 'Great job! The center is the middle point, the radius goes from center to edge, and the diameter goes across through the center.',
    bn: 'দারুণ কাজ! কেন্দ্র হলো মাঝের বিন্দু, ব্যাসার্ধ কেন্দ্র থেকে প্রান্ত পর্যন্ত যায়, এবং ব্যাস কেন্দ্র দিয়ে একদিক থেকে অন্যদিকে যায়।'
  },
  hints: [
    {
      level: 1,
      text: {
        en: 'Think about what each term means in relation to the circle',
        bn: 'প্রতিটি পদ বৃত্তের সাথে কী অর্থ তার কথা ভাবো'
      }
    },
    {
      level: 2,
      text: {
        en: 'The center is a point, radius is a distance, diameter is the longest distance',
        bn: 'কেন্দ্র একটি বিন্দু, ব্যাসার্ধ একটি দূরত্ব, ব্যাস হলো দীর্ঘতম দূরত্ব'
      }
    }
  ],
  tags: ['circles', 'parts', 'matching', 'vocabulary'],
  estimatedTime: 60,
  points: 20
};

// Problem 6: Number Input - Multiple calculations
const problem6: Problem = {
  type: 'number-input',
  id: 'prob_circles_multiple_001',
  difficulty: 2,
  question: {
    en: 'A circle has a radius of 7 units. What is its diameter?',
    bn: 'একটি বৃত্তের ব্যাসার্ধ ৭ একক। এর ব্যাস কত?'
  },
  correctAnswer: 14,
  tolerance: 0,
  explanation: {
    en: 'Using the formula Diameter = 2 × Radius: 2 × 7 = 14 units.',
    bn: 'সূত্র ব্যাস = ২ × ব্যাসার্ধ ব্যবহার করে: ২ × ৭ = ১৪ একক।'
  },
  hints: [
    {
      level: 1,
      text: {
        en: 'Use the formula: Diameter = 2 × Radius',
        bn: 'সূত্রটি ব্যবহার করো: ব্যাস = ২ × ব্যাসার্ধ'
      }
    },
    {
      level: 2,
      text: {
        en: 'Calculate: 2 × 7',
        bn: 'হিসাব করো: ২ × ৭'
      }
    },
    {
      level: 3,
      text: {
        en: '2 × 7 = 14',
        bn: '২ × ৭ = ১৪'
      }
    }
  ],
  tags: ['circles', 'diameter', 'radius', 'calculation', 'practice'],
  estimatedTime: 40,
  points: 15
};

// Problem 7: MCQ - Circle properties
const problem7: Problem = {
  type: 'mcq',
  id: 'prob_circles_properties_001',
  difficulty: 2,
  question: {
    en: 'What is special about all points on a circle?',
    bn: 'একটি বৃত্তের সব বিন্দু সম্পর্কে কি বিশেষ?',
  },
  options: [
    {
      id: 'opt_a',
      text: { en: 'They are all the same distance from the center', bn: 'এগুলি সব কেন্দ্র থেকে সমান দূরত্বে আছে' },
      isCorrect: true
    },
    {
      id: 'opt_b',
      text: { en: 'They are all different distances from the center', bn: 'এগুলি সব কেন্দ্র থেকে ভিন্ন দূরত্বে আছে' },
      isCorrect: false
    },
    {
      id: 'opt_c',
      text: { en: 'They form a square shape', bn: 'এগুলি একটি বর্গ আকৃতি তৈরি করে' },
      isCorrect: false
    },
    {
      id: 'opt_d',
      text: { en: 'They are all corners', bn: 'এগুলি সব কোণ' },
      isCorrect: false
    }
  ],
  explanation: {
    en: 'This is what makes a circle special! Every point on the edge of a circle is exactly the same distance from the center. This distance is called the radius.',
    bn: 'এটিই বৃত্তকে বিশেষ করে তোলে! বৃত্তের প্রান্তের প্রতিটি বিন্দু কেন্দ্র থেকে ঠিক একই দূরত্বে থাকে। এই দূরত্বকে ব্যাসার্ধ বলা হয়।'
  },
  hints: [
    {
      level: 1,
      text: {
        en: 'Think about the definition of a circle',
        bn: 'বৃত্তের সংজ্ঞার কথা ভাবো'
      }
    },
    {
      level: 2,
      text: {
        en: 'What does the radius measure?',
        bn: 'ব্যাসার্ধ কি পরিমাপ করে?'
      }
    },
    {
      level: 3,
      text: {
        en: 'The radius is the distance from center to any point on the circle',
        bn: 'ব্যাসার্ধ হলো কেন্দ্র থেকে বৃত্তের যেকোনো বিন্দু পর্যন্ত দূরত্ব'
      }
    }
  ],
  tags: ['circles', 'properties', 'definition', 'concept'],
  estimatedTime: 35,
  points: 12
};

// Export the problem set
export const circlesProblemSet1: ProblemSet = {
  id: 'pset_circles_basics',
  unitId: 'unit_circles_basics',
  name: {
    en: 'Circle Basics Practice',
    bn: 'বৃত্তের ভিত্তি অনুশীলন'
  },
  description: {
    en: 'Test your knowledge about circles, their parts, and properties!',
    bn: 'বৃত্ত, এর অংশ এবং বৈশিষ্ট্য সম্পর্কে তোমার জ্ঞান পরীক্ষা করো!'
  },
  problems: [problem1, problem2, problem3, problem4, problem5, problem6, problem7],
  order: 1,
  minScoreToPass: 70
};

// Also export individual problems for ContentLoader
export const circlesProblems: Problem[] = [problem1, problem2, problem3, problem4, problem5, problem6, problem7];