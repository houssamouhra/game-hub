import { Icon } from '@iconify/react';

interface DarkModeProps {
  theme: 'light' | 'dark';
  onToggleMode: () => void;
}

const ThemeToggle = ({ theme, onToggleMode }: DarkModeProps) => {
  return (
    <button
      onClick={onToggleMode}
      className='p-2 group rounded-full hover:bg-input/90 transition cursor-pointer'
      aria-label='Toggle theme'
    >
      {theme === 'dark' ? (
        <Icon
          icon='tabler:moon'
          width='22'
          height='22'
          className='text-input/200 group-hover:text-input/200 transition-colors'
        />
      ) : (
        <Icon
          icon='tabler:sun-high'
          width='22'
          height='22'
          className='text-input/200 group-hover:text-input/200 transition-colors'
        />
      )}
    </button>
  );
};

export default ThemeToggle;
