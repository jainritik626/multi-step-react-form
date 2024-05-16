import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { BankForm } from "../components/BankForm";

const mockUpdateFields = jest.fn();

describe("BankForm Component", () => {
  it("should render BankForm correctly", () => {
    const { getByLabelText } = render(
      <BankForm accountNumber="" bankName="" updateFields={mockUpdateFields} />
    );

    expect(getByLabelText("Account Number")).toBeTruthy();
    expect(getByLabelText("Bank Name")).toBeTruthy();
  });

  it("should update account number when input changes", () => {
    const { getByLabelText } = render(
      <BankForm accountNumber="" bankName="" updateFields={mockUpdateFields} />
    );

    fireEvent.change(getByLabelText("Account Number"), {
      target: { value: "123456" },
    });

    expect(mockUpdateFields).toHaveBeenCalledWith({ accountNumber: "123456" });
  });

  it("should update bank name when input changes", () => {
    const { getByLabelText } = render(
      <BankForm accountNumber="" bankName="" updateFields={mockUpdateFields} />
    );

    fireEvent.change(getByLabelText("Bank Name"), {
      target: { value: "Test Bank" },
    });

    expect(mockUpdateFields).toHaveBeenCalledWith({ bankName: "Test Bank" });
  });
});
