import type { TActiveDropdown } from "../types";
import { useNavbarStateContext } from "./Providers/NavbarContextProvider";

export const DropdownMenu = ({
  dropdownName,
}: {
  dropdownName: TActiveDropdown;
}) => {
  const { activeDropdown } = useNavbarStateContext();
  const isMenuActive = (stateName: TActiveDropdown) =>
    stateName === activeDropdown ? "active" : "";

  return (
    <div className={`dropdown-menu ${isMenuActive(dropdownName)}`}>
      Dropdown
    </div>
  );
};
