import { Badge } from '@/ui/badge';

interface CriticScoreProps {
  score: number;
}

const CriticScore = ({ score }: CriticScoreProps) => {
  const color =
    score > 75
      ? 'text-green-800 bg-green-100 dark:text-green-300 dark:bg-green-950'
      : score > 60
        ? 'text-yellow-800 bg-yellow-100 dark:text-yellow-300 dark:bg-yellow-950 '
        : '';
  return (
    <Badge variant='secondary' className={color}>
      {score}
    </Badge>
  );
};

export default CriticScore;
