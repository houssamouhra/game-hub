import { useState } from 'react';
import GameGrid from '@/components/features/GameGrid';
import { GenreList } from '@/components/features/GenreList';
import PlatformSelector from '@/components/features/PlatformSelector';
import SortSelector from '@/components/features/SortSelector';
import { type Genre } from '@/hooks/useGenres';
import { type Platform } from '@/hooks/useGames';
import usePlatforms from '@/hooks/usePlatforms';

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string;
}

const AppLayout = () => {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);
  const { data: platforms, error } = usePlatforms();

  const sortOrder = [
    { value: '-added', label: 'Date added' },
    { value: 'name', label: 'Name' },
    { value: '-released', label: 'Release date' },
    { value: '-metacritic', label: 'Popularity' },
    { value: '-rating', label: 'Average rating' },
  ];

  return (
    <div className='flex'>
      <aside className='hidden lg:block w-54 px-4'>
        <GenreList
          onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
          selectedGenre={gameQuery.genre}
        />
      </aside>
      <main className='min-h-screen flex-1 pt-10'>
        <div className='flex gap-3 pl-10 mb-4'>
          {!error && (
            <PlatformSelector
              platforms={platforms}
              onSelectPlatform={(platform) => setGameQuery({ ...gameQuery, platform })}
            />
          )}
          <SortSelector
            sortOrder={sortOrder}
            value={gameQuery.sortOrder}
            onSelectSortOrder={(sortOrder) => setGameQuery({ ...gameQuery, sortOrder })}
          />
        </div>
        <GameGrid gameQuery={gameQuery} />
      </main>
    </div>
  );
};

export default AppLayout;
