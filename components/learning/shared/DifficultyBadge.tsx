interface DifficultyBadgeProps {
  level: 1 | 2 | 3 | 4 | 5;
}

export function DifficultyBadge({ level }: DifficultyBadgeProps) {
  const colors = {
    1: 'badge-success',
    2: 'badge-info',
    3: 'badge-warning',
    4: 'badge-error',
    5: 'badge-error',
  };

  const labels = {
    1: 'Easy',
    2: 'Medium',
    3: 'Hard',
    4: 'Very Hard',
    5: 'Expert',
  };

  return <span className={`badge ${colors[level]}`}>{labels[level]}</span>;
}
