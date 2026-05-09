import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectGroup,
  SelectValue,
} from '@/components/ui/select';
import usePlatforms, { type Platform } from '@/hooks/usePlatforms';

interface PlatformSelectorProps {
  platforms: Platform[] | undefined;
  onSelectPlatform: (platform: Platform) => void;
}

const PlatformSelector = ({ platforms, onSelectPlatform }: PlatformSelectorProps) => {
  const { data, error } = usePlatforms();

  if (error) return null;

  return (
    <Select
      onValueChange={(value) => {
        const selected = platforms?.find((p) => p.name === value);
        if (selected) onSelectPlatform(selected);
      }}
    >
      <SelectTrigger className='w-full max-w-48 bg-input/50'>
        <SelectValue placeholder='Platforms' />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {data?.results.map((platform) => (
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
