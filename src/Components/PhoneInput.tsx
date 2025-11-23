import { createRef, useRef, type ChangeEventHandler } from "react";
import type { TPhoneInput } from "../types";

export const PhoneInput = ({
  phoneInputState,
  setPhoneInputState,
}: {
  phoneInputState: TPhoneInput;
  setPhoneInputState: (info: TPhoneInput) => void;
}) => {
  const maxLengths = [3, 3, 4];
  const inputRefs = [
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
  ];

  const createOnChangeHandler =
    (index: 0 | 1 | 2): ChangeEventHandler<HTMLInputElement> =>
    (e) => {
      const value = e.target.value;
      const newState = phoneInputState.map((phoneInput, phoneInputIndex) =>
        index === phoneInputIndex ? value : phoneInput
      );
      setPhoneInputState(newState as TPhoneInput);
    };

  return (
    <div className="input-phone">
      <label htmlFor="phone">Phone:</label>
      <input
        type="text"
        maxLength={maxLengths[0]}
        onChange={() => createOnChangeHandler(0)}
      />
      -
      <input
        type="text"
        maxLength={maxLengths[1]}
        onChange={() => createOnChangeHandler(1)}
      />
      -
      <input
        type="text"
        maxLength={maxLengths[2]}
        onChange={() => createOnChangeHandler(2)}
      />
    </div>
  );
};
