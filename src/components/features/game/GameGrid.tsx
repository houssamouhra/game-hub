import { Icon } from '@iconify/react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Alert, AlertDescription, AlertTitle } from '@/ui/alert';
import GameCard from '@/features/game/GameCard';
import GameCardSkeletonGrid from '@/features/game/GameCardSkeletonGrid';
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
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useGames(gameQuery);

  const games = data?.pages.flatMap((page) => page.results) ?? [];

  const isInitialLoading = !data && isFetching;

  const fetchedGameCount = data?.pages.reduce((total, page) => total + page.results.length, 0) ?? 0;

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
      {isInitialLoading ? (
        <GameCardSkeletonGrid />
      ) : (
        <InfiniteScroll
          dataLength={fetchedGameCount}
          hasMore={!!hasNextPage}
          next={() => !isFetchingNextPage && fetchNextPage()}
          loader={<GameCardSkeletonGrid count={8} />}
        >
          <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-px'>
            {games.map((game) => (
              <GameCard key={game.id} game={game} />
            ))}
          </div>
        </InfiniteScroll>
      )}
    </div>
  );
};

export default GameGrid;
