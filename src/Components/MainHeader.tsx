import "../css/header.css";
import type { TDropdownMenu, TVisibleModal } from "../types";
import { Navbar } from "./Navbar";

export const MainHeader = ({
  setVisibleModal,
  dropdownMenu,
  setDropdownMenu,
}: {
  setVisibleModal: (modal: TVisibleModal) => void;
  dropdownMenu: TDropdownMenu;
  setDropdownMenu: (menu: TDropdownMenu) => void;
}) => {
  return (
    <header className="main-header">
      <Navbar
        setVisibleModal={(modal: TVisibleModal) => {
          setVisibleModal(modal);
        }}
        dropdownMenu={dropdownMenu}
        setDropdownMenu={setDropdownMenu}
      />
    </header>
  );
};
