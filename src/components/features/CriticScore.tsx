import { Badge } from '@/ui/badge';

interface CriticScoreProps {
  score: number;
}

const CriticScore = ({ score }: CriticScoreProps) => {
  const color =
    score > 75
      ? 'text-green-800 dark:text-green-300 bg-green-100 dark:bg-green-950'
      : score > 60
        ? 'text-yellow-300 bg-yellow-950'
        : '';
  return (
    <Badge variant='secondary' className={color}>
      {score}
    </Badge>
  );
};

export default CriticScore;
