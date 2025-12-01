import { createContext, useContext, useState, type ReactNode } from "react";
import type { TDropdownContext, TDropdownMenu } from "../../types";

const DropdownContext = createContext<TDropdownContext>({} as TDropdownContext);

export const DropdownStateProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [dropdownMenu, setDropdownMenu] = useState<TDropdownMenu>("none");
  return (
    <DropdownContext.Provider
      value={{
        dropdownMenu,
        setDropdownMenu,
      }}
    >
      {children}
    </DropdownContext.Provider>
  );
};

export const useDropdownContext = () => useContext(DropdownContext);
