'use client';

import { useState } from 'react';
import Link from 'next/link';
import { LessonRenderer } from './LessonRenderer';
import { ProblemRenderer } from './ProblemRenderer';
import { ChevronLeft, BookOpen, Target, ChevronRight } from 'lucide-react';
import { validateAnswer } from '@/lib/utils/validators';
import { Topic, Unit, Problem } from '@/types/content';

interface UnitPageClientProps {
  topic: Topic;
  unit: Unit;
  problems: Problem[];
}

export function UnitPageClient({ topic, unit, problems }: UnitPageClientProps) {
  const [activeTab, setActiveTab] = useState<'lesson' | 'practice'>('lesson');
  const [currentProblemIndex, setCurrentProblemIndex] = useState(0);
  const [showExplanation, setShowExplanation] = useState(false);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [hintsUsed, setHintsUsed] = useState(0);
  const [language, setLanguage] = useState<'en' | 'bn'>('en');
  const [completed, setCompleted] = useState<boolean[]>(new Array(problems.length).fill(false));

  const lesson = unit.lessons[0];
  const currentProblem = problems[currentProblemIndex];

  const handleSubmitAnswer = (answer: unknown) => {
    const correct = validateAnswer(currentProblem, answer);
    setIsCorrect(correct);
    setShowExplanation(true);

    if (correct) {
      const newCompleted = [...completed];
      newCompleted[currentProblemIndex] = true;
      setCompleted(newCompleted);
    }
  };

  const handleNextProblem = () => {
    if (currentProblemIndex < problems.length - 1) {
      setCurrentProblemIndex(currentProblemIndex + 1);
      setShowExplanation(false);
      setIsCorrect(null);
      setHintsUsed(0);
    }
  };

  const handlePreviousProblem = () => {
    if (currentProblemIndex > 0) {
      setCurrentProblemIndex(currentProblemIndex - 1);
      setShowExplanation(false);
      setIsCorrect(null);
      setHintsUsed(0);
    }
  };

  const handleTryAgain = () => {
    setShowExplanation(false);
    setIsCorrect(null);
  };

  const completedCount = completed.filter(Boolean).length;
  const progressPercent = Math.round((completedCount / problems.length) * 100);

  return (
    <div className="max-w-5xl mx-auto">
      {/* Breadcrumb */}
      <Link href={`/learn/${topic.id}`} className="btn btn-ghost btn-sm mb-6 gap-2">
        <ChevronLeft className="w-4 h-4" />
        Back to {topic.name.en}
      </Link>

      {/* Unit Header */}
      <div className="card bg-base-100 shadow-xl mb-6 rounded-2xl">
        <div className="card-body p-6">
          <h1 className="text-3xl font-bold text-primary mb-1">{unit.name[language]}</h1>
          <p className="text-base-content/70">{unit.description[language]}</p>

          <div className="mt-4">
            <div className="flex justify-between text-sm mb-1">
              <span>Progress</span>
              <span>{progressPercent}%</span>
            </div>
            <progress className="progress progress-primary w-full" value={progressPercent} max="100"></progress>
          </div>

          <div className="flex gap-2 mt-4">
            <button
              onClick={() => setLanguage('en')}
              className={`btn btn-sm ${language === 'en' ? 'btn-primary' : 'btn-ghost'}`}
            >
              English
            </button>
            <button
              onClick={() => setLanguage('bn')}
              className={`btn btn-sm ${language === 'bn' ? 'btn-primary' : 'btn-ghost'}`}
            >
              বাংলা
            </button>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="tabs tabs-boxed bg-base-100 shadow-lg p-2 mb-6 rounded-2xl">
        <button
          onClick={() => setActiveTab('lesson')}
          className={`tab gap-2 ${activeTab === 'lesson' ? 'tab-active' : ''}`}
        >
          <BookOpen className="w-4 h-4" />
          Lesson
        </button>
        <button
          onClick={() => setActiveTab('practice')}
          className={`tab gap-2 ${activeTab === 'practice' ? 'tab-active' : ''}`}
        >
          <Target className="w-4 h-4" />
          Practice ({completedCount}/{problems.length})
        </button>
      </div>

      {/* Content */}
      {activeTab === 'lesson' ? (
        <div className="card bg-base-100 shadow-xl rounded-2xl">
          <div className="card-body p-8">
            <h2 className="text-2xl font-bold text-primary mb-6">{lesson.title[language]}</h2>
            <LessonRenderer content={lesson.content} language={language} />

            <button onClick={() => setActiveTab('practice')} className="btn btn-primary btn-lg mt-8">
              Start Practice Problems →
            </button>
          </div>
        </div>
      ) : (
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <button
              onClick={handlePreviousProblem}
              disabled={currentProblemIndex === 0}
              className="btn btn-ghost btn-sm"
            >
              <ChevronLeft className="w-4 h-4" />
              Previous
            </button>

            <span className="font-semibold">
              Problem {currentProblemIndex + 1} of {problems.length}
            </span>

            <button
              onClick={handleNextProblem}
              disabled={currentProblemIndex === problems.length - 1}
              className="btn btn-ghost btn-sm"
            >
              Next
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {currentProblem && (
            <ProblemRenderer
              problem={currentProblem}
              language={language}
              onSubmit={handleSubmitAnswer}
              onHintRequest={() => setHintsUsed(hintsUsed + 1)}
              showExplanation={showExplanation}
              isCorrect={isCorrect ?? false}
            />
          )}

          {showExplanation && (
            <div className="flex gap-4 justify-center">
              {!isCorrect && (
                <button onClick={handleTryAgain} className="btn btn-warning">
                  Try Again
                </button>
              )}
              {currentProblemIndex < problems.length - 1 ? (
                <button onClick={handleNextProblem} className="btn btn-primary">
                  Next Problem →
                </button>
              ) : (
                <Link href={`/learn/${topic.id}`} className="btn btn-success">
                  Complete Unit! 🎉
                </Link>
              )}
            </div>
          )}

          {completedCount === problems.length && (
            <div className="alert alert-success shadow-lg">
              <span>🎉 Congratulations! You&apos;ve completed all problems in this unit!</span>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
