import React from "react";

interface IconProps {
  className?: string;
}

export const CardEmojiIcon: React.FC<IconProps> = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="39"
      height="39"
      viewBox="0 0 24 24"
      className={className}
    >
      <g
        fill="none"
         stroke="#4CB2FF"
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
