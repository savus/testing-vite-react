import { TextInput } from "./TextInput";
import { PhoneInput } from "./PhoneInput";
import { SubmitButton } from "./SubmitButton";
import type { TPhoneInput, TPhoneInputAlt, TUserInfo } from "../types";
import { useState } from "react";
import { ErrorMessage } from "./ErrorMessage";
import {
  isEmailValid,
  isNameValid,
  isPhoneValid,
  patterns,
  validate,
} from "../js/validations";
import { PhoneInputAlt } from "./PhoneInputAlt";

const firstNameErrorMessage = "First name is invalid, please re enter";
const lastNameErrorMessage = "Last name is invalid, please re enter";

export const ModalForm = ({
  setUserInformation,
}: {
  setUserInformation: (info: TUserInfo) => void;
}) => {
  const [firstNameInput, setFirstNameInput] = useState("");
  const [lastNameInput, setLastNameInput] = useState("");
  const [cityInput, setCityInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  // const [phoneInputState, setPhoneInputState] = useState<TPhoneInput>([
  //   "",
  //   "",
  //   "",
  // ]);
  const [phoneInputState, setPhoneInputState] = useState("");

  const [hasSubmitted, setHasSubmitted] = useState(false);
  const isFirstNameValid = validate(patterns.nameValidation, firstNameInput);
  const isLastNameValid = validate(patterns.nameValidation, lastNameInput);
  const phoneIsValid = validate(patterns.telephone, phoneInputState);
  const emailIsValid = isEmailValid(emailInput);

  const showFirstNameError = hasSubmitted && !isFirstNameValid;
  const showLastNameError = hasSubmitted && !isLastNameValid;
  const showPhoneError = hasSubmitted && !phoneIsValid;
  const showEmailError = hasSubmitted && !emailIsValid;

  const doBadInputsExist =
    !isFirstNameValid || !isLastNameValid || !phoneIsValid || !emailIsValid;
  return (
    <form
      action="#"
      onSubmit={(e) => {
        e.preventDefault();
        if (!doBadInputsExist) {
          setUserInformation({
            firstName: firstNameInput,
            lastName: lastNameInput,
            city: cityInput,
            email: emailInput,
            phoneInput: phoneInputState,
          });
          console.log(phoneInputState);
        }
        setHasSubmitted(true);
      }}
    >
      <TextInput
        labelFor="first-name"
        labelText="First Name"
        inputProps={{
          id: "first-name",
          placeholder: "Type your first name here",
          name: "first-name",
          type: "text",
          value: firstNameInput,
          onChange: (e) => setFirstNameInput(e.target.value),
        }}
      />
      {showFirstNameError && <ErrorMessage message={firstNameErrorMessage} />}
      <TextInput
        labelFor="last-name"
        labelText="Last Name"
        inputProps={{
          id: "last-name",
          placeholder: "Type your last name here",
          name: "last-name",
          type: "text",
          value: lastNameInput,
          onChange: ({ target: { value } }) => setLastNameInput(value),
        }}
      />
      {showLastNameError && <ErrorMessage message={lastNameErrorMessage} />}
      <TextInput
        labelFor="email"
        labelText="Email"
        inputProps={{
          id: "email",
          placeholder: "ex. something@gmail.com",
          name: "email",
          type: "email",
          value: emailInput,
          onChange: ({ target: { value } }) => setEmailInput(value),
        }}
      />
      {showEmailError && <ErrorMessage message={"Invalid Email"} />}
      <TextInput
        labelFor="city"
        labelText="City"
        inputProps={{
          id: "city",
          placeholder: "ex. hobbiton",
          name: "city",
          value: cityInput,
          onChange: ({ target: { value } }) => setCityInput(value),
        }}
      />
      {/* <PhoneInput
        phoneInputState={phoneInputState}
        setPhoneInputState={(state: TPhoneInput) => {
          setPhoneInputState(state);
        }}
      /> */}
      <PhoneInputAlt
        phoneInputState={phoneInputState}
        setPhoneInputState={(input: TPhoneInputAlt) => {
          setPhoneInputState(input);
        }}
      />
      {showPhoneError && <ErrorMessage message={"Phone number is invalid"} />}
      <SubmitButton />
    </form>
  );
};
