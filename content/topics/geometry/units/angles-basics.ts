import { Unit, Lesson } from '@/types/content';
import { anglesProblemSet1 } from '@/content/problems/geometry/angles-set-1';
import { anglesProblemSet2 } from '@/content/problems/geometry/angles-set-2';

const anglesLesson: Lesson = {
  id: 'lesson_angles_comprehensive',
  unitId: 'unit_angles_basics',
  title: {
    en: 'Understanding Angles - Complete Guide',
    bn: 'কোণ বোঝা - সম্পূর্ণ গাইড',
  },
  content: [
    // Introduction
    {
      type: 'text',
      content: {
        en: 'What is an Angle?',
        bn: 'কোণ কি?',
      },
      format: 'heading',
    },
    {
      type: 'text',
      content: {
        en: 'An angle is formed when two rays (or lines) meet at a common point. This common point is called the vertex, and the rays are called the arms or sides of the angle.',
        bn: 'দুটি রশ্মি (বা রেখা) একটি সাধারণ বিন্দুতে মিলিত হলে একটি কোণ তৈরি হয়। এই সাধারণ বিন্দুকে শীর্ষবিন্দু বলা হয় এবং রশ্মিগুলিকে কোণের বাহু বলা হয়।',
      },
    },
    {
      type: 'text',
      content: {
        en: '📐 Think of angles as the amount of turn or rotation between two lines. We measure angles in degrees (°).',
        bn: '📐 কোণকে দুটি রেখার মধ্যে ঘূর্ণন বা মোড়ের পরিমাণ হিসাবে ভাবো। আমরা কোণ ডিগ্রি (°) এ পরিমাপ করি।',
      },
      format: 'callout',
    },
    {
      type: 'text',
      content: {
        en: '🔹 Vertex: The point where two rays meet\n🔹 Arms/Rays: The two lines that form the angle\n🔹 Degree: The unit used to measure angles',
        bn: '🔹 শীর্ষবিন্দু: যেখানে দুটি রশ্মি মিলিত হয়\n🔹 বাহু/রশ্মি: দুটি রেখা যা কোণ তৈরি করে\n🔹 ডিগ্রি: কোণ পরিমাপের একক',
      },
    },

    // Interactive intro
    {
      type: 'angle-visualizer',
      initialAngle: 45,
      minAngle: 0,
      maxAngle: 360,
      label: {
        en: 'Interactive Angle Explorer - Drag to see different angles!',
        bn: 'ইন্টারেক্টিভ কোণ এক্সপ্লোরার - বিভিন্ন কোণ দেখতে টেনে নিয়ে যাও!',
      },
      showDegrees: true,
      showType: true,
      allowInteraction: true,
    },

    // Types of Angles section
    {
      type: 'text',
      content: {
        en: 'Types of Angles',
        bn: 'কোণের প্রকারভেদ',
      },
      format: 'heading',
    },
    {
      type: 'text',
      content: {
        en: 'Angles are classified into different types based on their measurement. Let\'s explore each type in detail!',
        bn: 'কোণগুলি তাদের পরিমাপের উপর ভিত্তি করে বিভিন্ন প্রকারে শ্রেণীবদ্ধ করা হয়। চলো প্রতিটি ধরন বিস্তারিতভাবে দেখি!',
      },
    },

    // 1. Acute Angle
    {
      type: 'text',
      content: {
        en: '1. Acute Angle (সূক্ষ্মকোণ)',
        bn: '১. সূক্ষ্মকোণ (Acute Angle)',
      },
      format: 'heading',
    },
    {
      type: 'text',
      content: {
        en: 'An acute angle is an angle that measures between 0° and 90°. It is smaller than a right angle and looks "sharp" or "pointed".',
        bn: 'সূক্ষ্মকোণ হল এমন একটি কোণ যা ০° এবং ৯০° এর মধ্যে। এটি সমকোণের চেয়ে ছোট এবং "তীক্ষ্ণ" বা "সূচালো" দেখায়।',
      },
    },
    {
      type: 'angle-visualizer',
      initialAngle: 45,
      minAngle: 1,
      maxAngle: 89,
      label: {
        en: 'Acute Angle: Explore angles less than 90°',
        bn: 'সূক্ষ্মকোণ: ৯০° এর কম কোণ দেখো',
      },
      showDegrees: true,
      showType: true,
      allowInteraction: true,
    },
    {
      type: 'text',
      content: {
        en: '✂️ Real-world examples:\n• Scissors when slightly open\n• The tip of a slice of pizza\n• The point of a pencil\n• Bird\'s beak\n• Mountain peaks',
        bn: '✂️ বাস্তব জীবনের উদাহরণ:\n• সামান্য খোলা কাঁচি\n• পিৎজার টুকরোর ডগা\n• পেন্সিলের মাথা\n• পাখির ঠোঁট\n• পর্বতের চূড়া',
      },
      format: 'callout',
    },
    {
      type: 'example',
      title: {
        en: 'Example: Identifying Acute Angles',
        bn: 'উদাহরণ: সূক্ষ্মকোণ চিহ্নিত করা',
      },
      problem: {
        en: 'Which of these angles are acute? 30°, 90°, 45°, 120°, 15°',
        bn: 'এই কোণগুলির মধ্যে কোনগুলি সূক্ষ্মকোণ? ৩০°, ৯০°, ৪৫°, ১২০°, ১৫°',
      },
      solution: {
        en: '30°, 45°, and 15° are acute angles (all less than 90°)',
        bn: '৩০°, ৪৫°, এবং ১৫° হল সূক্ষ্মকোণ (সবগুলি ৯০° এর কম)',
      },
      steps: [
        {
          step: 1,
          description: {
            en: 'Remember: Acute angles are between 0° and 90°',
            bn: 'মনে রাখো: সূক্ষ্মকোণ ০° এবং ৯০° এর মধ্যে',
          },
        },
        {
          step: 2,
          description: {
            en: 'Check each angle: 30° < 90° ✓, 45° < 90° ✓, 15° < 90° ✓',
            bn: 'প্রতিটি কোণ পরীক্ষা করো: ৩০° < ৯০° ✓, ৪৫° < ৯০° ✓, ১৫° < ৯০° ✓',
          },
        },
        {
          step: 3,
          description: {
            en: '90° is a right angle and 120° is obtuse (not acute)',
            bn: '৯০° সমকোণ এবং ১২০° স্থূলকোণ (সূক্ষ্মকোণ নয়)',
          },
        },
      ],
    },

    // 2. Right Angle
    {
      type: 'text',
      content: {
        en: '2. Right Angle (সমকোণ)',
        bn: '২. সমকোণ (Right Angle)',
      },
      format: 'heading',
    },
    {
      type: 'text',
      content: {
        en: 'A right angle is an angle that measures exactly 90°. It forms a perfect "L" shape. Right angles are very important in construction, design, and everyday life!',
        bn: 'সমকোণ হল ঠিক ৯০° পরিমাপের একটি কোণ। এটি একটি নিখুঁত "L" আকৃতি তৈরি করে। নির্মাণ, ডিজাইন এবং দৈনন্দিন জীবনে সমকোণ অত্যন্ত গুরুত্বপূর্ণ!',
      },
    },
    {
      type: 'angle-visualizer',
      initialAngle: 90,
      minAngle: 90,
      maxAngle: 90,
      label: {
        en: 'Right Angle: Exactly 90° - The Perfect Corner!',
        bn: 'সমকোণ: ঠিক ৯০° - নিখুঁত কোণা!',
      },
      showDegrees: true,
      showType: true,
      allowInteraction: false,
    },
    {
      type: 'text',
      content: {
        en: '📐 Special property: A right angle is marked with a small square at the vertex to show it\'s exactly 90°.',
        bn: '📐 বিশেষ বৈশিষ্ট্য: একটি সমকোণ ঠিক ৯০° দেখানোর জন্য শীর্ষবিন্দুতে একটি ছোট বর্গ দিয়ে চিহ্নিত করা হয়।',
      },
      format: 'callout',
    },
    {
      type: 'text',
      content: {
        en: '📚 Real-world examples:\n• Corners of a book or notebook\n• The letter "L"\n• Wall meeting the floor\n• Clock hands at 3:00 or 9:00\n• Square and rectangle corners',
        bn: '📚 বাস্তব জীবনের উদাহরণ:\n• বই বা খাতার কোণা\n• "L" অক্ষর\n• দেয়াল এবং মেঝের সংযোগস্থল\n• ঘড়ির কাঁটা ৩:০০ বা ৯:০০ টায়\n• বর্গ এবং আয়তক্ষেত্রের কোণা',
      },
      format: 'callout',
    },
    {
      type: 'example',
      title: {
        en: 'Example: Finding Right Angles',
        bn: 'উদাহরণ: সমকোণ খুঁজে বের করা',
      },
      problem: {
        en: 'Look around your room. How many right angles can you find?',
        bn: 'তোমার ঘরের চারপাশে তাকাও। তুমি কতগুলি সমকোণ খুঁজে পেতে পারো?',
      },
      solution: {
        en: 'Right angles are everywhere! Doors, windows, tables, books, tiles, and many other objects have right angles.',
        bn: 'সমকোণ সর্বত্র আছে! দরজা, জানালা, টেবিল, বই, টাইলস এবং আরও অনেক বস্তুতে সমকোণ রয়েছে।',
      },
      steps: [
        {
          step: 1,
          description: {
            en: 'Look for corners that form an "L" shape',
            bn: '"L" আকৃতি তৈরি করে এমন কোণা খোঁজো',
          },
        },
        {
          step: 2,
          description: {
            en: 'Check if the corner has a perfect 90° angle',
            bn: 'কোণাটিতে নিখুঁত ৯০° কোণ আছে কিনা পরীক্ষা করো',
          },
        },
        {
          step: 3,
          description: {
            en: 'Most rectangular objects have 4 right angles!',
            bn: 'বেশিরভাগ আয়তাকার বস্তুতে ৪টি সমকোণ থাকে!',
          },
        },
      ],
    },

    // 3. Obtuse Angle
    {
      type: 'text',
      content: {
        en: '3. Obtuse Angle (স্থূলকোণ)',
        bn: '৩. স্থূলকোণ (Obtuse Angle)',
      },
      format: 'heading',
    },
    {
      type: 'text',
      content: {
        en: 'An obtuse angle is an angle that measures between 90° and 180°. It is larger than a right angle and looks "wide" or "open".',
        bn: 'স্থূলকোণ হল এমন একটি কোণ যা ৯০° এবং ১৮০° এর মধ্যে। এটি সমকোণের চেয়ে বড় এবং "প্রশস্ত" বা "খোলা" দেখায়।',
      },
    },
    {
      type: 'angle-visualizer',
      initialAngle: 135,
      minAngle: 91,
      maxAngle: 179,
      label: {
        en: 'Obtuse Angle: Explore angles between 90° and 180°',
        bn: 'স্থূলকোণ: ৯০° এবং ১৮০° এর মধ্যে কোণ দেখো',
      },
      showDegrees: true,
      showType: true,
      allowInteraction: true,
    },
    {
      type: 'text',
      content: {
        en: '🪑 Real-world examples:\n• Reclining chair backrest\n• Open laptop screen\n• Partially opened door\n• Roof of many houses\n• Clock hands at 4:00 or 8:00',
        bn: '🪑 বাস্তব জীবনের উদাহরণ:\n• হেলানো চেয়ারের পিছনের অংশ\n• খোলা ল্যাপটপের পর্দা\n• আংশিকভাবে খোলা দরজা\n• অনেক বাড়ির ছাদ\n• ঘড়ির কাঁটা ৪:০০ বা ৮:০০ টায়',
      },
      format: 'callout',
    },
    {
      type: 'example',
      title: {
        en: 'Example: Identifying Obtuse Angles',
        bn: 'উদাহরণ: স্থূলকোণ চিহ্নিত করা',
      },
      problem: {
        en: 'Which angles are obtuse? 95°, 180°, 150°, 85°, 120°',
        bn: 'কোন কোণগুলি স্থূলকোণ? ৯৫°, ১৮০°, ১৫০°, ৮৫°, ১২০°',
      },
      solution: {
        en: '95°, 150°, and 120° are obtuse angles',
        bn: '৯৫°, ১৫০°, এবং ১২০° হল স্থূলকোণ',
      },
      steps: [
        {
          step: 1,
          description: {
            en: 'Obtuse angles are greater than 90° but less than 180°',
            bn: 'স্থূলকোণ ৯০° এর বেশি কিন্তু ১৮০° এর কম',
          },
        },
        {
          step: 2,
          description: {
            en: 'Check: 95° > 90° ✓, 150° > 90° ✓, 120° > 90° ✓',
            bn: 'পরীক্ষা করো: ৯৫° > ৯০° ✓, ১৫০° > ৯০° ✓, ১২০° > ৯০° ✓',
          },
        },
        {
          step: 3,
          description: {
            en: '85° is acute and 180° is a straight angle',
            bn: '৮৫° সূক্ষ্মকোণ এবং ১৮০° সরলকোণ',
          },
        },
      ],
    },

    // 4. Straight Angle
    {
      type: 'text',
      content: {
        en: '4. Straight Angle (সরলকোণ)',
        bn: '৪. সরলকোণ (Straight Angle)',
      },
      format: 'heading',
    },
    {
      type: 'text',
      content: {
        en: 'A straight angle is an angle that measures exactly 180°. It forms a perfectly straight line! The two arms of the angle point in exactly opposite directions.',
        bn: 'সরলকোণ হল ঠিক ১৮০° পরিমাপের একটি কোণ। এটি একটি সম্পূর্ণ সরলরেখা তৈরি করে! কোণের দুটি বাহু ঠিক বিপরীত দিকে নির্দেশ করে।',
      },
    },
    {
      type: 'angle-visualizer',
      initialAngle: 180,
      minAngle: 180,
      maxAngle: 180,
      label: {
        en: 'Straight Angle: Exactly 180° - A Perfect Line!',
        bn: 'সরলকোণ: ঠিক ১৮০° - একটি নিখুঁত রেখা!',
      },
      showDegrees: true,
      showType: true,
      allowInteraction: false,
    },
    {
      type: 'text',
      content: {
        en: '➖ Real-world examples:\n• A straight line\n• Horizon where sky meets the sea\n• The edge of a ruler\n• A tightrope\n• Railroad tracks (when viewed from above)',
        bn: '➖ বাস্তব জীবনের উদাহরণ:\n• একটি সরলরেখা\n• দিগন্ত যেখানে আকাশ সমুদ্রের সাথে মিলিত হয়\n• স্কেলের প্রান্ত\n• দড়ির উপর হাঁটার দড়ি\n• রেললাইন (উপর থেকে দেখলে)',
      },
      format: 'callout',
    },
    {
      type: 'text',
      content: {
        en: '💡 Fun fact: A straight angle is equal to two right angles (90° + 90° = 180°)!',
        bn: '💡 মজার তথ্য: একটি সরলকোণ দুটি সমকোণের সমান (৯০° + ৯০° = ১৮০°)!',
      },
      format: 'callout',
    },
    {
      type: 'example',
      title: {
        en: 'Example: Understanding Straight Angles',
        bn: 'উদাহরণ: সরলকোণ বোঝা',
      },
      problem: {
        en: 'If two angles on a straight line add up to 180°, and one angle is 70°, what is the other angle?',
        bn: 'যদি একটি সরলরেখায় দুটি কোণ যোগ করলে ১৮০° হয়, এবং একটি কোণ ৭০° হয়, তাহলে অন্য কোণটি কত?',
      },
      solution: {
        en: 'The other angle is 110° (180° - 70° = 110°)',
        bn: 'অন্য কোণটি ১১০° (১৮০° - ৭০° = ১১০°)',
      },
      steps: [
        {
          step: 1,
          description: {
            en: 'Two angles on a straight line = 180°',
            bn: 'একটি সরলরেখায় দুটি কোণ = ১৮০°',
          },
        },
        {
          step: 2,
          description: {
            en: 'We know one angle is 70°',
            bn: 'আমরা জানি একটি কোণ ৭০°',
          },
        },
        {
          step: 3,
          description: {
            en: 'Other angle = 180° - 70° = 110°',
            bn: 'অন্য কোণ = ১৮০° - ৭০° = ১১০°',
          },
        },
      ],
    },

    // 5. Reflex Angle
    {
      type: 'text',
      content: {
        en: '5. Reflex Angle (প্রবৃদ্ধকোণ)',
        bn: '৫. প্রবৃদ্ধকোণ (Reflex Angle)',
      },
      format: 'heading',
    },
    {
      type: 'text',
      content: {
        en: 'A reflex angle is an angle that measures between 180° and 360°. It is larger than a straight angle and measures the "longer way around" between two rays.',
        bn: 'প্রবৃদ্ধকোণ হল এমন একটি কোণ যা ১৮০° এবং ৩৬০° এর মধ্যে। এটি সরলকোণের চেয়ে বড় এবং দুটি রশ্মির মধ্যে "দীর্ঘ পথ" পরিমাপ করে।',
      },
    },
    {
      type: 'angle-visualizer',
      initialAngle: 270,
      minAngle: 181,
      maxAngle: 359,
      label: {
        en: 'Reflex Angle: Explore the larger angle (180° to 360°)',
        bn: 'প্রবৃদ্ধকোণ: বড় কোণ দেখো (১৮০° থেকে ৩৬০°)',
      },
      showDegrees: true,
      showType: true,
      allowInteraction: true,
    },
    {
      type: 'text',
      content: {
        en: '🕒 Real-world examples:\n• Clock hands at 3:00 (reflex angle is 270°)\n• Almost closed scissors\n• Pac-Man\'s mouth (the larger opening)\n• A boomerang\'s inner angle\n• Opening angle of a compass',
        bn: '🕒 বাস্তব জীবনের উদাহরণ:\n• ঘড়ির কাঁটা ৩:০০ টায় (প্রবৃদ্ধকোণ ২৭০°)\n• প্রায় বন্ধ কাঁচি\n• প্যাক-ম্যানের মুখ (বড় খোলা অংশ)\n• বুমেরাং এর ভিতরের কোণ\n• কম্পাসের খোলার কোণ',
      },
      format: 'callout',
    },
    {
      type: 'text',
      content: {
        en: '💡 Key point: Every angle less than 180° has a corresponding reflex angle! They add up to 360°.',
        bn: '💡 মূল বিষয়: ১৮০° এর কম প্রতিটি কোণের একটি সংশ্লিষ্ট প্রবৃদ্ধকোণ আছে! তারা যোগ করলে ৩৬০° হয়।',
      },
      format: 'callout',
    },
    {
      type: 'example',
      title: {
        en: 'Example: Finding Reflex Angles',
        bn: 'উদাহরণ: প্রবৃদ্ধকোণ খুঁজে বের করা',
      },
      problem: {
        en: 'If an acute angle is 60°, what is its corresponding reflex angle?',
        bn: 'যদি একটি সূক্ষ্মকোণ ৬০° হয়, তাহলে এর সংশ্লিষ্ট প্রবৃদ্ধকোণ কত?',
      },
      solution: {
        en: 'The reflex angle is 300° (360° - 60° = 300°)',
        bn: 'প্রবৃদ্ধকোণ হল ৩০০° (৩৬০° - ৬০° = ৩০০°)',
      },
      steps: [
        {
          step: 1,
          description: {
            en: 'An angle and its reflex angle add up to 360°',
            bn: 'একটি কোণ এবং এর প্রবৃদ্ধকোণ যোগ করলে ৩৬০° হয়',
          },
        },
        {
          step: 2,
          description: {
            en: 'The acute angle is 60°',
            bn: 'সূক্ষ্মকোণ হল ৬০°',
          },
        },
        {
          step: 3,
          description: {
            en: 'Reflex angle = 360° - 60° = 300°',
            bn: 'প্রবৃদ্ধকোণ = ৩৬০° - ৬০° = ৩০০°',
          },
        },
      ],
    },

    // 6. Full Rotation
    {
      type: 'text',
      content: {
        en: '6. Full Rotation / Complete Angle (সম্পূর্ণ ঘূর্ণন)',
        bn: '৬. সম্পূর্ণ ঘূর্ণন (Full Rotation)',
      },
      format: 'heading',
    },
    {
      type: 'text',
      content: {
        en: 'A full rotation is an angle that measures exactly 360°. It represents one complete turn around a point, bringing you back to where you started!',
        bn: 'সম্পূর্ণ ঘূর্ণন হল ঠিক ৩৬০° পরিমাপের একটি কোণ। এটি একটি বিন্দুর চারপাশে একটি সম্পূর্ণ ঘূর্ণনকে প্রতিনিধিত্ব করে, যা তোমাকে শুরুর জায়গায় ফিরিয়ে আনে!',
      },
    },
    {
      type: 'angle-visualizer',
      initialAngle: 360,
      minAngle: 360,
      maxAngle: 360,
      label: {
        en: 'Full Rotation: 360° - One Complete Circle!',
        bn: 'সম্পূর্ণ ঘূর্ণন: ৩৬০° - একটি সম্পূর্ণ বৃত্ত!',
      },
      showDegrees: true,
      showType: true,
      allowInteraction: false,
    },
    {
      type: 'text',
      content: {
        en: '⭕ Real-world examples:\n• Complete spin or pirouette in dance\n• Earth\'s rotation in one day\n• Full circle in a roundabout\n• Clock hour hand in 12 hours\n• Complete turn of a wheel',
        bn: '⭕ বাস্তব জীবনের উদাহরণ:\n• নাচে সম্পূর্ণ ঘূর্ণন\n• এক দিনে পৃথিবীর ঘূর্ণন\n• গোলচত্বরে সম্পূর্ণ বৃত্ত\n• ঘড়ির ঘণ্টার কাঁটা ১২ ঘণ্টায়\n• চাকার সম্পূর্ণ ঘূর্ণন',
      },
      format: 'callout',
    },
    {
      type: 'text',
      content: {
        en: '🌟 Amazing fact: There are 360 degrees in a circle because ancient mathematicians divided circles into 360 parts!',
        bn: '🌟 আশ্চর্যজনক তথ্য: একটি বৃত্তে ৩৬০ ডিগ্রি আছে কারণ প্রাচীন গণিতবিদরা বৃত্তকে ৩৬০ ভাগে ভাগ করেছিলেন!',
      },
      format: 'callout',
    },

    // Comparison section
    {
      type: 'text',
      content: {
        en: 'All Angle Types - Side by Side Comparison',
        bn: 'সব ধরনের কোণ - পাশাপাশি তুলনা',
      },
      format: 'heading',
    },
    {
      type: 'text',
      content: {
        en: 'Now let\'s see all the angle types together to understand how they compare to each other!',
        bn: 'এখন চলো সব ধরনের কোণ একসাথে দেখি যাতে বুঝতে পারি তারা একে অপরের সাথে কীভাবে তুলনা করে!',
      },
    },
    {
      type: 'angle-comparison',
      title: {
        en: 'Complete Angle Type Comparison Chart',
        bn: 'সম্পূর্ণ কোণের ধরন তুলনা চার্ট',
      },
      description: {
        en: 'Compare all six types of angles with their ranges, examples, and visual representations',
        bn: 'সব ছয় ধরনের কোণ তাদের সীমা, উদাহরণ এবং ভিজ্যুয়াল উপস্থাপনা সহ তুলনা করো',
      },
    },

    // Practice section
    {
      type: 'text',
      content: {
        en: 'Practice: Measure Angles with a Protractor',
        bn: 'অনুশীলন: প্রট্র্যাক্টর দিয়ে কোণ পরিমাপ করো',
      },
      format: 'heading',
    },
    {
      type: 'text',
      content: {
        en: 'A protractor is a tool used to measure angles. Practice using the interactive protractor below to measure different angles!',
        bn: 'প্রট্র্যাক্টর একটি যন্ত্র যা কোণ পরিমাপ করতে ব্যবহৃত হয়। বিভিন্ন কোণ পরিমাপ করতে নিচের ইন্টারেক্টিভ প্রট্র্যাক্টর ব্যবহার করে অনুশীলন করো!',
      },
    },
    {
      type: 'protractor',
      initialAngle: 45,
      instruction: {
        en: 'Interactive Protractor - Drag to measure angles!',
        bn: 'ইন্টারেক্টিভ প্রট্র্যাক্টর - কোণ পরিমাপ করতে টেনে নিয়ে যাও!',
      },
      allowInteraction: true,
    },

    // Summary
    {
      type: 'text',
      content: {
        en: 'Summary: Remember the Angle Types!',
        bn: 'সারাংশ: কোণের ধরনগুলি মনে রাখো!',
      },
      format: 'heading',
    },
    {
      type: 'text',
      content: {
        en: '📋 Quick Reference:\n\n• Acute Angle: 0° < angle < 90° (Sharp)\n• Right Angle: angle = 90° (Perfect L)\n• Obtuse Angle: 90° < angle < 180° (Wide)\n• Straight Angle: angle = 180° (Line)\n• Reflex Angle: 180° < angle < 360° (Large)\n• Full Rotation: angle = 360° (Complete circle)',
        bn: '📋 দ্রুত রেফারেন্স:\n\n• সূক্ষ্মকোণ: ০° < কোণ < ৯০° (তীক্ষ্ণ)\n• সমকোণ: কোণ = ৯০° (নিখুঁত L)\n• স্থূলকোণ: ৯০° < কোণ < ১৮০° (প্রশস্ত)\n• সরলকোণ: কোণ = ১৮০° (রেখা)\n• প্রবৃদ্ধকোণ: ১৮০° < কোণ < ৩৬০° (বড়)\n• সম্পূর্ণ ঘূর্ণন: কোণ = ৩৬০° (সম্পূর্ণ বৃত্ত)',
      },
      format: 'callout',
    },
    {
      type: 'text',
      content: {
        en: '🎯 You now understand all types of angles! Practice identifying them in everyday objects around you. Angles are everywhere in the world - from the corners of buildings to the hands of clocks!',
        bn: '🎯 তুমি এখন সব ধরনের কোণ বুঝতে পেরেছো! তোমার চারপাশের দৈনন্দিন বস্তুতে সেগুলি চিহ্নিত করার অনুশীলন করো। পৃথিবীতে সর্বত্র কোণ আছে - বিল্ডিংয়ের কোণা থেকে শুরু করে ঘড়ির কাঁটা পর্যন্ত!',
      },
    },
  ],
  order: 1,
  estimatedMinutes: 25,
};

export const anglesUnit: Unit = {
  id: 'unit_angles_basics',
  topicId: 'topic_geometry',
  name: {
    en: 'Understanding Angles',
    bn: 'কোণ বোঝা',
  },
  description: {
    en: 'Learn about all types of angles with interactive visualizations and real-world examples',
    bn: 'ইন্টারেক্টিভ ভিজ্যুয়ালাইজেশন এবং বাস্তব জীবনের উদাহরণ সহ সব ধরনের কোণ সম্পর্কে জানো',
  },
  order: 1,
  lessons: [anglesLesson],
  problemSets: [anglesProblemSet1, anglesProblemSet2],
};
