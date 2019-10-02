import React from "react";
import App from "../App";

// import ReactDOM from 'react-dom';
// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
//   ReactDOM.unmountComponentAtNode(div);
// });

/**************************** TESTING WITH REACT-TESTING-LIBRARY *****************************/

// use 'react-testing-library' --> has better syntax
import { render, cleanup } from "@testing-library/react";

describe("Application", () => {
  // JEST renders the components onto JSDOM
  //     --> executes html/css/js files the same way a real browser does (just doesn't paint anything to the UI)
  // rendering components = time-consuming, thus need to unmount/cleanup component after each test
  afterEach(cleanup);

  // this test verifies can render the component to the DOM without crashing
  it("renders without crashing", () => {
    render(<App />);
  });

  // this test uses react-testing-library && jest-dom for testing <App/> component
  //    --> "render" = imported by react-testing-library
  //    --> "expect" = available in global scope provided by JEST
  //    --> "getByText" query = return by "render" (but queries come from the dom-testing-library)
  //          - react-testing-library renders components onto document.body, this query selects components by text
  //    --> "toBeInTheDocument" function = matcher provided by JEST-DOM (not provided by default --> configured JEST to use JEST-DOM in global setup file)
  it("renders the message on page load", () => {
    const { getByText } = render(<App />);
    expect(getByText("TESTING TESTING")).toBeInTheDocument();
  });
});
