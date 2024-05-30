import { render, screen } from "@testing-library/react";
import WaitingScreen from "../components/WaitingScreen";

describe("WaitingScreen", () => {
  test("renders waiting message", () => {
    render(<WaitingScreen />);
    const waitingMessage = screen.getByText("Waiting for validation...");
    expect(waitingMessage).toBeInTheDocument();
  });
});
