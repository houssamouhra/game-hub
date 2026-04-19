import { type Game } from '@/hooks/useGames';
import { Card, CardHeader, CardTitle } from '@/components/ui/card';
import PlatformIconList from '@/components/features/PlatformIconList';

interface GameCardProps {
  game: Game;
}

const GameCard = ({ game }: GameCardProps) => {
  return (
    <Card>
      <div>
        <img src={game.background_image} alt='game_image' />
      </div>
      <CardHeader>
        <CardTitle className='text-xl'>{game.name}</CardTitle>
        <PlatformIconList platforms={game.parent_platforms.map((p) => p.platform)} />
      </CardHeader>
    </Card>
  );
};

export default GameCard;
