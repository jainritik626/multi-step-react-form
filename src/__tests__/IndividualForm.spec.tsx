import { render, screen, fireEvent } from "@testing-library/react";
import { IndividualForm } from "../components/IndividualForm";

describe("IndividualForm", () => {
  const mockUpdateFields = jest.fn();

  beforeEach(() => {
    mockUpdateFields.mockClear();
  });

  const mockIndividualData = {
    fullName: "John Doe",
    userAddress: "123 Main St",
    userEmail: "john.doe@example.com"
  };

  test("renders heading", () => {
    render(<IndividualForm {...mockIndividualData} updateFields={mockUpdateFields} />);
    expect(screen.getByRole("heading", { name: "Individual Details" })).toBeInTheDocument();
  });

  test("renders input fields with initial values", () => {
    render(<IndividualForm {...mockIndividualData} updateFields={mockUpdateFields} />);
    
    expect(screen.getByLabelText(/Full Name/i)).toHaveValue(mockIndividualData.fullName);
    expect(screen.getByLabelText(/Personal Address/i)).toHaveValue(mockIndividualData.userAddress);
    expect(screen.getByLabelText(/Personal Email/i)).toHaveValue(mockIndividualData.userEmail);
  });

  test("calls updateFields on input change", () => {
    render(<IndividualForm {...mockIndividualData} updateFields={mockUpdateFields} />);
    
    const fullNameInput = screen.getByLabelText(/Full Name/i);
    fireEvent.change(fullNameInput, { target: { value: 'Jane Smith' } });
    expect(mockUpdateFields).toHaveBeenCalledWith({ fullName: 'Jane Smith' });

    const addressInput = screen.getByLabelText(/Personal Address/i);
    fireEvent.change(addressInput, { target: { value: '456 Elm St' } });
    expect(mockUpdateFields).toHaveBeenCalledWith({ userAddress: '456 Elm St' });

    const emailInput = screen.getByLabelText(/Personal Email/i);
    fireEvent.change(emailInput, { target: { value: 'jane.smith@example.com' } });
    expect(mockUpdateFields).toHaveBeenCalledWith({ userEmail: 'jane.smith@example.com' });
  });
});
