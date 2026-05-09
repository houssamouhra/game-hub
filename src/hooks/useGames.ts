import { useQuery } from '@tanstack/react-query';
import apiClient, { type FetchResponse } from '@/services/api-client';
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
  const fetchGames = async (): Promise<FetchResponse<Game>> => {
    const res = await apiClient.get<FetchResponse<Game>>('/games', {
      params: {
        genres: gameQuery.genre?.id,
        parent_platforms: gameQuery.platform?.id,
        ordering: gameQuery.sortOrder,
        search: gameQuery.searchText,
      },
    });
    return res.data;
  };

  return useQuery<FetchResponse<Game>, Error>({
    queryKey: ['games', gameQuery],
    queryFn: fetchGames,
  });
};

export default useGames;
