import { render, screen } from "@testing-library/react";
import SuccessScreen from "../components/SuccessScreen";

describe("SuccessScreen", () => {
  test("renders success message", () => {
    render(<SuccessScreen />);
    const successMessage = screen.getByText("Form Submitted Successfully!");
    expect(successMessage).toBeInTheDocument();
  });

  test("renders account created message", () => {
    render(<SuccessScreen />);
    const accountCreatedMessage = screen.getByText("Your account has been created.🎉");
    expect(accountCreatedMessage).toBeInTheDocument();
  });

  test("renders feedback message with email link", () => {
    render(<SuccessScreen />);
    const feedbackMessage = screen.getByText(/Thank you for using our service!/);
    expect(feedbackMessage).toBeInTheDocument();
    const emailLink = screen.getByText("Send Email");
    expect(emailLink).toHaveAttribute(
      "href",
      "https://mail.google.com/mail/?view=cm&fs=1&to=jainritik@gmail.com"
    );
    expect(emailLink).toHaveAttribute("target", "_blank");
  });
});
