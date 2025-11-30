import { type ReactNode } from "react";
import { useNavbarStateContext } from "./Providers/NavbarStateProvider";

export const NavItem = ({
  icon,
  children,
}: {
  icon: string;
  children?: ReactNode;
}) => {
  const { dropdownRef, dropdownMenu, setDropdownMenu } =
    useNavbarStateContext();
  return (
    <li className="nav-item" ref={dropdownRef}>
      <a
        href="#"
        className="icon-button"
        onClick={() => {
          setDropdownMenu("menus");
        }}
      >
        {icon}
      </a>
      {dropdownMenu === "menus" && children}
    </li>
  );
};
