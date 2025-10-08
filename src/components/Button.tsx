import React from "react";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  variant?: "primary" | "secondary";
}

export const Button: React.FC<ButtonProps> = ({
  label,
  variant = "primary",
  ...props
}) => {
  const baseStyle =
    "px-4 py-2 rounded-lg font-semibold transition-colors duration-200";
  const variantStyle =
    variant === "primary"
      ? "bg-blue-600 text-white hover:bg-blue-700"
      : "bg-gray-200 text-gray-800 hover:bg-gray-300";

  return (
    <button style={{padding:"50px",background:"red"}} className={`${baseStyle} ${variantStyle}`} {...props}>
      {label}
    </button>
  );
};
