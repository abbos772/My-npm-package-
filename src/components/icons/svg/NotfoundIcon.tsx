import React from "react";

export const NotfoundIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      width={96}
      height={96}
      viewBox="0 0 48 48"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
      className={props.className}
      {...props}
    >
      <circle className="lens" cx="20" cy="20" r="12" />
      <line className="handle" x1="29" y1="29" x2="40" y2="40" />

      <circle className="eye" cx="16.8" cy="18.5" r="1.6" />
      <circle className="eye" cx="23.2" cy="18.5" r="1.6" />

      <path className="mouth" d="M16 24 C18 22.5 22 22.5 24 24" />
    </svg>
  );
};
