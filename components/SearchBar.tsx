import Input from "./Input";

interface SearchBarProps {
  searchQuery: string;
  onSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchBar = ({ searchQuery, onSearchChange }: SearchBarProps) => {
  return (
    <Input
      type="text"
      placeholder="Search by event name"
      className="border p-2 rounded w-full  sm:min-w-[650px] min-w-[350px] "
      value={searchQuery}
      onChange={onSearchChange}
    />
  );
};

export default SearchBar;
