import React from 'react';
import './SearchAbout.css';

interface SearchAboutProps extends React.InputHTMLAttributes<HTMLInputElement> {
  onSearch?: (value: string) => void;
}

export const SearchAbout: React.FC<SearchAboutProps> = ({
  placeholder = '',
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
        style={{paddingLeft:"17px",borderBottomLeftRadius:"15px",borderBottomRightRadius:"15px"}}
        placeholder={placeholder}
        onChange={handleChange}
        {...props}
      />
    </div>
  );
};

export type { SearchAboutProps };