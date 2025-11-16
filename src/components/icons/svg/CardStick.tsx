import React from "react";

interface IconProps {
  className?: string;
  width?: number | string;
  height?: number | string;
  title?: string; // agar accessibility uchun sarlavha kerak bo'lsa
}

const CardStickIcon: React.FC<IconProps> = ({
  className,
  width = 40,
  height = 40,
  title,
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 24 24"
    className={className}
    role={title ? "img" : "presentation"}
    aria-hidden={title ? undefined : true}
  >
    {title ? <title>{title}</title> : null}
    <g fill="none">
      <path
        d="M9 16c.85.63 1.885 1 3 1s2.15-.37 3-1"
        stroke="#4CB2FF"
        strokeLinecap="round"
        strokeWidth={1.5}
      />
      <ellipse cx={15} cy={10.5} fill="#4CB2FF" rx={1} ry={1.5} />
      <ellipse cx={9} cy={10.5} fill="#4CB2FF" rx={1} ry={1.5} />
      <path
        d="M15 22h-3c-4.714 0-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2c4.714 0 7.071 0 8.535 1.464c.974.974 1.3 2.343 1.41 4.536M15 22a7 7 0 0 0 7-7m-7 7c0-1.861 0-2.792.245-3.545a5 5 0 0 1 3.21-3.21C19.208 15 20.139 15 22 15m0-3v3"
        stroke="#4CB2FF"
        strokeLinecap="round"
        strokeWidth={1.5}
      />
    </g>
  </svg>
);

export default CardStickIcon;
