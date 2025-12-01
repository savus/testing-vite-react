import type { RefObject } from "react";
import { useDropdownContext } from "./Providers/DropdownMenuStateProvider";
import { DropdownMenu } from "./DropdownMenu";

export const NavItem = ({
  menuRef,
}: {
  menuRef?: RefObject<HTMLLIElement | null>;
}) => {
  const { dropdownMenu, setDropdownMenu } = useDropdownContext();

  return (
    <li className="nav-item" ref={menuRef}>
      <a
        href="#"
        onClick={() => {
          const toggleState = dropdownMenu === "menus" ? "none" : "menus";
          setDropdownMenu(toggleState);
        }}
      >
        Menus
      </a>
      <DropdownMenu />
    </li>
  );
};
