import { type GameQuery } from '@/layout/AppLayout';

interface GameHeadingProps {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: GameHeadingProps) => {
  const heading = `${gameQuery.platform?.name || ''} ${gameQuery.genre?.name || ''} Games`;

  return <h1 className='text-5xl font-extrabold tracking-tight text-balance'>{heading}</h1>;
};

export default GameHeading;
