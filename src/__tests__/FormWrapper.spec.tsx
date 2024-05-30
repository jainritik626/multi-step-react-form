import { render, screen } from "@testing-library/react";
import { FormWrapper } from "../components/FormWrapper";

describe("FormWrapper", () => {
  test("renders title correctly", () => {
    render(<FormWrapper title="Test Title" children />);
    const titleElement = screen.getByText("Test Title");
    expect(titleElement).toBeInTheDocument();
  });

  test("renders children correctly", () => {
    render(
      <FormWrapper title="Test Title">
        <input type="text" />
        <button>Submit</button>
      </FormWrapper>
    );
    const inputElement = screen.getByRole("textbox");
    const buttonElement = screen.getByRole("button", { name: "Submit" });
    expect(inputElement).toBeInTheDocument();
    expect(buttonElement).toBeInTheDocument();
  });
});
