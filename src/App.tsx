import "../src/css/app.css";
import "./js/index.ts";
import { MainHeader } from "./Components/MainHeader";
import { Modal } from "./Components/Modal";
import { TextInput } from "./Components/TextInput";
import { ModalReact } from "./Components/ModalReact.tsx";
import { useState } from "react";
import type { TVisibleModal } from "./types.ts";

function App() {
  const [visibleModal, setVisibleModal] = useState<TVisibleModal>("none");

  return (
    <>
      <MainHeader
        setVisibleModal={(modal: TVisibleModal) => {
          setVisibleModal(modal);
        }}
      />
      <Modal id={"modal-nav-js"}>
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
      </Modal>
      <ModalReact
        id={"modal-nav-js"}
        visibleModal={visibleModal}
        setVisibleModal={(modal: TVisibleModal) => setVisibleModal(modal)}
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
      </ModalReact>
    </>
  );
}

export default App;
