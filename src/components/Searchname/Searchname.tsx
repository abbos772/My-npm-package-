import React from 'react';
import '../SearchInput/SearchInput.css';

interface SearchnameProps extends React.InputHTMLAttributes<HTMLInputElement> {
  onSearch?: (value: string) => void;
}

export const Searchname: React.FC<SearchnameProps> = ({
  placeholder = 'Название набора стикеров',
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
      <input
        type="text"
        className="search-input"
        style={{paddingLeft:"17px"}}
        placeholder={placeholder}
        onChange={handleChange}
        {...props}
      />
    </div>
  );
};

export type { SearchnameProps };