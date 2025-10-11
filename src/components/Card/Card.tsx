import React from "react";
import "./Card.css";
interface CardProps {
  title: string;
  children?: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ title, children }) => {
  return (
    <div style={{ border: "1px solid red", padding: "10px", borderRadius: "8px" }}>
      <h3>{title}</h3>
      <h1 className="A">A</h1>
      <div>{children}</div>
    </div>
  );
};

export default Card;
