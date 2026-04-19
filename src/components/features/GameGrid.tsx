import { useState, useEffect } from 'react';
import apiClient from '@/services/api-client';
import { AlertCircleIcon } from 'lucide-react';
import { Alert, AlertAction, AlertDescription, AlertTitle } from '@/components/ui/alert';

interface Game {
  id: number;
  name: string;
}

interface FetchGameResponse {
  count: number;
  results: Game[];
}

const GameGrid = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState('');

  useEffect(() => {
    apiClient
      .get<FetchGameResponse>('/games')
      .then((res) => setGames(res.data.results))
      .catch((err) => setError(err.message));
  }, []);

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
