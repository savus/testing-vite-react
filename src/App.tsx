import { useEffect, useState } from "react";
import { FormContent } from "./Components/FormContent.js";
import { Header } from "./Components/Header.js";
import { Modal } from "./Components/Modal.js";
import { PortfolioSection } from "./Components/PortfolioSection.js";
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
            <PortfolioSection />
            <Modal header="Form" modalStateName="form">
              <FormContent />
            </Modal>
          </NavbarContextProvider>
        </ModalContextProvider>
      </UserInfoProvider>
    </>
  );
}

export default App;
