import React from 'react';
import './Notfound.css';


    const Notfound = () => {
    return (
    
       <div className='not_con'>
         <div className="notfound-card">
        <svg
        width={96}
        hanging={96}
        className="notfound-svg"
        viewBox="0 0 48 48"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
        fill='#646A70'
        >
        <circle className="lens" cx="20" cy="20" r="12" />
        <line className="handle" x1="29" y1="29" x2="40" y2="40" />


        <circle className="eye" cx="16.8" cy="18.5" r="1.6" />
        <circle className="eye" cx="23.2" cy="18.5" r="1.6" />


        <path className="mouth" d="M16 24 C18 22.5 22 22.5 24 24" />
        </svg>


        <h2 className="notfound-title">Нет результатов</h2>
        <p></p>
        </div>
       </div>
     
    );
    };


export default Notfound;