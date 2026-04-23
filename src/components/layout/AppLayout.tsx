import { useState } from 'react';
import GameGrid from '@/components/features/GameGrid';
import { GenreList } from '@/components/features/GenreList';
import PlatformSelector from '@/components/features/PlatformSelector';
import { type Genre } from '@/hooks/useGenres';
import { type Platform } from '@/hooks/useGames';
import usePlatforms from '@/hooks/usePlatforms';

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
}

const AppLayout = () => {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);
  const { data: platforms, error } = usePlatforms();

  return (
    <div className='flex'>
      <aside className='hidden lg:block w-54 px-4'>
        <GenreList
          onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
          selectedGenre={gameQuery.genre}
        />
      </aside>
      <main className='min-h-screen flex-1 pt-10'>
        {!error && (
          <PlatformSelector
            platforms={platforms}
            onSelectPlatform={(platform) => setGameQuery({ ...gameQuery, platform })}
          />
        )}
        <GameGrid gameQuery={gameQuery} />
      </main>
    </div>
  );
};

export default AppLayout;
