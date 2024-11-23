import React, { useState, useRef } from "react";
import "./App.css"; // Importing the CSS file for styling

function App() {
  const inputRef = useRef(null);
  const resultRef = useRef(null);
  const [result, setResult] = useState(0);
  const [input, setInput] = useState("");

  // Handle button click
  const handleButtonClick = (value) => {
      setInput((prevInput) => prevInput + value);
  }

  // Handle clear input
  const handleClear = () => {
    setInput("");
    setResult(0);
  };

  const handleBackspace = () => {
    // Removes the last digit or character from the input
    setInput((prevInput) => prevInput.slice(0, -1));
  };

  // Handle the result calculation
  const handleCalculate = () => {
    try {
      const evaluatedResult = eval(input); // Using eval to evaluate the expression
      setResult(evaluatedResult);
      setInput("");
    } catch (error) {
      setResult("Error");
    }
  };

  return (
    <div className="calculator">
      <div className="result">
        <input
          ref={inputRef}
          type="text"
          value={input}
          placeholder="Enter expression"
          disabled
        />
        <div className="output" ref={resultRef}>
          <h2>{result}</h2>
        </div>
      </div>
      <div className="buttons">
        <button onClick={handleClear}>C</button>
        <button onClick={() => handleButtonClick("%")}>%</button>
        <button onClick={handleBackspace}>×</button>
        <button onClick={() => handleButtonClick("/")}>÷</button>

        <button onClick={() => handleButtonClick("7")}>7</button>
        <button onClick={() => handleButtonClick("8")}>8</button>
        <button onClick={() => handleButtonClick("9")}>9</button>
        <button onClick={() => handleButtonClick("*")}>x</button>

        <button onClick={() => handleButtonClick("4")}>4</button>
        <button onClick={() => handleButtonClick("5")}>5</button>
        <button onClick={() => handleButtonClick("6")}>6</button>
        <button onClick={() => handleButtonClick("-")}>-</button>

        <button onClick={() => handleButtonClick("1")}>1</button>
        <button onClick={() => handleButtonClick("2")}>2</button>
        <button onClick={() => handleButtonClick("3")}>3</button>
        <button onClick={() => handleButtonClick("+")}>+</button>

        <button onClick={() => handleButtonClick("00")}>00</button>
        <button onClick={() => handleButtonClick("0")}>0</button>
        <button onClick={() => handleButtonClick(".")}>.</button>
        <button onClick={handleCalculate}>=</button>

      </div>
    </div>
  );
}

export default App;
