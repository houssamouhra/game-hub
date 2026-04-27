import { useState, useEffect } from 'react';
import Darklogo from '@/assets/dark-logo.svg';
import Lightlogo from '@/assets/light-logo.svg';
import SearchInput from '@/components/features/SearchInput';
import ThemeToggle from '../features/ThemeToggle';

interface NavBarProps {
  onSearch: (searchText: string) => void;
}

const NavBar = ({ onSearch }: NavBarProps) => {
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
      <SearchInput onSearch={onSearch} />
      <ThemeToggle theme={theme} onToggleMode={toggleDarkMode} />
    </nav>
  );
};

export default NavBar;
