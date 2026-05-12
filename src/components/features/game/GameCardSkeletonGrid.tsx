import GameCardSkeleton from '@/features/game/GameCardSkeleton';

interface GameCardSkeletonGridProps {
  count?: number;
}

const GameCardSkeletonGrid = ({ count = 20 }: GameCardSkeletonGridProps) => {
  return (
    <div className='grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-6 p-px'>
      {Array.from({ length: count }, (_, i) => (
        <GameCardSkeleton key={i} />
      ))}
    </div>
  );
};

export default GameCardSkeletonGrid;
