import { useQuery } from '@tanstack/react-query';
import apiClient, { type FetchResponse } from '@/services/api-client';
import platforms from '@/data/platforms';

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const fetchPlatforms = async (): Promise<FetchResponse<Platform>> => {
  const res = await apiClient.get<FetchResponse<Platform>>('/platforms/lists/parents');
  return res.data;
};

const usePlatforms = () =>
  useQuery({
    queryKey: ['platforms'],
    queryFn: fetchPlatforms,
    staleTime: 24 * 60 * 60 * 1000, // 24h
    initialData: { count: platforms.length, results: platforms },
  });

export default usePlatforms;
