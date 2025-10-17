import { Unit, Lesson } from '@/types/content';
import { circlesProblemSet1 } from '@/content/problems/geometry/circles-set-1';

const circlesLesson1: Lesson = {
  id: 'lesson_circles_introduction',
  unitId: 'unit_circles_basics',
  title: {
    en: 'Welcome to the World of Circles!',
    bn: 'বৃত্তের জগতে স্বাগতম!',
  },
  content: [
    // Introduction
    {
      type: 'text',
      content: {
        en: 'What is a Circle?',
        bn: 'বৃত্ত কি?',
      },
      format: 'heading',
    },
    {
      type: 'text',
      content: {
        en: 'A circle is a perfectly round shape where every point on the edge is the same distance from the center. Think of it like a wheel, a coin, or a pizza!',
        bn: 'বৃত্ত হলো একটি সম্পূর্ণ গোলাকার আকৃতি যেখানে প্রান্তের প্রতিটি বিন্দু কেন্দ্র থেকে সমান দূরত্বে থাকে। এটিকে একটি চাকা, একটি মুদ্রা বা একটি পিজ্জার মতো ভাবো!',
      },
    },
    {
      type: 'text',
      content: {
        en: '🔵 Circles are everywhere in nature and around us!\n🔵 They have no corners or edges\n🔵 They are perfectly symmetrical',
        bn: '🔵 বৃত্ত প্রকৃতি এবং আমাদের চারপাশে সর্বত্র আছে!\n🔵 এদের কোনো কোণ বা প্রান্ত নেই\n🔵 এগুলি সম্পূর্ণরূপে প্রতিসম',
      },
      format: 'callout',
    },

    // Interactive Circle Explorer
    {
      type: 'circle',
      initialRadius: 80,
      minRadius: 30,
      maxRadius: 120,
      showCenter: true,
      showRadius: true,
      showDiameter: true,
      showCircumference: false,
      allowInteraction: true,
      instruction: {
        en: '🎮 Explore the circle! Move your mouse over different parts and adjust the radius using the slider.',
        bn: '🎮 বৃত্তটি অন্বেষণ করো! বিভিন্ন অংশের উপর মাউস নাও এবং স্লাইডার ব্যবহার করে ব্যাসার্ধ সামঞ্জস্য করো।'
      },
    },

    // Parts of a Circle
    {
      type: 'text',
      content: {
        en: 'Parts of a Circle',
        bn: 'বৃত্তের অংশসমূহ',
      },
      format: 'heading',
    },
    {
      type: 'text',
      content: {
        en: 'Every circle has three important parts:',
        bn: 'প্রতিটি বৃত্তের তিনটি গুরুত্বপূর্ণ অংশ আছে:',
      },
    },
    {
      type: 'example',
      title: {
        en: 'The Three Parts of a Circle',
        bn: 'বৃত্তের তিনটি অংশ',
      },
      problem: {
        en: 'Can you identify the center, radius, and diameter?',
        bn: 'তুমি কি কেন্দ্র, ব্যাসার্ধ এবং ব্যাস চিহ্নিত করতে পারো?',
      },
      solution: {
        en: 'The center is the middle point, the radius goes from center to edge, and the diameter goes across through the center!',
        bn: 'কেন্দ্র হলো মাঝের বিন্দু, ব্যাসার্ধ কেন্দ্র থেকে প্রান্ত পর্যন্ত যায়, এবং ব্যাস কেন্দ্র দিয়ে একদিক থেকে অন্যদিকে যায়!',
      },
      steps: [
        {
          step: 1,
          description: {
            en: '🎯 Center: The exact middle point of the circle',
            bn: '🎯 কেন্দ্র: বৃত্তের ঠিক মাঝের বিন্দু'
          }
        },
        {
          step: 2,
          description: {
            en: '📏 Radius: Distance from center to any point on the edge',
            bn: '📏 ব্যাসার্ধ: কেন্দ্র থেকে প্রান্তের যেকোনো বিন্দু পর্যন্ত দূরত্ব'
          }
        },
        {
          step: 3,
          description: {
            en: '📐 Diameter: Distance across the circle through the center (always 2 × radius)',
            bn: '📐 ব্যাস: কেন্দ্র দিয়ে বৃত্তের একদিক থেকে অন্যদিকের দূরত্ব (সবসময় ২ × ব্যাসার্ধ)'
          }
        }
      ]
    },

    // Interactive demonstration with all parts
    {
      type: 'circle',
      initialRadius: 60,
      minRadius: 40,
      maxRadius: 100,
      showCenter: true,
      showRadius: true,
      showDiameter: true,
      showCircumference: true,
      allowInteraction: true,
      instruction: {
        en: '🔍 Now see all parts together! Notice how the diameter is always exactly twice the radius.',
        bn: '🔍 এখন সব অংশ একসাথে দেখো! লক্ষ্য করো কিভাবে ব্যাস সবসময় ব্যাসার্ধের ঠিক দ্বিগুণ হয়।'
      },
    },

    // Real-world examples
    {
      type: 'text',
      content: {
        en: 'Circles in Real Life!',
        bn: 'বাস্তব জীবনে বৃত্ত!',
      },
      format: 'heading',
    },
    {
      type: 'text',
      content: {
        en: 'Can you think of things that are shaped like circles?',
        bn: 'তুমি কি বৃত্ত আকৃতির জিনিসগুলির কথা ভাবতে পারো?',
      },
    },
    {
      type: 'text',
      content: {
        en: '🎨 Clock faces\n⚽ Balls and sports equipment\n🍕 Pizza and cookies\n🎯 Targets and bullseyes\n🛞 Wheels and gears\n🌙 Full moon\n☕ Coffee cups and plates',
        bn: '🎨 ঘড়ির মুখ\n⚽ বল এবং ক্রীড়া সরঞ্জাম\n🍕 পিজ্জা এবং কুকিজ\n🎯 লক্ষ্যবস্তু এবং বুলসাই\n🛞 চাকা এবং গিয়ার\n🌙 পূর্ণিমা\n☕ কফি কাপ এবং প্লেট'
      },
      format: 'callout',
    },

    // Fun activity
    {
      type: 'text',
      content: {
        en: '🎮 Fun Activity: Circle Hunt!',
        bn: '🎮 মজার কার্যকলাপ: বৃত্ত খোঁজ!',
      },
      format: 'heading',
    },
    {
      type: 'text',
      content: {
        en: 'Go on a circle hunt around your home or classroom! How many circular things can you find? Take pictures or draw them!',
        bn: 'তোমার বাড়ি বা ক্লাসরুমের চারপাশে বৃত্ত খোঁজার খেলা খেলো! তুমি কতগুলি গোলাকার জিনিস খুঁজে পাও? ছবি তোলো বা এগুলি আঁকো!',
      },
      format: 'callout',
    },
  ],
  order: 1,
  estimatedMinutes: 25,
};

