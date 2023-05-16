import { useState } from "react";

const useBInput = (validateInput) => {
  const [enteredInput, setEnteredInput] = useState("");
  const [isTouched, setIsTouched] = useState(false);
  const isValid = validateInput(enteredInput);
  const enteredInputHasError = !isValid && isTouched;

  const inputValueChangeHandler = (event) => {
    setEnteredInput(event.target.value);
  };

  const onBlurHandler = (event) => {
    setIsTouched(true);
    event.preventDefault();
  };
  return {
    enteredInput,
    enteredInputHasError,
    isValid,
    inputValueChangeHandler,
    onBlurHandler,
  };
};

export default useBInput;
