import { useState } from 'react';
import GameGrid from '@/components/features/GameGrid';
import { GenreList } from '@/components/features/GenreList';
import { type Genre } from '@/hooks/useGenres';

const AppLayout = () => {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);

  return (
    <div className='flex'>
      <aside className='hidden lg:block w-54 px-4'>
        <GenreList onSelectGenre={(genre) => setSelectedGenre(genre)} />
      </aside>
      <main className='min-h-screen flex-1'>
        <GameGrid selectedGenre={selectedGenre} />
      </main>
    </div>
  );
};

export default AppLayout;
