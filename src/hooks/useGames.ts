import { useMemo } from 'react';
import useData from '@/hooks/useData';
import { type Genre } from './useGenres';

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

const useGames = (selectedGenre: Genre | null, selectedPlatform: Platform | null) => {
  const config = useMemo(
    () => ({
      params: {
        genres: selectedGenre?.id,
        platforms: selectedPlatform?.id,
      },
    }),
    [selectedGenre?.id, selectedPlatform?.id],
  );

  return useData<Game>('/games', config);
};

export default useGames;
