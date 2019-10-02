import React, { useState } from "react";
import "./App.css";
import Input from "./Input";

const App = () => {
  const [display, setDisplay] = useState("TESTING TESTING");
  const [text, setText] = useState("");
  /******* PROP TEST ******/
  const [click, setClick] = useState("Click Me!");

  const handleChange = e => {
    setText(e.target.value);
  };

  const handleClick = e => {
    e.preventDefault();
    setDisplay(text);
    setText("");
    setClick("Ouch, got clicked!");
  };

  const inputClick = () => {
    setClick("Click Me!");
  };

  return (
    <>
      <div className="App">
        <header className="App-header">
          <h1>{display}</h1>
          <Input
            value={text}
            click={click}
            setClick={inputClick}
            handleChange={handleChange}
            handleClick={handleClick}
          />
        </header>
      </div>
    </>
  );
};

export default App;
