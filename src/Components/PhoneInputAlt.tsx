import type { TPhoneInputAlt } from "../types";

export const PhoneInputAlt = ({
  phoneInputState,
  setPhoneInputState,
}: {
  phoneInputState: TPhoneInputAlt;
  setPhoneInputState: (input: TPhoneInputAlt) => void;
}) => {
  return (
    <div className="input-phone">
      <label htmlFor="phone">
        <input
          type="text"
          value={phoneInputState}
          onChange={({ target: { value } }) => setPhoneInputState(value)}
        />
      </label>
    </div>
  );
};
