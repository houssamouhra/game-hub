import { type Game } from '@/hooks/useGames';
import { CardHeader, CardTitle } from '@/ui/card';
import GameCardContainer from '@/features/game/GameCardContainer';
import PlatformIconList from '@/features/platform/PlatformIconList';
import CriticScore from '@/features/game/CriticScore';
import Emoji from '@/features/game/Emoji';
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
          <div className='flex gap-1 mb-1'>
            <PlatformIconList platforms={game.parent_platforms.map((p) => p.platform)} />
          </div>

          <div className='flex justify-between items-center'>
            <CardTitle className='text-xl font-semibold'>
              {game.name}
              <Emoji rating={game.rating_top} />
            </CardTitle>
            <CriticScore score={game.metacritic} />
          </div>
        </CardHeader>
      }
    />
  );
};

export default GameCard;
