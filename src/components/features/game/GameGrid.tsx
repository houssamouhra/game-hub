import { Icon } from '@iconify/react';
import { Button } from '@/ui/button';
import { Alert, AlertDescription, AlertTitle } from '@/ui/alert';
import GameCard from '@/features/game/GameCard';
import GameCardSkeleton from '@/features/game/GameCardSkeleton';
import useGames from '@/hooks/useGames';
import { type GameQuery } from '@/layout/AppLayout';

interface GameGridProps {
  gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: GameGridProps) => {
  // prettier-ignore
  const {
    data,
    isFetching,
    error,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage
  } = useGames(gameQuery);

  const games = data?.pages.flatMap((page) => page.results) ?? [];

  const loading = !data && isFetching;

  if (error)
    return (
      <div className='max-w-sm pl-10'>
        <Alert variant='destructive'>
          <Icon icon='tabler:alert-circle' />
          <AlertTitle>Something went wrong</AlertTitle>
          <AlertDescription>{error.message}</AlertDescription>
        </Alert>
      </div>
    );

  return (
    <div className='p-10 pt-0'>
      <div className='grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
        {loading
          ? Array.from({ length: 20 }, (_, i) => <GameCardSkeleton key={i} />)
          : games.map((game) => <GameCard key={game.id} game={game} />)}
      </div>

      {hasNextPage && (
        <Button
          onClick={() => fetchNextPage()}
          disabled={isFetchingNextPage}
          aria-busy={isFetchingNextPage}
          variant='outline'
          className='mt-5'
        >
          {isFetchingNextPage ? 'Loading...' : 'Load More'}
        </Button>
      )}
    </div>
  );
};

export default GameGrid;
