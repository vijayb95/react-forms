import { useState } from "react";
import useBInput from "../hooks/useb-input";

const BasicForm = (props) => {
  const {
    enteredInput: firstName,
    enteredInputHasError: firstNameHasError,
    isValid: firstNameIsValid,
    inputValueChangeHandler: firstNameChangeHandler,
    onBlurHandler: firstNameBlurHandler,
  } = useBInput((value) => value.trim() !== "");

  const {
    enteredInput: lastName,
    enteredInputHasError: lastNameHasError,
    isValid: lastNameIsValid,
    inputValueChangeHandler: lastNameChangeHandler,
    onBlurHandler: lastNameBlurHandler,
  } = useBInput((value) => value.trim() !== "");

  const {
    enteredInput: emailAddress,
    enteredInputHasError: emailAddressHasError,
    isValid: emailAddressIsValid,
    inputValueChangeHandler: emailAddressChangeHandler,
    onBlurHandler: emailAddressBlurHandler,
  } = useBInput((value) => (value.trim() !== "") & value.includes("@"));

  let formIsValid = false;

  if (firstNameIsValid & lastNameIsValid & emailAddressIsValid) {
    formIsValid = true;
  }

  const formSubmitHandler = () => {};

  const emailErrorText =
    (emailAddress.trim() === "" && "Email Address can not be blank!") ||
    (emailAddress.includes("@") === false && "Email Address must contain @");

  const firstNameInputClass = firstNameHasError
    ? "form-control invalid"
    : "form-control";
  const lastNameInputClass = lastNameHasError
    ? "form-control invalid"
    : "form-control";
  const emailAddressInputClass = emailAddressHasError
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="control-group">
        <div className={firstNameInputClass}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            onChange={firstNameChangeHandler}
            value={firstName}
            onBlur={firstNameBlurHandler}
          />
          {firstNameHasError && (
            <p className="error-text">Field must not be empty</p>
          )}
        </div>
        <div className={lastNameInputClass}>
          <label htmlFor="name">Last Name</label>
          <input
            type="text"
            id="name"
            onChange={lastNameChangeHandler}
            value={lastName}
            onBlur={lastNameBlurHandler}
          />
          {lastNameHasError && (
            <p className="error-text">Field must not be empty</p>
          )}
        </div>
      </div>
      <div className={emailAddressInputClass}>
        <label htmlFor="name">E-Mail Address</label>
        <input
          type="text"
          id="name"
          onChange={emailAddressChangeHandler}
          value={emailAddress}
          onBlur={emailAddressBlurHandler}
        />
        {emailAddressHasError && <p className="error-text">{emailErrorText}</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
