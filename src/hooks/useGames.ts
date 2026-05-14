import ms from 'ms';
import { useInfiniteQuery } from '@tanstack/react-query';
import APIClient, { type FetchResponse } from '@/services/api-client';
import { type Platform } from '@/hooks/usePlatforms';
import { type GameQuery } from '@/components/layout/AppLayout';

const apiClient = new APIClient<Game>('/games');

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms?: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
}

const useGames = (gameQuery: GameQuery) =>
  useInfiniteQuery<FetchResponse<Game>, Error>({
    queryKey: ['games', gameQuery] as const,
    queryFn: ({ pageParam = 1 }) =>
      apiClient.getAll({
        params: {
          genres: gameQuery.genreId,
          parent_platforms: gameQuery.platformId,
          ordering: gameQuery.sortOrder,
          search: gameQuery.searchText,
          page: pageParam,
        },
      }),
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.next ? allPages.length + 1 : undefined;
    },
    staleTime: ms('24h'),
  });

export default useGames;
