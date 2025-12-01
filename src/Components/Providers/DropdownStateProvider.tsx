import {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
import type { TDropdownContext, TDropdownMenu } from "../../types";

const DropdownContext = createContext<TDropdownContext>({} as TDropdownContext);

export const DropdownStateProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [dropdownMenu, setDropdownMenu] = useState<TDropdownMenu>("none");
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let handler = (e: MouseEvent) => {
      if (dropdownRef.current) {
        console.log(dropdownRef.current.contains(e.target as HTMLDivElement));
      }
    };

    document.addEventListener("mousedown", handler);
  }, []);
  return (
    <DropdownContext.Provider
      value={{
        dropdownMenu,
        setDropdownMenu,
        dropdownRef,
      }}
    >
      {children}
    </DropdownContext.Provider>
  );
};

export const useDropdownContext = () => useContext(DropdownContext);
