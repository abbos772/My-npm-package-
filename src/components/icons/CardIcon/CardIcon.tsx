import React from 'react';
import './CardIcon.css';

interface CardIconProps {
  icon: React.ComponentType<{ className?: string }>;
  text?: React.ReactNode;
  hasLineBreak?: boolean;
}

const CardIcon: React.FC<CardIconProps> = ({ 
  icon: Icon, 
  text, 
  hasLineBreak = false,
}) => {
  return (
    <div className="card-stick">
      <div
        className="card-inner"
        role="button"
        tabIndex={0}
      >
        <div className="icon-wrap" aria-hidden="true">
          <Icon className="stick-svg" />
        </div>

        <div className="card-text">
          {hasLineBreak ? (
            <span 
              className="line1" 
              dangerouslySetInnerHTML={{ __html: text as string }} 
            />
          ) : (
            <span className="line1">{text}</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default CardIcon;