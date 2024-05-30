import { render, screen, fireEvent } from "@testing-library/react";
import { BusinessForm } from "../components/BusinessForm";

describe("BusinessForm", () => {
  const mockUpdateFields = jest.fn();

  beforeEach(() => {
    mockUpdateFields.mockClear();
  });

  const mockBusinessData = {
    businessName: "Test Company",
    businessAddress: "123 Business St",
    businessEmail: "test@example.com",
  };

  test("renders heading", () => {
    render(
      <BusinessForm {...mockBusinessData} updateFields={mockUpdateFields} />
    );
    expect(
      screen.getByRole("heading", { name: "Company Details" })
    ).toBeInTheDocument();
  });

  test("renders input fields with initial values", () => {
    render(
      <BusinessForm {...mockBusinessData} updateFields={mockUpdateFields} />
    );

    expect(screen.getByLabelText(/Company Name/i)).toHaveValue(
      mockBusinessData.businessName
    );
    expect(screen.getByLabelText(/Company Address/i)).toHaveValue(
      mockBusinessData.businessAddress
    );
    expect(screen.getByLabelText(/Company Email/i)).toHaveValue(
      mockBusinessData.businessEmail
    );
  });

  test("calls updateFields on input change", () => {
    render(
      <BusinessForm {...mockBusinessData} updateFields={mockUpdateFields} />
    );

    const companyNameInput = screen.getByLabelText(/Company Name/i);
    fireEvent.change(companyNameInput, { target: { value: "New Company" } });
    expect(mockUpdateFields).toHaveBeenCalledWith({
      businessName: "New Company",
    });

    const addressInput = screen.getByLabelText(/Company Address/i);
    fireEvent.change(addressInput, { target: { value: "456 Business Rd" } });
    expect(mockUpdateFields).toHaveBeenCalledWith({
      businessAddress: "456 Business Rd",
    });

    const emailInput = screen.getByLabelText(/Company Email/i);
    fireEvent.change(emailInput, { target: { value: "new@example.com" } });
    expect(mockUpdateFields).toHaveBeenCalledWith({
      businessEmail: "new@example.com",
    });
  });
});
