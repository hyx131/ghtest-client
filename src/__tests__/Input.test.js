import React from "react";
import App from "../App";
import Input from "../Input";
import { cleanup, render, fireEvent } from "@testing-library/react";
import { initialState, showReducer } from "../reducers";

/******************************************************************************
  The following tests uses react-testing-library to test the 
  functional features of the button 'Display Input' the same way as a user would 
  experience when clicking onto that button.

  Becuase changes to the state and props were being triggered by react 
  hooks (useState, useReducer etc.), these tests also verifies that the hooks 
  are updating the data correctly.
  ******************************************************************************/

describe("Input Field", () => {
  afterEach(cleanup);

  it("renders without crashing", () => {
    render(<Input />);
  });

  // tests the change of props in <Input/> component when button being clicked
  //    --> verifies the prop 'click' to change from "Click Me!" to "Ouch, got clicked T_T" after "Display Input" was clicked
  //    --> the props were being passed to <Input/> , but the actual change occurs in 'App.js', thus need to render <App/> along with <Input/>
  //    --> "(click/i)" = regex expression --> returns the node that contains the matcher (in this case the term 'click', ignoring case)
  //    --> "fireEvent" = helper method provided by react-testing-library to capture events being dispatched on an element
  it("props changes after button clicked", () => {
    const { getByText } = render(
      <App>
        <Input />
      </App>
    );
    expect(getByText(/click/i).textContent).toBe("Click Me!");
    fireEvent.click(getByText("Display Input"));
    expect(getByText(/clicked/i).textContent).toBe("Ouch, got clicked T_T");
  });

  // tests if useReducer hook is able to properly update data
  //    --> uses same pattern as above for the useState test (selecting DOM nodes by text)
  it("returns the initial state", () => {
    expect(initialState).toEqual({ show: false });
  });

  it("changes show from false to true", () => {
    expect(showReducer(initialState, { type: "CLICK" })).toEqual({ show: true });
  });

  it("changes show from false to true correspondingly changes <p> rendred by <App/>", () => {
    const { getByText } = render(<App />);
    expect(getByText(/FALSE: you have not yet/i).textContent).toBe("FALSE: you have not yet pressed the button...");
    fireEvent.click(getByText("Display Input"));
    expect(getByText(/TRUE: you have indeed/i).textContent).toBe("TRUE: you have indeed pressed the button...");
  });
});
