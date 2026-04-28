import { useState, useEffect } from 'react';
import { CanceledError, type AxiosRequestConfig } from 'axios';
import apiClient from '@/services/api-client';

interface FetchResponse<T> {
  count: number;
  results: T[];
}

const useData = <T>(endpoint: string, requestConfig?: AxiosRequestConfig) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState('');
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();

    const fetchData = async () => {
      setLoading(true);
      setError('');

      try {
        const res = await apiClient.get<FetchResponse<T>>(endpoint, {
          signal: controller.signal,
          ...requestConfig,
        });

        setData(res.data.results);
      } catch (err) {
        if (err instanceof CanceledError) return;

        if (err instanceof Error) {
          setError(err.message);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    return () => controller.abort();
  }, [endpoint, requestConfig]);

  return { data, error, isLoading };
};

export default useData;
