import { MainHeader } from "./Components/MainHeader";
import "../src/css/app.css";
import { Modal } from "./Components/Modal";
import { TextInput } from "./Components/TextInput";

function App() {
  return (
    <>
      <MainHeader />
      <Modal>
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
    </>
  );
}

export default App;
