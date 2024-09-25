import { useState } from "react";

import "./App.css";

function App() {
  const [firstNumber, setFirstNumber] = useState("0");
  const [secondNumber, setSecondNumber] = useState("0");
  const [operator, setOperator] = useState("+");
  const [result, setResult] = useState("0");
  const [stored, setStored] = useState(null);

  const handleFirstNumber = (target) => {
    const number = target.target.innerText;
    if (number == "Clear") {
      setFirstNumber("0");
    } else if (firstNumber === "0") {
      setFirstNumber(number);
    } else {
      setFirstNumber(firstNumber + number);
    }
  };

  const handleSecondNumber = (target) => {
    const number = target.target.innerText;
    if (number == "Clear") {
      setSecondNumber("0");
    } else if (secondNumber === "0") {
      setSecondNumber(number);
    } else {
      setSecondNumber(secondNumber + number);
    }
  };

  const handleOperator = (target) => {
    setOperator(target.target.innerText);
  };

  const handleCalculation = () => {
    switch (operator) {
      case "+":
        setResult(parseInt(firstNumber) + parseInt(secondNumber));
        break;
      case "-":
        setResult(parseInt(firstNumber) - parseInt(secondNumber));
        break;
      case "*":
        setResult(parseInt(firstNumber) * parseInt(secondNumber));
        break;
      case "÷":
        setResult(parseInt(firstNumber) / parseInt(secondNumber));
        break;
      default:
        setResult("ERROR");
    }
  };

  const handleSetStored = () => {
    setStored(result);
  };

  const recallFirstNumber = () => {
    if (stored === null) {
      setFirstNumber("0");
    } else {
      setFirstNumber(stored);
    }
  };

  const recallSecondNumber = () => {
    if (stored === null) {
      setSecondNumber("0");
    } else {
      setSecondNumber(stored);
    }
  };

  return (
    <div className="calculator">
      <div className="panel">
        <p>{firstNumber}</p>
        <div className="numbers">
          <button onClick={handleFirstNumber}>1</button>
          <button onClick={handleFirstNumber}>2</button>
          <button onClick={handleFirstNumber}>3</button>
          <button onClick={handleFirstNumber}>4</button>
          <button onClick={handleFirstNumber}>5</button>
          <button onClick={handleFirstNumber}>6</button>
          <button onClick={handleFirstNumber}>7</button>
          <button onClick={handleFirstNumber}>8</button>
          <button onClick={handleFirstNumber}>9</button>
          <button onClick={handleFirstNumber}>0</button>
          <button onClick={handleFirstNumber}>Clear</button>
        </div>
        <div>
          <button onClick={recallFirstNumber}>Recall</button>
        </div>
      </div>

      <div className="panel">
        <p>{operator}</p>
        <div className="numbers">
          <button onClick={handleOperator}>+</button>
          <button onClick={handleOperator}>-</button>
          <button onClick={handleOperator}>*</button>
          <button onClick={handleOperator}>÷</button>
        </div>
      </div>

      <div className="panel">
        <p>{secondNumber}</p>
        <div className="numbers">
          <button onClick={handleSecondNumber}>1</button>
          <button onClick={handleSecondNumber}>2</button>
          <button onClick={handleSecondNumber}>3</button>
          <button onClick={handleSecondNumber}>4</button>
          <button onClick={handleSecondNumber}>5</button>
          <button onClick={handleSecondNumber}>6</button>
          <button onClick={handleSecondNumber}>7</button>
          <button onClick={handleSecondNumber}>8</button>
          <button onClick={handleSecondNumber}>9</button>
          <button onClick={handleSecondNumber}>0</button>
          <button onClick={handleSecondNumber}>Clear</button>
        </div>
        <div>
          <button onClick={recallSecondNumber}>Recall</button>
        </div>
      </div>
      <div className="panel answer">
        <p>{result}</p>
        <div>
          <button onClick={handleCalculation}>=</button>
        </div>
        <div>
          <button onClick={handleSetStored}>Store</button>
        </div>
      </div>
      <div>
        <p>Currently storing answer: {stored}</p>
      </div>
    </div>
  );
}

export default App;
