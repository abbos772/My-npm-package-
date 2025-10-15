import React from 'react'
import '../Notfound/Notfound.css'
const Stickers = () => {
        return (
            <div  className="notfound-wrapper">
             
        <div className="notfound-card">
               <div className='Stic'>
        <svg className="notfound-svg" xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 28 28" fill="#646A70"><g fill="none" stroke="#646A70" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M22 11v1a10 10 0 1 1-9-10"/><path d="M8 14s1.5 2 4 2s4-2 4-2M9 9h.01M15 9h.01M16 5h6m-3-3v6"/></g></svg>
            

        <p className='card_flex'>
            Для загрузки в набор нажмите на один или несколько стикеров или перетяните их в эту область
        </p>
        <div className='addStick1'>
           <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"><path fill="#ffff" fill-rule="evenodd" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10Zm-3.603-6.447a.75.75 0 0 1 1.05-.155c.728.54 1.607.852 2.553.852s1.825-.313 2.553-.852a.75.75 0 1 1 .894 1.204A5.766 5.766 0 0 1 12 17.75a5.766 5.766 0 0 1-3.447-1.148a.75.75 0 0 1-.156-1.049ZM16 10.5c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5s.448-1.5 1-1.5s1 .672 1 1.5ZM9 12c.552 0 1-.672 1-1.5S9.552 9 9 9s-1 .672-1 1.5s.448 1.5 1 1.5Z" clip-rule="evenodd"/></svg> <h4>Добавить стикеры</h4>
        </div>
        </div>
        </div>
        </div>
        )
}

export default Stickers
