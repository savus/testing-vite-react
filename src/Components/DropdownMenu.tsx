import type { TDropdownMenu } from "../types";
import { useNavbarStateContext } from "./Providers/NavbarContextProvider";

export const DropdownMenu = () => {
  const { dropdownMenu } = useNavbarStateContext();
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
