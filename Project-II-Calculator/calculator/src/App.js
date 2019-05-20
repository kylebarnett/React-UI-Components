import React from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import ActionButton from './components/ButtonComponents/ActionButton';
import NumberButton from './components/ButtonComponents/NumberButton';

const App = () => {

  return (
    <div className="app-container">
      <CalculatorDisplay />
      <div className="button-container">
        <div className="button">
          <ActionButton
            buttonStyle="white"
            text="clear"
          />
        </div>
        <div className="button">
          <NumberButton
            buttonStyle="red"
            text="/"
          />
        </div>
      </div>
      <div className="button-container">
        <div className="button">
          <NumberButton
            buttonStyle="ghost-white"
            text="7" />
        </div>
        <div className="button">
          <NumberButton
            buttonStyle="ghost-white"
            text="8" />
        </div>
        <div className="button">
          <NumberButton
            buttonStyle="ghost-white"
            text="9" />
        </div>
        <div className="button">
          <NumberButton
            buttonStyle="red"
            text="X" />
        </div>
      </div>
      <div className="button-container">
        <div className="button">
          <NumberButton
            buttonStyle="ghost-white"
            text="4" />
        </div>
        <div className="button">
          <NumberButton
            buttonStyle="ghost-white"
            text="5" />
        </div>
        <div className="button">
          <NumberButton
            buttonStyle="ghost-white"
            text="6" />
        </div>
        <div className="button">
          <NumberButton
            buttonStyle="red"
            text="-" />
        </div>
      </div>
      <div className="button-container">
        <div className="button">
          <NumberButton
            buttonStyle="ghost-white"
            text="1" />
        </div>
        <div className="button">
          <NumberButton
            buttonStyle="ghost-white"
            text="2" />
        </div>
        <div className="button">
          <NumberButton
            buttonStyle="ghost-white"
            text="3" />
        </div>
        <div className="button">
          <NumberButton
            buttonStyle="red"
            text="+" />
        </div>
      </div>
      <div className="button-container">
        <div className="button">
          <ActionButton
            buttonStyle="white"
            text="0"
          />
        </div>
        <div className="button">
          <NumberButton
            buttonStyle="red"
            text="="
          />
        </div>
      </div>
    </div >
  );
};

export default App;
