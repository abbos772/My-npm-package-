import React from "react";

interface IconProps {
  className?: string;
  width?: number | string;
  height?: number | string;
}

const StickersMainIcon: React.FC<IconProps> = ({
  className,
  width = 50,
  height = 50,
}) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 28 28"
      fill="#646A70"
    >
      <g
        fill="none"
        stroke="#646A70"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      >
        <path d="M22 11v1a10 10 0 1 1-9-10" />
        <path d="M8 14s1.5 2 4 2s4-2 4-2" />
        <path d="M9 9h.01" />
        <path d="M15 9h.01" />
        <path d="M16 5h6" />
        <path d="M19 2v6" />
      </g>
    </svg>
  );
};

export default StickersMainIcon;
