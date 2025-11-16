import React from "react";
import "./CreateEmojiButton.css";
import CreateEmojiIcon from "../svg/CreateEmojiIcon";

type Props = {
  label?: string;
  onClick?: () => void;
  className?: string;
};

const CreateEmojiButton: React.FC<Props> = ({
  label = "Создать набор эмодзи",
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
        <span className="ce-icon" aria-hidden="true">
          <CreateEmojiIcon />
        </span>

        <span className="ce-label">{label}</span>
      </button>
    </div>
  );
};

export default CreateEmojiButton;
