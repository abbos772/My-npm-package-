import React from 'react';
import './Searchbotname.css';

interface SearchbotnameProps extends React.InputHTMLAttributes<HTMLInputElement> {
  onSearch?: (value: string) => void;
}

export const Searchbotname: React.FC<SearchbotnameProps> = ({
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
        style={{paddingLeft:"17px" , borderTopLeftRadius:"15px",borderTopRightRadius:"15px"}}
        placeholder={placeholder}
        onChange={handleChange}
        {...props}
      />
    </div>
  );
};

export type { SearchbotnameProps };