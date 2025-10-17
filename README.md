# 📚 Pathshala - Interactive Math Learning Platform

<div align="center">

**A bilingual (English & Bangla) educational platform designed for kids to learn math through interactive lessons and engaging practice problems.**

[![Next.js](https://img.shields.io/badge/Next.js-15.5-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38B2AC?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
[![DaisyUI](https://img.shields.io/badge/DaisyUI-5.3-5A67D8?style=flat-square)](https://daisyui.com/)

[Features](#-features) • [Getting Started](#-getting-started) • [Documentation](#-documentation) • [Tech Stack](#-tech-stack)

</div>

---

## 🌟 Overview

Pathshala is an interactive educational platform that makes learning math fun and accessible for children. With full support for both English and Bangla languages, students can learn at their own pace through:

- 📖 **Interactive Lessons** - Rich content with text, examples, images, and custom components
- 🎯 **Practice Problems** - MCQ, number input, and drag-and-drop problem types
- 💡 **Progressive Hints** - 3-level hint system to guide learning
- 📊 **Progress Tracking** - Track completion and scores per unit
- 🌐 **Bilingual Support** - Full English and Bangla language support
- 🎨 **Custom Components** - Extensible system for creating unique interactive experiences

## ✨ Features

### 🎓 Learning Experience

- **Interactive Lessons**: Rich content blocks including text, images, examples, and custom interactive components
- **Multiple Problem Types**:
  - **MCQ** - Multiple choice questions with instant feedback
  - **Number Input** - Numeric answers with tolerance support
  - **Drag & Drop** - Interactive matching exercises
- **Hint System**: Three levels of hints (subtle → moderate → direct)
- **Instant Feedback**: Detailed explanations after each submission
- **Progress Tracking**: Visual progress bars and completion status

### 🎨 Customization

- **Custom Interactive Components**: Create unique lesson experiences with:
  - Interactive counters
  - Number lines
  - Visual grids
  - Step-by-step animations
  - Expression builders
  - And more!
- **Theme Support**: Light and dark mode with theme switcher
- **Responsive Design**: Works seamlessly on mobile, tablet, and desktop

### 🌍 Accessibility & Localization

- **Bilingual Interface**: Complete English and Bangla support
- **Bengali Numerals**: Automatic conversion for numbers in Bangla mode
- **Accessible UI**: Keyboard navigation and ARIA labels
- **Clear Typography**: Custom fonts optimized for readability

### 🔐 Authentication & User Management

- **Secure Auth**: Built with Supabase authentication
- **User Dashboard**: Personalized learning dashboard
- **Session Management**: Secure session handling with middleware

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm
- Git
- Supabase account (for authentication)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/pathshala.git
   cd pathshala
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Set up environment variables**

   Create a `.env.local` file in the root directory:
   ```env
   # Supabase Configuration
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**

   Navigate to [http://localhost:3000](http://localhost:3000)

### Building for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
pathshala/
├── app/                          # Next.js app directory
│   ├── auth/                     # Authentication pages
│   ├── dashboard/                # User dashboard
│   ├── learn/                    # Learning interface
│   │   ├── [topicId]/           # Topic pages
│   │   └── [topicId]/[unitId]/  # Unit learning interface
│   └── page.tsx                  # Landing page
├── components/
│   ├── learning/                 # Learning components
│   │   ├── custom/              # Custom interactive components
│   │   ├── types/               # Problem type components
│   │   ├── shared/              # Shared UI components
│   │   ├── LessonRenderer.tsx   # Lesson content renderer
│   │   ├── ProblemRenderer.tsx  # Problem renderer
│   │   └── UnitPageClient.tsx   # Main learning interface
│   ├── header.tsx               # App header
│   └── footer.tsx               # App footer
├── content/                      # Educational content
│   ├── topics/                   # Topic definitions
│   │   └── arithmetic/
│   │       ├── addition.ts      # Addition topic
│   │       └── units/           # Unit lessons
│   └── problems/
│       └── sets/                # Problem sets
├── lib/
│   ├── services/
│   │   └── content-loader.ts    # Content loading service
│   ├── utils/
│   │   └── validators.ts        # Answer validation
│   └── supabase/                # Supabase client
├── types/
│   └── content.ts               # TypeScript type definitions
├── docs/                         # Documentation
│   ├── ADDING_NEW_CONTENT.md    # Content creation guide
│   ├── CUSTOM_LESSON_COMPONENTS.md  # Custom components guide
│   ├── CONTENT_STRATEGY_AND_STRUCTURE.md
│   └── MATH_PLATFORM_MVP_PLAN.md
└── public/                       # Static assets
```

## 📖 Documentation

Comprehensive guides are available in the `/docs` directory:

- **[Adding New Content](docs/ADDING_NEW_CONTENT.md)** - Complete guide for creating topics, units, lessons, and problems
- **[Custom Lesson Components](docs/CUSTOM_LESSON_COMPONENTS.md)** - How to create and integrate custom interactive components
- **[Content Strategy](docs/CONTENT_STRATEGY_AND_STRUCTURE.md)** - Content organization and strategy
- **[MVP Plan](docs/MATH_PLATFORM_MVP_PLAN.md)** - Platform architecture and development roadmap

## 🛠️ Tech Stack

### Frontend
- **[Next.js 15.5](https://nextjs.org/)** - React framework with App Router
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe development
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[DaisyUI](https://daisyui.com/)** - Tailwind CSS component library
- **[@dnd-kit](https://dndkit.com/)** - Drag and drop functionality

### Backend & Database
- **[Supabase](https://supabase.com/)** - Authentication and database
- **PostgreSQL** - Database (via Supabase)

### Development Tools
- **ESLint** - Code linting
- **Prettier** - Code formatting (via ESLint plugin)

## 📝 Content Creation

### Quick Start: Adding a Topic

1. **Create topic structure**
   ```bash
   mkdir -p content/topics/[category]/units
   mkdir -p content/problems/sets
   ```

2. **Define your topic** (`content/topics/[category]/[topic-name].ts`)
   ```typescript
   import { Topic } from '@/types/content';

   export const myTopic: Topic = {
     id: 'topic_my_topic',
     name: { en: 'My Topic', bn: 'আমার বিষয়' },
     description: { en: 'Learn...', bn: 'শিখুন...' },
     icon: 'Calculator',
     color: 'primary',
     prerequisites: [],
     units: [myUnit],
     order: 1,
     estimatedHours: 2,
   };
   ```

3. **Register in ContentLoader** (`lib/services/content-loader.ts`)
   ```typescript
   private static topics: Topic[] = [
     myTopic,  // Add your topic
   ];
   ```

For detailed instructions, see [ADDING_NEW_CONTENT.md](docs/ADDING_NEW_CONTENT.md).

## 🎨 Creating Custom Components

Add unique interactive experiences to your lessons:

```typescript
// 1. Define the type (types/content.ts)
export interface CounterBlock {
  type: 'counter';
  startValue: number;
  maxValue: number;
  label: LocalizedText;
}

// 2. Create the component (components/learning/custom/)
export function CounterComponent({ ... }) {
  // Your interactive component
}

// 3. Register in LessonRenderer
case 'counter':
  return <CounterComponent {...block} />;

// 4. Use in lesson content
content: [
  {
    type: 'counter',
    startValue: 0,
    maxValue: 10,
    label: { en: 'Try counting!', bn: 'গণনা করো!' }
  }
]
```

See [CUSTOM_LESSON_COMPONENTS.md](docs/CUSTOM_LESSON_COMPONENTS.md) for complete guide with examples.

## 🧪 Testing

Currently, the project includes:
- TypeScript type checking
- ESLint for code quality
- Build-time validation

```bash
# Type checking
npm run build

# Linting
npm run lint
```

## 🎯 Current Features by Module

### ✅ Authentication
- [x] User sign up with email verification
- [x] Sign in / Sign out
- [x] Password reset
- [x] Protected routes with middleware
- [x] Session management

### ✅ Learning Platform
- [x] Topic listing with icons
- [x] Unit organization
- [x] Lesson rendering with rich content
- [x] Multiple problem types (MCQ, Number Input, Drag-Drop)
- [x] Progressive hint system
- [x] Answer validation
- [x] Immediate feedback and explanations
- [x] Progress tracking per unit
- [x] Language switcher (EN/BN)

### ✅ Custom Components
- [x] Interactive counter with animations
- [x] Type system for custom blocks
- [x] Integration with LessonRenderer
- [x] Examples and documentation

### 🚧 In Progress / Planned
- [ ] Database integration for progress storage
- [ ] User profile and statistics
- [ ] Achievements and badges
- [ ] Timed challenges
- [ ] AI tutor integration
- [ ] More topics (Subtraction, Multiplication, Division, etc.)
- [ ] KaTeX support for mathematical expressions
- [ ] Adaptive difficulty
- [ ] Parent/teacher dashboard

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. **Fork the repository**
2. **Create a feature branch** (`git checkout -b feature/amazing-feature`)
3. **Make your changes**
4. **Commit your changes** (`git commit -m 'feat: add amazing feature'`)
5. **Push to the branch** (`git push origin feature/amazing-feature`)
6. **Open a Pull Request**

### Commit Convention

We follow [Conventional Commits](https://www.conventionalcommits.org/):

- `feat:` - New features
- `fix:` - Bug fixes
- `docs:` - Documentation changes
- `style:` - Code style changes (formatting, etc.)
- `refactor:` - Code refactoring
- `test:` - Adding or updating tests
- `chore:` - Maintenance tasks

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Next.js Team** - For the amazing React framework
- **Supabase** - For the backend infrastructure
- **DaisyUI** - For the beautiful component library
- **Lucide** - For the icon set
- **@dnd-kit** - For drag and drop functionality

## 📧 Contact

For questions or feedback, please open an issue on GitHub.

---

<div align="center">

**Made with ❤️ for students learning math**

</div>
