import React from "react";
import "./Button.css";
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  variant?: "primary" | "secondary";
}

export const Button: React.FC<ButtonProps> = ({
  label,
  variant = "primary",
  ...props
}) => {
  return (
    <div className="button-container">
    <button  {...props}>
      {label}
    </button>
    </div>
  );
};
