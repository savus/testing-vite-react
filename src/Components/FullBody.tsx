import type { ReactNode } from "react";
import { useNavbarStateContext } from "./Providers/NavbarStateProvider";

export const FullBody = ({ children }: { children: ReactNode }) => {
  const { dropdownMenu, setDropdownMenu } = useNavbarStateContext();
  return (
    <div
      className="full-body"
      onClick={() => {
        if (dropdownMenu != "none") setDropdownMenu("none");
      }}
    >
      {children}
    </div>
  );
};
