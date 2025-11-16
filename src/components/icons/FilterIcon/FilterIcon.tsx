import React from "react";
import "./Filter.css";

export interface Tab {
  value: string;
  label: string;
  content?: React.ReactNode;
}

interface FilterProps {
  tabs: Tab[];
  activeTab?: string;
  onTabChange?: (value: string) => void;
  defaultActiveTab?: string;
}

const Filter: React.FC<FilterProps> = ({ 
  tabs, 
  activeTab, 
  onTabChange, 
  defaultActiveTab 
}) => {
  const isControlled = activeTab !== undefined;
  const [internalActive, setInternalActive] = React.useState(
    defaultActiveTab || (tabs.length > 0 ? tabs[0].value : "")
  );

  const currentActive = isControlled ? activeTab : internalActive;

  const handleTabClick = (value: string) => {
    if (!isControlled) {
      setInternalActive(value);
    }
    onTabChange?.(value);
  };

  if (tabs.length === 0) {
    return null;
  }

  return (
    <div className="filter-wrap" role="tablist" aria-label="Filter tabs">
      {tabs.map((tab) => (
        <button
          key={tab.value}
          role="tab"
          aria-selected={currentActive === tab.value}
          className={`filter-tab ${currentActive === tab.value ? "active" : ""}`}
          onClick={() => handleTabClick(tab.value)}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
};

export default Filter;