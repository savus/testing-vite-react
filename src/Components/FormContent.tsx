import { SubmitButton } from "./SubmitButton";
import { TextInput } from "./TextInput";
import "../css/form-content.css";

export const FormContent = () => {
  return (
    <div className="form-content">
      <TextInput
        labelText="First Name"
        labelFor="first-name"
        inputProps={{
          id: "first-name",
          type: "text",
          placeholder: "Type your first name here",
        }}
      />
      <TextInput
        labelText="Last Name"
        labelFor="last-name"
        inputProps={{
          id: "last-name",
          type: "text",
          placeholder: "Type your last name here",
        }}
      />
      <TextInput
        labelText="Email"
        labelFor="email"
        inputProps={{
          id: "email",
          type: "email",
          placeholder: "email ex something@hotmail.com",
        }}
      />
      <TextInput
        labelText="City"
        labelFor="city"
        inputProps={{
          id: "city",
          type: "text",
          placeholder: "city ex. Hobbiton",
        }}
      />
      <div className="phone-input-container">
        <input type="text" />
        -
        <input type="text" />
        -
        <input type="text" />
      </div>
      <SubmitButton />
    </div>
  );
};
