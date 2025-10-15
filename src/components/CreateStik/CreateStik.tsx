import React from "react";
import "../CreateEmojiButton/CreateEmojiButton.css";

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
          {/* main sticker/emoji icon - uses currentColor so CSS controls the color */}
         <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><g fill="none"><path stroke="#4CB2FF" stroke-linecap="round" stroke-width="1.5" d="M9 16c.85.63 1.885 1 3 1s2.15-.37 3-1"/><ellipse cx="15" cy="10.5" fill="#4CB2FF" rx="1" ry="1.5"/><ellipse cx="9" cy="10.5" fill="#4CB2FF" rx="1" ry="1.5"/><path stroke="#4CB2FF" stroke-linecap="round" stroke-width="1.5" d="M15 22h-3c-4.714 0-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2c4.714 0 7.071 0 8.535 1.464c.974.974 1.3 2.343 1.41 4.536M15 22a7 7 0 0 0 7-7m-7 7c0-1.861 0-2.792.245-3.545a5 5 0 0 1 3.21-3.21C19.208 15 20.139 15 22 15m0-3v3"/></g></svg>

          {/* small plus badge overlapping the icon */}
          {/* <span className="cs-badge" aria-hidden="true">
            <svg viewBox="0 0 24 24" width="10" height="10" aria-hidden="true">
              <line x1="12" y1="6" x2="12" y2="18" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
              <line x1="6" y1="12" x2="18" y2="12" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </span> */}
        </span>

        <span className="cs-label">{label}</span>
      </button>
    </div>
  );
};

export default CreateStik;
