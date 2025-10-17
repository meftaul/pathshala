import Link from 'next/link';
import { ContentLoader } from '@/lib/services/content-loader';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { BookOpen, ChevronLeft } from 'lucide-react';
import { notFound } from 'next/navigation';

export default async function TopicPage({ params }: { params: Promise<{ topicId: string }> }) {
  const { topicId } = await params;
  const topic = ContentLoader.getTopicById(topicId);

  if (!topic) {
    notFound();
  }

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 p-4 md:p-8">
        <div className="max-w-5xl mx-auto">
          {/* Breadcrumb */}
          <Link
            href="/learn"
            className="btn btn-ghost btn-sm mb-6 gap-2"
          >
            <ChevronLeft className="w-4 h-4" />
            Back to Topics
          </Link>

          {/* Topic Header */}
          <div className="card bg-base-100 shadow-xl mb-8 rounded-2xl">
            <div className="card-body p-8">
              <h1 className="text-4xl font-bold text-primary mb-2">
                {topic.name.en} | {topic.name.bn}
              </h1>
              <p className="text-lg text-base-content/70">
                {topic.description.en}
              </p>
              <div className="flex gap-4 mt-4">
                <div className="badge badge-primary">
                  {topic.units.length} units
                </div>
                <div className="badge badge-secondary">
                  ~{topic.estimatedHours} hours
                </div>
              </div>
            </div>
          </div>

          {/* Units List */}
          <h2 className="text-2xl font-bold mb-6 text-primary">
            Units | ইউনিট
          </h2>

          <div className="space-y-4">
            {topic.units.map((unit, index) => (
              <Link
                key={unit.id}
                href={`/learn/${topic.id}/${unit.id}`}
                className="card bg-base-100 shadow-lg hover:shadow-2xl hover:translate-x-2 transition-all duration-300 rounded-2xl"
              >
                <div className="card-body p-6">
                  <div className="flex items-start gap-4">
                    <div className="avatar placeholder">
                      <div className="bg-primary text-primary-content rounded-full w-12 flex items-center justify-center">
                        <span className="text-2xl font-bold">{index + 1}</span>
                      </div>
                    </div>

                    <div className="flex-1">
                      <h3 className="card-title text-xl mb-1">
                        {unit.name.en}
                      </h3>
                      <p className="text-base-content/60 mb-2">
                        {unit.name.bn}
                      </p>
                      <p className="text-base-content/70">
                        {unit.description.en}
                      </p>

                      <div className="flex gap-4 mt-3">
                        <div className="flex items-center gap-2 text-sm">
                          <BookOpen className="w-4 h-4" />
                          <span>
                            {unit.lessons.length} lesson
                            {unit.lessons.length > 1 ? 's' : ''}
                          </span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <span>📝</span>
                          <span>
                            {unit.problemSets.reduce(
                              (sum, set) => sum + set.problems.length,
                              0
                            )}{' '}
                            problems
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="text-2xl">→</div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
