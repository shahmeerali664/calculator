import React, { useState } from "react";
import './App.css'
function App() {
  const [cul, setCul] = useState(""); 
  const [operate, setOperate] = useState("");
  const [prevValue, setPrevValue] = useState(""); 

  
  function handleInput(event) {
    setCul(cul + event.target.value);
  }

  function handleOperate(event) {
    setPrevValue(cul);
    setCul("");
    setOperate(event.target.value);
  }

  
  const handleEqual = () => {
    const current = parseFloat(cul);
    const prev = parseFloat(prevValue);

  
    const operations = {
      "+": (a, b) => a + b,
      "-": (a, b) => a - b,
      "x": (a, b) => a * b,
      "/": (a, b) => a / b,
    };

  
    const result = operations[operate](prev, current);

    setCul(result.toString());
    setPrevValue("");
    setOperate("");
  };

  
  const handleClear = () => {
    setCul("");
    setPrevValue("");
    setOperate("");
  };

  return (
    <div className="calculator" >
      <input type="text" value={cul} readOnly />
      <br />
      <input type="button" value="9" onClick={handleInput} />
      <input type="button" value="8" onClick={handleInput} />
      <input type="button" value="7" onClick={handleInput} />
      <input type="button" value="+" onClick={handleOperate} />
      <br />
      <input type="button" value="6" onClick={handleInput} />
      <input type="button" value="5" onClick={handleInput} />
      <input type="button" value="4" onClick={handleInput} />
      <input type="button" value="-" onClick={handleOperate} />
      <br />
      <input type="button" value="3" onClick={handleInput} />
      <input type="button" value="2" onClick={handleInput} />
      <input type="button" value="1" onClick={handleInput} />
      <input type="button" value="/" onClick={handleOperate} />
      <br />
      <input type="button" value="0" onClick={handleInput} />
      <input type="button" value="Ac" onClick={handleClear} />
      <input type="button" value="=" onClick={handleEqual} />
      <input type="button" value="x" onClick={handleOperate} />
      <br />
    </div>
  );
}

export default App;
