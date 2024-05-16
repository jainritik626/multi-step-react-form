import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect"; // For extending Jest matchers
import { IndividualForm } from "../components/IndividualForm";

const mockUpdateFields = jest.fn();

describe("IndividualForm Component", () => {
  it("should render IndividualForm correctly", () => {
    const { getByLabelText } = render(
      <IndividualForm
        fullName=""
        userAddress=""
        userEmail=""
        updateFields={mockUpdateFields}
      />
    );

    expect(getByLabelText("Full Name")).toBeTruthy();
    expect(getByLabelText("Personal Address")).toBeTruthy();
    expect(getByLabelText("Personal Email")).toBeTruthy();
  });

  it("should update full name when input changes", () => {
    const { getByLabelText } = render(
      <IndividualForm
        fullName=""
        userAddress=""
        userEmail=""
        updateFields={mockUpdateFields}
      />
    );

    fireEvent.change(getByLabelText("Full Name"), {
      target: { value: "John Doe" },
    });

    expect(mockUpdateFields).toHaveBeenCalledWith({ fullName: "John Doe" });
  });

  // Similar tests for user address and email...
});
