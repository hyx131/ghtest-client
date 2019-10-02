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

// JEST renders the components onto JSDOM
//     --> executes html/css/js files the same way a real browser does (just doesn't paint anything to the UI)
// rendering components = time-consuming, thus need to unmount/cleanup component after each test
afterEach(cleanup);

// this test verifies can render the component to the DOM without crashing
it("renders without creashing", () => {
  render(<App />);
});
