import { Header } from "./Components/Header.js";
import { Modal } from "./Components/Modal.js";
import { NavbarContextProvider } from "./Components/Providers/NavbarContextProvider.js";
import "./css/index.css";
import "./js/index.js";

function App() {
  return (
    <>
      <NavbarContextProvider>
        <Header />
        <Modal>
          <div className="form-content">Content</div>
        </Modal>
      </NavbarContextProvider>
    </>
  );
}

export default App;
