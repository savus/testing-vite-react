import { useRef, type ChangeEventHandler } from "react";
import type { TPhoneInput } from "../types";

export const PhoneInput = ({
  phoneInputState,
  setPhoneInputState,
}: {
  phoneInputState: TPhoneInput;
  setPhoneInputState: (input: TPhoneInput) => void;
}) => {
  const refs = [
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
  ];
  const maxLengths = [3, 3, 4];

  const createOnChangeHandler =
    (index: 0 | 1 | 2): ChangeEventHandler<HTMLInputElement> =>
    (e) => {
      const currentMaxLength = maxLengths[index];
      const value = e.target.value;
      const nextRef = index < refs.length - 1 ? refs[index + 1] : refs[index];
      const prevRef = index > 0 ? refs[index - 1] : refs[index];
      const shouldGoToNextRef = value.length === currentMaxLength;
      const shouldGoToPrevRef = value.length === 0;

      if (shouldGoToNextRef) {
        nextRef.current?.focus();
      }

      if (shouldGoToPrevRef) {
        prevRef.current?.focus();
      }

      const newState = phoneInputState.map((phoneInput, phoneInputIndex) =>
        phoneInputIndex === index ? value : phoneInput
      ) as TPhoneInput;

      setPhoneInputState(newState);
    };

  return (
    <div className="phone-input-container">
      <label htmlFor="phone-input">Phone:</label>
      <input
        type="text"
        maxLength={maxLengths[0]}
        value={phoneInputState[0]}
        onChange={createOnChangeHandler(0)}
        ref={refs[0]}
      />
      -
      <input
        type="text"
        maxLength={maxLengths[1]}
        value={phoneInputState[1]}
        onChange={createOnChangeHandler(1)}
        ref={refs[1]}
      />
      -
      <input
        type="text"
        maxLength={maxLengths[2]}
        value={phoneInputState[2]}
        onChange={createOnChangeHandler(2)}
        ref={refs[2]}
      />
    </div>
  );
};
