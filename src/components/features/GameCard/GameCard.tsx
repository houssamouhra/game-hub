import { type Game } from '@/hooks/useGames';
import { CardHeader, CardTitle } from '@/components/ui/card';
import GameCardContainer from '@/components/features/GameCard/GameCardContainer';
import PlatformIconList from '@/components/features/PlatformIconList';
import CriticScore from '@/components/features/CriticScore';
import getCroppedImageUrl from '@/utils/image-url';

interface GameCardProps {
  game: Game;
}

const GameCard = ({ game }: GameCardProps) => {
  return (
    <GameCardContainer
      image={
        <img
          src={getCroppedImageUrl(game.background_image)}
          alt='game-image'
          className='w-full h-full object-cover'
        />
      }
      header={
        <CardHeader>
          <CardTitle className='text-xl'>{game.name}</CardTitle>
          <div className='flex justify-between items-center'>
            <div className='flex gap-1'>
              <PlatformIconList platforms={game.parent_platforms.map((p) => p.platform)} />
            </div>
            <CriticScore score={game.metacritic} />
          </div>
        </CardHeader>
      }
    />
  );
};

export default GameCard;
