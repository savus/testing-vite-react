import type { TDropdownMenu } from "../types";
import { useNavbarStateContext } from "./Providers/NavbarContextProvider";

export const DropdownMenu = ({
  dropdownStateName,
}: {
  dropdownStateName: TDropdownMenu;
}) => {
  const { dropdownMenu } = useNavbarStateContext();
  const isMenuActive = (stateName: TDropdownMenu) =>
    stateName === dropdownMenu ? "active" : "";

  return (
    <div className={`dropdown-menu ${isMenuActive(dropdownStateName)}`}>
      Dropdown
    </div>
  );
};
