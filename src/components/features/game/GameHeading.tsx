import useGenre from '@/hooks/useGenre';
import usePlatform from '@/hooks/usePlatform';
import { type GameQuery } from '@/layout/AppLayout';

interface GameHeadingProps {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: GameHeadingProps) => {
  const genre = useGenre(gameQuery.genreId);
  const platform = usePlatform(gameQuery.platformId);

  const heading = `${platform?.name || ''} ${genre?.name || ''} Games`;

  return <h1 className='text-5xl font-extrabold tracking-tight text-balance'>{heading}</h1>;
};

export default GameHeading;
