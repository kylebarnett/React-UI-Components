import React from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import ActionButton from './components/ButtonComponents/ActionButton';

const App = () => {
  
  return (
    <div class="app-container">
      <CalculatorDisplay />
      <ActionButton />
    </div>
  );
};

export default App;
