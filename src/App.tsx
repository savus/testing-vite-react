import "../src/css/app.css";
import "./js/index.ts";
import { MainHeader } from "./Components/MainHeader";
import { ModalReact } from "./Components/ModalReact.tsx";
import { useState } from "react";
import type { TUserInfo, TVisibleModal } from "./types.ts";
import { ModalForm } from "./Components/ModalForm.tsx";

function App() {
  const [visibleModal, setVisibleModal] = useState<TVisibleModal>("none");
  const [userInformation, setUserInformation] = useState<TUserInfo | null>(
    null
  );

  return (
    <>
      <div>user info</div>
      {userInformation ? (
        <div>
          <div>first name: {userInformation?.firstName}</div>
          <div>Last name: {userInformation?.lastName}</div>
          <div>City: {userInformation?.city}</div>
          <div>email: {userInformation?.email}</div>
          <div>phone: {userInformation?.phoneInput}</div>
        </div>
      ) : (
        <div>User Info Not Submitted</div>
      )}

      <MainHeader
        setVisibleModal={(modal: TVisibleModal) => {
          setVisibleModal(modal);
        }}
      />
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
    </>
  );
}

export default App;
