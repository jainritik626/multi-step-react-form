import { FormEvent, useEffect, useState } from "react";
import { BankForm } from "./components/BankForm";
import { BusinessForm } from "./components/BusinessForm";
import { IndividualForm } from "./components/IndividualForm";
import { useMultiStepForm } from "./hooks/useMultiStepForm";
import SuccessScreen from "./components/SuccessScreen";
import WaitingScreen from "./components/WaitingScreen";
import "./App.css";
import { FormData, INITIAL_DATA } from "./types";
import { Stepper } from "./components/stepper";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);

  const [data, setData] = useState<FormData>(() => {
    const storedData = localStorage.getItem("formData");
    return storedData ? JSON.parse(storedData) : INITIAL_DATA;
  });

  const initialStepIndex = (() => {
    const storedStepIndex = localStorage.getItem("currentStepIndex");
    return storedStepIndex ? JSON.parse(storedStepIndex) : 0;
  })();

  function updateFields(fields: Partial<FormData>) {
    setData((prev) => {
      return { ...prev, ...fields };
    });
  }

  // Custom Hook to render the forms
  const { steps, currentStepIndex, step, isFirstStep, isLastStep, back, next } =
    useMultiStepForm(
      [
        <IndividualForm {...data} updateFields={updateFields} />,
        <BusinessForm {...data} updateFields={updateFields} />,
        <BankForm {...data} updateFields={updateFields} />,
      ],
      initialStepIndex
    );

  useEffect(() => {
    localStorage.setItem("formData", JSON.stringify(data));
  }, [data]);

  useEffect(() => {
    localStorage.setItem("currentStepIndex", JSON.stringify(currentStepIndex));
  }, [currentStepIndex]);

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (isLoading || isCompleted) return;

    if (!isLastStep) {
      next();
    } else {
      setIsLoading(true);
      // Simulate asynchronous submission with setTimeout
      setTimeout(() => {
        setIsLoading(false);
        setIsCompleted(true);
        localStorage.removeItem("formData");
        localStorage.removeItem("currentStepIndex");
      }, 2000);
    }
  }

  return (
    <div className="container">
      {isLoading && <WaitingScreen />}

      {isCompleted ? (
        <SuccessScreen />
      ) : (
        !isLoading && (
          <form onSubmit={onSubmit} className="form">
            <Stepper steps={steps} currentStepIndex={currentStepIndex} />

            {step}

            <div className="button-group">
              {!isFirstStep && (
                <button type="button" onClick={back}>
                  Back
                </button>
              )}
              <button type="submit" disabled={isLoading}>
                {isLastStep ? "Finish" : "Next"}
              </button>
            </div>
          </form>
        )
      )}
    </div>
  );
}

export default App;
