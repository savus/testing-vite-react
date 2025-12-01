import type { TDropdownMenu } from "../types";
import { useDropdownContext } from "./Providers/DropdownStateProvider";

export const DropdownMenu = () => {
  const { dropdownMenu } = useDropdownContext();
  const compareActiveMenu = (
    dropdownState: TDropdownMenu,
    currentMenuState: TDropdownMenu
  ) => (dropdownState === currentMenuState ? "active" : "");

  return (
    <div className={`dropdown ${compareActiveMenu(dropdownMenu, "menus")}`}>
      Dropdown Stuff
    </div>
  );
};
