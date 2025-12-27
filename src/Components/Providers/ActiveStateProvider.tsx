import {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
  type ReactNode,
  type RefObject,
} from "react";
import type { TActiveNavDropdown, TActiveNavLink } from "../../types";

type TActiveStateContext = {
  activeNavLink: TActiveNavLink;
  setActiveNavLink: (link: TActiveNavLink) => void;
  activeNavDropdown: TActiveNavDropdown;
  setActiveNavDropdown: (dropdown: TActiveNavDropdown) => void;
  topDropdownRef: RefObject<HTMLLIElement | null>;
};

const ActiveStateContext = createContext({} as TActiveStateContext);

export const ActiveStateProvider = ({ children }: { children: ReactNode }) => {
  const [activeNavLink, setActiveNavLink] = useState<TActiveNavLink>("none");
  const [activeNavDropdown, setActiveNavDropdown] =
    useState<TActiveNavDropdown>("none");
  const topDropdownRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      const element = e.target as HTMLElement;

      if (topDropdownRef.current) {
        if (!topDropdownRef.current.contains(element))
          setActiveNavDropdown("none");
      }
    };

    document.addEventListener("mousedown", handler);
  }, []);

  return (
    <ActiveStateContext.Provider
      value={{
        activeNavLink,
        setActiveNavLink,
        activeNavDropdown,
        setActiveNavDropdown,
        topDropdownRef,
      }}
    >
      {children}
    </ActiveStateContext.Provider>
  );
};

export const useActiveContext = () => useContext(ActiveStateContext);
