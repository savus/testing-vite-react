import "../src/css/app.css";
import "./js/index.ts";
import { MainHeader } from "./Components/MainHeader";
import { ModalReact } from "./Components/ModalReact.tsx";
import { useState } from "react";
import type { TUserInfo } from "./types.ts";
import { ModalForm } from "./Components/ModalForm.tsx";
import { NavbarStateProvider } from "./Components/NavbarStateProvider.tsx";
import { FullBody } from "./Components/FullBody.tsx";

function App() {
  const [userInformation, setUserInformation] = useState<TUserInfo | null>(
    null
  );

  return (
    <>
      <NavbarStateProvider>
        <FullBody>
          <div className="container">
            <MainHeader />
          </div>
          <ModalReact id={"modal-form-react"} linkName="form">
            <ModalForm
              setUserInformation={(info: TUserInfo) => {
                setUserInformation(info);
              }}
            />
          </ModalReact>
        </FullBody>
      </NavbarStateProvider>
    </>
  );
}

export default App;
