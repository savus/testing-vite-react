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
        <Modal modalStateName="form">
          <div className="form-content">Content</div>
        </Modal>
      </ModalContextProvider>
    </>
  );
}

export default App;
