import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { FormWrapper } from "../components/FormWrapper";

describe("FormWrapper Component", () => {
  it("should render FormWrapper correctly", () => {
    const { getByText } = render(
      <FormWrapper title="Test Title">
        <div>Test Children</div>
      </FormWrapper>
    );

    expect(getByText("Test Title")).toBeInTheDocument();
    expect(getByText("Test Children")).toBeInTheDocument();
  });
});
