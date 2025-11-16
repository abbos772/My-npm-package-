// src/components/icons/MenuIcon.tsx
import React from 'react';

type Props = {
  width?: number | string;
  height?: number | string;
  className?: string;
  title?: string;
};

const MenuIcon: React.FC<Props> = ({ width = 20, height = 20, className, title }) => (
  <svg
    viewBox="0 0 26 24"
    width={width}
    height={height}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    className={className}
    aria-hidden={!title}
    role={title ? 'img' : 'presentation'}
  >
    {title ? <title>{title}</title> : null}
    <circle cx="3.5" cy="5.5" r="1.25" fill="currentColor" />
    <rect x="7" y="4.4" width="15.5" height="2.2" rx="1" fill="currentColor" />

    <circle cx="3.5" cy="11.5" r="1.25" fill="currentColor" />
    <rect x="7" y="10.4" width="15.5" height="2.2" rx="1" fill="currentColor" />

    <circle cx="3.5" cy="17.5" r="1.25" fill="currentColor" />
    <rect x="7" y="16.4" width="15.5" height="2.2" rx="1" fill="currentColor" />
  </svg>
);

export default MenuIcon;
