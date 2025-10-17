interface ExplanationCardProps {
  explanation: string;
  isCorrect?: boolean;
}

export function ExplanationCard({
  explanation,
  isCorrect,
}: ExplanationCardProps) {
  return (
    <div
      className={`mt-6 p-4 rounded-lg border-2 ${
        isCorrect
          ? 'bg-success/10 border-success'
          : 'bg-error/10 border-error'
      }`}
    >
      <h4 className="font-semibold mb-2">
        {isCorrect ? '✅ Correct!' : '❌ Not quite'}
      </h4>
      <p>{explanation}</p>
    </div>
  );
}
