import { Icon } from '@iconify/react';
import { Input } from '@/ui/input';
import { useRef } from 'react';

interface SearchInputProps {
  onSearch: (searchText: string) => void;
}

const SearchInput = ({ onSearch }: SearchInputProps) => {
  const ref = useRef<HTMLInputElement>(null);
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (ref.current) onSearch(ref.current.value);
      }}
      className='relative w-full max-w-xl group'
    >
      <Icon
        icon='mi-search'
        width='24'
        height='24'
        className='pointer-events-none absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-400 dark:group-hover:text-neutral-700 transition'
      />
      <Input
        ref={ref}
        placeholder='Search games...'
        className='pl-8 w-full max-w-xl rounded-full text-sm bg-white dark:bg-neutral-700 dark:text-neutral-300 dark:group-hover:bg-white dark:group-hover:text-black transition duration-300'
      />
    </form>
  );
};

export default SearchInput;
