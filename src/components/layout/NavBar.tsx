import { useState } from 'react';
import Logo from '@/assets/logo.svg';
import { Input } from '@/components/ui/input';
import { Moon, Sun } from 'lucide-react';

const NavBar = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  const toggleDarkMode = () => {
    document.documentElement.classList.toggle('dark');
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <nav className='flex items-center justify-between h-16 px-6 bg-zinc-400 dark:bg-zinc-900'>
      <img src={Logo} className='h-12 w-auto object-contain' />
      <div className='flex-1 flex justify-center'>
        <Input
          placeholder='Search games...'
          className='w-full max-w-xl rounded-full text-sm bg-white dark:bg-zinc-800'
        />
      </div>
      <button onClick={toggleDarkMode} className='cursor-pointer' aria-label='Toggle theme'>
        {theme === 'dark' ? <Sun /> : <Moon />}
      </button>
    </nav>
  );
};

export default NavBar;
