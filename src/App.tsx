import { Toaster } from "react-hot-toast";
import { CreateUserForm } from "./Components/CreateUserForm.tsx";
import { Header } from "./Components/Header.js";
import { Modal } from "./Components/Modal.js";
import { PortfolioSection } from "./Components/PortfolioSection.js";
import { ModalContextProvider } from "./Components/Providers/ModalContextProvider.js";
import { NavbarContextProvider } from "./Components/Providers/NavbarContextProvider.js";
import { UserInfoProvider } from "./Components/Providers/UserInfoProvider.js";
import "./css/index.css";

function App() {
  return (
    <>
      <Toaster />
      <UserInfoProvider>
        <ModalContextProvider>
          <NavbarContextProvider>
            <Header />
            <PortfolioSection />
            <Modal header="Form" modalStateName="form">
              <CreateUserForm />
            </Modal>
          </NavbarContextProvider>
        </ModalContextProvider>
      </UserInfoProvider>
    </>
  );
}

export default App;
