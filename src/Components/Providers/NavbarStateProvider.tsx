import { createContext, useContext, useState, type ReactNode } from "react";
import type {
  TDropdownMenu,
  TNavbarStateContext,
  TVisibleModal,
} from "../../types";

const NavbarStateContext = createContext<TNavbarStateContext>(
  {} as TNavbarStateContext
);

export const NavbarStateProvider = ({ children }: { children: ReactNode }) => {
  const [visibleModal, setVisibleModal] = useState<TVisibleModal>("none");
  const [dropdownMenu, setDropdownMenu] = useState<TDropdownMenu>("none");

  return (
    <NavbarStateContext.Provider
      value={{
        visibleModal,
        setVisibleModal,
        dropdownMenu,
        setDropdownMenu,
      }}
    >
      {children}
    </NavbarStateContext.Provider>
  );
};

export const useNavbarStateContext = () => useContext(NavbarStateContext);
