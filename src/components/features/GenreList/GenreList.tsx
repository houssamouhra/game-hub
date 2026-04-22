import useGenres, { type Genre } from '@/hooks/useGenres';
import getCroppedImageUrl from '@/utils/image-url';
import { GenreListSkeleton } from '@/components/features/GenreList';
import { Button } from '@/components/ui/button';

interface GenreListProps {
  onSelectGenre: (genre: Genre) => void;
}

const GenreList = ({ onSelectGenre }: GenreListProps) => {
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
                  <Button
                    onClick={() => onSelectGenre(genre)}
                    className='text-md cursor-pointer'
                    variant='link'
                  >
                    {genre.name}
                  </Button>
                </div>
              </li>
            ))}
      </ul>
    </div>
  );
};

export default GenreList;
