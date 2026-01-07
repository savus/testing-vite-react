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
            <UserSection
              dropdownList={["Thing-1", "Thing-2", "Thing-3", "Thing-4"]}
            />
            {/* <CreateUserForm /> */}
            {/* <PortfolioSection /> */}
          </SlideInSection>
        </ActiveStateProvider>
      </UserInfoProvider>
    </>
  );
}

export default App;
