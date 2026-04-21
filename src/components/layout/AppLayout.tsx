import GameGrid from '@/components/features/GameGrid';
import GenreList from '@/components/features/GenreList';

const AppLayout = () => {
  return (
    <div className='flex'>
      <aside className='hidden lg:block w-54 px-4'>
        <GenreList />
      </aside>
      <main className='min-h-screen flex-1'>
        <GameGrid />
      </main>
    </div>
  );
};

export default AppLayout;
