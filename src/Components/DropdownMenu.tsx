import type { TDropdownMenu } from "../types";
import { useDropdownContext } from "./Providers/DropdownMenuStateProvider";

export const DropdownMenu = () => {
  const { dropdownMenu } = useDropdownContext();
  const isMenuActive = (
    menuState: TDropdownMenu,
    currentState: TDropdownMenu
  ) => (menuState === currentState ? "active" : "");

  return (
    <div className={`dropdown-menu ${isMenuActive(dropdownMenu, "menus")}`}>
      Dropdown
    </div>
  );
};
