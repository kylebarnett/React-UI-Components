import React from 'react';
import './Button.css';

const ActionButton = (props) => {
  return (
    <div>
      <button className={` basicButtonStyles ${props.buttonStyle}`}>{props.text}</button>
    </div>
  )
}

export default ActionButton