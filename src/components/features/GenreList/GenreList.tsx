import useGenres, { type Genre } from '@/hooks/useGenres';
import getCroppedImageUrl from '@/utils/image-url';
import { GenreListSkeleton } from '@/components/features/GenreList';

interface GenreListProps {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ onSelectGenre, selectedGenre }: GenreListProps) => {
  const { data, isLoading } = useGenres();

  return (
    <div className='min-h-screen pt-10'>
      <ul>
        {isLoading
          ? Array.from({ length: 10 }, (_, index) => <GenreListSkeleton key={index} />)
          : data.map((genre) => {
              const isActive = selectedGenre?.id === genre.id;

              return (
                <li key={genre.id}>
                  <div
                    onClick={() => onSelectGenre(genre)}
                    className={`flex items-center gap-1.5 py-1 px-2 rounded-md cursor-pointer transition-colors ${
                      isActive
                        ? 'text-white bg-zinc-900 font-semibold'
                        : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    {' '}
                    <img
                      src={getCroppedImageUrl(genre.image_background)}
                      alt={genre.name}
                      className='w-8 h-8 rounded-md object-cover'
                    />
                    <div>{genre.name}</div>
                  </div>
                </li>
              );
            })}
      </ul>
    </div>
  );
};

export default GenreList;
