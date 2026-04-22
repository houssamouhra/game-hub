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

const useGames = (selectedGenre: Genre | null) => {
  const config = useMemo(() => ({ params: { genres: selectedGenre?.id } }), [selectedGenre?.id]);
  return useData<Game>('/games', config);
};

export default useGames;
