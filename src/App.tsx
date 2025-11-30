import "../src/css/app.css";
import "./js/index.ts";
import { MainHeader } from "./Components/MainHeader";
import { ModalReact } from "./Components/ModalReact.tsx";
import { ModalForm } from "./Components/ModalForm.tsx";
import { FullBody } from "./Components/FullBody.tsx";
import { UserInformationProvider } from "./Components/Providers/UserInformationProvider.tsx";
import { NavbarStateProvider } from "./Components/Providers/NavbarStateProvider.tsx";
function App() {
  return (
    <>
      <NavbarStateProvider>
        <FullBody>
          <div className="container">
            <MainHeader />
          </div>
          <UserInformationProvider>
            <ModalReact id={"modal-form-react"} linkName="form">
              <ModalForm />
            </ModalReact>
          </UserInformationProvider>
        </FullBody>
      </NavbarStateProvider>
    </>
  );
}

export default App;
