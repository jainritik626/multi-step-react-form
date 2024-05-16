import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect"; // For extending Jest matchers
import { BusinessForm } from "../components/BusinessForm";

const mockUpdateFields = jest.fn();

describe("BusinessForm Component", () => {
  it("should render BusinessForm correctly", () => {
    const { getByLabelText } = render(
      <BusinessForm
        businessName=""
        businessAddress=""
        businessEmail=""
        updateFields={mockUpdateFields}
      />
    );

    expect(getByLabelText("Company Name")).toBeInTheDocument();
    expect(getByLabelText("Company Address")).toBeInTheDocument();
    expect(getByLabelText("Company Email")).toBeInTheDocument();
  });

  it("should update business name when input changes", () => {
    const { getByLabelText } = render(
      <BusinessForm
        businessName=""
        businessAddress=""
        businessEmail=""
        updateFields={mockUpdateFields}
      />
    );

    fireEvent.change(getByLabelText("Company Name"), {
      target: { value: "Test Company" },
    });

    expect(mockUpdateFields).toHaveBeenCalledWith({
      businessName: "Test Company",
    });
  });

  // Similar tests for business address and email...
});
