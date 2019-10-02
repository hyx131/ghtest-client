import React, { useState } from "react";
import "./App.css";
import Input from "./Input";

const App = () => {
  const [text, setText] = useState("");

  const handleChange = e => {
    setText(e.target.value);
  };

  const handleClick = e => {
    e.preventDefault();
    console.log(text);
    setText("");
  };

  return (
    <>
      <div className="App">
        <header className="App-header">
          <h1>TESTING TESTING</h1>
          <Input value={text} handleChange={handleChange} handleClick={handleClick} />
        </header>
      </div>
    </>
  );
};

export default App;
