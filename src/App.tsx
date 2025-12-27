import { Toaster } from "react-hot-toast";
import { CreateUserForm } from "./Components/CreateUserForm.tsx";
import { Header } from "./Components/Header.js";
import { UserInfoProvider } from "./Components/Providers/UserInfoProvider.js";
import { SlideInSection } from "./Components/Layouts/SlideInSection.tsx";
import "./css/index.css";
import { ActiveStateProvider } from "./Components/Providers/ActiveStateProvider.tsx";
import { PortfolioSection } from "./Components/PortfolioSection.tsx";

function App() {
  return (
    <>
      <Toaster />
      <UserInfoProvider>
        <ActiveStateProvider>
          <Header />
          <SlideInSection>
            <CreateUserForm />
            <PortfolioSection />
          </SlideInSection>
        </ActiveStateProvider>
      </UserInfoProvider>
    </>
  );
}

export default App;
