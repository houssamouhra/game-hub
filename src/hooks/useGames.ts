import { useMemo } from 'react';
import useData from '@/hooks/useData';
import { type GameQuery } from '@/components/layout/AppLayout';
import { type Platform } from '@/hooks/usePlatforms';

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms?: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
}

const useGames = (gameQuery: GameQuery) => {
  const config = useMemo(
    () => ({
      params: {
        genres: gameQuery.genre?.id,
        parent_platforms: gameQuery.platform?.id,
        ordering: gameQuery.sortOrder,
        search: gameQuery.searchText,
      },
    }),
    [gameQuery],
  );

  return useData<Game>('/games', config);
};

export default useGames;
