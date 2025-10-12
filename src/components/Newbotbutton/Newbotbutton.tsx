import React from 'react'
import './Newbot.css'

const Newbotbutton = ({ title = "Create a New Bot" }) => {
  return (
    <div className='Newbot'>
      <div className='Plus'>+</div>
      <h3>{title}</h3>
    </div>
  )
}

export default Newbotbutton
