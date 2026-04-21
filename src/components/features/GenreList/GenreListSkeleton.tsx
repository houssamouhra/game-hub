import { Skeleton } from '@/ui/skeleton';

const GenreListSkeleton = () => {
  return (
    <div className='flex items-center gap-1.5 py-1'>
      <Skeleton className='h-8 w-8 rounded-md' />
      <div className='space-y-2'>
        <Skeleton className='h-4 w-20' />
      </div>
    </div>
  );
};

export default GenreListSkeleton;
