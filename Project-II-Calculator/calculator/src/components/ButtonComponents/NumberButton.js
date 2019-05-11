import React from 'react';
import './Button.css';

const NumberButton = props => {
  return (
    <div>
      <button className={`individualButtons ${props.buttonStyle}`}>{props.text}</button>
    </div>
  )
}

export default NumberButton