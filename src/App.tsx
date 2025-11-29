import "../src/css/app.css";
import "./js/index.ts";
import { MainHeader } from "./Components/MainHeader";
import { ModalReact } from "./Components/ModalReact.tsx";
import { useState } from "react";
import type { TDropdownMenu, TUserInfo, TVisibleModal } from "./types.ts";
import { ModalForm } from "./Components/ModalForm.tsx";

function App() {
  const [visibleModal, setVisibleModal] = useState<TVisibleModal>("none");
  const [userInformation, setUserInformation] = useState<TUserInfo | null>(
    null
  );
  const [dropdownMenu, setDropdownMenu] = useState<TDropdownMenu>("none");

  return (
    <>
      <div
        className="full-body"
        onClick={() => {
          setDropdownMenu("none");
        }}
      >
        <div className="container">
          <MainHeader
            setVisibleModal={(modal: TVisibleModal) => {
              setVisibleModal(modal);
            }}
            setDropdownMenu={(menu: TDropdownMenu) => {
              setDropdownMenu(menu);
            }}
          />
        </div>
        <ModalReact
          id={"modal-form-react"}
          visibleModal={visibleModal}
          setVisibleModal={(modal: TVisibleModal) => setVisibleModal(modal)}
          linkName="form"
        >
          <ModalForm
            setUserInformation={(info: TUserInfo) => {
              setUserInformation(info);
            }}
          />
        </ModalReact>
      </div>
    </>
  );
}

export default App;
