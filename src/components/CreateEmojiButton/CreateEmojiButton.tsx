import React from "react";
import "./CreateEmojiButton.css";

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
    <button
      type="button"
      className={`create-emoji ${className}`}
      onClick={onClick}
      aria-label={label}
    >
      <span className="ce-icon" aria-hidden="true">
        {/* Clean inline SVG sized to match screenshot */}
       <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="#4CB2FF"><g fill="none" stroke="#4CB2FF" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M22 11v1a10 10 0 1 1-9-10"/><path d="M8 14s1.5 2 4 2s4-2 4-2M9 9h.01M15 9h.01M16 5h6m-3-3v6"/></g></svg>
      </span>

      <span className="ce-label">{label}</span>
    </button>
  );
};

export default CreateEmojiButton;
