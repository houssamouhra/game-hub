import useGames from '@/hooks/useGames';
import { AlertCircleIcon } from 'lucide-react';
import { Alert, AlertAction, AlertDescription, AlertTitle } from '@/components/ui/alert';

const GameGrid = () => {
  const { games, error } = useGames();

  return (
    <>
      {error && (
        <Alert variant='destructive' className='max-w-md'>
          <AlertCircleIcon className='h-4 w-4' />
          <AlertTitle>Something went wrong</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
          <AlertAction></AlertAction>
        </Alert>
      )}
      <ul>
        {games.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
    </>
  );
};

export default GameGrid;
