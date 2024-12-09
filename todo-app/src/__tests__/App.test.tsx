import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "../App";

test("adds a new task", () => {
  render(<App />);
  const input = screen.getByPlaceholderText("Enter a task");
  const button = screen.getByText("Add");

  fireEvent.change(input, { target: { value: "Test Task" } });
  fireEvent.click(button);

  expect(screen.getByText("Test Task")).toBeInTheDocument();
});
