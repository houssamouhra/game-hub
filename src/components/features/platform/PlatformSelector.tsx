import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectGroup,
  SelectValue,
} from '@/ui/select';
import usePlatform from '@/hooks/usePlatform';
import usePlatforms, { type Platform } from '@/hooks/usePlatforms';

interface PlatformSelectorProps {
  selectedPlatformId?: number;
  onSelectPlatform: (platform: Platform) => void;
}

const PlatformSelector = ({ selectedPlatformId, onSelectPlatform }: PlatformSelectorProps) => {
  const { data, error } = usePlatforms();

  const selectedPlatform = usePlatform(selectedPlatformId);

  if (error) return null;

  return (
    <Select
      value={selectedPlatform?.name ?? ''}
      onValueChange={(value) => {
        const selected = data?.results.find((p) => p.name === value);
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
