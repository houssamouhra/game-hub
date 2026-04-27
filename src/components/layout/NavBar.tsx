import { useState, useEffect } from 'react';
import Darklogo from '@/assets/dark-logo.svg';
import Lightlogo from '@/assets/light-logo.svg';
import { Icon } from '@iconify/react';
import SearchInput from '@/components/features/SearchInput';

const NavBar = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    if (typeof window === 'undefined') return 'dark';
    return (localStorage.getItem('theme') as 'light' | 'dark') || 'dark';
  });

  const toggleDarkMode = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
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
      <SearchInput />
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
