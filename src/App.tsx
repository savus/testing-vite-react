import { Toaster } from "react-hot-toast";
import { CreateUserForm } from "./Components/CreateUserForm.tsx";
import { Header } from "./Components/Header.js";
import { ModalContextProvider } from "./Components/Providers/ModalContextProvider.js";
import { NavbarContextProvider } from "./Components/Providers/NavbarContextProvider.js";
import { UserInfoProvider } from "./Components/Providers/UserInfoProvider.js";
import { SlideInSection } from "./Components/Layouts/SlideInSection.tsx";
import "./css/index.css";

function App() {
  return (
    <>
      <Toaster />
      <UserInfoProvider>
        <ModalContextProvider>
          <NavbarContextProvider>
            <Header />
            <SlideInSection>
              <CreateUserForm />
            </SlideInSection>
            {/* <PortfolioSection /> */}
          </NavbarContextProvider>
        </ModalContextProvider>
      </UserInfoProvider>
    </>
  );
}

export default App;
