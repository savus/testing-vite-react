import type { TPhoneInput } from "../types";

export const PhoneInput = ({
  phoneInputState,
  setPhoneInputState,
}: {
  phoneInputState: TPhoneInput;
  setPhoneInputState: (info: TPhoneInput) => void;
}) => {
  return (
    <div className="input-phone">
      <label htmlFor="phone">Phone:</label>
      <input type="text" />
      -
      <input type="text" />
      -
      <input type="text" />
    </div>
  );
};
