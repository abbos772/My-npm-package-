import React from 'react'
import './Teleg.css'

const TelegramInput = () => {
  return (
    <div className="telegram-input-wrapper">
      <span className="prefix">t.me/</span>
      <input
        type="text"
        className="search-input"
        placeholder="username_bot"
      />
    </div>
  )
}

export default TelegramInput
