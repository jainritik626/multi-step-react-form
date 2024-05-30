import { render, screen, fireEvent } from "@testing-library/react";
import { BankForm } from "../components/BankForm";

describe("BankForm", () => {
  const mockUpdateFields = jest.fn();

  beforeEach(() => {
    mockUpdateFields.mockClear();
  });

  const mockBankData = {
    accountNumber: "123456789",
    bankName: "Bank of Testing",
  };

  test("renders heading", () => {
    render(<BankForm {...mockBankData} updateFields={mockUpdateFields} />);
    expect(
      screen.getByRole("heading", { name: "Account Details" })
    ).toBeInTheDocument();
  });

  test("renders input fields with initial values", () => {
    render(<BankForm {...mockBankData} updateFields={mockUpdateFields} />);

    expect(screen.getByLabelText(/Bank Name/i)).toHaveValue(
      mockBankData.bankName
    );
  });

  test("calls updateFields on input change", () => {
    render(<BankForm {...mockBankData} updateFields={mockUpdateFields} />);

    const accountNumberInput = screen.getByLabelText(/Account Number/i);
    fireEvent.change(accountNumberInput, { target: { value: "987654321" } });
    expect(mockUpdateFields).toHaveBeenCalledWith({
      accountNumber: "987654321",
    });

    const bankNameInput = screen.getByLabelText(/Bank Name/i);
    fireEvent.change(bankNameInput, { target: { value: "New Bank Name" } });
    expect(mockUpdateFields).toHaveBeenCalledWith({
      bankName: "New Bank Name",
    });
  });
});
