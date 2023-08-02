import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App test suite", () => {
  it("should render the app", () => {
    render(<App />);
  });
  //   it("should render text hello in app component", () => {
  //     render(<App />);
  //     const element = screen.getByText("Hello");
  //     expect(element).toBeInTheDocument();
  //   });
});
