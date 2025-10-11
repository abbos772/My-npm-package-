import React from 'react';
import './Tabs.css';

const Tabs: React.FC = () => {
  return (
    <div className="Tabs_container">
      <div className="Tabs">
        <button className="Tab" aria-label="menu">
          <svg
            viewBox="0 0 26 24"
            width="20"
            height="20"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            aria-hidden="true"
          >
            <circle cx="3.5" cy="5.5" r="1.25" fill="currentColor" />
            <rect x="7" y="4.4" width="15.5" height="2.2" rx="1" fill="currentColor" />

            <circle cx="3.5" cy="11.5" r="1.25" fill="currentColor" />
            <rect x="7" y="10.4" width="15.5" height="2.2" rx="1" fill="currentColor" />

            <circle cx="3.5" cy="17.5" r="1.25" fill="currentColor" />
            <rect x="7" y="16.4" width="15.5" height="2.2" rx="1" fill="currentColor" />
          </svg>
        </button>

        <button className="Tab" aria-label="add">
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-hidden="true"
          >
            <rect
              x="1.5"
              y="1.5"
              width="21"
              height="21"
              rx="3"
              stroke="currentColor"
              strokeWidth="1.5"
              fill="none"
            />
            <line
              x1="12"
              y1="2"
              x2="12"
              y2="22"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
            <line
              x1="2"
              y1="12"
              x2="22"
              y2="12"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Tabs;
