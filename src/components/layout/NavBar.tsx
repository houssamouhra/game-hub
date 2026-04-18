import { useState, useEffect } from 'react';
import Darklogo from '@/assets/dark-logo.svg';
import Lightlogo from '@/assets/light-logo.svg';
import { Input } from '@/components/ui/input';
import { Moon, Sun } from 'lucide-react';

const NavBar = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    if (typeof window === 'undefined') return 'light';
    return (localStorage.getItem('theme') as 'light' | 'dark') || 'light';
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
      <img src={theme === 'dark' ? Lightlogo : Darklogo} className='h-12 w-auto object-contain' />
      <div className='flex-1 flex justify-center'>
        <Input
          placeholder='Search games...'
          className='w-full max-w-xl rounded-full text-sm bg-white dark:bg-zinc-800'
        />
      </div>
      <button
        onClick={toggleDarkMode}
        className='p-2 rounded-full hover:bg-zinc-700 transition cursor-pointer'
        aria-label='Toggle theme'
      >
        {theme === 'dark' ? <Sun /> : <Moon />}
      </button>
    </nav>
  );
};

export default NavBar;
