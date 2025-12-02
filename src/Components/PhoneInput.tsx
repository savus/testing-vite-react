import { useRef, type ChangeEventHandler } from "react";
import type { TPhoneInput } from "../types";

export const PhoneInput = ({
  phoneInput,
  setPhoneInput,
}: {
  phoneInput: TPhoneInput;
  setPhoneInput: (input: TPhoneInput) => void;
}) => {
  const refs = [useRef(null), useRef(null), useRef(null)];
  const maxLengths = [3, 3, 4];

  const onChangeEventHandler =
    (index: 0 | 1 | 2) =>
    (e): ChangeEventHandler<HTMLInputElement> => {
      const value = e.target.value;
      const newState = phoneInput.map((phoneInput, phoneIndex) =>
        phoneIndex === index ? value : phoneInput
      ) as TPhoneInput;

      setPhoneInput(newState);
    };

  return (
    <div className="phone-input-container">
      <label htmlFor="phone-input">Phone:</label>
      <input type="text" />
      -
      <input type="text" />
      -
      <input type="text" />
    </div>
  );
};
