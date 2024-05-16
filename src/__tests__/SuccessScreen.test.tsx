import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect"; // For extending Jest matchers
import SuccessScreen from "../components/SuccessScreen";

describe("SuccessScreen Component", () => {
  it("should render SuccessScreen correctly", () => {
    const { getByText } = render(<SuccessScreen />);

    expect(getByText("Form Submitted Successfully!")).toBeInTheDocument();
    expect(getByText("Your account has been created.")).toBeInTheDocument();
    expect(getByText("Send a email")).toHaveAttribute(
      "href",
      "https://mail.google.com/mail/?view=cm&fs=1&to=jainritik@gmail.com"
    );
  });
});
