import "../src/css/app.css";
import "./js/index.ts";
import { MainHeader } from "./Components/MainHeader";
import { TextInput } from "./Components/TextInput";
import { ModalReact } from "./Components/ModalReact.tsx";
import { useState } from "react";
import type { TVisibleModal } from "./types.ts";
import { PhoneInput } from "./Components/PhoneInput.tsx";
import { SubmitButton } from "./Components/SubmitButton.tsx";

function App() {
  const [visibleModal, setVisibleModal] = useState<TVisibleModal>("none");

  return (
    <>
      <MainHeader
        setVisibleModal={(modal: TVisibleModal) => {
          setVisibleModal(modal);
        }}
      />
      <ModalReact
        id={"modal-form-react"}
        visibleModal={visibleModal}
        setVisibleModal={(modal: TVisibleModal) => setVisibleModal(modal)}
        linkName="form"
      >
        <TextInput
          labelFor="first-name"
          labelText="First Name"
          inputProps={{
            id: "first-name",
            placeholder: "Type your first name here",
            name: "first-name",
            type: "text",
          }}
        />
        <TextInput
          labelFor="last-name"
          labelText="Last Name"
          inputProps={{
            id: "last-name",
            placeholder: "Type your last name here",
            name: "last-name",
            type: "text",
          }}
        />
        <TextInput
          labelFor="email"
          labelText="Email"
          inputProps={{
            id: "email",
            placeholder: "ex. something@gmail.com",
            name: "email",
            type: "email",
          }}
        />
        <TextInput
          labelFor="city"
          labelText="City"
          inputProps={{
            id: "city",
            placeholder: "ex. hobbiton",
            name: "city",
          }}
        />
        <PhoneInput />
        <SubmitButton />
      </ModalReact>
    </>
  );
}

export default App;
