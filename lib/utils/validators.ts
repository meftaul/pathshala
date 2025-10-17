// Answer Validation Functions

import { Problem, MCQProblem, NumberInputProblem, DragDropProblem } from '@/types/content';

export function validateAnswer(problem: Problem, answer: unknown): boolean {
  switch (problem.type) {
    case 'mcq':
      return validateMCQAnswer(problem, answer);
    case 'number-input':
      return validateNumberInputAnswer(problem, answer);
    case 'drag-drop':
      return validateDragDropAnswer(problem, answer);
    default:
      return false;
  }
}

function validateMCQAnswer(problem: MCQProblem, answer: unknown): boolean {
  if (typeof answer !== 'string') return false;
  const correctOption = problem.options.find((opt) => opt.isCorrect);
  return correctOption?.id === answer;
}

function validateNumberInputAnswer(
  problem: NumberInputProblem,
  answer: unknown
): boolean {
  if (typeof answer !== 'number') return false;
  const tolerance = problem.tolerance || 0;
  const diff = Math.abs(answer - problem.correctAnswer);
  return diff <= tolerance;
}

function validateDragDropAnswer(
  problem: DragDropProblem,
  answer: unknown
): boolean {
  if (typeof answer !== 'object' || answer === null) return false;
  const answerObj = answer as Record<string, string>;
  // Check if all drop zones have correct assignments
  for (const [zoneId, expectedDraggableId] of Object.entries(problem.solution)) {
    if (answerObj[zoneId] !== expectedDraggableId) {
      return false;
    }
  }
  return true;
}

// Helper to convert English numbers to Bangla
export function toBengaliNumber(num: number): string {
  const bengaliDigits = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];
  return num
    .toString()
    .split('')
    .map((d) => (d === '.' ? '.' : d === '-' ? '-' : bengaliDigits[parseInt(d)]))
    .join('');
}
