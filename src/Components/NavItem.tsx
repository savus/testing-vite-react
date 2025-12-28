import type { ReactNode, RefObject } from "react";
import type { TActiveNavLink } from "../types";
import { useActiveContext } from "./Providers/ActiveStateProvider";
import { Shared } from "../utils/shared";

export const NavItem = ({
  text,
  activeLinkName,
  onClick,
  children,
  dropdownRef,
}: {
  text: string;
  activeLinkName: TActiveNavLink;
  onClick?: () => void;
  children?: ReactNode;
  dropdownRef?: RefObject<HTMLLIElement | null>;
}) => {
  const { activeNavLink, setActiveNavLink } = useActiveContext();

  return (
    <li className="nav-item" ref={dropdownRef}>
      <a
        className={Shared.shouldElementBeActive(activeNavLink, activeLinkName)}
        href="#"
        onClick={() => {
          setActiveNavLink(activeLinkName);
          if (onClick) onClick();
        }}
      >
        {text}
      </a>
      {children}
    </li>
  );
};
