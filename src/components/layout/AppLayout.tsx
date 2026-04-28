import { useState } from 'react';
import GameGrid from '@/components/features/GameGrid';
import { GenreList } from '@/components/features/GenreList';
import PlatformSelector from '@/components/features/PlatformSelector';
import SortSelector from '@/components/features/SortSelector';
import { type Genre } from '@/hooks/useGenres';
import { type Platform } from '@/hooks/useGames';
import usePlatforms from '@/hooks/usePlatforms';
import NavBar from '@/components/layout/NavBar';
import GameHeading from '@/components/features/GameHeading';

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string;
  searchText: string;
}

const AppLayout = () => {
  const [gameQuery, setGameQuery] = useState<GameQuery>({
    genre: null,
    platform: null,
    sortOrder: '',
    searchText: '',
  });

  const { data: platforms, error } = usePlatforms();

  const sortOrder = [
    { value: '-added', label: 'Date added' },
    { value: 'name', label: 'Name' },
    { value: '-released', label: 'Release date' },
    { value: '-metacritic', label: 'Popularity' },
    { value: '-rating', label: 'Average rating' },
  ];

  return (
    <>
      <NavBar onSearch={(searchText) => setGameQuery({ ...gameQuery, searchText })} />
      <div className='flex'>
        <aside className='hidden lg:block w-54 px-4'>
          <GenreList
            onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
            selectedGenre={gameQuery.genre}
          />
        </aside>
        <main className='min-h-screen flex-1 mt-10'>
          <div className='flex flex-col gap-3 pl-10 mb-4'>
            <GameHeading gameQuery={gameQuery} />
            <div className='flex gap-3'>
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
          </div>
          <GameGrid gameQuery={gameQuery} />
        </main>
      </div>
    </>
  );
};

export default AppLayout;
