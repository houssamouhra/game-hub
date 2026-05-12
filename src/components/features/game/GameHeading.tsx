import useGenres from '@/hooks/useGenres';
import usePlatforms from '@/hooks/usePlatforms';
import { type GameQuery } from '@/layout/AppLayout';

interface GameHeadingProps {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: GameHeadingProps) => {
  const { data: genres } = useGenres();
  const { data: platforms } = usePlatforms();

  const genre = genres.results.find((g) => g.id === gameQuery.genreId);
  const platform = platforms.results.find((p) => p.id === gameQuery.platformId);

  const heading = `${platform?.name || ''} ${genre?.name || ''} Games`;

  return <h1 className='text-5xl font-extrabold tracking-tight text-balance'>{heading}</h1>;
};

export default GameHeading;
