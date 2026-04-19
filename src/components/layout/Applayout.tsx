import GameGrid from '@/components/features/GameGrid';

const Applayout = () => {
  return (
    <div className='flex'>
      <aside className='hidden lg:block w-64'>
        <div className='min-h-screen'>side bar</div>
      </aside>
      <main className='min-h-screen flex-1'>
        <GameGrid />
      </main>
    </div>
  );
};

export default Applayout;
