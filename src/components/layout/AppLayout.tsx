import { useState } from 'react';
import GameGrid from '@/components/features/GameGrid';
import { GenreList } from '@/components/features/GenreList';
import PlatformSelector from '@/components/features/PlatformSelector';
import { type Genre } from '@/hooks/useGenres';
import { type Platform } from '@/hooks/useGames';
import usePlatforms from '@/hooks/usePlatforms';

const AppLayout = () => {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(null);
  const { data: platforms, error } = usePlatforms();

  return (
    <div className='flex'>
      <aside className='hidden lg:block w-54 px-4'>
        <GenreList
          onSelectGenre={(genre) => setSelectedGenre(genre)}
          selectedGenre={selectedGenre}
        />
      </aside>
      <main className='min-h-screen flex-1 pt-10'>
        {!error && (
          <PlatformSelector
            platforms={platforms}
            onSelectPlatform={(platform) => setSelectedPlatform(platform)}
          />
        )}
        <GameGrid selectedPlatform={selectedPlatform} selectedGenre={selectedGenre} />
      </main>
    </div>
  );
};

export default AppLayout;
