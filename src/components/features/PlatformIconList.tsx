import { type Platform } from '@/hooks/useGames';
import { Icon } from '@iconify/react';

interface PlatformIconListProps {
  platforms: Platform[];
}

const PlatformIconList = ({ platforms }: PlatformIconListProps) => {
  const iconMap: { [key: string]: string } = {
    pc: 'ri:windows-fill',
    playstation: 'ri:playstation-fill',
    xbox: 'ri:xbox-fill',
    nintendo: 'mdi:nintendo-switch',
    mac: 'ri:apple-fill',
    linux: 'ant-design:linux-outlined',
    android: 'uil:android',
    ios: 'mingcute:ios-fill',
    web: 'streamline-plump:web',
  };

  return (
    <>
      {platforms.map((platform) => (
        <Icon icon={iconMap[platform.slug]} className='text-gray-400' />
      ))}
    </>
  );
};

export default PlatformIconList;
