import type { RefObject } from "react";
import type { TDropdownMenu } from "../types";
import { useDropdownContext } from "./Providers/DropdownStateProvider";

export const DropdownMenu = ({
  dropdownRef,
}: {
  dropdownRef?: RefObject<HTMLDivElement | null>;
}) => {
  const { dropdownMenu } = useDropdownContext();
  const compareActiveMenu = (
    dropdownState: TDropdownMenu,
    currentMenuState: TDropdownMenu
  ) => (dropdownState === currentMenuState ? "active" : "");

  return (
    <div
      className={`dropdown ${compareActiveMenu(dropdownMenu, "menus")}`}
      ref={dropdownRef}
    >
      Dropdown Stuff
    </div>
  );
};
