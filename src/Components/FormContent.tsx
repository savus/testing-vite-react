import { SubmitButton } from "./SubmitButton";
import { TextInput } from "./TextInput";
import "../css/form-content.css";
import { PhoneInput } from "./PhoneInput";
import { useUserContext } from "./Providers/UserInfoProvider";
import { useState } from "react";
import type { TPhoneInput } from "../types";

export const FormContent = () => {
  const { userInformation, setUserInformation } = useUserContext();

  const [firstNameInput, setFirstNameInput] = useState("");
  const [lastNameInput, setLastNameInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [cityInput, setCityInput] = useState("");
  const [phoneInput, setPhoneInput] = useState<TPhoneInput>(["", "", ""]);

  const [hasSubmitted, setHasSubmitted] = useState(false);
  return (
    <form
      className="form-content"
      action="#"
      onSubmit={(e) => {
        e.preventDefault();
        setHasSubmitted(true);
        if (hasSubmitted) {
          setUserInformation({
            firstName: firstNameInput,
            lastName: lastNameInput,
            city: cityInput,
            email: emailInput,
            phone: phoneInput.join(""),
          });
        }
      }}
    >
      <TextInput
        labelText="First Name"
        labelFor="first-name"
        inputProps={{
          id: "first-name",
          type: "text",
          placeholder: "Type your first name here",
          value: firstNameInput,
          onChange: ({ target: { value } }) => setFirstNameInput(value),
        }}
      />

      <TextInput
        labelText="Last Name"
        labelFor="last-name"
        inputProps={{
          id: "last-name",
          type: "text",
          placeholder: "Type your last name here",
          value: lastNameInput,
          onChange: ({ target: { value } }) => setLastNameInput(value),
        }}
      />

      <TextInput
        labelText="Email"
        labelFor="email"
        inputProps={{
          id: "email",
          type: "email",
          placeholder: "email ex something@hotmail.com",
          value: emailInput,
          onChange: ({ target: { value } }) => setEmailInput(value),
        }}
      />

      <TextInput
        labelText="City"
        labelFor="city"
        inputProps={{
          id: "city",
          type: "text",
          placeholder: "city ex. Hobbiton",
          value: cityInput,
          onChange: ({ target: { value } }) => setCityInput(value),
        }}
      />

      <PhoneInput
        phoneInputState={phoneInput}
        setPhoneInputState={(info) => {
          setPhoneInput(info);
        }}
      />

      <SubmitButton />
    </form>
  );
};
