import { Input } from '@/components/ui/input';
import Logo from '@/assets/logo.svg';

const NavBar = () => {
  return (
    <nav className='flex items-center justify-between h-16 px-6 bg-gray-400'>
      <img src={Logo} className='h-12 w-auto object-contain' />
      <div className='flex-1 flex justify-center'>
        <Input
          placeholder='Search games...'
          className='w-full max-w-xl rounded-full text-sm bg-white'
        />
      </div>
    </nav>
  );
};

export default NavBar;
