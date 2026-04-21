import { Badge } from '@/ui/badge';

interface CriticScoreProps {
  score: number;
}

const CriticScore = ({ score }: CriticScoreProps) => {
  const color = score > 75 ? 'text-green-300' : score > 60 ? 'text-yellow-300' : '';
  return (
    <Badge variant='secondary' className={color}>
      {score}
    </Badge>
  );
};

export default CriticScore;
