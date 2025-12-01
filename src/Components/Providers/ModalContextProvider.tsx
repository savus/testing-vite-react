import { createContext, useContext, useState, type ReactNode } from "react";
import type { TVisibleModal, TModalContext } from "../../types";

const ModalContext = createContext<TModalContext>({} as TModalContext);

export const ModalContextProvider = ({ children }: { children: ReactNode }) => {
  const [visibleModal, setVisibleModal] = useState<TVisibleModal>("none");
  return (
    <ModalContext.Provider
      value={{
        visibleModal,
        setVisibleModal,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export const useModalContext = () => useContext(ModalContext);
