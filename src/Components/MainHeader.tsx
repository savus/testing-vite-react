import "../css/header.css";
import type { TDropdownMenu, TVisibleModal } from "../types";
import { Navbar } from "./Navbar";

export const MainHeader = ({
  setVisibleModal,
  setDropdownMenu,
}: {
  setVisibleModal: (modal: TVisibleModal) => void;
  setDropdownMenu: (menu: TDropdownMenu) => void;
}) => {
  return (
    <header className="main-header">
      <Navbar
        setVisibleModal={(modal: TVisibleModal) => {
          setVisibleModal(modal);
        }}
        setDropdownMenu={setDropdownMenu}
      />
    </header>
  );
};
