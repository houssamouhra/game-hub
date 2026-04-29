import { Icon } from '@iconify/react';

interface DarkModeProps {
  theme: 'light' | 'dark';
  onToggleMode: () => void;
}

const ThemeToggle = ({ theme, onToggleMode }: DarkModeProps) => {
  return (
    <button
      onClick={onToggleMode}
      className='p-2 group rounded-full hover:bg-zinc-700 transition cursor-pointer'
      aria-label='Toggle theme'
    >
      {theme === 'dark' ? (
        <Icon
          icon='tabler:sun-filled'
          width='24'
          height='24'
          className='text-input/200 group-hover:text-input/200 transition-colors'
        />
      ) : (
        <Icon
          icon='tabler:moon'
          width='24'
          height='24'
          className='text-input/200 group-hover:text-input/90 transition-colors'
        />
      )}
    </button>
  );
};

export default ThemeToggle;
