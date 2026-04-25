import { useState, useEffect } from 'react';
import Darklogo from '@/assets/dark-logo.svg';
import Lightlogo from '@/assets/light-logo.svg';
import { Input } from '@/ui/input';
import { Icon } from '@iconify/react';

const NavBar = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    if (typeof window === 'undefined') return 'dark';
    return (localStorage.getItem('theme') as 'light' | 'dark') || 'dark';
  });

  const toggleDarkMode = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle('dark', theme === 'dark');
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <nav className='flex items-center justify-between h-16 px-6 bg-zinc-400 dark:bg-zinc-900'>
      <img
        src={theme === 'dark' ? Lightlogo : Darklogo}
        className='h-12 w-auto pr-2 object-contain'
      />
      <div className='relative w-full max-w-xl group'>
        <Icon
          icon='material-symbols:search-rounded'
          width='24'
          height='24'
          className='pointer-events-none absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-400 dark:group-hover:text-neutral-700 transition'
        />
        <Input
          placeholder='Search games...'
          className='pl-8 w-full max-w-xl rounded-full text-sm bg-white dark:bg-neutral-700 dark:text-neutral-300 dark:group-hover:bg-white dark:group-hover:text-black transition duration-300'
        />
      </div>
      <button
        onClick={toggleDarkMode}
        className='p-2 rounded-full hover:bg-zinc-700 transition cursor-pointer'
        aria-label='Toggle theme'
      >
        {theme === 'dark' ? (
          <Icon icon='tabler:sun-filled' width='24' height='24' />
        ) : (
          <Icon icon='tabler:moon' width='24' height='24' />
        )}
      </button>
    </nav>
  );
};

export default NavBar;
