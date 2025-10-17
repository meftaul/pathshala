import { Unit, Lesson } from '@/types/content';
import { linesProblemSet1 } from '@/content/problems/geometry/lines-set-1';
import { linesProblemSet2 } from '@/content/problems/geometry/lines-set-2';

const linesLesson: Lesson = {
  id: 'lesson_lines_comprehensive',
  unitId: 'unit_lines_basics',
  title: {
    en: 'Understanding Lines - Complete Guide',
    bn: 'রেখা বোঝা - সম্পূর্ণ গাইড',
  },
  content: [
    // Introduction
    {
      type: 'text',
      content: {
        en: 'What is a Line?',
        bn: 'রেখা কি?',
      },
      format: 'heading',
    },
    {
      type: 'text',
      content: {
        en: 'A line is a straight path that extends infinitely in both directions. It has no thickness, no endpoints, and goes on forever! Lines are one of the most fundamental concepts in geometry.',
        bn: 'রেখা হল একটি সরল পথ যা উভয় দিকে অসীমভাবে বিস্তৃত। এর কোন পুরুত্ব নেই, কোন প্রান্তবিন্দু নেই এবং এটি চিরকাল চলতে থাকে! রেখা জ্যামিতির অন্যতম মৌলিক ধারণা।',
      },
    },
    {
      type: 'text',
      content: {
        en: '📏 Key points about lines:\n• Made up of infinite points\n• Has no width or thickness\n• Perfectly straight\n• Extends forever in both directions\n• Denoted by ↔AB (line through points A and B)',
        bn: '📏 রেখা সম্পর্কে মূল বিষয়:\n• অসীম বিন্দু দ্বারা গঠিত\n• কোন প্রস্থ বা পুরুত্ব নেই\n• সম্পূর্ণ সরল\n• উভয় দিকে চিরকাল বিস্তৃত\n• ↔AB দ্বারা চিহ্নিত (A এবং B বিন্দুর মধ্য দিয়ে রেখা)',
      },
      format: 'callout',
    },

    // Types of Lines section
    {
      type: 'text',
      content: {
        en: 'Types of Lines',
        bn: 'রেখার প্রকারভেদ',
      },
      format: 'heading',
    },
    {
      type: 'text',
      content: {
        en: 'There are three main types based on endpoints and extent. Let\'s explore each one in detail!',
        bn: 'প্রান্তবিন্দু এবং বিস্তারের উপর ভিত্তি করে তিনটি প্রধান প্রকার রয়েছে। চলো প্রতিটি বিস্তারিত দেখি!',
      },
    },

    // 1. Line
    {
      type: 'text',
      content: {
        en: '1. Line (রেখা)',
        bn: '১. রেখা (Line)',
      },
      format: 'heading',
    },
    {
      type: 'text',
      content: {
        en: 'A line extends infinitely in both directions. It has no endpoints and continues forever. We use two arrowheads (↔) to show that it extends in both directions.',
        bn: 'একটি রেখা উভয় দিকে অসীমভাবে বিস্তৃত। এর কোন প্রান্তবিন্দু নেই এবং এটি চিরকাল চলতে থাকে। আমরা দুটি তীরচিহ্ন (↔) ব্যবহার করি এটি উভয় দিকে বিস্তৃত দেখানোর জন্য।',
      },
    },
    {
      type: 'line-builder',
      initialType: 'line',
      showGrid: true,
      showMeasurement: false,
      instruction: {
        en: 'Interactive Line - Drag points A and B to see how a line extends infinitely',
        bn: 'ইন্টারেক্টিভ রেখা - A এবং B বিন্দু টেনে দেখো কীভাবে রেখা অসীমভাবে বিস্তৃত হয়',
      },
      allowInteraction: true,
    },

    // 2. Ray
    {
      type: 'text',
      content: {
        en: '2. Ray (রশ্মি)',
        bn: '২. রশ্মি (Ray)',
      },
      format: 'heading',
    },
    {
      type: 'text',
      content: {
        en: 'A ray has one endpoint and extends infinitely in one direction only. Think of it like a ray of sunlight - it starts from the sun (endpoint) and travels infinitely outward!',
        bn: 'একটি রশ্মির একটি প্রান্তবিন্দু আছে এবং শুধুমাত্র একদিকে অসীমভাবে বিস্তৃত। এটিকে সূর্যের রশ্মির মতো ভাবো - এটি সূর্য (প্রান্তবিন্দু) থেকে শুরু হয় এবং বাইরের দিকে অসীমভাবে ভ্রমণ করে!',
      },
    },
    {
      type: 'line-builder',
      initialType: 'ray',
      showGrid: true,
      showMeasurement: false,
      instruction: {
        en: 'Interactive Ray - See how it starts at point A and extends through B forever',
        bn: 'ইন্টারেক্টিভ রশ্মি - দেখো এটি A বিন্দুতে শুরু হয় এবং B এর মাধ্যমে চিরকাল বিস্তৃত হয়',
      },
      allowInteraction: true,
    },
    {
      type: 'text',
      content: {
        en: '☀️ Real-world examples:\n• Sunlight rays\n• Laser beam\n• Flashlight beam\n• Arrow shot from a bow',
        bn: '☀️ বাস্তব জীবনের উদাহরণ:\n• সূর্যের রশ্মি\n• লেজার বিম\n• টর্চের আলো\n• ধনুক থেকে ছোড়া তীর',
      },
      format: 'callout',
    },

    // 3. Line Segment
    {
      type: 'text',
      content: {
        en: '3. Line Segment (রেখাংশ)',
        bn: '৩. রেখাংশ (Line Segment)',
      },
      format: 'heading',
    },
    {
      type: 'text',
      content: {
        en: 'A line segment has two endpoints and a fixed, measurable length. It\'s the part of a line between two points. Most lines we see in everyday life are actually line segments!',
        bn: 'একটি রেখাংশের দুটি প্রান্তবিন্দু আছে এবং একটি নির্দিষ্ট, পরিমাপযোগ্য দৈর্ঘ্য আছে। এটি দুটি বিন্দুর মধ্যবর্তী রেখার অংশ। দৈনন্দিন জীবনে আমরা যে বেশিরভাগ রেখা দেখি তা আসলে রেখাংশ!',
      },
    },
    {
      type: 'line-builder',
      initialType: 'segment',
      showGrid: true,
      showMeasurement: true,
      instruction: {
        en: 'Interactive Line Segment - Drag to change length and see measurement',
        bn: 'ইন্টারেক্টিভ রেখাংশ - দৈর্ঘ্য পরিবর্তন এবং পরিমাপ দেখতে টানো',
      },
      allowInteraction: true,
    },
    {
      type: 'text',
      content: {
        en: '📐 Real-world examples:\n• Edge of a ruler\n• Side of a book\n• Pencil\n• Table edge\n• Straw',
        bn: '📐 বাস্তব জীবনের উদাহরণ:\n• স্কেলের প্রান্ত\n• বইয়ের পাশ\n• পেন্সিল\n• টেবিলের প্রান্ত\n• স্ট্র',
      },
      format: 'callout',
    },

    {
      type: 'example',
      title: {
        en: 'Example: Comparing Line Types',
        bn: 'উদাহরণ: রেখার ধরন তুলনা করা',
      },
      problem: {
        en: 'Which type is each of these? (a) A pencil (b) A laser pointer beam (c) An imaginary line extending forever',
        bn: 'এগুলির প্রতিটি কোন ধরনের? (ক) একটি পেন্সিল (খ) একটি লেজার পয়েন্টার বিম (গ) চিরকালের জন্য বিস্তৃত একটি কাল্পনিক রেখা',
      },
      solution: {
        en: '(a) Line segment - has two endpoints\n(b) Ray - starts at laser, extends infinitely\n(c) Line - extends infinitely both directions',
        bn: '(ক) রেখাংশ - দুটি প্রান্তবিন্দু আছে\n(খ) রশ্মি - লেজার থেকে শুরু হয়, অসীমভাবে বিস্তৃত\n(গ) রেখা - উভয় দিকে অসীমভাবে বিস্তৃত',
      },
    },

    // Line Orientations section
    {
      type: 'text',
      content: {
        en: 'Line Orientations',
        bn: 'রেখার অভিমুখ',
      },
      format: 'heading',
    },
    {
      type: 'text',
      content: {
        en: 'Lines can be positioned in different directions or orientations. There are three main orientations!',
        bn: 'রেখাগুলি বিভিন্ন দিক বা অভিমুখে স্থাপন করা যেতে পারে। তিনটি প্রধান অভিমুখ রয়েছে!',
      },
    },
    {
      type: 'line-orientation',
      orientation: 'all',
      showSlope: true,
      showEquation: false,
      allowInteraction: true,
      instruction: {
        en: 'Explore Different Line Orientations - Click tabs to see each type',
        bn: 'বিভিন্ন রেখা অভিমুখ অন্বেষণ করো - প্রতিটি ধরন দেখতে ট্যাবে ক্লিক করো',
      },
    },

    // Line Relationships section
    {
      type: 'text',
      content: {
        en: 'Line Relationships',
        bn: 'রেখার সম্পর্ক',
      },
      format: 'heading',
    },
    {
      type: 'text',
      content: {
        en: 'When we have two or more lines, they can relate to each other in different ways. Understanding these relationships is crucial in geometry!',
        bn: 'যখন আমাদের দুটি বা ততোধিক রেখা থাকে, তারা বিভিন্নভাবে একে অপরের সাথে সম্পর্কিত হতে পারে। জ্যামিতিতে এই সম্পর্কগুলি বোঝা অত্যন্ত গুরুত্বপূর্ণ!',
      },
    },

    // Parallel Lines
    {
      type: 'text',
      content: {
        en: 'Parallel Lines (সমান্তরাল রেখা)',
        bn: 'সমান্তরাল রেখা (Parallel Lines)',
      },
      format: 'heading',
    },
    {
      type: 'text',
      content: {
        en: 'Parallel lines are lines in the same plane that never meet, no matter how far they extend. They are always the same distance apart.',
        bn: 'সমান্তরাল রেখা হল একই সমতলে রেখা যা কখনও মিলিত হয় না, তারা যতদূরই বিস্তৃত হোক না কেন। তারা সর্বদা একই দূরত্বে থাকে।',
      },
    },
    {
      type: 'line-relationship',
      relationship: 'parallel',
      allowInteraction: false,
      showAngle: false,
      title: {
        en: 'Parallel Lines Visualization',
        bn: 'সমান্তরাল রেখা ভিজ্যুয়ালাইজেশন',
      },
      description: {
        en: 'Notice how these lines never meet and stay the same distance apart',
        bn: 'লক্ষ্য করো এই রেখাগুলি কখনও মিলিত হয় না এবং একই দূরত্বে থাকে',
      },
    },
    {
      type: 'text',
      content: {
        en: '🛤️ Real-world examples:\n• Railway tracks\n• Opposite edges of a ruler\n• Lines on notebook paper\n• Lanes on a highway\n• Zebra crossing stripes',
        bn: '🛤️ বাস্তব জীবনের উদাহরণ:\n• রেললাইন\n• স্কেলের বিপরীত প্রান্ত\n• খাতার কাগজের লাইন\n• মহাসড়কের লেন\n• জেব্রা ক্রসিং এর ডোরা',
      },
      format: 'callout',
    },

    // Perpendicular Lines
    {
      type: 'text',
      content: {
        en: 'Perpendicular Lines (লম্ব রেখা)',
        bn: 'লম্ব রেখা (Perpendicular Lines)',
      },
      format: 'heading',
    },
    {
      type: 'text',
      content: {
        en: 'Perpendicular lines are lines that intersect at exactly 90 degrees (a right angle). They form a perfect "+" or "T" shape at their intersection.',
        bn: 'লম্ব রেখা হল রেখা যা ঠিক ৯০ ডিগ্রিতে (একটি সমকোণে) ছেদ করে। তারা তাদের ছেদবিন্দুতে একটি নিখুঁত "+" বা "T" আকৃতি তৈরি করে।',
      },
    },
    {
      type: 'line-relationship',
      relationship: 'perpendicular',
      allowInteraction: false,
      showAngle: true,
      title: {
        en: 'Perpendicular Lines Visualization',
        bn: 'লম্ব রেখা ভিজ্যুয়ালাইজেশন',
      },
      description: {
        en: 'See the 90° angle formed where the lines meet',
        bn: '৯০° কোণ দেখো যেখানে রেখাগুলি মিলিত হয়',
      },
    },
    {
      type: 'text',
      content: {
        en: '➕ Real-world examples:\n• Corner of a book (pages and spine)\n• The + symbol\n• Street intersections at 90°\n• Wall meeting the floor\n• Goal posts in football',
        bn: '➕ বাস্তব জীবনের উদাহরণ:\n• বইয়ের কোণা (পাতা এবং মেরুদণ্ড)\n• + চিহ্ন\n• ৯০° তে রাস্তার ছেদ\n• দেয়াল এবং মেঝের সংযোগ\n• ফুটবলের গোল পোস্ট',
      },
      format: 'callout',
    },

    // Intersecting Lines
    {
      type: 'text',
      content: {
        en: 'Intersecting Lines (ছেদক রেখা)',
        bn: 'ছেদক রেখা (Intersecting Lines)',
      },
      format: 'heading',
    },
    {
      type: 'text',
      content: {
        en: 'Intersecting lines are lines that cross each other at any angle (not necessarily 90°). They meet at exactly one point called the point of intersection.',
        bn: 'ছেদক রেখা হল রেখা যা একে অপরকে যেকোনো কোণে ছেদ করে (অগত্যা ৯০° নয়)। তারা ঠিক একটি বিন্দুতে মিলিত হয় যাকে ছেদবিন্দু বলা হয়।',
      },
    },
    {
      type: 'line-relationship',
      relationship: 'intersecting',
      allowInteraction: true,
      showAngle: true,
      title: {
        en: 'Intersecting Lines Visualization - Adjust the Angle',
        bn: 'ছেদক রেখা ভিজ্যুয়ালাইজেশন - কোণ সামঞ্জস্য করো',
      },
      description: {
        en: 'Use the slider to see how lines can intersect at different angles',
        bn: 'স্লাইডার ব্যবহার করো দেখতে কীভাবে রেখাগুলি বিভিন্ন কোণে ছেদ করতে পারে',
      },
    },
    {
      type: 'text',
      content: {
        en: '✂️ Real-world examples:\n• Scissors blades\n• The X symbol\n• Road intersections at angles\n• Crossed pencils\n• Branches of a tree',
        bn: '✂️ বাস্তব জীবনের উদাহরণ:\n• কাঁচির ফলক\n• X চিহ্ন\n• কোণে রাস্তার ছেদ\n• ক্রস করা পেন্সিল\n• গাছের ডাল',
      },
      format: 'callout',
    },

    {
      type: 'example',
      title: {
        en: 'Example: Identifying Line Relationships',
        bn: 'উদাহরণ: রেখার সম্পর্ক চিহ্নিত করা',
      },
      problem: {
        en: 'Look at a sheet of graph paper. What kinds of line relationships can you see?',
        bn: 'গ্রাফ পেপারের একটি শিট দেখো। তুমি কী ধরনের রেখার সম্পর্ক দেখতে পাও?',
      },
      solution: {
        en: 'Graph paper has:\n• Parallel lines (horizontal lines parallel to each other)\n• Parallel lines (vertical lines parallel to each other)\n• Perpendicular lines (horizontal and vertical lines meet at 90°)',
        bn: 'গ্রাফ পেপারে আছে:\n• সমান্তরাল রেখা (অনুভূমিক রেখাগুলি একে অপরের সমান্তরাল)\n• সমান্তরাল রেখা (উল্লম্ব রেখাগুলি একে অপরের সমান্তরাল)\n• লম্ব রেখা (অনুভূমিক এবং উল্লম্ব রেখাগুলি ৯০° তে মিলিত হয়)',
      },
      steps: [
        {
          step: 1,
          description: {
            en: 'All horizontal lines are parallel to each other',
            bn: 'সমস্ত অনুভূমিক রেখা একে অপরের সমান্তরাল',
          },
        },
        {
          step: 2,
          description: {
            en: 'All vertical lines are parallel to each other',
            bn: 'সমস্ত উল্লম্ব রেখা একে অপরের সমান্তরাল',
          },
        },
        {
          step: 3,
          description: {
            en: 'Every horizontal line is perpendicular to every vertical line',
            bn: 'প্রতিটি অনুভূমিক রেখা প্রতিটি উল্লম্ব রেখার লম্ব',
          },
        },
      ],
    },

    // Comparison section
    {
      type: 'text',
      content: {
        en: 'Complete Line Relationships Comparison',
        bn: 'সম্পূর্ণ রেখার সম্পর্ক তুলনা',
      },
      format: 'heading',
    },
    {
      type: 'line-relationship',
      relationship: 'all',
      allowInteraction: true,
      showAngle: true,
      title: {
        en: 'All Line Relationships - Interactive Comparison',
        bn: 'সব রেখার সম্পর্ক - ইন্টারেক্টিভ তুলনা',
      },
      description: {
        en: 'Compare all three types of line relationships side by side',
        bn: 'তিনটি ধরনের রেখার সম্পর্ক পাশাপাশি তুলনা করো',
      },
    },

    // Special Properties
    {
      type: 'text',
      content: {
        en: 'Special Properties and Concepts',
        bn: 'বিশেষ বৈশিষ্ট্য এবং ধারণা',
      },
      format: 'heading',
    },
    {
      type: 'text',
      content: {
        en: '📌 Important line concepts:\n\n**Collinear Points**: Three or more points that lie on the same line.\n\n**Midpoint**: The point that divides a line segment into two equal parts.\n\n**Distance**: For a line segment, the distance between its two endpoints.\n\n**Slope**: A measure of how steep a line is (rise over run).',
        bn: '📌 গুরুত্বপূর্ণ রেখা ধারণা:\n\n**সমরেখ বিন্দু**: তিন বা ততোধিক বিন্দু যা একই রেখায় অবস্থিত।\n\n**মধ্যবিন্দু**: যে বিন্দু একটি রেখাংশকে দুটি সমান অংশে বিভক্ত করে।\n\n**দূরত্ব**: একটি রেখাংশের জন্য, এর দুটি প্রান্তবিন্দুর মধ্যে দূরত্ব।\n\n**ঢাল**: একটি রেখা কতটা খাড়া তার পরিমাপ (উত্থান ভাগ ভ্রমণ)।',
      },
      format: 'callout',
    },

    {
      type: 'example',
      title: {
        en: 'Example: Finding the Midpoint',
        bn: 'উদাহরণ: মধ্যবিন্দু খুঁজে বের করা',
      },
      problem: {
        en: 'Point A is at position 2 on a number line, and point B is at position 8. Where is the midpoint of segment AB?',
        bn: 'A বিন্দু একটি সংখ্যা রেখায় ২ অবস্থানে আছে, এবং B বিন্দু ৮ অবস্থানে আছে। AB রেখাংশের মধ্যবিন্দু কোথায়?',
      },
      solution: {
        en: 'The midpoint is at position 5',
        bn: 'মধ্যবিন্দু ৫ অবস্থানে আছে',
      },
      steps: [
        {
          step: 1,
          description: {
            en: 'Formula: Midpoint = (A + B) ÷ 2',
            bn: 'সূত্র: মধ্যবিন্দু = (A + B) ÷ ২',
          },
        },
        {
          step: 2,
          description: {
            en: 'Midpoint = (2 + 8) ÷ 2 = 10 ÷ 2',
            bn: 'মধ্যবিন্দু = (২ + ৮) ÷ ২ = ১০ ÷ ২',
          },
        },
        {
          step: 3,
          description: {
            en: 'Midpoint = 5 (exactly halfway between 2 and 8)',
            bn: 'মধ্যবিন্দু = ৫ (ঠিক ২ এবং ৮ এর মাঝখানে)',
          },
        },
      ],
    },

    // Summary
    {
      type: 'text',
      content: {
        en: 'Summary: Remember the Line Concepts!',
        bn: 'সারাংশ: রেখার ধারণাগুলি মনে রাখো!',
      },
      format: 'heading',
    },
    {
      type: 'text',
      content: {
        en: '📋 Quick Reference:\n\n**Types by Extent:**\n• Line: Extends forever both ways (↔AB)\n• Ray: One endpoint, extends one way (→AB)\n• Segment: Two endpoints, fixed length (AB̅)\n\n**Orientations:**\n• Horizontal: Left to right (slope = 0)\n• Vertical: Up and down (slope = undefined)\n• Diagonal: Slanted (slope = variable)\n\n**Relationships:**\n• Parallel: Never meet (∥)\n• Perpendicular: Meet at 90° (⊥)\n• Intersecting: Cross at any angle',
        bn: '📋 দ্রুত রেফারেন্স:\n\n**বিস্তারের ভিত্তিতে প্রকার:**\n• রেখা: উভয় দিকে চিরকাল বিস্তৃত (↔AB)\n• রশ্মি: একটি প্রান্তবিন্দু, একদিকে বিস্তৃত (→AB)\n• রেখাংশ: দুটি প্রান্তবিন্দু, নির্দিষ্ট দৈর্ঘ্য (AB̅)\n\n**অভিমুখ:**\n• অনুভূমিক: বাম থেকে ডানে (ঢাল = ০)\n• উল্লম্ব: উপর এবং নিচে (ঢাল = অসংজ্ঞায়িত)\n• কর্ণ: তির্যক (ঢাল = পরিবর্তনশীল)\n\n**সম্পর্ক:**\n• সমান্তরাল: কখনও মিলিত হয় না (∥)\n• লম্ব: ৯০° তে মিলিত হয় (⊥)\n• ছেদক: যেকোনো কোণে ক্রস করে',
      },
      format: 'callout',
    },
    {
      type: 'text',
      content: {
        en: '🎯 You now understand all about lines! Lines are everywhere around you - in buildings, roads, objects, and nature. Practice identifying different types of lines and their relationships in your daily life!',
        bn: '🎯 তুমি এখন রেখা সম্পর্কে সব বুঝতে পেরেছো! রেখা তোমার চারপাশে সর্বত্র আছে - বিল্ডিং, রাস্তা, বস্তু এবং প্রকৃতিতে। তোমার দৈনন্দিন জীবনে বিভিন্ন ধরনের রেখা এবং তাদের সম্পর্ক চিহ্নিত করার অনুশীলন করো!',
      },
    },
  ],
  order: 1,
  estimatedMinutes: 30,
};

export const linesUnit: Unit = {
  id: 'unit_lines_basics',
  topicId: 'topic_geometry',
  name: {
    en: 'Understanding Lines',
    bn: 'রেখা বোঝা',
  },
  description: {
    en: 'Master lines, rays, segments, and line relationships with interactive visualizations',
    bn: 'ইন্টারেক্টিভ ভিজ্যুয়ালাইজেশনের মাধ্যমে রেখা, রশ্মি, রেখাংশ এবং রেখার সম্পর্ক আয়ত্ত করো',
  },
  order: 2,
  lessons: [linesLesson],
  problemSets: [linesProblemSet1, linesProblemSet2],
};
