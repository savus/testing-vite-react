import type { ReactNode } from "react";
import type { TActiveDropdown } from "../types";
import { Shared } from "../utils/shared";
import { useActiveContext } from "./Providers/ActiveStateProvider";

export const DropdownMenu = ({
  children,
  dropdownName,
}: {
  children?: ReactNode;
  dropdownName: TActiveDropdown;
}) => {
  const { activeNavDropdown, setActiveNavDropdown } = useActiveContext();

  return (
    <div
      className={`dropdown-menu ${Shared.shouldElementBeActive(
        activeNavDropdown,
        dropdownName
      )}`}
    >
      <ul className="ul-defaults-none">{children}</ul>
    </div>
  );
};
