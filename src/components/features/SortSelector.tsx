import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectGroup,
  SelectValue,
} from '@/components/ui/select';

const SortSelector = () => {
  return (
    <>
      <Select>
        <SelectTrigger className='w-full max-w-48'>
          <SelectValue placeholder='Order by' />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value='relevence'>Relevence</SelectItem>
            <SelectItem value='date added'>Date added</SelectItem>
            <SelectItem value='release date'>Release date</SelectItem>
            <SelectItem value='popularity'>Popularity</SelectItem>
            <SelectItem value='average rating'>Average rating</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </>
  );
};

export default SortSelector;
