import React, { useState, useReducer } from "react";
import "./App.css";
import Input from "./Input";
import { initialState, showReducer } from "./reducers";

const App = () => {
  /******* FOR PROP TEST ******/
  const [display, setDisplay] = useState("TESTING TESTING");
  const [text, setText] = useState("");
  const [click, setClick] = useState("Click Me!");

  /******* FOR REDUCER TEST ******/
  const [showReducerState, dispatch] = useReducer(showReducer, initialState);
  const show = () => {
    dispatch({ type: "CLICK" });
  };
  const hide = () => {
    dispatch({ type: "UNCLICK" });
  };

  const handleChange = e => {
    setText(e.target.value);
  };

  const handleClick = e => {
    e.preventDefault();
    setDisplay(text);
    setText("");
    setClick("Ouch, got clicked T_T");
    show();
  };

  const inputClick = () => {
    setClick("Click Me!");
    hide();
  };

  console.log("STATE", showReducerState);

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
          <br />
          <div>
            {showReducerState.show ? (
              <em>TRUE: you have indeed pressed the button...</em>
            ) : (
              <em>FALSE: you have not yet pressed the button...</em>
            )}
          </div>
        </header>
      </div>
    </>
  );
};

export default App;
