import type { TInputProps } from "../types";

export const TextInput = ({
  labelFor = "",
  labelText = "",
  inputProps,
}: {
  labelFor: string;
  labelText: string;
  inputProps: TInputProps;
}) => {
  return (
    <div className="input-primary">
      {labelFor.length > 0 && labelText.length > 0 && (
        <label htmlFor={labelFor}>{labelText}:</label>
      )}
      <input {...inputProps} />
    </div>
  );
};
