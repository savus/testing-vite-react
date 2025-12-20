import { SubmitButton } from "./SubmitButton";
import { TextInput } from "./TextInput";
import "../css/form-content.css";
import { PhoneInput } from "./PhoneInput";
import { useState } from "react";
import type { TPhoneInput } from "../types";
import { ErrorMessage } from "./ErrorMessage";
import { isValid } from "../utils/validations";
import { allCities } from "../utils/allCities";
import { useUserContext } from "./Providers/UserInfoProvider";
import { useModalContext } from "./Providers/ModalContextProvider";
import toast from "react-hot-toast";

const firstNameErrorMessage =
  "First name must be at least alphanumeric with at least 2 characters and no spaces";

const lastNameErrorMessage =
  "Last name must be at least alphanumeric with at least 2 characters and no spaces";

const emailErrorMessage = "Must be a valid email address";

const cityErrorMessage = "City must be alphanumeric with at least 2 characters";

const phoneErrorMessage =
  "phone must be numbers, no spaces, and no special characters";

export const FormContent = () => {
  const { setActiveUser, createUser, setIsLoading } = useUserContext();
  const { setVisibleModal } = useModalContext();
  const [firstNameInput, setFirstNameInput] = useState("");
  const [lastNameInput, setLastNameInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [cityInput, setCityInput] = useState("");
  const [phoneInput, setPhoneInput] = useState<TPhoneInput>(["", "", ""]);
  const joinedPhoneInput = phoneInput.join("");

  const [hasSubmitted, setHasSubmitted] = useState(false);

  const isFirstNameValid = isValid("name", firstNameInput);
  const isLastNameValid = isValid("name", lastNameInput);
  const isEmailValid = isValid("email", emailInput);
  const isCityValid = isValid("city", cityInput);
  const isPhoneValid = isValid("phone", joinedPhoneInput);

  const doBadInputsExist =
    !isFirstNameValid ||
    !isLastNameValid ||
    !isCityValid ||
    !isEmailValid ||
    !isPhoneValid;

  const showFirstNameError = hasSubmitted && !isFirstNameValid;
  const showLastNameError = hasSubmitted && !isLastNameValid;
  const showEmailError = hasSubmitted && !isEmailValid;
  const showCityError = hasSubmitted && !isCityValid;
  const showPhoneError = hasSubmitted && !isPhoneValid;

  const resetInputValues = () => {
    setFirstNameInput("");
    setLastNameInput("");
    setEmailInput("");
    setCityInput("");
    setPhoneInput(["", "", ""]);
  };

  return (
    <form
      className="form-content"
      action="#"
      onSubmit={(e) => {
        e.preventDefault();
        setHasSubmitted(true);
        if (!doBadInputsExist) {
          setIsLoading(true);
          setActiveUser({
            firstName: firstNameInput,
            lastName: lastNameInput,
            email: emailInput,
            city: cityInput,
            phone: phoneInput.join(""),
          });

          createUser({
            firstName: firstNameInput,
            lastName: lastNameInput,
            email: emailInput,
            city: cityInput,
            phone: phoneInput.join(""),
          })
            .then(() => {
              toast.success("User successfully posted");
            })
            .catch((e) => {
              toast.error(e);
            })
            .finally(() => {
              setIsLoading(false);
            });

          setVisibleModal("none");
          resetInputValues();
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
      {showFirstNameError && <ErrorMessage text={firstNameErrorMessage} />}
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
      {showLastNameError && <ErrorMessage text={lastNameErrorMessage} />}
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
      {showEmailError && <ErrorMessage text={emailErrorMessage} />}
      <TextInput
        labelText="City"
        labelFor="city"
        inputProps={{
          id: "city",
          type: "text",
          placeholder: "city ex. Hobbiton",
          list: "cities",
          value: cityInput,
          onChange: ({ target: { value } }) => setCityInput(value),
        }}
      />
      {showCityError && <ErrorMessage text={cityErrorMessage} />}
      <PhoneInput
        phoneInputState={phoneInput}
        setPhoneInputState={(info) => {
          setPhoneInput(info);
        }}
      />
      {showPhoneError && <ErrorMessage text={phoneErrorMessage} />}
      <SubmitButton />
      <datalist id="cities">
        {allCities.map((city, index) => (
          <option key={index}>{city}</option>
        ))}
      </datalist>
    </form>
  );
};
