import { Icon } from '@iconify/react';
import { GameCard, GameCardSkeleton } from '@/components/features/GameCard';
import { Alert, AlertDescription, AlertTitle } from '@/ui/alert';
import useGames, { type Platform } from '@/hooks/useGames';
import { type Genre } from '@/hooks/useGenres';

interface GameGridProps {
  selectedGenre: Genre | null;
  selectedPlatform: Platform | null;
}

const GameGrid = ({ selectedGenre, selectedPlatform }: GameGridProps) => {
  const { data, isLoading, error } = useGames(selectedGenre, selectedPlatform);

  return (
    <>
      {error && (
        <div className='max-w-sm pl-10'>
          <Alert variant='destructive'>
            <Icon icon='tabler:alert-circle' />
            <AlertTitle>Something went wrong</AlertTitle>
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        </div>
      )}
      <div className='grid grid-rows-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 p-10 pt-0 gap-6'>
        {isLoading && Array.from({ length: 20 }, (_, i) => <GameCardSkeleton key={i} />)}
        {data.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </div>
    </>
  );
};

export default GameGrid;
