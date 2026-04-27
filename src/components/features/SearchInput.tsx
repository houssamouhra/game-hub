import { Icon } from '@iconify/react';
import { Input } from '@/ui/input';

const SearchInput = () => {
  return (
    <div className='relative w-full max-w-xl group'>
      <Icon
        icon='mi-search'
        width='24'
        height='24'
        className='pointer-events-none absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-400 dark:group-hover:text-neutral-700 transition'
      />
      <Input
        placeholder='Search games...'
        className='pl-8 w-full max-w-xl rounded-full text-sm bg-white dark:bg-neutral-700 dark:text-neutral-300 dark:group-hover:bg-white dark:group-hover:text-black transition duration-300'
      />
    </div>
  );
};

export default SearchInput;
