import {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
import type { TDropdownContext, TDropdownMenu } from "../../types";

const DropdownStateContext = createContext<TDropdownContext>(
  {} as TDropdownContext
);

export const DropdownMenuStateProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [dropdownMenu, setDropdownMenu] = useState<TDropdownMenu>("none");
  const dropdownRef = useRef<HTMLLIElement | null>(null);

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
    <DropdownStateContext.Provider
      value={{
        dropdownMenu,
        setDropdownMenu,
        dropdownRef,
      }}
    >
      {children}
    </DropdownStateContext.Provider>
  );
};

export const useDropdownContext = () => useContext(DropdownStateContext);
