import React from "react";
import "./CreateStikicon.css";
import CreateStikIcon from "../svg/CreateStikIcon";

type Props = {
  label?: string;
  onClick?: () => void;
  className?: string;
};

const CreateStik: React.FC<Props> = ({
  label = "Создать набор стикеров",
  onClick,
  className = "",
}) => {
  return (
    <div className="Create_wrapper">
      <button
        type="button"
        className={`create-emoji ${className}`}
        onClick={onClick}
        aria-label={label}
      >
        <span className="cs-icon" aria-hidden="true">
          <CreateStikIcon />
        </span>

        <span className="cs-label">{label}</span>
      </button>
    </div>
  );
};

export default CreateStik;
