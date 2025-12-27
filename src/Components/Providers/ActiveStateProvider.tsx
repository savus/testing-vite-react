import { createContext, useContext, useState, type ReactNode } from "react";
import type { TActiveNavDropdown, TActiveNavLink } from "../../types";

type TActiveStateContext = {
  activeNavLink: TActiveNavLink;
  setActiveNavLink: (link: TActiveNavLink) => void;
  activeNavDropdown: TActiveNavDropdown;
  setActiveNavDropdown: (dropdown: TActiveNavDropdown) => void;
};

const ActiveStateContext = createContext({} as TActiveStateContext);

export const ActiveStateProvider = ({ children }: { children: ReactNode }) => {
  const [activeNavLink, setActiveNavLink] = useState<TActiveNavLink>("none");
  const [activeNavDropdown, setActiveNavDropdown] =
    useState<TActiveNavDropdown>("none");

  return (
    <ActiveStateContext.Provider
      value={{
        activeNavLink,
        setActiveNavLink,
        activeNavDropdown,
        setActiveNavDropdown,
      }}
    >
      {children}
    </ActiveStateContext.Provider>
  );
};

export const useActiveContext = () => useContext(ActiveStateContext);
