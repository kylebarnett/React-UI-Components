import React from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import ActionButton from './components/ButtonComponents/ActionButton';

const App = () => {
  
  const message = {
    something: 'Hello does this work?'
  }
  return (
    <div>
      <CalculatorDisplay message={message}/>
      <ActionButton message={message}/>
    </div>
  );
};

export default App;
