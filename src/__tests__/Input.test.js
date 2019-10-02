import React from "react";
import App from "../App";
import Input from "../Input";
import { cleanup, render, fireEvent } from "@testing-library/react";

describe("Input Field", () => {
  afterEach(cleanup);

  it("renders without crashing", () => {
    render(<Input />);
  });

  // it("props changes after button clicked", () => {
  //   const { getByText } = render(
  //     <App>
  //       <Input />
  //     </App>
  //   );

  //   expect(getByText(/TESTING/i).textContent.toBe("TESTING TESTING"));

  //   fireEvent.click(getByText("Display Input"));

  //   expect(getByText(/hi/i).textContent.toBe("hi"));
  // });
});
