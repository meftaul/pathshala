'use client';

import { Problem } from '@/types/content';
import { MCQProblemComponent } from './types/MCQProblem';
import { NumberInputProblemComponent } from './types/NumberInputProblem';
import { DragDropProblemComponent } from './types/DragDropProblem';
import { HintButton } from './shared/HintButton';
import { DifficultyBadge } from './shared/DifficultyBadge';
import { ExplanationCard } from './shared/ExplanationCard';

interface ProblemRendererProps {
  problem: Problem;
  language: 'en' | 'bn';
  onSubmit: (answer: unknown) => void;
  onHintRequest: (level: number) => void;
  showExplanation?: boolean;
  isCorrect?: boolean;
}

export function ProblemRenderer({
  problem,
  language,
  onSubmit,
  onHintRequest,
  showExplanation,
  isCorrect,
}: ProblemRendererProps) {
  const renderProblem = () => {
    switch (problem.type) {
      case 'mcq':
        return (
          <MCQProblemComponent
            problem={problem}
            language={language}
            onSubmit={onSubmit}
            disabled={showExplanation}
          />
        );

      case 'number-input':
        return (
          <NumberInputProblemComponent
            problem={problem}
            language={language}
            onSubmit={onSubmit}
            disabled={showExplanation}
          />
        );

      case 'drag-drop':
        return (
          <DragDropProblemComponent
            problem={problem}
            language={language}
            onSubmit={onSubmit}
            disabled={showExplanation}
          />
        );

      default:
        return <div>Unsupported problem type</div>;
    }
  };

  return (
    <div className="problem-container bg-base-100 rounded-2xl shadow-lg p-6">
      {/* Problem Header */}
      <div className="flex justify-between items-start mb-4">
        <div className="flex items-center gap-2">
          <DifficultyBadge level={problem.difficulty} />
          <span className="badge badge-primary">{problem.points} points</span>
        </div>
        {!showExplanation && (
          <HintButton
            hints={problem.hints}
            language={language}
            onRequest={onHintRequest}
          />
        )}
      </div>

      {/* Question */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">
          {problem.question[language]}
        </h3>
      </div>

      {/* Problem-specific component */}
      {renderProblem()}

      {/* Explanation (shown after submission) */}
      {showExplanation && (
        <ExplanationCard
          explanation={problem.explanation[language]}
          isCorrect={isCorrect}
        />
      )}
    </div>
  );
}
