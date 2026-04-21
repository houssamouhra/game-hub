import { Icon } from '@iconify/react';
import useGames from '@/hooks/useGames';
import { GameCard, GameCardSkeleton } from '@/components/features/GameCard';
import { Alert, AlertAction, AlertDescription, AlertTitle } from '@/ui/alert';

const GameGrid = () => {
  const { games, error, isLoading } = useGames();

  return (
    <>
      {error && (
        <Alert variant='destructive' className='max-w-md'>
          <Icon icon='tabler:alert-circle' width='4' height='4' />
          <AlertTitle>Something went wrong</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
          <AlertAction></AlertAction>
        </Alert>
      )}
      <div className='grid grid-rows-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 p-10 gap-6'>
        {isLoading && Array.from({ length: 20 }, (_, i) => <GameCardSkeleton key={i} />)}
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </div>
    </>
  );
};

export default GameGrid;
