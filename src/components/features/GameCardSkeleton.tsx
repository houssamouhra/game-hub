import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';

const GameCardSkeleton = () => {
  return (
    <Card className='h-77.5'>
      <CardContent>
        <Skeleton className='aspect-video md:aspect-3/2 w-full' />
      </CardContent>
      <CardHeader className='flex justify-between items-end'>
        <div className='flex flex-col gap-2'>
          <Skeleton className='h-4 w-40' />
          <Skeleton className='h-4 w-2/3' />
        </div>
        <div className='shrink-0'>
          <Skeleton className='h-4 w-8' />
        </div>
      </CardHeader>
    </Card>
  );
};

export default GameCardSkeleton;
