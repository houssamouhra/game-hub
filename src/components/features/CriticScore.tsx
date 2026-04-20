import { Badge } from '@/components/ui/badge';

interface CriticScoreProps {
  score: number;
}

const CriticScore = ({ score }: CriticScoreProps) => {
  return <Badge variant='secondary'>{score}</Badge>;
};

export default CriticScore;
