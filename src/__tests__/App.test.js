import React from "react";
import App from "../App";

// import ReactDOM from 'react-dom';
// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
//   ReactDOM.unmountComponentAtNode(div);
// });

/**************************** TESTING WITH REACT-TESTING-LIBRARY *****************************/

// 'react-testing-library' has better syntax
// JEST renders the components onto jsdom
//     --> executes html/css/js files the same way a real browser does (just doesn't paint anything to the UI)
// rendering components = time-consuming, thus need to unmount/cleanup component after each test

import { render, cleanup } from "@testing-library/react";

afterEach(cleanup);

it("renders without creashing", () => {
  render(<App />);
});
