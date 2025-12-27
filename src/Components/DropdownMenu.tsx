import type { TActiveDropdown } from "../types";

export const DropdownMenu = ({
  dropdownName,
}: {
  dropdownName: TActiveDropdown;
}) => {
  return <div className={`dropdown-menu `}>{dropdownName}</div>;
};
