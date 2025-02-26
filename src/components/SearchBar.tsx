import { useSearchParams } from "react-router";
import Search from "../icons/Search"
import React, { ChangeEvent } from "react";

interface SearchInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

const SearchInput: React.FC<SearchInputProps> = ({
  value,
  onChange,
  placeholder = "Pesquisar...",
}) => {
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return (
    <div className="relative w-full md:max-w-5/12 lg:max-w-4/12">
      <input
        type="text"
        value={value}
        onChange={handleInputChange}
        placeholder={placeholder}
        className="w-full py-3 px-4 bg-white border-2 border-gray-20 text-black-neutral rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none focus:border-transparent"
        aria-label="Search employees"
      />
      <span className="absolute inset-y-0 right-3 flex items-center text-gray-20 ">
        <Search />
      </span>
    </div>
  );
};


function SearchBar() {
  const [searhParams, setSearchParams] = useSearchParams({ search: '' });
  const search = searhParams.get('search')  || '';


  return (
    <div className="w-full max-w-11/12 mx-auto">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 my-4 md:my-10 p-2">
        <h1 className="text-start">Funcionários</h1>
        <SearchInput
          value={search}
          onChange={e => setSearchParams(prev => { prev.set('search', e); return prev; })}
          placeholder="Pesquisar"
        />
      </div>
    </div>
  );
}

export default SearchBar