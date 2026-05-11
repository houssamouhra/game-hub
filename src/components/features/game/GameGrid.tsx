import { Icon } from '@iconify/react';
import { Alert, AlertDescription, AlertTitle } from '@/ui/alert';
import GameCard from '@/features/game/GameCard';
import GameCardSkeleton from '@/features/game/GameCardSkeleton';
import useGames from '@/hooks/useGames';
import { type GameQuery } from '@/layout/AppLayout';
import InfiniteScroll from 'react-infinite-scroll-component';

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

  const fetchedGameCount = data?.pages.reduce((total, page) => total + page.results.length, 0) || 0;

  return (
    <div className='p-10 pt-0'>
      <InfiniteScroll
        dataLength={fetchedGameCount}
        hasMore={hasNextPage}
        next={fetchNextPage}
        loader={<p>Loading...</p>}
      >
        <div className='grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
          {loading
            ? Array.from({ length: 20 }, (_, i) => <GameCardSkeleton key={i} />)
            : games.map((game) => <GameCard key={game.id} game={game} />)}
        </div>
      </InfiniteScroll>
    </div>
  );
};

export default GameGrid;
