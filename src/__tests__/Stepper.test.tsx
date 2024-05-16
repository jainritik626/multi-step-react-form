import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // For extending Jest matchers
import { Stepper } from '../components/stepper';
describe('Stepper Component', () => {
  it('should render Stepper correctly with active step', () => {
    const steps = [<div key={1}>Step 1</div>, <div key={2}>Step 2</div>];
    const currentStepIndex = 1;

    const { container } = render(
      <Stepper steps={steps} currentStepIndex={currentStepIndex} />
    );

    expect(container.querySelectorAll('.step')).toHaveLength(2);
    expect(container.querySelectorAll('.step.active')).toHaveLength(1);
    expect(container.querySelectorAll('.step')[1]).toHaveClass('active');
  });
});
