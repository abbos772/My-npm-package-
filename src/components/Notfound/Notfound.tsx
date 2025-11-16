import React from 'react';
import './Notfound.css';
import { NotfoundIcon } from '../icons/svg/NotfoundIcon';

const Notfound = () => {
  return (
    <div className='not_con'>
      <div className="notfound-card">
        <NotfoundIcon className="notfound-svg"/>
        <h2 className="notfound-title">Нет результатов</h2>
        <p></p>
      </div>
    </div>
  );
};

export default Notfound;
