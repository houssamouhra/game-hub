import { Icon } from '@iconify/react';
import GameCard from '@/features/game/GameCard';
import GameCardSkeleton from '@/features/game/GameCardSkeleton';
import { Alert, AlertDescription, AlertTitle } from '@/ui/alert';
import useGames from '@/hooks/useGames';
import { type GameQuery } from '@/layout/AppLayout';

interface GameGridProps {
  gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: GameGridProps) => {
  const { data, isLoading, error } = useGames(gameQuery);

  const showSkeleton = isLoading || data.length === 0;

  if (error)
    return (
      <div className='max-w-sm pl-10'>
        <Alert variant='destructive'>
          <Icon icon='tabler:alert-circle' />
          <AlertTitle>Something went wrong</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      </div>
    );

  return (
    <div className='grid grid-rows-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 p-10 pt-0 gap-6'>
      {showSkeleton
        ? Array.from({ length: 20 }, (_, i) => <GameCardSkeleton key={i} />)
        : data.map((game) => <GameCard key={game.id} game={game} />)}
    </div>
  );
};

export default GameGrid;