const circlesLesson2: Lesson = {
  id: 'lesson_circles_properties',
  unitId: 'unit_circles_basics',
  title: {
    en: 'Amazing Circle Properties',
    bn: 'আশ্চর্যজনক বৃত্তের বৈশিষ্ট্য',
  },
  content: [
    {
      type: 'text',
      content: {
        en: 'The Magic of Circles',
        bn: 'বৃত্তের জাদু',
      },
      format: 'heading',
    },
    {
      type: 'text',
      content: {
        en: 'Circles have some amazing mathematical properties that make them special!',
        bn: 'বৃত্তের কিছু আশ্চর্যজনক গাণিতিক বৈশিষ্ট্য আছে যা এগুলিকে বিশেষ করে তোলে!',
      },
    },

    // Diameter and Radius Relationship
    {
      type: 'text',
      content: {
        en: 'The Diameter-Radius Secret',
        bn: 'ব্যাস-ব্যাসার্ধের গোপন কথা',
      },
      format: 'heading',
    },
    {
      type: 'text',
      content: {
        en: 'Here\'s a secret about circles: The diameter is ALWAYS exactly 2 times the radius!',
        bn: 'বৃত্ত সম্পর্কে একটি গোপন কথা: ব্যাস সবসময় ঠিক ব্যাসার্ধের ২ গুণ!',
      },
    },
    {
      type: 'example',
      title: {
        en: 'Diameter = 2 × Radius',
        bn: 'ব্যাস = ২ × ব্যাসার্ধ',
      },
      problem: {
        en: 'If a circle has a radius of 5 units, what is its diameter?',
        bn: 'যদি একটি বৃত্তের ব্যাসার্ধ ৫ একক হয়, তবে এর ব্যাস কত?',
      },
      solution: {
        en: 'Diameter = 2 × 5 = 10 units!',
        bn: 'ব্যাস = ২ × ৫ = ১০ একক!',
      },
      steps: [
        {
          step: 1,
          description: {
            en: 'Start with the radius: 5 units',
            bn: 'ব্যাসার্ধ দিয়ে শুরু করো: ৫ একক'
          }
        },
        {
          step: 2,
          description: {
            en: 'Multiply by 2: 5 × 2',
            bn: '২ দিয়ে গুণ করো: ৫ × ২'
          }
        },
        {
          step: 3,
          description: {
            en: 'Get the diameter: 10 units',
            bn: 'ব্যাস পাও: ১০ একক'
          }
        }
      ]
    },

    // Interactive practice
    {
      type: 'circle',
      initialRadius: 50,
      minRadius: 20,
      maxRadius: 80,
      showCenter: true,
      showRadius: true,
      showDiameter: true,
      showCircumference: false,
      allowInteraction: true,
      instruction: {
        en: '🧮 Try different radius values and see how the diameter changes! Can you see the pattern?',
        bn: '🧮 বিভিন্ন ব্যাসার্ধের মান চেষ্টা করো এবং দেখো ব্যাস কিভাবে পরিবর্তিত হয়! তুমি কি প্যাটার্নটি দেখতে পাচ্ছো?'
      },
    },

    // Introduction to Circumference
    {
      type: 'text',
      content: {
        en: 'Meet the Circumference!',
        bn: 'পরিধির সাথে পরিচয়!',
      },
      format: 'heading',
    },
    {
      type: 'text',
      content: {
        en: 'The circumference is the distance all the way around the circle. It\'s like the perimeter of the circle!',
        bn: 'পরিধি হলো বৃত্তের চারপাশে সম্পূর্ণ দূরত্ব। এটি বৃত্তের পরিসীমার মতো!',
      },
    },
    {
      type: 'text',
      content: {
        en: '🔄 Think of it as: If you could walk all the way around the edge of a circle, the distance you would walk is the circumference!',
        bn: '🔄 এটিকে এইভাবে ভাবো: যদি তুমি একটি বৃত্তের প্রান্ত বরাবর হেঁটে যেতে পারো, তবে তুমি যে দূরত্ব হেঁটে যাবে সেটিই হলো পরিধি!',
      },
      format: 'callout',
    },

    // Visual demonstration with circumference
    {
      type: 'circle',
      initialRadius: 70,
      minRadius: 30,
      maxRadius: 100,
      showCenter: true,
      showRadius: true,
      showDiameter: true,
      showCircumference: true,
      allowInteraction: true,
      instruction: {
        en: '📏 See the circumference value! Notice how it gets bigger as the circle gets bigger.',
        bn: '📏 পরিধির মান দেখো! লক্ষ্য করো কিভাবে বৃত্ত বড় হওয়ার সাথে সাথে এটি বড় হয়।'
      },
    },

    // Fun facts about circles
    {
      type: 'text',
      content: {
        en: 'Amazing Circle Facts!',
        bn: 'আশ্চর্যজনক বৃত্তের তথ্য!',
      },
      format: 'heading',
    },
    {
      type: 'text',
      content: {
        en: '🌍 The Earth is almost a sphere (a 3D circle)!\n🎯 A circle has 360 degrees\n🎨 Artists use circles to create perfect curves\n⭕ The wheel was one of the most important inventions\n🍕 Pizza is always cut from the center for equal slices!',
        bn: '🌍 পৃথিবী প্রায় একটি গোলক (ত্রিমাত্রিক বৃত্ত)!\n🎯 একটি বৃত্তের ৩৬০ ডিগ্রি আছে\n🎨 শিল্পীরা নিখুঁত বক্ররেখা তৈরি করতে বৃত্ত ব্যবহার করে\n⭕ চাকা ছিল সবচেয়ে গুরুত্বপূর্ণ আবিষ্কারগুলির একটি\n🍕 সমান স্লাইসের জন্য পিজ্জা সবসময় কেন্দ্র থেকে কাটা হয়!'
      },
      format: 'callout',
    },

    // Practice challenge
    {
      type: 'text',
      content: {
        en: '🧠 Challenge Time!',
        bn: '🧠 চ্যালেঞ্জের সময়!',
      },
      format: 'heading',
    },
    {
      type: 'text',
      content: {
        en: 'If a circle has a diameter of 12 units, what is its radius? (Hint: Remember the secret formula!)',
        bn: 'যদি একটি বৃত্তের ব্যাস ১২ একক হয়, তবে এর ব্যাসার্ধ কত? (ইঙ্গিত: গোপন সূত্রটি মনে রাখো!)',
      },
      format: 'callout',
    },
  ],
  order: 2,
  estimatedMinutes: 20,
};

export const circlesUnit: Unit = {
  id: 'unit_circles_basics',
  topicId: 'topic_geometry',
  name: {
    en: 'Circle Basics for Kids',
    bn: 'বাচ্চাদের জন্য বৃত্তের ভিত্তি',
  },
  description: {
    en: 'Learn about circles, their parts, and properties through fun interactive activities!',
    bn: 'মজাদার ইন্টারেক্টিভ কার্যকলাপের মাধ্যমে বৃত্ত, এর অংশ এবং বৈশিষ্ট্যগুলি শিখো!',
  },
  order: 3,
  lessons: [circlesLesson1, circlesLesson2],
  problemSets: [circlesProblemSet1],
};