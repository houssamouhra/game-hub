import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectGroup,
  SelectValue,
} from '@/components/ui/select';

interface SortOption {
  value: string;
  label: string;
}

interface SortSelectorProps {
  sortOrder: SortOption[];
  value: string;
  onSelectSortOrder: (sortOrder: string) => void;
}

const SortSelector = ({ sortOrder, value, onSelectSortOrder }: SortSelectorProps) => {
  return (
    <Select
      value={value}
      onValueChange={(value) => {
        onSelectSortOrder(value);
      }}
    >
      <SelectTrigger className='w-full max-w-48 mr-10 bg-input/50'>
        <SelectValue placeholder='Order by' />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {sortOrder.map((order) => (
            <SelectItem key={order.value} value={order.value}>
              {order.label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default SortSelector;
