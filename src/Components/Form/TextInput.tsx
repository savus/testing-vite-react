import type { TInputProps } from "../types";

export const TextInput = ({
  inputProps,
  labelText,
  labelFor,
}: {
  inputProps: TInputProps;
  labelText: string;
  labelFor?: string;
}) => {
  return (
    <div className="input-container">
      {labelText && <label htmlFor={labelFor}>{labelText}:</label>}
      <input {...inputProps} />
    </div>
  );
};
