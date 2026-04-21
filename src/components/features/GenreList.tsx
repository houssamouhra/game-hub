import useGenres from '@/hooks/useGenres';
import getCroppedImageUrl from '@/utils/image-url';
import GenreListSkeleton from '@/components/features/GenreListSkeleton';

const GenreList = () => {
  const { data, isLoading } = useGenres();

  return (
    <div className='min-h-screen pt-10'>
      <ul>
        {isLoading
          ? Array.from({ length: 10 }, (_, index) => <GenreListSkeleton key={index} />)
          : data.map((genre) => (
              <li key={genre.id}>
                <div className='flex items-center gap-1.5 py-1'>
                  <img
                    src={getCroppedImageUrl(genre.image_background)}
                    alt={genre.name}
                    className='w-8 h-8 rounded-md object-cover'
                  />
                  <div className='text-md'>{genre.name}</div>
                </div>
              </li>
            ))}
      </ul>
    </div>
  );
};

export default GenreList;
