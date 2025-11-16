import React from 'react';
import './Tabs.css';
import  MenuIcon  from '../icons/svg/MenuIcon';
import  AddIcon  from '../icons/svg/AddIcon';

const Tabs: React.FC = () => {
  return (
    <div className="Tabs_container">
      <div className="Tabs">
        <button className="Tab" aria-label="menu">
          <MenuIcon width={20} height={20} className="Tab__icon" />
        </button>

        <button className="Tab" aria-label="add">
          <AddIcon width={16} height={16} className="Tab__icon" />
        </button>
      </div>
    </div>
  );
};

export default Tabs;
