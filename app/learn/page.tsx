import Link from 'next/link';
import { ContentLoader } from '@/lib/services/content-loader';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import * as Icons from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export const metadata = {
  title: 'Learn - Choose Your Topic',
  description: 'Select a math topic to start learning',
};

export default function LearnPage() {
  const topics = ContentLoader.getAllTopics();

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 p-4 md:p-8">
        <div className="max-w-6xl mx-auto">
          {/* Page Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-primary">
              Choose Your Topic 📚
            </h1>
            <p className="text-xl text-base-content/70">
              কোন বিষয় শিখতে চাও? | What would you like to learn?
            </p>
          </div>

          {/* Topics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {topics.map((topic) => {
              // Dynamically get icon component
              const IconComponent = (Icons[topic.icon as keyof typeof Icons] || Icons.BookOpen) as LucideIcon;

              return (
                <Link
                  key={topic.id}
                  href={`/learn/${topic.id}`}
                  className="card bg-base-100 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 rounded-2xl"
                >
                  <div className="card-body p-8">
                    <div className="flex items-center justify-between mb-4">
                      <IconComponent className={`w-16 h-16 text-${topic.color}`} />
                      <div className="badge badge-primary">
                        {topic.units.length} units
                      </div>
                    </div>

                    <h3 className="card-title text-2xl mb-2">
                      {topic.name.en}
                    </h3>
                    <p className="text-lg text-base-content/60 mb-2">
                      {topic.name.bn}
                    </p>
                    <p className="text-base-content/70 mb-4">
                      {topic.description.en}
                    </p>

                    <div className="flex items-center gap-2 text-sm text-base-content/60">
                      <Icons.Clock className="w-4 h-4" />
                      <span>~{topic.estimatedHours} hours</span>
                    </div>

                    <button className="btn btn-primary mt-4">
                      Start Learning →
                    </button>
                  </div>
                </Link>
              );
            })}
          </div>

          {/* Coming Soon */}
          <div className="mt-12 text-center">
            <div className="alert bg-accent/10 border-accent/30 inline-flex">
              <Icons.Sparkles className="w-5 h-5 text-accent" />
              <span>
                More topics coming soon! Subtraction, Multiplication, Division & more 🎉
              </span>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
