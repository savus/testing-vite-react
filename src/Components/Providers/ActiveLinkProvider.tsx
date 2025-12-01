import { createContext, useContext, useState, type ReactNode } from "react";
import type { TActiveLink, TActiveLinkContext } from "../../types";

const ActiveLinkContext = createContext<TActiveLinkContext>(
  {} as TActiveLinkContext
);

export const ActiveLinkProvider = ({ children }: { children: ReactNode }) => {
  const [activeLink, setActiveLink] = useState<TActiveLink>("none");
  return (
    <ActiveLinkContext.Provider
      value={{
        activeLink,
        setActiveLink,
      }}
    >
      {children}
    </ActiveLinkContext.Provider>
  );
};

export const useActiveLinkContext = () => useContext(ActiveLinkContext);
