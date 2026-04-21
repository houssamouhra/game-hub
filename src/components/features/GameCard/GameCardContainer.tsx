import { Card } from '@/ui/card';
import { type ReactNode } from 'react';

interface GameCardContainerProps {
  image: ReactNode;
  header: ReactNode;
}

const GameCardContainer = ({ image, header }: GameCardContainerProps) => {
  return (
    <Card size='sm' className='h-full w-full'>
      {image}
      {header}
    </Card>
  );
};

export default GameCardContainer;
