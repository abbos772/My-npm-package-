import React from 'react';

type Props = {
  width?: number | string;
  height?: number | string;
  className?: string;
  title?: string;
};

const AddIcon: React.FC<Props> = ({ width = 16, height = 16, className, title }) => (
  <svg
    viewBox="0 0 24 24"
    width={width}
    height={height}
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden={!title}
    role={title ? 'img' : 'presentation'}
    fill="none"
  >
    {title ? <title>{title}</title> : null}
    <rect
      x="1.5"
      y="1.5"
      width="21"
      height="21"
      rx="3"
      stroke="currentColor"
      strokeWidth="1.5"
      fill="none"
    />
    <line
      x1="12"
      y1="2"
      x2="12"
      y2="22"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
    />
    <line
      x1="2"
      y1="12"
      x2="22"
      y2="12"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
    />
  </svg>
);

export default AddIcon;
