import {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
import type {
  TNavbarStateContext,
  TDropdownMenu,
  TActiveLink,
} from "../../types";

const NavbarStateContext = createContext<TNavbarStateContext>(
  {} as TNavbarStateContext
);

export const NavbarContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [dropdownMenu, setDropdownMenu] = useState<TDropdownMenu>("none");
  const dropdownRef = useRef<HTMLLIElement | null>(null);
  const [activeLink, setActiveLink] = useState<TActiveLink>("none");

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropdownRef.current) {
        if (!dropdownRef.current.contains(e.target as HTMLLIElement))
          setDropdownMenu("none");
      }
    };
    document.addEventListener("mousedown", handler);
  }, []);

  return (
    <NavbarStateContext.Provider
      value={{
        dropdownMenu,
        setDropdownMenu,
        dropdownRef,
        activeLink,
        setActiveLink,
      }}
    >
      {children}
    </NavbarStateContext.Provider>
  );
};

export const useNavbarStateContext = () => useContext(NavbarStateContext);
