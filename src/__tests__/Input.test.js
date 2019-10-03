import React from "react";
import App from "../App";
import Input from "../Input";
import { cleanup, render, fireEvent } from "@testing-library/react";

describe("Input Field", () => {
  afterEach(cleanup);

  it("renders without crashing", () => {
    render(<Input />);
  });

  /******************************************************************************
  The following tests uses react-testing-library to test the 
  functional features of the button 'Display Input' the same way as a user would 
  experience when clicking onto that button.

  Becuase changes to the state and props were being triggered by react 
  hooks (useState, useReducer etc.), these tests also verifies that the hooks 
  are updating the data correctly.
  ******************************************************************************/

  // tests the change of props in <Input/> component when button being clicked
  //    --> verifies the prop 'click' to change from "Click Me!" to "Ouch, got clicked T_T" after "Display Input" was clicked
  //    --> the props were being passed to <Input/> , but the actual change occurs in 'App.js', thus need to render <App/> along with <Input/>
  //    --> "(click/i)" = regex expression --> returns the first node that contains the term 'click'
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
});
