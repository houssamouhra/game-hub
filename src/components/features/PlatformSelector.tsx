import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectGroup,
  SelectValue,
} from '@/components/ui/select';
import { type Platform } from '@/hooks/usePlatforms';

interface PlatformSelectorProps {
  platforms: Platform[];
}

const PlatformSelector = ({ platforms }: PlatformSelectorProps) => {
  return (
    <div className='pl-10 pb-3'>
      <Select>
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
    </div>
  );
};

export default PlatformSelector;
