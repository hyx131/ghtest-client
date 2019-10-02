import React from "react";
import Input from "../Input";
import { cleanup, render, fireEvent } from "@testing-library/react";

describe("Input Field", () => {
  afterEach(cleanup);

  it("renders without crashing", () => {
    render(<Input />);
  });
});
