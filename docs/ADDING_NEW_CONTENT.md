# Adding New Content to Pathshala

This guide explains how to add new educational content (topics, units, lessons, and problems) to the Pathshala learning platform.

## Content Architecture Overview

```
content/
├── topics/
│   └── [topic-category]/
│       ├── [topic-name].ts          # Topic definition
│       └── units/
│           └── [unit-name].ts       # Unit with lesson content
└── problems/
    └── sets/
        └── [problem-set-name].ts    # Collection of problems
```

## Step-by-Step Guide

### Step 1: Create a New Topic

Topics are the highest level of content organization (e.g., Addition, Subtraction, Geometry).

1. **Create a topic category folder** (if it doesn't exist):
```bash
mkdir -p content/topics/[category-name]
mkdir -p content/topics/[category-name]/units
```

Example:
```bash
mkdir -p content/topics/arithmetic
mkdir -p content/topics/arithmetic/units
```

2. **Create the topic file**: `content/topics/[category]/[topic-name].ts`

```typescript
import { Topic } from '@/types/content';
import { myUnit1 } from './units/unit-1';
import { myUnit2 } from './units/unit-2';

export const myTopic: Topic = {
  id: 'topic_my_topic',           // Unique ID with topic_ prefix
  name: {
    en: 'My Topic Name',          // English name
    bn: 'আমার বিষয়ের নাম'        // Bangla name
  },
  description: {
    en: 'Learn about this amazing topic',
    bn: 'এই আশ্চর্যজনক বিষয় সম্পর্কে জানুন'
  },
  icon: 'Calculator',             // Lucide icon name (see https://lucide.dev)
  color: 'primary',               // DaisyUI color: primary, secondary, accent, etc.
  prerequisites: [],              // Array of topic IDs (e.g., ['topic_addition'])
  units: [myUnit1, myUnit2],      // Array of units
  order: 1,                       // Display order (lower = first)
  estimatedHours: 2,              // Estimated completion time
};
```

**Available Icon Names**: Visit [Lucide Icons](https://lucide.dev) and use the exact component name (e.g., Plus, Minus, Calculator, Brain, BookOpen)

**Available Colors**: `primary`, `secondary`, `accent`, `info`, `success`, `warning`, `error`

### Step 2: Create a Unit

Units are sections within a topic (e.g., "Basic Addition", "Adding with Carrying").

1. **Create a unit file**: `content/topics/[category]/units/[unit-name].ts`

```typescript
import { Unit } from '@/types/content';

export const myUnit1: Unit = {
  id: 'unit_my_unit_1',                // Unique ID with unit_ prefix
  topicId: 'topic_my_topic',           // Parent topic ID
  name: {
    en: 'Unit 1: Introduction',
    bn: 'ইউনিট ১: পরিচিতি'
  },
  description: {
    en: 'Learn the basics',
    bn: 'মূল বিষয়গুলি শিখুন'
  },
  order: 1,                            // Display order within topic
  lessons: [myLesson],                 // Array of lessons
  problemSets: [myProblemSet],         // Array of problem sets
};
```

### Step 3: Create a Lesson

Lessons contain the instructional content using various content blocks.

Add the lesson object to your unit file:

```typescript
import { Lesson } from '@/types/content';

const myLesson: Lesson = {
  id: 'lesson_my_lesson',              // Unique ID with lesson_ prefix
  unitId: 'unit_my_unit_1',            // Parent unit ID
  title: {
    en: 'Introduction to the Concept',
    bn: 'ধারণার পরিচিতি'
  },
  content: [                           // Array of content blocks
    // Text block - paragraph
    {
      type: 'text',
      format: 'paragraph',
      content: {
        en: 'This is a regular paragraph explaining a concept.',
        bn: 'এটি একটি ধারণা ব্যাখ্যা করে একটি নিয়মিত অনুচ্ছেদ।'
      }
    },

    // Text block - heading
    {
      type: 'text',
      format: 'heading',
      content: {
        en: 'Important Concept',
        bn: 'গুরুত্বপূর্ণ ধারণা'
      }
    },

    // Text block - callout (highlighted box)
    {
      type: 'text',
      format: 'callout',
      content: {
        en: '💡 Tip: Remember this important point!',
        bn: '💡 টিপ: এই গুরুত্বপূর্ণ বিষয়টি মনে রাখবেন!'
      }
    },

    // Example block with steps
    {
      type: 'example',
      title: {
        en: 'Example 1',
        bn: 'উদাহরণ ১'
      },
      problem: {
        en: 'Solve: 5 + 3',
        bn: 'সমাধান করো: ৫ + ৩'
      },
      solution: {
        en: 'The answer is 8',
        bn: 'উত্তর হলো ৮'
      },
      steps: [
        {
          step: 1,
          description: {
            en: 'Start with 5',
            bn: '৫ দিয়ে শুরু করো'
          }
        },
        {
          step: 2,
          description: {
            en: 'Add 3 to it',
            bn: 'এতে ৩ যোগ করো'
          }
        },
        {
          step: 3,
          description: {
            en: 'Count: 5, 6, 7, 8',
            bn: 'গণনা করো: ৫, ৬, ৭, ৮'
          }
        }
      ]
    },

    // Image block (optional)
    {
      type: 'image',
      src: '/images/lessons/my-diagram.png',
      alt: {
        en: 'Diagram showing the concept',
        bn: 'ধারণা দেখানো চিত্র'
      },
      caption: {
        en: 'Figure 1: Visual representation',
        bn: 'চিত্র ১: ভিজ্যুয়াল উপস্থাপনা'
      }
    }
  ],
  order: 1,
  estimatedMinutes: 15
};
```

**Content Block Types:**
- `text` - Paragraphs, headings, or callouts
- `example` - Worked examples with optional steps
- `image` - Images with captions (requires image file in public folder)

### Step 4: Create Problems

Problems are practice exercises for students to solve.

1. **Create a problem set file**: `content/problems/sets/[problem-set-name].ts`

```typescript
import { Problem, ProblemSet } from '@/types/content';

// Define individual problems
const problem1: Problem = {
  // MCQ Problem
  type: 'mcq',
  id: 'prob_my_mcq_001',
  difficulty: 1,                      // 1-5 (1=easiest, 5=hardest)
  question: {
    en: 'What is 2 + 2?',
    bn: '২ + ২ = কত?'
  },
  options: [
    {
      id: 'opt_a',
      text: { en: '3', bn: '৩' },
      isCorrect: false
    },
    {
      id: 'opt_b',
      text: { en: '4', bn: '৪' },
      isCorrect: true                 // Mark the correct answer
    },
    {
      id: 'opt_c',
      text: { en: '5', bn: '৫' },
      isCorrect: false
    }
  ],
  explanation: {
    en: '2 + 2 equals 4 because when you add 2 and 2, you get 4.',
    bn: '২ + ২ সমান ৪ কারণ যখন তুমি ২ এবং ২ যোগ করো, তুমি ৪ পাও।'
  },
  hints: [
    {
      level: 1,
      text: {
        en: 'Think about counting objects',
        bn: 'বস্তু গণনা করার কথা ভাবো'
      }
    },
    {
      level: 2,
      text: {
        en: 'Start with 2 and count 2 more',
        bn: '২ দিয়ে শুরু করো এবং আরও ২টি গণনা করো'
      }
    },
    {
      level: 3,
      text: {
        en: 'The answer is 4',
        bn: 'উত্তর হলো ৪'
      }
    }
  ],
  tags: ['addition', 'basic', 'single-digit'],
  estimatedTime: 30,                  // Seconds
  points: 10
};

const problem2: Problem = {
  // Number Input Problem
  type: 'number-input',
  id: 'prob_my_input_001',
  difficulty: 2,
  question: {
    en: 'Calculate: 15 + 27',
    bn: 'হিসাব করো: ১৫ + ২৭'
  },
  correctAnswer: 42,
  tolerance: 0,                       // Accept ±tolerance (0 = exact)
  explanation: {
    en: '15 + 27 = 42. Add the ones: 5+7=12 (write 2, carry 1). Add the tens: 1+2+1=4.',
    bn: '১৫ + ২৭ = ৪২। একক যোগ করো: ৫+৭=১২ (২ লেখো, ১ হাতে রাখো)। দশক যোগ করো: ১+২+১=৪।'
  },
  hints: [
    {
      level: 1,
      text: {
        en: 'Add the ones place first',
        bn: 'প্রথমে একক স্থান যোগ করো'
      }
    },
    {
      level: 2,
      text: {
        en: 'Remember to carry when needed',
        bn: 'প্রয়োজনে হাতে রাখতে মনে রাখবে'
      }
    }
  ],
  tags: ['addition', 'two-digit', 'carrying'],
  estimatedTime: 60,
  points: 20
};

const problem3: Problem = {
  // Drag-Drop Problem
  type: 'drag-drop',
  id: 'prob_my_drag_001',
  difficulty: 2,
  question: {
    en: 'Match each addition problem with its answer',
    bn: 'প্রতিটি যোগের সমস্যাকে তার উত্তরের সাথে মেলাও'
  },
  draggables: [
    {
      id: 'drag_1',
      content: { en: '8', bn: '৮' }
    },
    {
      id: 'drag_2',
      content: { en: '10', bn: '১০' }
    },
    {
      id: 'drag_3',
      content: { en: '12', bn: '১২' }
    }
  ],
  dropZones: [
    {
      id: 'drop_1',
      label: { en: '5 + 3 = ?', bn: '৫ + ৩ = ?' },
      accepts: ['drag_1', 'drag_2', 'drag_3']
    },
    {
      id: 'drop_2',
      label: { en: '6 + 4 = ?', bn: '৬ + ৪ = ?' },
      accepts: ['drag_1', 'drag_2', 'drag_3']
    },
    {
      id: 'drop_3',
      label: { en: '7 + 5 = ?', bn: '৭ + ৫ = ?' },
      accepts: ['drag_1', 'drag_2', 'drag_3']
    }
  ],
  solution: {
    drop_1: 'drag_1',                 // 5+3=8
    drop_2: 'drag_2',                 // 6+4=10
    drop_3: 'drag_3'                  // 7+5=12
  },
  explanation: {
    en: 'Great work! 5+3=8, 6+4=10, and 7+5=12.',
    bn: 'দারুণ কাজ! ৫+৩=৮, ৬+৪=১০, এবং ৭+৫=১২।'
  },
  hints: [
    {
      level: 1,
      text: {
        en: 'Try the smallest numbers first',
        bn: 'প্রথমে ছোট সংখ্যাগুলি চেষ্টা করো'
      }
    }
  ],
  tags: ['addition', 'matching', 'mental-math'],
  estimatedTime: 90,
  points: 15
};

// Export the problem set
export const myProblemSet: ProblemSet = {
  id: 'pset_my_problems',
  unitId: 'unit_my_unit_1',
  name: {
    en: 'Practice Problems',
    bn: 'অনুশীলন সমস্যা'
  },
  description: {
    en: 'Test your understanding',
    bn: 'তোমার বোঝার পরীক্ষা করো'
  },
  problems: [problem1, problem2, problem3],
  order: 1,
  minScoreToPass: 70                  // Percentage needed to pass
};

// Also export individual problems for ContentLoader
export const myProblems: Problem[] = [problem1, problem2, problem3];
```

**Problem Types:**
- `mcq` - Multiple choice question with options
- `number-input` - Numeric answer input with optional tolerance
- `drag-drop` - Drag and drop matching exercise

**Difficulty Levels:**
- `1` - Easy (beginner)
- `2` - Medium (intermediate)
- `3` - Hard (advanced)
- `4` - Very Hard (expert)
- `5` - Expert (mastery)

### Step 5: Register Content in ContentLoader

After creating your content files, register them in the ContentLoader service.

**Edit**: `lib/services/content-loader.ts`

```typescript
// Add imports for your new content
import { myTopic } from '@/content/topics/[category]/[topic-name]';
import { myProblems } from '@/content/problems/sets/[problem-set-name]';

export class ContentLoader {
  private static topics: Topic[] = [
    additionTopic,    // Existing topics
    myTopic,          // Add your new topic here
  ];

  private static problems: Problem[] = [
    ...additionSet1Problems,
    ...myProblems,    // Add your problems here
  ];

  // Rest of the class remains the same...
}
```

### Step 6: Add Images (Optional)

If your lesson content includes images:

1. **Create the images folder**:
```bash
mkdir -p public/images/lessons
```

2. **Add your images**:
- Place image files in `public/images/lessons/`
- Use formats: PNG, JPG, SVG
- Recommended size: 800x600px or smaller

3. **Reference in content**:
```typescript
{
  type: 'image',
  src: '/images/lessons/my-diagram.png',
  alt: { en: 'Diagram', bn: 'চিত্র' }
}
```

### Step 7: Test Your Content

1. **Start the development server**:
```bash
npm run dev
```

2. **Navigate to your content**:
- Open http://localhost:3000/learn
- Click on your topic
- Select your unit
- Review the lesson content
- Try all practice problems

3. **Check both languages**:
- Toggle between English and Bangla
- Verify all text displays correctly
- Test all interactive elements

4. **Verify functionality**:
- MCQ: All options work, correct answer validates
- Number Input: Accepts correct answers within tolerance
- Drag-Drop: All items are draggable and dropable
- Hints: Display progressively
- Explanations: Show after submission

### Step 8: Build and Deploy

1. **Test production build**:
```bash
npm run build
```

2. **Fix any TypeScript errors** that appear during build

3. **Commit your changes**:
```bash
git add content/ lib/services/content-loader.ts
git commit -m "feat: add [topic name] content with [X] problems"
```

## Content Best Practices

### Writing Effective Content

1. **Keep it Simple**: Use age-appropriate language for your target audience
2. **Be Consistent**: Use the same terminology throughout
3. **Progressive Difficulty**: Start easy, gradually increase challenge
4. **Provide Context**: Explain why concepts are important
5. **Use Examples**: Include multiple worked examples
6. **Visual Aids**: Add diagrams and illustrations where helpful

### Bilingual Content

1. **Accurate Translation**: Ensure Bangla text is natural, not literal translation
2. **Cultural Relevance**: Use culturally appropriate examples in both languages
3. **Consistent Terminology**: Use the same terms for mathematical concepts
4. **Test Both**: Always verify content in both English and Bangla

### Problem Design

1. **Clear Questions**: Make sure students understand what's being asked
2. **Appropriate Difficulty**: Match difficulty level to student skill
3. **Good Distractors**: MCQ wrong answers should be plausible
4. **Helpful Hints**: Provide hints that guide without giving away the answer
5. **Detailed Explanations**: Explain the solution process, not just the answer
6. **Varied Types**: Mix problem types for engagement

### Hints Strategy

- **Level 1** (Subtle): General strategy or concept to consider
- **Level 2** (Moderate): Specific steps or approach to use
- **Level 3** (Direct): Almost give away the answer, or provide the answer

## Example: Creating a Subtraction Topic

Here's a complete example of creating a new subtraction topic:

```bash
# 1. Create folder structure
mkdir -p content/topics/arithmetic/units
mkdir -p content/problems/sets

# 2. Create topic file
# content/topics/arithmetic/subtraction.ts
```

```typescript
import { Topic } from '@/types/content';
import { subtractionUnit1 } from './units/subtraction-basics';

export const subtractionTopic: Topic = {
  id: 'topic_subtraction',
  name: {
    en: 'Subtraction',
    bn: 'বিয়োগ'
  },
  description: {
    en: 'Learn how to subtract numbers',
    bn: 'সংখ্যা বিয়োগ করতে শেখো'
  },
  icon: 'Minus',
  color: 'secondary',
  prerequisites: ['topic_addition'],
  units: [subtractionUnit1],
  order: 2,
  estimatedHours: 2,
};
```

```typescript
// 3. Create unit file
// content/topics/arithmetic/units/subtraction-basics.ts
import { Unit, Lesson } from '@/types/content';
import { subtractionSet1 } from '@/content/problems/sets/subtraction-set-1';

const lesson1: Lesson = {
  id: 'lesson_subtraction_intro',
  unitId: 'unit_subtraction_basics',
  title: {
    en: 'Introduction to Subtraction',
    bn: 'বিয়োগের পরিচিতি'
  },
  content: [
    {
      type: 'text',
      format: 'heading',
      content: {
        en: 'What is Subtraction?',
        bn: 'বিয়োগ কী?'
      }
    },
    {
      type: 'text',
      format: 'paragraph',
      content: {
        en: 'Subtraction means taking away. When we subtract, we find how many are left.',
        bn: 'বিয়োগ মানে কেড়ে নেওয়া। যখন আমরা বিয়োগ করি, আমরা খুঁজে পাই কতগুলি বাকি আছে।'
      }
    },
    // Add more content blocks...
  ],
  order: 1,
  estimatedMinutes: 15
};

export const subtractionUnit1: Unit = {
  id: 'unit_subtraction_basics',
  topicId: 'topic_subtraction',
  name: {
    en: 'Basic Subtraction',
    bn: 'মৌলিক বিয়োগ'
  },
  description: {
    en: 'Learn the basics of subtraction',
    bn: 'বিয়োগের মূল বিষয় শিখো'
  },
  order: 1,
  lessons: [lesson1],
  problemSets: [subtractionSet1],
};
```

```typescript
// 4. Create problems file
// content/problems/sets/subtraction-set-1.ts
// (Similar structure to addition problems, but with subtraction content)
```

```typescript
// 5. Register in ContentLoader
// lib/services/content-loader.ts
import { subtractionTopic } from '@/content/topics/arithmetic/subtraction';
import { subtractionSet1Problems } from '@/content/problems/sets/subtraction-set-1';

export class ContentLoader {
  private static topics: Topic[] = [
    additionTopic,
    subtractionTopic,  // Add here
  ];

  private static problems: Problem[] = [
    ...additionSet1Problems,
    ...subtractionSet1Problems,  // Add here
  ];
  // ...
}
```

## Troubleshooting

### Build Errors

**Error**: "Cannot find module '@/content/...'"
- **Fix**: Check import paths and file names match exactly

**Error**: "Type '...' is not assignable to type '...'"
- **Fix**: Verify all fields match the TypeScript interfaces in `types/content.ts`

**Error**: "Property '...' is missing"
- **Fix**: Make sure all required fields are provided (id, name, description, etc.)

### Content Not Showing

**Problem**: Topic doesn't appear on /learn page
- **Fix**: Ensure topic is added to ContentLoader.topics array

**Problem**: Problems don't load
- **Fix**: Ensure problems are added to ContentLoader.problems array and linked to unit's problemSets

**Problem**: Images not displaying
- **Fix**: Verify image path starts with `/` and file exists in `public/` folder

### Validation Issues

**Problem**: Correct answers marked as wrong
- **Fix**: Check correctAnswer value, isCorrect flags, or solution object matches exactly

**Problem**: Drag-drop not working
- **Fix**: Ensure draggable IDs in solution match draggables array IDs

## Need Help?

- Review existing content in `content/topics/arithmetic/addition.ts` for reference
- Check type definitions in `types/content.ts` for required fields
- Test in development mode before building for production
- Use TypeScript errors as guides to fix issues

## Summary Checklist

- [ ] Create topic file with metadata
- [ ] Create unit file with lesson content
- [ ] Create problem set file with problems
- [ ] Add lesson content blocks (text, examples, images)
- [ ] Create diverse problem types (MCQ, number-input, drag-drop)
- [ ] Write helpful hints (3 levels)
- [ ] Provide clear explanations
- [ ] Translate all content to Bangla
- [ ] Register topic and problems in ContentLoader
- [ ] Test in development mode
- [ ] Verify both languages work
- [ ] Test all problem types
- [ ] Run production build
- [ ] Commit changes

Happy content creation!
