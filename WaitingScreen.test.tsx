import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; 
import WaitingScreen from '../components/WaitingScreen'; 

describe('WaitingScreen component', () => {
  test('renders "Waiting for validation..." text', () => {
    const { getByText } = render(<WaitingScreen />);
    const waitingText = getByText(/Waiting for validation.../i);
    expect(waitingText).toBeInTheDocument();
  });

  test('renders with the correct class name', () => {
    const { container } = render(<WaitingScreen />);
    console.log(container)
    const screenDiv = container.querySelector('.waiting-screen');
    expect(screenDiv).toBeInTheDocument();
  });
});
