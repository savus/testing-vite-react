import type React from "react";
import { TextInput } from "./TextInput";
import { PhoneInput } from "./PhoneInput";
import { SubmitButton } from "./SubmitButton";
import type { TPhoneInput, TUserInfo } from "../types";
import { useState } from "react";

export const ModalForm = ({
  setUserInformation,
}: {
  setUserInformation: (info: TUserInfo) => void;
}) => {
  const [firstNameInput, setFirstNameInput] = useState("");
  const [lastNameInput, setLastNameInput] = useState("");
  const [cityInput, setCityInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [phoneInputState, setPhoneInputState] = useState<TPhoneInput>([
    "",
    "",
    "",
  ]);

  return (
    <form
      action="#"
      onSubmit={(e) => {
        e.preventDefault();
        setUserInformation({
          firstName: firstNameInput,
          lastName: lastNameInput,
          city: cityInput,
          email: emailInput,
          phoneInput: phoneInputState,
        });
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
      <PhoneInput
        phoneInputState={phoneInputState}
        setPhoneInputState={(state: TPhoneInput) => {
          setPhoneInputState(state);
        }}
      />
      <SubmitButton />
    </form>
  );
};
