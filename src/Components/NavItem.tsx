import type { ReactNode, RefObject } from "react";
import type { TActiveLink, TDropdownMenu } from "../types";
import { useNavbarStateContext } from "./Providers/NavbarContextProvider";

export const NavItem = ({
  text,
  activeStateName,
  dropdownMenuName = "none",
  children,
  menuRef,
}: {
  text: string;
  activeStateName: TActiveLink;
  dropdownMenuName?: TDropdownMenu;
  children?: ReactNode;
  menuRef?: RefObject<HTMLLIElement | null>;
}) => {
  const { activeLink, setActiveLink, setDropdownMenu, dropdownMenu } =
    useNavbarStateContext();

  const isLinkActive = (linkStateName: TActiveLink) =>
    linkStateName === activeLink ? "active" : "";

  return (
    <li className="nav-item" ref={menuRef}>
      <a
        className={isLinkActive(activeStateName)}
        href="#"
        onClick={() => {
          const toggleMenu =
            dropdownMenu === "none" ? dropdownMenuName : "none";
          setDropdownMenu(toggleMenu);
          setActiveLink(activeStateName);
        }}
      >
        {text}
      </a>
      {children}
    </li>
  );
};
