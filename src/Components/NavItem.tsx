import type { ReactNode, RefObject } from "react";
import { useDropdownContext } from "./Providers/DropdownMenuStateProvider";
import { DropdownMenu } from "./DropdownMenu";
import { useActiveLinkContext } from "./Providers/ActiveLinkProvider";
import type { TActiveLink } from "../types";

export const NavItem = ({
  text,
  activeStateName,
  children,
  menuRef,
}: {
  text: string;
  activeStatename: TActiveLink;
  children?: ReactNode;
  menuRef?: RefObject<HTMLLIElement | null>;
}) => {
  const { dropdownMenu, setDropdownMenu } = useDropdownContext();
  const { activeLink, setActiveLink } = useActiveLinkContext();
  const isLinkActive = (linkState: TActiveLink, currentState: TActiveLink) =>
    linkState === currentState ? "active" : "";

  return (
    <li className="nav-item" ref={menuRef}>
      <a
        className={isLinkActive(activeLink, activeStateName)}
        href="#"
        onClick={() => {
          // const toggleState = dropdownMenu === "menus" ? "none" : "menus";
          // setDropdownMenu(toggleState);
          setActiveLink("form");
        }}
      >
        {text}
      </a>
      {children}
    </li>
  );
};
