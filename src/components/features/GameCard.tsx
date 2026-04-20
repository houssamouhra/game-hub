import { type Game } from '@/hooks/useGames';
import { Card, CardHeader, CardTitle } from '@/components/ui/card';
import PlatformIconList from '@/components/features/PlatformIconList';
import CriticScore from '@/components/features/CriticScore';
import getCroppedImageUrl from '@/utils/image-url';

interface GameCardProps {
  game: Game;
}

const GameCard = ({ game }: GameCardProps) => {
  return (
    <Card>
      <img src={getCroppedImageUrl(game.background_image)} alt='game_image' />
      <CardHeader>
        <CardTitle className='text-xl'>{game.name}</CardTitle>
        <div className='flex justify-between items-center'>
          <div className='flex gap-1'>
            <PlatformIconList platforms={game.parent_platforms.map((p) => p.platform)} />
          </div>
          <CriticScore score={game.metacritic} />
        </div>
      </CardHeader>
    </Card>
  );
};

export default GameCard;
