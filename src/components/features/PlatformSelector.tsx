import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectGroup,
  SelectValue,
} from '@/components/ui/select';
import { type Platform } from '@/hooks/useGames';

interface PlatformSelectorProps {
  platforms: Platform[];
  onSelectPlatform: (platform: Platform) => void;
}

const PlatformSelector = ({ platforms, onSelectPlatform }: PlatformSelectorProps) => {
  return (
    <Select
      onValueChange={(value) => {
        const selected = platforms.find((p) => p.name === value);
        if (selected) onSelectPlatform(selected);
      }}
    >
      <SelectTrigger className='w-full max-w-48'>
        <SelectValue placeholder='Platforms' />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {platforms.map((platform) => (
            <SelectItem key={platform.id} value={platform.name}>
              {platform.name}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default PlatformSelector;
