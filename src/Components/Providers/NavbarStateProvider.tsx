import {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
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
  const dropdownRef = useRef<HTMLLIElement | null>(null);

  useEffect(() => {
    let handler = (e: MouseEvent) => {
      if (!dropdownRef.current?.contains(e.target as HTMLDivElement)) {
        setDropdownMenu("none");
      }
    };
    document.addEventListener("mousedown", handler);
  }, []);

  return (
    <NavbarStateContext.Provider
      value={{
        visibleModal,
        setVisibleModal,
        dropdownMenu,
        setDropdownMenu,
        dropdownRef,
      }}
    >
      {children}
    </NavbarStateContext.Provider>
  );
};

export const useNavbarStateContext = () => useContext(NavbarStateContext);
