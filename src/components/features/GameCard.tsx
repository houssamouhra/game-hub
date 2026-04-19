import { type Game } from '@/hooks/useGames';
import { Card, CardHeader, CardTitle } from '@/components/ui/card';

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
      </CardHeader>
    </Card>
  );
};

export default GameCard;
