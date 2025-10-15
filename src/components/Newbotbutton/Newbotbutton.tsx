import React from 'react'
import './Newbot.css'

const Newbotbutton = ({ title = "Create a New Bot" }) => {
  return (
    <div className='bot_wrapper'>
      <div className='Newbot'>
      <div className='Plus'>+</div>
      <h3>{title}</h3>
    </div>
    </div>
  )
}

export default Newbotbutton
