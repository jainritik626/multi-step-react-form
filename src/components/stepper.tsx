import { ReactElement } from "react";

interface StepperData {
  steps: ReactElement[];
  currentStepIndex: number;
}

export const Stepper = ({ steps, currentStepIndex }: StepperData) => {
  return (
    <div className="stepper">
      {steps.map((_: any, index: number) => (
        <div
          key={index}
          className={`step ${index === currentStepIndex ? "active" : ""}`}
        ></div>
      ))}
    </div>
  );
};
