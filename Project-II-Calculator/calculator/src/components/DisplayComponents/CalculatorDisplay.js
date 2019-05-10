import React from 'react';
import './Display.css';
import ActionButton from '../ButtonComponents/ActionButton'

const CalculatorDisplay = (props) => {
  return (
    <div>
      <h1>{props.message.something}</h1>
    </div>
  )
}

export default CalculatorDisplay