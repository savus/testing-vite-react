import { FormContent } from "./Components/FormContent.js";
import { Header } from "./Components/Header.js";
import { Modal } from "./Components/Modal.js";
import { ModalContextProvider } from "./Components/Providers/ModalContextProvider.js";
import { NavbarContextProvider } from "./Components/Providers/NavbarContextProvider.js";
import "./css/index.css";
import "./js/index.js";

function App() {
  return (
    <>
      <ModalContextProvider>
        <NavbarContextProvider>
          <Header />
        </NavbarContextProvider>
        <Modal header="Form" modalStateName="form">
          <FormContent />
        </Modal>
      </ModalContextProvider>
    </>
  );
}

export default App;
