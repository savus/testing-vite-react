import { Toaster } from "react-hot-toast";
import { Header } from "./Components/Header/Header.js";
import { UserInfoProvider } from "./Components/Providers/UserInfoProvider.js";
import { SlideInSection } from "./Components/Layouts/SlideInSection.tsx";
import { ActiveStateProvider } from "./Components/Providers/ActiveStateProvider.tsx";
import "./css/index.css";
import "./css/theme.css";
import { UserSection } from "./Components/Users/UsersSection.tsx";

function App() {
  return (
    <>
      <Toaster />
      <UserInfoProvider>
        <ActiveStateProvider>
          <Header />
          <SlideInSection>
            <UserSection />
            {/* <CreateUserForm /> */}
            {/* <PortfolioSection /> */}
          </SlideInSection>
        </ActiveStateProvider>
      </UserInfoProvider>
    </>
  );
}

export default App;
