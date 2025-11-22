import "../css/header.css";
import type { TVisibleModal } from "../types";
import { Navbar } from "./Navbar";

export const MainHeader = ({
  setVisibleModal,
}: {
  setVisibleModal: (modal: TVisibleModal) => void;
}) => {
  return (
    <header className="main-header">
      <Navbar
        setVisibleModal={(modal: TVisibleModal) => {
          setVisibleModal(modal);
        }}
      />
    </header>
  );
};
