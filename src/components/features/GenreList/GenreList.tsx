import useGenres, { type Genre } from '@/hooks/useGenres';
import getCroppedImageUrl from '@/utils/image-url';

interface GenreListProps {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ onSelectGenre, selectedGenre }: GenreListProps) => {
  const { data } = useGenres();

  return (
    <>
      <h1 className='text-2xl font-semibold ml-2 my-3 tracking-tight text-balance'>Genres</h1>
      <div className='min-h-screen mt-2'>
        <ul>
          {data.map((genre) => {
            const isActive = selectedGenre?.id === genre.id;

            return (
              <li key={genre.id}>
                <button
                  onClick={() => onSelectGenre(genre)}
                  className={`flex items-center gap-1.5 py-1 px-2 rounded-md text-left cursor-pointer transition-colors ${
                    isActive ? 'font-semibold' : 'hover:font-semibold'
                  }`}
                >
                  {' '}
                  <img
                    src={getCroppedImageUrl(genre.image_background)}
                    alt={genre.name}
                    className='w-8 h-8 rounded-md object-cover'
                  />
                  <div>{genre.name}</div>
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default GenreList;
