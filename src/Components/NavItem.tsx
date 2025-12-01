import type { ReactNode, RefObject } from "react";
import type { TActiveLink } from "../types";
import { useNavbarStateContext } from "./Providers/NavbarContextProvider";

export const NavItem = ({
  text,
  activeStateName,
  onClick,
  children,
  dropdownRef,
}: {
  text: string;
  activeStateName: TActiveLink;
  onClick?: () => void;
  children?: ReactNode;
  dropdownRef?: RefObject<HTMLLIElement | null>;
}) => {
  const { activeLink, setActiveLink } = useNavbarStateContext();

  const isLinkActive = (linkStateName: TActiveLink) =>
    linkStateName === activeLink ? "active" : "";

  return (
    <li className="nav-item" ref={dropdownRef}>
      <a
        className={isLinkActive(activeStateName)}
        href="#"
        onClick={() => {
          setActiveLink(activeStateName);
          if (onClick) onClick();
        }}
      >
        {text}
      </a>
      {children}
    </li>
  );
};
