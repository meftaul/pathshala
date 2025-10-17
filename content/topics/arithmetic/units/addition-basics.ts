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
      type: 'text',
      content: {
        en: 'We use the plus sign (+) to show addition. For example: 2 + 3 = 5',
        bn: 'যোগ দেখাতে আমরা যোগ চিহ্ন (+) ব্যবহার করি। উদাহরণস্বরূপ: ২ + ৩ = ৫',
      },
    },
    {
      type: 'text',
      content: {
        en: '🍎 Imagine you have 2 apples, and your friend gives you 3 more apples. Now you have 5 apples in total!',
        bn: '🍎 কল্পনা করো তোমার ২টি আপেল আছে, এবং তোমার বন্ধু তোমাকে আরও ৩টি আপেল দেয়। এখন তোমার মোট ৫টি আপেল আছে!',
      },
      format: 'callout',
    },
    {
      type: 'example',
      title: {
        en: 'Example 1: Adding Candies',
        bn: 'উদাহরণ ১: মিঠাই যোগ করা',
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
            en: 'Start with 4 candies 🍬🍬🍬🍬',
            bn: '৪টি মিঠাই দিয়ে শুরু করো 🍬🍬🍬🍬',
          },
        },
        {
          step: 2,
          description: {
            en: 'Add 2 more candies 🍬🍬',
            bn: 'আরও ২টি মিঠাই যোগ করো 🍬🍬',
          },
        },
        {
          step: 3,
          description: {
            en: 'Count all candies: 1, 2, 3, 4, 5, 6 = 6 candies total!',
            bn: 'সব মিঠাই গুনো: ১, ২, ৩, ৪, ৫, ৬ = মোট ৬টি মিঠাই!',
          },
        },
      ],
    },
    {
      type: 'text',
      content: {
        en: '✨ Tip: You can use your fingers to help count!',
        bn: '✨ টিপ: গণনায় সাহায্যের জন্য তুমি তোমার আঙুল ব্যবহার করতে পারো!',
      },
      format: 'callout',
    },
    {
      type: 'example',
      title: {
        en: 'Example 2: Number Line',
        bn: 'উদাহরণ ২: সংখ্যা রেখা',
      },
      problem: {
        en: 'Calculate 3 + 4 using a number line',
        bn: 'সংখ্যা রেখা ব্যবহার করে ৩ + ৪ হিসাব করো',
      },
      solution: {
        en: '3 + 4 = 7',
        bn: '৩ + ৪ = ৭',
      },
      steps: [
        {
          step: 1,
          description: {
            en: 'Start at number 3 on the number line',
            bn: 'সংখ্যা রেখায় সংখ্যা ৩ এ শুরু করো',
          },
        },
        {
          step: 2,
          description: {
            en: 'Move 4 steps forward: 4, 5, 6, 7',
            bn: '৪টি ধাপ সামনে যাও: ৪, ৫, ৬, ৭',
          },
        },
        {
          step: 3,
          description: {
            en: 'You land on 7! So 3 + 4 = 7',
            bn: 'তুমি ৭ এ পৌঁছেছো! তাই ৩ + ৪ = ৭',
          },
        },
      ],
    },
    {
      type: 'text',
      content: {
        en: "Now it's your turn! Let's practice adding numbers together. 🚀",
        bn: 'এখন তোমার পালা! চলো একসাথে সংখ্যা যোগ করার অনুশীলন করি। 🚀',
      },
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
    en: 'Learn to add single-digit numbers (1-10)',
    bn: 'এক-সংখ্যার সংখ্যা (১-১০) যোগ করতে শেখো',
  },
  order: 1,
  lessons: [introLesson],
  problemSets: [additionProblemSet1],
};
