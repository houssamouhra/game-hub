import apiClient from '@/services/api-client';
import genres from '@/data/genres';
import { useQuery } from '@tanstack/react-query';
import { type FetchResponse } from './useData';

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const fetchGenres = async (): Promise<FetchResponse<Genre>> => {
  const res = await apiClient.get<FetchResponse<Genre>>('/genres');
  return res.data;
};

const useGenres = () =>
  useQuery({
    queryKey: ['genres'],
    queryFn: fetchGenres,
    staleTime: 24 * 60 * 60 * 1000, // 24 hours
    initialData: { count: genres.length, results: genres },
  });

export default useGenres;
