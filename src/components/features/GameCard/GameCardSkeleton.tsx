import { Skeleton } from '@/components/ui/skeleton';
import { CardContent, CardHeader } from '@/components/ui/card';
import { GameCardContainer } from '@/components/features/GameCard';

const GameCardSkeleton = () => {
  return (
    <GameCardContainer
      image={
        <CardContent>
          <Skeleton className='aspect-video' />
        </CardContent>
      }
      header={
        <CardHeader className='flex justify-between items-end'>
          <div className='flex flex-col gap-2'>
            <Skeleton className='h-4 w-40' />
            <Skeleton className='h-4 w-20' />
          </div>
          <div className='shrink-0'>
            <Skeleton className='h-4 w-8' />
          </div>
        </CardHeader>
      }
    />
  );
};

export default GameCardSkeleton;
