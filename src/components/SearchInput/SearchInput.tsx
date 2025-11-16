import React from 'react';
import './SearchInput.css';
import  SearchIcon  from '../icons/svg/SearchIcon';

interface SearchInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  onSearch?: (value: string) => void;
}

export const SearchInput: React.FC<SearchInputProps> = ({
  placeholder = 'Поиск',
  onSearch,
  className = '',
  ...props
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onSearch) {
      onSearch(e.target.value);
    }
    if (props.onChange) {
      props.onChange(e);
    }
  };

  return (
    <div className={`search-wrapper ${className}`}>
      <SearchIcon className="search-icon" width={16} height={16} />

      <input
        type="text"
        className="search-input"
        style={{ paddingLeft: "35px" }}
        placeholder={placeholder}
        onChange={handleChange}
        {...props}
      />
    </div>
  );
};

export type { SearchInputProps };
