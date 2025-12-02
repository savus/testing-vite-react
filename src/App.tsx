import { FormContent } from "./Components/FormContent.js";
import { Header } from "./Components/Header.js";
import { Modal } from "./Components/Modal.js";
import { ModalContextProvider } from "./Components/Providers/ModalContextProvider.js";
import { NavbarContextProvider } from "./Components/Providers/NavbarContextProvider.js";
import { UserInfoProvider } from "./Components/Providers/UserInfoProvider.js";
import "./css/index.css";
import "./js/index.js";

function App() {
  return (
    <>
      <UserInfoProvider>
        <ModalContextProvider>
          <NavbarContextProvider>
            <Header />
          </NavbarContextProvider>
          <Modal header="Form" modalStateName="form">
            <FormContent />
          </Modal>
        </ModalContextProvider>
      </UserInfoProvider>
    </>
  );
}

export default App;
